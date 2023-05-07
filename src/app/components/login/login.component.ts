import {Component, OnInit} from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { LoginI } from 'src/app/modelos/login.interface';




@Component({

    selector:'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


    constructor(private api:ApiService){


    }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }


    OnLogin(form:LoginI){


    }
}