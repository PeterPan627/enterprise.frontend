import { NbMenuService } from '@nebular/theme';
import { Component } from '@angular/core';

@Component({
  selector: 'ngx-forbidden',
  styleUrls: ['./forbidden.component.scss'],
  templateUrl: './forbidden.component.html',
})
export class ForbiddenComponent {

  constructor(private menuService: NbMenuService) {
  }

  goToHome() {
    this.menuService.navigateHome();
  }
}
