import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { dobValidator } from 'src/app/vlidators/dob';
import { emailValidator } from 'src/app/vlidators/emailvalidator';
import { phoneNumberValidator } from 'src/app/vlidators/phonenumber';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  personaldetails!: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.personaldetails = _fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, emailValidator()]],
      phone: ['', [Validators.required, phoneNumberValidator()]],
      dob: ['', [Validators.required, dobValidator()]],
      gender: ['', [Validators.required]],
      maritalstatus: ['', [Validators.required]],
    });
  }

  get f() {
    return this.personaldetails.controls;
  }

  ngOnInit(): void {}

  onNext() {
    console.log(this.personaldetails.value);
  }
}
