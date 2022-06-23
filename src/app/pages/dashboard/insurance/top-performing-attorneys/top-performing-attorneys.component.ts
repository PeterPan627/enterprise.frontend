import { OnDestroy, Component, ViewChild, Input } from '@angular/core';
import { ContactData } from '../../../../@core/interfaces/contact/contact.data';

@Component({
    selector: 'ngx-top-performing-attorneys',
    styleUrls: ['./top-performing-attorneys.component.scss'],
    templateUrl: './top-performing-attorneys.component.html',
  })
export class TopPerformingAttorneysComponent implements OnDestroy {
    public data = [];

    @ViewChild('flipcard') flipcard;
    @Input() label: string = 'Attorneys';

    constructor(private service: ContactData) {
      this.loadData();
    }

    loadData() {
      const source = this.service.getGridDataSource();
      source.setSort([{
        field: 'Stat7',
        direction: 'desc',
      }]);
      source.setPaging(1, 100, true);
      source.getElements().then(d => this.data = d);
    }

    ngOnDestroy(): void {

    }

    flip() {
      this.flipcard.flipped = !this.flipcard.flipped;
  }
}
