import React from 'react';

export const Tag: React.FC<{ tag: string }> = (props) => {
  return (
    <div className="tag">{props.tag}</div>
  );
};
