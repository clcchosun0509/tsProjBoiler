import {Layout} from 'antd';
import * as classNames from 'classnames/bind';
import * as React from 'react';
import styles from './Footer.scss';

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <Layout.Footer className={cx('Footer')}>
      번역 사이트 ©2018 Created by Geon Woo Park
    </Layout.Footer>
  );
};

export default Footer;