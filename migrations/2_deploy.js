const Metreon = artifacts.require('Metreon');
const MetreonConfig = artifacts.require('MetreonConfig');
const TokenPool = artifacts.require('TokenPool');

module.exports = async function (deployer, network, accounts) {
    return;
    await deployer.deploy(Metreon, MetreonConfig.address);
    await deployer.deploy(TokenPool, MetreonConfig.address, Metreon.address);
};