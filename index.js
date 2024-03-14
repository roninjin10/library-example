import { createMemoryClient } from '@tevm/memory-client';
import { HelloWorldLibrary } from './library.s.sol'

const client = createMemoryClient({});

const { args, abi, deployedBytecode, functionName } = HelloWorldLibrary.read.greet()

const res = await client.script({
  abi,
  deployedBytecode,
  args,
  functionName
})

console.log(res.data) // "Hello world!"
console.log(res.rawData) // 0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000d48656c6c6f2c20576f726c642100000000000000000000000000000000000000
console.log(res.executionGasUsed) // 690n
console.log(res.createdAddresses) // Set {}
