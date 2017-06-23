import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'index', pathMatch: 'full'
  },
  {
    path: 'index', component: HomeComponent,
    children: [
      { path: 'one', component: OneComponent, outlet: 'aux' },
      { path: 'two', component: TwoComponent, outlet: 'aux' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
