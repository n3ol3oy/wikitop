import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../model/article';

@Component({
  selector: 'wikitop-article',
  templateUrl: './wikitop-article.component.html',
  styleUrls: ['./wikitop-article.component.scss'],
})
export class WikitopArticleComponent implements OnInit {
  @Input() article: Article = {
    article: '',
    views: 0,
    rank: 0,
  };

  constructor() {}

  ngOnInit(): void {}
}
