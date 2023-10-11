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
      <Header style={{backgroundColor: "#0d0401"}}>
        <Menu
          onClick={({key}) => {
            router.push(key)
          }}
          style={{backgroundColor: "#0d0401", color: "white"}}
          mode="horizontal"
          items={items}
          defaultSelectedKeys={[pathname]}
        />
      </Header>
      <Content
        style={{
          padding: '0 50px',
          height: '100%',
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0d0401"
        }}
      >
        <div
          style={{fontFamily: "Hurme Geometric Sans 3 W01 Bold", color: "#eb8d2f"}}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
          marginTop: "auto",
          backgroundColor: "#0d0401"
        }}
      >
        John Types &copy;2023 Created by John Vu - Inspired by Monkey Type
      </Footer>
    </Layout>
  )
}

export default Layouts