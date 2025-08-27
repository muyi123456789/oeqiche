'use client';

import React, { useEffect, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import * as echarts from 'echarts';
import { mapData, searchList } from './mockData';
import { Button, Card, Input, Select, Space } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
const { Option } = Select;

const selectBefore = (
    <Select 
        defaultValue="供应商" 
        className='w-[100px] text-[11px]'
        options={[
            { value: '供应商', label: <span className="text-[11px]">供应商</span> },
            { value: '采购项目', label: <span className="text-[11px]">采购项目</span> }
        ]}
        >
    </Select>
);
const selectAfter = (
    <div className='text-[11px]'>
        <AntDesignOutlined />搜索
    </div>
);
// 注册地图（在组件外或 useEffect 中执行一次）
// 动态导入，禁用 SSR
const ReactECharts = dynamic(
    () => import('echarts-for-react'),
    { ssr: false }
);

const Overview: React.FC = () => {
    const [searchV, setSearchV] = useState('');
    const pathSymbols = {
        company:
            `<svg t="1756200495029" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4860" width="200" height="200"><path d="M432.14 86.26c-7.21 0-14.6 1.56-21.77 4.93l-206.52 97.18c-28.15 13.25-46.11 41.55-46.11 72.66v561.8h325.53V137.46c0.01-29.56-24.24-51.2-51.13-51.2M591.82 177.8c-27 0-51.09 21.79-51.09 51.19v593.86h325.53V338.5c0-31.36-18.92-59.62-47.92-71.56L611.33 181.7c-6.48-2.67-13.08-3.9-19.51-3.9" fill="#4381F1" p-id="4861"></path><path d="M318.64 459.66h-39.3c-11.79 0-21.34-9.55-21.34-21.34v-39.64c0-11.79 9.55-21.34 21.34-21.34h39.3c11.79 0 21.34 9.55 21.34 21.34v39.64c0 11.79-9.55 21.34-21.34 21.34zM318.64 596.51h-39.3c-11.79 0-21.34-9.55-21.34-21.34v-39.64c0-11.79 9.55-21.34 21.34-21.34h39.3c11.79 0 21.34 9.55 21.34 21.34v39.64c0 11.78-9.55 21.34-21.34 21.34zM318.64 733.36h-39.3c-11.79 0-21.34-9.55-21.34-21.34v-39.64c0-11.79 9.55-21.34 21.34-21.34h39.3c11.79 0 21.34 9.55 21.34 21.34v39.64c0 11.78-9.55 21.34-21.34 21.34zM692.04 459.66h-39.3c-11.79 0-21.34-9.55-21.34-21.34v-39.64c0-11.79 9.55-21.34 21.34-21.34h39.3c11.79 0 21.34 9.55 21.34 21.34v39.64c0 11.79-9.55 21.34-21.34 21.34zM692.04 596.51h-39.3c-11.79 0-21.34-9.55-21.34-21.34v-39.64c0-11.79 9.55-21.34 21.34-21.34h39.3c11.79 0 21.34 9.55 21.34 21.34v39.64c0 11.78-9.55 21.34-21.34 21.34zM692.04 733.36h-39.3c-11.79 0-21.34-9.55-21.34-21.34v-39.64c0-11.79 9.55-21.34 21.34-21.34h39.3c11.79 0 21.34 9.55 21.34 21.34v39.64c0 11.78-9.55 21.34-21.34 21.34z" fill="#FFFFFF" p-id="4862"></path><path d="M932.62 937.74H91.38c-16.23 0-29.38-13.15-29.38-29.38v-56.14c0-16.23 13.15-29.38 29.38-29.38h841.24c16.23 0 29.38 13.15 29.38 29.38v56.14c0 16.22-13.15 29.38-29.38 29.38z" fill="#0C2E97" p-id="4863"></path></svg>`,    
        project:
            `<svg t="1756201548303" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26198" width="200" height="200"><path d="M505.6 477.952c-12.288 0-24.32-2.304-35.84-7.168L67.328 305.92c-11.264-4.608-18.944-15.616-18.944-27.904s6.912-23.552 17.92-28.672l400.128-183.296c26.368-12.032 56.32-12.032 82.688-0.256l398.08 179.2c11.264 5.12 18.176 16.128 18.176 28.416s-7.68 23.296-18.944 27.904l-404.224 169.216c-11.776 4.864-24.064 7.424-36.608 7.424z" fill="#5396FF" p-id="26199"></path><path d="M490.496 523.264c0.256 0.256 0.512 0.256 1.024 0.512 8.96 4.608 19.712 4.608 28.672 0 0.256-0.256 0.512-0.256 1.024-0.512l181.248-72.96 65.536-28.672 73.728-30.976 112.384 65.536c9.984 5.632 15.872 16.384 15.36 27.904-0.512 11.52-7.168 21.504-17.664 26.624L547.84 701.44c-13.056 6.656-27.648 9.984-41.984 9.984-14.336 0-28.672-3.328-41.728-9.728L64.256 514.56c-10.496-4.864-17.152-15.104-17.664-26.624s5.632-22.272 15.616-27.904l113.92-64 78.08 32.512" fill="#5396FF" p-id="26200"></path><path d="M489.984 768.768c11.264 5.632 24.576 5.632 35.584 0l146.944-75.008 77.056-39.68 65.024-33.024h0.256l140.8 80.64c11.264 6.4 17.408 19.456 14.848 32.768-1.792 9.472-8.448 17.408-16.896 21.76l-399.872 205.568c-14.336 7.424-30.208 11.008-46.08 11.008-15.616 0-31.488-3.584-45.568-11.008l-396.8-202.24c-9.984-5.12-16.384-15.36-16.64-26.624-0.256-11.264 5.632-21.76 15.616-27.392l133.888-76.288h0.256l70.144 32.512" fill="#5396FF" p-id="26201"></path></svg>`,
        activeMonth:
            `<svg t="1756201614944" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="29005" width="200" height="200"><path d="M351.772444 65.507556c15.644444 0.426667 29.184 10.837333 33.592889 25.827555l184.035556 625.976889 125.383111-510.008889a36.010667 36.010667 0 0 1 69.461333-1.735111l84.792889 282.567111H981.333333a36.010667 36.010667 0 1 1 0 71.992889h-159.061333a35.982222 35.982222 0 0 1-34.503111-25.628444l-54.556445-181.845334-125.752888 511.431111a36.010667 36.010667 0 0 1-69.489778 1.564445L347.761778 218.652444l-111.786667 317.44a36.010667 36.010667 0 0 1-33.848889 24.035556l-165.546666 0.369778a36.010667 36.010667 0 0 1-0.170667-71.992889l140.117333-0.284445L316.871111 89.514667c5.176889-14.734222 19.285333-24.462222 34.901333-24.035556z" fill="#2A73F5" p-id="29006"></path></svg>`,
        addMonth: `<svg t="1756201688409" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="32545" width="200" height="200"><path d="M716.8 219.428571l117.248 125.586286-249.782857 267.702857-204.8-219.428571L0 800.329143 72.265143 877.714286l307.2-329.142857 204.8 219.355428 322.56-344.941714L1024 548.571429V219.428571z" fill="#1296db" p-id="32546"></path></svg>`,
    };
    const labelSetting = {
        show: true,
        position: 'right',
        offset: [10, 0],
        fontSize: 16
    };
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            containLabel: true,
            left: 20
        },
        yAxis: {
            data: ['企业总数', '项目总数', '企业月活数', '月度增长数'],
            inverse: true,
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: {
                margin: 30,
                fontSize: 14
            },
            axisPointer: {
                label: {
                    show: true,
                    margin: 30
                }
            }
        },
        xAxis: {
            splitLine: { show: false },
            axisLabel: { show: false },
            axisTick: { show: false },
            axisLine: { show: false }
        },
        series: [
            {
                name: '2016',
                type: 'pictorialBar',
                barGap: '10%',
                label: labelSetting,
                symbolRepeat: true,
                symbolSize: ['80%', '60%'],
                data: [
                    {
                        value: 184,
                        symbol: `image://data:image/svg+xml;utf8,${encodeURIComponent(pathSymbols.company)}`
                    },
                    {
                        value: 29,
                        symbol: `image://data:image/svg+xml;utf8,${encodeURIComponent(pathSymbols.project)}`
                    },
                    {
                        value: 73,
                        symbol: `image://data:image/svg+xml;utf8,${encodeURIComponent(pathSymbols.activeMonth)}`
                    },
                    {
                        value: 91,
                        symbol: `image://data:image/svg+xml;utf8,${encodeURIComponent(pathSymbols.addMonth)}`
                    }
                ]
            }
        ]
    }

    return (
        <Card 
        className='h-[350px]' 
        style={{borderRadius: '2px'}}
        >
            <div className='flex justify-between items-center IndustrySector_top'>
                <span className='text-[16px] font-[600]'>OE汽车数据总览</span>
                <a href="#" className="IndustrySector_a">更多 </a>
            </div>
            <Space direction="vertical" className='w-full'>
                <Input addonBefore={selectBefore} addonAfter={selectAfter} value={searchV}/>
                <div className="searchList_Overview">
                    <span style={{paddingRight: '1rem'}}>热门搜索:</span>
                    {
                        searchList.map((v,i)=>(
                            <span key={i} onClick={()=>{setSearchV(v)}}>{v}</span>
                        ))
                    }
                </div>
            </Space>
            <ReactECharts
                option={option}
                style={{ width: '100%'}}
                lazyUpdate={true}
            />
        </Card>
            
    );
}

export default Overview;