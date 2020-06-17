import { User } from './../../models/User';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PersistUsers } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-edit-profile',
	templateUrl: './edit-profile.component.html',
	styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
	user: User;
	myForm: FormGroup;

	constructor(
		private fb: FormBuilder,
		private pu: PersistUsers,
		private router: Router
	) {}

	ngOnInit(): void {
		this.user = JSON.parse(localStorage.getItem('user'));

		this.myForm = this.fb.group({
			email: this.user.email,
			password: this.user.password,
			username: this.user.username,
			dayOfBirth: this.user.dayOfBirth,
			monthOfBirth: this.user.monthOfBirth,
			yearOfBirth: this.user.yearOfBirth,
			gender: this.user.gender,
		});
	}

	onSubmit() {
		let userUpdated = new User(
			this.user.id,
			this.myForm.value.email,
			this.myForm.value.username,
			this.myForm.value.password,
			this.myForm.value.dayOfBirth,
			this.myForm.value.monthOfBirth,
			this.myForm.value.yearOfBirth,
			this.myForm.value.gender
		);
		let localUser = JSON.parse(localStorage.getItem('user'));
		userUpdated.playlist = localUser.playlist;
		this.pu.updateUser(userUpdated).subscribe();
		localStorage.setItem('user', JSON.stringify(userUpdated));
		this.router.navigate(['/profile/', userUpdated.id]);
	}
}
