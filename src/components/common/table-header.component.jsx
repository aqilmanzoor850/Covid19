import React from 'react';
import { Input, Dropdown, Button, Menu } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

const TableHeader = (props) => {
    const { value, onChange, handleSort, dropdown } = props;
    const menu = (
        <Menu>
          <Menu.Item onClick={handleSort} key="country" >
            Country
          </Menu.Item>
          <Menu.Item onClick={handleSort} key="cases" >
            Cases
          </Menu.Item>
          <Menu.Item onClick={handleSort} key="active" >
            Active
          </Menu.Item>
          <Menu.Item onClick={handleSort} key="deaths" >
            Deaths
          </Menu.Item>
          <Menu.Item onClick={handleSort} key="critical" >
            Critical
          </Menu.Item>
          <Menu.Item onClick={handleSort} key="recovered" >
            Recovered
          </Menu.Item>
        </Menu>
    );
    return ( 
        <div className='d-flex space-between'>
            <div className='d-flex align-item-center w50p'>
                <label className='w10p'>Sort By</label>
                <Dropdown overlay={menu}>
                    <Button className='w40p'>
                        {dropdown} <DownOutlined />
                    </Button>
                </Dropdown>
            </div>
            <div className='d-flex align-item-center w50p'>
                <label className='w20p'>Search By</label>
                <Input
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
     );
}
 
export default TableHeader;