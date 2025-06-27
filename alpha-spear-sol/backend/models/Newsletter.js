module.exports = (sequelize, DataTypes) => {
  const Newsletter = sequelize.define(
    "Newsletter",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
          notEmpty: true,
        },
      },
      firstName: {
        type: DataTypes.STRING(100),
        allowNull: true,
        validate: {
          len: [0, 100],
        },
      },
      lastName: {
        type: DataTypes.STRING(100),
        allowNull: true,
        validate: {
          len: [0, 100],
        },
      },
      status: {
        type: DataTypes.ENUM("subscribed", "unsubscribed", "bounced"),
        allowNull: false,
        defaultValue: "subscribed",
      },
      source: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaultValue: "contact_form",
      },
      subscribedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      unsubscribedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      ipAddress: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
    },
    {
      tableName: "newsletter_subscribers",
      indexes: [
        {
          fields: ["email"],
          unique: true,
        },
        {
          fields: ["status"],
        },
      ],
    },
  )

  return Newsletter
}
