import { Component, OnInit, Injector } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ConfigurationService } from "./@services/configuration.service";
import { AnalyticsService } from "./@core/utils/analytics.service";
import { NbSidebarService, NbLayoutRulerService } from "@nebular/theme";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "ngx-app",
  template: "<router-outlet></router-outlet>",
})
export class AppComponent implements OnInit {
  constructor(
    private analytics: AnalyticsService,
    private titleService: Title,
    private config: ConfigurationService,
    private sidebarService: NbSidebarService,
    private rulerService: NbLayoutRulerService,
    private injector: Injector,
    private router: Router
  ) {
    this.titleService.setTitle(this.config.configuration.tenant.name);
    this.router.events.subscribe((r) => {
      if (r instanceof NavigationEnd) {
        const dimensions = this.rulerService.getDimensions();
        dimensions.subscribe((d) => {
          if (d.clientWidth < 580) {
            this.sidebarService.collapse("menu-sidebar");
          }
        });
      }
    });
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
  }
}
