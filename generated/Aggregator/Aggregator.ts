// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class BurnAggregation extends ethereum.Event {
  get params(): BurnAggregation__Params {
    return new BurnAggregation__Params(this);
  }
}

export class BurnAggregation__Params {
  _event: BurnAggregation;

  constructor(event: BurnAggregation) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amountInstantBurn(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amountBurn(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get received(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class CanonicalPoolChanged extends ethereum.Event {
  get params(): CanonicalPoolChanged__Params {
    return new CanonicalPoolChanged__Params(this);
  }
}

export class CanonicalPoolChanged__Params {
  _event: CanonicalPoolChanged;

  constructor(event: CanonicalPoolChanged) {
    this._event = event;
  }

  get pool(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class DefaultAdminDelayChangeCanceled extends ethereum.Event {
  get params(): DefaultAdminDelayChangeCanceled__Params {
    return new DefaultAdminDelayChangeCanceled__Params(this);
  }
}

export class DefaultAdminDelayChangeCanceled__Params {
  _event: DefaultAdminDelayChangeCanceled;

  constructor(event: DefaultAdminDelayChangeCanceled) {
    this._event = event;
  }
}

export class DefaultAdminDelayChangeScheduled extends ethereum.Event {
  get params(): DefaultAdminDelayChangeScheduled__Params {
    return new DefaultAdminDelayChangeScheduled__Params(this);
  }
}

export class DefaultAdminDelayChangeScheduled__Params {
  _event: DefaultAdminDelayChangeScheduled;

  constructor(event: DefaultAdminDelayChangeScheduled) {
    this._event = event;
  }

  get newDelay(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get effectSchedule(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class DefaultAdminTransferCanceled extends ethereum.Event {
  get params(): DefaultAdminTransferCanceled__Params {
    return new DefaultAdminTransferCanceled__Params(this);
  }
}

export class DefaultAdminTransferCanceled__Params {
  _event: DefaultAdminTransferCanceled;

  constructor(event: DefaultAdminTransferCanceled) {
    this._event = event;
  }
}

export class DefaultAdminTransferScheduled extends ethereum.Event {
  get params(): DefaultAdminTransferScheduled__Params {
    return new DefaultAdminTransferScheduled__Params(this);
  }
}

export class DefaultAdminTransferScheduled__Params {
  _event: DefaultAdminTransferScheduled;

  constructor(event: DefaultAdminTransferScheduled) {
    this._event = event;
  }

  get newAdmin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get acceptSchedule(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class RoleAdminChanged extends ethereum.Event {
  get params(): RoleAdminChanged__Params {
    return new RoleAdminChanged__Params(this);
  }
}

export class RoleAdminChanged__Params {
  _event: RoleAdminChanged;

  constructor(event: RoleAdminChanged) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get previousAdminRole(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get newAdminRole(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class RoleGranted extends ethereum.Event {
  get params(): RoleGranted__Params {
    return new RoleGranted__Params(this);
  }
}

export class RoleGranted__Params {
  _event: RoleGranted;

  constructor(event: RoleGranted) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RoleRevoked extends ethereum.Event {
  get params(): RoleRevoked__Params {
    return new RoleRevoked__Params(this);
  }
}

export class RoleRevoked__Params {
  _event: RoleRevoked;

  constructor(event: RoleRevoked) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class StakeAggregation extends ethereum.Event {
  get params(): StakeAggregation__Params {
    return new StakeAggregation__Params(this);
  }
}

export class StakeAggregation__Params {
  _event: StakeAggregation;

  constructor(event: StakeAggregation) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get swapReceived(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get minted(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Aggregator__pendingDefaultAdminResult {
  value0: Address;
  value1: BigInt;

  constructor(value0: Address, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getNewAdmin(): Address {
    return this.value0;
  }

  getSchedule(): BigInt {
    return this.value1;
  }
}

export class Aggregator__pendingDefaultAdminDelayResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getNewDelay(): BigInt {
    return this.value0;
  }

  getSchedule(): BigInt {
    return this.value1;
  }
}

export class Aggregator extends ethereum.SmartContract {
  static bind(address: Address): Aggregator {
    return new Aggregator("Aggregator", address);
  }

  BURNER_ROLE(): Bytes {
    let result = super.call("BURNER_ROLE", "BURNER_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_BURNER_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("BURNER_ROLE", "BURNER_ROLE():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  DEFAULT_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DEFAULT_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  FEE_RECIPIENT_ROLE(): Bytes {
    let result = super.call(
      "FEE_RECIPIENT_ROLE",
      "FEE_RECIPIENT_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_FEE_RECIPIENT_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "FEE_RECIPIENT_ROLE",
      "FEE_RECIPIENT_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  GOVERNOR_ROLE(): Bytes {
    let result = super.call("GOVERNOR_ROLE", "GOVERNOR_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_GOVERNOR_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "GOVERNOR_ROLE",
      "GOVERNOR_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  MANAGER_ROLE(): Bytes {
    let result = super.call("MANAGER_ROLE", "MANAGER_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_MANAGER_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("MANAGER_ROLE", "MANAGER_ROLE():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  MINTER_ROLE(): Bytes {
    let result = super.call("MINTER_ROLE", "MINTER_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_MINTER_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("MINTER_ROLE", "MINTER_ROLE():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  PAUSER_ROLE(): Bytes {
    let result = super.call("PAUSER_ROLE", "PAUSER_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_PAUSER_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("PAUSER_ROLE", "PAUSER_ROLE():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  REBASER_ROLE(): Bytes {
    let result = super.call("REBASER_ROLE", "REBASER_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_REBASER_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("REBASER_ROLE", "REBASER_ROLE():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  burner(): Address {
    let result = super.call("burner", "burner():(address)", []);

    return result[0].toAddress();
  }

  try_burner(): ethereum.CallResult<Address> {
    let result = super.tryCall("burner", "burner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  calculatePurchasable(
    targetPrice: BigInt,
    targetError: BigInt,
    attempts: BigInt,
    pool_: Address,
    tokenIn: BigInt,
    tokenOut: BigInt
  ): BigInt {
    let result = super.call(
      "calculatePurchasable",
      "calculatePurchasable(uint256,uint256,uint256,address,int128,int128):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(targetPrice),
        ethereum.Value.fromUnsignedBigInt(targetError),
        ethereum.Value.fromUnsignedBigInt(attempts),
        ethereum.Value.fromAddress(pool_),
        ethereum.Value.fromSignedBigInt(tokenIn),
        ethereum.Value.fromSignedBigInt(tokenOut)
      ]
    );

    return result[0].toBigInt();
  }

  try_calculatePurchasable(
    targetPrice: BigInt,
    targetError: BigInt,
    attempts: BigInt,
    pool_: Address,
    tokenIn: BigInt,
    tokenOut: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "calculatePurchasable",
      "calculatePurchasable(uint256,uint256,uint256,address,int128,int128):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(targetPrice),
        ethereum.Value.fromUnsignedBigInt(targetError),
        ethereum.Value.fromUnsignedBigInt(attempts),
        ethereum.Value.fromAddress(pool_),
        ethereum.Value.fromSignedBigInt(tokenIn),
        ethereum.Value.fromSignedBigInt(tokenOut)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  canonicalPool(): Address {
    let result = super.call("canonicalPool", "canonicalPool():(address)", []);

    return result[0].toAddress();
  }

  try_canonicalPool(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "canonicalPool",
      "canonicalPool():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  defaultAdmin(): Address {
    let result = super.call("defaultAdmin", "defaultAdmin():(address)", []);

    return result[0].toAddress();
  }

  try_defaultAdmin(): ethereum.CallResult<Address> {
    let result = super.tryCall("defaultAdmin", "defaultAdmin():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  defaultAdminDelay(): BigInt {
    let result = super.call(
      "defaultAdminDelay",
      "defaultAdminDelay():(uint48)",
      []
    );

    return result[0].toBigInt();
  }

  try_defaultAdminDelay(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "defaultAdminDelay",
      "defaultAdminDelay():(uint48)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  defaultAdminDelayIncreaseWait(): BigInt {
    let result = super.call(
      "defaultAdminDelayIncreaseWait",
      "defaultAdminDelayIncreaseWait():(uint48)",
      []
    );

    return result[0].toBigInt();
  }

  try_defaultAdminDelayIncreaseWait(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "defaultAdminDelayIncreaseWait",
      "defaultAdminDelayIncreaseWait():(uint48)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  flip(): Address {
    let result = super.call("flip", "flip():(address)", []);

    return result[0].toAddress();
  }

  try_flip(): ethereum.CallResult<Address> {
    let result = super.tryCall("flip", "flip():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getRoleAdmin(role: Bytes): Bytes {
    let result = super.call("getRoleAdmin", "getRoleAdmin(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(role)
    ]);

    return result[0].toBytes();
  }

  try_getRoleAdmin(role: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRoleAdmin",
      "getRoleAdmin(bytes32):(bytes32)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  hasRole(role: Bytes, account: Address): boolean {
    let result = super.call("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_hasRole(role: Bytes, account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  marginalCost(
    pool_: Address,
    tokenIn: BigInt,
    tokenOut: BigInt,
    amount: BigInt
  ): BigInt {
    let result = super.call(
      "marginalCost",
      "marginalCost(address,int128,int128,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(pool_),
        ethereum.Value.fromSignedBigInt(tokenIn),
        ethereum.Value.fromSignedBigInt(tokenOut),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );

    return result[0].toBigInt();
  }

  try_marginalCost(
    pool_: Address,
    tokenIn: BigInt,
    tokenOut: BigInt,
    amount: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "marginalCost",
      "marginalCost(address,int128,int128,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(pool_),
        ethereum.Value.fromSignedBigInt(tokenIn),
        ethereum.Value.fromSignedBigInt(tokenOut),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  minter(): Address {
    let result = super.call("minter", "minter():(address)", []);

    return result[0].toAddress();
  }

  try_minter(): ethereum.CallResult<Address> {
    let result = super.tryCall("minter", "minter():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pendingDefaultAdmin(): Aggregator__pendingDefaultAdminResult {
    let result = super.call(
      "pendingDefaultAdmin",
      "pendingDefaultAdmin():(address,uint48)",
      []
    );

    return new Aggregator__pendingDefaultAdminResult(
      result[0].toAddress(),
      result[1].toBigInt()
    );
  }

  try_pendingDefaultAdmin(): ethereum.CallResult<
    Aggregator__pendingDefaultAdminResult
  > {
    let result = super.tryCall(
      "pendingDefaultAdmin",
      "pendingDefaultAdmin():(address,uint48)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Aggregator__pendingDefaultAdminResult(
        value[0].toAddress(),
        value[1].toBigInt()
      )
    );
  }

  pendingDefaultAdminDelay(): Aggregator__pendingDefaultAdminDelayResult {
    let result = super.call(
      "pendingDefaultAdminDelay",
      "pendingDefaultAdminDelay():(uint48,uint48)",
      []
    );

    return new Aggregator__pendingDefaultAdminDelayResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_pendingDefaultAdminDelay(): ethereum.CallResult<
    Aggregator__pendingDefaultAdminDelayResult
  > {
    let result = super.tryCall(
      "pendingDefaultAdminDelay",
      "pendingDefaultAdminDelay():(uint48,uint48)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Aggregator__pendingDefaultAdminDelayResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  stakeAggregate(
    amountTotal: BigInt,
    amountSwap: BigInt,
    minimumAmountSwapOut: BigInt
  ): BigInt {
    let result = super.call(
      "stakeAggregate",
      "stakeAggregate(uint256,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(amountTotal),
        ethereum.Value.fromUnsignedBigInt(amountSwap),
        ethereum.Value.fromUnsignedBigInt(minimumAmountSwapOut)
      ]
    );

    return result[0].toBigInt();
  }

  try_stakeAggregate(
    amountTotal: BigInt,
    amountSwap: BigInt,
    minimumAmountSwapOut: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "stakeAggregate",
      "stakeAggregate(uint256,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(amountTotal),
        ethereum.Value.fromUnsignedBigInt(amountSwap),
        ethereum.Value.fromUnsignedBigInt(minimumAmountSwapOut)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  stflip(): Address {
    let result = super.call("stflip", "stflip():(address)", []);

    return result[0].toAddress();
  }

  try_stflip(): ethereum.CallResult<Address> {
    let result = super.tryCall("stflip", "stflip():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  unstakeAggregate(
    amountInstantBurn: BigInt,
    amountBurn: BigInt,
    amountSwap: BigInt,
    minimumAmountSwapOut: BigInt
  ): BigInt {
    let result = super.call(
      "unstakeAggregate",
      "unstakeAggregate(uint256,uint256,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(amountInstantBurn),
        ethereum.Value.fromUnsignedBigInt(amountBurn),
        ethereum.Value.fromUnsignedBigInt(amountSwap),
        ethereum.Value.fromUnsignedBigInt(minimumAmountSwapOut)
      ]
    );

    return result[0].toBigInt();
  }

  try_unstakeAggregate(
    amountInstantBurn: BigInt,
    amountBurn: BigInt,
    amountSwap: BigInt,
    minimumAmountSwapOut: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "unstakeAggregate",
      "unstakeAggregate(uint256,uint256,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(amountInstantBurn),
        ethereum.Value.fromUnsignedBigInt(amountBurn),
        ethereum.Value.fromUnsignedBigInt(amountSwap),
        ethereum.Value.fromUnsignedBigInt(minimumAmountSwapOut)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AcceptDefaultAdminTransferCall extends ethereum.Call {
  get inputs(): AcceptDefaultAdminTransferCall__Inputs {
    return new AcceptDefaultAdminTransferCall__Inputs(this);
  }

  get outputs(): AcceptDefaultAdminTransferCall__Outputs {
    return new AcceptDefaultAdminTransferCall__Outputs(this);
  }
}

export class AcceptDefaultAdminTransferCall__Inputs {
  _call: AcceptDefaultAdminTransferCall;

  constructor(call: AcceptDefaultAdminTransferCall) {
    this._call = call;
  }
}

export class AcceptDefaultAdminTransferCall__Outputs {
  _call: AcceptDefaultAdminTransferCall;

  constructor(call: AcceptDefaultAdminTransferCall) {
    this._call = call;
  }
}

export class BeginDefaultAdminTransferCall extends ethereum.Call {
  get inputs(): BeginDefaultAdminTransferCall__Inputs {
    return new BeginDefaultAdminTransferCall__Inputs(this);
  }

  get outputs(): BeginDefaultAdminTransferCall__Outputs {
    return new BeginDefaultAdminTransferCall__Outputs(this);
  }
}

export class BeginDefaultAdminTransferCall__Inputs {
  _call: BeginDefaultAdminTransferCall;

  constructor(call: BeginDefaultAdminTransferCall) {
    this._call = call;
  }

  get newAdmin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class BeginDefaultAdminTransferCall__Outputs {
  _call: BeginDefaultAdminTransferCall;

  constructor(call: BeginDefaultAdminTransferCall) {
    this._call = call;
  }
}

export class CancelDefaultAdminTransferCall extends ethereum.Call {
  get inputs(): CancelDefaultAdminTransferCall__Inputs {
    return new CancelDefaultAdminTransferCall__Inputs(this);
  }

  get outputs(): CancelDefaultAdminTransferCall__Outputs {
    return new CancelDefaultAdminTransferCall__Outputs(this);
  }
}

export class CancelDefaultAdminTransferCall__Inputs {
  _call: CancelDefaultAdminTransferCall;

  constructor(call: CancelDefaultAdminTransferCall) {
    this._call = call;
  }
}

export class CancelDefaultAdminTransferCall__Outputs {
  _call: CancelDefaultAdminTransferCall;

  constructor(call: CancelDefaultAdminTransferCall) {
    this._call = call;
  }
}

export class ChangeDefaultAdminDelayCall extends ethereum.Call {
  get inputs(): ChangeDefaultAdminDelayCall__Inputs {
    return new ChangeDefaultAdminDelayCall__Inputs(this);
  }

  get outputs(): ChangeDefaultAdminDelayCall__Outputs {
    return new ChangeDefaultAdminDelayCall__Outputs(this);
  }
}

export class ChangeDefaultAdminDelayCall__Inputs {
  _call: ChangeDefaultAdminDelayCall;

  constructor(call: ChangeDefaultAdminDelayCall) {
    this._call = call;
  }

  get newDelay(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ChangeDefaultAdminDelayCall__Outputs {
  _call: ChangeDefaultAdminDelayCall;

  constructor(call: ChangeDefaultAdminDelayCall) {
    this._call = call;
  }
}

export class GrantRoleCall extends ethereum.Call {
  get inputs(): GrantRoleCall__Inputs {
    return new GrantRoleCall__Inputs(this);
  }

  get outputs(): GrantRoleCall__Outputs {
    return new GrantRoleCall__Outputs(this);
  }
}

export class GrantRoleCall__Inputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class GrantRoleCall__Outputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get minter_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get burner_(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get liquidityPool_(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get stflip_(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get flip_(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get gov_(): Address {
    return this._call.inputValues[5].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class RenounceRoleCall extends ethereum.Call {
  get inputs(): RenounceRoleCall__Inputs {
    return new RenounceRoleCall__Inputs(this);
  }

  get outputs(): RenounceRoleCall__Outputs {
    return new RenounceRoleCall__Outputs(this);
  }
}

export class RenounceRoleCall__Inputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RenounceRoleCall__Outputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }
}

export class RevokeRoleCall extends ethereum.Call {
  get inputs(): RevokeRoleCall__Inputs {
    return new RevokeRoleCall__Inputs(this);
  }

  get outputs(): RevokeRoleCall__Outputs {
    return new RevokeRoleCall__Outputs(this);
  }
}

export class RevokeRoleCall__Inputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RevokeRoleCall__Outputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }
}

export class RollbackDefaultAdminDelayCall extends ethereum.Call {
  get inputs(): RollbackDefaultAdminDelayCall__Inputs {
    return new RollbackDefaultAdminDelayCall__Inputs(this);
  }

  get outputs(): RollbackDefaultAdminDelayCall__Outputs {
    return new RollbackDefaultAdminDelayCall__Outputs(this);
  }
}

export class RollbackDefaultAdminDelayCall__Inputs {
  _call: RollbackDefaultAdminDelayCall;

  constructor(call: RollbackDefaultAdminDelayCall) {
    this._call = call;
  }
}

export class RollbackDefaultAdminDelayCall__Outputs {
  _call: RollbackDefaultAdminDelayCall;

  constructor(call: RollbackDefaultAdminDelayCall) {
    this._call = call;
  }
}

export class SetFlipCall extends ethereum.Call {
  get inputs(): SetFlipCall__Inputs {
    return new SetFlipCall__Inputs(this);
  }

  get outputs(): SetFlipCall__Outputs {
    return new SetFlipCall__Outputs(this);
  }
}

export class SetFlipCall__Inputs {
  _call: SetFlipCall;

  constructor(call: SetFlipCall) {
    this._call = call;
  }

  get flip_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetFlipCall__Outputs {
  _call: SetFlipCall;

  constructor(call: SetFlipCall) {
    this._call = call;
  }
}

export class SetPoolCall extends ethereum.Call {
  get inputs(): SetPoolCall__Inputs {
    return new SetPoolCall__Inputs(this);
  }

  get outputs(): SetPoolCall__Outputs {
    return new SetPoolCall__Outputs(this);
  }
}

export class SetPoolCall__Inputs {
  _call: SetPoolCall;

  constructor(call: SetPoolCall) {
    this._call = call;
  }

  get pool_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetPoolCall__Outputs {
  _call: SetPoolCall;

  constructor(call: SetPoolCall) {
    this._call = call;
  }
}

export class SetStflipCall extends ethereum.Call {
  get inputs(): SetStflipCall__Inputs {
    return new SetStflipCall__Inputs(this);
  }

  get outputs(): SetStflipCall__Outputs {
    return new SetStflipCall__Outputs(this);
  }
}

export class SetStflipCall__Inputs {
  _call: SetStflipCall;

  constructor(call: SetStflipCall) {
    this._call = call;
  }

  get stflip_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetStflipCall__Outputs {
  _call: SetStflipCall;

  constructor(call: SetStflipCall) {
    this._call = call;
  }
}

export class StakeAggregateCall extends ethereum.Call {
  get inputs(): StakeAggregateCall__Inputs {
    return new StakeAggregateCall__Inputs(this);
  }

  get outputs(): StakeAggregateCall__Outputs {
    return new StakeAggregateCall__Outputs(this);
  }
}

export class StakeAggregateCall__Inputs {
  _call: StakeAggregateCall;

  constructor(call: StakeAggregateCall) {
    this._call = call;
  }

  get amountTotal(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get amountSwap(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get minimumAmountSwapOut(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class StakeAggregateCall__Outputs {
  _call: StakeAggregateCall;

  constructor(call: StakeAggregateCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class UnstakeAggregateCall extends ethereum.Call {
  get inputs(): UnstakeAggregateCall__Inputs {
    return new UnstakeAggregateCall__Inputs(this);
  }

  get outputs(): UnstakeAggregateCall__Outputs {
    return new UnstakeAggregateCall__Outputs(this);
  }
}

export class UnstakeAggregateCall__Inputs {
  _call: UnstakeAggregateCall;

  constructor(call: UnstakeAggregateCall) {
    this._call = call;
  }

  get amountInstantBurn(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get amountBurn(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get amountSwap(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get minimumAmountSwapOut(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class UnstakeAggregateCall__Outputs {
  _call: UnstakeAggregateCall;

  constructor(call: UnstakeAggregateCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}
