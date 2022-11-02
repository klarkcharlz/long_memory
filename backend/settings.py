import configparser
import os


CONF_PATH = f'{os.path.dirname(__file__)}/config.ini'
assert os.path.exists(CONF_PATH), 'Не найден файл конфигурации'

CONFIG = configparser.ConfigParser()
CONFIG.read(CONF_PATH)


# ---DB---#
DATABASE_URL = f'postgresql+psycopg2://{CONFIG["DB"]["DB_USER"]}:{CONFIG["DB"]["DB_PASS"]}' \
               f'@{CONFIG["DB"]["DB_HOST"]}:{CONFIG["DB"]["DB_PORT"]}/{CONFIG["DB"]["DB_NAME"]}'
print(DATABASE_URL)