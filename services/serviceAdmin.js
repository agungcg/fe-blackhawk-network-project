var axios = require("axios");
var queryString = require('query-string');
var consConfig = require("../configs/constants");

const serviceAdmin = {
    findAllUser: async (Token) => {
        temp = [];
        await axios.get(
            consConfig.urlService + 'user',
            {   
                headers: Token 
            })
            .then(function(response) {
                temp = response.data.data
                console.log("success service findAllUser")
                
            })
            .catch(function (error) {
                console.log("error service findAllUser")
            });
        return temp;
    },
    deleteUser: async (Token, id) => {
        var temp = {};
        await axios.delete(
            consConfig.urlService + 'user/' + id,
            {   
                headers: Token 
            })
            .then(function(response) {
                temp = response.data
                console.log("success service deleteUser")
            })
            .catch(function(error) {
                console.log("error service deleteUser")
            });
        return temp;  
    },
    editUser: async (Token, id, password) => {
        var temp = {};
        await axios.put(
            consConfig.urlService + 'user/' + id,
            {
                password: password,
            },
            {
                headers: Token
            })
            .then(function(response) {
                temp = response.data
                console.log("success service editUser")
            })
            .catch(function(error) {
                console.log("error service editUser")
            });
        return temp;  
    },
    signup: async (Token, nik, name, email, password, role_id) => {
        temp = {};
        await axios.post(
            consConfig.urlService + 'user/signup',
            queryString.stringify({
                nik: nik,
                name: name,
                email: email,
                password: password,
                role_id: role_id
            }),{
                headers: { 
                    "Content-Type": "application/x-www-form-urlencoded",
                    Token
                }
            })
            .then(function(response) {
                temp = response.data
                console.log("success service signup")
            })
            .catch(function (error) {
                console.log("error service signIn")
            });
        return temp; 
    },
    getDashboard: async (Token, month, brand, retailer, fixture, store, dc, md) => {
        temp = {};
        await axios.get(
            consConfig.urlService + 'dashboard',
            {
                params: {
                    month: month,
                    brand: brand,
                    retailer: retailer,
                    fixture: fixture,
                    store: store,
                    dc: dc,
                    md: md
                },
                headers: Token
            })
            .then(function(response) {
                temp = response.data.diagram
                console.log("success service getDashboard")
                
            })
            .catch(function (error) {
                console.log("error service getDashboard")
            });
        return temp;
    },
    getGallery: async (Token, month, brand, retailer, fixture, store, dc, md) => {
        temp = {};
        await axios.get(
            consConfig.urlService + 'galery',
            {
                params: {
                    month: month,
                    brand: brand,
                    retailer: retailer,
                    fixture: fixture,
                    store: store,
                    dc: dc,
                    md: md
                },
                headers: Token
            })
            .then(function(response) {
                temp = response.data.data
                console.log("success service getGallery")
                
            })
            .catch(function (error) {
                console.log("error service getGallery")
            });
        return temp;
    },
};

module.exports = serviceAdmin;