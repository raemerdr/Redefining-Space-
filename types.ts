export interface DesignConcept {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export enum GenerationStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface DesignRequest {
  prompt: string;
  style: string;
  roomType: string;
}
