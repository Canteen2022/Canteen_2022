import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {MatDatepickerModule} from '@angular/material/datepicker'; 

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule, 
    HomeRoutingModule,
    MatDatepickerModule
  ],
})
export class HomeModule {}
