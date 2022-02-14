import { PageHeader, Form, Input, AutoComplete } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

class Header {
  render() {
    return (
      <PageHeader title={<Input />} extra={<Button>{SearchOutlined}</Button>} />
    );
  }
}
