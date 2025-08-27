import React from 'react';
import { Card, ConfigProvider, Table, Typography } from 'antd';
import { ColumnsType } from 'antd/es/table';
import MapChart from './MapChart';

interface RegionData {
  index: number;
  province: string;
  companyCount: number;
}

const columns: ColumnsType<RegionData> = [
  {
    title: '序号',
    dataIndex: 'index',
    key: 'index',
  },
  {
    title: '省份',
    dataIndex: 'province',
    key: 'province',
  },
  {
    title: '配套企业数',
    dataIndex: 'companyCount',
    key: 'companyCount',
  },
];

const data: RegionData[] = [
  { index: 1, province: '北京', companyCount: 89230 },
  { index: 2, province: '天津', companyCount: 45120 },
  { index: 3, province: '河北', companyCount: 78430 },
  { index: 4, province: '山西', companyCount: 32650 },
  { index: 5, province: '内蒙古', companyCount: 18760 },
  { index: 6, province: '辽宁', companyCount: 54320 },
  { index: 7, province: '吉林', companyCount: 29870 },
  { index: 8, province: '黑龙江', companyCount: 31240 },
  { index: 9, province: '上海', companyCount: 96540 },
  { index: 10, province: '江苏', companyCount: 123450 },
  { index: 11, province: '浙江', companyCount: 112340 },
  { index: 12, province: '安徽', companyCount: 67890 },
  { index: 13, province: '福建', companyCount: 54320 },
  { index: 14, province: '江西', companyCount: 43210 },
  { index: 15, province: '山东', companyCount: 135790 },
  { index: 16, province: '河南', companyCount: 109870 },
  { index: 17, province: '湖北', companyCount: 76540 },
  { index: 18, province: '湖南', companyCount: 65430 },
  { index: 19, province: '广东', companyCount: 156780 },
  { index: 20, province: '广西', companyCount: 38900 },
  { index: 21, province: '海南', companyCount: 12340 },
  { index: 22, province: '重庆', companyCount: 5573 },
  { index: 23, province: '四川', companyCount: 87650 },
  { index: 24, province: '贵州', companyCount: 26780 },
  { index: 25, province: '云南', companyCount: 34560 },
  { index: 26, province: '西藏', companyCount: 4320 },
  { index: 27, province: '陕西', companyCount: 45670 },
  { index: 28, province: '甘肃', companyCount: 19870 },
  { index: 29, province: '青海', companyCount: 3450 },
  { index: 30, province: '宁夏', companyCount: 5670 },
  { index: 31, province: '新疆', companyCount: 12340 },
  { index: 32, province: '台湾', companyCount: 23450 },
  { index: 33, province: '香港', companyCount: 34560 },
  { index: 34, province: '澳门', companyCount: 8900 }
];

const RegionDistribution: React.FC = () => (
  <Card className='h-[350px]' style={{borderRadius: '2px'}}>
    <div className='flex justify-between items-center IndustrySector_top'>
      <span className='text-[16px] font-[600]'>地区分布</span>
      <a href="#" className="IndustrySector_a">更多 </a>
    </div>
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, marginRight: 16 }}>
        <MapChart />
      </div>
      <div className='RegionDistribution_table_par'>
        <Table columns={columns} dataSource={data} pagination={false} className="RegionDistribution_table" />
      </div>
    </div>
  </Card>
);

export default RegionDistribution;