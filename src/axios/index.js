import Jsonp from 'jsonp';
export default class Axios {
  //使用jsonp来实现跨域
  static jsonp(options){
    //返回一个promise对象
    return new Promise((resolve,reject)=>{
      //使用jsonp对象 Jsonp(url,param,callback)
      Jsonp(options.url,{
        param:'callback',
      },(err,response)=>{
        if(response.status==='success'){  //返回的status是success，则返回成功参数
          resolve(response);
        }else{
          reject(response.message);  //返回message说明
        }
      });
    });
  }
}