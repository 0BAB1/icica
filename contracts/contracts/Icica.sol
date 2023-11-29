// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract Icica is ERC721URIStorage {
    uint256 private _tokenId;

    constructor() ERC721("Icica", "ICI") {}

    function mintNFT(address _to, string memory tokenURI) public returns (uint256) {
        _tokenId ++;
        uint256 newItemId = _tokenId;
        _safeMint(_to, newItemId);
        _setTokenURI(newItemId, tokenURI);
        return newItemId;
    }
}
