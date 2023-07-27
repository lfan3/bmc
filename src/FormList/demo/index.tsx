import React, { useState } from 'react';
import {FormList} from 'sbc';
import { getTableData, getSchema } from './getData';


export default () => {
  return <FormList fetchData={getTableData} schema={getSchema()}/>
}
