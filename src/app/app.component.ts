import { Component, OnInit, Injector } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ConfigurationService } from './@services/configuration.service';
import { AnalyticsService } from './@core/utils/analytics.service';
import { NbSidebarService, NbLayoutRulerService } from '@nebular/theme';
import { Router, NavigationEnd } from '@angular/router';
import { createCustomElement } from '@angular/elements';
import { ConnectedCallComponent } from './pages/shared/components/connected-call/connected-call.component';
import { IncomingCallComponent } from './pages/shared/components/incoming-call/incoming-call.component';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService,
    private titleService: Title,
    private config: ConfigurationService,
    private sidebarService: NbSidebarService,
    private rulerService: NbLayoutRulerService,
    private injector: Injector,
    private router: Router) {
    this.titleService.setTitle(this.config.configuration.tenant.name);
    this.router.events.subscribe(r => {
      if (r instanceof NavigationEnd) {
        const dimensions = this.rulerService.getDimensions();
        dimensions.subscribe(d => {
          if (d.clientWidth < 580) {
            this.sidebarService.collapse('menu-sidebar');
          }
        });
      }
    });
    this.defineCustomElements();
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
  }

  private defineCustomElements() {
    if (!customElements.get('ngx-connected-call')) {
      const connectedCall = createCustomElement(ConnectedCallComponent, {
        injector: this.injector,
      });
      customElements.define('ngx-connected-call', connectedCall);
    }

    if (!customElements.get('ngx-incoming-call')) {
      const incomingCall = createCustomElement(IncomingCallComponent, {
        injector: this.injector,
      });
      customElements.define('ngx-incoming-call', incomingCall);
    }
  }
}
