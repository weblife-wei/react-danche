import React from 'react';
import {Card,Form,Icon, Input, Button,Checkbox, } from 'antd';
import './chuizhi.css';

function Index(props) {
  const {getFieldDecorator,} =props.form;

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  return (
    <div>
      <Card title="普通登录表单">
        <Form className="login-form"
          onSubmit={handleSubmit}
        >
          <Form.Item>
            {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!', },],
          })(
            <Input
              placeholder="Username"
              prefix={<Icon style={{ color: 'rgba(0,0,0,.25)', }}
                type="user"
                      />}
            />,
          )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!', },],
          })(
            <Input
              placeholder="Password"
              prefix={<Icon style={{ color: 'rgba(0,0,0,.25)', }}
                type="lock"
                      />}
              type="password"
            />,
          )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
            <a className="login-form-forgot"
              href=""
            >
              Forgot password
            </a>
            <Button className="login-form-button"
              htmlType="submit"
              type="primary"
            >
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

const Chuizhi =Form.create({ name: 'denglu_login', })(Index);

export default Chuizhi;
