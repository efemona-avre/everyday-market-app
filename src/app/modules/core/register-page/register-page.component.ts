import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { lettersOnlyValidator } from './validators/validators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { countryValidator } from './validators/validators';  



@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  registerForm: FormGroup;
  provinces: string[] = [];

  constructor(private router: Router, private http: HttpClient, private fb: FormBuilder) {
    this.registerForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.loadProvinces();

    // Initialize the form group with validators
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, lettersOnlyValidator]],
      email: ['', [Validators.required, Validators.email]],
      country: ['', [Validators.required, countryValidator('Canada')]]
    });
  }

  loadProvinces() {
    this.http.get<{ provinces: string[] }>('provinces.json').subscribe(data => {
      this.provinces = data.provinces;
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      // Handle form submission logic
      alert('Registration Successful! Redirecting to Products Page...');
      this.router.navigate(['/products']);
    } else {
      // Handle invalid form submission
      alert('Please correct the errors in the form.');
    }
  }
}

