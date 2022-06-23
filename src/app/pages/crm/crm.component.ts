import { Component, OnDestroy } from '@angular/core';
import { NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService } from '@nebular/theme';

@Component({
    selector: 'ngx-qs-crm',
    styleUrls: ['./crm.component.scss'],
    templateUrl: './crm.component.html',
})
export class CrmComponent implements OnDestroy {
    breakpoint: NbMediaBreakpoint;
    breakpoints: any;
    themeSubscription: any;
    constructor(
        private themeService: NbThemeService,
        private breakpointService: NbMediaBreakpointsService) {

        this.breakpoints = this.breakpointService.getBreakpointsMap();
        this.themeSubscription = this.themeService.onMediaQueryChange()
            .subscribe(([, newValue]) => {
                this.breakpoint = newValue;
            });
    }

    ngOnDestroy() {
    }

    onDeleteConfirm() {
    }
}
