export enum MaterialCategory {
  CBT = 'CBT',
  DBT = 'DBT',
  ACT = 'ACT',
  Mindfulness = 'Mindfulness',
}

export enum MaterialType {
  PDF = 'PDF',
  Video = 'Video',
  Worksheet = 'Worksheet',
}

export enum MaterialStatus {
  Active = 'Active',
  Inactive = 'Inactive',
}

export interface Material {
  id: string;
  title: string;
  category: MaterialCategory;
  type: MaterialType;
  status: MaterialStatus;
  description: string;
  uploadDate: string;
  size: string;
  fileName?: string;
}
