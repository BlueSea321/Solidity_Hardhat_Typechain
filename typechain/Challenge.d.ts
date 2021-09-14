/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface ChallengeInterface extends ethers.utils.Interface {
  functions: {
    "addressToUint256(address)": FunctionFragment;
    "getUniswapV2PairAddress(address,address)": FunctionFragment;
    "incrementX(address)": FunctionFragment;
    "incrementY(address)": FunctionFragment;
    "incrementZ(address)": FunctionFragment;
    "isContract(address)": FunctionFragment;
    "uint256ToAddress(uint256)": FunctionFragment;
    "x()": FunctionFragment;
    "y()": FunctionFragment;
    "z()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addressToUint256",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getUniswapV2PairAddress",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "incrementX", values: [string]): string;
  encodeFunctionData(functionFragment: "incrementY", values: [string]): string;
  encodeFunctionData(functionFragment: "incrementZ", values: [string]): string;
  encodeFunctionData(functionFragment: "isContract", values: [string]): string;
  encodeFunctionData(
    functionFragment: "uint256ToAddress",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "x", values?: undefined): string;
  encodeFunctionData(functionFragment: "y", values?: undefined): string;
  encodeFunctionData(functionFragment: "z", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "addressToUint256",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUniswapV2PairAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "incrementX", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "incrementY", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "incrementZ", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isContract", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "uint256ToAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "x", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "y", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "z", data: BytesLike): Result;

  events: {};
}

export class Challenge extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ChallengeInterface;

  functions: {
    addressToUint256(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getUniswapV2PairAddress(
      token0: string,
      token1: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    incrementX(
      inc: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    incrementY(
      inc: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    incrementZ(
      inc: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isContract(account: string, overrides?: CallOverrides): Promise<[boolean]>;

    uint256ToAddress(
      num: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    x(overrides?: CallOverrides): Promise<[BigNumber]>;

    y(overrides?: CallOverrides): Promise<[BigNumber]>;

    z(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  addressToUint256(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getUniswapV2PairAddress(
    token0: string,
    token1: string,
    overrides?: CallOverrides
  ): Promise<string>;

  incrementX(
    inc: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  incrementY(
    inc: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  incrementZ(
    inc: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isContract(account: string, overrides?: CallOverrides): Promise<boolean>;

  uint256ToAddress(
    num: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  x(overrides?: CallOverrides): Promise<BigNumber>;

  y(overrides?: CallOverrides): Promise<BigNumber>;

  z(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    addressToUint256(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUniswapV2PairAddress(
      token0: string,
      token1: string,
      overrides?: CallOverrides
    ): Promise<string>;

    incrementX(inc: string, overrides?: CallOverrides): Promise<void>;

    incrementY(inc: string, overrides?: CallOverrides): Promise<void>;

    incrementZ(inc: string, overrides?: CallOverrides): Promise<void>;

    isContract(account: string, overrides?: CallOverrides): Promise<boolean>;

    uint256ToAddress(
      num: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    x(overrides?: CallOverrides): Promise<BigNumber>;

    y(overrides?: CallOverrides): Promise<BigNumber>;

    z(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    addressToUint256(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUniswapV2PairAddress(
      token0: string,
      token1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    incrementX(
      inc: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    incrementY(
      inc: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    incrementZ(
      inc: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isContract(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    uint256ToAddress(
      num: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    x(overrides?: CallOverrides): Promise<BigNumber>;

    y(overrides?: CallOverrides): Promise<BigNumber>;

    z(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addressToUint256(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUniswapV2PairAddress(
      token0: string,
      token1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    incrementX(
      inc: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    incrementY(
      inc: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    incrementZ(
      inc: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isContract(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    uint256ToAddress(
      num: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    x(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    y(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    z(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}