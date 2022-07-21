"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.userRouter = router;
router.get("/api", (req, res) => {
    res.json({
        status: "200",
        message: "Super Api is working from node js",
    });
});
router.post("/api", (req, res) => {
    res.json({
        status: 201,
        message: "New user is created",
    });
});
router.put("/api", (req, res) => {
    res.json({
        status: 200,
        message: "New user is created",
    });
});
router.delete("/api", (req, res) => {
    res.json({
        status: 200,
        message: "New user is created",
    });
});
//# sourceMappingURL=user_routes.js.map