import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/signUp/sign-up.component';
import { AddMatchComponent } from './components/addMatches/add-match.component';
import { TableMatchComponent } from './components/tableMatches/table-match.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTeamComponent } from './components/add-team/add-team.component';

import { AddPlayerComponent } from './components/add-player/add-player.component';
import { TablePlayersComponent } from './components/table-players/table-players.component';
import { MatchDetailComponent } from './components/match-detail/match-detail.component';
import { MatchesComponent } from './components/matches/matches.component';
import { MatchComponent } from './components/match/match.component';
import { BannerComponent } from './components/banner/banner.component';
import { ColorDirective } from './directives/color.directive';
import { AuthorPipe } from './author.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { VoyellePipe } from './pipes/voyelle.pipe';
import { MyFilterPipe } from './pipes/my-filter.pipe';
import { TableTeamsComponent } from './components/table-teams/table-teams.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { MatchesService } from './services/matches.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    SignUpComponent,
    AddMatchComponent,
    TableMatchComponent,
    AddTeamComponent,
    AddPlayerComponent,
    TablePlayersComponent,
    MatchDetailComponent,
    MatchesComponent,
    MatchComponent,
    BannerComponent,
    ColorDirective,
    AuthorPipe,
    ReversePipe,
    VoyellePipe,
    MyFilterPipe,
    TableTeamsComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [MatchesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
