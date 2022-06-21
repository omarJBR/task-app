import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

interface Name {
  name: string;
  details: string;
};

@Injectable({
  providedIn: 'root'
})

export class NamesService {

  private initialValue: Array<Name> = [
    { name: 'جميع الوزارات', details: 'تفاصيل معينة' },
    { name: 'جميع الهيئات', details: '' },
    { name: 'الأمانات', details: '' },
    { name: 'الموردين', details: '' }
  ];

  private listOfNames = new BehaviorSubject<Name[]>(this.initialValue);
  private dataStore: Array<Name> = this.initialValue;

  constructor() { }

  public getNames(searchString: any): Observable<Name[]> {
    return this.listOfNames.asObservable().pipe(
      map(
        (res) => {
          return searchString ? res.filter((name: any) =>
            name.name.toLowerCase().includes(searchString.toLowerCase())) : res;
        }
      )
    );
  }

  public addNewName(nameObject: Name): Observable<String> {
    this.dataStore.push(nameObject);
    this.listOfNames.next(this.dataStore);
    return of('Success');
  }

  public editName(nameObject: Name, nameIndex: number): Observable<String> {
    this.dataStore[nameIndex] = nameObject;
    this.listOfNames.next(this.dataStore);
    return of('Success');
  }

  public deleteName(nameIndex: number): Observable<String> {
    this.dataStore.splice(nameIndex, 1);
    this.listOfNames.next(this.dataStore);
    return of('Success');
  }
}
