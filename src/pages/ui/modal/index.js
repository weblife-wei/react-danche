import React,{useState,} from 'react';
import { Modal, Button,Card, } from 'antd';

import style from './index.module.scss';

export default function Modals() {
  const [visible1,setVisible1,]=useState(false);
  const [visible2,setVisible2,]=useState(false);
  const [loading,setLoading,]=useState(false);
  const showModal1=()=>{
    setVisible1(true);
  };
  const handleCancel1=()=>{
    setVisible1(false);
  };
  const handleOk1=()=>{
    setVisible1(false);
  };

  const showModal2=()=>{
    setVisible2(true);
  };
  const handleCancel2=()=>{
    setVisible2(false);
  };
  const handleOk2=()=>{
    setVisible2(false);
  };
  return (
    <div>
      <Card title="基础弹框">
        <Button className={style.buttonMargin}
          onClick={showModal1}
          type="primary"
        >
          默认弹框
        </Button>
        <Modal
          onCancel={handleCancel1}
          onOk={handleOk1}
          title="Basic Modal"
          visible={visible1}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>

        <Button className={style.buttonMargin}
          onClick={showModal2}
          type="primary"
        >
          自定义页脚
        </Button>
        <Modal
          footer={[
            <Button key="back"
              onClick={handleCancel2}
            >
              黑黑
            </Button>,
            <Button key="submit"
              loading={loading}
              onClick={handleOk2}
              type="primary"
            >
              喵苗
            </Button>,
          ]}
          onCancel={handleCancel2}
          onOk={handleOk2}
          title="Basic Modal"
          visible={visible2}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </Card>

    </div>
  );
}
