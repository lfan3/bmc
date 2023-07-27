interface Item {
  name: {
    last: string;
  };
  email: string;
  phone: string;
  gender: 'male' | 'female';
}

interface Result {
  total: number;
  list: Item[];
}

function generateComplexSource(row: number) {
  const result = [];
  for (let i = 0; i < row; i++) {
    result.push({
      name: { xxx: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible` },
      phone: i,
      time: 2000 + i,
      email: `${100306660940 + i}@alibaba-inc.com`,
      actions: [
        {
          type: 'openLink',
          text: '点击跳转',
          href: 'https://taobao.com',
        },
        {
          type: 'actToast',
          text: '点击toast',
          content: 'toast提示内容',
        },
      ],
    });
  }
  return result;
}


export const getTableData = (
  { current, pageSize },
  formData: Object,
): Promise<Result> => {
  console.debug(`current: ${current}`);
  console.debug(`pageSize: ${pageSize}`);
  console.debug('formData:', formData);

  return new Promise(resolve => {
    resolve({
      total: current === 6 ? 40 : 55,
      list: generateComplexSource(10),
    });
  });
}
  
export const getSchema = () => {
  const breadcrumbSchema = {
    props: {
      dataSource: [
        { breadcrumbName: '调查中心', path: '/' },
        { breadcrumbName: '调查详情', path: '/detail' },
      ],
    },
  };
  const filterSchema = {
      props: {
        dataSource: [
          {
            label: '环境:',
            key: 'environment',
            placeholder: '请选择',
            type: 'Select',
            allowClear: true,
            options: [
              {
                label: '线上',
                value: 'online',
              },
              {
                label: '观察',
                value: 'observe',
              },
            ],
          },
        ],
      },
  };
  
  const tableSchema = {
      props: {
        columns: [
          {
            title: 'name3',
            dataIndex: ['name', 'xxx'],
            width: 140,
            type: 'A',
            href: '/xxxx',
            hrefParams: ['name2'],
            ellipsis: false,
            fixed: true,
          },
          {
            title: 'name2',
            dataIndex: 'name1',
            width: 140,
            type: 'Text',
            tooltip: 'xxxxyy',
  
            fixed: true,
          },
          {
            title: 'name1',
            dataIndex: 'name11',
            tooltips: [
              'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
              'yyyyy',
              'zzzz',
            ],
            width: 140,
            type: 'Text',
            filterSearch: true,
            filters: [
              {
                text: 'Joe',
                value: 'Joe',
              },
              {
                text: 'Category 1',
                value: 'Category 1',
              },
              {
                text: 'Category 2',
                value: 'Category 2',
              },
            ],
          },
          {
            title: 'name',
            dataIndex: 'name21',
            width: 140,
            type: 'Text',
            sorter: (a, b) => a.age - b.age,
          },
          {
            title: 'name',
            dataIndex: 'name31',
            width: 140,
            type: 'Text',
          },
          {
            title: 'name',
            dataIndex: 'name41',
            width: 140,
            type: 'Text',
          },
          {
            title: 'name',
            dataIndex: 'name52',
            width: 140,
            type: 'Text',
          },
          // {
          //   title: 'email',
          //   dataIndex: 'email',
          //   width: 140,
          //   type: 'Input',
          // },
          // {
          //   title: 'phone',
          //   width: 140,
          //   dataIndex: 'phone',
          //   type: 'Enums',
          //   enums: {
          //     1: 'xxx',
          //     2: 'yyy',
          //   },
          // },
          // {
          //   title: '操作',
          //   dataIndex: 'actions',
          //   width: 200,
          //   type: 'Actions',
          // },
        ],
      },
    };
  
    return {
      filterSchema,
      tableSchema,
      breadcrumbSchema,
    };
};
