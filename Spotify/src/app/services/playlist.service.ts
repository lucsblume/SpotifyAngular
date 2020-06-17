import { Playlist } from './../playlistMOCK/playlist';
import { tap } from 'rxjs/internal/operators';
import { Audio } from './../audioMOCK/audio';
import { Playlists } from './../playlistMock/playlist-mock';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class PlaylistService {
	SERVER_URL: string = 'http://localhost:3333/';
	constructor(private http: HttpClient) {}

	all(): Observable<Playlist[]> {
		return this.http.get<Playlist[]>(this.SERVER_URL + `playlists`);
	}

	show(i: number): Observable<Playlist> {
		return this.http.get<Playlist>(this.SERVER_URL + `playlist/${i}`);
	}

	search(term: string): Observable<Audio[]> {
		term = term.trim();

		const options = term
			? {
					params: new HttpParams().set('name', term),
			  }
			: {};

		return this.http.get<Audio[]>(this.SERVER_URL + 'song', options);
	}

	searchByAuthor(term: string): Observable<Audio[]> {
		term = term.trim();

		const options = term
			? {
					params: new HttpParams().set('author', term),
			  }
			: {};

		return this.http.get<Audio[]>(this.SERVER_URL + 'song/author', options);
	}
}
