import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReportIldeService {

  constructor(private http:HttpClient) { }

  getmachines():Observable<any>{
    return this.http.get('machine_list')
 }
 getshift():Observable<any>{
   return this.http.get('shifts')
 }
 overall_report(register):Observable<any>{
   return this.http.get('idle_reason_report?machine_name=' + register.machine_name +'&&shift_num=' +register.shift_num +'&&from_date='+ register.date )
 }
 first_page_loading():Observable<any>{
   return this.http.get('previous_shift')
 }

  
}
