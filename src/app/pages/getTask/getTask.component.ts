import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BaseController } from "src/app/core/baseController";


@Component({
  selector: 'app-get-task',
  templateUrl: './getTask.component.html'
})
export class GetTaskComponent  {
  constructor(private _route: Router, private activatedRoute: ActivatedRoute) {
   // super();
  }
  ngOnInit() {
  }

}
