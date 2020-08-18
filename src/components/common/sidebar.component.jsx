import React from 'react';
import { Layout, Menu } from 'antd';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
    const { Sider } = Layout
    const { SubMenu } = Menu;
    return ( 
        <Sider width={200} className="site-layout-background w15p">
            <Menu
                className='bg-red'
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
            >
                <Menu.Item className='clr-white mt30' key="1">
                    <NavLink to='/stats'>
                        <b>Statistics</b>
                    </NavLink>
                </Menu.Item>
                <Menu.Item className='clr-white' key="2">
                    <NavLink to='/table'>
                        <b>Corona Table</b>
                    </NavLink>
                </Menu.Item>
            </Menu>
        </Sider>
     );
}
 
export default SideBar;