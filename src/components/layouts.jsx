"use client";
import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { ClockCircleOutlined, HighlightOutlined, HomeOutlined } from '@ant-design/icons';
const {Header, Content, Footer} = Layout;



const Layouts = ({children}) => {
    const router = useRouter();
    const pathname = usePathname();

    const items = [
      {
        key: "/",
        label: "Home",
        icon: <HomeOutlined/>
      },
      {
        key: "/quotes",
        label: "Quotes",
        icon: <HighlightOutlined/>
      },
      {
        key: "/time",
        label: "Time",
        icon: <ClockCircleOutlined/>
      }
    ]

  return (
    <Layout className="body">
      <Header
        // style={{
        //   display: 'flex',
        //   alignItems: 'center',
        // }}
      >
        <div className="demo-logo" />
        <Menu
          onClick={({key}) => {
            router.push(key)
          }}
          theme="dark"
          mode="horizontal"
          items={items}
          defaultSelectedKeys={[pathname]}
        />
      </Header>
      <Content
        style={{
          padding: '0 50px',
          height: '100%'
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-content"
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
          marginTop: "auto"
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  )
}

export default Layouts