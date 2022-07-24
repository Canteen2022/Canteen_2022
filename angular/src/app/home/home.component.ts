import { ToasterService } from "@abp/ng.theme.shared";
import { Component, OnInit } from '@angular/core';
import { CalendarItemDto } from "@proxy/services/dtos";
import { CalendarService } from "@proxy/services";
import { DateTimeFormatDto } from "@abp/ng.core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {

  CalendarItems: CalendarItemDto[];
  newCalendarDate: DateTimeFormatDto;

  constructor(
      private CalendarService: CalendarService,
      private toasterService: ToasterService)
  { }

  ngOnInit(): void {
    this.CalendarService.getList().subscribe(response => {
      this.CalendarItems = response;
    });
  }
  
  create(): void{
    this.CalendarService.create(this.newCalendarDate).subscribe((result) => {
      this.CalendarItems = this.CalendarItems.concat(result);
      this.newCalendarDate = null;
    });
  }

  delete(id: string): void {
    this.CalendarService.delete(id).subscribe(() => {
      this.CalendarItems = this.CalendarItems.filter(item => item.id !== id);
      this.toasterService.info('Deleted the Calendar item.');
    });
  }  
}
