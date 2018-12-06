import { Layout } from "antd";
import * as React from "react";
import { Footer } from "../atoms";
import { Header } from "../molecules";

export default class MainPage extends React.Component {
  public render() {
    return (
      <Layout>
        <Header />
        메인 페이지
        <Footer />
      </Layout>
    );
  }
}
