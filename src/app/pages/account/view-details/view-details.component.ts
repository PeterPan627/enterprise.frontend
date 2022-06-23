import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from '../../../@core/backend/common/services/account.service';
import { Observable } from 'rxjs';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-account-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss'],
})
export class ViewDetailsComponent implements OnInit {
  pipeLineType: string;
  data: Observable<any>;
  accountId: string;
  private screenWidth: number = 0;

  constructor(private router: Router, private route: ActivatedRoute, public service: AccountService, private themeService: NbThemeService,) {
    try {
      this.pipeLineType = this.router.getCurrentNavigation().extras.state.pipeLineType;
    } catch (error) {
      this.pipeLineType = 'agent';
    }
    this.themeService.onMediaQueryChange().subscribe((d) => {
      this.screenWidth = d[1].width;
    });
  }

  isMobile() {
    return this.screenWidth < 580;
  }

  ngOnInit() {
    this.accountId = this.route.snapshot.paramMap.get('id');
    this.data = this.service.get(this.accountId, this.pipeLineType);
    const that = this;
  }
}
