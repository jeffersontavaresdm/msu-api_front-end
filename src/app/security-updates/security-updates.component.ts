import {Component, Input, OnInit} from '@angular/core';
import {SecurityUpdate} from "../../dto/security-update.dto";
import {MicrosoftSecurityUpdatesService} from "../../service/microsoft-security-updates.service";

@Component({
  selector: 'app-security-updates',
  templateUrl: './security-updates.component.html',
  styleUrls: ['./security-updates.component.css']
})
export class SecurityUpdatesComponent implements OnInit {
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

  constructor(private msuService: MicrosoftSecurityUpdatesService) {}

  reset() {
    this.filteredUpdates = this.updates
    this.search = ''
  }

  filterData(event: KeyboardEvent) {
    this.search = (event.target as HTMLInputElement).value;

    if (!this.search) {
      this.filteredUpdates = this.updates
      return
    }

    if (event.code == 'Enter') {
      this.filteredUpdates = this.updates.filter(update => {
        return (update.key.toLowerCase().includes(this.search.toLowerCase())
          || update.alias.toLowerCase().includes(this.search.toLowerCase())
          || update.documentTitle.toLowerCase().includes(this.search.toLowerCase())
          || (update.severity && update.severity.toLowerCase().includes(this.search.toLowerCase()))
          || update.initialReleaseDate.toLowerCase().includes(this.search.toLowerCase())
          || update.currentReleaseDate.toLowerCase().includes(this.search.toLowerCase())
          || update.cvrfUrl.toLowerCase().includes(this.search.toLowerCase())
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
