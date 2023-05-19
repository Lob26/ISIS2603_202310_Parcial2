import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {BandaListComponent} from "./banda/banda-list/banda-list.component";

const routes: Routes = [
  {path: '', component: BandaListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
