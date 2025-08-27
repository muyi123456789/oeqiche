import React from 'react';
import { Row, Col, Card } from 'antd';
import './companyList.css'
import Filter from './Filter';
import CompanyItem from './CompanyItem';
import Right from './Right';
import { companyList } from './mockData';

const App: React.FC = () => (
  <Card>
    <div className='filter_page'>
      <Filter />
    </div>
    <div className='flex Card_page'>
      <div className='filter_left w-[700px]'>
        {
          companyList.map((companyInfo, index)=>(
            <CompanyItem companyInfo={companyInfo} key={index} />
          ))
        }
      </div>
      <div className='filter_right w-[400px]'>
        <Right />
      </div>
    </div>
  </Card>
  
);

export default App;