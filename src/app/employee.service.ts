import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl=environment.apiUrl

  constructor(private http:HttpClient) { }

  public findAllEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiUrl}/employee/all`);

  }
  public addEmployee(employee:Employee):Observable<Employee>{

    return this.http.post<Employee>(`${this.apiUrl}/employee/add`,employee);
  }

  public updateEmployee(employee:Employee):Observable<Employee>{
    return this.http.put<Employee>(`${this.apiUrl}/employee/update`,employee);
  }
  public deleteEmployee(id:number):Observable<void>{

    return this.http.delete<void>(`${this.apiUrl}/employee/delete/${id}`);
  }
}
