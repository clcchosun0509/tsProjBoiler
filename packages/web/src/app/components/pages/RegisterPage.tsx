import { Layout } from "antd";
import * as React from "react";
import { Footer, Register } from "../atoms";
import { Header } from "../molecules";

export default class RegisterPage extends React.Component {

  public dummySubmit = async (values: any) => {
    console.log(values);
    return null
  }

  public render() {
    return (
      <Layout>
        <Header />
        <Register submit={this.dummySubmit}/>
        <Footer />
      </Layout>
    );
  }
}
