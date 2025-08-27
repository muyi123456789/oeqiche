"use client"
import React from 'react';
import { Avatar, Badge, Card, ConfigProvider, List, Table, Typography } from 'antd';
import Link from 'next/link';

interface dataItem { 
  title: string; 
  companies:  { 
    title: string; 
    logo: string; 
    description: string; 
  }[] 
}
const HotProductItem: React.FC<{dataItem: dataItem}> = ({dataItem}) => {
  return (
    <Badge.Ribbon text={<Link href="#" className='HotProductItem_detail'>详情 {'>'} </Link>} color="#0d947791">
      <Card title={dataItem.title}>
        <List
          itemLayout="horizontal"
          dataSource={dataItem.companies}
          renderItem={(item, index) => (
              <List.Item>
                  <List.Item.Meta
                      avatar={<Avatar src={item.logo} className='logo_HotProductItem'/>}
                      title={<a href="https://ant.design"  className='truncate title_HotProductItem'>{index + 1}. {item.title}</a>}
                      description={<div className='truncate description_HotProductItem'>{item.description}</div>}
                  />
              </List.Item>
          )}
        />
      </Card>
    </Badge.Ribbon>
    
  );
}

export default HotProductItem;