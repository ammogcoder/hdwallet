import { HDWallet } from '@shapeshiftoss/hdwallet-core'



export type Creater = () => Promise<HDWallet>
export type Getter = () => HDWallet
export type Suite = (get: Getter) => void

/**
 * Each HDWallet testsuite implementation is expected to export this common
 * interface.
 */
export interface WalletSuite {
  /**
   * Fetch a short description of the HDWallet implementation being tested.
   */
  name: () => string

  /**
   * Construct an instance of the HDWallet to test against.
   */
  createWallet: Creater

  /**
   * Tests specific to the particular HDWallet imeplemtation.
   */
  selfTest: Suite
}
