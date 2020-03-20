var axios = require("axios");
var queryString = require('query-string');
var consConfig = require("../configs/constants");

const serviceLogin = {
    logIn: async (email, pass) => {
        temp = {};
        await axios.post(
            consConfig.urlService + 'user/signin',
            queryString.stringify({
                email: email,
                password: pass
            }),{
                headers: { 
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
            .then(function(response) {
                temp = {
                    status: response.status,
                    data: response.data
                }
                console.log("success service signIn")
            })
            .catch(function (error) {
                temp = {
                    status: error.response.status,
                }
                console.log("error service signIn")
            });
        return temp;
    }
};


module.exports = serviceLogin;
