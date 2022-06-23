import { OnDestroy, Component, Input } from '@angular/core';

@Component({
    selector: 'ngx-top-performing-attorneys-back',
    styleUrls: ['./top-performing-attorneys-back.component.scss'],
    templateUrl: './top-performing-attorneys-back.component.html',
  })
export class TopPerformingAttorneysBackComponent implements OnDestroy {

    constructor() {
    }

    @Input() data: any[];

    get tableData(): any[] {
      const d = this.data.slice(0, 100);
      return d;
    }
    ngOnDestroy(): void {

    }
}
