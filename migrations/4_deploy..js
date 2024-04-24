const Metreon = artifacts.require('Metreon');
const MetreonConfig = artifacts.require('MetreonConfig');
const SimpleMsg = artifacts.require('SimpleMsg');

module.exports = async function (deployer, network, accounts) {
    return;
    await deployer.deploy(SimpleMsg, MetreonConfig.address, Metreon.address);
};