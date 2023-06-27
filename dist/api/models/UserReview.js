"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserReview = void 0;
const sequelize_1 = require("sequelize");
const User_1 = require("./User");
const Review_1 = require("./Review");
class UserReview extends sequelize_1.Model {
}
exports.UserReview = UserReview;
function userReviewModel(sequelize) {
    UserReview.init({
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        UserId: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            references: {
                model: User_1.Users,
                key: "id",
            },
        },
        ReviewerId: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            references: {
                model: User_1.Users,
                key: "id",
            },
        },
        ReviewId: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            references: {
                model: Review_1.Reviews,
                key: "id",
            },
        },
    }, {
        sequelize,
        paranoid: true,
        timestamps: false,
    });
}
exports.default = userReviewModel;
