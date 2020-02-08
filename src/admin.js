import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NavLeft from './components/NavLeft';
import Home from './pages/home';
import styles from './admin.module.scss';

import {Row,Col,} from 'antd';

export default function admin(props) {
  return (
    <Row className={styles.container}>
      <Col className={styles.navLeft}
        span={4}
      >
        <NavLeft></NavLeft>
      </Col>
      <Col className={styles.main}
        span={20}
      >
        <Header/>
        <Row className={styles.content}>
          {props.children}
        </Row>
        <Footer />
      </Col>
    </Row>
  );
}
