import { Injectable } from '@angular/core';
import { Doctor } from '../interfaces/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  doctors: Doctor[] = [
    { name: "John Cross", specialization: "Dentistry" },
    { name: "Harry Thompson", specialization: "Internist" },
    { name: "Elvis Howell", specialization: "Oncologist" }
  ];

  constructor() { }
}
