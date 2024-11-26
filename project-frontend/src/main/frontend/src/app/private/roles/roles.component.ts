
import {Role, RoleControllerService, User, UserControllerService} from "../../generated/rest/project";
import {ActivatedRoute} from "@angular/router";

import {Component, OnInit} from '@angular/core';




@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent {


  constructor(private roleService: RoleControllerService,
              private router: ActivatedRoute) {
  }

  roles : Role[] = [];
  ngOnInit() {

    this.roleService.getAllRoles().subscribe(u => {this.roles = u})

  }
  delete (id : any)
  {

    window.location.reload();
  }

  reload()
  {
    window.location.reload();
  }

  edit (id : any)
  {

  }


}
