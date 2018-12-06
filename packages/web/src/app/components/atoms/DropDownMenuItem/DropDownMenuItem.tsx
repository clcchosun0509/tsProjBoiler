import { Menu } from "antd";
import * as classNames from "classnames/bind";
import * as React from "react";
import styles from "./DropDownMenuItem.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

type Props = {
  text: string;
  link: string;
};

const DropDownMenuItem = ({ text, link, ...rest }: Props) => {
  return (
    <Menu.Item className={cx("DropDownMenuItem")} {...rest}>
      <Link to={link}>{text}</Link>
    </Menu.Item>
  );
};

export default DropDownMenuItem;
