"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
//importing modules
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const username = process.env.mongodb_username;
const password = process.env.mongodb_password;
const dbName = 'rizki-be';
console.log(username, password, dbName);
const connectionString = `mongodb+srv://${username}:${password}@db-rizkifauzi-betest.zzcr8.mongodb.net/?retryWrites=true&w=majority&appName=db-rizkifauzi-betest`;
const options = {
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4
};
exports.db = mongoose_1.default.connect(connectionString, options)
    .then(res => {
    if (res) {
        console.log(`Database connection succeffully to ${dbName}`);
    }
}).catch(err => {
    console.log(err);
});
