import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from '../model/course';
import { first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = "/api/courses";

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(),
      tap(courses => console.log(courses))
    );
  }
 
  loadById(id: string){
    return this.httpClient.get<Course>(`${this.API}/${id}`);
  }

  save(record: Partial<Course>) {
    return this.httpClient.post<Course>(this.API, record);
  }

}