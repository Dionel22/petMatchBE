"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const handlePetShop_1 = require("../handles/handlePetShop");
const petShopRouter = (0, express_1.Router)();
petShopRouter.get("/", handlePetShop_1.getPetShop);
petShopRouter.post("/", handlePetShop_1.postPetShop);
exports.default = petShopRouter;
