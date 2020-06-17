import { User } from './../models/User';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IsLoggedInService } from '../services/is-logged-in.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
	user: User;

	constructor(private router: Router, private lis: IsLoggedInService) {}

	ngOnInit(): void {
		this.user = JSON.parse(localStorage.getItem('user'));
		console.log(this.user);
	}

	onLogOut() {
		this.lis.setValue(false);
		localStorage.removeItem('user');
		this.router.navigate(['/']);
	}

	onEdit(userId: number) {
		this.router.navigate(['/profile/edit-profile', userId]);
	}
}
