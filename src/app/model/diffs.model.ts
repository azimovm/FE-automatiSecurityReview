export interface DiffsModel {
  team: string;
  mises: Mise[];
}

export interface Mise {
  name: string;
  endpoints: Endpoint[];
  version: string;
}

export interface Endpoint {
  controllerName: string;
  functionName: string;
  method?: string;
  path?: string;
  annotation?: string;
  dataClassification?: string;
  useCase?: string;
  status?: string; // Optional, since not all endpoints have a status
}
