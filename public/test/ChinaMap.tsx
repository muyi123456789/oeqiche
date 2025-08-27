// components/ChinaMap.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import { Scene, PolygonLayer, TileLayer } from '@antv/l7';

const ChinaMap = () => {

  // useEffect(() => {
  //   // ✅ 1. 检查 ref 是否存在且 current 不为 null
  //   setTimeout(() => {

  //   // ✅ 2. 创建场景，这次直接传入 DOM 元素
  //   // 注意：L7 的 Scene 也支持传入 DOM 元素，而不仅仅是 ID 字符串
  //   const scene = new Scene({
  //     id: 'china-map-container'
  //   });

  //   // 3. 添加 OpenStreetMap 底图
  //   const osmLayer = new TileLayer()
  //     .source('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //       parser: {
  //         type: 'xyz',
  //         minZoom: 1,
  //         maxZoom: 18,
  //       },
  //     })
  //     .style({
  //       opacity: 0.8,
  //     });
  //   scene.addLayer(osmLayer);
  //   }, 3000);

    
  // }, []); // 空依赖数组

  return (
    // ✅ 将 ref 绑定到 div
    <div
      style={{ width: '100%', height: '500px', border: '1px solid #ccc' }}
      // 可选：仍然可以保留 id 用于 CSS 样式
      id="china-map-container"
    />
  );
};

export default ChinaMap;