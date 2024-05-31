const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    googleId: {
        type: DataTypes.STRING,
        unique: true
    },
    name: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    imageUrl: DataTypes.STRING,
    createdAt: {
        type: DataTypes.DATE,

    },
    updatedAt: {
        type: DataTypes.DATE
    }
},
    {
        timestamps: true
    });

// we can use migration here, because of one table, I am using sync method...
sequelize.sync()
    .then(() => console.log('Database synced'))
    .catch(err => console.log('Error: ' + err));

module.exports = { User };
