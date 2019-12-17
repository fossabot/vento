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
   'get /api/products/:id': 'ProductController.getById',
   'post /api/products': 'ProductController.create',
   'put /api/products/:id': 'ProductController.update',
   'delete /api/products/:id': 'ProductController.delete',
   'post /api/products/multiDelete': 'ProductController.deleteMulti',

   /*
        Roles related routes
    */
   'get /api/roles': 'RoleController.get',
   'get /api/roles/:id': 'RoleController.getById',
   'post /api/roles': 'RoleController.create',
   'put /api/roles/:id': 'RoleController.update',
   'delete /api/roles/:id': 'RoleController.delete',
   'post /api/roles/multiDelete': 'RoleController.deleteMulti',

   /*
        Permission related routes
    */
   'get /api/permissions': 'PermissionController.get',
   'get /api/permissions/:id': 'PermissionController.getById',
   'post /api/permissions': 'PermissionController.create',
   'put /api/permissions/:id': 'PermissionController.update',
   'delete /api/permissions/:id': 'PermissionController.delete',
   'post /api/permissions/multiDelete': 'PermissionController.deleteMulti',
    
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
