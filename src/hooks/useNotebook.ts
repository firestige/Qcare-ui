import { useQuery } from '@tanstack/react-query';
import { fetchNotebook } from '../services/arthasService.ts';
import type { ArthasJob } from '../types/arthas';

const initialJobs: ArthasJob[] = [
  {
    command: 'jad java.lang.String',
    output: '',
    status: 'running',
    jobId: '123',
    startTime: '',
  },
  {
    command: 'sm -d org.springframework.boot',
    output: '123',
    status: 'completed',
    jobId: '456',
    startTime: '',
  },
  {
    command: 'sc -d org.springframework.boot',
    output: 'can not fetch data',
    status: 'failed',
    jobId: '789',
    startTime: '',
  },
];

export const useNotebook = (id: string) => {
  return useQuery({
    queryKey: ['notebook', id],
    queryFn: () => fetchNotebook(id),
    staleTime: 5 * 60 * 1000, // 5分钟缓存
    initialData: initialJobs, // 使用初始数据
  });
};
