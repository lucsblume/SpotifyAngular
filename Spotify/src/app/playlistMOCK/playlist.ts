import { Audio } from '../audioMock/audio';

export class Playlist {
	id: number;
	name: string;
	image: string;
	author: string;
	duration: number;
	songs: any;

	constructor(id, name, image, author, duration, songs) {
		this.id = id;
		this.name = name;
		this.image = image;
		this.author = author;
		this.duration = duration;
		this.songs = songs;
	}
}
