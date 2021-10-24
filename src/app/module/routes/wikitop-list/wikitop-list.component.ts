import { Component, OnInit } from '@angular/core';
import { WikitopService } from '../../service/wikitop.service';
import { Wikitop } from '../../model/wikitop';

@Component({
  selector: 'wikitop-list',
  templateUrl: './wikitop-list.component.html',
  styleUrls: ['./wikitop-list.component.scss'],
})
export class WikitopListComponent implements OnInit {
  wikiTops: Wikitop = { items: [] };

  constructor(private readonly wikiTopService: WikitopService) {}

  ngOnInit(): void {
    this.wikiTopService
      .getAllWikiArticles()
      .subscribe((wikitop: Wikitop) => (this.wikiTops = wikitop));
  }
}
