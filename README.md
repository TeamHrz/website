# Team Horizon website

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
    
    ```sh
    # For development environment
    $ grunt
    
    # For production
    $ grunt production
    ```
    
## Configuration and running

Copy the example configuration file and edit the values within accordingly:

    $ cp hrz/conf.example.py hrz/conf.py && $EDITOR hrz/conf.py
    
Set the environment variable for the config file and run the server:

    $ export HRZ_CONFIG=conf.py; python hrz/hrz.py
    
For production mode, see [Deployment options](http://flask.pocoo.org/docs/0.11/deploying/#deployment).