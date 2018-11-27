import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';
import {Blogpost} from './blogpost';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogpostService {

  serverurl = 'http://localhost/dev/blogger/';
  errorData:{};
  constructor(private http:HttpClient) { }

  getBlogs(){
    return this.http.get<Blogpost>(this.serverurl + 'api/blogs').pipe(
        catchError(this.handleError)
    );
  }

    getfeaturedBlogs(){
        return this.http.get<Blogpost>(this.serverurl + 'api/featured_blogs').pipe(
            catchError(this.handleError)
        );
    }

  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('An error occurrd:' , error.message);
    }
    else {
      console.log(`backend Return code ${error.status},` + `body was: ${error.status}`);
    }
    this.errorData = {
      ErrorTitle:'Oops! Request For Document Faild',
        ErrorDesc:'something badhappend,please try agin later'
    }
    return throwError(this.errorData);

  }
}
