import React, { Children, useMemo } from 'react';
import { useAntdTable } from 'ahooks';
import { Form } from 'antd';
import { get, merge } from 'lodash';
import { history } from 'umi';
import { ListStyles, FilterPropsData } from './types';
import {
  filterComponentsMap as _filterCompsMap,
  tableColumnsMap as _tableColumnsMap,
  // tableActionsMap as _tableActionsMap,
  _filterFormProps,
  _filterFormStyles,
  _filterFormItemLayout,
  // _paginationWrapperStyles,
} from './config';

const noop = () => { };

/**
 * 容器组件，用于封装和预处理模块的数据 renderprops 高阶组件
 * 主要用来控制form的初始值，并预处理filter和table的数据
 * 
 */
export default (props: any) => {
  if (!props.children && typeof props.children !== 'function') {
    return null;
  }
  const [form] = Form.useForm();

  const {
    styles = {},
    fetchData = noop,
    // fetchSchema = noop,
    hasPagination = true, // 是否展示翻页，默认true
    filterFormProps = {},
    actionBarProps = {}, // actionBar模块参数
    paginationProps, // pagination组件参数
    filterCompsMap = {}, // filter中的替换组件map映射
    tableActionsMap = {}, // table中的操作行为组件map映射
    tableColumnsMap = {}, // table中的列组件map映射
    schema = {},
    refreshDeps,
    tableShuttle = () => { },
    filterShuttle = () => { },
    defaultParams = [],
  } = props;

  const {
    filterWrapperStyles = {}, // filter区块样式
    filterFormStyles = {}, // filterForm样式
    filterFormItemLayout = {}, // filterFormItem样式
    tableWrapperStyles = {}, // table区块样式
    paginationWrapperStyles = {}, // 翻页区块样式
  }: ListStyles = styles || {};

  const { filterSchema, tableSchema, breadcrumbSchema } = schema || {};
  const breadcrumbPropsData = get(breadcrumbSchema, 'props.dataSource') || [];
  const filterDataSource = get(filterSchema, 'props.dataSource') || [];
  const tableColumns = get(tableSchema, 'props.columns') || [];

  // bind filter with table
  // todo: demo with fetchData
  const antdTable = useAntdTable(fetchData, {
    form,
    refreshDeps: refreshDeps, //refreshDeps 变化，会重置 current 到第一页，并重新发起请求
    defaultParams: merge(
      [
        {
          current: 1,
          pageSize: 10,
        },
        filterDataSource.reduce((params: any, item: any) => {
          return {
            ...params,
            [item.key]: item.value, //?can getvalue
          };
        }, {}),
      ],
      defaultParams,
    ),
  });
  const {
    paginationProps: _paginationProps,
    tableProps,
    refresh,
    refreshAsync,
    search, //include {type, changeType, submit, reset}
    loading,
  } = antdTable;
  
  const { submit, reset } = search;
  
  // filter数据预处理
  
  const FilterCompsMap = { ..._filterCompsMap, ...(filterCompsMap || {}) };
  const FilterFormProps = { ..._filterFormProps, ...(filterFormProps || {}) };
  const filterPropsData: FilterPropsData = {
    styles: {
      wrapperStyles: filterWrapperStyles,
      formItemLayout: {
        ..._filterFormItemLayout,
        ...(filterFormItemLayout || {}),
      },
      formStyles: { ..._filterFormStyles, ...filterFormStyles },
    },
    form,
    loading,
    submit,
    search,
    tableProps,
    refreshAsync,
    refresh,
    reset,
    schema: filterSchema,
    CompsMap: FilterCompsMap,
    formProps: FilterFormProps,
    shuttle: filterShuttle,
  };
  // table数据预处理
  const tableColumsMap = { ..._tableColumnsMap, ...(tableColumnsMap || {}) };
  // todo shuttle props can be combined with tableProps
  const tablePropsData = {
    form,
    styles: {
      wrapperStyles: tableWrapperStyles,
    },
    reset,
    submit,
    refresh,
    refreshAsync,
    tableProps,
    // schema: tableSchema,
    tableColumns: tableColumns,
    ColumnsMap: tableColumsMap ,
    shuttle: tableShuttle,
  }
  console.log(tablePropsData, 'tablePropsData')
  console.log(filterPropsData, 'filterPropsData')
  // pagination数据预处理
  const paginationPropsData = {
    paginationProps: {..._paginationProps, ...paginationProps},
  }
  console.log("tableprops", tableProps)
  // todo not do action yet
  

  return props.children({
    filterPropsData,
    tablePropsData,
    paginationPropsData
  })
}