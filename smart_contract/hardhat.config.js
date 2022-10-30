// https://eth-goerli.g.alchemy.com/v2/eE5YxvSuuDZwBUjO9mPhXgACZYFIv3IK

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity : '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/eE5YxvSuuDZwBUjO9mPhXgACZYFIv3IK',
      accounts: ['8054fa72640f0a51b28bcbb2fd56354b5f299eaf7df7bdfd64f1dc28b004ea78']
    }
  }
}