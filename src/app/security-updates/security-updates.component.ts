import {Component, Input} from '@angular/core';
import {SecurityUpdate} from "../../dto/security-update.dto";
import {MicrosoftSecurityUpdatesService} from "../../service/microsoft-security-updates.service";

@Component({
  selector: 'app-security-updates',
  templateUrl: './security-updates.component.html',
  styleUrls: ['./security-updates.component.css']
})
export class SecurityUpdatesComponent {
  @Input() updates: SecurityUpdate[] = []
  displayedColumns: string[] = [
    'id',
    'alias',
    'documentTitle',
    'severity',
    'initialReleaseDate',
    'currentReleaseDate',
    'cvrfUrl'
  ];

  constructor(private msuService: MicrosoftSecurityUpdatesService) {
  }

  ngOnInit(): void {
    this.msuService.getUpdates().subscribe(updates => {
      this.updates = updates
    })
  }
}
