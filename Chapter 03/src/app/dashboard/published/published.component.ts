import { Component, Input, OnInit } from '@angular/core';
import {IArticle} from '../../../models/IArticle';

@Component({
  selector: 'published',
  templateUrl: './published.component.html',
  styleUrls: ['./published.component.css']
})
export class PublishedComponent implements OnInit {
  @Input() article: IArticle;
  constructor() { }

  ngOnInit() {
  }

}
