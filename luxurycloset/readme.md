#Start configurables

#PRODUCTION MODE
Path: index.php

Set define('ENVIRONMENT', 'production');


#ENCRYPTION KEY

Path: /application/config/config.php
Set encryption key $config['encryption_key'] = '';


#DATABASE CONNECTION

Path: /application/config/database.php
1. Set $active_group = 'live';
2. Set the following $db['live'] indeces - hostname, username, password and database
3. Set db_debug = false;


#REST

Path: /application/config/constants.php
1. Set rest user name define('HTTP_I4_USER', '');
2. Set rest user password define('HTTP_I4_PASS', '');

Path: /application/config/rest.php
1. Set authentication login type, either "digest" or "basic" $config['rest_auth'] = '';
2. Set database group, should be the same as $active_group above, $config['rest_database_group'] = 'live';
3. Enable api logging $config['rest_enable_logging'] = true; 

Path: /application/core/MY_Controller.php
Whatever login type is set above, make sure it's the same as the on set in the constructor (http_auth' => '')


#DBV
If there are changes in the database, run superdbv.

Option 1 (via CLI)
    php index.php superdbv

Option 2 (via browser)
1. Open /application/config/cms_config.php
2. Enable access via browser set $config['dbv_browser_enabled'] = true;
3. Open domain.com/index.php/superdbv in browser.
4. Disable dbv access via browser set $config['dbv_browser_enabled'] = false;


#ERROR LOGGING

Path: /application/config/config.php
Set $config['log_threshold'] = 1;

Important: Make sure /application/logs/ is writable.

#End 

# [Purple Fountain](https://git.i4asiacorp.com/i4-asia/purplefountain.git)

Purple Fountain

Static website

## Table of contents

- [Template Notes](#template-notes)
- [Developer Notes](#developer-notes)
- [Google Analytics](#google-analytics)
- [Database Configuration](#database-configuration)
- [Email Addresses](#email-addresses)


## Template Notes
Access template files on the template folder. 

### Developer Notes
Insert developer notes and config variables here

### Google Analytics
Make sure to put the live tracking code upon deployment

### Database Configuration
Add Database configuration here

### Email Addresses
Add email addresses here











