"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./config/app");
const http = require("http");
const PORT = process.env.PORT || 3000;
const server = http.createServer(app_1.default);
let io = require('socket.io')(server);
server.listen(PORT, () => console.log(`Server started at port ${PORT}`));
//# sourceMappingURL=server.js.map