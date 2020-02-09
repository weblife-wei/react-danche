import React from 'react';
import {Button,Card,Radio,Icon,} from 'antd';
import style from './index.module.scss';
import './index.scss';

export default function index() {
  return (
    <div className="buttons">
      <Card bordered={false}
        className={style.cardMargin}
        title="基础按钮"
      >
        <Button className={style.buttonMargin}
          type="primary"
        >喵喵</Button>
        <Button className={style.buttonMargin}>喵喵</Button>
        <Button className={style.buttonMargin}
          type="dashed"
        >喵喵</Button>
        <Button className={style.buttonMargin}
          type="danger"
        >喵喵</Button>
        <Button className={style.buttonMargin}
          disabled
        >喵喵</Button>
        <Button className={style.buttonMargin}
          type="link"
        >喵喵</Button>
      </Card>

      <Card bordered={false}
        className={style.cardMargin}
        title="图形按钮"
      >
        <Button className={style.buttonMargin}
          icon="heart"
        >喵喵</Button>
        <Button className={style.buttonMargin}
          icon="edit"
        >喵喵</Button>
        <Button className={style.buttonMargin}
          icon="link"
          type="dashed"
        >喵喵</Button>
        <Button className={style.buttonMargin}
          icon="search"
          shape="circle"
          type="primary"
        />
        <Button className={style.buttonMargin}
          disabled
          icon="search"
        >喵喵</Button>
      </Card>

      <Card bordered={false}
        className={style.cardMargin}

        title="Loading按钮"
      >
        <Button className={style.buttonMargin}
          loading
          type="primary"
        >喵喵</Button>
        <Button className={style.buttonMargin}>喵喵</Button>
        <Button className={style.buttonMargin}
          type="dashed"
        >喵喵</Button>
        <Button className={style.buttonMargin}
          type="danger"
        >喵喵</Button>
        <Button className={style.buttonMargin}
          disabled
        >喵喵</Button>
        <Button className={style.buttonMargin}
          type="link"
        >喵喵</Button>
      </Card>

      <Card bordered={false}
        className={style.cardMargin}

        title="组合按钮"
      >
        <Radio.Group>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>

        <Button.Group>
          <Button type="primary">
            <Icon type="left" />
            Backward
          </Button>
          <Button type="primary">
            Forward
            <Icon type="right" />
          </Button>
        </Button.Group>
      </Card>

      <Card bordered={false}
        className={style.cardMargin}

        title="Loading按钮"
      >
        <Button className={style.buttonMargin}
          loading
          type="primary"
        >喵喵</Button>
        <Button className={style.buttonMargin}
          loading
        >喵喵</Button>
        <Button className={style.buttonMargin}
          loading
          type="dashed"
        >喵喵</Button>
        <Button className={style.buttonMargin}
          loading
          type="danger"
        >喵喵</Button>
        <Button className={style.buttonMargin}
          disabled
          loading
        >喵喵</Button>
        <Button className={style.buttonMargin}
          loading
          type="link"
        >喵喵</Button>
      </Card>
    </div>
  );
}
