import React from 'react';
import { Card, Tag, Typography } from 'antd';

interface IndustryData {
  label: string;
  color: string;
}

const industryData: IndustryData[] = [
  { label: '工艺件(11,134)', color: '#edeeff' },
  { label: '电子电器(10,198)', color: '#edf4ff' },
  { label: '电子电器(10,198)', color: '#edeeff' },
  { label: '电子电器(10,198)', color: '#edf4ff' },
  { label: '电子电器(10,198)', color: '#edeeff' },
  { label: '电子电器(10,198)', color: '#edf4ff' },
  { label: '电子电器(10,198)', color: '#edeeff' },
  { label: '电子电器(10,198)', color: '#edf4ff' },
];

const IndustrySector: React.FC = () => (
  <Card className='h-[350px]' style={{borderRadius: '2px'}}>
    <div className='flex justify-between items-center IndustrySector_top'>
      <span className='text-[16px] font-[600]'>行业领域</span>
      <a href="#" className="IndustrySector_a">更多 </a>
    </div>
    
    <div className='flex-wrap'>
      {industryData.map((item, index) => (
        <Tag key={index} color={item.color} className='IndustrySector_tag' >
          <span>{item.label}</span>
        </Tag>
      ))}
    </div>
  </Card>
);

export default IndustrySector;