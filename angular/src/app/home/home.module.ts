import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule, 
    HomeRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
})
export class HomeModule {}
