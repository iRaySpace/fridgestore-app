import importlib
from contextlib import contextmanager
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, Session
from database.base import Base


_engine = create_engine('sqlite:///:memory:', echo=True)
_session_local = sessionmaker(bind=_engine)

def discover_models():
    modules = ['fridge_item']
    for module_name in modules:
        try:
            importlib.import_module(f'{module_name}.models')
        except ImportError:
            pass

def init_database():
    discover_models()
    Base.metadata.create_all(_engine)

def get_session() -> Session:
    return _session_local()

@contextmanager
def transactional():
    session = _session_local()
    try:
        yield session
        session.commit()
    except Exception:
        session.rollback()
        raise
    finally:
        session.close()
