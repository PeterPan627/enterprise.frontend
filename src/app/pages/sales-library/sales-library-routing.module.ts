import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesLibraryComponent } from './sales-library.component';


const routes: Routes = [
    { path: 'view/:id', component: SalesLibraryComponent },
    { path: 'view', component: SalesLibraryComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SalesLibraryRoutingModule { }
