# Team Horizon website

[![Build Status](https://travis-ci.org/TeamHrz/website.svg?branch=master)](https://travis-ci.org/TeamHrz/website)

A simple [Flask](http://flask.pocoo.org/) based web app.

## Requirements

 * Python 3.4+
 * Flask 0.11
 * Node.JS runtime and Grunt CLI (for building static files)
 
## Installation

Install Python packages:

    $ pip install -r requirements.txt
    
Install front-end dependencies:

    $ npm install .
    
Build static files:
    
    # For development environment
    $ grunt
    
    # For production
    $ grunt production
    
## Configuration and running

Copy the example configuration file and edit the values within accordingly:

    $ cp hrz/conf.example.py hrz/conf.py && $EDITOR hrz/conf.py
    
In case you want to store the config file elsewhere, you can set an environment variable with it's path:

    $ export HRZ_CONFIG=path/to/conf.py
    
Run the server:

    $ python hrz/hrz.py
    
For production mode, see [Deployment options](http://flask.pocoo.org/docs/0.11/deploying/#deployment).

## Development and testing

Install testing dependencies:

    $ pip install -r requirements-test.txt

If you work on the front-end, make sure you have Grunt running in the background so the development static files are built for you 
dynamically:

    # Prebuild static files and start watching
    $ grunt && grunt watch

Run tests with:

    $ nosetests --with-coverage --cover-package=hrz 