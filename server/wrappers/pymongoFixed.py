from flask_pymongo import PyMongo

class PyMongoFixed(PyMongo):
    """A small magic trick Class that functions as a Wrapper for PyMongo.
    Overwrites a broken flask_pymongo 2.3.0 function to fetch image data from
    the database. See https://github.com/dcrosta/flask-pymongo/issues/153
    to learn more.
    """

    def __init__(self, app=None, uri=None, *args, **kwargs):
        super().__init__(app, uri, *args, **kwargs)
        self.text_type = str
        self.num_type = int


    def send_file(self, filename, base="fs", version=-1, cache_for=31536000):
        """Respond with a file from GridFS.
        Returns an instance of the :attr:`~flask.Flask.response_class`
        containing the named file, and implement conditional GET semantics
        (using :meth:`~werkzeug.wrappers.ETagResponseMixin.make_conditional`).
        .. code-block:: python
            @app.route("/uploads/<path:filename>")
            def get_upload(filename):
                return mongo.send_file(filename)
        :param str filename: the filename of the file to return
        :param str base: the base name of the GridFS collections to use
        :param bool version: if positive, return the Nth revision of the file
           identified by filename; if negative, return the Nth most recent
           revision. If no such version exists, return with HTTP status 404.
        :param int cache_for: number of seconds that browsers should be
           instructed to cache responses
        """
        from flask import abort, current_app, request
        from gridfs import GridFS, NoFile
        from werkzeug.wsgi import wrap_file

        if not isinstance(base, self.text_type):
            raise TypeError("'base' must be string or unicode")
        if not isinstance(version, self.num_type):
            raise TypeError("'version' must be an integer")
        if not isinstance(cache_for, self.num_type):
            raise TypeError("'cache_for' must be an integer")

        storage = GridFS(self.db, base)

        try:
            fileobj = storage.get_version(filename=filename, version=version)
        except NoFile:
            abort(404)

        # mostly copied from flask/helpers.py, with
        # modifications for GridFS
        data = wrap_file(request.environ, fileobj, buffer_size=1024 * 255)
        response = current_app.response_class(
            data,
            mimetype=fileobj.content_type,
            direct_passthrough=True,
        )
        response.content_length = fileobj.length
        response.last_modified = fileobj.upload_date
        response.cache_control.max_age = cache_for
        response.cache_control.public = True
        response.make_conditional(request)
        return response