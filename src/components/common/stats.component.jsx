import React from 'react';
import { Statistic, Card } from 'antd';

const Stat = (props) => {
    const { value, title, suffix } = props;
    return ( 
        <Card className='border-radius-30 w130p d-flex justify-content-center'>
            <Statistic
                title={title}
                value={value}
                
                valueStyle={{ color: '#3f8600', fontSize: '40px', display: 'flex', alignItems:'flex-end' }}
                //prefix={<ArrowUpOutlined />}
                suffix={suffix}
            />
        </Card>
     );
}
 
export default Stat;