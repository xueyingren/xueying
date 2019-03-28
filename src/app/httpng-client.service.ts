import { Component, OnInit, Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class HttpngClientService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }
  private heroesUrl = 'api/heroes';  // URL to web api
  private dataUrl = 'api/dataUrl';  // URL to web api

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getHeroes (): Observable<[]> {
    return this.http.get<[]>(this.heroesUrl)
    .pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<any>('updateHero'))
    );
  }
  getData (): Observable<[]> {
    return this.http.get<[]>(this.dataUrl)
    .pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<any>('updateHero'))
    );
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of (result as T);
    };
  }
}
