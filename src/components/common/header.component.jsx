import React from 'react';
import { Layout, Menu } from 'antd';

const Header = () => {
    const { Header } = Layout
    return ( 
        <Header className="header bg-red">
            <div className='d-flex'>
                <img className='w10p h64' src={require('../../assets/logo.png')} alt='logo' />
                {/* <Menu mode="horizontal">
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu> */}
            </div>
        </Header>
     );
}
 
export default Header;