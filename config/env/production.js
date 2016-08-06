/**
 * Production environment settings
 *
 * This file can include shared settings for a production environment,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

  host: process.env.OPENSHIFT_NODEJS_IP,
  port: process.env.OPENSHIFT_NODEJS_PORT,


  // Show server errors
  keepResponseErrors: true,

  /***************************************************************************
   * Set the default database connection for models in the production        *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/
  connections: {
    productionMongodbServer: {
      adapter: 'sails-mongo',
      url: process.env.MONGODB_URL,
      database: 'jdl-app'
    }
  },
  models: {
     connection: 'productionMongodbServer',
     migrate: 'alter'
  },
  session: {
   /***************************************************************************
    *                                                                          *
    * Uncomment the following lines to use your Mongo adapter as a session     *
    * store                                                                    *
    *                                                                          *
    ***************************************************************************/
    adapter: 'connect-mongo',
    //host: 'localhost',
    //port: 27017,
    db: 'sails',
    collection: 'token',

    /***************************************************************************
    *                                                                          *
    * Optional Values:                                                         *
    *                                                                          *
    * # Note: url will override other connection settings url:                 *
    * 'mongodb://user:pass@host:port/database/collection',                     *
    *                                                                          *
    ***************************************************************************/
    url: process.env.MONGODB_URL + 'app',

    // username: '',
    // password: '',
    auto_reconnect: false,
    ssl: false,
    stringify: false
  }
  /***************************************************************************
   * Set the port in the production environment to 80                        *
   ***************************************************************************/

  //port: 8080,

  /***************************************************************************
   * Set the log level in production environment to "silent"                 *
   ***************************************************************************/
  // log: {
  //   level: "silent"
  // }
};
