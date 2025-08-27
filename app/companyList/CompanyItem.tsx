"use client"
import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
import './companyList.css'
const { Title, Text } = Typography;

interface CompanyInfo {
    name: string;
    type: string;
    years: number;
    location: string;
    registeredCapital: string;
    establishmentDate: string;
    certification: string;
    mainProducts: string;
    supportingCustomers: string;
}

interface CompanyItemProps {
    companyInfo: CompanyInfo;
}
const CompanyItem: React.FC<CompanyItemProps> = ({companyInfo}) => {
    return (
        <Card className='Card_CompanyItem'>
            <div className="company-logo">
                <img src="https://via.placeholder.com/64" alt="Company Logo" />
            </div>
            <div className="company-details">
                <Title level={3}>{companyInfo.name}</Title>
                <Text type="secondary">{companyInfo.type}-{companyInfo.years}</Text>
                <div className="company-info-row">
                    <Text strong>所在地：</Text>
                    <Text>{companyInfo.location}</Text>
                    <Text strong style={{ marginLeft: '20px' }}>注册资本：</Text>
                    <Text>{companyInfo.registeredCapital}</Text>
                    <Text strong style={{ marginLeft: '20px' }}>成立时间：</Text>
                    <Text>{companyInfo.establishmentDate}</Text>
                </div>
                <div className="company-info-row">
                    <Text strong>资质认证：</Text>
                    <Text>登录后查看</Text>
                </div>
                <div className="company-info-row">
                    <Text strong>主营产品：</Text>
                    <Text>登录后查看</Text>
                </div>
                <div className="company-info-row">
                    <Text strong>配套客户：</Text>
                    <Text>登录后查看</Text>
                </div>
            </div>
        </Card>
    )
}

export default CompanyItem;