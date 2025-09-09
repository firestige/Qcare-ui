import type { ArthasJob } from '../types/arthas';
import axios from 'axios';

export async function fetchNotebook(id: string): Promise<ArthasJob[]> {
  const resp = await axios.get(`/api/v1/arthas/jobs/${id}`);
  return resp.data;
}
