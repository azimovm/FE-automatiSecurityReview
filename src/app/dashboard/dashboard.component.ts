import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {


  miseForm!: FormGroup;
  mises = [
    { value: 'mise1', label: 'Mise 1' },
    { value: 'mise2', label: 'Mise 2' },
    { value: 'mise3', label: 'Mise 3' },
  ];

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.miseForm = this.formBuilder.group({
      selectedOption: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.miseForm.valid) {
      console.log(this.miseForm.value);
    }
  }
}
