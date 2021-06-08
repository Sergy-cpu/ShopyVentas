import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContscComponent } from './components/contsc.component';

import { ContactRoutingModule } from './contac-routing.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    ContscComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContactRoutingModule
  ]
})
export class ContactModule {

}
