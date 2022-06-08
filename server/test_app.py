import pytest

def test_index(api):
    res = api.get("/")
    assert res.status_code == 200
    
def test_validate(api):
    res = api.get("/validate")

