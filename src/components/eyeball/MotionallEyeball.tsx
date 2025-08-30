import * as React from 'react';
import { motion } from 'motion/react';

const Eyeball: React.FC = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const eyeRef = React.useRef<HTMLDivElement>(null);

  // 检查点是否在眼睑内部
  const isPointInsideEyelids = (
    x: number,
    y: number,
    eyeballRadius: number
  ) => {
    // 将坐标转换为SVG坐标系 (0,0在���上角)
    const svgX = x + 64; // 64是SVG中心点
    const svgY = y + 40; // 40是SVG中心点

    // 上眼睑曲线：M 20 40 Q 64 10 108 40
    // 下眼睑曲线：M 20 40 Q 64 70 108 40

    // 计算在给定x坐标下，上下眼睑的y坐标
    const getUpperEyelidY = (x: number) => {
      // 二次贝塞尔曲线公式：B(t) = (1-t)²P0 + 2(1-t)tP1 + t²P2
      // 对于上眼睑：P0=(20,40), P1=(64,10), P2=(108,40)
      const t = Math.max(0, Math.min(1, (x - 20) / (108 - 20))); // 严格限制t在[0,1]

      return (
        Math.pow(1 - t, 2) * 40 + 2 * (1 - t) * t * 10 + Math.pow(t, 2) * 40
      );
    };

    const getLowerEyelidY = (x: number) => {
      const t = Math.max(0, Math.min(1, (x - 20) / (108 - 20))); // 严格限制t在[0,1]

      return (
        Math.pow(1 - t, 2) * 40 + 2 * (1 - t) * t * 70 + Math.pow(t, 2) * 40
      );
    };

    // 检查眼球边界是否在眼睑内，使用更密集的采样点
    for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 16) {
      const edgeX = svgX + Math.cos(angle) * eyeballRadius;
      const edgeY = svgY + Math.sin(angle) * eyeballRadius;

      // 更严格的水平边界检查，考虑眼睑两端的收窄
      if (edgeX <= 22 || edgeX >= 106) return false; // 增加边界缓冲区

      const upperY = getUpperEyelidY(edgeX);
      const lowerY = getLowerEyelidY(edgeX);

      // 添加垂直边界的缓冲区
      if (edgeY <= upperY + 2 || edgeY >= lowerY - 2) return false;
    }

    return true;
  };

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (eyeRef.current) {
        const rect = eyeRef.current.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        // 计算鼠标相对于眼球中心的角度和距离
        const deltaX = e.clientX - eyeCenterX;
        const deltaY = e.clientY - eyeCenterY;

        const eyeballRadius = 24; // 眼球半径（像素）
        const angle = Math.atan2(deltaY, deltaX);
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        // 将屏幕坐标转换为SVG坐标系的比例
        const scaleX = 128 / rect.width;
        const scaleY = 80 / rect.height;

        // 使用更精确的二分查找，增加迭代次数和精度
        let minDist = 0;
        let maxDist = Math.min(distance * 0.5, 40); // 减小最大搜索范围，防止飞出
        let bestDist = 0;

        // 增加迭代次数以获得更精确的结果
        for (let i = 0; i < 30; i++) {
          const testDist = (minDist + maxDist) / 2;
          const testX = Math.cos(angle) * testDist * scaleX;
          const testY = Math.sin(angle) * testDist * scaleY;

          if (isPointInsideEyelids(testX, testY, eyeballRadius * scaleX)) {
            bestDist = testDist;
            minDist = testDist;
          } else {
            maxDist = testDist;
          }

          // 如果精度足够高就提前退出
          if (maxDist - minDist < 0.1) break;
        }

        // 额外的安全检查，确保最终位置是有效的
        const finalX = Math.cos(angle) * bestDist * scaleX;
        const finalY = Math.sin(angle) * bestDist * scaleY;

        if (isPointInsideEyelids(finalX, finalY, eyeballRadius * scaleX)) {
          setMousePosition({
            x: Math.cos(angle) * bestDist,
            y: Math.sin(angle) * bestDist,
          });
        }
        // 如果最终位置无效，则不更新位置（保持当前位置）
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={eyeRef}
      className="relative flex items-center justify-center w-full h-full"
    >
      {/* 眼眶弧线 */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 128 80"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 上弧线 */}
        <path
          d="M 20 40 Q 64 10 108 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* 下弧线 */}
        <path
          d="M 20 40 Q 64 70 108 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      {/* 眼球 - 无填充的圆形，大小为眼眶高度的80% */}
      <motion.div
        className="absolute border-2 border-black rounded-full"
        style={{
          width: '48px',
          height: '48px',
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: 'spring',
          stiffness: 300, // 降低弹性系数，减少过冲
          damping: 40, // 增加阻尼，让动画更稳定
          mass: 1.2, // 增加质量，让运动更平稳
        }}
      />
    </div>
  );
};

export default Eyeball;
