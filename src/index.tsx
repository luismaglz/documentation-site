import { Layout } from "antd";
import "antd/dist/antd.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { DocsContent } from "./components/docs-content";
import { SideNavMenu } from "./components/sidenav-menu";
import { ClientServicesProvider } from "./digital-api/clients";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

const { Header, Footer, Sider, Content } = Layout;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ClientServicesProvider>
        <Layout>
          <Sider width={300}>
            <SideNavMenu></SideNavMenu>
          </Sider>
          <Layout>
            <Header>Header</Header>
            <Content>
              <DocsContent></DocsContent>
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </ClientServicesProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
