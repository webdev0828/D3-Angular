import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';

export class DataService {

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
        console.log(data)
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/input.json");
  }
}
