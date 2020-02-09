import React from 'react';
import {Card,Row,Col,} from 'antd';

export default function index() {
  const { Meta, } = Card;
  const cardList=[];
  const clickModal=()=>{
console.log(11);
  };
  const mapList=(num)=>{
    for(let m=0; m<num; m++){
      cardList.push(<Card
        cover={<img alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
               />}
        hoverable
        key={m}
        onClick={clickModal}
        style={{ width: 240,float:'left', }}
                    >
        <Meta description="www.instagram.com"
          title="Europe Street beat"
        />
      </Card>);
    }
    return cardList;
  };

  return (
    <div>
      {mapList(20)}
    </div>
  );
}
