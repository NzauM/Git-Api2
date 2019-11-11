import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { GitUser } from './git-user';
import { SearchUserComponent } from './search-user/search-user.component';
import { from } from 'rxjs';
import { Repo } from './repo';

@Injectable({
  providedIn: 'root'
})
export class UserViceService {
  user: GitUser[] = [];
  repo:Repo[]=[];
  _URL = 'https://api.github.com/users/';
  token = '?access_token=8538e65840c701357470f29c5e08a2f443151a65';
  // clientId = 'fb66d0e0546839ba2524'
  // clientSecret = '0fd0d4e53cf1f59944b5af450da89fb703cca81d'

  constructor(private http:HttpClient) { 

  }

  searchMyUser(searchTerm: string) {
   
    interface data {
      login: string;
      avatar_url: string;
      following: string;
      followers: string;
      public_repos: string;
    }

    

    return new Promise((resolve, reject) => {
      this.user = [];
      this.http.get<data>(this._URL + searchTerm + this.token).toPromise().then(
        (results) => {
          // @ts-ignore

          this.user.push(results);
          resolve();
        },
        (error) => {
          reject();
        }
      );
    });
  }

  
}



