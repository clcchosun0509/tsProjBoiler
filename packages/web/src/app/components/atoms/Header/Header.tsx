import { Layout, Menu } from "antd";
import * as classNames from "classnames/bind";
import * as React from "react";
import styles from "./Header.scss";
import headerLogoImage from "../../../../assets/images/header_logo.png";

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <Layout.Header className={cx("Header")}>
      <div className={cx("Header__logo-wrapper")}>
        <img className={cx("Header__logo")} src={headerLogoImage} alt="번&공" />
      </div>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Layout.Header>
  );
};

export default Header;
