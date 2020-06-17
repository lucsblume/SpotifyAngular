import { User } from './../../../models/User';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PersistUsers } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { IsLoggedInService } from 'src/app/services/is-logged-in.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
	constructor(
		private fb: FormBuilder,
		private pu: PersistUsers,
		private router: Router,
		private lis: IsLoggedInService
	) {}

	myForm: FormGroup;
	successMsg: boolean = false;
	user: User;

	ngOnInit(): void {
		this.myForm = this.fb.group({
			email: '',
			password: '',
		});
	}

	onSubmit(): void {
		this.login(this.myForm.value.email, this.myForm.value.password);

		this.reset();
	}

	reset() {
		this.myForm.reset();
	}

	login(email: string, password: string) {
		this.lis.setValue(true);
		this.pu.searchUser(email).subscribe((obs) => {
			console.log(obs);
			let user = obs[0];
			if (user.playlist == '') {
				user.playlist = [];
			}

			if (user.playlist != '') {
				user.playlist = JSON.parse(user.playlist);
			}

			if (password == user.password) {
				console.log('usuário encontrado: ', user);
				localStorage.setItem('user', JSON.stringify(user));
				this.router.navigate(['/profile', user.id]);
			}
		});
	}
}
