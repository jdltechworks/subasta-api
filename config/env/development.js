/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

  host: 'localhost',
  port: 8000,
  publicFiles: '//localhost:8000/assets/files',

  /***************************************************************************
   * Set the default database connection for models in the development       *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/
  connections: {
		localMongodbServer: {
	  	adapter: 'sails-mongo',
	  	url: 'mongodb://127.0.0.1:27017/subasta'
	  }
  },
  models: {
     connection: 'localMongodbServer',
     migrate: 'drop'
  },
  session: {
   /***************************************************************************
    *                                                                          *
    * Uncomment the following lines to use your Mongo adapter as a session     *
    * store                                                                    *
    *                                                                          *
    ***************************************************************************/
    adapter: 'connect-mongo',
    // host: 'localhost',
    // port: 27017,
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
    url: 'mongodb://127.0.0.1:27017/session',

    // username: '',
    // password: '',
    auto_reconnect: false,
    ssl: false,
    stringify: false
  }

};
