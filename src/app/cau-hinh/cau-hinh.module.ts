import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextModule, ButtonModule } from 'primeng/primeng';

import { CauHinhRoutingModule } from './cau-hinh-routing.module';
import { CauHinhComponent } from './cau-hinh.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    CauHinhRoutingModule
  ],
  declarations: [CauHinhComponent, EditComponent]
})
export class CauHinhModule { }
