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
  selector: "ngx-register",
  styleUrls: ["./register.component.scss"],
  templateUrl: "./register.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxRegisterComponent implements OnInit {
  isFirstNameRequired: boolean = this.getConfigValue(
    "forms.validation.firstName.required"
  );
  isLastNameRequired: boolean = this.getConfigValue(
    "forms.validation.lastName.required"
  );
  isEmailRequired: boolean = this.getConfigValue(
    "forms.validation.email.required"
  );
  isEntityIdRequired: boolean = this.getConfigValue(
    "forms.validation.entityId.required"
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
    private appService: AppService,
    protected router: Router
  ) {}

  get firstName() {
    return this.registerForm.get("firstName");
  }
  get lastName() {
    return this.registerForm.get("lastName");
  }
  get email() {
    return this.registerForm.get("email");
  }
  get entityId() {
    return this.registerForm.get("entityId");
  }

  ngOnInit(): void {
    const firstNameValidators = [];
    this.isFirstNameRequired && firstNameValidators.push(Validators.required);

    const lastNameValidators = [];
    this.isLastNameRequired && lastNameValidators.push(Validators.required);

    const emailValidators = [Validators.pattern(EMAIL_PATTERN)];
    this.isEmailRequired && emailValidators.push(Validators.required);

    const entityIdValidators = [];
    this.isEntityIdRequired && entityIdValidators.push(Validators.required);

    this.registerForm = this.fb.group({
      firstName: this.fb.control("", [...firstNameValidators]),
      lastName: this.fb.control("", [...lastNameValidators]),
      email: this.fb.control("", [...emailValidators]),
      entityId: this.fb.control("", [...entityIdValidators]),
    });
  }

  register(): void {
    this.user = this.registerForm.value;
    this.errors = this.messages = [];
    this.submitted = true;

    const { firstName, lastName, email, entityId } = this.user;
    const storedObjectString = window.localStorage.getItem("account-info");
    const storedObject = storedObjectString
      ? JSON.parse(storedObjectString)
      : null;

    this.authService
      .register(
        firstName,
        lastName,
        email,
        entityId,
        storedObject.address,
        storedObject.hash
      )
      .subscribe({
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

  getConfigValue(key: string): any {
    return getDeepFromObject(this.options, key, null);
  }
}
