import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {config} from "../config";
import {SecurityUpdate} from "../dto/security-update.dto";

@Injectable({
  providedIn: 'root',
})
export class MicrosoftSecurityUpdatesService {

  constructor(private http: HttpClient) {
  }

  getUpdates() {
    return this.http.get<SecurityUpdate[]>(`${config.apiUrl}/updates`)
  }
}
