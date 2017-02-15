# Project Informaton

Built by Sound in Theory

## Fresh Installation

1. Copy this project to a new directory
2. Run these commands in the project root:
    
    ```
    composer install
    php oil r cmf:install
    ```

## Existing Project Installation

1. Create local DB and check that the settings are correct in `fuel/app/config/development/db.php`
2. Run `composer install`
3. If your database already has data in it, you are finished
4. If you are starting from a blank database, run `php oil r migrate` to create the DB structure
5. Now you have a blank database, run `php oil r cmf:createSuperUser` to create a user with admin access

## Front End Development

1. Check that you have Node.js installed: http://nodejs.org/
2. Change to project root and run these commands:
    
    ```
    sudo npm install -g grunt-cli
    sudo npm install -g bower
    npm install
    bower install
    ```
3. To start front end dev work, run ```grunt dev```
4. Before deploying to production, run ```grunt dist```

## SASS Mixins

We use http://bourbon.io to provide some lightweight mixins for certain CSS features like ```transform```.

The docs for this can be found here: http://bourbon.io/docs/