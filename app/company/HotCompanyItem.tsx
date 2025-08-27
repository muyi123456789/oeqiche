"use client"
import React from 'react';
import { Avatar, Badge, Card, ConfigProvider, List, Table, Tag, Typography } from 'antd';
import Link from 'next/link';
import {
  RubyOutlined,
} from '@ant-design/icons';
const { Title } = Typography;
const { Text } = Typography;

interface dataItem { 
  name: string; 
  logo: string; 
  mainProducts: string;
  clients: string[];
}
const HotCompanyItem: React.FC<{dataItem: dataItem}> = ({dataItem}) => {
  return (
    <Card title={
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Avatar src={dataItem.logo} className='logo_HotCompanyItem'/>
          <div>
            <div className='truncate text-[12px]'>{dataItem.name}</div>
            <img src='/img/company_vip.png' className='w-[80px] h-[20px] rounded-[2px]'/>
          </div>
        </div>
      }
      className="hotCompanyItem_card"
    >
      <div>
        <span className='truncate text-[11px]'>主营产品:&nbsp;&nbsp;{dataItem.mainProducts}<br/></span>
        <span className='truncate text-[11px]'>配套客户:&nbsp;&nbsp;{dataItem.clients.join(', ')}</span>
      </div>
    </Card>
  );
}

export default HotCompanyItem;