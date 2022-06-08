import pytest
from app import app

@pytest.fixture
def api():
    return app.test_client()