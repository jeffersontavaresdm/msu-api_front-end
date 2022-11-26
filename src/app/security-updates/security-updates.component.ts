import {Component, Input} from '@angular/core';
import {SecurityUpdate} from "../../dto/security-update.dto";
import {MicrosoftSecurityUpdatesService} from "../../service/microsoft-security-updates.service";

@Component({
  selector: 'app-security-updates',
  templateUrl: './security-updates.component.html',
  styleUrls: ['./security-updates.component.css']
})
export class SecurityUpdatesComponent {
  @Input() search: string = ''
  @Input() updates: SecurityUpdate[] = []
  @Input() filteredUpdates: SecurityUpdate[] = []
  displayedColumns: string[] = [
    'id',
    'key',
    'alias',
    'documentTitle',
    'severity',
    'initialReleaseDate',
    'currentReleaseDate',
    'cvrfUrl'
  ];

  constructor(private msuService: MicrosoftSecurityUpdatesService) {
  }

  closeEvent() {
    this.filteredUpdates = this.updates
    this.search = ''
  }

  filterData(event: KeyboardEvent) {
    this.search = (event.target as HTMLInputElement).value.toLowerCase();

    if (!this.search) {
      this.filteredUpdates = this.updates
      return
    }

    if (event.code == 'Enter') {
      this.filteredUpdates = this.updates.filter(update => {
        return (update.key.toLowerCase().includes(this.search)
          || update.alias.toLowerCase().includes(this.search)
          || update.documentTitle.toLowerCase().includes(this.search)
          || (update.severity != undefined && update.severity.toLowerCase().includes(this.search))
          || update.initialReleaseDate.toLowerCase().includes(this.search)
          || update.currentReleaseDate.toLowerCase().includes(this.search)
          || update.cvrfUrl.toLowerCase().includes(this.search)
        )
      })
    }
  }

  ngOnInit(): void {
    this.msuService
      .getUpdates()
      .subscribe(updates => {
        this.updates = updates;
        this.filteredUpdates = updates
      })
  }
}
