'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { Button, Card, Input, Select, Space } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
const { Option } = Select;

const selectBefore = (
    <Select defaultValue="供应商" className='w-[100px]'>
        <Option value="供应商">供应商</Option>
        <Option value="采购项目">采购项目</Option>
    </Select>
);
const selectAfter = (
    <>
        <AntDesignOutlined />搜索
    </>
);
const Search: React.FC = () => {
    return (
        <Card className='h-[350px]' style={{borderRadius: '2px'}}>
            <div className='flex justify-between items-center IndustrySector_top'>
                <span className='text-[16px] font-[600]'>OE汽车数据总览</span>
                <a href="#" className="IndustrySector_a">更多 </a>
            </div>
            <Space direction="vertical" className='w-full'>
                <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="供应商"/>
            </Space>
        </Card>
            
    );
}

export default Search;