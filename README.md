**MicroDG -  Client-UI **

Author: *David Brady*
Date:   *25/04/2016*

An AngularJS Interface for interacting with the suite of Microservices


To run this service locally:

[NOTE] For best results download an in browser http server such as 200 Ok Web Server from Chrome
add the source directory to the web server and serve up the UI on port 8888.

[NOTE] You will need to have all constituent microservices running

To conduct End-to-End (E2E) browser tests using Protractor

* In a terminal window, start up the webdriver server
'''
webdriver-manager start
'''

* In a seperate terminal window, run the e2e tests
'''
protractor conf.js
'''