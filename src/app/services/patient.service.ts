import { Injectable } from '@angular/core';
import { Patient } from '../interfaces/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  patients: Patient[] = [
    { name: "Doris Pain", illness:"back injury"},
    { name: "Hank Doe", illness:"colon cancer"},
    { name: "Sally Cain", illness:"pregnant"}
  ]

  constructor() { }
}
