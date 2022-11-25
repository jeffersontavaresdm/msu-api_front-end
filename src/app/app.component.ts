import {Component, OnInit} from '@angular/core';
import {MicrosoftSecurityUpdatesService} from "../service/microsoft-security-updates.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private msuService: MicrosoftSecurityUpdatesService) {
  }

  ngOnInit(): void {
  }
}
