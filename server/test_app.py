import pytest
import json

#################
# testing app.py

def test_index(api):
    res = api.get("/")
    assert res.status_code == 200
    
def test_validate(api):
    res = api.get("/validate")
    # how to test session?
    
def test_register(api):
    #bad passing
    bad_email = {
        "baddata": "hello"
        }
    mail = api.post("/register", json=bad_email)
    assert mail.status_code == 400
    bad_user = {
        "email" : "test@test.com",
        "usernamess" : "test",
        "password" : "password"
    }
    user = api.post("/register", json=bad_user)
    assert user.status_code == 400
    bad_pwd = {
        "email" : "test@test.com",
        "username" : "test",
        "passwordsss" : "password"
    }
    pwd = api.post("/register", json=bad_pwd)
    assert pwd.status_code == 400
    #good passing
    good_data = {
        "email": "ws@w.com",
        "username": "userss",
        "password": "secret"
    }
    res = api.post("/register", json=good_data)
    assert res.status_code == 201
    #exeption passing the same data again
    newres = api.post("/register", json=good_data)
    assert res.status_code == 400

def test_login(api):
    bad_email = {
        "password": "pwxd"
    }
    nomail = api.post("/login", json=bad_email)
    assert nomail.status_code == 400
    #good input
    good_input = {
        "email": "ws@w.com",
        "username": "userss",
        "password": "secret"
    }
    res = api.post("/login", json=good_input)
    assert res.status_code == 200
    # still needs to be tested

def test_all_server_execption(api, mock_data):
    res = api.post("/users", data=mock_data)
    assert res.status_code == 500
    #lots more to be tested

def test_get_user_exeption(api, mock_data):
    res = api.post("/users/<username>", data=mock_data)
    assert res.status_code == 404

def test_page_not_found(api):
    res = api.get("/randompagethatdoesnotexist")
    assert res.status_code == 404

def test_method_not_allowed(api):
    res = api.post("/randompagethatdoesnotexist")
    assert res.status_code == 405
    
#################
# testing user.py



#######################
# testing decorators.py

def test_autenticate():
    auth = {"username": None}
    