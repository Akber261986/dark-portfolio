import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface SkillIndicatorProps {
  percentage: number;
  skillName: string;
  color: string;
}

const SkillIndicator: React.FC<SkillIndicatorProps> = ({ percentage, skillName, color }) => {
  return (
    <div className="w-32 text-center">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: 'var(--text-color)', 
          pathColor: color,
          trailColor: 'var(--trail-color)', 
          textSize: '16px',
        })}
      />
      <p className="mt-[10px] font-bold text-[#666] dark:text-white">
        {skillName}
      </p>
    </div>
  );
};

export default SkillIndicator;
