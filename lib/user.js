const crypto = require('crypto')
class User {
  constructor(sequelize, { name = 'user', tableName = 't_user', salt = ''}){
    this.UserModel = sequelize.import(require('./mysql/user')({name,tableName}))
    this.UserModel.sync()
    this.salt = salt
  }

  async login({mobile,passwd}) {
    try { 
      return this.UserModel.findOne({ where: { mobile, passwd: crypto.createHash('sha256').update(`${passwd}${this.salt}`).digest('hex') } })
    } catch (err) {
      console.error(err)
      return null
    }
  }
}
module.exports = User