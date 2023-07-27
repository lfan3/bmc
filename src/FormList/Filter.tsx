import * as React from 'react';
import { Form, Row, Col, Button } from 'antd';
import { get } from 'lodash';

import { FilterPropsData, FilterDataItem } from './types';

const Filter = ({
  form,
  loading,
  submit,
  reset,
  styles = {},
  schema = {},
  CompsMap = {},
  formProps = {},
  shuttle = () => {},//??what kind of shuttle we need?
}: FilterPropsData) => {
  const dataSource = get(schema, 'props.dataSource') || [];
  if (dataSource.length < 1) {
    return null;
  }
  const { wrapperStyles, formStyles, formItemLayout } = styles || {};
  const shuttleProps = typeof shuttle === 'function' ? shuttle() : { ...(shuttle || {}) };
  const inline = get(shuttleProps, 'inline'); //???
  
  const renderComponents = (record:FilterDataItem, idx:number, CompsMap:any)=>{
    const { type, key, label, labelAlign = 'right', value, ...others } = record;
    console.log("filter, type", type)
    let Com = CompsMap[type || 'Input'];
    if (!Com) {
      console.error(`Filter 中没有 ${type} 类型组件，请检查`);
    }
    return (
      <Form.Item
        key={`Filter_${idx}`}
        name={key}
        label={inline ? undefined : label}
        {...formItemLayout}
      >
        <Com
          style={{ width: '100%' }}
          label={inline ? label : undefined}
          {...others}
          refresh={submit}
        />
      </Form.Item>
    );
  }
  
  return (
    <div
    style={{
      backgroundColor: '#fff',
      padding: '10px',
      paddingBottom: '6px',
      marginBottom: '16px',
      ...wrapperStyles,
    }}
    >
    <Form form={form} {...formProps} style={formStyles}>
      {dataSource.map((record:FilterDataItem, idx:number) => renderComponents(record, idx, CompsMap))}
    </Form>
    </div>
  )
  
}

export default Filter;