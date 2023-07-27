import React,{ type FC }  from 'react';
import { ListProps } from './types';
import Container from './container';
import { PageContainer } from '@ant-design/pro-layout';
import Filter from "./Filter";
import Table from './Table';


function FormList(props:ListProps){
  const {
    customFilterRender,
    customTableRender,
    customBreadcrumbRender,
    customActionBarRender,
    customActionsRender,
    customPaginationRender,
    containerStyle = {},
    ...others
  } = props;
  
  return (
    <Container {...others}>
      {({ filterPropsData,
        tablePropsData})=>{
        return (
          <PageContainer>
            <Filter {...filterPropsData} />
            <Table {...tablePropsData} />
          </PageContainer>
        )
      }}
    </Container>
  )
}

export default FormList;
