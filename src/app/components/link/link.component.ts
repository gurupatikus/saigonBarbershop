import { Component, OnInit, Input } from '@angular/core';
import { BaseValuableComponent } from 'src/app/models/base/base-valuable-component';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent extends BaseValuableComponent implements OnInit {
  @Input() routerLink: string | string[];
  @Input() queryParams: any;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
