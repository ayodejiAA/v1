import React, { useState, FunctionComponent } from "react";

import "./WorkHistory.scss";

export interface Duration {
  start: string;
  end: string;
}

export interface Details {
  name: string;
  title: string;
  duration: Duration;
  details: Array<string>;
}

export interface DataProps {
  data: Array<Details>;
}

export const WorkHistory: FunctionComponent<DataProps> = ({ data }) => {
  const [selected, setSelected] = useState<boolean>(false);
  const [tabIndex, setTabIndex] = useState<number>(0);

  const onTabClick = (tabId: number) => {
    setTabIndex(tabId);
    setSelected(!selected);
  };

  const { name, title, duration, details } = data[tabIndex];

  return (
    <div className="work">
      <ul className="tab-list">
        {data.map(({ name }, index) => (
          <li
            key={index}
            aria-selected={index === tabIndex}
            onClick={() => onTabClick(index)}
          >
            {name}
          </li>
        ))}
      </ul>
      <div className="tab-content">
        <h3 className="title">
          {title}
          <span className="company-name">{` @${name}`}</span>
        </h3>
        <span className="date">{`${duration.start } - ${ duration.end}`}</span>
        {details.map((detail, index) => (
          <p key={index}>{detail}</p>
        ))}
      </div>
    </div>
  );
};
