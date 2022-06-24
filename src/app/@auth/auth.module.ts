import { NgModule, ModuleWithProviders } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpRequest } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import {
  NbAuthJWTInterceptor,
  NbAuthModule,
  NB_AUTH_TOKEN_INTERCEPTOR_FILTER,
  NbTokenLocalStorage,
} from "@nebular/auth";
import { AuthInterceptor } from "./auth.interceptor";
import { AuthGuard } from "./guards/auth.guard";
import { AdminGuard } from "./guards/admin.guard";
import { AuthPipe } from "./auth.pipe";
import { RoleProvider } from "./role.provider";
import { NbRoleProvider, NbSecurityModule } from "@nebular/security";

import {
  NgxLoginComponent,
  NgxAuthComponent,
  NgxRegisterComponent,
  NgxWhiteListLoginRegisterComponent,
} from "./components";

import {
  NbAlertModule,
  NbCardModule,
  NbIconModule,
  NbLayoutModule,
  NbCheckboxModule,
  NbInputModule,
  NbButtonModule,
} from "@nebular/theme";
import { AuthRoutingModule } from "./auth-routing.module";
import { ComponentsModule } from "../@components/components.module";
import { authOptions } from "./auth.settings";
import { authSettings } from "./access.settings";
import { UserGuard } from "./guards/user.guard";
import { ManagerGuard } from "./guards/manager.guard";
import { RegionalAdminGuard } from "./guards/regional.guard";
import { LeadershipAdminGuard } from "./guards/leadership.guard";
import { SuperAdminGuard } from "./guards/super_admin.guard";
import { GlobalAdminGuard } from "./guards/global_admin.guard";
import { DevGuard } from "./guards/dev.guard";

const GUARDS = [
  DevGuard,
  AuthGuard,
  UserGuard,
  ManagerGuard,
  RegionalAdminGuard,
  LeadershipAdminGuard,
  AdminGuard,
  SuperAdminGuard,
  GlobalAdminGuard,
];
const PIPES = [AuthPipe];
const COMPONENTS = [
  NgxLoginComponent,
  NgxAuthComponent,
  NgxRegisterComponent,
  NgxWhiteListLoginRegisterComponent,
];

const NB_MODULES = [
  NbIconModule,
  NbLayoutModule,
  NbCardModule,
  NbAlertModule,
  NbCheckboxModule,
  NbInputModule,
  NbButtonModule,
];

export function filterInterceptorRequest(req: HttpRequest<any>): boolean {
  return [
    "/auth/login",
    "/auth/sign-up",
    "/auth/request-pass",
    "/auth/refresh-token",
  ].some((url) => req.url.includes(url));
}

@NgModule({
  declarations: [...PIPES, ...COMPONENTS],
  imports: [
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ComponentsModule,
    ...NB_MODULES,
    NbAuthModule.forRoot(authOptions),
  ],
  exports: [...PIPES],
  providers: [
    NbSecurityModule.forRoot({
      accessControl: authSettings,
    }).providers,
    {
      provide: NbRoleProvider,
      useClass: RoleProvider,
    },
    {
      provide: NbTokenLocalStorage,
      useClass: NbTokenLocalStorage,
    },
    ...PIPES,
  ],
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [
        {
          provide: NB_AUTH_TOKEN_INTERCEPTOR_FILTER,
          useValue: filterInterceptorRequest,
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: NbAuthJWTInterceptor,
          multi: true,
        },
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        ...GUARDS,
      ],
    };
  }
}
