import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Row, Col, Spin } from 'antd';
import Stats from './common/stats.component';

class Statistics extends Component {
    state = { spin: false }

    async componentDidMount() {
        this.setState({spin: true});
        await this.props.allDataAction()
        this.setState({spin: false});
    }

    render() { 
        const { cases, todayCases, deaths, todayDeaths, recovered, todayRecovered, active, critical, tests, testsPerOneMillion, population, affectedCountries } = this.props.allData;
        const { spin } = this.state;
        
        return ( 
            <div className='h100p'>
                {spin ? <div className='d-flex justify-content-center align-item-center h100p'><Spin /></div>
                    :
                    <Row gutter={16}>
                        <div className='d-flex space-evenly w100p'>
                            <Col className='d-flex justify-content-center' span={6}>
                                <Stats 
                                    title="Total Cases"
                                    value={cases}
                                    suffix='cases'
                                />
                            </Col>
                            <Col className='d-flex justify-content-center' span={6}>
                                <Stats 
                                    title="Today Cases"
                                    value={todayCases}
                                    suffix='cases'
                                />
                            </Col>
                        </div>
                        <div className='d-flex space-evenly w100p mt20'>
                            <Col className='d-flex justify-content-center' span={6}>
                                <Stats 
                                    title="Total Deaths"
                                    value={deaths}
                                    suffix='deaths'
                                />
                            </Col>
                            <Col className='d-flex justify-content-center' span={6}>
                                <Stats 
                                    title="Today Deaths"
                                    value={todayDeaths}
                                    suffix='deaths'
                                />
                            </Col>
                        </div>
                        <div className='d-flex space-evenly w100p mt20'>
                            <Col className='d-flex justify-content-center' span={6}>
                                <Stats 
                                    title="Total Recovered"
                                    value={recovered}
                                    suffix='recovered'
                                />
                            </Col>
                            <Col className='d-flex justify-content-center' span={6}>
                                <Stats 
                                    title="Today Recovered"
                                    value={todayRecovered}
                                    suffix='recovered'
                                />
                            </Col>
                        </div>
                        <div className='d-flex space-evenly w100p mt20'>
                            <Col className='d-flex justify-content-center' span={6}>
                                <Stats 
                                    title="Active Patients"
                                    value={active}
                                    suffix='active'
                                />
                            </Col>
                            <Col className='d-flex justify-content-center' span={6}>
                                <Stats 
                                    title="Critical Patients"
                                    value={critical}
                                    suffix='critical'
                                />
                            </Col>
                        </div>
                        <div className='d-flex space-evenly w100p mt20'>
                            <Col className='d-flex justify-content-center' span={6}>
                                <Stats 
                                    title="Total Tests"
                                    value={tests}
                                    suffix='tests'
                                />
                            </Col>
                            <Col className='d-flex justify-content-center' span={6}>
                                <Stats 
                                    title="Test Per Million"
                                    value={testsPerOneMillion}
                                    suffix='tests'
                                />
                            </Col>
                        </div>
                        <div className='d-flex space-evenly w100p mt20'>
                            <Col className='d-flex justify-content-center' span={6}>
                                <Stats 
                                    title="Total Population"
                                    value={population}
                                    suffix='people'
                                />
                            </Col>
                            <Col className='d-flex justify-content-center' span={6}>
                                <Stats 
                                    title="Affected Countries"
                                    value={affectedCountries}
                                    suffix='countries'
                                />
                            </Col>
                        </div>
                    </Row>    
            }
            </div>
        );
    }
}

const mapStateToProps =({covid})=>
{
    const {allData} = covid;
    return {allData};
}

export default connect(mapStateToProps, actions)(Statistics);