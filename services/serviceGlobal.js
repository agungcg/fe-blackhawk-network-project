var axios = require("axios");
var queryString = require('query-string');
var consConfig = require("../configs/constants");

const serviceGloba = {
    getAllSelectMonth: async () => {
        temp = [
            {
                id: 1,
                text: "January"
            },
            {
                id: 2,
                text: "February"
            },
            {
                id: 3,
                text: "March"
            },
            {
                id: 4,
                text: "April"
            },
            {
                id: 5,
                text: "May"
            },
            {
                id: 6,
                text: "June"
            },
            {
                id: 7,
                text: "July",
            },
            {
                id: 8,
                text: "August",
            },
            {
                id: 9,
                text: "September",
            },
            {
                id: 10,
                text: "October",
            },
            {
                id: 11,
                text: "November"
            },
            {
                id: 12,
                text: "December"
            }
        ];
        return temp;
    },
    getAllSelectBrand: async () => {
        temp = [
            {
                id: "Google",
                text: "Google"
            },
            {
                id: "Spotify",
                text: "Spotify"
            },
        ];
        return temp;
    },
    getAllSelectFixtureType: async (Token) => {
        temp = [];

        await axios.get(
            consConfig.urlService + 'fixture-type',
            {   
                headers: Token 
            })
            .then(function(response) {
                temp  = response.data.data.map(obj => {
                    var tempData = {
                        id : obj.id,
                        text : obj.fixture_type
                    }
                    return tempData;
                });
                console.log("success service getAllSelectFixtureType")
            })
            .catch(function (error) {
                console.log("error service getAllSelectFixtureType")
            });
        return temp;
    },
    getAllSelectStore: async (Token) => {
        temp = [];

        await axios.get(
            consConfig.urlService + 'store',
            {   
                headers: Token 
            })
            .then(function(response) {
                temp  = response.data.data.map(obj => {
                    var tempData = {
                        id : obj.store_code,
                        text : obj.store_code
                    }
                    return tempData;
                });
                console.log("success service getAllSelectStore")
            })
            .catch(function (error) {
                console.log("error service getAllSelectStore")
            });
        return temp;
    },
    getAllSelectDC: async (Token) => {
        temp = [];

        await axios.get(
            consConfig.urlService + 'dc',
            {   
                headers: Token 
            })
            .then(function(response) {
                temp  = response.data.data.map(obj => {
                    var tempData = {
                        id : obj.id,
                        text : obj.DC_name
                    }
                    return tempData;
                });
                console.log("success service getAllSelectDC")
            })
            .catch(function (error) {
                console.log("error service getAllSelectDC")
            });
        return temp;
    },
    getAllSelectMD: async (Token) => {
        temp = [];

        await axios.get(
            consConfig.urlService + 'user',
            {   
                headers: Token 
            })
            .then(function(response) {
                temp  = response.data.data.map(obj => {
                    var tempData = {
                        id : obj.id,
                        text : obj.nik
                    }
                    return tempData;
                });
                console.log("success service getAllSelectMD")
            })
            .catch(function (error) {
                console.log("error service getAllSelectMD")
            });
        return temp;
    },
    getAllSelectRetailer: async (Token) => {
        temp = [];

        await axios.get(
            consConfig.urlService + 'retailer',
            {   
                headers: Token 
            })
            .then(function(response) {
                temp  = response.data.data.map(obj => {
                    var tempData = {
                        id : obj.id,
                        text : obj.retailer_name
                    }
                    return tempData;
                });
                console.log("success service getAllSelectRetailer")
            })
            .catch(function (error) {
                console.log("error service getAllSelectRetailer")
            });
        return temp;
    },
    
    
};
module.exports = serviceGloba;