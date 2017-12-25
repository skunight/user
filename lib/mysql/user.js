module.exports = ({ name, tableName}) => {
  return (sequelize, DataTypes) => {
    return sequelize.define(name, {
      mobile: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 0,
        comment: '手机',
      },
      passwd: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '密码',
      },
      nickName: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: '昵称',
      },
      birthday: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: '生日',
      },
      gender: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: '性别',
      },
      province: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: '省',
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: '市',
      },
      district: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: '区',
      },
      street: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: '街道',
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    }, {
        tableName: tableName,
        timestamp: true,
        defaultScope: {
          where: {
            deleted: false,
          },
        },
        indexes: [
          {
            fields: ['deleted']
          },
          {
            fields: ['pid']
          },
        ],
      })
  }
}