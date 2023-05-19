import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {BandaListComponent} from "./banda-list/banda-list.component";
import {BandaDetailComponent} from "./banda-detail/banda-detail.component";
import {BandaRoutingModule} from "./banda-routing.module";

@NgModule({
  imports: [CommonModule, RouterModule, BandaRoutingModule],
  exports: [BandaListComponent],
  declarations: [BandaListComponent, BandaDetailComponent]
})
export class BandaModule {
}
