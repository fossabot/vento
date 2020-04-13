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
  'get /': '/api/assets',

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
  'post /api/notifications/multiDelete': 'NotificationController.deleteMulti',

  /*
      Hardware / Software Assets Related Routes
  */
  'get /api/assets': 'AssetController.get',
  'get /api/assets/:id': 'AssetController.getById',
  'post /api/assets': 'AssetController.create',
  'put /api/assets/:id': 'AssetController.update',
  'delete /api/assets/:id': 'AssetController.delete',
  'post /api/assets/multiDelete': 'AssetController.deleteMulti',

  /*
     Hardware / Software Assets Related Routes
 */
  'get /api/assetnotificationmap': 'AssetNotificationMapController.get',
  'get /api/assetnotificationmap/:id': 'AssetNotificationMapController.getById',
  'post /api/assetnotificationmap': 'AssetNotificationMapController.create',
  'put /api/assetnotificationmap/:id': 'AssetNotificationMapController.update',
  'delete /api/assetnotificationmap/:id': 'AssetNotificationMapController.delete',
  'post /api/assetnotificationmap/multiDelete': 'AssetNotificationMapController.deleteMulti',

  /*
    Asset-Consumer Related Routes
   */
  'get /api/assetconsumermap': 'AssetConsumerMapController.get',
  'get /api/assetconsumermap/:id': 'AssetConsumerMapController.getById',
  'post /api/assetconsumermap': 'AssetConsumerMapController.create',
  'put /api/assetconsumermap/:id': 'AssetConsumerMapController.update',
  'delete /api/assetconsumermap/:id': 'AssetConsumerMapController.delete',
  'post /api/assetconsumermap/multiDelete': 'AssetConsumerMapController.deleteMulti',

  /*
      Audit Related Routes
  */
  'get /api/audit': 'AuditController.get',
  'post /api/audit': 'AuditController.create',
};
