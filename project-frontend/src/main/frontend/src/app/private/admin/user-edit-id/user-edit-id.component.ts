import {Component, OnInit} from '@angular/core';
import {User, UserControllerService} from "../../../generated/rest/project";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-edit-id',
  templateUrl: './user-edit-id.component.html',
  styleUrls: ['./user-edit-id.component.scss']
})
export class UserEditIdComponent implements OnInit {




  user: User = {};

  constructor(private userClientService: UserControllerService,
              private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.router.params.subscribe(p => {
      if (p['id']) {
        this.userClientService.getUser(p['id']).subscribe(u => {
          this.user = u;
        })
      }
    })
  }

  save() {
    this.userClientService.saveUser(this.user).subscribe(u=>{
      this.user = u;
    })
  }
}
