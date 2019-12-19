import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    edayContactForm: FormGroup;
    submitted = false; 

    constructor(private formBuilder: FormBuilder, private router: Router) { }

    ngOnInit() {
        this.edayContactForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            pwd: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.edayContactForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.edayContactForm.invalid) {
            return;
        }
        localStorage.loggedIn = true;
        this.router.navigate(['/books']);

        //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.edayContactForm.value))
    }

}