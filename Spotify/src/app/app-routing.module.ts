import { UserPlaylistsComponent } from './user-playlists/user-playlists.component';
import { PlaylistSelectedComponent } from './playlist-selected/playlist-selected.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowCaseComponent } from './show-case/show-case.component';
import { FaqComponent } from './faq/faq.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { AudioplayerComponent } from './audioplayer/audioplayer.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';

const routes: Routes = [
	{ path: '', component: ShowCaseComponent },
	{ path: 'faq', component: FaqComponent },
	{ path: 'playlist', component: PlaylistComponent },
	{ path: 'audioplayer', component: AudioplayerComponent },
	{ path: 'playlist-selected/:id', component: PlaylistSelectedComponent },
	{ path: 'profile/:id', component: ProfileComponent },
	{ path: 'profile/edit-profile/:id', component: EditProfileComponent },
	{ path: 'user-playlists/:id', component: UserPlaylistsComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
