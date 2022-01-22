require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney climb force ten fire note soap under harvest basket foster gift'; 
let testAccounts = [
"0x9f7826c421e53ca8088ebe7351590998db3bdbb0b63dda46f8ffdfcee8dd2bf0",
"0xfd3ec49a0ea3a542f73700feab5fe3c2760b48e9c32469d7bc1cb30cc238d1eb",
"0xef4a08feb937b296a0a448f49fa85d27cdf9b2e13992991747fc304ee9ad796f",
"0x7062af051ddbaa19eb77269aaabd889f03b3a88852faf91d9e736301e2def3f4",
"0xabe3578c9f91ee27cf6f8f3335863f1b42f9de2dca90e2da0a334364cf6ccbf4",
"0x723530d27da6e8b2d9e8389ccacbfbd54ffc76abf0b081482cec6bc8440d522b",
"0x07114559bd9c5d281265521ac11f883b9ae04582e6fcb93b470adad0c97544d7",
"0x44576b07372175e23dc01b6702aea12afd87022d09368950fc7c76c651c76383",
"0x3b9c4ee72e6ea92e56887f6f35b40efde4deeb599637f254ed7fd4ad9f7f240b",
"0x2cd125d00134bfa90c8bcae4b04da47b16bb542c359fe372c002dde0603dd237"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

