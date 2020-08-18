import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Router, Route,Switch } from 'react-router-dom';
import history from './public/history';
import Statistics from './components/statistics.component';
import CovidTable from './components/table.component';
import { Layout, Menu, Breadcrumb } from 'antd';
import Header from './components/common/header.component';
import SideBar from './components/common/sidebar.component';

function Main(props) {
  const { Content } = Layout;
  return(
    <div className='h100p'>
      <Layout>
        <Header />
        <Layout>
          <SideBar />
        <Layout>
            <Content
              className="site-layout-background"
              style={{
                overflowY: 'scroll',
                overflowX: 'hidden',
                margin: 0,
                minHeight: 280,
              }}
            >
              <Switch>
                <Route path={["/", "/stats"]} exact component={Statistics} />
                <Route path='/table' component={CovidTable} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

function App() {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route component={Main} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
