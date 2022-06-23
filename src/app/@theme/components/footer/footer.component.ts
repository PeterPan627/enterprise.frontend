

import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../../../@services/configuration.service';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created with ♥ for <b><a href="{{homePage}}" target="_blank">{{companyName}}</a></b></span>
  `,
})
export class FooterComponent implements OnInit {
  companyName: string;
  homePage: string;
  constructor(private configurationService: ConfigurationService) {  }

  ngOnInit(): void {
    this.companyName = this.configurationService.configuration.tenant.name;
    this.homePage = this.configurationService.configuration.tenant.homePage;
  }

  get currentYear(): number {
    return new Date().getFullYear();
  }
}
