'use strict'
const Cmds = {}
Cmds.enemy = require('./enemy')
Cmds.omicron = require('./omicron')
Cmds.report = require('./report')
Cmds.defense = require('./defense')

const { replyError } = require('src/helpers')

module.exports = async(obj = {})=>{
  try{
    let tempCmd = obj.subCmdGroup || obj.subCmd, opt = obj.data?.options || {}
    let msg2send = { content: 'command not recongnized' }
    if(tempCmd && Cmds[tempCmd]) msg2send = await Cmds[tempCmd](obj, opt)
    return msg2send
  }catch(e){
    replyError(obj)
    throw(e)
  }
}
