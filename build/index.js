"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = require("./routes/user_routes");
const app = (0, express_1.default)();
var port = 3000;
app.use("/", user_routes_1.userRouter);
app.listen(port, function () {
    console.log("Running RestHub on port", +port);
});
//# sourceMappingURL=index.js.map