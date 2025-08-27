"use client"
import React from 'react';
import { Input, Button, Select, Row, Col } from 'antd';
import './companyList.css'; // 自定义样式
import { filterParams } from './mockData';

const { Option } = Select;


const Filter = () => {
  const handleSearch = () => {
    console.log('搜索功能');
  };

  return (
    <div className="search-page">
      {/* 搜索框 */}
      <Row justify="space-between" align="middle" style={{ marginBottom: '20px' }}>
        <Col span={16}>
          <Input.Search
            placeholder="输入公司名或零部件名"
            enterButton="搜一搜"
            size="large"
            onSearch={handleSearch}
            style={{ width: '100%' }}
          />
        </Col>
        <Col span={8} style={{ textAlign: 'right' }}>
          <span>已显示199101条结果</span>
        </Col>
      </Row>

      {/* 产品目录标签 */}
      <Row gutter={[16, 16]}>
        <Col span={2}>
          <Button type="link" icon={<i className="fa fa-list-ul"></i>}>参数：</Button>
        </Col>
        <Col span={22}>
            {filterParams.map((points, i) => (
              <Row gutter={[16, 16]} key={i}>
                {points.map((point:string, j:number) => (
                  <Col key={`${i}-${j}`}>
                    {point}
                  </Col>
                ))}
              </Row>
            ))}
        </Col>
      </Row>

      {/* 更多筛选条件 */}
      <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
        <Col span={2}>
          <Button type="link" icon={<i className="fa fa-filter"></i>}>更多筛选</Button>
        </Col>
        <Col span={22}>
          <Row gutter={[16, 16]}>
            <Col span={4}>
              <Select defaultValue="地理位置" style={{ width: '100%' }}>
                <Option value="地理位置">地理位置</Option>
              </Select>
            </Col>
            <Col span={4}>
              <Select defaultValue="公司性质" style={{ width: '100%' }}>
                <Option value="公司性质">公司性质</Option>
              </Select>
            </Col>
            <Col span={4}>
              <Select defaultValue="资质认证" style={{ width: '100%' }}>
                <Option value="资质认证">资质认证</Option>
              </Select>
            </Col>
            <Col span={4}>
              <Select defaultValue="注册资金" style={{ width: '100%' }}>
                <Option value="注册资金">注册资金</Option>
              </Select>
            </Col>
            <Col span={4}>
              <Select defaultValue="成立年限" style={{ width: '100%' }}>
                <Option value="成立年限">成立年限</Option>
              </Select>
            </Col>
            <Col span={4}>
              <Select defaultValue="进出口权" style={{ width: '100%' }}>
                <Option value="进出口权">进出口权</Option>
              </Select>
            </Col>
            <Col span={4}>
              <Select defaultValue="VR展示" style={{ width: '100%' }}>
                <Option value="VR展示">VR展示</Option>
              </Select>
            </Col>
            <Col span={4} style={{ textAlign: 'right' }}>
              <Button type="primary" icon={<i className="fa fa-refresh"></i>}>重置</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Filter;