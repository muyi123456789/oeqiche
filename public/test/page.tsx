'use client';

import React, { useEffect, useMemo } from 'react';
import dynamic from 'next/dynamic';
import * as echarts from 'echarts';
import chinaJson from './china.json'; // 确保 JSON 文件在项目中

// 注册地图（在组件外或 useEffect 中执行一次）
// 动态导入，禁用 SSR
const ReactECharts = dynamic(
  () => import('echarts-for-react'),
  { ssr: false }
);
const MapChart = ()=>{
  // useEffect(() => {
  //   if (chinaJson && !echarts.getMap('CHINA1')) {
  //     echarts.registerMap('CHINA1', chinaJson);
  //     console.log('地图注册成功');
  //   }
  // }, []);

  const option = useMemo(() => ({
    tooltip: { trigger: 'item', formatter: '{b}: {c}' },
    visualMap: {
      min: 0,
      max: 100,
      text: ['高', '低'],
      calculable: true,
      inRange: { color: ['#e0ffff', '#006edd'] }
    },
    series: [{
      name: '示例数据',
      type: 'map',
      map: 'CHINA1',
      data: [
        { name: '广东', value: 95 },
        { name: '江苏', value: 80 },
        { name: '北京', value: 100 }
      ],
      emphasis: { label: { show: true } }
    }]
  }), []);
  return (
    <div style={{ width: '100%', height: '600px', padding: 20 }}>
      <h2>中国地图</h2>
      <ReactECharts
        option={option}
        style={{ height: '100%', width: '100%' }}
        lazyUpdate={true}
      />
    </div>
  );
}

export default MapChart;