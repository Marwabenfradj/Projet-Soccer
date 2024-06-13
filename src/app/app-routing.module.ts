import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddMatchComponent } from './components/addMatches/add-match.component';
import { BannerComponent } from './components/banner/banner.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MatchDetailComponent } from './components/match-detail/match-detail.component';
import { MatchComponent } from './components/match/match.component';
import { MatchesComponent } from './components/matches/matches.component';
import { SearchComponent } from './components/search/search.component';
import { SignUpComponent } from './components/signUp/sign-up.component';
import { TablePlayersComponent } from './components/table-players/table-players.component';
import { TableTeamsComponent } from './components/table-teams/table-teams.component';
import { TableMatchComponent } from './components/tableMatches/table-match.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'signUpAdmin', component: SignUpComponent },
  { path: 'add-match', component: AddMatchComponent },
  { path: 'table-match', component: TableMatchComponent },
  { path: 'match-detail/:id', component: MatchDetailComponent },
  { path: 'edit-match/:id', component: AddMatchComponent },
  { path: 'add-team', component: AddTeamComponent },
  { path: 'matches', component: MatchesComponent },
  { path: 'match', component: MatchComponent },
  { path: 'banner', component: BannerComponent },
  { path: 'table-teams', component: TableTeamsComponent },
  { path: 'add-player', component: AddPlayerComponent },
  { path: 'table-players', component: TablePlayersComponent },
  { path: 'table-players', component: TablePlayersComponent },
  { path: 'search', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
