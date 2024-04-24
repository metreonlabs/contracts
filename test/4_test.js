const SimpleMsg = artifacts.require('SimpleMsg');
const Metreon = artifacts.require('Metreon');

contract('SimpleMsg', async accounts => {

    // ========= Areon ========= //

    // it('Set Contract Areon', async () => {
    //     const simpleMsg = await SimpleMsg.deployed();

    //     const trx = await simpleMsg.setContract(56, "0x823A58600fA6978d8a10498D3755e2090dbc9255");
    //     const trx1 = await simpleMsg.setContract(137, "0x823A58600fA6978d8a10498D3755e2090dbc9255");

    //     console.log(trx.tx);
    //     console.log(trx1.tx);
    // });

    // ========= Polygon ========= //

    // it('Set Contract Polygon', async () => {
    //     const simpleMsg = await SimpleMsg.deployed();

    //     const trx = await simpleMsg.setContract(463, "0x823A58600fA6978d8a10498D3755e2090dbc9255");

    //     console.log(trx.tx);
    // });

    // ========= Bsc ========= //

    // it('Set Contract Bsc', async () => {
    //     const simpleMsg = await SimpleMsg.deployed();

    //     const trx = await simpleMsg.setContract(463, "0x823A58600fA6978d8a10498D3755e2090dbc9255");

    //     console.log(trx.tx);
    // });

    // ========= Test ========= //

    it('Message Bridge', async () => {
        const simpleMsg = await SimpleMsg.deployed();

        const trx = await simpleMsg.sendMessage(463, "Welcome to metreon! at " + Date.now(), accounts[1], {
            value: "830000000000000"
        });

        console.log(trx.tx);
    });

    // it('Into Message Bridge', async () => {
    //     const metreon = await Metreon.deployed();

    //     const trx = await metreon.postMessage(
    //         '0x43bF0C25B5fCef4391d471fE761a5452289B5D40',
    //         {
    //             messageId: '0x2fe066eece9d87d5c28b6785351eed2234bcce2884733c6a02d5928ed9955f68',
    //             fromChainId: 463,
    //             sender: '0x955c6d623493A5b7987544d67Cb7fFb29FfEa0E7',
    //             payload: '0x0000000000000000000000007ffc9858842a848ea5d614b6f0cee5c4f75db62e00000000000000000000000000000000000000000000000000000000000000600000000000000000000000003188b46a61c2befe7de95f94c0f821c8a201c438000000000000000000000000000000000000000000000000000000000000001357656c636f6d6520746f206d657472656f6e2100000000000000000000000000',
    //             tokens: []
    //         },
    //         '0xBe34a32D1528FE222114eC806a827C34a0740667'
    //     );

    //     console.log(trx.tx);
    // });













































    // ========= Areon Testnet ========= //

    // it('Set Contract Areon Testnet', async () => {
    //     const simpleMsg = await SimpleMsg.deployed();

    //     const trx = await simpleMsg.setContract(97, "0x823A58600fA6978d8a10498D3755e2090dbc9255");
    //     const trx1 = await simpleMsg.setContract(80002, "0x823A58600fA6978d8a10498D3755e2090dbc9255");

    //     console.log(trx.tx);
    //     console.log(trx1.tx);
    // });

    // ========= Amoy ========= //

    // it('Set Contract Amoy', async () => {
    //     const simpleMsg = await SimpleMsg.deployed();

    //     const trx = await simpleMsg.setContract(462, "0x823A58600fA6978d8a10498D3755e2090dbc9255");

    //     console.log(trx.tx);
    // });

    // ========= Bsc Testnet ========= //

    // it('Set Contract Bsc Testnet', async () => {
    //     const simpleMsg = await SimpleMsg.deployed();

    //     const trx = await simpleMsg.setContract(462, "0x823A58600fA6978d8a10498D3755e2090dbc9255");

    //     console.log(trx.tx);
    // });

    // ========= Test ========= //

    // it('Message Bridge', async () => {
    //     const simpleMsg = await SimpleMsg.deployed();

    //     const trx = await simpleMsg.sendMessage(462, "Welcome to metreon!", accounts[1], {
    //         value: "10000000000000000"
    //     });

    //     console.log(trx.tx);
    // });

    // it('Into Message Bridge', async () => {
    //     const metreon = await Metreon.deployed();

    //     const trx = await metreon.postMessage(
    //         '0x43bF0C25B5fCef4391d471fE761a5452289B5D40',
    //         {
    //             messageId: '0x2fe066eece9d87d5c28b6785351eed2234bcce2884733c6a02d5928ed9955f68',
    //             fromChainId: 462,
    //             sender: '0x955c6d623493A5b7987544d67Cb7fFb29FfEa0E7',
    //             payload: '0x0000000000000000000000007ffc9858842a848ea5d614b6f0cee5c4f75db62e00000000000000000000000000000000000000000000000000000000000000600000000000000000000000003188b46a61c2befe7de95f94c0f821c8a201c438000000000000000000000000000000000000000000000000000000000000001357656c636f6d6520746f206d657472656f6e2100000000000000000000000000',
    //             tokens: []
    //         },
    //         '0xBe34a32D1528FE222114eC806a827C34a0740667'
    //     );

    //     console.log(trx.tx);
    // });
});

