import flask

__author__ = "Pundurs"

# Init app and load config
app = flask.Flask(__name__)
try:
    app.config.from_envvar('HRZ_CONFIG')
except RuntimeError:
    app.config.from_pyfile('conf.py')


@app.route('/')
def index():
    return flask.render_template('index.html')

if __name__ == '__main__':   # pragma: no cover
    app.run()
