import { Audio } from './../audioMOCK/audio';
export class User {
	id: number;
	email: string;
	username: string;
	password: string;
	dayOfBirth: string;
	monthOfBirth: string;
	yearOfBirth: string;
	gender: string;
	playlist: Array<any> = [];

	constructor(
		id: number,
		email: string,
		username: string,
		password: string,
		dayOfBirth: string,
		monthOfBirth: string,
		yearOfBirth: string,
		gender: string
	) {
		this.id = id;
		this.email = email;
		this.username = username;
		this.password = password;
		this.dayOfBirth = dayOfBirth;
		this.monthOfBirth = monthOfBirth;
		this.yearOfBirth = yearOfBirth;
		this.gender = gender;
	}

	public addMusic(music: Audio) {
		this.playlist.push(music);
	}
}
