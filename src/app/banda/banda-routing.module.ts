import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BandaListComponent} from "./banda-list/banda-list.component";
let routes: Routes = [{path: '', component: BandaListComponent}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BandaRoutingModule {
}
