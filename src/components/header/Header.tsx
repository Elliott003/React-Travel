import { GlobalOutlined } from "@ant-design/icons";
import { Button, Dropdown, Input, Layout, Menu, Typography } from "antd";
import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";

export const Header: React.FC = () => {
  const menu = (
    <Menu>
      <Menu.Item>Chinese</Menu.Item>
      <Menu.Item>English</Menu.Item>
    </Menu>
  );
  return (
    <>
      <div className={styles["app-header"]}>
        {/* top-header */}
        <div className={styles["top-header"]}>
          <div className={styles.inner}>
            <Typography.Text>Make Your Travel Happy</Typography.Text>
            <Dropdown.Button
              style={{ marginLeft: 15 }}
              overlay={menu}
              icon={<GlobalOutlined />}
              className={styles["inline-dropdown-button"]}
            >
              Language
            </Dropdown.Button>
            <Button.Group className={styles["button-group"]}>
              <Button>Signup</Button>
              <Button>Signin</Button>
            </Button.Group>
          </div>
        </div>
        <Layout.Header className={styles["main-header"]}>
          <img src={logo} alt="logo" className={styles["App-logo"]} />
          <Typography.Title level={3} className={styles.title}>
            React Travel
          </Typography.Title>
          <Input.Search
            placeholder="Please input your destination!"
            className={styles["search-input"]}
          />
        </Layout.Header>
        <Menu
          mode={"horizontal"}
          className={styles["main-menu"]}
          items={[
            { key: 1, label: "Home" },
            { key: 2, label: "Group" },
            { key: 3, label: "Personal" },
            { key: 4, label: "Hotal" },
            { key: 5, label: "Visa" },
            { key: 6, label: "Travel Study" },
            { key: 7, label: "Business" },
            { key: 8, label: "VIP" },
            { key: 9, label: "Insurance" },
            { key: 10, label: "Local" },
          ]}
        />
      </div>
    </>
  );
};
