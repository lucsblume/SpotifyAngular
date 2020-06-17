import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class IsLoggedInService {
	private isLoggedIn: BehaviorSubject<boolean>;

	constructor() {
		this.isLoggedIn = new BehaviorSubject<boolean>(false);
	}

	getValue(): Observable<boolean> {
		return this.isLoggedIn.asObservable();
	}
	setValue(newValue): void {
		this.isLoggedIn.next(newValue);
	}
}
