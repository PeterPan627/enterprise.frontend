import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import {
  NB_AUTH_OPTIONS,
  NbAuthSocialLink,
  NbAuthService,
  NbAuthResult,
} from "@nebular/auth";
import { AppService } from "../../../@services/app.service";
import { AuthService } from "../../../@services/auth.service";
import { getDeepFromObject } from "../../helpers";
import { EMAIL_PATTERN } from "../constants";

@Component({
  selector: "ngx-whitelist-login-register",
  styleUrls: ["./whitelist-login-register.component.scss"],
  templateUrl: "./whitelist-login-register.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxWhiteListLoginRegisterComponent implements OnInit {
  minLength: number = this.getConfigValue(
    "forms.validation.password.minLength"
  );
  maxLength: number = this.getConfigValue(
    "forms.validation.password.maxLength"
  );
  isEmailRequired: boolean = this.getConfigValue(
    "forms.validation.email.required"
  );
  isPasswordRequired: boolean = this.getConfigValue(
    "forms.validation.password.required"
  );
  redirectDelay: number = this.getConfigValue("forms.register.redirectDelay");
  showMessages: any = this.getConfigValue("forms.register.showMessages");
  strategy: string = this.getConfigValue("forms.register.strategy");
  socialLinks: NbAuthSocialLink[] = this.getConfigValue(
    "forms.login.socialLinks"
  );

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};

  registerForm: FormGroup;
  constructor(
    protected service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) protected options = {},
    protected cd: ChangeDetectorRef,
    private fb: FormBuilder,
    private authService: AuthService,
    protected router: Router,
    private appService: AppService
  ) {}

  get email() {
    return this.registerForm.get("email");
  }

  get password() {
    return this.registerForm.get("password");
  }

  get confirmPassword() {
    return this.registerForm.get("confirmPassword");
  }

  ngOnInit(): void {
    const user = this.appService.getUser();
    if (!user) {
      this.router.navigate(["/auth/login"]);
    }
    this.user = user;

    const emailValidators = [Validators.pattern(EMAIL_PATTERN)];
    this.isEmailRequired && emailValidators.push(Validators.required);

    const passwordValidators = [
      Validators.minLength(this.minLength),
      Validators.maxLength(this.maxLength),
    ];
    this.isPasswordRequired && passwordValidators.push(Validators.required);

    this.registerForm = this.fb.group({
      email: this.fb.control(user.email, [...emailValidators]),
      password: this.fb.control("", [...passwordValidators]),
      ...(!user.registered && {
        confirmPassword: this.fb.control("", [...passwordValidators]),
      }),
    });
  }

  register(): void {
    const { password } = this.registerForm.value;
    this.authService.registerWhitelist(this.user.hash, password).subscribe({
      next: (data) => {
        console.log("success", data);
        this.appService.setLogged(true);
        this.router.navigate(["/pages"]);
      },
      error: (err) => {
        console.log("fail", err);
      },
    });
  }

  login(): void {
    const { password } = this.registerForm.value;
    this.authService.loginWhitelist(this.user.hash, password).subscribe({
      next: (data) => {
        this.appService.setLogged(true);
        this.router.navigate(["/pages"]);
      },
      error: (err) => {
        console.log("fail", err);
      },
    });
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.options, key, null);
  }
}
