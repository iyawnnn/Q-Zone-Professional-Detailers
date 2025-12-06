import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Employee {
  empNo: number;
  fullName: string;
  position: string;
  duties: string;
  gender: 'Male' | 'Female';
  email: string;
  status: 'Active' | 'Inactive' | 'On Leave';
  salary: number;
  photo: string;
}

@Component({
  selector: 'app-employee-directory',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-directory.html',
  styleUrls: ['./employee-directory.css']
})
export class EmployeeDirectory {
  employees: Employee[] = [
    { empNo: 101, fullName: 'Ian Pangilinan', position: 'Manager', duties: 'Oversees daily operations and staff management.', gender: 'Male', email: 'Ian@qzone.com', status: 'Active', salary: 48000, photo: 'https://randomuser.me/api/portraits/men/45.jpg' },
    { empNo: 102, fullName: 'Aisley Tugab', position: 'Detailing Specialist', duties: 'Handles exterior car detailing and polishing.', gender: 'Female', email: 'Ais@qzone.com', status: 'Inactive', salary: 29500, photo: 'https://randomuser.me/api/portraits/men/19.jpg' },
    { empNo: 103, fullName: 'Kian Dizon', position: 'Interior Specialist', duties: 'Responsible for interior cleaning and maintenance.', gender: 'Male', email: 'kian@qzone.com', status: 'Active', salary: 28000, photo: 'https://randomuser.me/api/portraits/men/15.jpg' },
    { empNo: 104, fullName: 'Jasmine Blanco', position: 'Customer Relations', duties: 'Manages client communications and appointments.', gender: 'Female', email: 'jas@qzone.com', status: 'On Leave', salary: 34000, photo: 'https://randomuser.me/api/portraits/women/18.jpg' }
  ];
}
