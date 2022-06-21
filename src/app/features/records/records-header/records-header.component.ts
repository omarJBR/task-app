import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-records-header',
  templateUrl: './records-header.component.html',
  styleUrls: ['./records-header.component.scss']
})
export class RecordsHeaderComponent implements OnInit {

  public tabs: Array<any> = [
    {
      name: 'لوحة القيادة',
      path: '/records/dashboard'
    },
    {
      name: 'إعدادات النظام',
      path: '/records/system-configuration'
    },
  ];
  public activeTabPath: String = '';

  constructor(
    public router: Router
  ) {
    router.events.pipe(filter((event: any) => event instanceof NavigationEnd)).subscribe(event => {
      this.activeTabPath = event.url;
    });
  }

  ngOnInit(): void {
  }

}
