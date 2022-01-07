const axios = require("axios");

const axiosResult = async () => {
    const result = await axios.get("http://127.0.0.1:8080");

    console.log(result.data);
};

axiosResult();
