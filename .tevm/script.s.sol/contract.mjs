import { createScript } from '@tevm/contract'
const _HelloWorld = {"name":"HelloWorld","humanReadableAbi":["function sayHello() pure returns (string)"],"bytecode":"0x608060405234801561000f575f80fd5b506103168061001d5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063ef5fb05b1461002d575b5f80fd5b61003561004b565b604051610042919061014a565b60405180910390f35b606073__$84546581207ae7c12319413120f02be084$__63cfae32176040518163ffffffff1660e01b81526004015f60405180830381865af4158015610093573d5f803e3d5ffd5b505050506040513d5f823e3d601f19601f820116820180604052508101906100bb9190610299565b905090565b5f81519050919050565b5f82825260208201905092915050565b5f5b838110156100f75780820151818401526020810190506100dc565b5f8484015250505050565b5f601f19601f8301169050919050565b5f61011c826100c0565b61012681856100ca565b93506101368185602086016100da565b61013f81610102565b840191505092915050565b5f6020820190508181035f8301526101628184610112565b905092915050565b5f604051905090565b5f80fd5b5f80fd5b5f80fd5b5f80fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6101b982610102565b810181811067ffffffffffffffff821117156101d8576101d7610183565b5b80604052505050565b5f6101ea61016a565b90506101f682826101b0565b919050565b5f67ffffffffffffffff82111561021557610214610183565b5b61021e82610102565b9050602081019050919050565b5f61023d610238846101fb565b6101e1565b9050828152602081018484840111156102595761025861017f565b5b6102648482856100da565b509392505050565b5f82601f8301126102805761027f61017b565b5b815161029084826020860161022b565b91505092915050565b5f602082840312156102ae576102ad610173565b5b5f82015167ffffffffffffffff8111156102cb576102ca610177565b5b6102d78482850161026c565b9150509291505056fea2646970667358221220c06688881f5c32e6feb0e65b816b5081e2191b41959a372dc7e3c34601516db964736f6c63430008170033","deployedBytecode":"0x608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063ef5fb05b1461002d575b5f80fd5b61003561004b565b604051610042919061014a565b60405180910390f35b606073__$84546581207ae7c12319413120f02be084$__63cfae32176040518163ffffffff1660e01b81526004015f60405180830381865af4158015610093573d5f803e3d5ffd5b505050506040513d5f823e3d601f19601f820116820180604052508101906100bb9190610299565b905090565b5f81519050919050565b5f82825260208201905092915050565b5f5b838110156100f75780820151818401526020810190506100dc565b5f8484015250505050565b5f601f19601f8301169050919050565b5f61011c826100c0565b61012681856100ca565b93506101368185602086016100da565b61013f81610102565b840191505092915050565b5f6020820190508181035f8301526101628184610112565b905092915050565b5f604051905090565b5f80fd5b5f80fd5b5f80fd5b5f80fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6101b982610102565b810181811067ffffffffffffffff821117156101d8576101d7610183565b5b80604052505050565b5f6101ea61016a565b90506101f682826101b0565b919050565b5f67ffffffffffffffff82111561021557610214610183565b5b61021e82610102565b9050602081019050919050565b5f61023d610238846101fb565b6101e1565b9050828152602081018484840111156102595761025861017f565b5b6102648482856100da565b509392505050565b5f82601f8301126102805761027f61017b565b5b815161029084826020860161022b565b91505092915050565b5f602082840312156102ae576102ad610173565b5b5f82015167ffffffffffffffff8111156102cb576102ca610177565b5b6102d78482850161026c565b9150509291505056fea2646970667358221220c06688881f5c32e6feb0e65b816b5081e2191b41959a372dc7e3c34601516db964736f6c63430008170033"}
export const HelloWorld = createScript(_HelloWorld)