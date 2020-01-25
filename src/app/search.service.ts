import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { environment } from '../environments/environment'
// import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }
  
  // searchFunction(value):Observable<any>{
  //   return  this.http.get<any>(environment.apiBaseUrl + '/twitter-search/'+encodeURIComponent(value));
  // }

  searchFunction(value){
    return  this.http.get(environment.apiBaseUrl + '/twitter-search/'+encodeURIComponent(value));
  }

  
}
