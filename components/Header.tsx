import React from 'react';
import './Header.css';
import Link from 'next/link';
import {
  SearchOutlined,
} from '@ant-design/icons';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-center">
      <div className="header_menu">
        <div className="flex items-center max-w-[150px] w-[150px]">
          <img src="img/image.png" alt="Logo" className="header_logo" />
          <span className="header_title">OE汽车</span>
        </div>

        <nav className="flex items-center max-w-[750px] w-[750px]">
          <Link href="/main" className="flex-1 text-center py-2 header_link">首页</Link>
          <Link href="/company" className="flex-1 text-center py-2 header_link">企业库</Link>
          <Link href="/projectList" className="flex-1 text-center py-2 header_link">项目库</Link>
          {/* <Link href="#" className="header_link">活动</Link> */}
          <Link href="#" className="flex-1 text-center py-2 header_link">产业数据</Link>
          {/* <Link href="#" className="header_link">产业百科</Link> */}
          <Link href="#" className="flex-1 text-center py-2 header_link">资讯</Link>
          {/* <Link href="#" className="header_link">产销榜</Link> */}
          {/* <Link href="#" className="header_link">资讯</Link> */}
          <Link href="#" className="flex-1 text-center py-2 header_link">活动</Link>
        </nav>

        <div className="flex items-center header_login w-[200px]">
          <SearchOutlined style={{fontSize:16}}/>
          {/* <div className="flex items-center justify-center header_vip">
            <span>VIP权益</span>
          </div> */}
          <a href="#">登录</a>
          <span>|</span>
          <a href="#">注册</a>
        </div>
      </div>
    </header>
  );
};

export default Header;