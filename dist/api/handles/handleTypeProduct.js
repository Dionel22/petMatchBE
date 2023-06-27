"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypeProduct = void 0;
const controllerTypeProduct_1 = require("../controllers/controllerTypeProduct");
const getTypeProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, controllerTypeProduct_1.getAllTypeProduct)();
        res.status(200).json(response);
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ msg: error });
    }
});
exports.getTypeProduct = getTypeProduct;
