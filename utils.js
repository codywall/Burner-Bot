import { BigNumber } from "ethers";

export const GWEI = BigNumber.from(10).pow(9);

export function gasPriceToGwei(gasPrice) {
  return gasPrice.mul(100).div(GWEI).toNumber() / 100;
}
