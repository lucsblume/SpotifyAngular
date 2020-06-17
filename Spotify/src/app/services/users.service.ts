import { User } from './../models/User';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class PersistUsers {
	SERVER_URL: string = 'http://localhost:3333/';

	constructor(private http: HttpClient) {}

	public getUsers() {
		return this.http.get(this.SERVER_URL + 'users');
	}

	public getUser(userId) {
		return this.http.get(`${this.SERVER_URL + 'users'}/${userId}`);
	}

	public searchUser(email: string): Observable<any> {
		email = email.trim();

		const options = email
			? { params: new HttpParams().set('email', email) }
			: {};

		return this.http.get(this.SERVER_URL + 'user', options);
	}

	public createUser(user: User) {
		return this.http.post(`${this.SERVER_URL + 'users'}`, user);
	}

	public deleteUser(user: User) {
		console.log('cheguei no users.service.ts, id do user: ', user.id);
		return this.http.delete(`${this.SERVER_URL + 'users'}/${user.id}`);
	}

	public updateUser(user: User) {
		return this.http.put(`${this.SERVER_URL + 'user'}/${user.id}`, user);
	}
}
