'use client';

import React, { useEffect, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import * as echarts from 'echarts';
import { mapData } from './mockData';

// 注册地图（在组件外或 useEffect 中执行一次）
// 动态导入，禁用 SSR
const ReactECharts = dynamic(
  () => import('echarts-for-react'),
  { ssr: false }
);
const MapChart = ()=>{
    const [geoData, setGeoData] = useState(null);
    useEffect(() => {
        // 从 public 目录加载 JSON
        fetch('/map/china.json')
        .then(res => res.json())
        .then(json => {
            console.log(json)
            setGeoData(json);
            if (!echarts.getMap('CHINA')) {
                echarts.registerMap('CHINA', json);
                console.log('地图注册成功');
            }
        })
        .catch(err => console.error('地图加载失败:', err));
    }, []);

    const option = useMemo(() => {
        if (!geoData) return {}; // 数据未加载时返回空配置

        return {
        tooltip: { trigger: 'item', formatter: '{b}: {c}' },
        visualMap: {
            min: 0,
            max: 100,
            text: ['高', '低'],
            calculable: true,
            inRange: { color: [
                '#313695',
                '#4575b4',
                '#74add1',
                '#abd9e9',
                '#e0f3f8',
                '#ffffbf',
                '#fee090',
                '#fdae61',
                '#f46d43',
                '#d73027',
                '#a50026'
            ] }
        },
        series: [
            {
            name: '示例数据',
            type: 'map',
            map: 'CHINA',
            data: mapData,
            emphasis: { label: { show: true } }
            }
        ]
        };
    }, [geoData]);
    return (
        <div style={{ width: '100%', height: '300px', padding: 20 }}>
            {geoData ? (
                <ReactECharts
                option={option}
                style={{ height: '100%', width: '100%' }}
                lazyUpdate={true}
                />
            ) : (
                <p>加载地图数据中...</p>
            )}
        </div>
    );
}

export default MapChart;