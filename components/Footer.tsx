import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="flex flex-row footer_navigation">
          <div className="flex flex-row w-4/7">
            {/* 网站导航 */}
            <div className="w-full w-1/4">
              <h5 className="footer_title">供应商服务</h5>
              <p className="footer_item">
                认证会员服务<br />
                找项目<br />
              </p>
            </div>

            {/* 采购商服务 */}
            <div className="w-full w-1/4">
              <h5 className="footer_title">采购商服务</h5>
              <p className="footer_item">
                找供应商<br />
                发布采购信息<br />
              </p>
            </div>

            {/* 法律声明 */}
            <div className="w-full w-1/4">
              <h5 className="footer_title">法律声明</h5>
              <p className="footer_item">
                用户协议<br />
                隐私条款<br />
                版权声明<br />
              </p>
            </div>

            {/* 关于OE汽车 */}
            <div className="w-full w-1/4">
              <h5 className="footer_title">关于OE汽车</h5>
              <p className="footer_item">
                OE汽车介绍<br />
                联系我们<br />
                加入我们<br />
              </p>
            </div>
          </div>
          <div className="flex flex-row w-1/13 footer_contact"></div>
          {/* 右侧导航和联系信息 */}
          <div className="flex flex-row w-2/7">
            {/* 供应商联系 */}
            <div className="w-full w-1/2">
              <h5 className="footer_title">供应商联系</h5>
              <p className="footer_item">联系人：数据部<br/>电话：021-60690170<br/>邮箱：data@apsoto.com<br/>微信：13167253031</p>
            </div>

            {/* 采购商联系 */}
            <div className="w-full w-1/2">
              <h5 className="footer_title">采购商联系</h5>
              <p className="footer_item">联系人：市场部<br/>电话：021-60690109<br/>邮箱：market@apsoto.com<br/>微信：13003169075</p>
            </div>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="footer_copyright ">
          Copyright © 2018 OE Co.Ltd. All rights reserved. 备案/许可证编号为：沪ICP备18008080号
        </div>
      </div>
    </footer>
  );
};

export default Footer;