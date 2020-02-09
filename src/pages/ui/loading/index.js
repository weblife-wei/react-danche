import React,{useState,} from 'react';
import { Spin, Alert, Switch, } from 'antd';

export default function Loadings() {
  const [loading, setLoading,] = useState(false);
  const toggle=()=>{
    setLoading(!loading);
  };
  const container = (
    <Alert
      description="Further details about the context of this alert."
      message="Alert message title"
      type="info"
    />
  );
  return (
    <div>
      <Spin delay={500}
        spinning={loading}
      >
        {container}
      </Spin>
      <div style={{ marginTop: 16, }}>
        Loading state：
        <Switch checked={loading}
          onChange={toggle}
        />
      </div>
    </div>
  );
}
