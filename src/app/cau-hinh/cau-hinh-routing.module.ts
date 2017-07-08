import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CauHinhComponent } from './cau-hinh.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'index' },
  {
    path: 'index', component: CauHinhComponent,
    children: [
      { path: 'edit', component: EditComponent, outlet: 'aux' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CauHinhRoutingModule { }
