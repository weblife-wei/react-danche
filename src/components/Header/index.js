import React,{useState,useEffect,} from 'react';
import {Row,Col,} from 'antd';
import moment from 'moment';   //moment时间组件
import axios from './../../axios';   //自己封装的jsonp组件
import style from './index.module.scss';

export default function Header() {
  const [username,setUsername,]=useState('');   //用户名
  const [time,setTime,]=useState(new Date());   //时间
  const [weather,setWeather,]= useState('');   //天气温度

  const getWeatherAPIDate=()=>{
    const city='北京';
    axios.jsonp({
      url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2',
    })
      .then((res)=>{
        if(res.status==='success'){
          setWeather(res.results[0].weather_data[1].temperature);
        }
      });
  };


  useEffect(() => {
    setUsername('黑黑&喵喵');   //设置用户名
    const timer = setInterval(()=>{   //时间
      setTime(new Date());
    },1000);
    getWeatherAPIDate();  //获取百度天气api

    return function(){
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={style.header}>
      <Row className={style.headerTop}>
        <Col span={24}>
          <span>欢迎，{username}</span>
          <a href="#">退出</a>
        </Col>
      </Row>
      <Row className={style.headerBottom}>
        <Col className={style.branch}
          span={4}
        >
          首页
          <span className={style.sanjiao}></span>
        </Col>
        <Col className={style.timeWeight}
          span={20}
        >
          <span style={{marginRight:'16px',}}>{moment().format('YYYY-MM-DD HH:mm:ss')}</span>
          <span style={{marginRight:'16px',}}>有你，便永远是晴天</span>
          <img src="http://api.map.baidu.com/images/weather/day/qing.png"
            style={{marginRight:'10px',width:'22px',marginTop:'-2px',}}
          />
          <span>{weather}</span>
        </Col>
      </Row>
    </div>
  );
}
