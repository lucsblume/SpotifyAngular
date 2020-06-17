import { User } from './../../../models/User';
import { PersistUsers } from '../../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { emailValidator } from './validator';
import { GlobalConstants } from '../../../common/global-constants';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
	myForm: FormGroup;
	successMsg: boolean = false;
	users: any[] = [];

	constructor(private fb: FormBuilder, private pu: PersistUsers) {}

	ngOnInit(): void {
		this.myForm = this.fb.group({
			email: '',
			emailConfirmation: ['', emailValidator],
			password: '',
			username: '',
			dayOfBirth: '',
			monthOfBirth: '',
			yearOfBirth: '',
			gender: '',
		});

		this.myForm.controls.email.valueChanges.subscribe((x) =>
			this.myForm.controls.emailConfirmation.updateValueAndValidity()
		);

		this.pu.getUsers().subscribe((data: any[]) => {
			console.log(data);
			this.users = data;
		});
	}

	onSubmit(): void {
		let user = new User(
			GlobalConstants.userId,
			this.myForm.value.email,
			this.myForm.value.username,
			this.myForm.value.password,
			this.myForm.value.dayOfBirth,
			this.myForm.value.monthOfBirth,
			this.myForm.value.yearOfBirth,
			this.myForm.value.gender
		);
		this.createUser(user);
		GlobalConstants.userId++;
		this.successMsg = true;
		this.reset();
	}

	reset() {
		this.myForm.reset();
	}

	createUser(user: User) {
		this.pu.createUser(user).subscribe((ret) => {
			console.log('User created: ', ret);
		});
	}
}
