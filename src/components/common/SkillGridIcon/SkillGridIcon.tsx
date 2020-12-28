import React, { FC } from 'react';

import './SkillGridIcon.scss';

interface ISkillGridIcon {
  name: string
  bgColor: string
  fill?: boolean
  SVGIcon: any
}

const SkillGridIcon: FC<ISkillGridIcon> = ({ name, bgColor, fill, SVGIcon }) => {
  return (
    <div className="skill-grid-icon" >
      <SVGIcon className="icon" style={{ backgroundColor: bgColor, fill: fill && "#000000" }} />
      <span>{name}</span>
    </div>
  )
}

export default SkillGridIcon;
