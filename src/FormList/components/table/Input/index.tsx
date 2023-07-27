import React from 'react';
import { Input } from 'antd';

export default ({ index, value, record }) => {
  return <Input key={index} value={value} />;
}