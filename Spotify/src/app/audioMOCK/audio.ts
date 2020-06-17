export class Audio {
	id: number;
	album: string;
	name: string;
	image: string;
	duration: number;
	author: string;
	path: string;

	constructor(
		id: number,
		album: string,
		name: string,
		image: string,
		duration: number,
		author: string,
		path: string
	) {
		this.id = id;
		this.album = album;
		this.name = name;
		this.image = image;
		this.duration = duration;
		this.author = author;
		this.path = path;
	}
}
