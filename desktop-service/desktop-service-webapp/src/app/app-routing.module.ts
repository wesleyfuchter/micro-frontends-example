import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DesktopComponent} from "./desktop/desktop/desktop.component";
import {AboutComponent} from "./core/about/about.component";
import {PeopleComponent} from "./core/people/people.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/desktop',
    pathMatch: 'full',
  },
  {
    path: 'desktop',
    component: DesktopComponent,
    children: [
      {
        path: 'people',
        component: PeopleComponent,
        outlet: 'desktop'
      },
      {
        path: 'about',
        component: AboutComponent,
        outlet: 'desktop'
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
