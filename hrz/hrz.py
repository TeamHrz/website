import flask

__author__ = "Pundurs"

# Init app and load config
app = flask.Flask(__name__)
app.config.from_envvar('HRZ_CONFIG')


@app.route('/')
def index():
    return flask.render_template('index.html')

if __name__ == '__main__':
    app.run()
