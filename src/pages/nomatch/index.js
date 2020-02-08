import React from 'react';
import style from './index.module.scss';

export default function nomatch() {
  return (
    <div className={style.nomatch}>
      404页面,页面找不到了
    </div>
  );
}
