"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const sequelize_1 = require("sequelize");
class Order extends sequelize_1.Model {
}
exports.Order = Order;
function orderModel(sequelize) {
    Order.init({
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        taxes: {
            type: sequelize_1.DataTypes.DOUBLE,
            allowNull: false,
        },
        price: {
            type: sequelize_1.DataTypes.DOUBLE,
            allowNull: false,
        },
        totalPrice: {
            type: sequelize_1.DataTypes.DOUBLE,
            allowNull: false,
        },
        purchaseDate: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: true,
            },
        },
    }, {
        sequelize,
        paranoid: true,
        timestamps: false,
    });
    return Order;
}
exports.default = orderModel;
