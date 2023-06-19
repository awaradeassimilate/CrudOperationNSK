import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  getEmployees() {
    let data = [{
      id: 1,
      firstName: "Aniket",
      lastName: "Warade",
      email: "waradeaniket1995@gmail.com",
      mobileNumber: 78787878787,
      salary: 4500,
    }]
    return data

  }

  // postEmployee(data: any) {
  //   return this.http.post<any>("https://jsonplaceholder.typicode.com/posts", data)
  //     .pipe(map((res: any) => {
  //       return res;
  //     }))
  // }
  // getEmployee(data: any) {
  //   return this.http.post<any>("https://jsonplaceholder.typicode.com/posts", data)
  //     .pipe(map((res: any) => {
  //       return res;
  //     }))
  // }
  // updateEmployee(data: any, id: number) {
  //   return this.http.post<any>("https://jsonplaceholder.typicode.com/posts" + id, data)
  //     .pipe(map((res: any) => {
  //       return res;
  //     }))
  // }
  // deleteEmployee(id: number) {
  //   return this.http.post<any>("https://jsonplaceholder.typicode.com/posts", id)
  //     .pipe(map((res: any) => {
  //       return res;
  //     }))
  // }
}
