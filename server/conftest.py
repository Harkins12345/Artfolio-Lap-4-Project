import pytest
from app import app

@pytest.fixture
def api():
    return app.test_client()

@pytest.fixture
def mock_data():
    return {
        "email": "testxd@gmail.com",
        "username": "texterxd",
        "display_username": "testerxd"
    }
    