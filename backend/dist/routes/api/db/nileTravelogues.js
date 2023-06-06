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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const travelogues_provider_1 = require("../../../providers/travelogues.provider");
const router = new koa_router_1.default();
router.get('/', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const traveloguesProvider = new travelogues_provider_1.Travelogues(ctx.sb);
    try {
        const traveloguesAndAuthors = yield traveloguesProvider.getAllTraveloguesAndPublications();
        ctx.status = 200;
        ctx.body = traveloguesAndAuthors;
    }
    catch (error) {
        throw new Error(`${error}`);
    }
}));
router.get('/publications', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const traveloguesProvider = new travelogues_provider_1.Travelogues(ctx.sb);
    try {
        const travelogues = yield traveloguesProvider.getAllTravelogues();
        ctx.status = 200;
        ctx.body = travelogues;
    }
    catch (error) {
        throw new Error(`${error}`);
    }
}));
exports.default = router;