import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { OneComponent } from './one/one.component';
import { HomeComponent } from './home.component';
import { DetailComponent } from './one/deme/one/detail/detail.component';
import { TwoComponent } from './two/two.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [OneComponent, HomeComponent, DetailComponent, TwoComponent]
})
export class HomeModule { }
