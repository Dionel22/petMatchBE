"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const sequelize_1 = require("sequelize");
const Product_1 = __importStar(require("./models/Product"));
const Order_1 = __importStar(require("./models/Order"));
const ProductType_1 = __importStar(require("./models/ProductType"));
const ProductReviews_1 = __importStar(require("./models/ProductReviews"));
const Pets_1 = __importStar(require("./models/Pets"));
const Vaccine_1 = require("./models/Vaccine");
const PetType_1 = __importStar(require("./models/PetType"));
const Post_1 = require("./models/Post");
const User_1 = __importStar(require("./models/User"));
const UserType_1 = __importStar(require("./models/UserType"));
const Review_1 = __importStar(require("./models/Review"));
const UserReview_1 = __importStar(require("./models/UserReview"));
const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_HOST, POSTGRES_DATABASE } = process.env;
const sequelize = new sequelize_1.Sequelize(`postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}/${POSTGRES_DATABASE}`, {
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            mode: "require",
        },
    },
});
// ----------------- Definición de los modelos -----------------
(0, Product_1.default)(sequelize);
(0, Order_1.default)(sequelize);
(0, ProductType_1.default)(sequelize);
(0, ProductReviews_1.default)(sequelize);
(0, User_1.default)(sequelize);
(0, UserType_1.default)(sequelize);
(0, Review_1.default)(sequelize);
(0, PetType_1.default)(sequelize);
(0, Pets_1.default)(sequelize);
(0, Vaccine_1.vaccineInit)(sequelize);
(0, Post_1.postInit)(sequelize);
(0, UserReview_1.default)(sequelize);
// ------------------ Relaciones ---------------------------------
UserType_1.UsersType.hasMany(User_1.Users);
User_1.Users.belongsTo(UserType_1.UsersType);
Review_1.Reviews.belongsToMany(User_1.Users, { through: UserReview_1.UserReview });
User_1.Users.belongsToMany(Product_1.Product, { through: "UserSellsProduct" });
Product_1.Product.belongsToMany(User_1.Users, { through: "UserSellsProduct" });
User_1.Users.hasMany(Order_1.Order);
Order_1.Order.belongsTo(User_1.Users);
Order_1.Order.belongsToMany(Product_1.Product, { through: "OrderProducts" });
Product_1.Product.belongsToMany(Order_1.Order, { through: "OrderProducts" });
ProductType_1.TypeProduct.hasMany(Product_1.Product);
Product_1.Product.belongsTo(ProductType_1.TypeProduct);
Product_1.Product.belongsToMany(Review_1.Reviews, { through: ProductReviews_1.ProductReviews });
Review_1.Reviews.belongsToMany(Product_1.Product, { through: ProductReviews_1.ProductReviews });
ProductReviews_1.ProductReviews.belongsTo(Product_1.Product);
ProductReviews_1.ProductReviews.belongsTo(Review_1.Reviews);
Product_1.Product.hasMany(ProductReviews_1.ProductReviews);
Review_1.Reviews.hasMany(ProductReviews_1.ProductReviews);
User_1.Users.hasMany(ProductReviews_1.ProductReviews);
ProductReviews_1.ProductReviews.belongsTo(User_1.Users);
Post_1.Post.belongsToMany(User_1.Users, { through: "UserPosts" });
User_1.Users.belongsToMany(Post_1.Post, { through: "UserPosts" });
Post_1.Post.belongsToMany(User_1.Users, { through: "UserRequestsPet" });
User_1.Users.belongsToMany(Post_1.Post, { through: "UserRequestsPet" });
Pets_1.Pet.hasOne(Post_1.Post);
Post_1.Post.belongsTo(Pets_1.Pet);
PetType_1.PetType.hasOne(Pets_1.Pet);
Pets_1.Pet.belongsTo(PetType_1.PetType);
Pets_1.Pet.belongsToMany(Vaccine_1.Vaccine, { through: "PetVaccines" });
Vaccine_1.Vaccine.belongsToMany(Pets_1.Pet, { through: "PetVaccines" });
exports.default = sequelize;
