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
    'post /api/login': 'AuthController.login',
    'post /api/logout': 'AuthController.logout',
    
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
        Role-Permission related routes
    */
    'get /api/role-permission-map': 'RolePermissionMapController.get',
    'get /api/role-permission-map/:id': 'RolePermissionMapController.getById',
    'post /api/role-permission-map': 'RolePermissionMapController.create',
    'put /api/role-permission-map/:id': 'RolePermissionMapController.update',
    'delete /api/role-permission-map/:id': 'RolePermissionMapController.delete',
    'post /api/role-permission-map/multiDelete': 'RolePermissionMapController.deleteMulti',

    /*
        Users related routes
    */
    'get /api/users': 'UserController.get',
    'get /api/users/:id': 'UserController.getById',
    'post /api/users': 'UserController.create',
    'put /api/users/:id': 'UserController.update',
    'delete /api/users/:id': 'UserController.delete',
    'post /api/users/multiDelete': 'UserController.deleteMulti',

    /*
        Notifications related routes
    */
   'get /api/notifications': 'NotificationController.get',
   'get /api/notifications/:id': 'NotificationController.getById',
   'post /api/notifications': 'NotificationController.create',
   'put /api/notifications/:id': 'NotificationController.update',
   'delete /api/notifications/:id': 'NotificationController.delete',

    /*
        Hardware Assets Related Routes
    */
    'get /api/assets': '/api/assets/hardware',
    'get /api/assets/hardware': 'HardwareAssetController.get',
    'get /api/assets/hardware/:id': 'HardwareAssetController.getById',
    'post /api/assets/hardware': 'HardwareAssetController.create',
    'put /api/assets/hardware/:id': 'HardwareAssetController.update',
    'delete /api/assets/hardware/:id': 'HardwareAssetController.delete',
    'post /api/assets/hardware/multiDelete': 'HardwareAssetController.deleteMulti',

    /*
        Software Assets Related Routes
    */
   'get /api/assets/software': 'SoftwareAssetController.get',
   'get /api/assets/software/:id': 'SoftwareAssetController.getById',
   'post /api/assets/software': 'SoftwareAssetController.create',
   'put /api/assets/software/:id': 'SoftwareAssetController.update',
   'delete /api/assets/software/:id': 'SoftwareAssetController.delete',
   'post /api/assets/software/multiDelete': 'SoftwareAssetController.deleteMulti',
   
    /*
        Audit Related Routes
    */
   'get /api/audit': 'AuditController.get',
   'post /api/audit': 'AuditController.create',
};
