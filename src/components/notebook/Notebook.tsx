import React, { useState } from 'react';
import Cell from './Cell.tsx';
import { useNotebook } from '../../hooks/useNotebook.ts';

const Notebook: React.FC<{ sid: string }> = ({ sid }) => {
  const { data, loading, error } = useNotebook(sid);
  const [selected, setSelect] = useState(1); // 假设有一个hook获取notebook数据
  return (
    <div className="flex flex-col w-full gap-2">
      {data?.map((job, i) => (
        <Cell
          key={`cell-${i}`}
          cid={i}
          command={job.command}
          output={job.output}
          onSelect={setSelect}
          active={selected === i}
        />
      ))}
    </div>
  );
};

export default Notebook;
