export interface SecurityUpdate {
  id: string;
  alias: string;
  documentTitle: string;
  severity: string | undefined;
  initialReleaseDate: string;
  currentReleaseDate: string;
  cvrfUrl: string
}
