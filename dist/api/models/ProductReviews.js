"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductReviews = void 0;
const sequelize_1 = require("sequelize");
class ProductReviews extends sequelize_1.Model {
}
exports.ProductReviews = ProductReviews;
function productReviewsModel(sequelize) {
    ProductReviews.init({
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
    }, {
        sequelize,
        paranoid: true,
        timestamps: false,
    });
    return ProductReviews;
}
exports.default = productReviewsModel;
