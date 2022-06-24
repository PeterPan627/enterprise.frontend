import { NbMenuItem } from "@nebular/theme";
import { Observable, of } from "rxjs";
import { Injectable } from "@angular/core";
import { ConfigurationService } from "../@services/configuration.service";
import { NbRoleProvider } from "@nebular/security";
import { ROLES } from "../@auth/roles";
import { FEATURES } from "../@core/features";
import { AppService } from "../@services/app.service";

@Injectable()
export class PagesMenu {
  constructor(
    private configService: ConfigurationService,
    private roleProvider: NbRoleProvider,
    private appService: AppService
  ) {}

  private readonly ProviderDashboardMenu: NbMenuItem[] = [
    {
      title: "Dashboard Executive",
      icon: "home-outline",
      link: "/pages/insurance-dashboard",
      home: true,
      children: undefined,
    },
    {
      title: "Dashboard User",
      icon: "home-outline",
      link: "/pages/law-ada-dashboard",
      children: undefined,
    },
  ];

  private readonly InsuranceDashboardMenu: NbMenuItem[] = [
    {
      title: "Dashboard Executive",
      icon: "home-outline",
      link: "/pages/insurance-dashboard",
      home: true,
      children: undefined,
    },
    {
      title: "Dashboard User",
      icon: "home-outline",
      link: "/pages/law-ada-dashboard",
      children: undefined,
    },
  ];

  private readonly MortgageDashboardMenu: NbMenuItem[] = [
    {
      title: "Dashboard Executive",
      icon: "home-outline",
      link: "/pages/insurance-dashboard",
      home: true,
      children: undefined,
    },
    {
      title: "Dashboard User",
      icon: "home-outline",
      link: "/pages/law-ada-dashboard",
      children: undefined,
    },
  ];

  private readonly LawDashboardMenu: NbMenuItem[] = [
    {
      title: "Dashboard Executive",
      icon: "home-outline",
      link: "/pages/insurance-dashboard",
      home: true,
      children: undefined,
    },
    {
      title: "Dashboard User",
      icon: "home-outline",
      link: "/pages/law-ada-dashboard",
      children: undefined,
    },
  ];

  private readonly modulesHeader: NbMenuItem[] = [
    {
      title: "MODULES",
      group: true,
    },
  ];

  private readonly providerMenu: NbMenuItem[] = [
    {
      title: "Contacts",
      icon: {
        icon: "id-badge",
        pack: "fa",
      },
      link: "/pages/crm/list",
    },
    {
      title: "Patients",
      icon: {
        icon: "notes-medical",
        pack: "fa",
      },
      link: "/pages/patients/list",
    },
  ];

  private readonly insuranceAdminMenu: NbMenuItem[] = [
    {
      title: "New Clients",
      icon: {
        icon: "exclamation",
        pack: "fa",
      },
      link: "/pages/clients/new",
    },
  ];

  private readonly insuranceMenu: NbMenuItem[] = [
    {
      title: "Clients",
      icon: {
        icon: "id-badge",
        pack: "fa",
      },
      link: "/pages/clients/list",
    },
    {
      title: "Contacts",
      icon: {
        icon: "address-book",
        pack: "fa",
      },
      link: "/pages/contacts/list",
    },
    {
      title: "Accounts",
      icon: {
        icon: "building",
        pack: "fa",
      },
      link: "/pages/accounts/list",
    },
  ];

  private readonly mortgageMenu: NbMenuItem[] = [
    {
      title: "Clients",
      icon: {
        icon: "id-badge",
        pack: "fa",
      },
      link: "/pages/clients/list",
    },
    {
      title: "Contacts",
      icon: {
        icon: "address-book",
        pack: "fa",
      },
      link: "/pages/contacts/list",
    },
    {
      title: "Accounts",
      icon: {
        icon: "building",
        pack: "fa",
      },
      link: "/pages/accounts/list",
    },
  ];

  private readonly lawMenu: NbMenuItem[] = [
    {
      title: "Clients",
      icon: {
        icon: "id-badge",
        pack: "fa",
      },
      link: "/pages/clients/list",
    },
    {
      title: "Contacts",
      icon: {
        icon: "address-book",
        pack: "fa",
      },
      link: "/pages/contacts/list",
    },
    {
      title: "Accounts",
      icon: {
        icon: "building",
        pack: "fa",
      },
      link: "/pages/accounts/list",
    },
  ];

  private readonly adminMenu: NbMenuItem[] = [
    {
      title: "Users",
      icon: {
        icon: "user",
        pack: "fa",
      },
      link: "/pages/user-list",
    },
  ];

  private readonly salesLibraryMenu: NbMenuItem[] = [
    {
      title: "Sales Library",
      icon: {
        icon: "folder",
        pack: "fa",
      },
      link: "/pages/sales-library/view",
    },
  ];

  // ----------- My Menu --------- //

  private readonly normalMenu: NbMenuItem[] = [];

  getMenu(): Observable<NbMenuItem[]> {
    let addedDashboard = false;
    let addedModulesHeader = false;
    const menu = [];

    menu.push(...this.normalMenu);

    if (this.appService.getIsAdmin()) {
      menu.push(...this.adminMenu);
    }

    if (
      this.configService.configuration.tenant.features.findIndex(
        (f) => f.name === FEATURES.INSURANCE
      ) !== -1
    ) {
      if (!addedDashboard) {
        menu.push(...this.InsuranceDashboardMenu);
        addedDashboard = true;
      }
      if (!addedModulesHeader) {
        menu.push(...this.modulesHeader);
        addedModulesHeader = true;
      }

      this.roleProvider.getRole().subscribe((r) => {
        if (
          r.includes(ROLES.ADMIN) ||
          r.includes(ROLES.GLOBAL_ADMIN) ||
          r.includes(ROLES.SUPER_ADMIN) ||
          r.includes(ROLES.LEADERSHIP) ||
          r.includes(ROLES.MANAGER) ||
          r.includes(ROLES.REGIONAL)
        ) {
          menu.push(...this.insuranceAdminMenu);
        }
      });

      menu.push(...this.insuranceMenu);
    }

    if (
      this.configService.configuration.tenant.features.findIndex(
        (f) => f.name === FEATURES.MORTGAGE
      ) !== -1
    ) {
      if (!addedDashboard) {
        menu.push(...this.MortgageDashboardMenu);
        addedDashboard = true;
      }
      if (!addedModulesHeader) {
        menu.push(...this.modulesHeader);
        addedModulesHeader = true;
      }

      this.roleProvider.getRole().subscribe((r) => {
        if (
          r.includes(ROLES.ADMIN) ||
          r.includes(ROLES.GLOBAL_ADMIN) ||
          r.includes(ROLES.SUPER_ADMIN) ||
          r.includes(ROLES.LEADERSHIP) ||
          r.includes(ROLES.MANAGER) ||
          r.includes(ROLES.REGIONAL)
        ) {
          menu.push(...this.insuranceAdminMenu);
        }
      });

      menu.push(...this.mortgageMenu);
    }

    if (
      this.configService.configuration.tenant.features.findIndex(
        (f) => f.name === FEATURES.LAW
      ) !== -1
    ) {
      if (!addedDashboard) {
        menu.push(...this.LawDashboardMenu);
        addedDashboard = true;
      }
      if (!addedModulesHeader) {
        menu.push(...this.modulesHeader);
        addedModulesHeader = true;
      }

      this.roleProvider.getRole().subscribe((r) => {
        if (
          r.includes(ROLES.ADMIN) ||
          r.includes(ROLES.GLOBAL_ADMIN) ||
          r.includes(ROLES.SUPER_ADMIN) ||
          r.includes(ROLES.LEADERSHIP) ||
          r.includes(ROLES.MANAGER) ||
          r.includes(ROLES.REGIONAL)
        ) {
          menu.push(...this.insuranceAdminMenu);
        }
      });

      menu.push(...this.lawMenu);
    }

    if (
      this.configService.configuration.tenant.features.findIndex(
        (f) => f.name === FEATURES.PROVIDER
      ) !== -1
    ) {
      if (!addedDashboard) {
        menu.push(...this.ProviderDashboardMenu);
        addedDashboard = true;
      }
      if (!addedModulesHeader) {
        menu.push(...this.modulesHeader);
        addedModulesHeader = true;
      }
      menu.push(...this.providerMenu);
    }

    if (
      this.configService.configuration.tenant.features.findIndex(
        (f) => f.name === FEATURES.SALESLIBRARY
      ) !== -1
    ) {
      menu.push(...this.salesLibraryMenu);
    }

    this.roleProvider.getRole().subscribe((r) => {
      if (
        r.includes(ROLES.ADMIN) ||
        r.includes(ROLES.GLOBAL_ADMIN) ||
        r.includes(ROLES.SUPER_ADMIN) ||
        r.includes(ROLES.LEADERSHIP) ||
        r.includes(ROLES.MANAGER) ||
        r.includes(ROLES.REGIONAL)
      ) {
        menu.push(...this.adminMenu);
      }
    });

    return of([...menu]);
  }
}
