require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture strategy rival outside proof hunt kangaroo army giggle'; 
let testAccounts = [
"0xc911471d11160272e62b352496f42bbbdefb61e376991035f156dab72337e5ac",
"0x93e8f7f0f0b4e15d8aadffd568d62640e16d89635025cee7650e685553b820c0",
"0xb4fb223170189ae1f8a28dd95205e344de3e434312a631d1941ffa3ee6dfa773",
"0x488ab2b9fa70c502b9a7352e5a7ad2b62c98eff30f22327ec6e815a650d02a70",
"0x4cca12dfcae4ea63f76aed56e408d8057953f6dcbe738aad0abc9e9a190a3795",
"0xe86fe9db0f82e42a3fe09d1d7a65d9d6aa508c1beba42ec01c009aec6f135bba",
"0x4d147ea485cee1f6b6160d00c2947e7c946f8b941adffc0c63e3ad72fafaef15",
"0x04573fa7c4dc56208629a6e118654b3b429039f5fb93d364efe0be45300bed42",
"0x39d2902ec2f72fea49b841c08ff84b2e79e4124159e4dcc8c2bd2d9995382cba",
"0x1908bcdaee375adcd904ce9ea987bf8a38565fb2390d37d0f8415b3b8b6e5c78"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

