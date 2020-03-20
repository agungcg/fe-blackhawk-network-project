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
        console.log('getAllSelectMonth', temp)
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
                console.log()
                temp  = response.data.data.map(obj => {
                    var tempData = {
                        id : obj.id,
                        text : obj.fixture_type
                    }
                    return tempData;
                });
                console.log('getAllSelectFixtureType',temp)
                console.log("success service getAllFixtureType")
            })
            .catch(function (error) {
                console.log("error service getAllFixtureType")
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
                        text : obj.store_name
                    }
                    return tempData;
                });
                console.log("success service getAllStore")
            })
            .catch(function (error) {
                console.log("error service getAllStore")
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
                console.log("success service getAllDC")
            })
            .catch(function (error) {
                console.log("error service getAllDC")
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
                console.log("success service getAllMD")
            })
            .catch(function (error) {
                console.log("error service getAllMD")
            });
        return temp;
    },
    
};
module.exports = serviceGloba;