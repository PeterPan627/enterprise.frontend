# Change Log

### 1.4, October 14, 2019

Fixes:

 - user.component.ts, sass, html
 - users.service.ts
 - user.store.ts
 - header.component.ts
 - pages-menu.ts
 - one-column.layout.ts
 - constants.ts

 - order.component.html, ts, sass
 - orders.module.ts

### 1.2

Fixes:
 - https://github.com/akveo/ngx-admin-bundle-support/issues/16 The "data" argument must be one of type string. 
 - https://github.com/akveo/ngx-admin-bundle-support/issues/14 order is not working correctly 
 - https://github.com/akveo/ngx-admin-bundle-support/issues/17 different concerns on ngx-admin Backend Bundle Node
 - user profile fixed
 - https://github.com/akveo/ngx-admin/pull/5491 fix merged
 - fixed issues with TS code compilation in prod mode (related to styles)
 - remove extra unused components
 - fix roles check in ACL
 - correct error handling during the app start
 - fixed sass theme variable warnings
 - add basic protractor smoke tests
 - fix layout to properly support RTL
 - fix theme saving 

Updates:
 - nebular updated to the latest version
 - ng2-smart-table version upgrade

List of Files to Update / Add for UI:
> Those who bought starter bundle - please ignore files for ecom / iot / orders

 - e2e/smoke-test/common.test.ts
 - e2e/smoke-test/ecom.e2e-spec.ts
 - e2e/smoke-test/iot.e2e-spec.ts
 - e2e/smoke-test/starter.e2e-spec.ts
 - package-lock.json
 - package.json
 - protractor.conf.js
 - src/app/@auth/components/constants.ts
 - src/app/@auth/role.provider.ts
 - src/app/@components/validation-message/validation-message.component.scss
 - src/app/@core/backend/common/api/http.service.ts
 - src/app/@core/backend/common/api/users.api.ts
 - src/app/@core/backend/common/services/users.service.ts
 - src/app/@core/backend/ecommerce/api/orders.api.ts
 - src/app/@core/backend/ecommerce/services/orders.service.ts
 - src/app/@core/backend/iot/api/traffic-aggregated.api.ts
 - src/app/@core/interfaces/common/users.ts
 - src/app/@core/interfaces/ecommerce/orders.ts
 - src/app/@core/mock/common/users.service.ts
 - src/app/@core/stores/user.store.ts
 - src/app/@theme/components/header/header.component.ts
 - src/app/@theme/components/tiny-mce/tiny-mce.component.ts
 - src/app/@theme/layouts/one-column/one-column.layout.ts
 - src/app/app.module.ts
 - src/app/pages/charts/d3/d3.component.scss
 - src/app/pages/e-commerce/progress-section/progress-section.component.scss
 - src/app/pages/orders/order/order.component.html
 - src/app/pages/orders/order/order.component.scss
 - src/app/pages/orders/order/order.component.ts
 - src/app/pages/orders/orders-table/orders-table.component.ts
 - src/app/pages/orders/orders.module.ts
 - src/app/pages/pages-menu.ts
 - src/app/pages/users/user/user.component.html
 - src/app/pages/users/user/user.component.scss
 - src/app/pages/users/user/user.component.ts
 - src/app/pages/users/users-table/users-table.component.ts
 - src/environments/environment.prod.ts
 - src/environments/environment.ts
 - src/tsconfig.app.json

### 1.1

 - Update to the latest NGX-Admin and Nebular

### 1.0

UI: 

 - Initial version containing the whole UI and Backend code
 - Auth integration, JWT token is used
 - Nebular Auth integration
 - Mock services to change api data and mock data
 - ...

Backend:

 - Initial version of solution structure
 - User Repository with Entity Framework Core data access
 - Dependency Injection
 - Async API controllers
 - Auth with JWT tokens
 - ACL and user role management
 - ...
