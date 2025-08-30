import * as React from 'react';

const StaticEyeball: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        className="w-full h-full"
        viewBox="0 0 128 80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* 上眼睑弧线 */}
        <g>
          <path
            d="M 20 40 Q 64 0 108 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* 上睫毛 - 5根沿着上眼睑分布 */}
          <path
            d="M 35 28 L 32 22"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M 49 21 L 47 15"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M 64 18 L 64 11"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M 79 21 L 81 15"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M 93 28 L 96 22"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>

        {/* 下眼睑弧线 */}
        <g>
          <path
            d="M 20 40 Q 64 80 108 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M 20 44 Q 64 82 108 44"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </g>

        {/* 静态眼球 - 位于中心 */}
        <g>
          <circle
            cx="64"
            cy="40"
            r="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle
            cx="64"
            cy="40"
            r="8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </g>
      </svg>
    </div>
  );
};

export default StaticEyeball;
