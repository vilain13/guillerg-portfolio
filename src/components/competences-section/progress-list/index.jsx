// ProgressList.js
import React from 'react';
import ProgressBar from '../progress-bar';

function ProgressList({ data }) {
  return (
    <div>
      {data.map((item, index) => (
        <ProgressBar
          key={index}
          title={item.title}
          percentage={item.percentage}
        />
      ))}
    </div>
  );
}

export default ProgressList;


