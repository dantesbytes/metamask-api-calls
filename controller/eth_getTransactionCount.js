import TransactionCount from "../model/eth_getTransactionCountModel.js";
import dotenv from "dotenv";
dotenv.config




const key = process.env.api_key;
const INFURA_URL = `https://mainnet.infura.io/v3/1d539028110d4ea8a3e671996cd9e5e7`;

const fetchTransactionCount = async (req, reply) => {
    try {
        const { address } = req.body;

        if (!address) {
            return res.status(400).json({ error: 'Ethereum address is required' });
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

export   { fetchTransactionCount };
