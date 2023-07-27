import { FormInstance } from 'antd/lib/form';
import { FormProps } from 'antd/lib/form';

export interface IOption{
  label: string;
  value: string;
}

export interface ListProps {
  styles?: ListStyles;
  containerStyle?:any;
  
  fetchData: any;
  fetchSchema?: any; //?

  filterFormProps?: FormProps;
  filterCompsMap?: any;
  
  actionBarProps?: any;
  paginationProps?: any;
  tableActionsMap?: any;
  tableColumnsMap?: any;

  customFilterRender?: any;
  customActionsRender?: any;
  customActionBarRender?: any;
  customTableRender?: any;
  customPaginationRender?: any;

  hasPagination?: boolean;
  
  schema:any,
  refreshDeps?: any, //???
  tableShuttle?: () => {},
  filterShuttle?: () => {},
  defaultParams?: [],
  
  [propName: string]: any;
}

// 列表样式类型
export interface ListStyles {
  filterWrapperStyles?: any;
  filterFormStyles?: any;
  tableWrapperStyles?: any;
  paginationWrapperStyles?: any;
  filterFormItemLayout?:any
  [propName: string]: any;
}

interface optionType{
  label: string;
  value: string;
}

// filter schema.dataSource
export interface FilterDataItem {
  label: string;
  key: string;
  placeholder?: string;
  type: string;
  allowClear?: boolean;
  options?: optionType[];
  value?: any;
  labelAlign?: string;
}

// filter区域的组件入参数据类型
export interface FilterPropsData {
  styles?: ListStyles;
  form: FormInstance;
  loading?: any;
  submit: any;
  search?: any;
  refresh?: any;
  refreshAsync?: any;
  tableProps?: any;
  reset?: any;
  schema: {
    dataSource?: FilterDataItem[];
  };
  CompsMap: any;
  formProps?: FormProps;
}

// filter Datasource的数据类型 todo 这个地方 antd 应该提供type
export interface filterDataSource{
  label: string;
  key: string | number;
  placeholder: string;
  type: string, //Select antd Form realted compoenent
  allowClear: boolean;
  options: IOption[];
}

type TableColumType = "Select" | "Input" | "Staff" | "Cascader" | "DatePicker" | "RangePicker" | "Radio" | "Checkbox" | "InputNumber" | "Switch" | "Rate" | "Slider" | "Transfer" | "Upload" | "TreeSelect" | "Mentions" | "AutoComplete"


export interface ITableColumn {
  // label: string;
  // key: string;
  // placeholder: string;
  // type: TableColumType;
  // allowClear: boolean,
  // options: IOption[];
  title: string;
  dataIndex: string | string[];
  width:number;
  type: TableColumType;
  href: string;
  hrefParams: string[];
  ellipsis: boolean;
  fixed:boolean;
} 


export interface ITableSchema {
  // ?? props is nessasary to add here?
  props: {
    columns: ITableColumn[];
  }
}

// table区域的组件入参类型
export interface ITablePropsData {
  form: FormInstance;
  styles?: ListStyles;
  reset?: any;
  refresh?: any;
  refreshAsync?: any;
  submit?: any;
  changeTable?: any;
  tableProps?: any;
  // schema: ITableSchema[];
  tableColumns:ITableColumn[];
  ColumnsMap: any;
  paginationProps?: any;
  ActionsMap?: any;
  customActionsRender?: any;
  shuttle?: {} | (() => {});
}

// container children渲染函数入参
export interface ContainerChildrenProps extends ListStyles {
  filterPropsData: FilterPropsData;
  tablePropsData: ITablePropsData;
  paginationPropsData: any;
  actionBarPropsData: any;
}