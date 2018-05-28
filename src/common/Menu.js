import React from 'react';

import { Menu, Icon, Button } from 'antd';
const SubMenu = Menu.SubMenu;

class Menus extends React.Component {
  state = {
    collapsed: false,
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {

    return (
      <div style={{ width: 256 }}>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1">
            <Icon type="home" />
            <span>首页</span>
          </Menu.Item>
          <SubMenu key="sub1" title={<span><Icon type="shopping-cart" /><span>大内特供</span></span>}>
            <Menu.Item key="sub15"><Icon type="pay-circle-o" />商品管理</Menu.Item>
            <Menu.Item key="sub16">添加商品</Menu.Item>
            <Menu.Item key="sub17">销售数据录入</Menu.Item>
            <Menu.Item key="sub18">销售数据查询</Menu.Item>
            <Menu.Item key="sub19">收支款项录入</Menu.Item>
            <Menu.Item key="sub12">收支款项查询</Menu.Item>
            <Menu.Item key="sub10">综合数据统计</Menu.Item>
          </SubMenu>

          <Menu.Item key="3">
            <Icon type="inbox" />
            <span>工资核算系统</span>
          </Menu.Item>
          <SubMenu key="sub11" title={<span><Icon type="pay-circle-o" /><span>工资核算系统</span></span>}>
            <Menu.Item key="15">工资核算</Menu.Item>
            <Menu.Item key="16">记录查询</Menu.Item>
            <Menu.Item key="17">添加/删除人员</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>奖励/差错记录系统</span></span>}>
            <Menu.Item key="sub219">奖励/差错记录</Menu.Item>
            <Menu.Item key="sub2110">查询</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}
export default Menus;
