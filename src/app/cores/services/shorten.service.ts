import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environtments/environment';
import { HttpResponse } from '../types/models/http-response.model';
import { Shorten } from '../types/models/shorten.model';

@Injectable({
  providedIn: 'root',
})
export class ShortenService {
  shortenListSource = new BehaviorSubject<Partial<Shorten>[]>([]);
  currentShortenList = this.shortenListSource.asObservable();
  constructor(private http: HttpClient) {
    this.retrieveFromLS();
  }

  shortenUrl(url: string) {
    const params = { url };
    return this.http.get<HttpResponse<Shorten>>(`${environment.api.main}`, {
      params,
    });
  }

  retrieveFromLS() {
    const storedShortenList = localStorage.getItem(
      environment.localStorageKey.shortenList
    );
    if (storedShortenList) {
      this.shortenListSource.next(JSON.parse(storedShortenList));
    }
  }

  addShorten(data: Partial<Shorten>[]) {
    this.currentShortenList.subscribe((data) => data);
    this.shortenListSource.next(data);
    this.addStorage(data);
  }

  addStorage(data: Partial<Shorten>[]) {
    const stringData = JSON.stringify(data);
    localStorage.setItem(environment.localStorageKey.shortenList, stringData);
  }

  copyUrl(url: string) {
    navigator.clipboard.writeText(url);
  }
}
