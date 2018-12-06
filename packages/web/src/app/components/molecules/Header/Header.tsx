import { Layout, Menu, Dropdown } from "antd";
import * as classNames from "classnames/bind";
import * as React from "react";
import styles from "./Header.scss";
import headerLogoImage from "../../../../assets/images/header_logo.png";
import { DropDownMenuItem } from "../../atoms";

const cx = classNames.bind(styles);

const Header = ({ ...rest }) => {
  const menu = (
    <Menu>
      <DropDownMenuItem text="영어" link="/en" {...rest} />
      <DropDownMenuItem text="일본어" link="/jp" {...rest} />
      <DropDownMenuItem text="중국어" link="/cn" {...rest} />
    </Menu>
  );
  return (
    <Layout.Header className={cx("Header")}>
      <div className={cx("Header__logo-wrapper")}>
        <img className={cx("Header__logo")} src={headerLogoImage} alt="번&공" />
      </div>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">
          <Dropdown overlay={menu}>
            <a href="#">언어 선택</a>
          </Dropdown>
        </Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Layout.Header>
  );
};

export default Header;
