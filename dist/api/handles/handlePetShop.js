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
exports.postPetShop = exports.getPetShop = void 0;
const controllerPetShop_1 = require("../controllers/controllerPetShop");
const controllerPetShop_2 = require("../controllers/controllerPetShop");
// trae todos los productos
const getPetShop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, controllerPetShop_1.getAllPetShop)();
        res.status(200).json(response);
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ msg: error });
    }
});
exports.getPetShop = getPetShop;
//crea producto
const postPetShop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, imagen, price, available, averageRating, typeId } = req.body;
        const response = yield (0, controllerPetShop_2.postAllPetShop)(name, imagen, price, available, averageRating, typeId);
        res.status(200).json(response);
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ msg: error });
    }
});
exports.postPetShop = postPetShop;
