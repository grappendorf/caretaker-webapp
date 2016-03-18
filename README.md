Caretaker Smart Home Web App
============================

This is the frontend component of the Caretaker Smart Home system.


Deployment
----------

### Run the web app on the development host

* Install Node.js for the production user
* Run npm install --production to install Node packages
* Run ./bin/bower install --production to install Bower packages
* Start the server with `./bin/grunt`

This builds the web app into the _public_ directory and starts a web server on port 8000.

## Run the server inside a Docker container

* Build the container image with `./bin/build-webapp` (the resulting image is named
  _grappendorf/caretaker-webapp_ and tagged with _latest_ and the current version number) 
* Create a new network with `docker network create caretaker` 
* Then start the container with `bin/start-webapp`

This script runs a new Docker container with the previously built image and binds port 8000 to 
the development host.

## Verify that the web app server responds to HTTP requests

Point your browser to _http://localhost:8000_. The web app should pop up and ask for login
credentials.


Test
----

### Run the tests on the development host

* Execute all steps as described in the development section below, but don't start the server
* Run the web component tests (Web Component Tester) with `./bin/grunt test-wct` 
* Run the feature tests (Cucumber) with `./bin/grunt test-cucumber` 
* Or run all tests with `./bin/grunt test-all` 

### Run the test in a Docker container

...


Development
-----------

### Prerequisites
 
* Node.js installed for the development user
* Run npm install to install Node packages
* Run ./bin/bower install to install Bower packages

### Run a web server and a file watcher which rebuilds the web app 

`./bin/grunt`

This builds the web app into directory _public_ and starts a web server on port 8000. Whenever
a project file is modified, the web application is updated. 

## Run the server inside a Docker container

Note: This only works if the development user on the host has the same user id (1000) as the
user in the Docker container.

* Build the container image with `./bin/build-workspace` (the resulting image is tagged with
  _grappendorf/caretaker-webapp:workspace_)
* Create a new network with `docker network create caretaker` 
* Then start the workspace with `bin/start-workspace`

This script runs a new Docker container with the previously built image and binds port 8000 to 
the development host. It executes `./bin/grunt' which starts a web server on port 8000. Whenever
a project file is modified, the web application is updated.

Pressing 'Ctrl+C' terminates the container process and deletes the container.


License
-------

The Caretaker Web App code is licensed under the MIT license.
You find the license in the attached LICENSE file.


3d Party Software and Graphics
------------------------------

A list of the used 3d party software and graphics can be found in the file 3DPARTY.md.
