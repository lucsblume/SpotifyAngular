import { PlaylistService } from './../services/playlist.service';
import { Playlist } from './../playlistMock/playlist';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-playlist',
	templateUrl: './playlist.component.html',
	styleUrls: ['./playlist.component.css'],
})
export class PlaylistComponent implements OnInit {
	playlists: Playlist[] = [];

	constructor(private ps: PlaylistService) {}

	ngOnInit(): void {
		this.ps.all().subscribe((playlists) => {
			this.playlists = playlists;
		});
	}
}
