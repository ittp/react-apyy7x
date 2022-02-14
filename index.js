import React, { Component } from 'react';
import { render } from 'react-dom';

import HeaderView from './components/Header';
import SettingsView from './components/Settings';
import TableView from './components/Table';

import './style.css';

import {
  Typography,
  Table,
  Layout,
  Space,
  Button,
  Grid,
  PageHeader,
  Input,
  InputNumber,
  Select,
  Form,
  AutoComplete,
  Upload,
  List,
  Grid,
} from 'antd';

import FormBuilder from 'antd-form-builder';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
const { Sidebar, Header, Content, Footer } = Layout;
import swr from 'swr';
const {} = List;

// const { Header } = ;

const { Paragraph } = Typography;

const columns = {
  id: 'ID',
  key: 'УНО',
  type: 'Тип',
  manufacturer: 'Производитель',
  model: 'Модель',
  serial: 'SN',
  inventory: 'Инв. номер',
  year: 'Год',
  place: 'Место',
};

const createColumns = async (config) => {
  return Object.keys(config).map((i, key) => {
    const column = { key, dataIndex: i, title: columns[i] };
    console.log(column);
    return column;
  });
};
const data = require('./data.js');
const config = require('./config/config');

const editItem = ({ item }) => {
  console.log(item);
  return <Input defaultValue={1} />;
};
const App = (data) => (
  <>
    <Header>
      <Form name="header"></Form>
    </Header>
    <Layout>
      <Content style={{ padding: '15px 50px' }}>
        <h3>Header</h3>
        <AutoComplete options={[{ data }]} />
      </Content>
    </Layout>
    <Footer>
      <Select
        placeholder="База"
        options={[
          { value: 2022, label: '2022', key: 1 },
          { value: 2021, label: '2021', key: 1 },
        ]}
        style={{ width: '100%' }}
      ></Select>
    </Footer>
  </>
);

// class App extends Component {
//   constructor() {
//     super();
//     this.config = config;
//     this.data = data;
//     this.columns = {
//       id: 'ID',
//       key: 'УНО',
//       type: 'Тип',
//       manufacturer: 'Производитель',
//       model: 'Модель',
//       serial: 'SN',
//       inventory: 'Инв. номер',
//       year: 'Год',
//       place: 'Место',
//     };
//     this.settings = [];
//     this.state = {
//       columns: [],
//       dataSource: [],
//     };
//   }

//   cols = '';

//   handleUpdate(data) {
//     console.log(data);
//   }

//   handleSave() {}

//   handleImport() {}

//   handleExport() {}

//   handleSearch() {}

//   componentWillUpdate() {
//     console.log('update');
//   }

//   // device = () => {
//   //   this.data.map((i) => async (i, k) => {
//   //     console.log(i.manufacturer);
//   //   });
//   // };
//   render() {
//     // console.log(this.data);
//     // let cols = createColumns(columns)
//     // columns.map((i) => {
//     //   console.log(columns);
//     //   return { key: i, dataIndex: 1, title: this.columns[i] };
//     // });

//     return (
//       <Layout>
//         <Header>
//           <Form layout="flex">
//             <FormBuilder
//               meta={{
//                 key: 1,
//                 name: '1',
//                 widget: Select,
//               }}
//             />
//           </Form>
//         </Header>
//         <Content>
//           <Table
//             dataSource={data}
//             columns={[
//               { key: 1, title: 'УНО', dataIndex: 'uno' },
//               { key: 2, title: 2, dataIndex: 'type' },
//               { key: 3, title: 3, dataIndex: 'manufacturer' },
//               { key: 4, title: 4, dataIndex: 'model' },
//               {
//                 key: 6,
//                 title: 6,
//                 dataIndex: 'serial',
//                 onClick: (i, o) => {
//                   console.log('click');
//                   console.log(o);
//                 },
//                 render: (i, o) => (
//                   <>
//                     <div>{i}</div>
//                     <div>{o.inventory}</div>
//                   </>
//                 ),
//                 // render: (d, i) => {
//                 //   console.log(d);
//                 //   return <Input defaultValue={i.serial} />;
//                 // },
//               },

//               { key: 5, title: 5 },
//               { key: 6, title: 6 },
//               {
//                 key: 7,
//                 title: 7,
//                 type: '',
//                 onRow: (data) => {
//                   console.log(data);
//                   return '1';
//                 },
//               },
//             ]}
//           ></Table>
//         </Content>

//         <Footer>
//           <h4>Config</h4>
//           <FormBuilder
//             meta={{
//               key: 'config',
//               name: 'c',
//               widget: 'select',
//               options: [{ key: 1, value: 1 }],
//               placeholder: 'config',
//             }}
//           />
//         </Footer>
//       </Layout>
//     );
//   }
// }

render(<App />, document.getElementById('root'));
