'use strict'
const webHook = require('./webHook')
const { webHookFile, webHookMsg } = require('./discordmsg')
module.exports = async(obj = {}, content, method = 'PATCH')=>{
  if(content?.file || content?.files){
    await webHook.File(obj?.token, content, method)
  }else{
    await webHook.Msg(obj?.token, content, method)
  }
}
