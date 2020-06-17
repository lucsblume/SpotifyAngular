import { PersistUsers } from 'src/app/services/users.service';
import { User } from './../models/User';
import { Playlist } from './../playlistMock/playlist';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistService } from '../services/playlist.service';

@Component({
	selector: 'app-playlist-selected',
	templateUrl: './playlist-selected.component.html',
	styleUrls: ['./playlist-selected.component.css'],
})
export class PlaylistSelectedComponent implements OnInit {
	playlistId: number;
	playlist: Playlist;
	isPlaying = false;
	idPlaying = -1;
	audio = new Audio();
	user: User;

	constructor(
		private route: ActivatedRoute,
		private ps: PlaylistService,
		private pu: PersistUsers
	) {}

	ngOnInit(): void {
		this.playlistId = Number(this.route.snapshot.paramMap.get('id'));
		this.ps.show(this.playlistId).subscribe((playlist) => {
			this.playlist = playlist[0];
			this.playlist.songs = JSON.parse(playlist[0].songs);
			console.log(playlist[0]);
		});
		console.log(this.playlist);
		// this.playlist = this.ps.show(this.playlistId);
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
	}

	playMusic(musicPath, index) {
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
			icon[index]['src'] = '../../../assets/pause.svg';
		}
	}

	parseTime(time) {
		const min = Math.trunc(time / 60);
		const seg = time - min * 60;

		return `${min}:${String(seg).padStart(2, '0')}`;
	}
}
