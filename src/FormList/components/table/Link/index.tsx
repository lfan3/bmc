import React from 'react';
import { Tooltip, Button } from 'antd';
import { history } from 'umi';

export default ({ index, value, record, ellipsis, href, blank }) => {
  const onclick = () => {
    if(!href){
      return;
    }
    if(blank){
      window.open(href);
    }else{
      history.push(href);
    }
  }
  return ellipsis ? (
    <Tooltip placement="topLeft" title={value}>
      <a onClick={onclick}>
      {value}
      </a>
    </Tooltip>
  ) : (
    <a onClick={onclick}>
      {value}
    </a>
  );
}