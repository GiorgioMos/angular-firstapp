import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {

    allowNewServer = false;
    serverCreationStatus = 'No server was created yet';
    serverName = '';

    constructor() {
      setTimeout(() => {
        this.allowNewServer = true
      }, 3000);
    }

    onCreateServer() {
        this.serverCreationStatus ='Server was created!';
    }
    onUpdateServerName(event: any) {
        this.serverName = event.target.value;
    }
}
