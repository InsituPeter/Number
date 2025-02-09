const axios = require("axios");
const { isPrime, isPerfect, isArmstrong, digitSum } = require("./numberUtils");

// In-memory cache for faster responses (consider Redis for production)
const cache = new Map();

const getNumberProperties = async (req, res) => {
    const number = req.query.number;
    const num = parseInt(number);
    
    if (!number || isNaN(number) || !Number.isInteger(Number(number))) {
        return res.status(400).json({ number, error: "true" })
      }
    // Check cache for previous results
    if (cache.has(num)) {
        return res.status(200).json(cache.get(num));
    }

    const properties = [num % 2 === 0 ? "even" : "odd"];
    if (isArmstrong(num)) properties.push("armstrong");

    try {
        const funFactResponse = await axios.get(`http://numbersapi.com/${num}?json`);
        const funFact = funFactResponse.data.text;

        const result = {
            number: num,
            is_prime: isPrime(num),
            is_perfect: isPerfect(num),
            properties,
            digit_sum: digitSum(num),
            fun_fact: funFact,
        };

        // Store result in cache
        cache.set(num, result);

        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ error: "Failed to fetch fun fact." });
    }
};

module.exports = { getNumberProperties };