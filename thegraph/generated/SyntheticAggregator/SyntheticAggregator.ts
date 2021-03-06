// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt,
  CallResult
} from "@graphprotocol/graph-ts";

export class Create extends EthereumEvent {
  get params(): Create__Params {
    return new Create__Params(this);
  }
}

export class Create__Params {
  _event: Create;

  constructor(event: Create) {
    this._event = event;
  }

  get derivative(): CreateDerivativeStruct {
    return this._event.parameters[0].value.toTuple() as CreateDerivativeStruct;
  }

  get derivativeHash(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class CreateDerivativeStruct extends EthereumTuple {
  get margin(): BigInt {
    return this[0].toBigInt();
  }

  get endTime(): BigInt {
    return this[1].toBigInt();
  }

  get params(): Array<BigInt> {
    return this[2].toBigIntArray();
  }

  get oracleId(): Address {
    return this[3].toAddress();
  }

  get token(): Address {
    return this[4].toAddress();
  }

  get syntheticId(): Address {
    return this[5].toAddress();
  }
}

export class SyntheticAggregator__getDerivativeHashInput_derivativeStruct extends EthereumTuple {
  get margin(): BigInt {
    return this[0].toBigInt();
  }

  get endTime(): BigInt {
    return this[1].toBigInt();
  }

  get params(): Array<BigInt> {
    return this[2].toBigIntArray();
  }

  get oracleId(): Address {
    return this[3].toAddress();
  }

  get token(): Address {
    return this[4].toAddress();
  }

  get syntheticId(): Address {
    return this[5].toAddress();
  }
}

export class SyntheticAggregator__getAuthorCommissionInput_derivativeStruct extends EthereumTuple {
  get margin(): BigInt {
    return this[0].toBigInt();
  }

  get endTime(): BigInt {
    return this[1].toBigInt();
  }

  get params(): Array<BigInt> {
    return this[2].toBigIntArray();
  }

  get oracleId(): Address {
    return this[3].toAddress();
  }

  get token(): Address {
    return this[4].toAddress();
  }

  get syntheticId(): Address {
    return this[5].toAddress();
  }
}

export class SyntheticAggregator__getAuthorAddressInput_derivativeStruct extends EthereumTuple {
  get margin(): BigInt {
    return this[0].toBigInt();
  }

  get endTime(): BigInt {
    return this[1].toBigInt();
  }

  get params(): Array<BigInt> {
    return this[2].toBigIntArray();
  }

  get oracleId(): Address {
    return this[3].toAddress();
  }

  get token(): Address {
    return this[4].toAddress();
  }

  get syntheticId(): Address {
    return this[5].toAddress();
  }
}

export class SyntheticAggregator__getMarginResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromUnsignedBigInt(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class SyntheticAggregator__getMarginInput_derivativeStruct extends EthereumTuple {
  get margin(): BigInt {
    return this[0].toBigInt();
  }

  get endTime(): BigInt {
    return this[1].toBigInt();
  }

  get params(): Array<BigInt> {
    return this[2].toBigIntArray();
  }

  get oracleId(): Address {
    return this[3].toAddress();
  }

  get token(): Address {
    return this[4].toAddress();
  }

  get syntheticId(): Address {
    return this[5].toAddress();
  }
}

export class SyntheticAggregator__isPoolInput_derivativeStruct extends EthereumTuple {
  get margin(): BigInt {
    return this[0].toBigInt();
  }

  get endTime(): BigInt {
    return this[1].toBigInt();
  }

  get params(): Array<BigInt> {
    return this[2].toBigIntArray();
  }

  get oracleId(): Address {
    return this[3].toAddress();
  }

  get token(): Address {
    return this[4].toAddress();
  }

  get syntheticId(): Address {
    return this[5].toAddress();
  }
}

export class SyntheticAggregator extends SmartContract {
  static bind(address: Address): SyntheticAggregator {
    return new SyntheticAggregator("SyntheticAggregator", address);
  }

  COMMISSION_BASE(): BigInt {
    let result = super.call("COMMISSION_BASE", []);

    return result[0].toBigInt();
  }

  try_COMMISSION_BASE(): CallResult<BigInt> {
    let result = super.tryCall("COMMISSION_BASE", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  OPIUM_COMMISSION_BASE(): BigInt {
    let result = super.call("OPIUM_COMMISSION_BASE", []);

    return result[0].toBigInt();
  }

  try_OPIUM_COMMISSION_BASE(): CallResult<BigInt> {
    let result = super.tryCall("OPIUM_COMMISSION_BASE", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  OPIUM_COMMISSION_PART(): BigInt {
    let result = super.call("OPIUM_COMMISSION_PART", []);

    return result[0].toBigInt();
  }

  try_OPIUM_COMMISSION_PART(): CallResult<BigInt> {
    let result = super.tryCall("OPIUM_COMMISSION_PART", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  authorAddressByHash(param0: Bytes): Address {
    let result = super.call("authorAddressByHash", [
      EthereumValue.fromFixedBytes(param0)
    ]);

    return result[0].toAddress();
  }

  try_authorAddressByHash(param0: Bytes): CallResult<Address> {
    let result = super.tryCall("authorAddressByHash", [
      EthereumValue.fromFixedBytes(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  buyerMarginByHash(param0: Bytes): BigInt {
    let result = super.call("buyerMarginByHash", [
      EthereumValue.fromFixedBytes(param0)
    ]);

    return result[0].toBigInt();
  }

  try_buyerMarginByHash(param0: Bytes): CallResult<BigInt> {
    let result = super.tryCall("buyerMarginByHash", [
      EthereumValue.fromFixedBytes(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  commissionByHash(param0: Bytes): BigInt {
    let result = super.call("commissionByHash", [
      EthereumValue.fromFixedBytes(param0)
    ]);

    return result[0].toBigInt();
  }

  try_commissionByHash(param0: Bytes): CallResult<BigInt> {
    let result = super.tryCall("commissionByHash", [
      EthereumValue.fromFixedBytes(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  getDerivativeHash(
    _derivative: SyntheticAggregator__getDerivativeHashInput_derivativeStruct
  ): Bytes {
    let result = super.call("getDerivativeHash", [
      EthereumValue.fromTuple(_derivative)
    ]);

    return result[0].toBytes();
  }

  try_getDerivativeHash(
    _derivative: SyntheticAggregator__getDerivativeHashInput_derivativeStruct
  ): CallResult<Bytes> {
    let result = super.tryCall("getDerivativeHash", [
      EthereumValue.fromTuple(_derivative)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
  }

  sellerMarginByHash(param0: Bytes): BigInt {
    let result = super.call("sellerMarginByHash", [
      EthereumValue.fromFixedBytes(param0)
    ]);

    return result[0].toBigInt();
  }

  try_sellerMarginByHash(param0: Bytes): CallResult<BigInt> {
    let result = super.tryCall("sellerMarginByHash", [
      EthereumValue.fromFixedBytes(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  typeByHash(param0: Bytes): i32 {
    let result = super.call("typeByHash", [
      EthereumValue.fromFixedBytes(param0)
    ]);

    return result[0].toI32();
  }

  try_typeByHash(param0: Bytes): CallResult<i32> {
    let result = super.tryCall("typeByHash", [
      EthereumValue.fromFixedBytes(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toI32());
  }

  getAuthorCommission(
    _derivativeHash: Bytes,
    _derivative: SyntheticAggregator__getAuthorCommissionInput_derivativeStruct
  ): BigInt {
    let result = super.call("getAuthorCommission", [
      EthereumValue.fromFixedBytes(_derivativeHash),
      EthereumValue.fromTuple(_derivative)
    ]);

    return result[0].toBigInt();
  }

  try_getAuthorCommission(
    _derivativeHash: Bytes,
    _derivative: SyntheticAggregator__getAuthorCommissionInput_derivativeStruct
  ): CallResult<BigInt> {
    let result = super.tryCall("getAuthorCommission", [
      EthereumValue.fromFixedBytes(_derivativeHash),
      EthereumValue.fromTuple(_derivative)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  getAuthorAddress(
    _derivativeHash: Bytes,
    _derivative: SyntheticAggregator__getAuthorAddressInput_derivativeStruct
  ): Address {
    let result = super.call("getAuthorAddress", [
      EthereumValue.fromFixedBytes(_derivativeHash),
      EthereumValue.fromTuple(_derivative)
    ]);

    return result[0].toAddress();
  }

  try_getAuthorAddress(
    _derivativeHash: Bytes,
    _derivative: SyntheticAggregator__getAuthorAddressInput_derivativeStruct
  ): CallResult<Address> {
    let result = super.tryCall("getAuthorAddress", [
      EthereumValue.fromFixedBytes(_derivativeHash),
      EthereumValue.fromTuple(_derivative)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  getMargin(
    _derivativeHash: Bytes,
    _derivative: SyntheticAggregator__getMarginInput_derivativeStruct
  ): SyntheticAggregator__getMarginResult {
    let result = super.call("getMargin", [
      EthereumValue.fromFixedBytes(_derivativeHash),
      EthereumValue.fromTuple(_derivative)
    ]);

    return new SyntheticAggregator__getMarginResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_getMargin(
    _derivativeHash: Bytes,
    _derivative: SyntheticAggregator__getMarginInput_derivativeStruct
  ): CallResult<SyntheticAggregator__getMarginResult> {
    let result = super.tryCall("getMargin", [
      EthereumValue.fromFixedBytes(_derivativeHash),
      EthereumValue.fromTuple(_derivative)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new SyntheticAggregator__getMarginResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  isPool(
    _derivativeHash: Bytes,
    _derivative: SyntheticAggregator__isPoolInput_derivativeStruct
  ): boolean {
    let result = super.call("isPool", [
      EthereumValue.fromFixedBytes(_derivativeHash),
      EthereumValue.fromTuple(_derivative)
    ]);

    return result[0].toBoolean();
  }

  try_isPool(
    _derivativeHash: Bytes,
    _derivative: SyntheticAggregator__isPoolInput_derivativeStruct
  ): CallResult<boolean> {
    let result = super.tryCall("isPool", [
      EthereumValue.fromFixedBytes(_derivativeHash),
      EthereumValue.fromTuple(_derivative)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }
}

export class GetAuthorCommissionCall extends EthereumCall {
  get inputs(): GetAuthorCommissionCall__Inputs {
    return new GetAuthorCommissionCall__Inputs(this);
  }

  get outputs(): GetAuthorCommissionCall__Outputs {
    return new GetAuthorCommissionCall__Outputs(this);
  }
}

export class GetAuthorCommissionCall__Inputs {
  _call: GetAuthorCommissionCall;

  constructor(call: GetAuthorCommissionCall) {
    this._call = call;
  }

  get _derivativeHash(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _derivative(): GetAuthorCommissionCall_derivativeStruct {
    return this._call.inputValues[1].value.toTuple() as GetAuthorCommissionCall_derivativeStruct;
  }
}

export class GetAuthorCommissionCall__Outputs {
  _call: GetAuthorCommissionCall;

  constructor(call: GetAuthorCommissionCall) {
    this._call = call;
  }

  get commission(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class GetAuthorCommissionCall_derivativeStruct extends EthereumTuple {
  get margin(): BigInt {
    return this[0].toBigInt();
  }

  get endTime(): BigInt {
    return this[1].toBigInt();
  }

  get params(): Array<BigInt> {
    return this[2].toBigIntArray();
  }

  get oracleId(): Address {
    return this[3].toAddress();
  }

  get token(): Address {
    return this[4].toAddress();
  }

  get syntheticId(): Address {
    return this[5].toAddress();
  }
}

export class GetAuthorAddressCall extends EthereumCall {
  get inputs(): GetAuthorAddressCall__Inputs {
    return new GetAuthorAddressCall__Inputs(this);
  }

  get outputs(): GetAuthorAddressCall__Outputs {
    return new GetAuthorAddressCall__Outputs(this);
  }
}

export class GetAuthorAddressCall__Inputs {
  _call: GetAuthorAddressCall;

  constructor(call: GetAuthorAddressCall) {
    this._call = call;
  }

  get _derivativeHash(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _derivative(): GetAuthorAddressCall_derivativeStruct {
    return this._call.inputValues[1].value.toTuple() as GetAuthorAddressCall_derivativeStruct;
  }
}

export class GetAuthorAddressCall__Outputs {
  _call: GetAuthorAddressCall;

  constructor(call: GetAuthorAddressCall) {
    this._call = call;
  }

  get authorAddress(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class GetAuthorAddressCall_derivativeStruct extends EthereumTuple {
  get margin(): BigInt {
    return this[0].toBigInt();
  }

  get endTime(): BigInt {
    return this[1].toBigInt();
  }

  get params(): Array<BigInt> {
    return this[2].toBigIntArray();
  }

  get oracleId(): Address {
    return this[3].toAddress();
  }

  get token(): Address {
    return this[4].toAddress();
  }

  get syntheticId(): Address {
    return this[5].toAddress();
  }
}

export class GetMarginCall extends EthereumCall {
  get inputs(): GetMarginCall__Inputs {
    return new GetMarginCall__Inputs(this);
  }

  get outputs(): GetMarginCall__Outputs {
    return new GetMarginCall__Outputs(this);
  }
}

export class GetMarginCall__Inputs {
  _call: GetMarginCall;

  constructor(call: GetMarginCall) {
    this._call = call;
  }

  get _derivativeHash(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _derivative(): GetMarginCall_derivativeStruct {
    return this._call.inputValues[1].value.toTuple() as GetMarginCall_derivativeStruct;
  }
}

export class GetMarginCall__Outputs {
  _call: GetMarginCall;

  constructor(call: GetMarginCall) {
    this._call = call;
  }

  get buyerMargin(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }

  get sellerMargin(): BigInt {
    return this._call.outputValues[1].value.toBigInt();
  }
}

export class GetMarginCall_derivativeStruct extends EthereumTuple {
  get margin(): BigInt {
    return this[0].toBigInt();
  }

  get endTime(): BigInt {
    return this[1].toBigInt();
  }

  get params(): Array<BigInt> {
    return this[2].toBigIntArray();
  }

  get oracleId(): Address {
    return this[3].toAddress();
  }

  get token(): Address {
    return this[4].toAddress();
  }

  get syntheticId(): Address {
    return this[5].toAddress();
  }
}

export class IsPoolCall extends EthereumCall {
  get inputs(): IsPoolCall__Inputs {
    return new IsPoolCall__Inputs(this);
  }

  get outputs(): IsPoolCall__Outputs {
    return new IsPoolCall__Outputs(this);
  }
}

export class IsPoolCall__Inputs {
  _call: IsPoolCall;

  constructor(call: IsPoolCall) {
    this._call = call;
  }

  get _derivativeHash(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _derivative(): IsPoolCall_derivativeStruct {
    return this._call.inputValues[1].value.toTuple() as IsPoolCall_derivativeStruct;
  }
}

export class IsPoolCall__Outputs {
  _call: IsPoolCall;

  constructor(call: IsPoolCall) {
    this._call = call;
  }

  get result(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class IsPoolCall_derivativeStruct extends EthereumTuple {
  get margin(): BigInt {
    return this[0].toBigInt();
  }

  get endTime(): BigInt {
    return this[1].toBigInt();
  }

  get params(): Array<BigInt> {
    return this[2].toBigIntArray();
  }

  get oracleId(): Address {
    return this[3].toAddress();
  }

  get token(): Address {
    return this[4].toAddress();
  }

  get syntheticId(): Address {
    return this[5].toAddress();
  }
}
