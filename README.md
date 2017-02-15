# Project Informaton

Built by Sound in Theory

## Development setup

1. Check that you have Node.js installed: http://nodejs.org/
2. Change to project root and run these commands:
    
    ```
    sudo npm install -g grunt-cli
    sudo npm install -g bower
    npm install
    bower install
    composer install
    ```
3. To start front end dev work, run ```grunt```
4. Before deploying to production, run ```grunt dist```

## SASS Mixins

We use http://bourbon.io to provide some lightweight mixins for certain CSS features like ```transform```.

The docs for this can be found here: http://bourbon.io/docs/