import React,{useEffect,} from 'react';
import { Form, Icon, Input, Button,message, } from 'antd';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

//登录界面

function Login(props) {
  const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched, } = props.form;
  const usernameError = isFieldTouched('username') && getFieldError('username');
  const passwordError = isFieldTouched('password') && getFieldError('password');

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        if(values.username==='admin'&&values.password==='123'){
          props.history.push({pathname:'/admin',});
        }else{
          message.error('账号密码不正确');
        }
      }
    });
  };

  useEffect(()=>{
    props.form.validateFields();
  },[]);
  return (
    <div style={{textAlign:'center',paddingTop:'50px',}}>
      <h2 style={{marginBottom:'30px',}} >我是登录组件</h2>
      <Form layout="inline"
        onSubmit={handleSubmit}
      >
        <Form.Item help={usernameError || ''}
          validateStatus={usernameError ? 'error' : ''}
        >
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
        <Form.Item help={passwordError || ''}
          validateStatus={passwordError ? 'error' : ''}
        >
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
          <Button disabled={hasErrors(getFieldsError())}
            htmlType="submit"
            type="primary"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

const MyLogin = Form.create({ name: 'horizontal_login', })(Login);

export default  MyLogin;
