import dotenv from "dotenv";
dotenv.config();

const key = process.env.api_key;
const INFURA_URL = ``;

const fetchCall = async (req, reply) => {

    try {

        const { fromAddress, toAddress, gas, gasPrice, value, dataETH } = req.body;

        const errors = [
        !fromAddress && "From Address is required",
        !toAddress && "To Address is required",
        !gas && "Gas is required",
        !gasPrice && "Gas Price is required",
        !dataETH && "Data is required",
        !value && "value required"
        ].filter(Boolean);
        
        if (errors.length) {
            
            return res.status(400).send({ errors });
        
        }

        

        const response = await fetch(INFURA_URL, {
            
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                jsonrpc: "2.0",
                method: "eth_call",
                params: [{ "from": fromAddress, "to": toAddress, "gas": gas, "gasPrice": gasPrice, "value": value, "data": dataETH }, "latest"],
                id: 1
            })
        });

        const data = await response.json();

        return reply.send({info: data})
    } catch (error) {

        reply.status(500).json({error: "fail to get blobbase fee"})
    }
}

export {fetchCall}