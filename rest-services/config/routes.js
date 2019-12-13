/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
    /*
        Login Logout related routes
    */
    'POST /api/login': 'AuthController.login',
    '/api/logout': 'AuthController.logout',
    
    /*
        Default Route
    */
    'get /': '/api/assets/hardware',

    /*
        Department related routes
    */
   'get /api/departments': 'DepartmentController.get',
   'post /api/departments': 'DepartmentController.create',
   'put /api/departments': 'DepartmentController.update',
   'delete /api/departments': 'DepartmentController.delete',

   /*
        Product related routes
    */
   'get /api/products': 'ProductController.get',
   'post /api/products': 'ProductController.create',
   'put /api/products': 'ProductController.update',
   'delete /api/products': 'ProductController.delete',
    
    /*
        Users related routes
    */
    'get /api/users': 'UserController.get',
    'post /api/users': 'UserController.create',
    'put /api/users': 'UserController.update',
    'delete /api/users': 'UserController.delete',

    /*
        Assets Related Routes
    */
    'get /api/assets': '/api/assets/hardware',
    'get /api/assets/hardware': 'AssetHardwareController.get',
    'post /api/assets/hardware': 'AssetHardwareController.create',
    'put /api/assets/hardware': 'AssetHardwareController.update',
    'delete /api/assets/hardware': 'AssetHardwareController.delete'
};
