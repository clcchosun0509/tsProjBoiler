import * as classNames from 'classnames/bind';
import * as React from 'react';
import styles from './Header.scss';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <div className={cx('Header__main')}>헤더</div>
  );
};

export default Header;