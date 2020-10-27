import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  emailForm: FormGroup;
  submitted = false;
  submitted_message=false;
  ok = false;
  show = true;



  constructor(private myformBuilder: FormBuilder) {
    this.emailForm = this.myformBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      message: ['', Validators.required]
    })
  }

    onSubmit() {
      this.submitted = true;
      if (this.emailForm.invalid) {
        return; /* no code will be executed after this point */
      }
      this.ok = true;
      this.show=false;
      this.submitted_message=true;
    }



  ngOnInit(): void {
  }



}
