import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbRoleProvider } from '@nebular/security';
import { isArray } from 'util';

@Component({
  selector: 'ngx-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {

  currentRole = 'user';

  constructor(private roleProvider: NbRoleProvider,  private router: Router) {
    this.roleProvider.getRole().subscribe(r => {
      if (isArray(r)) {
        this.currentRole = r[0];
      } else {
        this.currentRole = r.toString();
      }
    });
  }

  ngOnInit() {
  }

  add() {
    this.router.navigate(['/pages/contacts/add']);
  }
}
