import express, { Request, Response } from 'express';
// import {db} from '../Config/db.config';
import {router as marketplaceRouter} from '../Routes/marketplace.route';
import {router as collectionRouter} from '../Routes/collection.route';
import {router as walletRouter} from '../Routes/wallet.route';

const app = express();

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use((req: Request, res: Response, next: Function) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
})

const port: number = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript + Node.js + Express!');
})

app.use('/api/v1/marketplaces', marketplaceRouter)
app.use('/api/v1/collections', collectionRouter)
app.use('/api/v1/wallets', walletRouter)

// db.then(() => {
//     app.listen(port, () => {
//         console.log(`Server running at http://localhost:${port}`);
//     })
// })

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})

module.exports = app