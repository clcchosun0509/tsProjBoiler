import { Menu } from "antd";
import * as classNames from "classnames/bind";
import * as React from "react";
import { Link } from "react-router-dom";
import styles from "./HeaderMenuItem.scss";

const cx = classNames.bind(styles);

interface IProps {
  text: string;
  link: string;
};

const HeaderMenuItem = ({ text, link, ...rest }: IProps) => {
  return (
    <Menu.Item className={cx("HeaderMenuItem")} {...rest}>
      <Link to={link}>{text}</Link>
    </Menu.Item>
  );
};

export default HeaderMenuItem;
