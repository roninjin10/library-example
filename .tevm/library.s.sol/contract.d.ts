import { Script } from '@tevm/contract'
const _abiHelloWorldLibrary = ["function greet() pure returns (string)"] as const;
const _nameHelloWorldLibrary = "HelloWorldLibrary" as const;
/**
 * HelloWorldLibrary Script
 */
export const HelloWorldLibrary: Script<typeof _nameHelloWorldLibrary, typeof _abiHelloWorldLibrary>;