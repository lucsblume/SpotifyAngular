import { PersistUsers } from './../services/users.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { PlaylistService } from '../services/playlist.service';
import { UserPlaylist } from '../models/UserPlaylist';

@Component({
	selector: 'app-user-playlists',
	templateUrl: './user-playlists.component.html',
	styleUrls: ['./user-playlists.component.css'],
})
export class UserPlaylistsComponent implements OnInit {
	isPlaying = false;
	idPlaying = -1;
	audio = new Audio();
	user: User;
	playlists: Array<any> = [];
	playlist: Array<any>;
	searchResult: Array<any>;
	creatingPlaylist: boolean = false;
	editingPlaylist: boolean = false;
	playlistName: string;

	constructor(private ps: PlaylistService, private pu: PersistUsers) {}

	ngOnInit(): void {
		let localUser = JSON.parse(localStorage.getItem('user'));
		this.user = new User(
			localUser.id,
			localUser.email,
			localUser.username,
			localUser.password,
			localUser.dayOfBirth,
			localUser.monthOfBirth,
			localUser.yearOfBirth,
			localUser.gender
		);
		this.user.playlist = localUser.playlist;
		this.playlist = localUser.playlist;
	}

	playMusic(musicPath, index): void {
		const icon = document.getElementsByClassName('play-pause-button');

		if (this.isPlaying) {
			this.audio.pause();
			this.isPlaying = false;
			icon[this.idPlaying]['src'] = '../../../assets/play.svg';
			this.idPlaying = -1;
		} else {
			this.audio = new Audio(musicPath);
			this.audio.play();
			this.isPlaying = true;
			this.idPlaying = index;
			// icon[index]['src'] = '../../../assets/pause.svg';
		}
	}

	searchSongs(event: any): void {
		let name = String(event.target.value);
		this.ps.search(name).subscribe((result) => {
			this.searchResult = result;
		});
	}

	searchSongsByAuthor(event: any): void {
		let author = String(event.target.value);
		this.ps.searchByAuthor(author).subscribe((result) => {
			this.searchResult = result;
		});
	}

	createPlaylist(): void {
		this.creatingPlaylist = true;
	}

	editPlaylist(): void {
		this.editingPlaylist = true;
	}

	finishPlaylist(): void {
		let playlist = new UserPlaylist(
			this.playlistName,
			JSON.parse(localStorage.getItem('playlists'))
		);
		if (this.user.playlist) {
		}
		this.user.playlist.push(playlist);
		localStorage.setItem('user', JSON.stringify(this.user));
		this.pu.updateUser(this.user).subscribe();
		this.playlists = [];
		this.creatingPlaylist = false;
	}

	addToPlaylist(audio): void {
		this.playlists.push(audio);
		localStorage.setItem('playlists', JSON.stringify(this.playlists));
	}

	addToEditPlaylist(audio, i): void {
		this.user.playlist[i].songs.push(audio);
		localStorage.setItem('user', JSON.stringify(this.user));
	}

	finishEditingPlaylist(): void {
		this.editingPlaylist = false;
		this.pu.updateUser(this.user).subscribe();
	}

	retirarMusica(i, j): void {
		this.user.playlist[i].songs.splice(j, 1);
		localStorage.setItem('user', JSON.stringify(this.user));
		this.pu.updateUser(this.user).subscribe((p) => {
			console.log(p);
		});
	}
}
