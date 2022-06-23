import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../@core/backend/common/services/contact.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss'],
})
export class ViewContactDetailsComponent implements OnInit {
  pipeLineType: string;
  data: Observable<any>;
  contactId: string;
  private screenWidth: number = 0;

  constructor(private themeService: NbThemeService, private router: Router, private route: ActivatedRoute, public service: ContactService) {
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
    this.contactId = this.route.snapshot.paramMap.get('id');
    this.data = this.service.get(this.contactId, this.pipeLineType);
    const that = this;
  }
}
