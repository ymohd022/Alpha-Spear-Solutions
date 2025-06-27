module.exports = (sequelize, DataTypes) => {
  const Quote = sequelize.define(
    "Quote",
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
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [1, 255],
        },
      },
      projectType: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [1, 100],
        },
      },
      projectDescription: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [1, 5000],
        },
      },
      requirements: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
          len: [0, 5000],
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
      additionalInfo: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
          len: [0, 2000],
        },
      },
      status: {
        type: DataTypes.ENUM("new", "reviewing", "quoted", "accepted", "rejected", "completed"),
        allowNull: false,
        defaultValue: "new",
      },
      estimatedCost: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      estimatedHours: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      quotedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      validUntil: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      assignedTo: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      priority: {
        type: DataTypes.ENUM("low", "medium", "high", "urgent"),
        allowNull: false,
        defaultValue: "medium",
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
      tableName: "quotes",
      indexes: [
        {
          fields: ["email"],
        },
        {
          fields: ["status"],
        },
        {
          fields: ["priority"],
        },
        {
          fields: ["created_at"],
        },
      ],
    },
  )

  return Quote
}
