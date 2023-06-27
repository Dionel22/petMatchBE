"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postInit = exports.Post = void 0;
const sequelize_1 = require("sequelize");
class Post extends sequelize_1.Model {
}
exports.Post = Post;
const postInit = (sequelize) => {
    Post.init({
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        details: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    }, {
        sequelize,
        paranoid: true,
        updatedAt: false,
    });
};
exports.postInit = postInit;
