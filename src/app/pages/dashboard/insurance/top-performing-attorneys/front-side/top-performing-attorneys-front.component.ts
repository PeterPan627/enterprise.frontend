import { OnDestroy, Component, Input } from '@angular/core';

@Component({
    selector: 'ngx-top-performing-attorneys-front',
    styleUrls: ['./top-performing-attorneys-front.component.scss'],
    templateUrl: './top-performing-attorneys-front.component.html',
  })
export class TopPerformingAttorneysFrontComponent implements OnDestroy {
    @Input() data: any[];
    get tableData(): any[] {
      const d = this.data.slice(0, 10);
      return d;
    }

    constructor() {
    }
    ngOnDestroy(): void {

    }
}
