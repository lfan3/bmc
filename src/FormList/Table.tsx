import * as React from 'react';
import { Table, Tooltip, Space, Typography } from 'antd';
import { get } from 'lodash';
import { useSetState } from 'ahooks';
import { ITablePropsData, ITableColumn } from './types';
import { QuestionCircleOutlined } from '@ant-design/icons';
const { Text, Link } = Typography;

export default (props: ITablePropsData) => {
  const {
    form,
    styles = {},
    refresh,
    tableProps,
    ColumnsMap,
    ActionsMap,
    reset,
    customActionsRender,
    paginationProps,
    // schema = {},
    tableColumns = [],
    shuttle = () => { },
  } = props;
  
  const { wrapperStyles } = styles;

  const defaultStyles = {};

  console.log("tableprops", tableProps)
  // todo: move to in container?
  const shuttleProps =
    typeof shuttle === 'function'
      ? shuttle()
      : { ...(shuttle || {}) };

  const _props = { ...tableProps, ...shuttleProps };
  if (!tableColumns || tableColumns.length < 1) {
    return null;
  }
  
  // 处理数据
  const formData = form.getFieldsValue();
  const getColums = (columns: ITableColumn[]) => {
    return columns.map((item:any, id:number) => {
      const {
        title,
        type,
        dataIndex,
        children, //???
        props = {},
        ellipsis = true,
        ...others
      } = item;
      let component = ColumnsMap[type];
      if(!component){
        console.error(`Table column type ${type} is not defined, render it as Text component`);
        component = ColumnsMap['Text']
      }
      if(children && children.length>0){
        return {
          children: getColums(children),
          ...others,
        }
      }
      return {
        ...others,
        title,//ReactNode
        dataIndex,
        key: dataIndex,
        ellipsis,
        render:(value:any, record:any, index:number)=>{
          <component
            {...others}
            index={index}
            value={value}
            record 
            ellipsis={ellipsis}
            // refresh={refresh}?
            formData={formData}//??how to use
          />
        }
      }
    })
  }
  console.log("aa",getColums(tableColumns))
  return (
    <Table {...tableProps} columns={getColums(tableColumns)} />
  )
}