import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Table, Spin } from 'antd';
import TableHeader from './common/table-header.component';

const columns = [
    {
        title: 'Name',
        dataIndex: 'country',
    },
    {
        title: 'Cases',
        dataIndex: 'cases',
    },
    {
        title: 'Active',
        dataIndex: 'active',
    },
    {
        title: 'Death',
        dataIndex: 'deaths',
    },
    {
        title: 'Critical',
        dataIndex: 'critical',
    },
    {
        title: 'Recovered',
        dataIndex: 'recovered',
    }
];

class CovidTable extends Component {
    state = { 
        search: '',
        dropdown: 'Country',
        spin: false
    }
    
    async componentDidMount() {
        this.setState({spin: true})
        await this.props.countriesData()
        this.setState({spin: false})
        
    }

    handleSearch = (e) => {
        this.setState({search: e.currentTarget.value}, () => {
            if(this.state.search.length > 1) {
                this.props.countriesData(this.state.search)
            }else if(this.state.search === '') {
                this.props.countriesData()
            }
        })
    }

    handleSort = async(e) => {
        await this.props.sorting(this.props.allCountries, e.key);
        this.setState({dropdown: e.key, render: true}, () => {
            this.setState({render: false})
        })
        
        // const sorted = this.props.allCountries.sort(function(a,b){
        //     return a.cases - b.cases;
        // })
        //this.setState({data: sorted})
    }
        
    

    render() { 
        const { search, dropdown, spin } = this.state;
        return ( 
            <div className='h100p'>
                {spin ? <div className='d-flex justify-content-center align-item-center h100p'><Spin /></div> 
                    :
                    <Table
                    columns={columns}
                    dataSource={this.props.allCountries}
                    bordered
                    title={() => <TableHeader 
                                    value={search}
                                    onChange={this.handleSearch}
                                    handleSort={this.handleSort}
                                    dropdown={dropdown}
                                />}
                />}
            </div>
         );
    }
}

const mapStateToProps = ({covid}) => {
    const {allCountries} = covid;
    console.log('allCountries', allCountries)
    return {allCountries}
}


export default connect(mapStateToProps, actions)(CovidTable);