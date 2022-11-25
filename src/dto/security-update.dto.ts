export interface SecurityUpdate {
  id: string;
  key: string;
  alias: string;
  documentTitle: string;
  severity: string | undefined;
  initialReleaseDate: string;
  currentReleaseDate: string;
  cvrfUrl: string
}
