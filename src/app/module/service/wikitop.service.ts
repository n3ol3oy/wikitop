import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wikitop } from '../model/wikitop';

@Injectable({
  providedIn: 'root',
})
export class WikitopService {
  BASE_URL =
    'https://wikimedia.org/api/rest_v1/metrics/pageviews/top/fa.wikipedia.org/all-access';
  currentYear: number = new Date().getFullYear();
  currentMonth: number = new Date().getMonth() + 1;
  currentDay: number = new Date().getDate() - 1;

  constructor(private readonly http: HttpClient) {}

  getAllWikiArticles(): Observable<Wikitop> {
    return this.http.get<Wikitop>(
      `${this.BASE_URL}/${this.currentYear}/${this.currentMonth}/${this.currentDay}`
    );
  }
}
