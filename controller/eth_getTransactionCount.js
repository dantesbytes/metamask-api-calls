import TransactionCount from "../model/eth_getTransactionCountModel.js";
import dotenv from "dotenv";
dotenv.config();




const key = process.env.api_key;
const INFURA_URL = `https://mainnet.infura.io/v3/dda46289fff9447e80867fa2679ba2e5`;

const fetchTransactionCount = async (req, reply) => {
    try {
        const { address } = req.body;

        if (!address) {
            return reply.status(400).json({ error: 'Ethereum address is required' });
        }
        
        const response = await fetch(INFURA_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                jsonrpc: "2.0",
                method: "eth_getTransactionCount",
                params: [address, "finalized"],
                id: 1


            })
        });
        
        const data = await response.json();
        console.log(data);

        const hexValue = data.result;
        const decimalValue = parseInt(hexValue, 16);

       
        return reply.send({ transactionCount: decimalValue });

    } catch (error) {
        console.error('Error fetching transaction count:', error);
        res.status(500).json({ error: 'Failed to fetch transaction count' });
    }
};

const blobBaseFee = async (req, reply) => {

    try {

        const response = await fetch(INFURA_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                jsonrpc: "2.0",
                method: "eth_blobBaseFee",
                params: [],
                id: 1
            })

       

        });

        const data = await response.json();
        console.log(data);

        return reply.send({ blobBaseFee: data })
        
    } catch (error) {

        console.error("error fetching blob base fee");
        res.status(500).json({error: "fail to get blobbase fee"})
    }
    
}


export   { fetchTransactionCount, blobBaseFee};
