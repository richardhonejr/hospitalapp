import { Component } from '@angular/core';
import { Doctor } from './interfaces/doctor';
import { Patient } from './interfaces/patient';
import { DoctorService } from './services/doctor.service';
import { PatientService } from './services/patient.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  doctors: Doctor[];
  patients: Patient[];
  

  constructor(private doctorService: DoctorService, private patientService: PatientService) {
    this.doctors = doctorService.doctors;
    this.patients = patientService.patients;
  }
  getTotalCount() {
    return this.doctorService.doctors.length + this.patientService.patients.length;
  }
}


