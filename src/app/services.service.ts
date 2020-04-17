import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
//imported the http client in order to parse the json data
//3 different json files. each has data relating to each genre then printed to list in html pages
  constructor(private http:HttpClient) { }
  getMyRock():Observable<any>{
    return this.http.get('https://jsonblob.com/api/jsonblob/f45f512d-8014-11ea-9f9d-2728e9fade31');
  }
  getMyMetal():Observable<any>{
    return this.http.get('https://jsonblob.com/api/jsonblob/7774be04-802b-11ea-9f9d-a568b899c981');
  }
  getMyRap():Observable<any>{
    return this.http.get('https://jsonblob.com/api/jsonblob/7d9f3c51-802e-11ea-9f9d-31e9fd7f2b9e');
  }
 
  
}
