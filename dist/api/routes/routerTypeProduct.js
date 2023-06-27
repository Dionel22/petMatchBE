"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const handleTypeProduct_1 = require("../handles/handleTypeProduct");
const typeProductRouter = (0, express_1.Router)();
typeProductRouter.get("/", handleTypeProduct_1.getTypeProduct);
exports.default = typeProductRouter;
