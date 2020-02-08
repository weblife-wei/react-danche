import React,{useState,useEffect,} from 'react';
import menuList from './../../config/menuConfig';
import style from './index.module.scss';
import { Menu, } from 'antd';

const { SubMenu, } = Menu;

export default function Index() {
  const [treeNode,setTreeNode,]=useState('');

  //使用递归的方法，组装出菜单的结构，将这个结构放到menu标签之间去
  const renderMenu=(date)=>{
    return date.map(item=>{
      if(item.children){
        return (
          <SubMenu key={item.key}
            title={item.title}
          >
            {renderMenu(item.children)}
          </SubMenu>
        );
      }else{
        return <Menu.Item key={item.key}>{item.title}</Menu.Item>;
      }
    });
  };

  useEffect(()=>{
    setTreeNode(renderMenu(menuList));   //componentDidMount阶段
  },[]);

  return (
    <div className={style.navleft}>
      <div>
        <h1 className={style.h1}>
          <img src="/assets/images/heart.png"
            style={{width:'30px',}}
          />喵喵喵呀
        </h1>
      </div>
      <Menu mode="vertical"
        theme="dark"
      >
        {
          treeNode
        }
      </Menu>
    </div>
  );
}
