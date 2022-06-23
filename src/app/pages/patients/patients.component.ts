import { Component, OnDestroy } from '@angular/core';
import { NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService } from '@nebular/theme';

@Component({
    selector: 'ngx-qs-patients',
    styleUrls: ['./patients.component.scss'],
    templateUrl: './patients.component.html',
})
export class PatientsComponent implements OnDestroy {
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
