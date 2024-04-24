// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import {Data} from "../libraries/Data.sol";
import {IMetreon} from "../interfaces/IMetreon.sol";
import {MetreonReceiver} from "../MetreonReceiver.sol";

/// @title SimpleMsg - Sending cross chain messages
/// @author devarogundade
contract SimpleMsg is MetreonReceiver {
    IMetreon private _metreon;

    // Keeps track of other network destination contracts
    mapping(uint256 => address) public _contracts;

    // Events
    event NewMessage(address sender, address receiver, string text);

    // Testnet contracts - https://docs.metreon.xyz/developers/testnet

    constructor(
        address config_,
        address metreon_
    ) MetreonReceiver(config_, metreon_) {
        // Initialize metreon contract
        _metreon = IMetreon(getMetreon());
    }

    function setContract(uint256 chainId, address contractId) external {
        _contracts[chainId] = contractId;
    }

    function sendMessage(
        uint256 toChainId,
        string memory text,
        address receiver
    ) external payable returns (bytes32) {
        // Build a cross chain message
        Data.OutgoingMessage memory message = Data.OutgoingMessage({
            toChainId: toChainId,
            receiver: _contracts[toChainId],
            payload: abi.encode(_msgSender(), text, receiver),
            tokens: new Data.Token[](0)
        });

        // Calculate a cross chain message fee
        uint256 fee = _metreon.estimateFee(toChainId);

        require(msg.value >= fee, "Insuficient fee supplied");

        // Send a cross chain message
        return _metreon.sendMessage{value: fee}(message, address(0));
    }

    // Receive a cross chain message
    function _metreonReceive(
        Data.IncomingMessage memory message
    ) internal override {
        (address sender, string memory text, address receiver) = abi.decode(
            message.payload,
            (address, string, address)
        );

        emit NewMessage(sender, receiver, text);
    }
}
