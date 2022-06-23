import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { OpportunityService } from '../../../@core/backend/common/services/opportunity.service';
import { Router, ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { NbThemeService } from '@nebular/theme';
import { ConfigurationService } from '../../../@services/configuration.service';
import { FEATURES } from '../../../@core/features';
import { TransType } from '../../../@core/transtype';
@Component({
  selector: 'ngx-clients-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewDetailsComponent implements OnInit {

  features = FEATURES;
  transType = TransType;
  protected readonly unsubscribe$ = new Subject<void>();
  private screenWidth: number = 0;
  dataloaded: boolean = false;
  opportunityId: string = '';
  contactId: string = 'my-contact-id';
  accountId: string = 'my-account-id';
  form: FormGroup;
  data: Observable<any>;
  currentTransType: string;
  client: Client;
  pipeLineType: string;
  _deviceInfo: any;

  constructor(
    public service: OpportunityService,
    private route: ActivatedRoute,
    private router: Router,
    private themeService: NbThemeService,
    private configurationService: ConfigurationService,
  ) {
    try {
      this.pipeLineType = this.router.getCurrentNavigation().extras.state.pipeLineType;
      this.contactId = this.router.getCurrentNavigation().extras.state.contactId;
      this.accountId = this.router.getCurrentNavigation().extras.state.accountId;
    } catch (error) {
      this.pipeLineType = 'agent';
      this.contactId = '';
      this.accountId = '';
    }
    this.client = {
      firstName: '',
      lastName: '',
      opportunityId: '',
    };
    this.themeService.onMediaQueryChange().subscribe((d) => {
      this.screenWidth = d[1].width;
    });

  }

  setTransType(transType: string) {
    this.currentTransType = transType;
  }

  isTransType(transTypes: string[] | string): boolean {

    if (typeof(transTypes) === 'string' || transTypes instanceof String) {
      return transTypes === this.currentTransType;
    }

    for (let i = 0; i < transTypes.length; i++) {
      if (this.currentTransType === transTypes[i]) {
        return true;
      }
    }
    return false;
  }

  containsFeature(name: string): boolean {
    const feature = this.configurationService.configuration.tenant.features.find((f) => {
      return f.name === name;
    });
    return (feature !== null && feature !== undefined);
  }

  containsSomeFeatures(names: string[]) {
    for (let i = 0; i < names.length; i++) {
      const feature = this.configurationService.configuration.tenant.features.find((f) => {
        return f.name === names[i];
      });
      const found = (feature !== null && feature !== undefined);
      if (found) {
        return found;
      }
    }

    return false;
  }

  containsAllFeatures(names: string[]): boolean {
    let found = names.length > 0;
    for (let i = 0; i < names.length; i++) {
      const feature = this.configurationService.configuration.tenant.features.find((f) => {
        return f.name === names[i];
      });
      found = found && (feature !== null && feature !== undefined);
    }
    return found;
  }

  ngOnInit(): void {
    this.loadUserData();
  }


  isMobile() {
    return this.screenWidth < 580;
  }

  loadUserData() {
    const id = this.route.snapshot.paramMap.get('id');
    this.data = this.service.get(id, this.pipeLineType).pipe(takeUntil(this.unsubscribe$));
    this.data.subscribe(d => {
      this.dataloaded = true;
      this.opportunityId = d['opportunityId'];
      this.contactId = d['contactId'];
      this.accountId = d['accountId'];
      this.currentTransType = d['transType'];
    });
  }
}

interface Client {
  firstName: string;
  lastName: string;
  opportunityId: string;
}
