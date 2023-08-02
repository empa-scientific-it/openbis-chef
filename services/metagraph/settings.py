from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    openbis_url: str
    openbis_port: int
    openbis_password: str
    openbis_user: str