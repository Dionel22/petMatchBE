"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routerPetShop_1 = __importDefault(require("./routerPetShop"));
const routerTypeProduct_1 = __importDefault(require("./routerTypeProduct"));
const router = (0, express_1.Router)();
router.use("/petShop", routerPetShop_1.default);
router.use("/typeProduct", routerTypeProduct_1.default);
exports.default = router;
