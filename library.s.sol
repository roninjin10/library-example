// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

library HelloWorldLibrary {
    function greet() external pure returns (string memory) {
        return "Hello, World!";
    }
}
