import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/banner/home/home.component';

import { HomeRountingModule } from './home-routing.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
    declarations: [
        BannerComponent,
        HomeComponent 
    ], imports: [
        CommonModule,
        SharedModule,
        HomeRountingModule     
    ]
})
export class HomeModule {

}