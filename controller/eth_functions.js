"use strict";
import dotenv from "dotenv";
dotenv.config();

const key = process.env.api_key;
const INFURA_URL = `https://mainnet.infura.io/v3/dda46289fff9447e80867fa2679ba2e5`;

const eth_getBalance = async (requestAnimationFrame, reply) => {

    try {

        const { addres, block } = requestAnimationFrame.body;

        const errors = [
            !addres && "address required",
            !block && " specicify either latest, earliest, pending, safe, or finalized"
        ].filter(Boolean);


        if (errors.length) {

            return reply.status(400).send({ errors });
        }

        const response = await fetch()


    }
}