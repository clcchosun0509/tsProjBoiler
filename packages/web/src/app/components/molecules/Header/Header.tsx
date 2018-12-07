import { Layout, Menu } from 'antd';
import * as classNames from 'classnames/bind';
import * as React from 'react';
import headerLogoImage from '../../../../assets/images/header_logo.png';
import { HeaderMenuItem } from '../../atoms';
import styles from './Header.scss';

const cx = classNames.bind(styles);

const Header = ({ ...rest }) => {
  return (
    <Layout.Header className={cx('Header')}>
      <div className={cx('Header__left-side')}>
        <img className={cx('Header__logo')} src={headerLogoImage} alt="번&공" />
        <Menu className={cx('Header__menu')} theme="dark" mode="horizontal">
          <Menu.SubMenu title="언어 선택">
            <HeaderMenuItem text="영어" link="/en" {...rest} />
            <HeaderMenuItem text="일본어" link="/jp" {...rest} />
            <HeaderMenuItem text="중국어" link="/cn" {...rest} />
          </Menu.SubMenu>
          <Menu.Item key="community">커뮤니티</Menu.Item>
        </Menu>
      </div>
      <div className={cx('Header__right-side')}>
        <Menu className={cx('Header__menu')} theme="dark" mode="horizontal">
          <Menu.Item key="login">로그인</Menu.Item>
        </Menu>
      </div>
    </Layout.Header>
  );
};

export default Header;
