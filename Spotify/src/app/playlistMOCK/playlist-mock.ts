import { AudioMock } from './../audioMock/audio-mock';
import { Playlist } from './playlist';

export const Playlists: Playlist[] = [
	new Playlist(
		1,
		'Alok',
		'../../../assets/imagemDiretorio/Alok-album.jpg',
		'Alok',
		1,
		[AudioMock[0], AudioMock[1], AudioMock[2], AudioMock[3]]
	),
	new Playlist(
		2,
		'BTS',
		'../../../assets/imagemDiretorio/bts-album.jpg',
		'BTS',
		1,
		[AudioMock[4], AudioMock[5], AudioMock[6], AudioMock[7]]
	),
	new Playlist(
		3,
		'Coldplay',
		'../../../assets/imagemDiretorio/ColdPlay-album.png',
		'Coldplay',
		1,
		[AudioMock[8], AudioMock[9], AudioMock[10], AudioMock[11]]
	),
	new Playlist(
		4,
		'Gorillaz',
		'../../../assets/imagemDiretorio/Gorillaz-album.jpg',
		'Gorillaz',
		1,
		[AudioMock[12], AudioMock[13], AudioMock[14], AudioMock[15]]
	),
	new Playlist(
		5,
		'Imagine Dragons',
		'../../../assets/imagemDiretorio/Imagine Dragons-album.jpg',
		'Imagine Dragons',
		1,
		[AudioMock[16], AudioMock[17], AudioMock[18], AudioMock[19]]
	),
	new Playlist(
		6,
		'Pink Floyd',
		'../../../assets/imagemDiretorio/pinkfloyd.jpg',
		'Pink Floyd',
		1,
		[AudioMock[20], AudioMock[21], AudioMock[22], AudioMock[23]]
	),
];
