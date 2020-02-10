import React from 'react';
import {Card,Form,Icon, Input, Button, } from 'antd';

const FormItem=Form.Item;

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
      <Card title="登录内联表单">
        <Form layout="inline"
          onSubmit={handleSubmit}
        >
          <FormItem>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!', },{require: true, min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur', },],
            })(
              <Input
                placeholder="Username"
                prefix={<Icon style={{ color: 'rgba(0,0,0,.25)', }}
                  type="user"
                        />}
              />,
          )}
          </FormItem>
          <FormItem>
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
          </FormItem>
          <Form.Item>
            <Button
              htmlType="submit"
              type="primary"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

const Denglu =Form.create({ name: 'denglu_login', })(Index);

export default Denglu;
