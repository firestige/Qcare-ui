export interface ArthasJob {
  jobId: string;
  command: string;
  output: string;
  status: 'running' | 'completed' | 'failed';
  startTime: string; // ISO 8601 format
  endTime?: string; // ISO 8601 format, optional
}
