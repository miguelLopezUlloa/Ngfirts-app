import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.css']
})
export class MachinesComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = '';

  constructor() {
     setTimeout( () => {
                                  this.allowNewServer = true;
       },

       2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
     this.serverCreationStatus = 'Server was created! and the Name is:' + this.serverName;
  }

  onUpdateServerName(event: Event) {
      // console.log(event);
       this.serverName = (<HTMLInputElement>event.target).value;
  }

}
