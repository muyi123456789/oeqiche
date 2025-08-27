import React from 'react';
import { Row, Col, Card } from 'antd';
import RegionDistribution from './RegionDistribution';
import IndustrySector from './IndustrySector';
import './company.css'
import HotProductItem from './HotProductItem';
import { ProductData, companyData } from './mockData';
import HotCompanyItem from './HotCompanyItem';
import Overview from './Overview';
import Search from './Search';

const App: React.FC = () => (
  <>
    <div className='area'>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Overview/>
        </Col>
      </Row>
    </div>
    <div className='area'>
      <Row gutter={[16, 16]}>
        <Col span={14}>
          <RegionDistribution />
        </Col>
        <Col span={10}>
          <IndustrySector />
        </Col>
      </Row>
    </div>
    <div className='area'>
      <Card style={{borderRadius: '2px'}}>
        <div className='flex justify-between items-center IndustrySector_top'>
          <span className='text-[16px] font-[600]'>热门产品供应商</span>
          <a href="#" className="IndustrySector_a">更多 </a>
        </div>
        <Row gutter={[16, 16]}>
            {ProductData.map((item, index)=>(
              <Col span={8} key={index}>
                <HotProductItem dataItem={item}/>
              </Col>
            ))}
        </Row>
      </Card>
    </div>
    <div className='area'>
      <Card style={{borderRadius: '2px'}}>
        <div className='flex justify-between items-center IndustrySector_top'>
          <span className='text-[16px] font-[600]'>优质企业</span>
          <a href="#" className="IndustrySector_a">更多 </a>
        </div>
        <Row gutter={[16, 16]}>
            {companyData.map((item, index)=>(
              <Col span={8} key={index}>
                <HotCompanyItem dataItem={item}/>
              </Col>
            ))}
        </Row>
      </Card>
    </div>
  </>
  
);

export default App;