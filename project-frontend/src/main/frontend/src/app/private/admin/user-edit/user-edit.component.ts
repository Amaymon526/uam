import {Component, OnInit} from '@angular/core';
import {User, UserControllerService} from "../../../generated/rest/project";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {


  user: User = {};

  constructor(private userClientService: UserControllerService,
              private router: ActivatedRoute,
              private _location: Location) {
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
    this.userClientService.saveUser(this.user).subscribe(u => {
      this.user = u;
      this._location.back()
    })
  }
}
