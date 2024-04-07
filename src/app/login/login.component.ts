import {Component} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {LoginService} from "../services/login.service";
import { Router } from '@angular/router';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    standalone: true,
    imports: [MatTabsModule, ReactiveFormsModule],
})
export class LoginComponent {
    form: FormGroup;
    form2: FormGroup;
    constructor(formBuilder: FormBuilder,private service:LoginService,private router:Router) {
        this.form = formBuilder.group({
            username: [''],
            password: [''],

        })
        this.form2=formBuilder.group({
            username:[''],
            password:[''],
            confirmpass:[''],
            email:['']
            }
        )
    }
    getUsers():void{
        console.log("first"+this.form.value.username)
        console.log(this.service.getLoginInfo(this.form.value.username))
    }


    submitSignup() {
        console.log(this.form2.value)
    }

    submitLogin() {
        if(this.service.getLoginInfo(this.form.value.username)){
            console.log("Login successfull")
            this.router.navigate(['/H'])
        }

    }
}
