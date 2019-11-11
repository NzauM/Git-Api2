import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';
import { RepoServiceService } from '../repo-service.service';


@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.css']
})
export class UserReposComponent implements OnInit {
 
  myRepo:Repo[];

  constructor(public reposerv: RepoServiceService) {
  }
 

  getRepo(searchTerm: string) {
    this.reposerv.getRepo(searchTerm).subscribe(data => {
      this.myRepo = data;
      return(this.myRepo);
    });
  }

  
  ngOnInit() {
    
    this.getRepo('NzauM');
    
  }
}