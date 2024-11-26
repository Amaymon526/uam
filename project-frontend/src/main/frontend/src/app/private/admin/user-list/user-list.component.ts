import {Component, OnInit} from '@angular/core';
import {User, UserControllerService} from "../../../generated/rest/project";
import {ActivatedRoute} from "@angular/router";
import {UserEditComponent} from "../user-edit/user-edit.component";


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})



export class UserListComponent implements OnInit {



  constructor(private userClientService: UserControllerService,
              private router: ActivatedRoute) {
  }

  users : User[] = [];
  ngOnInit() {

    this.userClientService.allProjects().subscribe(u => {this.users = u})

  }
  delete (id : any)
  {
    this.userClientService.deleteUser(id).subscribe(b => {})
    window.location.reload();
  }

  reload()
  {
    window.location.reload();
  }

  edit (id : any)
  {

  }

    protected readonly UserEditComponent = UserEditComponent;
}

