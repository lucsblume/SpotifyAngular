import { GlobalConstants } from './../common/global-constants';
import { Component, OnInit } from '@angular/core';
import { IsLoggedInService } from '../services/is-logged-in.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
	selector: 'app-nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
	isLoggedIn: boolean;

	constructor(private lis: IsLoggedInService, private router: Router) {}

	ngOnInit(): void {
		this.lis.getValue().subscribe((value) => {
			this.isLoggedIn = value;
		});
	}

	perfil() {
		let user = JSON.parse(localStorage.getItem('user'));
		this.router.navigate(['/profile/', user.id]);
	}
	playlists() {
		let user = JSON.parse(localStorage.getItem('user'));
		this.router.navigate(['/user-playlists/', user.id]);
	}
}
