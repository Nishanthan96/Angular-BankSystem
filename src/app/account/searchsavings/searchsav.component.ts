import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Account} from "../../account";
import {ApiService} from "../../api.service";


@Component({
  selector: 'app-searchsav',
  templateUrl: './searchsav.component.html'
})
export class SearchsavComponent implements OnInit {
  users$: Observable<Account[]>;
  private searchTerms = new Subject<string>();//Subject is both observable and observer

  constructor(private apiService: ApiService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);// push term into observable stream Subject for later emmit
  }

  ngOnInit(): void {
    this.users$ = this.searchTerms.pipe(//pipes the searchTerms observable through a sequence of RxJS operators that reduce the number of calls to the searchUsers(), ultimately returning an observable of timely user search results (each a User[]).
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term, ensures that a request is sent only if the filter text changed.
      distinctUntilChanged(),

      // switch to new search observable each time the term changes, return an observable
      switchMap((term: string) => this.apiService.searchUsers(term)),
    );
  }
}
