import React from 'react';
import { Tooltip } from 'antd';

export default ({ index, value, record, ellipsis }) => {
  debugger;
  return ellipsis ? (
    <Tooltip placement="topLeft" title={value}>
      {value}
    </Tooltip>
  ) : (
    <div>{value}</div>
  );
};