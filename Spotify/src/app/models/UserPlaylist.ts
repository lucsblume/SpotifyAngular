export class UserPlaylist {
	name: string;
	songs: Array<any>;

	constructor(name: string, songs: Array<any>) {
		this.name = name;
		this.songs = songs;
	}
}
