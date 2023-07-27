import React, { type FC } from 'react';

const Foo: FC<{ 
  /**
   * @description 属性描述
   * @default "默认值"
   */
  title: string,
   /**
   * @description 数字描述
   * @params 1
   */
  id: number,
}> = (props) => <h4>{props.title}</h4>;

export default Foo;
