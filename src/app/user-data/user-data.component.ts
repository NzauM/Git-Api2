import { Component, OnInit } from '@angular/core';
import { UserViceService } from '../user-vice.service';
import { GitUser } from '../git-user';
import { RepoServiceService } from '../repo-service.service';
import { Repo } from '../repo';



@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  user:GitUser[];
  myRepo:Repo;
  
  constructor(public service:UserViceService , public serviceRepo:RepoServiceService) { }

  getSearchedUser(searchTerm) {
    this.service.searchMyUser(searchTerm).then(
      (success) => {
        this.user = this.service.user;
        // console.log(this.user);
      },
      (error) => {
        console.log(error);
      }
    );

    this.serviceRepo.getRepo(searchTerm).subscribe(
      (success)=>{
        this.myRepo = success
        return (this.myRepo)
        console.log(this.myRepo)
      }
    )
  }



  ngOnInit() {
    this.getSearchedUser('NzauM');
    
  }
  }


