import React from 'react';
import clsx from 'clsx';

export interface CellData {
  cid: number;
  command?: string;
  output?: string;
  onSelect: (id: number) => void;
  active: boolean;
}

const Cell: React.FC<CellData> = props => {
  const { cid, command, output, onSelect, active } = props;

  return (
    <div
      className="w-full min-h-18 flex flex-row gap-1 justify-center"
      onClick={() => onSelect(cid)}
    >
      <div className={clsx('w-2 rounded-md my-2', active && 'bg-blue-600')} />
      <div className="w-10 px-1 py-2">
        <span className="text-xl">[{cid + 1}]</span>
      </div>
      <div className="grow flex flex-col p-2 gap-2">
        <div className="mb-2 p-2 min-h-4 bg-gray-100 rounded text-black">{`>${command}`}</div>
        <div className="p-2 bg-black text-green-400 rounded whitespace-pre-wrap font-mono">
          {output}
        </div>
      </div>
    </div>
  );
};

export default Cell;
