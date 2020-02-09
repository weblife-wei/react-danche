import React from 'react';
import { Card,Tabs, } from 'antd';

export default function index() {
  const { TabPane, } = Tabs;
  return (
    <div>
      <Card title="tabs选项">
        <Tabs defaultActiveKey="1">
          <TabPane key="1"
            tab="Tab 1"
          >
            Content of Tab Pane 1
          </TabPane>
          <TabPane key="2"
            tab="Tab 2"
          >
            Content of Tab Pane 2
          </TabPane>
          <TabPane key="3"
            tab="Tab 3"
          >
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </Card>
    </div>
  );
}
