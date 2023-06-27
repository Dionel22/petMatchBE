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
exports.getAllTypeProduct = void 0;
const { TypeProduct } = require("../db");
const getAllTypeProduct = () => __awaiter(void 0, void 0, void 0, function* () {
    const array = ["cama", "plato", "Transportador", "Collar"];
    array.forEach(element => {
        TypeProduct.findOrCreate({ where: { name: element } });
    });
    const responseDB = yield TypeProduct.findAll({ attributes: ["name"] });
    return responseDB;
});
exports.getAllTypeProduct = getAllTypeProduct;
/*
1° cama
2° plato
3° transportador
4° collar
 */ 
