module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define(
    "Contact",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [1, 100],
        },
      },
      lastName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [1, 100],
        },
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          isEmail: true,
          notEmpty: true,
        },
      },
      phone: {
        type: DataTypes.STRING(20),
        allowNull: true,
        validate: {
          len: [0, 20],
        },
      },
      company: {
        type: DataTypes.STRING(255),
        allowNull: true,
        validate: {
          len: [0, 255],
        },
      },
      jobTitle: {
        type: DataTypes.STRING(255),
        allowNull: true,
        validate: {
          len: [0, 255],
        },
      },
      industry: {
        type: DataTypes.STRING(100),
        allowNull: true,
        validate: {
          len: [0, 100],
        },
      },
      projectType: {
        type: DataTypes.STRING(100),
        allowNull: true,
        validate: {
          len: [0, 100],
        },
      },
      budget: {
        type: DataTypes.STRING(50),
        allowNull: true,
        validate: {
          len: [0, 50],
        },
      },
      timeline: {
        type: DataTypes.STRING(50),
        allowNull: true,
        validate: {
          len: [0, 50],
        },
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [1, 5000],
        },
      },
      preferredContact: {
        type: DataTypes.ENUM("email", "phone"),
        allowNull: false,
        defaultValue: "email",
      },
      newsletter: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      status: {
        type: DataTypes.ENUM("new", "contacted", "in_progress", "completed", "closed"),
        allowNull: false,
        defaultValue: "new",
      },
      source: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaultValue: "website",
      },
      ipAddress: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      userAgent: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      tableName: "contacts",
      indexes: [
        {
          fields: ["email"],
        },
        {
          fields: ["status"],
        },
        {
          fields: ["created_at"],
        },
      ],
    },
  )

  return Contact
}
