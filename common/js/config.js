/*
 * @Author: 楚 35090745+longc447@users.noreply.github.com
 * @Date: 2022-11-14 17:34:50
 * @LastEditors: 楚 35090745+longc447@users.noreply.github.com
 * @LastEditTime: 2023-03-22 10:51:39
 * @FilePath: /glass-kf/common/js/config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * 镜片一站式采购平台
 */
const name = 'https://zhenshi.tongzhounetwork.ltd'
const x = {
  // baseUrl: 'https://jqh.tongzhounetwork.ltd',
  baseUrl: name,
  imgDomain: name,
  h5Domain: name + '/h5',
  mpKey: 'IB7BZ-4BMCD-43J4O-HS2HW-DZSGF-LGBHX',
  //小程序appid wx0f57e059962fab6a
}
const globalConfig = {
  // 价格保护 3是无保护 0是有保护
  is_wholesaler: 0,
  // 是否强制登陆 0不强制 1强制


  isMustLogin: 0,
  // 是否开启定位功能 0关闭 1开启
  isEnableLocation: 0
}
let param = {
  //客服地址
  webSocket: 'wss://zhenshi.tongzhounetwork.ltd/wss',
  //本地端主动给服务器ping的时间, 0 则不开启 , 单位秒 
  pingInterval: 1500,
  // 超时时间 超出时间段将重连系统 单位秒
  // timeout : 15000,
  // api安全
  apiSecurity: false,
  // 公钥
  publicKey: ``,
}
Object.assign(param, x)
export default {
  ...param,
  ...x,
  ...globalConfig
}
