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
   'get /api/departments/:id': 'DepartmentController.getById',
   'post /api/departments': 'DepartmentController.create',
   'put /api/departments/:id': 'DepartmentController.update',
   'delete /api/departments/:id': 'DepartmentController.delete',
   'post /api/departments/multiDelete': 'DepartmentController.deleteMulti',

   /*
        Product related routes
    */
   'get /api/products': 'ProductController.get',
   'post /api/products': 'ProductController.create',
   'put /api/products': 'ProductController.update',
   'delete /api/products': 'ProductController.delete',

   /*
        Roles related routes
    */
   'get /api/roles': 'RoleController.get',
   'post /api/roles': 'RoleController.create',
   'put /api/roles': 'RoleController.update',
   'delete /api/roles': 'RoleController.delete',

   /*
        Permission related routes
    */
   'get /api/permissions': 'PermissionController.get',
   'post /api/permissions': 'PermissionController.create',
   'put /api/permissions': 'PermissionController.update',
   'delete /api/permissions': 'PermissionController.delete',
    
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
    'get /api/assets/hardware': 'HardwareAssetsController.get',
    'post /api/assets/hardware': 'HardwareAssetsController.create',
    'put /api/assets/hardware': 'HardwareAssetsController.update',
    'delete /api/assets/hardware': 'HardwareAssetsController.delete'
};
