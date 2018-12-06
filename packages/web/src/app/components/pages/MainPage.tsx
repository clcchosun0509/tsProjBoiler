import { Layout } from "antd";
import * as React from "react";
import { Footer, Header } from "../atoms";

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
