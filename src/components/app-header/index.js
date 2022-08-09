import React, { memo } from 'react';
import { Link } from "react-router-dom";
import { headerLinks } from '../../common/local-data';
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export default memo(function AppHeader() {

  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <Link
          key={item.title}
          to={item.link}
          className="header-item"
          activeClassName="link-active"
        >
          <em>{item.title}</em>
          <i className="icon"></i>
        </Link>
      );
    } else {
      return (
        <a href={item.link} key={item.title} className="header-item">
          {item.title}
        </a>
      );
    }
  };

  return (
    <div>
      <HeaderWrapper>
        <div className='content'>
          <HeaderLeft>
            <h1>
              <a href="#/" className="logo sprite_01">
                网易云音乐
              </a>
            </h1>
            <div className="header-group">
              {headerLinks.map((item, index) => {
                return showSelectItem(item, index);
              })}
            </div>
          </HeaderLeft>
          <HeaderRight>
            <div className="search-wrapper">
            <Input
              className="search "
              placeholder="音乐/视频/电台/用户"
              size="large"
              prefix={<SearchOutlined />}
            />
            </div>
            <div className="center">创作者中心</div>
            <a href='www.baidu.com'>登录</a>
          </HeaderRight>
        </div>
        <div className='divider'></div>
      </HeaderWrapper>
    </div>
  )
})