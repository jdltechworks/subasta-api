module.exports = function bluePrintRouteListener(sails) {
   return {
      routes : {
        after: {
        'GET /api/v1/product': function(req, res, next) {
            next();
          }
        }
      }
   };
}