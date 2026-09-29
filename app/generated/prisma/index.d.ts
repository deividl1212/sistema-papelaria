
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model StockAdjustment
 * 
 */
export type StockAdjustment = $Result.DefaultSelection<Prisma.$StockAdjustmentPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Supplier
 * 
 */
export type Supplier = $Result.DefaultSelection<Prisma.$SupplierPayload>
/**
 * Model CashRegister
 * 
 */
export type CashRegister = $Result.DefaultSelection<Prisma.$CashRegisterPayload>
/**
 * Model CashWithdrawal
 * 
 */
export type CashWithdrawal = $Result.DefaultSelection<Prisma.$CashWithdrawalPayload>
/**
 * Model Sale
 * 
 */
export type Sale = $Result.DefaultSelection<Prisma.$SalePayload>
/**
 * Model SaleItem
 * 
 */
export type SaleItem = $Result.DefaultSelection<Prisma.$SaleItemPayload>
/**
 * Model Payable
 * 
 */
export type Payable = $Result.DefaultSelection<Prisma.$PayablePayload>
/**
 * Model CrediarioAccount
 * 
 */
export type CrediarioAccount = $Result.DefaultSelection<Prisma.$CrediarioAccountPayload>
/**
 * Model CrediarioPayment
 * 
 */
export type CrediarioPayment = $Result.DefaultSelection<Prisma.$CrediarioPaymentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stockAdjustment`: Exposes CRUD operations for the **StockAdjustment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockAdjustments
    * const stockAdjustments = await prisma.stockAdjustment.findMany()
    * ```
    */
  get stockAdjustment(): Prisma.StockAdjustmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supplier`: Exposes CRUD operations for the **Supplier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.supplier.findMany()
    * ```
    */
  get supplier(): Prisma.SupplierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cashRegister`: Exposes CRUD operations for the **CashRegister** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CashRegisters
    * const cashRegisters = await prisma.cashRegister.findMany()
    * ```
    */
  get cashRegister(): Prisma.CashRegisterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cashWithdrawal`: Exposes CRUD operations for the **CashWithdrawal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CashWithdrawals
    * const cashWithdrawals = await prisma.cashWithdrawal.findMany()
    * ```
    */
  get cashWithdrawal(): Prisma.CashWithdrawalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sale`: Exposes CRUD operations for the **Sale** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sales
    * const sales = await prisma.sale.findMany()
    * ```
    */
  get sale(): Prisma.SaleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.saleItem`: Exposes CRUD operations for the **SaleItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SaleItems
    * const saleItems = await prisma.saleItem.findMany()
    * ```
    */
  get saleItem(): Prisma.SaleItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payable`: Exposes CRUD operations for the **Payable** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payables
    * const payables = await prisma.payable.findMany()
    * ```
    */
  get payable(): Prisma.PayableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.crediarioAccount`: Exposes CRUD operations for the **CrediarioAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CrediarioAccounts
    * const crediarioAccounts = await prisma.crediarioAccount.findMany()
    * ```
    */
  get crediarioAccount(): Prisma.CrediarioAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.crediarioPayment`: Exposes CRUD operations for the **CrediarioPayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CrediarioPayments
    * const crediarioPayments = await prisma.crediarioPayment.findMany()
    * ```
    */
  get crediarioPayment(): Prisma.CrediarioPaymentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Product: 'Product',
    StockAdjustment: 'StockAdjustment',
    Customer: 'Customer',
    Supplier: 'Supplier',
    CashRegister: 'CashRegister',
    CashWithdrawal: 'CashWithdrawal',
    Sale: 'Sale',
    SaleItem: 'SaleItem',
    Payable: 'Payable',
    CrediarioAccount: 'CrediarioAccount',
    CrediarioPayment: 'CrediarioPayment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "product" | "stockAdjustment" | "customer" | "supplier" | "cashRegister" | "cashWithdrawal" | "sale" | "saleItem" | "payable" | "crediarioAccount" | "crediarioPayment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      StockAdjustment: {
        payload: Prisma.$StockAdjustmentPayload<ExtArgs>
        fields: Prisma.StockAdjustmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockAdjustmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockAdjustmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockAdjustmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockAdjustmentPayload>
          }
          findFirst: {
            args: Prisma.StockAdjustmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockAdjustmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockAdjustmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockAdjustmentPayload>
          }
          findMany: {
            args: Prisma.StockAdjustmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockAdjustmentPayload>[]
          }
          create: {
            args: Prisma.StockAdjustmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockAdjustmentPayload>
          }
          createMany: {
            args: Prisma.StockAdjustmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StockAdjustmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockAdjustmentPayload>[]
          }
          delete: {
            args: Prisma.StockAdjustmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockAdjustmentPayload>
          }
          update: {
            args: Prisma.StockAdjustmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockAdjustmentPayload>
          }
          deleteMany: {
            args: Prisma.StockAdjustmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockAdjustmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StockAdjustmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockAdjustmentPayload>[]
          }
          upsert: {
            args: Prisma.StockAdjustmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockAdjustmentPayload>
          }
          aggregate: {
            args: Prisma.StockAdjustmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStockAdjustment>
          }
          groupBy: {
            args: Prisma.StockAdjustmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockAdjustmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockAdjustmentCountArgs<ExtArgs>
            result: $Utils.Optional<StockAdjustmentCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Supplier: {
        payload: Prisma.$SupplierPayload<ExtArgs>
        fields: Prisma.SupplierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findFirst: {
            args: Prisma.SupplierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findMany: {
            args: Prisma.SupplierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          create: {
            args: Prisma.SupplierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          createMany: {
            args: Prisma.SupplierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupplierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          delete: {
            args: Prisma.SupplierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          update: {
            args: Prisma.SupplierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          deleteMany: {
            args: Prisma.SupplierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SupplierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          upsert: {
            args: Prisma.SupplierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          aggregate: {
            args: Prisma.SupplierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplier>
          }
          groupBy: {
            args: Prisma.SupplierGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierCountAggregateOutputType> | number
          }
        }
      }
      CashRegister: {
        payload: Prisma.$CashRegisterPayload<ExtArgs>
        fields: Prisma.CashRegisterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CashRegisterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashRegisterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CashRegisterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashRegisterPayload>
          }
          findFirst: {
            args: Prisma.CashRegisterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashRegisterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CashRegisterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashRegisterPayload>
          }
          findMany: {
            args: Prisma.CashRegisterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashRegisterPayload>[]
          }
          create: {
            args: Prisma.CashRegisterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashRegisterPayload>
          }
          createMany: {
            args: Prisma.CashRegisterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CashRegisterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashRegisterPayload>[]
          }
          delete: {
            args: Prisma.CashRegisterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashRegisterPayload>
          }
          update: {
            args: Prisma.CashRegisterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashRegisterPayload>
          }
          deleteMany: {
            args: Prisma.CashRegisterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CashRegisterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CashRegisterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashRegisterPayload>[]
          }
          upsert: {
            args: Prisma.CashRegisterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashRegisterPayload>
          }
          aggregate: {
            args: Prisma.CashRegisterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCashRegister>
          }
          groupBy: {
            args: Prisma.CashRegisterGroupByArgs<ExtArgs>
            result: $Utils.Optional<CashRegisterGroupByOutputType>[]
          }
          count: {
            args: Prisma.CashRegisterCountArgs<ExtArgs>
            result: $Utils.Optional<CashRegisterCountAggregateOutputType> | number
          }
        }
      }
      CashWithdrawal: {
        payload: Prisma.$CashWithdrawalPayload<ExtArgs>
        fields: Prisma.CashWithdrawalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CashWithdrawalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashWithdrawalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CashWithdrawalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashWithdrawalPayload>
          }
          findFirst: {
            args: Prisma.CashWithdrawalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashWithdrawalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CashWithdrawalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashWithdrawalPayload>
          }
          findMany: {
            args: Prisma.CashWithdrawalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashWithdrawalPayload>[]
          }
          create: {
            args: Prisma.CashWithdrawalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashWithdrawalPayload>
          }
          createMany: {
            args: Prisma.CashWithdrawalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CashWithdrawalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashWithdrawalPayload>[]
          }
          delete: {
            args: Prisma.CashWithdrawalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashWithdrawalPayload>
          }
          update: {
            args: Prisma.CashWithdrawalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashWithdrawalPayload>
          }
          deleteMany: {
            args: Prisma.CashWithdrawalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CashWithdrawalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CashWithdrawalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashWithdrawalPayload>[]
          }
          upsert: {
            args: Prisma.CashWithdrawalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashWithdrawalPayload>
          }
          aggregate: {
            args: Prisma.CashWithdrawalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCashWithdrawal>
          }
          groupBy: {
            args: Prisma.CashWithdrawalGroupByArgs<ExtArgs>
            result: $Utils.Optional<CashWithdrawalGroupByOutputType>[]
          }
          count: {
            args: Prisma.CashWithdrawalCountArgs<ExtArgs>
            result: $Utils.Optional<CashWithdrawalCountAggregateOutputType> | number
          }
        }
      }
      Sale: {
        payload: Prisma.$SalePayload<ExtArgs>
        fields: Prisma.SaleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          findFirst: {
            args: Prisma.SaleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          findMany: {
            args: Prisma.SaleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          create: {
            args: Prisma.SaleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          createMany: {
            args: Prisma.SaleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SaleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          delete: {
            args: Prisma.SaleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          update: {
            args: Prisma.SaleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          deleteMany: {
            args: Prisma.SaleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SaleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          upsert: {
            args: Prisma.SaleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          aggregate: {
            args: Prisma.SaleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSale>
          }
          groupBy: {
            args: Prisma.SaleGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaleGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaleCountArgs<ExtArgs>
            result: $Utils.Optional<SaleCountAggregateOutputType> | number
          }
        }
      }
      SaleItem: {
        payload: Prisma.$SaleItemPayload<ExtArgs>
        fields: Prisma.SaleItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaleItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaleItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          findFirst: {
            args: Prisma.SaleItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaleItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          findMany: {
            args: Prisma.SaleItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>[]
          }
          create: {
            args: Prisma.SaleItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          createMany: {
            args: Prisma.SaleItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SaleItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>[]
          }
          delete: {
            args: Prisma.SaleItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          update: {
            args: Prisma.SaleItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          deleteMany: {
            args: Prisma.SaleItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaleItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SaleItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>[]
          }
          upsert: {
            args: Prisma.SaleItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          aggregate: {
            args: Prisma.SaleItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSaleItem>
          }
          groupBy: {
            args: Prisma.SaleItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaleItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaleItemCountArgs<ExtArgs>
            result: $Utils.Optional<SaleItemCountAggregateOutputType> | number
          }
        }
      }
      Payable: {
        payload: Prisma.$PayablePayload<ExtArgs>
        fields: Prisma.PayableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayablePayload>
          }
          findFirst: {
            args: Prisma.PayableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayablePayload>
          }
          findMany: {
            args: Prisma.PayableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayablePayload>[]
          }
          create: {
            args: Prisma.PayableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayablePayload>
          }
          createMany: {
            args: Prisma.PayableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PayableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayablePayload>[]
          }
          delete: {
            args: Prisma.PayableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayablePayload>
          }
          update: {
            args: Prisma.PayableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayablePayload>
          }
          deleteMany: {
            args: Prisma.PayableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PayableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayablePayload>[]
          }
          upsert: {
            args: Prisma.PayableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayablePayload>
          }
          aggregate: {
            args: Prisma.PayableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayable>
          }
          groupBy: {
            args: Prisma.PayableGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayableGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayableCountArgs<ExtArgs>
            result: $Utils.Optional<PayableCountAggregateOutputType> | number
          }
        }
      }
      CrediarioAccount: {
        payload: Prisma.$CrediarioAccountPayload<ExtArgs>
        fields: Prisma.CrediarioAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CrediarioAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrediarioAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CrediarioAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrediarioAccountPayload>
          }
          findFirst: {
            args: Prisma.CrediarioAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrediarioAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CrediarioAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrediarioAccountPayload>
          }
          findMany: {
            args: Prisma.CrediarioAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrediarioAccountPayload>[]
          }
          create: {
            args: Prisma.CrediarioAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrediarioAccountPayload>
          }
          createMany: {
            args: Prisma.CrediarioAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CrediarioAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrediarioAccountPayload>[]
          }
          delete: {
            args: Prisma.CrediarioAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrediarioAccountPayload>
          }
          update: {
            args: Prisma.CrediarioAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrediarioAccountPayload>
          }
          deleteMany: {
            args: Prisma.CrediarioAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CrediarioAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CrediarioAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrediarioAccountPayload>[]
          }
          upsert: {
            args: Prisma.CrediarioAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrediarioAccountPayload>
          }
          aggregate: {
            args: Prisma.CrediarioAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCrediarioAccount>
          }
          groupBy: {
            args: Prisma.CrediarioAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<CrediarioAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.CrediarioAccountCountArgs<ExtArgs>
            result: $Utils.Optional<CrediarioAccountCountAggregateOutputType> | number
          }
        }
      }
      CrediarioPayment: {
        payload: Prisma.$CrediarioPaymentPayload<ExtArgs>
        fields: Prisma.CrediarioPaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CrediarioPaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrediarioPaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CrediarioPaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrediarioPaymentPayload>
          }
          findFirst: {
            args: Prisma.CrediarioPaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrediarioPaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CrediarioPaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrediarioPaymentPayload>
          }
          findMany: {
            args: Prisma.CrediarioPaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrediarioPaymentPayload>[]
          }
          create: {
            args: Prisma.CrediarioPaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrediarioPaymentPayload>
          }
          createMany: {
            args: Prisma.CrediarioPaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CrediarioPaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrediarioPaymentPayload>[]
          }
          delete: {
            args: Prisma.CrediarioPaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrediarioPaymentPayload>
          }
          update: {
            args: Prisma.CrediarioPaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrediarioPaymentPayload>
          }
          deleteMany: {
            args: Prisma.CrediarioPaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CrediarioPaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CrediarioPaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrediarioPaymentPayload>[]
          }
          upsert: {
            args: Prisma.CrediarioPaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrediarioPaymentPayload>
          }
          aggregate: {
            args: Prisma.CrediarioPaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCrediarioPayment>
          }
          groupBy: {
            args: Prisma.CrediarioPaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CrediarioPaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CrediarioPaymentCountArgs<ExtArgs>
            result: $Utils.Optional<CrediarioPaymentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    product?: ProductOmit
    stockAdjustment?: StockAdjustmentOmit
    customer?: CustomerOmit
    supplier?: SupplierOmit
    cashRegister?: CashRegisterOmit
    cashWithdrawal?: CashWithdrawalOmit
    sale?: SaleOmit
    saleItem?: SaleItemOmit
    payable?: PayableOmit
    crediarioAccount?: CrediarioAccountOmit
    crediarioPayment?: CrediarioPaymentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    saleItems: number
    stockAdjustments: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saleItems?: boolean | ProductCountOutputTypeCountSaleItemsArgs
    stockAdjustments?: boolean | ProductCountOutputTypeCountStockAdjustmentsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountSaleItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleItemWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountStockAdjustmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockAdjustmentWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    sales: number
    crediarioAccounts: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | CustomerCountOutputTypeCountSalesArgs
    crediarioAccounts?: boolean | CustomerCountOutputTypeCountCrediarioAccountsArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountCrediarioAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CrediarioAccountWhereInput
  }


  /**
   * Count Type SupplierCountOutputType
   */

  export type SupplierCountOutputType = {
    payables: number
  }

  export type SupplierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payables?: boolean | SupplierCountOutputTypeCountPayablesArgs
  }

  // Custom InputTypes
  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierCountOutputType
     */
    select?: SupplierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountPayablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayableWhereInput
  }


  /**
   * Count Type CashRegisterCountOutputType
   */

  export type CashRegisterCountOutputType = {
    withdrawals: number
    sales: number
  }

  export type CashRegisterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    withdrawals?: boolean | CashRegisterCountOutputTypeCountWithdrawalsArgs
    sales?: boolean | CashRegisterCountOutputTypeCountSalesArgs
  }

  // Custom InputTypes
  /**
   * CashRegisterCountOutputType without action
   */
  export type CashRegisterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashRegisterCountOutputType
     */
    select?: CashRegisterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CashRegisterCountOutputType without action
   */
  export type CashRegisterCountOutputTypeCountWithdrawalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CashWithdrawalWhereInput
  }

  /**
   * CashRegisterCountOutputType without action
   */
  export type CashRegisterCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
  }


  /**
   * Count Type SaleCountOutputType
   */

  export type SaleCountOutputType = {
    items: number
  }

  export type SaleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | SaleCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * SaleCountOutputType without action
   */
  export type SaleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleCountOutputType
     */
    select?: SaleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SaleCountOutputType without action
   */
  export type SaleCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleItemWhereInput
  }


  /**
   * Count Type CrediarioAccountCountOutputType
   */

  export type CrediarioAccountCountOutputType = {
    payments: number
  }

  export type CrediarioAccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | CrediarioAccountCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * CrediarioAccountCountOutputType without action
   */
  export type CrediarioAccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrediarioAccountCountOutputType
     */
    select?: CrediarioAccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CrediarioAccountCountOutputType without action
   */
  export type CrediarioAccountCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CrediarioPaymentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: bigint | null
  }

  export type UserMinAggregateOutputType = {
    id: bigint | null
    username: string | null
    passwordHash: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: bigint | null
    username: string | null
    passwordHash: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    passwordHash: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: bigint
    username: string
    passwordHash: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "passwordHash" | "createdAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      username: string
      passwordHash: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'BigInt'>
    readonly username: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    costPrice: Decimal | null
    salePrice: Decimal | null
    stock: number | null
    minStock: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: bigint | null
    costPrice: Decimal | null
    salePrice: Decimal | null
    stock: number | null
    minStock: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    barcode: string | null
    category: string | null
    brand: string | null
    costPrice: Decimal | null
    salePrice: Decimal | null
    stock: number | null
    minStock: number | null
    createdAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    barcode: string | null
    category: string | null
    brand: string | null
    costPrice: Decimal | null
    salePrice: Decimal | null
    stock: number | null
    minStock: number | null
    createdAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    barcode: number
    category: number
    brand: number
    costPrice: number
    salePrice: number
    stock: number
    minStock: number
    createdAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    costPrice?: true
    salePrice?: true
    stock?: true
    minStock?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    costPrice?: true
    salePrice?: true
    stock?: true
    minStock?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    barcode?: true
    category?: true
    brand?: true
    costPrice?: true
    salePrice?: true
    stock?: true
    minStock?: true
    createdAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    barcode?: true
    category?: true
    brand?: true
    costPrice?: true
    salePrice?: true
    stock?: true
    minStock?: true
    createdAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    barcode?: true
    category?: true
    brand?: true
    costPrice?: true
    salePrice?: true
    stock?: true
    minStock?: true
    createdAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: bigint
    name: string
    barcode: string
    category: string
    brand: string | null
    costPrice: Decimal
    salePrice: Decimal
    stock: number
    minStock: number
    createdAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    barcode?: boolean
    category?: boolean
    brand?: boolean
    costPrice?: boolean
    salePrice?: boolean
    stock?: boolean
    minStock?: boolean
    createdAt?: boolean
    saleItems?: boolean | Product$saleItemsArgs<ExtArgs>
    stockAdjustments?: boolean | Product$stockAdjustmentsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    barcode?: boolean
    category?: boolean
    brand?: boolean
    costPrice?: boolean
    salePrice?: boolean
    stock?: boolean
    minStock?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    barcode?: boolean
    category?: boolean
    brand?: boolean
    costPrice?: boolean
    salePrice?: boolean
    stock?: boolean
    minStock?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    barcode?: boolean
    category?: boolean
    brand?: boolean
    costPrice?: boolean
    salePrice?: boolean
    stock?: boolean
    minStock?: boolean
    createdAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "barcode" | "category" | "brand" | "costPrice" | "salePrice" | "stock" | "minStock" | "createdAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saleItems?: boolean | Product$saleItemsArgs<ExtArgs>
    stockAdjustments?: boolean | Product$stockAdjustmentsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      saleItems: Prisma.$SaleItemPayload<ExtArgs>[]
      stockAdjustments: Prisma.$StockAdjustmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      barcode: string
      category: string
      brand: string | null
      costPrice: Prisma.Decimal
      salePrice: Prisma.Decimal
      stock: number
      minStock: number
      createdAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    saleItems<T extends Product$saleItemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$saleItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stockAdjustments<T extends Product$stockAdjustmentsArgs<ExtArgs> = {}>(args?: Subset<T, Product$stockAdjustmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockAdjustmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'BigInt'>
    readonly name: FieldRef<"Product", 'String'>
    readonly barcode: FieldRef<"Product", 'String'>
    readonly category: FieldRef<"Product", 'String'>
    readonly brand: FieldRef<"Product", 'String'>
    readonly costPrice: FieldRef<"Product", 'Decimal'>
    readonly salePrice: FieldRef<"Product", 'Decimal'>
    readonly stock: FieldRef<"Product", 'Int'>
    readonly minStock: FieldRef<"Product", 'Int'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.saleItems
   */
  export type Product$saleItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    where?: SaleItemWhereInput
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    cursor?: SaleItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleItemScalarFieldEnum | SaleItemScalarFieldEnum[]
  }

  /**
   * Product.stockAdjustments
   */
  export type Product$stockAdjustmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockAdjustment
     */
    select?: StockAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockAdjustment
     */
    omit?: StockAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockAdjustmentInclude<ExtArgs> | null
    where?: StockAdjustmentWhereInput
    orderBy?: StockAdjustmentOrderByWithRelationInput | StockAdjustmentOrderByWithRelationInput[]
    cursor?: StockAdjustmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockAdjustmentScalarFieldEnum | StockAdjustmentScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model StockAdjustment
   */

  export type AggregateStockAdjustment = {
    _count: StockAdjustmentCountAggregateOutputType | null
    _avg: StockAdjustmentAvgAggregateOutputType | null
    _sum: StockAdjustmentSumAggregateOutputType | null
    _min: StockAdjustmentMinAggregateOutputType | null
    _max: StockAdjustmentMaxAggregateOutputType | null
  }

  export type StockAdjustmentAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    previousStock: number | null
    newStock: number | null
  }

  export type StockAdjustmentSumAggregateOutputType = {
    id: bigint | null
    productId: bigint | null
    previousStock: number | null
    newStock: number | null
  }

  export type StockAdjustmentMinAggregateOutputType = {
    id: bigint | null
    productId: bigint | null
    previousStock: number | null
    newStock: number | null
    reason: string | null
    createdAt: Date | null
  }

  export type StockAdjustmentMaxAggregateOutputType = {
    id: bigint | null
    productId: bigint | null
    previousStock: number | null
    newStock: number | null
    reason: string | null
    createdAt: Date | null
  }

  export type StockAdjustmentCountAggregateOutputType = {
    id: number
    productId: number
    previousStock: number
    newStock: number
    reason: number
    createdAt: number
    _all: number
  }


  export type StockAdjustmentAvgAggregateInputType = {
    id?: true
    productId?: true
    previousStock?: true
    newStock?: true
  }

  export type StockAdjustmentSumAggregateInputType = {
    id?: true
    productId?: true
    previousStock?: true
    newStock?: true
  }

  export type StockAdjustmentMinAggregateInputType = {
    id?: true
    productId?: true
    previousStock?: true
    newStock?: true
    reason?: true
    createdAt?: true
  }

  export type StockAdjustmentMaxAggregateInputType = {
    id?: true
    productId?: true
    previousStock?: true
    newStock?: true
    reason?: true
    createdAt?: true
  }

  export type StockAdjustmentCountAggregateInputType = {
    id?: true
    productId?: true
    previousStock?: true
    newStock?: true
    reason?: true
    createdAt?: true
    _all?: true
  }

  export type StockAdjustmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockAdjustment to aggregate.
     */
    where?: StockAdjustmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockAdjustments to fetch.
     */
    orderBy?: StockAdjustmentOrderByWithRelationInput | StockAdjustmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockAdjustmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockAdjustments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockAdjustments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockAdjustments
    **/
    _count?: true | StockAdjustmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockAdjustmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockAdjustmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockAdjustmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockAdjustmentMaxAggregateInputType
  }

  export type GetStockAdjustmentAggregateType<T extends StockAdjustmentAggregateArgs> = {
        [P in keyof T & keyof AggregateStockAdjustment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockAdjustment[P]>
      : GetScalarType<T[P], AggregateStockAdjustment[P]>
  }




  export type StockAdjustmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockAdjustmentWhereInput
    orderBy?: StockAdjustmentOrderByWithAggregationInput | StockAdjustmentOrderByWithAggregationInput[]
    by: StockAdjustmentScalarFieldEnum[] | StockAdjustmentScalarFieldEnum
    having?: StockAdjustmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockAdjustmentCountAggregateInputType | true
    _avg?: StockAdjustmentAvgAggregateInputType
    _sum?: StockAdjustmentSumAggregateInputType
    _min?: StockAdjustmentMinAggregateInputType
    _max?: StockAdjustmentMaxAggregateInputType
  }

  export type StockAdjustmentGroupByOutputType = {
    id: bigint
    productId: bigint
    previousStock: number
    newStock: number
    reason: string | null
    createdAt: Date
    _count: StockAdjustmentCountAggregateOutputType | null
    _avg: StockAdjustmentAvgAggregateOutputType | null
    _sum: StockAdjustmentSumAggregateOutputType | null
    _min: StockAdjustmentMinAggregateOutputType | null
    _max: StockAdjustmentMaxAggregateOutputType | null
  }

  type GetStockAdjustmentGroupByPayload<T extends StockAdjustmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockAdjustmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockAdjustmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockAdjustmentGroupByOutputType[P]>
            : GetScalarType<T[P], StockAdjustmentGroupByOutputType[P]>
        }
      >
    >


  export type StockAdjustmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    previousStock?: boolean
    newStock?: boolean
    reason?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockAdjustment"]>

  export type StockAdjustmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    previousStock?: boolean
    newStock?: boolean
    reason?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockAdjustment"]>

  export type StockAdjustmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    previousStock?: boolean
    newStock?: boolean
    reason?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockAdjustment"]>

  export type StockAdjustmentSelectScalar = {
    id?: boolean
    productId?: boolean
    previousStock?: boolean
    newStock?: boolean
    reason?: boolean
    createdAt?: boolean
  }

  export type StockAdjustmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "previousStock" | "newStock" | "reason" | "createdAt", ExtArgs["result"]["stockAdjustment"]>
  export type StockAdjustmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type StockAdjustmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type StockAdjustmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $StockAdjustmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockAdjustment"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      productId: bigint
      previousStock: number
      newStock: number
      reason: string | null
      createdAt: Date
    }, ExtArgs["result"]["stockAdjustment"]>
    composites: {}
  }

  type StockAdjustmentGetPayload<S extends boolean | null | undefined | StockAdjustmentDefaultArgs> = $Result.GetResult<Prisma.$StockAdjustmentPayload, S>

  type StockAdjustmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StockAdjustmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StockAdjustmentCountAggregateInputType | true
    }

  export interface StockAdjustmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockAdjustment'], meta: { name: 'StockAdjustment' } }
    /**
     * Find zero or one StockAdjustment that matches the filter.
     * @param {StockAdjustmentFindUniqueArgs} args - Arguments to find a StockAdjustment
     * @example
     * // Get one StockAdjustment
     * const stockAdjustment = await prisma.stockAdjustment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockAdjustmentFindUniqueArgs>(args: SelectSubset<T, StockAdjustmentFindUniqueArgs<ExtArgs>>): Prisma__StockAdjustmentClient<$Result.GetResult<Prisma.$StockAdjustmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StockAdjustment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StockAdjustmentFindUniqueOrThrowArgs} args - Arguments to find a StockAdjustment
     * @example
     * // Get one StockAdjustment
     * const stockAdjustment = await prisma.stockAdjustment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockAdjustmentFindUniqueOrThrowArgs>(args: SelectSubset<T, StockAdjustmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockAdjustmentClient<$Result.GetResult<Prisma.$StockAdjustmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockAdjustment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockAdjustmentFindFirstArgs} args - Arguments to find a StockAdjustment
     * @example
     * // Get one StockAdjustment
     * const stockAdjustment = await prisma.stockAdjustment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockAdjustmentFindFirstArgs>(args?: SelectSubset<T, StockAdjustmentFindFirstArgs<ExtArgs>>): Prisma__StockAdjustmentClient<$Result.GetResult<Prisma.$StockAdjustmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockAdjustment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockAdjustmentFindFirstOrThrowArgs} args - Arguments to find a StockAdjustment
     * @example
     * // Get one StockAdjustment
     * const stockAdjustment = await prisma.stockAdjustment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockAdjustmentFindFirstOrThrowArgs>(args?: SelectSubset<T, StockAdjustmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockAdjustmentClient<$Result.GetResult<Prisma.$StockAdjustmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StockAdjustments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockAdjustmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockAdjustments
     * const stockAdjustments = await prisma.stockAdjustment.findMany()
     * 
     * // Get first 10 StockAdjustments
     * const stockAdjustments = await prisma.stockAdjustment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockAdjustmentWithIdOnly = await prisma.stockAdjustment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockAdjustmentFindManyArgs>(args?: SelectSubset<T, StockAdjustmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockAdjustmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StockAdjustment.
     * @param {StockAdjustmentCreateArgs} args - Arguments to create a StockAdjustment.
     * @example
     * // Create one StockAdjustment
     * const StockAdjustment = await prisma.stockAdjustment.create({
     *   data: {
     *     // ... data to create a StockAdjustment
     *   }
     * })
     * 
     */
    create<T extends StockAdjustmentCreateArgs>(args: SelectSubset<T, StockAdjustmentCreateArgs<ExtArgs>>): Prisma__StockAdjustmentClient<$Result.GetResult<Prisma.$StockAdjustmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StockAdjustments.
     * @param {StockAdjustmentCreateManyArgs} args - Arguments to create many StockAdjustments.
     * @example
     * // Create many StockAdjustments
     * const stockAdjustment = await prisma.stockAdjustment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockAdjustmentCreateManyArgs>(args?: SelectSubset<T, StockAdjustmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StockAdjustments and returns the data saved in the database.
     * @param {StockAdjustmentCreateManyAndReturnArgs} args - Arguments to create many StockAdjustments.
     * @example
     * // Create many StockAdjustments
     * const stockAdjustment = await prisma.stockAdjustment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StockAdjustments and only return the `id`
     * const stockAdjustmentWithIdOnly = await prisma.stockAdjustment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StockAdjustmentCreateManyAndReturnArgs>(args?: SelectSubset<T, StockAdjustmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockAdjustmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StockAdjustment.
     * @param {StockAdjustmentDeleteArgs} args - Arguments to delete one StockAdjustment.
     * @example
     * // Delete one StockAdjustment
     * const StockAdjustment = await prisma.stockAdjustment.delete({
     *   where: {
     *     // ... filter to delete one StockAdjustment
     *   }
     * })
     * 
     */
    delete<T extends StockAdjustmentDeleteArgs>(args: SelectSubset<T, StockAdjustmentDeleteArgs<ExtArgs>>): Prisma__StockAdjustmentClient<$Result.GetResult<Prisma.$StockAdjustmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StockAdjustment.
     * @param {StockAdjustmentUpdateArgs} args - Arguments to update one StockAdjustment.
     * @example
     * // Update one StockAdjustment
     * const stockAdjustment = await prisma.stockAdjustment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockAdjustmentUpdateArgs>(args: SelectSubset<T, StockAdjustmentUpdateArgs<ExtArgs>>): Prisma__StockAdjustmentClient<$Result.GetResult<Prisma.$StockAdjustmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StockAdjustments.
     * @param {StockAdjustmentDeleteManyArgs} args - Arguments to filter StockAdjustments to delete.
     * @example
     * // Delete a few StockAdjustments
     * const { count } = await prisma.stockAdjustment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockAdjustmentDeleteManyArgs>(args?: SelectSubset<T, StockAdjustmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockAdjustments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockAdjustmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockAdjustments
     * const stockAdjustment = await prisma.stockAdjustment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockAdjustmentUpdateManyArgs>(args: SelectSubset<T, StockAdjustmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockAdjustments and returns the data updated in the database.
     * @param {StockAdjustmentUpdateManyAndReturnArgs} args - Arguments to update many StockAdjustments.
     * @example
     * // Update many StockAdjustments
     * const stockAdjustment = await prisma.stockAdjustment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StockAdjustments and only return the `id`
     * const stockAdjustmentWithIdOnly = await prisma.stockAdjustment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StockAdjustmentUpdateManyAndReturnArgs>(args: SelectSubset<T, StockAdjustmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockAdjustmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StockAdjustment.
     * @param {StockAdjustmentUpsertArgs} args - Arguments to update or create a StockAdjustment.
     * @example
     * // Update or create a StockAdjustment
     * const stockAdjustment = await prisma.stockAdjustment.upsert({
     *   create: {
     *     // ... data to create a StockAdjustment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockAdjustment we want to update
     *   }
     * })
     */
    upsert<T extends StockAdjustmentUpsertArgs>(args: SelectSubset<T, StockAdjustmentUpsertArgs<ExtArgs>>): Prisma__StockAdjustmentClient<$Result.GetResult<Prisma.$StockAdjustmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StockAdjustments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockAdjustmentCountArgs} args - Arguments to filter StockAdjustments to count.
     * @example
     * // Count the number of StockAdjustments
     * const count = await prisma.stockAdjustment.count({
     *   where: {
     *     // ... the filter for the StockAdjustments we want to count
     *   }
     * })
    **/
    count<T extends StockAdjustmentCountArgs>(
      args?: Subset<T, StockAdjustmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockAdjustmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockAdjustment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockAdjustmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StockAdjustmentAggregateArgs>(args: Subset<T, StockAdjustmentAggregateArgs>): Prisma.PrismaPromise<GetStockAdjustmentAggregateType<T>>

    /**
     * Group by StockAdjustment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockAdjustmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StockAdjustmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockAdjustmentGroupByArgs['orderBy'] }
        : { orderBy?: StockAdjustmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StockAdjustmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockAdjustmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockAdjustment model
   */
  readonly fields: StockAdjustmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockAdjustment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockAdjustmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StockAdjustment model
   */
  interface StockAdjustmentFieldRefs {
    readonly id: FieldRef<"StockAdjustment", 'BigInt'>
    readonly productId: FieldRef<"StockAdjustment", 'BigInt'>
    readonly previousStock: FieldRef<"StockAdjustment", 'Int'>
    readonly newStock: FieldRef<"StockAdjustment", 'Int'>
    readonly reason: FieldRef<"StockAdjustment", 'String'>
    readonly createdAt: FieldRef<"StockAdjustment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StockAdjustment findUnique
   */
  export type StockAdjustmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockAdjustment
     */
    select?: StockAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockAdjustment
     */
    omit?: StockAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which StockAdjustment to fetch.
     */
    where: StockAdjustmentWhereUniqueInput
  }

  /**
   * StockAdjustment findUniqueOrThrow
   */
  export type StockAdjustmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockAdjustment
     */
    select?: StockAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockAdjustment
     */
    omit?: StockAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which StockAdjustment to fetch.
     */
    where: StockAdjustmentWhereUniqueInput
  }

  /**
   * StockAdjustment findFirst
   */
  export type StockAdjustmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockAdjustment
     */
    select?: StockAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockAdjustment
     */
    omit?: StockAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which StockAdjustment to fetch.
     */
    where?: StockAdjustmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockAdjustments to fetch.
     */
    orderBy?: StockAdjustmentOrderByWithRelationInput | StockAdjustmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockAdjustments.
     */
    cursor?: StockAdjustmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockAdjustments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockAdjustments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockAdjustments.
     */
    distinct?: StockAdjustmentScalarFieldEnum | StockAdjustmentScalarFieldEnum[]
  }

  /**
   * StockAdjustment findFirstOrThrow
   */
  export type StockAdjustmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockAdjustment
     */
    select?: StockAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockAdjustment
     */
    omit?: StockAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which StockAdjustment to fetch.
     */
    where?: StockAdjustmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockAdjustments to fetch.
     */
    orderBy?: StockAdjustmentOrderByWithRelationInput | StockAdjustmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockAdjustments.
     */
    cursor?: StockAdjustmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockAdjustments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockAdjustments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockAdjustments.
     */
    distinct?: StockAdjustmentScalarFieldEnum | StockAdjustmentScalarFieldEnum[]
  }

  /**
   * StockAdjustment findMany
   */
  export type StockAdjustmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockAdjustment
     */
    select?: StockAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockAdjustment
     */
    omit?: StockAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which StockAdjustments to fetch.
     */
    where?: StockAdjustmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockAdjustments to fetch.
     */
    orderBy?: StockAdjustmentOrderByWithRelationInput | StockAdjustmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockAdjustments.
     */
    cursor?: StockAdjustmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockAdjustments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockAdjustments.
     */
    skip?: number
    distinct?: StockAdjustmentScalarFieldEnum | StockAdjustmentScalarFieldEnum[]
  }

  /**
   * StockAdjustment create
   */
  export type StockAdjustmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockAdjustment
     */
    select?: StockAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockAdjustment
     */
    omit?: StockAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockAdjustmentInclude<ExtArgs> | null
    /**
     * The data needed to create a StockAdjustment.
     */
    data: XOR<StockAdjustmentCreateInput, StockAdjustmentUncheckedCreateInput>
  }

  /**
   * StockAdjustment createMany
   */
  export type StockAdjustmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockAdjustments.
     */
    data: StockAdjustmentCreateManyInput | StockAdjustmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StockAdjustment createManyAndReturn
   */
  export type StockAdjustmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockAdjustment
     */
    select?: StockAdjustmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StockAdjustment
     */
    omit?: StockAdjustmentOmit<ExtArgs> | null
    /**
     * The data used to create many StockAdjustments.
     */
    data: StockAdjustmentCreateManyInput | StockAdjustmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockAdjustmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockAdjustment update
   */
  export type StockAdjustmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockAdjustment
     */
    select?: StockAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockAdjustment
     */
    omit?: StockAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockAdjustmentInclude<ExtArgs> | null
    /**
     * The data needed to update a StockAdjustment.
     */
    data: XOR<StockAdjustmentUpdateInput, StockAdjustmentUncheckedUpdateInput>
    /**
     * Choose, which StockAdjustment to update.
     */
    where: StockAdjustmentWhereUniqueInput
  }

  /**
   * StockAdjustment updateMany
   */
  export type StockAdjustmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockAdjustments.
     */
    data: XOR<StockAdjustmentUpdateManyMutationInput, StockAdjustmentUncheckedUpdateManyInput>
    /**
     * Filter which StockAdjustments to update
     */
    where?: StockAdjustmentWhereInput
    /**
     * Limit how many StockAdjustments to update.
     */
    limit?: number
  }

  /**
   * StockAdjustment updateManyAndReturn
   */
  export type StockAdjustmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockAdjustment
     */
    select?: StockAdjustmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StockAdjustment
     */
    omit?: StockAdjustmentOmit<ExtArgs> | null
    /**
     * The data used to update StockAdjustments.
     */
    data: XOR<StockAdjustmentUpdateManyMutationInput, StockAdjustmentUncheckedUpdateManyInput>
    /**
     * Filter which StockAdjustments to update
     */
    where?: StockAdjustmentWhereInput
    /**
     * Limit how many StockAdjustments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockAdjustmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockAdjustment upsert
   */
  export type StockAdjustmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockAdjustment
     */
    select?: StockAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockAdjustment
     */
    omit?: StockAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockAdjustmentInclude<ExtArgs> | null
    /**
     * The filter to search for the StockAdjustment to update in case it exists.
     */
    where: StockAdjustmentWhereUniqueInput
    /**
     * In case the StockAdjustment found by the `where` argument doesn't exist, create a new StockAdjustment with this data.
     */
    create: XOR<StockAdjustmentCreateInput, StockAdjustmentUncheckedCreateInput>
    /**
     * In case the StockAdjustment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockAdjustmentUpdateInput, StockAdjustmentUncheckedUpdateInput>
  }

  /**
   * StockAdjustment delete
   */
  export type StockAdjustmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockAdjustment
     */
    select?: StockAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockAdjustment
     */
    omit?: StockAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockAdjustmentInclude<ExtArgs> | null
    /**
     * Filter which StockAdjustment to delete.
     */
    where: StockAdjustmentWhereUniqueInput
  }

  /**
   * StockAdjustment deleteMany
   */
  export type StockAdjustmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockAdjustments to delete
     */
    where?: StockAdjustmentWhereInput
    /**
     * Limit how many StockAdjustments to delete.
     */
    limit?: number
  }

  /**
   * StockAdjustment without action
   */
  export type StockAdjustmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockAdjustment
     */
    select?: StockAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockAdjustment
     */
    omit?: StockAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockAdjustmentInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    id: number | null
    totalSpent: Decimal | null
  }

  export type CustomerSumAggregateOutputType = {
    id: bigint | null
    totalSpent: Decimal | null
  }

  export type CustomerMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    phone: string | null
    city: string | null
    lastPurchaseAt: Date | null
    totalSpent: Decimal | null
    createdAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    phone: string | null
    city: string | null
    lastPurchaseAt: Date | null
    totalSpent: Decimal | null
    createdAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    city: number
    lastPurchaseAt: number
    totalSpent: number
    createdAt: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    id?: true
    totalSpent?: true
  }

  export type CustomerSumAggregateInputType = {
    id?: true
    totalSpent?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    city?: true
    lastPurchaseAt?: true
    totalSpent?: true
    createdAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    city?: true
    lastPurchaseAt?: true
    totalSpent?: true
    createdAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    city?: true
    lastPurchaseAt?: true
    totalSpent?: true
    createdAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: bigint
    name: string
    phone: string | null
    city: string | null
    lastPurchaseAt: Date | null
    totalSpent: Decimal
    createdAt: Date
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    city?: boolean
    lastPurchaseAt?: boolean
    totalSpent?: boolean
    createdAt?: boolean
    sales?: boolean | Customer$salesArgs<ExtArgs>
    crediarioAccounts?: boolean | Customer$crediarioAccountsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    city?: boolean
    lastPurchaseAt?: boolean
    totalSpent?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    city?: boolean
    lastPurchaseAt?: boolean
    totalSpent?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    city?: boolean
    lastPurchaseAt?: boolean
    totalSpent?: boolean
    createdAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "city" | "lastPurchaseAt" | "totalSpent" | "createdAt", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | Customer$salesArgs<ExtArgs>
    crediarioAccounts?: boolean | Customer$crediarioAccountsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      sales: Prisma.$SalePayload<ExtArgs>[]
      crediarioAccounts: Prisma.$CrediarioAccountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      phone: string | null
      city: string | null
      lastPurchaseAt: Date | null
      totalSpent: Prisma.Decimal
      createdAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sales<T extends Customer$salesArgs<ExtArgs> = {}>(args?: Subset<T, Customer$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    crediarioAccounts<T extends Customer$crediarioAccountsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$crediarioAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrediarioAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'BigInt'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
    readonly city: FieldRef<"Customer", 'String'>
    readonly lastPurchaseAt: FieldRef<"Customer", 'DateTime'>
    readonly totalSpent: FieldRef<"Customer", 'Decimal'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.sales
   */
  export type Customer$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    cursor?: SaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Customer.crediarioAccounts
   */
  export type Customer$crediarioAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrediarioAccount
     */
    select?: CrediarioAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrediarioAccount
     */
    omit?: CrediarioAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrediarioAccountInclude<ExtArgs> | null
    where?: CrediarioAccountWhereInput
    orderBy?: CrediarioAccountOrderByWithRelationInput | CrediarioAccountOrderByWithRelationInput[]
    cursor?: CrediarioAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CrediarioAccountScalarFieldEnum | CrediarioAccountScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Supplier
   */

  export type AggregateSupplier = {
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  export type SupplierAvgAggregateOutputType = {
    id: number | null
  }

  export type SupplierSumAggregateOutputType = {
    id: bigint | null
  }

  export type SupplierMinAggregateOutputType = {
    id: bigint | null
    legalName: string | null
    tradeName: string | null
    cnpj: string | null
    contactName: string | null
    createdAt: Date | null
  }

  export type SupplierMaxAggregateOutputType = {
    id: bigint | null
    legalName: string | null
    tradeName: string | null
    cnpj: string | null
    contactName: string | null
    createdAt: Date | null
  }

  export type SupplierCountAggregateOutputType = {
    id: number
    legalName: number
    tradeName: number
    cnpj: number
    contactName: number
    createdAt: number
    _all: number
  }


  export type SupplierAvgAggregateInputType = {
    id?: true
  }

  export type SupplierSumAggregateInputType = {
    id?: true
  }

  export type SupplierMinAggregateInputType = {
    id?: true
    legalName?: true
    tradeName?: true
    cnpj?: true
    contactName?: true
    createdAt?: true
  }

  export type SupplierMaxAggregateInputType = {
    id?: true
    legalName?: true
    tradeName?: true
    cnpj?: true
    contactName?: true
    createdAt?: true
  }

  export type SupplierCountAggregateInputType = {
    id?: true
    legalName?: true
    tradeName?: true
    cnpj?: true
    contactName?: true
    createdAt?: true
    _all?: true
  }

  export type SupplierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Supplier to aggregate.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Suppliers
    **/
    _count?: true | SupplierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierMaxAggregateInputType
  }

  export type GetSupplierAggregateType<T extends SupplierAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplier[P]>
      : GetScalarType<T[P], AggregateSupplier[P]>
  }




  export type SupplierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierWhereInput
    orderBy?: SupplierOrderByWithAggregationInput | SupplierOrderByWithAggregationInput[]
    by: SupplierScalarFieldEnum[] | SupplierScalarFieldEnum
    having?: SupplierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierCountAggregateInputType | true
    _avg?: SupplierAvgAggregateInputType
    _sum?: SupplierSumAggregateInputType
    _min?: SupplierMinAggregateInputType
    _max?: SupplierMaxAggregateInputType
  }

  export type SupplierGroupByOutputType = {
    id: bigint
    legalName: string
    tradeName: string | null
    cnpj: string | null
    contactName: string | null
    createdAt: Date
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  type GetSupplierGroupByPayload<T extends SupplierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierGroupByOutputType[P]>
        }
      >
    >


  export type SupplierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    legalName?: boolean
    tradeName?: boolean
    cnpj?: boolean
    contactName?: boolean
    createdAt?: boolean
    payables?: boolean | Supplier$payablesArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    legalName?: boolean
    tradeName?: boolean
    cnpj?: boolean
    contactName?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    legalName?: boolean
    tradeName?: boolean
    cnpj?: boolean
    contactName?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectScalar = {
    id?: boolean
    legalName?: boolean
    tradeName?: boolean
    cnpj?: boolean
    contactName?: boolean
    createdAt?: boolean
  }

  export type SupplierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "legalName" | "tradeName" | "cnpj" | "contactName" | "createdAt", ExtArgs["result"]["supplier"]>
  export type SupplierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payables?: boolean | Supplier$payablesArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SupplierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SupplierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SupplierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Supplier"
    objects: {
      payables: Prisma.$PayablePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      legalName: string
      tradeName: string | null
      cnpj: string | null
      contactName: string | null
      createdAt: Date
    }, ExtArgs["result"]["supplier"]>
    composites: {}
  }

  type SupplierGetPayload<S extends boolean | null | undefined | SupplierDefaultArgs> = $Result.GetResult<Prisma.$SupplierPayload, S>

  type SupplierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupplierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupplierCountAggregateInputType | true
    }

  export interface SupplierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Supplier'], meta: { name: 'Supplier' } }
    /**
     * Find zero or one Supplier that matches the filter.
     * @param {SupplierFindUniqueArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierFindUniqueArgs>(args: SelectSubset<T, SupplierFindUniqueArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Supplier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupplierFindUniqueOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierFindFirstArgs>(args?: SelectSubset<T, SupplierFindFirstArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.supplier.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.supplier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierWithIdOnly = await prisma.supplier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierFindManyArgs>(args?: SelectSubset<T, SupplierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Supplier.
     * @param {SupplierCreateArgs} args - Arguments to create a Supplier.
     * @example
     * // Create one Supplier
     * const Supplier = await prisma.supplier.create({
     *   data: {
     *     // ... data to create a Supplier
     *   }
     * })
     * 
     */
    create<T extends SupplierCreateArgs>(args: SelectSubset<T, SupplierCreateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Suppliers.
     * @param {SupplierCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierCreateManyArgs>(args?: SelectSubset<T, SupplierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suppliers and returns the data saved in the database.
     * @param {SupplierCreateManyAndReturnArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupplierCreateManyAndReturnArgs>(args?: SelectSubset<T, SupplierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Supplier.
     * @param {SupplierDeleteArgs} args - Arguments to delete one Supplier.
     * @example
     * // Delete one Supplier
     * const Supplier = await prisma.supplier.delete({
     *   where: {
     *     // ... filter to delete one Supplier
     *   }
     * })
     * 
     */
    delete<T extends SupplierDeleteArgs>(args: SelectSubset<T, SupplierDeleteArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Supplier.
     * @param {SupplierUpdateArgs} args - Arguments to update one Supplier.
     * @example
     * // Update one Supplier
     * const supplier = await prisma.supplier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierUpdateArgs>(args: SelectSubset<T, SupplierUpdateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Suppliers.
     * @param {SupplierDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.supplier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierDeleteManyArgs>(args?: SelectSubset<T, SupplierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierUpdateManyArgs>(args: SelectSubset<T, SupplierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers and returns the data updated in the database.
     * @param {SupplierUpdateManyAndReturnArgs} args - Arguments to update many Suppliers.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SupplierUpdateManyAndReturnArgs>(args: SelectSubset<T, SupplierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Supplier.
     * @param {SupplierUpsertArgs} args - Arguments to update or create a Supplier.
     * @example
     * // Update or create a Supplier
     * const supplier = await prisma.supplier.upsert({
     *   create: {
     *     // ... data to create a Supplier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supplier we want to update
     *   }
     * })
     */
    upsert<T extends SupplierUpsertArgs>(args: SelectSubset<T, SupplierUpsertArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.supplier.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends SupplierCountArgs>(
      args?: Subset<T, SupplierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SupplierAggregateArgs>(args: Subset<T, SupplierAggregateArgs>): Prisma.PrismaPromise<GetSupplierAggregateType<T>>

    /**
     * Group by Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SupplierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierGroupByArgs['orderBy'] }
        : { orderBy?: SupplierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SupplierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Supplier model
   */
  readonly fields: SupplierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Supplier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payables<T extends Supplier$payablesArgs<ExtArgs> = {}>(args?: Subset<T, Supplier$payablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Supplier model
   */
  interface SupplierFieldRefs {
    readonly id: FieldRef<"Supplier", 'BigInt'>
    readonly legalName: FieldRef<"Supplier", 'String'>
    readonly tradeName: FieldRef<"Supplier", 'String'>
    readonly cnpj: FieldRef<"Supplier", 'String'>
    readonly contactName: FieldRef<"Supplier", 'String'>
    readonly createdAt: FieldRef<"Supplier", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Supplier findUnique
   */
  export type SupplierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findUniqueOrThrow
   */
  export type SupplierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findFirst
   */
  export type SupplierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findFirstOrThrow
   */
  export type SupplierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findMany
   */
  export type SupplierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier create
   */
  export type SupplierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to create a Supplier.
     */
    data: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
  }

  /**
   * Supplier createMany
   */
  export type SupplierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier createManyAndReturn
   */
  export type SupplierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier update
   */
  export type SupplierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to update a Supplier.
     */
    data: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
    /**
     * Choose, which Supplier to update.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier updateMany
   */
  export type SupplierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Supplier updateManyAndReturn
   */
  export type SupplierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Supplier upsert
   */
  export type SupplierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The filter to search for the Supplier to update in case it exists.
     */
    where: SupplierWhereUniqueInput
    /**
     * In case the Supplier found by the `where` argument doesn't exist, create a new Supplier with this data.
     */
    create: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
    /**
     * In case the Supplier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
  }

  /**
   * Supplier delete
   */
  export type SupplierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter which Supplier to delete.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier deleteMany
   */
  export type SupplierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suppliers to delete
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to delete.
     */
    limit?: number
  }

  /**
   * Supplier.payables
   */
  export type Supplier$payablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payable
     */
    select?: PayableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payable
     */
    omit?: PayableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayableInclude<ExtArgs> | null
    where?: PayableWhereInput
    orderBy?: PayableOrderByWithRelationInput | PayableOrderByWithRelationInput[]
    cursor?: PayableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayableScalarFieldEnum | PayableScalarFieldEnum[]
  }

  /**
   * Supplier without action
   */
  export type SupplierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
  }


  /**
   * Model CashRegister
   */

  export type AggregateCashRegister = {
    _count: CashRegisterCountAggregateOutputType | null
    _avg: CashRegisterAvgAggregateOutputType | null
    _sum: CashRegisterSumAggregateOutputType | null
    _min: CashRegisterMinAggregateOutputType | null
    _max: CashRegisterMaxAggregateOutputType | null
  }

  export type CashRegisterAvgAggregateOutputType = {
    id: number | null
    openingAmount: Decimal | null
  }

  export type CashRegisterSumAggregateOutputType = {
    id: bigint | null
    openingAmount: Decimal | null
  }

  export type CashRegisterMinAggregateOutputType = {
    id: bigint | null
    openedAt: Date | null
    closedAt: Date | null
    openingAmount: Decimal | null
    status: string | null
  }

  export type CashRegisterMaxAggregateOutputType = {
    id: bigint | null
    openedAt: Date | null
    closedAt: Date | null
    openingAmount: Decimal | null
    status: string | null
  }

  export type CashRegisterCountAggregateOutputType = {
    id: number
    openedAt: number
    closedAt: number
    openingAmount: number
    status: number
    _all: number
  }


  export type CashRegisterAvgAggregateInputType = {
    id?: true
    openingAmount?: true
  }

  export type CashRegisterSumAggregateInputType = {
    id?: true
    openingAmount?: true
  }

  export type CashRegisterMinAggregateInputType = {
    id?: true
    openedAt?: true
    closedAt?: true
    openingAmount?: true
    status?: true
  }

  export type CashRegisterMaxAggregateInputType = {
    id?: true
    openedAt?: true
    closedAt?: true
    openingAmount?: true
    status?: true
  }

  export type CashRegisterCountAggregateInputType = {
    id?: true
    openedAt?: true
    closedAt?: true
    openingAmount?: true
    status?: true
    _all?: true
  }

  export type CashRegisterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CashRegister to aggregate.
     */
    where?: CashRegisterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashRegisters to fetch.
     */
    orderBy?: CashRegisterOrderByWithRelationInput | CashRegisterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CashRegisterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashRegisters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashRegisters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CashRegisters
    **/
    _count?: true | CashRegisterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CashRegisterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CashRegisterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CashRegisterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CashRegisterMaxAggregateInputType
  }

  export type GetCashRegisterAggregateType<T extends CashRegisterAggregateArgs> = {
        [P in keyof T & keyof AggregateCashRegister]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCashRegister[P]>
      : GetScalarType<T[P], AggregateCashRegister[P]>
  }




  export type CashRegisterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CashRegisterWhereInput
    orderBy?: CashRegisterOrderByWithAggregationInput | CashRegisterOrderByWithAggregationInput[]
    by: CashRegisterScalarFieldEnum[] | CashRegisterScalarFieldEnum
    having?: CashRegisterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CashRegisterCountAggregateInputType | true
    _avg?: CashRegisterAvgAggregateInputType
    _sum?: CashRegisterSumAggregateInputType
    _min?: CashRegisterMinAggregateInputType
    _max?: CashRegisterMaxAggregateInputType
  }

  export type CashRegisterGroupByOutputType = {
    id: bigint
    openedAt: Date
    closedAt: Date | null
    openingAmount: Decimal
    status: string
    _count: CashRegisterCountAggregateOutputType | null
    _avg: CashRegisterAvgAggregateOutputType | null
    _sum: CashRegisterSumAggregateOutputType | null
    _min: CashRegisterMinAggregateOutputType | null
    _max: CashRegisterMaxAggregateOutputType | null
  }

  type GetCashRegisterGroupByPayload<T extends CashRegisterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CashRegisterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CashRegisterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CashRegisterGroupByOutputType[P]>
            : GetScalarType<T[P], CashRegisterGroupByOutputType[P]>
        }
      >
    >


  export type CashRegisterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    openedAt?: boolean
    closedAt?: boolean
    openingAmount?: boolean
    status?: boolean
    withdrawals?: boolean | CashRegister$withdrawalsArgs<ExtArgs>
    sales?: boolean | CashRegister$salesArgs<ExtArgs>
    _count?: boolean | CashRegisterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cashRegister"]>

  export type CashRegisterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    openedAt?: boolean
    closedAt?: boolean
    openingAmount?: boolean
    status?: boolean
  }, ExtArgs["result"]["cashRegister"]>

  export type CashRegisterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    openedAt?: boolean
    closedAt?: boolean
    openingAmount?: boolean
    status?: boolean
  }, ExtArgs["result"]["cashRegister"]>

  export type CashRegisterSelectScalar = {
    id?: boolean
    openedAt?: boolean
    closedAt?: boolean
    openingAmount?: boolean
    status?: boolean
  }

  export type CashRegisterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "openedAt" | "closedAt" | "openingAmount" | "status", ExtArgs["result"]["cashRegister"]>
  export type CashRegisterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    withdrawals?: boolean | CashRegister$withdrawalsArgs<ExtArgs>
    sales?: boolean | CashRegister$salesArgs<ExtArgs>
    _count?: boolean | CashRegisterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CashRegisterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CashRegisterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CashRegisterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CashRegister"
    objects: {
      withdrawals: Prisma.$CashWithdrawalPayload<ExtArgs>[]
      sales: Prisma.$SalePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      openedAt: Date
      closedAt: Date | null
      openingAmount: Prisma.Decimal
      status: string
    }, ExtArgs["result"]["cashRegister"]>
    composites: {}
  }

  type CashRegisterGetPayload<S extends boolean | null | undefined | CashRegisterDefaultArgs> = $Result.GetResult<Prisma.$CashRegisterPayload, S>

  type CashRegisterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CashRegisterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CashRegisterCountAggregateInputType | true
    }

  export interface CashRegisterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CashRegister'], meta: { name: 'CashRegister' } }
    /**
     * Find zero or one CashRegister that matches the filter.
     * @param {CashRegisterFindUniqueArgs} args - Arguments to find a CashRegister
     * @example
     * // Get one CashRegister
     * const cashRegister = await prisma.cashRegister.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CashRegisterFindUniqueArgs>(args: SelectSubset<T, CashRegisterFindUniqueArgs<ExtArgs>>): Prisma__CashRegisterClient<$Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CashRegister that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CashRegisterFindUniqueOrThrowArgs} args - Arguments to find a CashRegister
     * @example
     * // Get one CashRegister
     * const cashRegister = await prisma.cashRegister.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CashRegisterFindUniqueOrThrowArgs>(args: SelectSubset<T, CashRegisterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CashRegisterClient<$Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CashRegister that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashRegisterFindFirstArgs} args - Arguments to find a CashRegister
     * @example
     * // Get one CashRegister
     * const cashRegister = await prisma.cashRegister.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CashRegisterFindFirstArgs>(args?: SelectSubset<T, CashRegisterFindFirstArgs<ExtArgs>>): Prisma__CashRegisterClient<$Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CashRegister that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashRegisterFindFirstOrThrowArgs} args - Arguments to find a CashRegister
     * @example
     * // Get one CashRegister
     * const cashRegister = await prisma.cashRegister.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CashRegisterFindFirstOrThrowArgs>(args?: SelectSubset<T, CashRegisterFindFirstOrThrowArgs<ExtArgs>>): Prisma__CashRegisterClient<$Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CashRegisters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashRegisterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CashRegisters
     * const cashRegisters = await prisma.cashRegister.findMany()
     * 
     * // Get first 10 CashRegisters
     * const cashRegisters = await prisma.cashRegister.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cashRegisterWithIdOnly = await prisma.cashRegister.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CashRegisterFindManyArgs>(args?: SelectSubset<T, CashRegisterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CashRegister.
     * @param {CashRegisterCreateArgs} args - Arguments to create a CashRegister.
     * @example
     * // Create one CashRegister
     * const CashRegister = await prisma.cashRegister.create({
     *   data: {
     *     // ... data to create a CashRegister
     *   }
     * })
     * 
     */
    create<T extends CashRegisterCreateArgs>(args: SelectSubset<T, CashRegisterCreateArgs<ExtArgs>>): Prisma__CashRegisterClient<$Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CashRegisters.
     * @param {CashRegisterCreateManyArgs} args - Arguments to create many CashRegisters.
     * @example
     * // Create many CashRegisters
     * const cashRegister = await prisma.cashRegister.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CashRegisterCreateManyArgs>(args?: SelectSubset<T, CashRegisterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CashRegisters and returns the data saved in the database.
     * @param {CashRegisterCreateManyAndReturnArgs} args - Arguments to create many CashRegisters.
     * @example
     * // Create many CashRegisters
     * const cashRegister = await prisma.cashRegister.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CashRegisters and only return the `id`
     * const cashRegisterWithIdOnly = await prisma.cashRegister.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CashRegisterCreateManyAndReturnArgs>(args?: SelectSubset<T, CashRegisterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CashRegister.
     * @param {CashRegisterDeleteArgs} args - Arguments to delete one CashRegister.
     * @example
     * // Delete one CashRegister
     * const CashRegister = await prisma.cashRegister.delete({
     *   where: {
     *     // ... filter to delete one CashRegister
     *   }
     * })
     * 
     */
    delete<T extends CashRegisterDeleteArgs>(args: SelectSubset<T, CashRegisterDeleteArgs<ExtArgs>>): Prisma__CashRegisterClient<$Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CashRegister.
     * @param {CashRegisterUpdateArgs} args - Arguments to update one CashRegister.
     * @example
     * // Update one CashRegister
     * const cashRegister = await prisma.cashRegister.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CashRegisterUpdateArgs>(args: SelectSubset<T, CashRegisterUpdateArgs<ExtArgs>>): Prisma__CashRegisterClient<$Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CashRegisters.
     * @param {CashRegisterDeleteManyArgs} args - Arguments to filter CashRegisters to delete.
     * @example
     * // Delete a few CashRegisters
     * const { count } = await prisma.cashRegister.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CashRegisterDeleteManyArgs>(args?: SelectSubset<T, CashRegisterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CashRegisters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashRegisterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CashRegisters
     * const cashRegister = await prisma.cashRegister.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CashRegisterUpdateManyArgs>(args: SelectSubset<T, CashRegisterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CashRegisters and returns the data updated in the database.
     * @param {CashRegisterUpdateManyAndReturnArgs} args - Arguments to update many CashRegisters.
     * @example
     * // Update many CashRegisters
     * const cashRegister = await prisma.cashRegister.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CashRegisters and only return the `id`
     * const cashRegisterWithIdOnly = await prisma.cashRegister.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CashRegisterUpdateManyAndReturnArgs>(args: SelectSubset<T, CashRegisterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CashRegister.
     * @param {CashRegisterUpsertArgs} args - Arguments to update or create a CashRegister.
     * @example
     * // Update or create a CashRegister
     * const cashRegister = await prisma.cashRegister.upsert({
     *   create: {
     *     // ... data to create a CashRegister
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CashRegister we want to update
     *   }
     * })
     */
    upsert<T extends CashRegisterUpsertArgs>(args: SelectSubset<T, CashRegisterUpsertArgs<ExtArgs>>): Prisma__CashRegisterClient<$Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CashRegisters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashRegisterCountArgs} args - Arguments to filter CashRegisters to count.
     * @example
     * // Count the number of CashRegisters
     * const count = await prisma.cashRegister.count({
     *   where: {
     *     // ... the filter for the CashRegisters we want to count
     *   }
     * })
    **/
    count<T extends CashRegisterCountArgs>(
      args?: Subset<T, CashRegisterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CashRegisterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CashRegister.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashRegisterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CashRegisterAggregateArgs>(args: Subset<T, CashRegisterAggregateArgs>): Prisma.PrismaPromise<GetCashRegisterAggregateType<T>>

    /**
     * Group by CashRegister.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashRegisterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CashRegisterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CashRegisterGroupByArgs['orderBy'] }
        : { orderBy?: CashRegisterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CashRegisterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCashRegisterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CashRegister model
   */
  readonly fields: CashRegisterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CashRegister.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CashRegisterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    withdrawals<T extends CashRegister$withdrawalsArgs<ExtArgs> = {}>(args?: Subset<T, CashRegister$withdrawalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashWithdrawalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sales<T extends CashRegister$salesArgs<ExtArgs> = {}>(args?: Subset<T, CashRegister$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CashRegister model
   */
  interface CashRegisterFieldRefs {
    readonly id: FieldRef<"CashRegister", 'BigInt'>
    readonly openedAt: FieldRef<"CashRegister", 'DateTime'>
    readonly closedAt: FieldRef<"CashRegister", 'DateTime'>
    readonly openingAmount: FieldRef<"CashRegister", 'Decimal'>
    readonly status: FieldRef<"CashRegister", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CashRegister findUnique
   */
  export type CashRegisterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashRegister
     */
    select?: CashRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashRegister
     */
    omit?: CashRegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashRegisterInclude<ExtArgs> | null
    /**
     * Filter, which CashRegister to fetch.
     */
    where: CashRegisterWhereUniqueInput
  }

  /**
   * CashRegister findUniqueOrThrow
   */
  export type CashRegisterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashRegister
     */
    select?: CashRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashRegister
     */
    omit?: CashRegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashRegisterInclude<ExtArgs> | null
    /**
     * Filter, which CashRegister to fetch.
     */
    where: CashRegisterWhereUniqueInput
  }

  /**
   * CashRegister findFirst
   */
  export type CashRegisterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashRegister
     */
    select?: CashRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashRegister
     */
    omit?: CashRegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashRegisterInclude<ExtArgs> | null
    /**
     * Filter, which CashRegister to fetch.
     */
    where?: CashRegisterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashRegisters to fetch.
     */
    orderBy?: CashRegisterOrderByWithRelationInput | CashRegisterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CashRegisters.
     */
    cursor?: CashRegisterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashRegisters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashRegisters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CashRegisters.
     */
    distinct?: CashRegisterScalarFieldEnum | CashRegisterScalarFieldEnum[]
  }

  /**
   * CashRegister findFirstOrThrow
   */
  export type CashRegisterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashRegister
     */
    select?: CashRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashRegister
     */
    omit?: CashRegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashRegisterInclude<ExtArgs> | null
    /**
     * Filter, which CashRegister to fetch.
     */
    where?: CashRegisterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashRegisters to fetch.
     */
    orderBy?: CashRegisterOrderByWithRelationInput | CashRegisterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CashRegisters.
     */
    cursor?: CashRegisterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashRegisters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashRegisters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CashRegisters.
     */
    distinct?: CashRegisterScalarFieldEnum | CashRegisterScalarFieldEnum[]
  }

  /**
   * CashRegister findMany
   */
  export type CashRegisterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashRegister
     */
    select?: CashRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashRegister
     */
    omit?: CashRegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashRegisterInclude<ExtArgs> | null
    /**
     * Filter, which CashRegisters to fetch.
     */
    where?: CashRegisterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashRegisters to fetch.
     */
    orderBy?: CashRegisterOrderByWithRelationInput | CashRegisterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CashRegisters.
     */
    cursor?: CashRegisterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashRegisters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashRegisters.
     */
    skip?: number
    distinct?: CashRegisterScalarFieldEnum | CashRegisterScalarFieldEnum[]
  }

  /**
   * CashRegister create
   */
  export type CashRegisterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashRegister
     */
    select?: CashRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashRegister
     */
    omit?: CashRegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashRegisterInclude<ExtArgs> | null
    /**
     * The data needed to create a CashRegister.
     */
    data: XOR<CashRegisterCreateInput, CashRegisterUncheckedCreateInput>
  }

  /**
   * CashRegister createMany
   */
  export type CashRegisterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CashRegisters.
     */
    data: CashRegisterCreateManyInput | CashRegisterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CashRegister createManyAndReturn
   */
  export type CashRegisterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashRegister
     */
    select?: CashRegisterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CashRegister
     */
    omit?: CashRegisterOmit<ExtArgs> | null
    /**
     * The data used to create many CashRegisters.
     */
    data: CashRegisterCreateManyInput | CashRegisterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CashRegister update
   */
  export type CashRegisterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashRegister
     */
    select?: CashRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashRegister
     */
    omit?: CashRegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashRegisterInclude<ExtArgs> | null
    /**
     * The data needed to update a CashRegister.
     */
    data: XOR<CashRegisterUpdateInput, CashRegisterUncheckedUpdateInput>
    /**
     * Choose, which CashRegister to update.
     */
    where: CashRegisterWhereUniqueInput
  }

  /**
   * CashRegister updateMany
   */
  export type CashRegisterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CashRegisters.
     */
    data: XOR<CashRegisterUpdateManyMutationInput, CashRegisterUncheckedUpdateManyInput>
    /**
     * Filter which CashRegisters to update
     */
    where?: CashRegisterWhereInput
    /**
     * Limit how many CashRegisters to update.
     */
    limit?: number
  }

  /**
   * CashRegister updateManyAndReturn
   */
  export type CashRegisterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashRegister
     */
    select?: CashRegisterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CashRegister
     */
    omit?: CashRegisterOmit<ExtArgs> | null
    /**
     * The data used to update CashRegisters.
     */
    data: XOR<CashRegisterUpdateManyMutationInput, CashRegisterUncheckedUpdateManyInput>
    /**
     * Filter which CashRegisters to update
     */
    where?: CashRegisterWhereInput
    /**
     * Limit how many CashRegisters to update.
     */
    limit?: number
  }

  /**
   * CashRegister upsert
   */
  export type CashRegisterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashRegister
     */
    select?: CashRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashRegister
     */
    omit?: CashRegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashRegisterInclude<ExtArgs> | null
    /**
     * The filter to search for the CashRegister to update in case it exists.
     */
    where: CashRegisterWhereUniqueInput
    /**
     * In case the CashRegister found by the `where` argument doesn't exist, create a new CashRegister with this data.
     */
    create: XOR<CashRegisterCreateInput, CashRegisterUncheckedCreateInput>
    /**
     * In case the CashRegister was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CashRegisterUpdateInput, CashRegisterUncheckedUpdateInput>
  }

  /**
   * CashRegister delete
   */
  export type CashRegisterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashRegister
     */
    select?: CashRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashRegister
     */
    omit?: CashRegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashRegisterInclude<ExtArgs> | null
    /**
     * Filter which CashRegister to delete.
     */
    where: CashRegisterWhereUniqueInput
  }

  /**
   * CashRegister deleteMany
   */
  export type CashRegisterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CashRegisters to delete
     */
    where?: CashRegisterWhereInput
    /**
     * Limit how many CashRegisters to delete.
     */
    limit?: number
  }

  /**
   * CashRegister.withdrawals
   */
  export type CashRegister$withdrawalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashWithdrawal
     */
    select?: CashWithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashWithdrawal
     */
    omit?: CashWithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashWithdrawalInclude<ExtArgs> | null
    where?: CashWithdrawalWhereInput
    orderBy?: CashWithdrawalOrderByWithRelationInput | CashWithdrawalOrderByWithRelationInput[]
    cursor?: CashWithdrawalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CashWithdrawalScalarFieldEnum | CashWithdrawalScalarFieldEnum[]
  }

  /**
   * CashRegister.sales
   */
  export type CashRegister$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    cursor?: SaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * CashRegister without action
   */
  export type CashRegisterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashRegister
     */
    select?: CashRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashRegister
     */
    omit?: CashRegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashRegisterInclude<ExtArgs> | null
  }


  /**
   * Model CashWithdrawal
   */

  export type AggregateCashWithdrawal = {
    _count: CashWithdrawalCountAggregateOutputType | null
    _avg: CashWithdrawalAvgAggregateOutputType | null
    _sum: CashWithdrawalSumAggregateOutputType | null
    _min: CashWithdrawalMinAggregateOutputType | null
    _max: CashWithdrawalMaxAggregateOutputType | null
  }

  export type CashWithdrawalAvgAggregateOutputType = {
    id: number | null
    cashRegisterId: number | null
    amount: Decimal | null
  }

  export type CashWithdrawalSumAggregateOutputType = {
    id: bigint | null
    cashRegisterId: bigint | null
    amount: Decimal | null
  }

  export type CashWithdrawalMinAggregateOutputType = {
    id: bigint | null
    cashRegisterId: bigint | null
    amount: Decimal | null
    reason: string | null
    createdAt: Date | null
  }

  export type CashWithdrawalMaxAggregateOutputType = {
    id: bigint | null
    cashRegisterId: bigint | null
    amount: Decimal | null
    reason: string | null
    createdAt: Date | null
  }

  export type CashWithdrawalCountAggregateOutputType = {
    id: number
    cashRegisterId: number
    amount: number
    reason: number
    createdAt: number
    _all: number
  }


  export type CashWithdrawalAvgAggregateInputType = {
    id?: true
    cashRegisterId?: true
    amount?: true
  }

  export type CashWithdrawalSumAggregateInputType = {
    id?: true
    cashRegisterId?: true
    amount?: true
  }

  export type CashWithdrawalMinAggregateInputType = {
    id?: true
    cashRegisterId?: true
    amount?: true
    reason?: true
    createdAt?: true
  }

  export type CashWithdrawalMaxAggregateInputType = {
    id?: true
    cashRegisterId?: true
    amount?: true
    reason?: true
    createdAt?: true
  }

  export type CashWithdrawalCountAggregateInputType = {
    id?: true
    cashRegisterId?: true
    amount?: true
    reason?: true
    createdAt?: true
    _all?: true
  }

  export type CashWithdrawalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CashWithdrawal to aggregate.
     */
    where?: CashWithdrawalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashWithdrawals to fetch.
     */
    orderBy?: CashWithdrawalOrderByWithRelationInput | CashWithdrawalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CashWithdrawalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashWithdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashWithdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CashWithdrawals
    **/
    _count?: true | CashWithdrawalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CashWithdrawalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CashWithdrawalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CashWithdrawalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CashWithdrawalMaxAggregateInputType
  }

  export type GetCashWithdrawalAggregateType<T extends CashWithdrawalAggregateArgs> = {
        [P in keyof T & keyof AggregateCashWithdrawal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCashWithdrawal[P]>
      : GetScalarType<T[P], AggregateCashWithdrawal[P]>
  }




  export type CashWithdrawalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CashWithdrawalWhereInput
    orderBy?: CashWithdrawalOrderByWithAggregationInput | CashWithdrawalOrderByWithAggregationInput[]
    by: CashWithdrawalScalarFieldEnum[] | CashWithdrawalScalarFieldEnum
    having?: CashWithdrawalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CashWithdrawalCountAggregateInputType | true
    _avg?: CashWithdrawalAvgAggregateInputType
    _sum?: CashWithdrawalSumAggregateInputType
    _min?: CashWithdrawalMinAggregateInputType
    _max?: CashWithdrawalMaxAggregateInputType
  }

  export type CashWithdrawalGroupByOutputType = {
    id: bigint
    cashRegisterId: bigint
    amount: Decimal
    reason: string | null
    createdAt: Date
    _count: CashWithdrawalCountAggregateOutputType | null
    _avg: CashWithdrawalAvgAggregateOutputType | null
    _sum: CashWithdrawalSumAggregateOutputType | null
    _min: CashWithdrawalMinAggregateOutputType | null
    _max: CashWithdrawalMaxAggregateOutputType | null
  }

  type GetCashWithdrawalGroupByPayload<T extends CashWithdrawalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CashWithdrawalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CashWithdrawalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CashWithdrawalGroupByOutputType[P]>
            : GetScalarType<T[P], CashWithdrawalGroupByOutputType[P]>
        }
      >
    >


  export type CashWithdrawalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cashRegisterId?: boolean
    amount?: boolean
    reason?: boolean
    createdAt?: boolean
    cashRegister?: boolean | CashRegisterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cashWithdrawal"]>

  export type CashWithdrawalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cashRegisterId?: boolean
    amount?: boolean
    reason?: boolean
    createdAt?: boolean
    cashRegister?: boolean | CashRegisterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cashWithdrawal"]>

  export type CashWithdrawalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cashRegisterId?: boolean
    amount?: boolean
    reason?: boolean
    createdAt?: boolean
    cashRegister?: boolean | CashRegisterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cashWithdrawal"]>

  export type CashWithdrawalSelectScalar = {
    id?: boolean
    cashRegisterId?: boolean
    amount?: boolean
    reason?: boolean
    createdAt?: boolean
  }

  export type CashWithdrawalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cashRegisterId" | "amount" | "reason" | "createdAt", ExtArgs["result"]["cashWithdrawal"]>
  export type CashWithdrawalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cashRegister?: boolean | CashRegisterDefaultArgs<ExtArgs>
  }
  export type CashWithdrawalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cashRegister?: boolean | CashRegisterDefaultArgs<ExtArgs>
  }
  export type CashWithdrawalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cashRegister?: boolean | CashRegisterDefaultArgs<ExtArgs>
  }

  export type $CashWithdrawalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CashWithdrawal"
    objects: {
      cashRegister: Prisma.$CashRegisterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      cashRegisterId: bigint
      amount: Prisma.Decimal
      reason: string | null
      createdAt: Date
    }, ExtArgs["result"]["cashWithdrawal"]>
    composites: {}
  }

  type CashWithdrawalGetPayload<S extends boolean | null | undefined | CashWithdrawalDefaultArgs> = $Result.GetResult<Prisma.$CashWithdrawalPayload, S>

  type CashWithdrawalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CashWithdrawalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CashWithdrawalCountAggregateInputType | true
    }

  export interface CashWithdrawalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CashWithdrawal'], meta: { name: 'CashWithdrawal' } }
    /**
     * Find zero or one CashWithdrawal that matches the filter.
     * @param {CashWithdrawalFindUniqueArgs} args - Arguments to find a CashWithdrawal
     * @example
     * // Get one CashWithdrawal
     * const cashWithdrawal = await prisma.cashWithdrawal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CashWithdrawalFindUniqueArgs>(args: SelectSubset<T, CashWithdrawalFindUniqueArgs<ExtArgs>>): Prisma__CashWithdrawalClient<$Result.GetResult<Prisma.$CashWithdrawalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CashWithdrawal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CashWithdrawalFindUniqueOrThrowArgs} args - Arguments to find a CashWithdrawal
     * @example
     * // Get one CashWithdrawal
     * const cashWithdrawal = await prisma.cashWithdrawal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CashWithdrawalFindUniqueOrThrowArgs>(args: SelectSubset<T, CashWithdrawalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CashWithdrawalClient<$Result.GetResult<Prisma.$CashWithdrawalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CashWithdrawal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashWithdrawalFindFirstArgs} args - Arguments to find a CashWithdrawal
     * @example
     * // Get one CashWithdrawal
     * const cashWithdrawal = await prisma.cashWithdrawal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CashWithdrawalFindFirstArgs>(args?: SelectSubset<T, CashWithdrawalFindFirstArgs<ExtArgs>>): Prisma__CashWithdrawalClient<$Result.GetResult<Prisma.$CashWithdrawalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CashWithdrawal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashWithdrawalFindFirstOrThrowArgs} args - Arguments to find a CashWithdrawal
     * @example
     * // Get one CashWithdrawal
     * const cashWithdrawal = await prisma.cashWithdrawal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CashWithdrawalFindFirstOrThrowArgs>(args?: SelectSubset<T, CashWithdrawalFindFirstOrThrowArgs<ExtArgs>>): Prisma__CashWithdrawalClient<$Result.GetResult<Prisma.$CashWithdrawalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CashWithdrawals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashWithdrawalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CashWithdrawals
     * const cashWithdrawals = await prisma.cashWithdrawal.findMany()
     * 
     * // Get first 10 CashWithdrawals
     * const cashWithdrawals = await prisma.cashWithdrawal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cashWithdrawalWithIdOnly = await prisma.cashWithdrawal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CashWithdrawalFindManyArgs>(args?: SelectSubset<T, CashWithdrawalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashWithdrawalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CashWithdrawal.
     * @param {CashWithdrawalCreateArgs} args - Arguments to create a CashWithdrawal.
     * @example
     * // Create one CashWithdrawal
     * const CashWithdrawal = await prisma.cashWithdrawal.create({
     *   data: {
     *     // ... data to create a CashWithdrawal
     *   }
     * })
     * 
     */
    create<T extends CashWithdrawalCreateArgs>(args: SelectSubset<T, CashWithdrawalCreateArgs<ExtArgs>>): Prisma__CashWithdrawalClient<$Result.GetResult<Prisma.$CashWithdrawalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CashWithdrawals.
     * @param {CashWithdrawalCreateManyArgs} args - Arguments to create many CashWithdrawals.
     * @example
     * // Create many CashWithdrawals
     * const cashWithdrawal = await prisma.cashWithdrawal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CashWithdrawalCreateManyArgs>(args?: SelectSubset<T, CashWithdrawalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CashWithdrawals and returns the data saved in the database.
     * @param {CashWithdrawalCreateManyAndReturnArgs} args - Arguments to create many CashWithdrawals.
     * @example
     * // Create many CashWithdrawals
     * const cashWithdrawal = await prisma.cashWithdrawal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CashWithdrawals and only return the `id`
     * const cashWithdrawalWithIdOnly = await prisma.cashWithdrawal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CashWithdrawalCreateManyAndReturnArgs>(args?: SelectSubset<T, CashWithdrawalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashWithdrawalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CashWithdrawal.
     * @param {CashWithdrawalDeleteArgs} args - Arguments to delete one CashWithdrawal.
     * @example
     * // Delete one CashWithdrawal
     * const CashWithdrawal = await prisma.cashWithdrawal.delete({
     *   where: {
     *     // ... filter to delete one CashWithdrawal
     *   }
     * })
     * 
     */
    delete<T extends CashWithdrawalDeleteArgs>(args: SelectSubset<T, CashWithdrawalDeleteArgs<ExtArgs>>): Prisma__CashWithdrawalClient<$Result.GetResult<Prisma.$CashWithdrawalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CashWithdrawal.
     * @param {CashWithdrawalUpdateArgs} args - Arguments to update one CashWithdrawal.
     * @example
     * // Update one CashWithdrawal
     * const cashWithdrawal = await prisma.cashWithdrawal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CashWithdrawalUpdateArgs>(args: SelectSubset<T, CashWithdrawalUpdateArgs<ExtArgs>>): Prisma__CashWithdrawalClient<$Result.GetResult<Prisma.$CashWithdrawalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CashWithdrawals.
     * @param {CashWithdrawalDeleteManyArgs} args - Arguments to filter CashWithdrawals to delete.
     * @example
     * // Delete a few CashWithdrawals
     * const { count } = await prisma.cashWithdrawal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CashWithdrawalDeleteManyArgs>(args?: SelectSubset<T, CashWithdrawalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CashWithdrawals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashWithdrawalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CashWithdrawals
     * const cashWithdrawal = await prisma.cashWithdrawal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CashWithdrawalUpdateManyArgs>(args: SelectSubset<T, CashWithdrawalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CashWithdrawals and returns the data updated in the database.
     * @param {CashWithdrawalUpdateManyAndReturnArgs} args - Arguments to update many CashWithdrawals.
     * @example
     * // Update many CashWithdrawals
     * const cashWithdrawal = await prisma.cashWithdrawal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CashWithdrawals and only return the `id`
     * const cashWithdrawalWithIdOnly = await prisma.cashWithdrawal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CashWithdrawalUpdateManyAndReturnArgs>(args: SelectSubset<T, CashWithdrawalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashWithdrawalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CashWithdrawal.
     * @param {CashWithdrawalUpsertArgs} args - Arguments to update or create a CashWithdrawal.
     * @example
     * // Update or create a CashWithdrawal
     * const cashWithdrawal = await prisma.cashWithdrawal.upsert({
     *   create: {
     *     // ... data to create a CashWithdrawal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CashWithdrawal we want to update
     *   }
     * })
     */
    upsert<T extends CashWithdrawalUpsertArgs>(args: SelectSubset<T, CashWithdrawalUpsertArgs<ExtArgs>>): Prisma__CashWithdrawalClient<$Result.GetResult<Prisma.$CashWithdrawalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CashWithdrawals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashWithdrawalCountArgs} args - Arguments to filter CashWithdrawals to count.
     * @example
     * // Count the number of CashWithdrawals
     * const count = await prisma.cashWithdrawal.count({
     *   where: {
     *     // ... the filter for the CashWithdrawals we want to count
     *   }
     * })
    **/
    count<T extends CashWithdrawalCountArgs>(
      args?: Subset<T, CashWithdrawalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CashWithdrawalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CashWithdrawal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashWithdrawalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CashWithdrawalAggregateArgs>(args: Subset<T, CashWithdrawalAggregateArgs>): Prisma.PrismaPromise<GetCashWithdrawalAggregateType<T>>

    /**
     * Group by CashWithdrawal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashWithdrawalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CashWithdrawalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CashWithdrawalGroupByArgs['orderBy'] }
        : { orderBy?: CashWithdrawalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CashWithdrawalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCashWithdrawalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CashWithdrawal model
   */
  readonly fields: CashWithdrawalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CashWithdrawal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CashWithdrawalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cashRegister<T extends CashRegisterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CashRegisterDefaultArgs<ExtArgs>>): Prisma__CashRegisterClient<$Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CashWithdrawal model
   */
  interface CashWithdrawalFieldRefs {
    readonly id: FieldRef<"CashWithdrawal", 'BigInt'>
    readonly cashRegisterId: FieldRef<"CashWithdrawal", 'BigInt'>
    readonly amount: FieldRef<"CashWithdrawal", 'Decimal'>
    readonly reason: FieldRef<"CashWithdrawal", 'String'>
    readonly createdAt: FieldRef<"CashWithdrawal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CashWithdrawal findUnique
   */
  export type CashWithdrawalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashWithdrawal
     */
    select?: CashWithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashWithdrawal
     */
    omit?: CashWithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashWithdrawalInclude<ExtArgs> | null
    /**
     * Filter, which CashWithdrawal to fetch.
     */
    where: CashWithdrawalWhereUniqueInput
  }

  /**
   * CashWithdrawal findUniqueOrThrow
   */
  export type CashWithdrawalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashWithdrawal
     */
    select?: CashWithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashWithdrawal
     */
    omit?: CashWithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashWithdrawalInclude<ExtArgs> | null
    /**
     * Filter, which CashWithdrawal to fetch.
     */
    where: CashWithdrawalWhereUniqueInput
  }

  /**
   * CashWithdrawal findFirst
   */
  export type CashWithdrawalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashWithdrawal
     */
    select?: CashWithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashWithdrawal
     */
    omit?: CashWithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashWithdrawalInclude<ExtArgs> | null
    /**
     * Filter, which CashWithdrawal to fetch.
     */
    where?: CashWithdrawalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashWithdrawals to fetch.
     */
    orderBy?: CashWithdrawalOrderByWithRelationInput | CashWithdrawalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CashWithdrawals.
     */
    cursor?: CashWithdrawalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashWithdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashWithdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CashWithdrawals.
     */
    distinct?: CashWithdrawalScalarFieldEnum | CashWithdrawalScalarFieldEnum[]
  }

  /**
   * CashWithdrawal findFirstOrThrow
   */
  export type CashWithdrawalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashWithdrawal
     */
    select?: CashWithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashWithdrawal
     */
    omit?: CashWithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashWithdrawalInclude<ExtArgs> | null
    /**
     * Filter, which CashWithdrawal to fetch.
     */
    where?: CashWithdrawalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashWithdrawals to fetch.
     */
    orderBy?: CashWithdrawalOrderByWithRelationInput | CashWithdrawalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CashWithdrawals.
     */
    cursor?: CashWithdrawalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashWithdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashWithdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CashWithdrawals.
     */
    distinct?: CashWithdrawalScalarFieldEnum | CashWithdrawalScalarFieldEnum[]
  }

  /**
   * CashWithdrawal findMany
   */
  export type CashWithdrawalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashWithdrawal
     */
    select?: CashWithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashWithdrawal
     */
    omit?: CashWithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashWithdrawalInclude<ExtArgs> | null
    /**
     * Filter, which CashWithdrawals to fetch.
     */
    where?: CashWithdrawalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashWithdrawals to fetch.
     */
    orderBy?: CashWithdrawalOrderByWithRelationInput | CashWithdrawalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CashWithdrawals.
     */
    cursor?: CashWithdrawalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashWithdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashWithdrawals.
     */
    skip?: number
    distinct?: CashWithdrawalScalarFieldEnum | CashWithdrawalScalarFieldEnum[]
  }

  /**
   * CashWithdrawal create
   */
  export type CashWithdrawalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashWithdrawal
     */
    select?: CashWithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashWithdrawal
     */
    omit?: CashWithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashWithdrawalInclude<ExtArgs> | null
    /**
     * The data needed to create a CashWithdrawal.
     */
    data: XOR<CashWithdrawalCreateInput, CashWithdrawalUncheckedCreateInput>
  }

  /**
   * CashWithdrawal createMany
   */
  export type CashWithdrawalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CashWithdrawals.
     */
    data: CashWithdrawalCreateManyInput | CashWithdrawalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CashWithdrawal createManyAndReturn
   */
  export type CashWithdrawalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashWithdrawal
     */
    select?: CashWithdrawalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CashWithdrawal
     */
    omit?: CashWithdrawalOmit<ExtArgs> | null
    /**
     * The data used to create many CashWithdrawals.
     */
    data: CashWithdrawalCreateManyInput | CashWithdrawalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashWithdrawalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CashWithdrawal update
   */
  export type CashWithdrawalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashWithdrawal
     */
    select?: CashWithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashWithdrawal
     */
    omit?: CashWithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashWithdrawalInclude<ExtArgs> | null
    /**
     * The data needed to update a CashWithdrawal.
     */
    data: XOR<CashWithdrawalUpdateInput, CashWithdrawalUncheckedUpdateInput>
    /**
     * Choose, which CashWithdrawal to update.
     */
    where: CashWithdrawalWhereUniqueInput
  }

  /**
   * CashWithdrawal updateMany
   */
  export type CashWithdrawalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CashWithdrawals.
     */
    data: XOR<CashWithdrawalUpdateManyMutationInput, CashWithdrawalUncheckedUpdateManyInput>
    /**
     * Filter which CashWithdrawals to update
     */
    where?: CashWithdrawalWhereInput
    /**
     * Limit how many CashWithdrawals to update.
     */
    limit?: number
  }

  /**
   * CashWithdrawal updateManyAndReturn
   */
  export type CashWithdrawalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashWithdrawal
     */
    select?: CashWithdrawalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CashWithdrawal
     */
    omit?: CashWithdrawalOmit<ExtArgs> | null
    /**
     * The data used to update CashWithdrawals.
     */
    data: XOR<CashWithdrawalUpdateManyMutationInput, CashWithdrawalUncheckedUpdateManyInput>
    /**
     * Filter which CashWithdrawals to update
     */
    where?: CashWithdrawalWhereInput
    /**
     * Limit how many CashWithdrawals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashWithdrawalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CashWithdrawal upsert
   */
  export type CashWithdrawalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashWithdrawal
     */
    select?: CashWithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashWithdrawal
     */
    omit?: CashWithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashWithdrawalInclude<ExtArgs> | null
    /**
     * The filter to search for the CashWithdrawal to update in case it exists.
     */
    where: CashWithdrawalWhereUniqueInput
    /**
     * In case the CashWithdrawal found by the `where` argument doesn't exist, create a new CashWithdrawal with this data.
     */
    create: XOR<CashWithdrawalCreateInput, CashWithdrawalUncheckedCreateInput>
    /**
     * In case the CashWithdrawal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CashWithdrawalUpdateInput, CashWithdrawalUncheckedUpdateInput>
  }

  /**
   * CashWithdrawal delete
   */
  export type CashWithdrawalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashWithdrawal
     */
    select?: CashWithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashWithdrawal
     */
    omit?: CashWithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashWithdrawalInclude<ExtArgs> | null
    /**
     * Filter which CashWithdrawal to delete.
     */
    where: CashWithdrawalWhereUniqueInput
  }

  /**
   * CashWithdrawal deleteMany
   */
  export type CashWithdrawalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CashWithdrawals to delete
     */
    where?: CashWithdrawalWhereInput
    /**
     * Limit how many CashWithdrawals to delete.
     */
    limit?: number
  }

  /**
   * CashWithdrawal without action
   */
  export type CashWithdrawalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashWithdrawal
     */
    select?: CashWithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashWithdrawal
     */
    omit?: CashWithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashWithdrawalInclude<ExtArgs> | null
  }


  /**
   * Model Sale
   */

  export type AggregateSale = {
    _count: SaleCountAggregateOutputType | null
    _avg: SaleAvgAggregateOutputType | null
    _sum: SaleSumAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  export type SaleAvgAggregateOutputType = {
    id: number | null
    customerId: number | null
    cashRegisterId: number | null
    discount: Decimal | null
    surcharge: Decimal | null
    total: Decimal | null
    installments: number | null
    downPayment: Decimal | null
  }

  export type SaleSumAggregateOutputType = {
    id: bigint | null
    customerId: bigint | null
    cashRegisterId: bigint | null
    discount: Decimal | null
    surcharge: Decimal | null
    total: Decimal | null
    installments: number | null
    downPayment: Decimal | null
  }

  export type SaleMinAggregateOutputType = {
    id: bigint | null
    customerId: bigint | null
    customerNameFree: string | null
    cashRegisterId: bigint | null
    discount: Decimal | null
    surcharge: Decimal | null
    total: Decimal | null
    paymentMethod: string | null
    installments: number | null
    downPayment: Decimal | null
    createdAt: Date | null
  }

  export type SaleMaxAggregateOutputType = {
    id: bigint | null
    customerId: bigint | null
    customerNameFree: string | null
    cashRegisterId: bigint | null
    discount: Decimal | null
    surcharge: Decimal | null
    total: Decimal | null
    paymentMethod: string | null
    installments: number | null
    downPayment: Decimal | null
    createdAt: Date | null
  }

  export type SaleCountAggregateOutputType = {
    id: number
    customerId: number
    customerNameFree: number
    cashRegisterId: number
    discount: number
    surcharge: number
    total: number
    paymentMethod: number
    installments: number
    downPayment: number
    createdAt: number
    _all: number
  }


  export type SaleAvgAggregateInputType = {
    id?: true
    customerId?: true
    cashRegisterId?: true
    discount?: true
    surcharge?: true
    total?: true
    installments?: true
    downPayment?: true
  }

  export type SaleSumAggregateInputType = {
    id?: true
    customerId?: true
    cashRegisterId?: true
    discount?: true
    surcharge?: true
    total?: true
    installments?: true
    downPayment?: true
  }

  export type SaleMinAggregateInputType = {
    id?: true
    customerId?: true
    customerNameFree?: true
    cashRegisterId?: true
    discount?: true
    surcharge?: true
    total?: true
    paymentMethod?: true
    installments?: true
    downPayment?: true
    createdAt?: true
  }

  export type SaleMaxAggregateInputType = {
    id?: true
    customerId?: true
    customerNameFree?: true
    cashRegisterId?: true
    discount?: true
    surcharge?: true
    total?: true
    paymentMethod?: true
    installments?: true
    downPayment?: true
    createdAt?: true
  }

  export type SaleCountAggregateInputType = {
    id?: true
    customerId?: true
    customerNameFree?: true
    cashRegisterId?: true
    discount?: true
    surcharge?: true
    total?: true
    paymentMethod?: true
    installments?: true
    downPayment?: true
    createdAt?: true
    _all?: true
  }

  export type SaleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sale to aggregate.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sales
    **/
    _count?: true | SaleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaleMaxAggregateInputType
  }

  export type GetSaleAggregateType<T extends SaleAggregateArgs> = {
        [P in keyof T & keyof AggregateSale]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSale[P]>
      : GetScalarType<T[P], AggregateSale[P]>
  }




  export type SaleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithAggregationInput | SaleOrderByWithAggregationInput[]
    by: SaleScalarFieldEnum[] | SaleScalarFieldEnum
    having?: SaleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaleCountAggregateInputType | true
    _avg?: SaleAvgAggregateInputType
    _sum?: SaleSumAggregateInputType
    _min?: SaleMinAggregateInputType
    _max?: SaleMaxAggregateInputType
  }

  export type SaleGroupByOutputType = {
    id: bigint
    customerId: bigint | null
    customerNameFree: string | null
    cashRegisterId: bigint | null
    discount: Decimal
    surcharge: Decimal
    total: Decimal
    paymentMethod: string
    installments: number | null
    downPayment: Decimal | null
    createdAt: Date
    _count: SaleCountAggregateOutputType | null
    _avg: SaleAvgAggregateOutputType | null
    _sum: SaleSumAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  type GetSaleGroupByPayload<T extends SaleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaleGroupByOutputType[P]>
            : GetScalarType<T[P], SaleGroupByOutputType[P]>
        }
      >
    >


  export type SaleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    customerNameFree?: boolean
    cashRegisterId?: boolean
    discount?: boolean
    surcharge?: boolean
    total?: boolean
    paymentMethod?: boolean
    installments?: boolean
    downPayment?: boolean
    createdAt?: boolean
    customer?: boolean | Sale$customerArgs<ExtArgs>
    cashRegister?: boolean | Sale$cashRegisterArgs<ExtArgs>
    items?: boolean | Sale$itemsArgs<ExtArgs>
    crediarioAccount?: boolean | Sale$crediarioAccountArgs<ExtArgs>
    _count?: boolean | SaleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    customerNameFree?: boolean
    cashRegisterId?: boolean
    discount?: boolean
    surcharge?: boolean
    total?: boolean
    paymentMethod?: boolean
    installments?: boolean
    downPayment?: boolean
    createdAt?: boolean
    customer?: boolean | Sale$customerArgs<ExtArgs>
    cashRegister?: boolean | Sale$cashRegisterArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    customerNameFree?: boolean
    cashRegisterId?: boolean
    discount?: boolean
    surcharge?: boolean
    total?: boolean
    paymentMethod?: boolean
    installments?: boolean
    downPayment?: boolean
    createdAt?: boolean
    customer?: boolean | Sale$customerArgs<ExtArgs>
    cashRegister?: boolean | Sale$cashRegisterArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectScalar = {
    id?: boolean
    customerId?: boolean
    customerNameFree?: boolean
    cashRegisterId?: boolean
    discount?: boolean
    surcharge?: boolean
    total?: boolean
    paymentMethod?: boolean
    installments?: boolean
    downPayment?: boolean
    createdAt?: boolean
  }

  export type SaleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "customerNameFree" | "cashRegisterId" | "discount" | "surcharge" | "total" | "paymentMethod" | "installments" | "downPayment" | "createdAt", ExtArgs["result"]["sale"]>
  export type SaleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | Sale$customerArgs<ExtArgs>
    cashRegister?: boolean | Sale$cashRegisterArgs<ExtArgs>
    items?: boolean | Sale$itemsArgs<ExtArgs>
    crediarioAccount?: boolean | Sale$crediarioAccountArgs<ExtArgs>
    _count?: boolean | SaleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SaleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | Sale$customerArgs<ExtArgs>
    cashRegister?: boolean | Sale$cashRegisterArgs<ExtArgs>
  }
  export type SaleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | Sale$customerArgs<ExtArgs>
    cashRegister?: boolean | Sale$cashRegisterArgs<ExtArgs>
  }

  export type $SalePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sale"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs> | null
      cashRegister: Prisma.$CashRegisterPayload<ExtArgs> | null
      items: Prisma.$SaleItemPayload<ExtArgs>[]
      crediarioAccount: Prisma.$CrediarioAccountPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      customerId: bigint | null
      customerNameFree: string | null
      cashRegisterId: bigint | null
      discount: Prisma.Decimal
      surcharge: Prisma.Decimal
      total: Prisma.Decimal
      paymentMethod: string
      installments: number | null
      downPayment: Prisma.Decimal | null
      createdAt: Date
    }, ExtArgs["result"]["sale"]>
    composites: {}
  }

  type SaleGetPayload<S extends boolean | null | undefined | SaleDefaultArgs> = $Result.GetResult<Prisma.$SalePayload, S>

  type SaleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SaleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SaleCountAggregateInputType | true
    }

  export interface SaleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sale'], meta: { name: 'Sale' } }
    /**
     * Find zero or one Sale that matches the filter.
     * @param {SaleFindUniqueArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaleFindUniqueArgs>(args: SelectSubset<T, SaleFindUniqueArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sale that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SaleFindUniqueOrThrowArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaleFindUniqueOrThrowArgs>(args: SelectSubset<T, SaleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sale that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindFirstArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaleFindFirstArgs>(args?: SelectSubset<T, SaleFindFirstArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sale that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindFirstOrThrowArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaleFindFirstOrThrowArgs>(args?: SelectSubset<T, SaleFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales
     * const sales = await prisma.sale.findMany()
     * 
     * // Get first 10 Sales
     * const sales = await prisma.sale.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saleWithIdOnly = await prisma.sale.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SaleFindManyArgs>(args?: SelectSubset<T, SaleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sale.
     * @param {SaleCreateArgs} args - Arguments to create a Sale.
     * @example
     * // Create one Sale
     * const Sale = await prisma.sale.create({
     *   data: {
     *     // ... data to create a Sale
     *   }
     * })
     * 
     */
    create<T extends SaleCreateArgs>(args: SelectSubset<T, SaleCreateArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sales.
     * @param {SaleCreateManyArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sale = await prisma.sale.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaleCreateManyArgs>(args?: SelectSubset<T, SaleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sales and returns the data saved in the database.
     * @param {SaleCreateManyAndReturnArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sale = await prisma.sale.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sales and only return the `id`
     * const saleWithIdOnly = await prisma.sale.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SaleCreateManyAndReturnArgs>(args?: SelectSubset<T, SaleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sale.
     * @param {SaleDeleteArgs} args - Arguments to delete one Sale.
     * @example
     * // Delete one Sale
     * const Sale = await prisma.sale.delete({
     *   where: {
     *     // ... filter to delete one Sale
     *   }
     * })
     * 
     */
    delete<T extends SaleDeleteArgs>(args: SelectSubset<T, SaleDeleteArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sale.
     * @param {SaleUpdateArgs} args - Arguments to update one Sale.
     * @example
     * // Update one Sale
     * const sale = await prisma.sale.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaleUpdateArgs>(args: SelectSubset<T, SaleUpdateArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sales.
     * @param {SaleDeleteManyArgs} args - Arguments to filter Sales to delete.
     * @example
     * // Delete a few Sales
     * const { count } = await prisma.sale.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaleDeleteManyArgs>(args?: SelectSubset<T, SaleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales
     * const sale = await prisma.sale.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaleUpdateManyArgs>(args: SelectSubset<T, SaleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales and returns the data updated in the database.
     * @param {SaleUpdateManyAndReturnArgs} args - Arguments to update many Sales.
     * @example
     * // Update many Sales
     * const sale = await prisma.sale.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sales and only return the `id`
     * const saleWithIdOnly = await prisma.sale.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SaleUpdateManyAndReturnArgs>(args: SelectSubset<T, SaleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sale.
     * @param {SaleUpsertArgs} args - Arguments to update or create a Sale.
     * @example
     * // Update or create a Sale
     * const sale = await prisma.sale.upsert({
     *   create: {
     *     // ... data to create a Sale
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sale we want to update
     *   }
     * })
     */
    upsert<T extends SaleUpsertArgs>(args: SelectSubset<T, SaleUpsertArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleCountArgs} args - Arguments to filter Sales to count.
     * @example
     * // Count the number of Sales
     * const count = await prisma.sale.count({
     *   where: {
     *     // ... the filter for the Sales we want to count
     *   }
     * })
    **/
    count<T extends SaleCountArgs>(
      args?: Subset<T, SaleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SaleAggregateArgs>(args: Subset<T, SaleAggregateArgs>): Prisma.PrismaPromise<GetSaleAggregateType<T>>

    /**
     * Group by Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SaleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaleGroupByArgs['orderBy'] }
        : { orderBy?: SaleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SaleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sale model
   */
  readonly fields: SaleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sale.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends Sale$customerArgs<ExtArgs> = {}>(args?: Subset<T, Sale$customerArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    cashRegister<T extends Sale$cashRegisterArgs<ExtArgs> = {}>(args?: Subset<T, Sale$cashRegisterArgs<ExtArgs>>): Prisma__CashRegisterClient<$Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    items<T extends Sale$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Sale$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    crediarioAccount<T extends Sale$crediarioAccountArgs<ExtArgs> = {}>(args?: Subset<T, Sale$crediarioAccountArgs<ExtArgs>>): Prisma__CrediarioAccountClient<$Result.GetResult<Prisma.$CrediarioAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sale model
   */
  interface SaleFieldRefs {
    readonly id: FieldRef<"Sale", 'BigInt'>
    readonly customerId: FieldRef<"Sale", 'BigInt'>
    readonly customerNameFree: FieldRef<"Sale", 'String'>
    readonly cashRegisterId: FieldRef<"Sale", 'BigInt'>
    readonly discount: FieldRef<"Sale", 'Decimal'>
    readonly surcharge: FieldRef<"Sale", 'Decimal'>
    readonly total: FieldRef<"Sale", 'Decimal'>
    readonly paymentMethod: FieldRef<"Sale", 'String'>
    readonly installments: FieldRef<"Sale", 'Int'>
    readonly downPayment: FieldRef<"Sale", 'Decimal'>
    readonly createdAt: FieldRef<"Sale", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sale findUnique
   */
  export type SaleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale findUniqueOrThrow
   */
  export type SaleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale findFirst
   */
  export type SaleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale findFirstOrThrow
   */
  export type SaleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale findMany
   */
  export type SaleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale create
   */
  export type SaleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The data needed to create a Sale.
     */
    data: XOR<SaleCreateInput, SaleUncheckedCreateInput>
  }

  /**
   * Sale createMany
   */
  export type SaleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sales.
     */
    data: SaleCreateManyInput | SaleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sale createManyAndReturn
   */
  export type SaleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * The data used to create many Sales.
     */
    data: SaleCreateManyInput | SaleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sale update
   */
  export type SaleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The data needed to update a Sale.
     */
    data: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>
    /**
     * Choose, which Sale to update.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale updateMany
   */
  export type SaleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sales.
     */
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
  }

  /**
   * Sale updateManyAndReturn
   */
  export type SaleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * The data used to update Sales.
     */
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sale upsert
   */
  export type SaleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The filter to search for the Sale to update in case it exists.
     */
    where: SaleWhereUniqueInput
    /**
     * In case the Sale found by the `where` argument doesn't exist, create a new Sale with this data.
     */
    create: XOR<SaleCreateInput, SaleUncheckedCreateInput>
    /**
     * In case the Sale was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>
  }

  /**
   * Sale delete
   */
  export type SaleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter which Sale to delete.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale deleteMany
   */
  export type SaleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sales to delete
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to delete.
     */
    limit?: number
  }

  /**
   * Sale.customer
   */
  export type Sale$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
  }

  /**
   * Sale.cashRegister
   */
  export type Sale$cashRegisterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashRegister
     */
    select?: CashRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashRegister
     */
    omit?: CashRegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashRegisterInclude<ExtArgs> | null
    where?: CashRegisterWhereInput
  }

  /**
   * Sale.items
   */
  export type Sale$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    where?: SaleItemWhereInput
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    cursor?: SaleItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleItemScalarFieldEnum | SaleItemScalarFieldEnum[]
  }

  /**
   * Sale.crediarioAccount
   */
  export type Sale$crediarioAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrediarioAccount
     */
    select?: CrediarioAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrediarioAccount
     */
    omit?: CrediarioAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrediarioAccountInclude<ExtArgs> | null
    where?: CrediarioAccountWhereInput
  }

  /**
   * Sale without action
   */
  export type SaleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
  }


  /**
   * Model SaleItem
   */

  export type AggregateSaleItem = {
    _count: SaleItemCountAggregateOutputType | null
    _avg: SaleItemAvgAggregateOutputType | null
    _sum: SaleItemSumAggregateOutputType | null
    _min: SaleItemMinAggregateOutputType | null
    _max: SaleItemMaxAggregateOutputType | null
  }

  export type SaleItemAvgAggregateOutputType = {
    id: number | null
    saleId: number | null
    productId: number | null
    quantity: number | null
    unitPrice: Decimal | null
  }

  export type SaleItemSumAggregateOutputType = {
    id: bigint | null
    saleId: bigint | null
    productId: bigint | null
    quantity: number | null
    unitPrice: Decimal | null
  }

  export type SaleItemMinAggregateOutputType = {
    id: bigint | null
    saleId: bigint | null
    productId: bigint | null
    quantity: number | null
    unitPrice: Decimal | null
  }

  export type SaleItemMaxAggregateOutputType = {
    id: bigint | null
    saleId: bigint | null
    productId: bigint | null
    quantity: number | null
    unitPrice: Decimal | null
  }

  export type SaleItemCountAggregateOutputType = {
    id: number
    saleId: number
    productId: number
    quantity: number
    unitPrice: number
    _all: number
  }


  export type SaleItemAvgAggregateInputType = {
    id?: true
    saleId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
  }

  export type SaleItemSumAggregateInputType = {
    id?: true
    saleId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
  }

  export type SaleItemMinAggregateInputType = {
    id?: true
    saleId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
  }

  export type SaleItemMaxAggregateInputType = {
    id?: true
    saleId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
  }

  export type SaleItemCountAggregateInputType = {
    id?: true
    saleId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
    _all?: true
  }

  export type SaleItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SaleItem to aggregate.
     */
    where?: SaleItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleItems to fetch.
     */
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaleItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SaleItems
    **/
    _count?: true | SaleItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaleItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaleItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaleItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaleItemMaxAggregateInputType
  }

  export type GetSaleItemAggregateType<T extends SaleItemAggregateArgs> = {
        [P in keyof T & keyof AggregateSaleItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSaleItem[P]>
      : GetScalarType<T[P], AggregateSaleItem[P]>
  }




  export type SaleItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleItemWhereInput
    orderBy?: SaleItemOrderByWithAggregationInput | SaleItemOrderByWithAggregationInput[]
    by: SaleItemScalarFieldEnum[] | SaleItemScalarFieldEnum
    having?: SaleItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaleItemCountAggregateInputType | true
    _avg?: SaleItemAvgAggregateInputType
    _sum?: SaleItemSumAggregateInputType
    _min?: SaleItemMinAggregateInputType
    _max?: SaleItemMaxAggregateInputType
  }

  export type SaleItemGroupByOutputType = {
    id: bigint
    saleId: bigint
    productId: bigint
    quantity: number
    unitPrice: Decimal
    _count: SaleItemCountAggregateOutputType | null
    _avg: SaleItemAvgAggregateOutputType | null
    _sum: SaleItemSumAggregateOutputType | null
    _min: SaleItemMinAggregateOutputType | null
    _max: SaleItemMaxAggregateOutputType | null
  }

  type GetSaleItemGroupByPayload<T extends SaleItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaleItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaleItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaleItemGroupByOutputType[P]>
            : GetScalarType<T[P], SaleItemGroupByOutputType[P]>
        }
      >
    >


  export type SaleItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saleId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    sale?: boolean | SaleDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saleItem"]>

  export type SaleItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saleId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    sale?: boolean | SaleDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saleItem"]>

  export type SaleItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saleId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    sale?: boolean | SaleDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saleItem"]>

  export type SaleItemSelectScalar = {
    id?: boolean
    saleId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
  }

  export type SaleItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "saleId" | "productId" | "quantity" | "unitPrice", ExtArgs["result"]["saleItem"]>
  export type SaleItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sale?: boolean | SaleDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type SaleItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sale?: boolean | SaleDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type SaleItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sale?: boolean | SaleDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $SaleItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SaleItem"
    objects: {
      sale: Prisma.$SalePayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      saleId: bigint
      productId: bigint
      quantity: number
      unitPrice: Prisma.Decimal
    }, ExtArgs["result"]["saleItem"]>
    composites: {}
  }

  type SaleItemGetPayload<S extends boolean | null | undefined | SaleItemDefaultArgs> = $Result.GetResult<Prisma.$SaleItemPayload, S>

  type SaleItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SaleItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SaleItemCountAggregateInputType | true
    }

  export interface SaleItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SaleItem'], meta: { name: 'SaleItem' } }
    /**
     * Find zero or one SaleItem that matches the filter.
     * @param {SaleItemFindUniqueArgs} args - Arguments to find a SaleItem
     * @example
     * // Get one SaleItem
     * const saleItem = await prisma.saleItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaleItemFindUniqueArgs>(args: SelectSubset<T, SaleItemFindUniqueArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SaleItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SaleItemFindUniqueOrThrowArgs} args - Arguments to find a SaleItem
     * @example
     * // Get one SaleItem
     * const saleItem = await prisma.saleItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaleItemFindUniqueOrThrowArgs>(args: SelectSubset<T, SaleItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SaleItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemFindFirstArgs} args - Arguments to find a SaleItem
     * @example
     * // Get one SaleItem
     * const saleItem = await prisma.saleItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaleItemFindFirstArgs>(args?: SelectSubset<T, SaleItemFindFirstArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SaleItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemFindFirstOrThrowArgs} args - Arguments to find a SaleItem
     * @example
     * // Get one SaleItem
     * const saleItem = await prisma.saleItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaleItemFindFirstOrThrowArgs>(args?: SelectSubset<T, SaleItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SaleItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SaleItems
     * const saleItems = await prisma.saleItem.findMany()
     * 
     * // Get first 10 SaleItems
     * const saleItems = await prisma.saleItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saleItemWithIdOnly = await prisma.saleItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SaleItemFindManyArgs>(args?: SelectSubset<T, SaleItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SaleItem.
     * @param {SaleItemCreateArgs} args - Arguments to create a SaleItem.
     * @example
     * // Create one SaleItem
     * const SaleItem = await prisma.saleItem.create({
     *   data: {
     *     // ... data to create a SaleItem
     *   }
     * })
     * 
     */
    create<T extends SaleItemCreateArgs>(args: SelectSubset<T, SaleItemCreateArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SaleItems.
     * @param {SaleItemCreateManyArgs} args - Arguments to create many SaleItems.
     * @example
     * // Create many SaleItems
     * const saleItem = await prisma.saleItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaleItemCreateManyArgs>(args?: SelectSubset<T, SaleItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SaleItems and returns the data saved in the database.
     * @param {SaleItemCreateManyAndReturnArgs} args - Arguments to create many SaleItems.
     * @example
     * // Create many SaleItems
     * const saleItem = await prisma.saleItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SaleItems and only return the `id`
     * const saleItemWithIdOnly = await prisma.saleItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SaleItemCreateManyAndReturnArgs>(args?: SelectSubset<T, SaleItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SaleItem.
     * @param {SaleItemDeleteArgs} args - Arguments to delete one SaleItem.
     * @example
     * // Delete one SaleItem
     * const SaleItem = await prisma.saleItem.delete({
     *   where: {
     *     // ... filter to delete one SaleItem
     *   }
     * })
     * 
     */
    delete<T extends SaleItemDeleteArgs>(args: SelectSubset<T, SaleItemDeleteArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SaleItem.
     * @param {SaleItemUpdateArgs} args - Arguments to update one SaleItem.
     * @example
     * // Update one SaleItem
     * const saleItem = await prisma.saleItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaleItemUpdateArgs>(args: SelectSubset<T, SaleItemUpdateArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SaleItems.
     * @param {SaleItemDeleteManyArgs} args - Arguments to filter SaleItems to delete.
     * @example
     * // Delete a few SaleItems
     * const { count } = await prisma.saleItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaleItemDeleteManyArgs>(args?: SelectSubset<T, SaleItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SaleItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SaleItems
     * const saleItem = await prisma.saleItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaleItemUpdateManyArgs>(args: SelectSubset<T, SaleItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SaleItems and returns the data updated in the database.
     * @param {SaleItemUpdateManyAndReturnArgs} args - Arguments to update many SaleItems.
     * @example
     * // Update many SaleItems
     * const saleItem = await prisma.saleItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SaleItems and only return the `id`
     * const saleItemWithIdOnly = await prisma.saleItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SaleItemUpdateManyAndReturnArgs>(args: SelectSubset<T, SaleItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SaleItem.
     * @param {SaleItemUpsertArgs} args - Arguments to update or create a SaleItem.
     * @example
     * // Update or create a SaleItem
     * const saleItem = await prisma.saleItem.upsert({
     *   create: {
     *     // ... data to create a SaleItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SaleItem we want to update
     *   }
     * })
     */
    upsert<T extends SaleItemUpsertArgs>(args: SelectSubset<T, SaleItemUpsertArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SaleItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemCountArgs} args - Arguments to filter SaleItems to count.
     * @example
     * // Count the number of SaleItems
     * const count = await prisma.saleItem.count({
     *   where: {
     *     // ... the filter for the SaleItems we want to count
     *   }
     * })
    **/
    count<T extends SaleItemCountArgs>(
      args?: Subset<T, SaleItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaleItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SaleItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SaleItemAggregateArgs>(args: Subset<T, SaleItemAggregateArgs>): Prisma.PrismaPromise<GetSaleItemAggregateType<T>>

    /**
     * Group by SaleItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SaleItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaleItemGroupByArgs['orderBy'] }
        : { orderBy?: SaleItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SaleItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaleItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SaleItem model
   */
  readonly fields: SaleItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SaleItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaleItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sale<T extends SaleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SaleDefaultArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SaleItem model
   */
  interface SaleItemFieldRefs {
    readonly id: FieldRef<"SaleItem", 'BigInt'>
    readonly saleId: FieldRef<"SaleItem", 'BigInt'>
    readonly productId: FieldRef<"SaleItem", 'BigInt'>
    readonly quantity: FieldRef<"SaleItem", 'Int'>
    readonly unitPrice: FieldRef<"SaleItem", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * SaleItem findUnique
   */
  export type SaleItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleItem to fetch.
     */
    where: SaleItemWhereUniqueInput
  }

  /**
   * SaleItem findUniqueOrThrow
   */
  export type SaleItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleItem to fetch.
     */
    where: SaleItemWhereUniqueInput
  }

  /**
   * SaleItem findFirst
   */
  export type SaleItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleItem to fetch.
     */
    where?: SaleItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleItems to fetch.
     */
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SaleItems.
     */
    cursor?: SaleItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SaleItems.
     */
    distinct?: SaleItemScalarFieldEnum | SaleItemScalarFieldEnum[]
  }

  /**
   * SaleItem findFirstOrThrow
   */
  export type SaleItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleItem to fetch.
     */
    where?: SaleItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleItems to fetch.
     */
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SaleItems.
     */
    cursor?: SaleItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SaleItems.
     */
    distinct?: SaleItemScalarFieldEnum | SaleItemScalarFieldEnum[]
  }

  /**
   * SaleItem findMany
   */
  export type SaleItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleItems to fetch.
     */
    where?: SaleItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleItems to fetch.
     */
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SaleItems.
     */
    cursor?: SaleItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleItems.
     */
    skip?: number
    distinct?: SaleItemScalarFieldEnum | SaleItemScalarFieldEnum[]
  }

  /**
   * SaleItem create
   */
  export type SaleItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * The data needed to create a SaleItem.
     */
    data: XOR<SaleItemCreateInput, SaleItemUncheckedCreateInput>
  }

  /**
   * SaleItem createMany
   */
  export type SaleItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SaleItems.
     */
    data: SaleItemCreateManyInput | SaleItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SaleItem createManyAndReturn
   */
  export type SaleItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * The data used to create many SaleItems.
     */
    data: SaleItemCreateManyInput | SaleItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SaleItem update
   */
  export type SaleItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * The data needed to update a SaleItem.
     */
    data: XOR<SaleItemUpdateInput, SaleItemUncheckedUpdateInput>
    /**
     * Choose, which SaleItem to update.
     */
    where: SaleItemWhereUniqueInput
  }

  /**
   * SaleItem updateMany
   */
  export type SaleItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SaleItems.
     */
    data: XOR<SaleItemUpdateManyMutationInput, SaleItemUncheckedUpdateManyInput>
    /**
     * Filter which SaleItems to update
     */
    where?: SaleItemWhereInput
    /**
     * Limit how many SaleItems to update.
     */
    limit?: number
  }

  /**
   * SaleItem updateManyAndReturn
   */
  export type SaleItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * The data used to update SaleItems.
     */
    data: XOR<SaleItemUpdateManyMutationInput, SaleItemUncheckedUpdateManyInput>
    /**
     * Filter which SaleItems to update
     */
    where?: SaleItemWhereInput
    /**
     * Limit how many SaleItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SaleItem upsert
   */
  export type SaleItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * The filter to search for the SaleItem to update in case it exists.
     */
    where: SaleItemWhereUniqueInput
    /**
     * In case the SaleItem found by the `where` argument doesn't exist, create a new SaleItem with this data.
     */
    create: XOR<SaleItemCreateInput, SaleItemUncheckedCreateInput>
    /**
     * In case the SaleItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaleItemUpdateInput, SaleItemUncheckedUpdateInput>
  }

  /**
   * SaleItem delete
   */
  export type SaleItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter which SaleItem to delete.
     */
    where: SaleItemWhereUniqueInput
  }

  /**
   * SaleItem deleteMany
   */
  export type SaleItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SaleItems to delete
     */
    where?: SaleItemWhereInput
    /**
     * Limit how many SaleItems to delete.
     */
    limit?: number
  }

  /**
   * SaleItem without action
   */
  export type SaleItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
  }


  /**
   * Model Payable
   */

  export type AggregatePayable = {
    _count: PayableCountAggregateOutputType | null
    _avg: PayableAvgAggregateOutputType | null
    _sum: PayableSumAggregateOutputType | null
    _min: PayableMinAggregateOutputType | null
    _max: PayableMaxAggregateOutputType | null
  }

  export type PayableAvgAggregateOutputType = {
    id: number | null
    supplierId: number | null
    amount: Decimal | null
  }

  export type PayableSumAggregateOutputType = {
    id: bigint | null
    supplierId: bigint | null
    amount: Decimal | null
  }

  export type PayableMinAggregateOutputType = {
    id: bigint | null
    supplierId: bigint | null
    supplierNameFree: string | null
    category: string | null
    amount: Decimal | null
    description: string | null
    paymentMethod: string | null
    dueDate: Date | null
    invoiceNumber: string | null
    status: string | null
    createdAt: Date | null
  }

  export type PayableMaxAggregateOutputType = {
    id: bigint | null
    supplierId: bigint | null
    supplierNameFree: string | null
    category: string | null
    amount: Decimal | null
    description: string | null
    paymentMethod: string | null
    dueDate: Date | null
    invoiceNumber: string | null
    status: string | null
    createdAt: Date | null
  }

  export type PayableCountAggregateOutputType = {
    id: number
    supplierId: number
    supplierNameFree: number
    category: number
    amount: number
    description: number
    paymentMethod: number
    dueDate: number
    invoiceNumber: number
    status: number
    createdAt: number
    _all: number
  }


  export type PayableAvgAggregateInputType = {
    id?: true
    supplierId?: true
    amount?: true
  }

  export type PayableSumAggregateInputType = {
    id?: true
    supplierId?: true
    amount?: true
  }

  export type PayableMinAggregateInputType = {
    id?: true
    supplierId?: true
    supplierNameFree?: true
    category?: true
    amount?: true
    description?: true
    paymentMethod?: true
    dueDate?: true
    invoiceNumber?: true
    status?: true
    createdAt?: true
  }

  export type PayableMaxAggregateInputType = {
    id?: true
    supplierId?: true
    supplierNameFree?: true
    category?: true
    amount?: true
    description?: true
    paymentMethod?: true
    dueDate?: true
    invoiceNumber?: true
    status?: true
    createdAt?: true
  }

  export type PayableCountAggregateInputType = {
    id?: true
    supplierId?: true
    supplierNameFree?: true
    category?: true
    amount?: true
    description?: true
    paymentMethod?: true
    dueDate?: true
    invoiceNumber?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type PayableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payable to aggregate.
     */
    where?: PayableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payables to fetch.
     */
    orderBy?: PayableOrderByWithRelationInput | PayableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payables
    **/
    _count?: true | PayableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PayableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PayableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayableMaxAggregateInputType
  }

  export type GetPayableAggregateType<T extends PayableAggregateArgs> = {
        [P in keyof T & keyof AggregatePayable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayable[P]>
      : GetScalarType<T[P], AggregatePayable[P]>
  }




  export type PayableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayableWhereInput
    orderBy?: PayableOrderByWithAggregationInput | PayableOrderByWithAggregationInput[]
    by: PayableScalarFieldEnum[] | PayableScalarFieldEnum
    having?: PayableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayableCountAggregateInputType | true
    _avg?: PayableAvgAggregateInputType
    _sum?: PayableSumAggregateInputType
    _min?: PayableMinAggregateInputType
    _max?: PayableMaxAggregateInputType
  }

  export type PayableGroupByOutputType = {
    id: bigint
    supplierId: bigint | null
    supplierNameFree: string | null
    category: string
    amount: Decimal
    description: string | null
    paymentMethod: string
    dueDate: Date
    invoiceNumber: string | null
    status: string
    createdAt: Date
    _count: PayableCountAggregateOutputType | null
    _avg: PayableAvgAggregateOutputType | null
    _sum: PayableSumAggregateOutputType | null
    _min: PayableMinAggregateOutputType | null
    _max: PayableMaxAggregateOutputType | null
  }

  type GetPayableGroupByPayload<T extends PayableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayableGroupByOutputType[P]>
            : GetScalarType<T[P], PayableGroupByOutputType[P]>
        }
      >
    >


  export type PayableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    supplierNameFree?: boolean
    category?: boolean
    amount?: boolean
    description?: boolean
    paymentMethod?: boolean
    dueDate?: boolean
    invoiceNumber?: boolean
    status?: boolean
    createdAt?: boolean
    supplier?: boolean | Payable$supplierArgs<ExtArgs>
  }, ExtArgs["result"]["payable"]>

  export type PayableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    supplierNameFree?: boolean
    category?: boolean
    amount?: boolean
    description?: boolean
    paymentMethod?: boolean
    dueDate?: boolean
    invoiceNumber?: boolean
    status?: boolean
    createdAt?: boolean
    supplier?: boolean | Payable$supplierArgs<ExtArgs>
  }, ExtArgs["result"]["payable"]>

  export type PayableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    supplierNameFree?: boolean
    category?: boolean
    amount?: boolean
    description?: boolean
    paymentMethod?: boolean
    dueDate?: boolean
    invoiceNumber?: boolean
    status?: boolean
    createdAt?: boolean
    supplier?: boolean | Payable$supplierArgs<ExtArgs>
  }, ExtArgs["result"]["payable"]>

  export type PayableSelectScalar = {
    id?: boolean
    supplierId?: boolean
    supplierNameFree?: boolean
    category?: boolean
    amount?: boolean
    description?: boolean
    paymentMethod?: boolean
    dueDate?: boolean
    invoiceNumber?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type PayableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "supplierId" | "supplierNameFree" | "category" | "amount" | "description" | "paymentMethod" | "dueDate" | "invoiceNumber" | "status" | "createdAt", ExtArgs["result"]["payable"]>
  export type PayableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | Payable$supplierArgs<ExtArgs>
  }
  export type PayableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | Payable$supplierArgs<ExtArgs>
  }
  export type PayableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | Payable$supplierArgs<ExtArgs>
  }

  export type $PayablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payable"
    objects: {
      supplier: Prisma.$SupplierPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      supplierId: bigint | null
      supplierNameFree: string | null
      category: string
      amount: Prisma.Decimal
      description: string | null
      paymentMethod: string
      dueDate: Date
      invoiceNumber: string | null
      status: string
      createdAt: Date
    }, ExtArgs["result"]["payable"]>
    composites: {}
  }

  type PayableGetPayload<S extends boolean | null | undefined | PayableDefaultArgs> = $Result.GetResult<Prisma.$PayablePayload, S>

  type PayableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PayableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PayableCountAggregateInputType | true
    }

  export interface PayableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payable'], meta: { name: 'Payable' } }
    /**
     * Find zero or one Payable that matches the filter.
     * @param {PayableFindUniqueArgs} args - Arguments to find a Payable
     * @example
     * // Get one Payable
     * const payable = await prisma.payable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayableFindUniqueArgs>(args: SelectSubset<T, PayableFindUniqueArgs<ExtArgs>>): Prisma__PayableClient<$Result.GetResult<Prisma.$PayablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payable that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PayableFindUniqueOrThrowArgs} args - Arguments to find a Payable
     * @example
     * // Get one Payable
     * const payable = await prisma.payable.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayableFindUniqueOrThrowArgs>(args: SelectSubset<T, PayableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayableClient<$Result.GetResult<Prisma.$PayablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayableFindFirstArgs} args - Arguments to find a Payable
     * @example
     * // Get one Payable
     * const payable = await prisma.payable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayableFindFirstArgs>(args?: SelectSubset<T, PayableFindFirstArgs<ExtArgs>>): Prisma__PayableClient<$Result.GetResult<Prisma.$PayablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payable that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayableFindFirstOrThrowArgs} args - Arguments to find a Payable
     * @example
     * // Get one Payable
     * const payable = await prisma.payable.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayableFindFirstOrThrowArgs>(args?: SelectSubset<T, PayableFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayableClient<$Result.GetResult<Prisma.$PayablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payables
     * const payables = await prisma.payable.findMany()
     * 
     * // Get first 10 Payables
     * const payables = await prisma.payable.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payableWithIdOnly = await prisma.payable.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PayableFindManyArgs>(args?: SelectSubset<T, PayableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payable.
     * @param {PayableCreateArgs} args - Arguments to create a Payable.
     * @example
     * // Create one Payable
     * const Payable = await prisma.payable.create({
     *   data: {
     *     // ... data to create a Payable
     *   }
     * })
     * 
     */
    create<T extends PayableCreateArgs>(args: SelectSubset<T, PayableCreateArgs<ExtArgs>>): Prisma__PayableClient<$Result.GetResult<Prisma.$PayablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payables.
     * @param {PayableCreateManyArgs} args - Arguments to create many Payables.
     * @example
     * // Create many Payables
     * const payable = await prisma.payable.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayableCreateManyArgs>(args?: SelectSubset<T, PayableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payables and returns the data saved in the database.
     * @param {PayableCreateManyAndReturnArgs} args - Arguments to create many Payables.
     * @example
     * // Create many Payables
     * const payable = await prisma.payable.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payables and only return the `id`
     * const payableWithIdOnly = await prisma.payable.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PayableCreateManyAndReturnArgs>(args?: SelectSubset<T, PayableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payable.
     * @param {PayableDeleteArgs} args - Arguments to delete one Payable.
     * @example
     * // Delete one Payable
     * const Payable = await prisma.payable.delete({
     *   where: {
     *     // ... filter to delete one Payable
     *   }
     * })
     * 
     */
    delete<T extends PayableDeleteArgs>(args: SelectSubset<T, PayableDeleteArgs<ExtArgs>>): Prisma__PayableClient<$Result.GetResult<Prisma.$PayablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payable.
     * @param {PayableUpdateArgs} args - Arguments to update one Payable.
     * @example
     * // Update one Payable
     * const payable = await prisma.payable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayableUpdateArgs>(args: SelectSubset<T, PayableUpdateArgs<ExtArgs>>): Prisma__PayableClient<$Result.GetResult<Prisma.$PayablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payables.
     * @param {PayableDeleteManyArgs} args - Arguments to filter Payables to delete.
     * @example
     * // Delete a few Payables
     * const { count } = await prisma.payable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayableDeleteManyArgs>(args?: SelectSubset<T, PayableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payables
     * const payable = await prisma.payable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayableUpdateManyArgs>(args: SelectSubset<T, PayableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payables and returns the data updated in the database.
     * @param {PayableUpdateManyAndReturnArgs} args - Arguments to update many Payables.
     * @example
     * // Update many Payables
     * const payable = await prisma.payable.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payables and only return the `id`
     * const payableWithIdOnly = await prisma.payable.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PayableUpdateManyAndReturnArgs>(args: SelectSubset<T, PayableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payable.
     * @param {PayableUpsertArgs} args - Arguments to update or create a Payable.
     * @example
     * // Update or create a Payable
     * const payable = await prisma.payable.upsert({
     *   create: {
     *     // ... data to create a Payable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payable we want to update
     *   }
     * })
     */
    upsert<T extends PayableUpsertArgs>(args: SelectSubset<T, PayableUpsertArgs<ExtArgs>>): Prisma__PayableClient<$Result.GetResult<Prisma.$PayablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayableCountArgs} args - Arguments to filter Payables to count.
     * @example
     * // Count the number of Payables
     * const count = await prisma.payable.count({
     *   where: {
     *     // ... the filter for the Payables we want to count
     *   }
     * })
    **/
    count<T extends PayableCountArgs>(
      args?: Subset<T, PayableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PayableAggregateArgs>(args: Subset<T, PayableAggregateArgs>): Prisma.PrismaPromise<GetPayableAggregateType<T>>

    /**
     * Group by Payable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PayableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayableGroupByArgs['orderBy'] }
        : { orderBy?: PayableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PayableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payable model
   */
  readonly fields: PayableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payable.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    supplier<T extends Payable$supplierArgs<ExtArgs> = {}>(args?: Subset<T, Payable$supplierArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payable model
   */
  interface PayableFieldRefs {
    readonly id: FieldRef<"Payable", 'BigInt'>
    readonly supplierId: FieldRef<"Payable", 'BigInt'>
    readonly supplierNameFree: FieldRef<"Payable", 'String'>
    readonly category: FieldRef<"Payable", 'String'>
    readonly amount: FieldRef<"Payable", 'Decimal'>
    readonly description: FieldRef<"Payable", 'String'>
    readonly paymentMethod: FieldRef<"Payable", 'String'>
    readonly dueDate: FieldRef<"Payable", 'DateTime'>
    readonly invoiceNumber: FieldRef<"Payable", 'String'>
    readonly status: FieldRef<"Payable", 'String'>
    readonly createdAt: FieldRef<"Payable", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payable findUnique
   */
  export type PayableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payable
     */
    select?: PayableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payable
     */
    omit?: PayableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayableInclude<ExtArgs> | null
    /**
     * Filter, which Payable to fetch.
     */
    where: PayableWhereUniqueInput
  }

  /**
   * Payable findUniqueOrThrow
   */
  export type PayableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payable
     */
    select?: PayableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payable
     */
    omit?: PayableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayableInclude<ExtArgs> | null
    /**
     * Filter, which Payable to fetch.
     */
    where: PayableWhereUniqueInput
  }

  /**
   * Payable findFirst
   */
  export type PayableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payable
     */
    select?: PayableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payable
     */
    omit?: PayableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayableInclude<ExtArgs> | null
    /**
     * Filter, which Payable to fetch.
     */
    where?: PayableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payables to fetch.
     */
    orderBy?: PayableOrderByWithRelationInput | PayableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payables.
     */
    cursor?: PayableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payables.
     */
    distinct?: PayableScalarFieldEnum | PayableScalarFieldEnum[]
  }

  /**
   * Payable findFirstOrThrow
   */
  export type PayableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payable
     */
    select?: PayableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payable
     */
    omit?: PayableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayableInclude<ExtArgs> | null
    /**
     * Filter, which Payable to fetch.
     */
    where?: PayableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payables to fetch.
     */
    orderBy?: PayableOrderByWithRelationInput | PayableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payables.
     */
    cursor?: PayableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payables.
     */
    distinct?: PayableScalarFieldEnum | PayableScalarFieldEnum[]
  }

  /**
   * Payable findMany
   */
  export type PayableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payable
     */
    select?: PayableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payable
     */
    omit?: PayableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayableInclude<ExtArgs> | null
    /**
     * Filter, which Payables to fetch.
     */
    where?: PayableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payables to fetch.
     */
    orderBy?: PayableOrderByWithRelationInput | PayableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payables.
     */
    cursor?: PayableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payables.
     */
    skip?: number
    distinct?: PayableScalarFieldEnum | PayableScalarFieldEnum[]
  }

  /**
   * Payable create
   */
  export type PayableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payable
     */
    select?: PayableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payable
     */
    omit?: PayableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayableInclude<ExtArgs> | null
    /**
     * The data needed to create a Payable.
     */
    data: XOR<PayableCreateInput, PayableUncheckedCreateInput>
  }

  /**
   * Payable createMany
   */
  export type PayableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payables.
     */
    data: PayableCreateManyInput | PayableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payable createManyAndReturn
   */
  export type PayableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payable
     */
    select?: PayableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payable
     */
    omit?: PayableOmit<ExtArgs> | null
    /**
     * The data used to create many Payables.
     */
    data: PayableCreateManyInput | PayableCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayableIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payable update
   */
  export type PayableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payable
     */
    select?: PayableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payable
     */
    omit?: PayableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayableInclude<ExtArgs> | null
    /**
     * The data needed to update a Payable.
     */
    data: XOR<PayableUpdateInput, PayableUncheckedUpdateInput>
    /**
     * Choose, which Payable to update.
     */
    where: PayableWhereUniqueInput
  }

  /**
   * Payable updateMany
   */
  export type PayableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payables.
     */
    data: XOR<PayableUpdateManyMutationInput, PayableUncheckedUpdateManyInput>
    /**
     * Filter which Payables to update
     */
    where?: PayableWhereInput
    /**
     * Limit how many Payables to update.
     */
    limit?: number
  }

  /**
   * Payable updateManyAndReturn
   */
  export type PayableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payable
     */
    select?: PayableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payable
     */
    omit?: PayableOmit<ExtArgs> | null
    /**
     * The data used to update Payables.
     */
    data: XOR<PayableUpdateManyMutationInput, PayableUncheckedUpdateManyInput>
    /**
     * Filter which Payables to update
     */
    where?: PayableWhereInput
    /**
     * Limit how many Payables to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayableIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payable upsert
   */
  export type PayableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payable
     */
    select?: PayableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payable
     */
    omit?: PayableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayableInclude<ExtArgs> | null
    /**
     * The filter to search for the Payable to update in case it exists.
     */
    where: PayableWhereUniqueInput
    /**
     * In case the Payable found by the `where` argument doesn't exist, create a new Payable with this data.
     */
    create: XOR<PayableCreateInput, PayableUncheckedCreateInput>
    /**
     * In case the Payable was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayableUpdateInput, PayableUncheckedUpdateInput>
  }

  /**
   * Payable delete
   */
  export type PayableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payable
     */
    select?: PayableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payable
     */
    omit?: PayableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayableInclude<ExtArgs> | null
    /**
     * Filter which Payable to delete.
     */
    where: PayableWhereUniqueInput
  }

  /**
   * Payable deleteMany
   */
  export type PayableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payables to delete
     */
    where?: PayableWhereInput
    /**
     * Limit how many Payables to delete.
     */
    limit?: number
  }

  /**
   * Payable.supplier
   */
  export type Payable$supplierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    where?: SupplierWhereInput
  }

  /**
   * Payable without action
   */
  export type PayableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payable
     */
    select?: PayableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payable
     */
    omit?: PayableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayableInclude<ExtArgs> | null
  }


  /**
   * Model CrediarioAccount
   */

  export type AggregateCrediarioAccount = {
    _count: CrediarioAccountCountAggregateOutputType | null
    _avg: CrediarioAccountAvgAggregateOutputType | null
    _sum: CrediarioAccountSumAggregateOutputType | null
    _min: CrediarioAccountMinAggregateOutputType | null
    _max: CrediarioAccountMaxAggregateOutputType | null
  }

  export type CrediarioAccountAvgAggregateOutputType = {
    id: number | null
    saleId: number | null
    customerId: number | null
    totalAmount: Decimal | null
    paidAmount: Decimal | null
    balance: Decimal | null
    termDays: number | null
    installments: number | null
  }

  export type CrediarioAccountSumAggregateOutputType = {
    id: bigint | null
    saleId: bigint | null
    customerId: bigint | null
    totalAmount: Decimal | null
    paidAmount: Decimal | null
    balance: Decimal | null
    termDays: number | null
    installments: number | null
  }

  export type CrediarioAccountMinAggregateOutputType = {
    id: bigint | null
    saleId: bigint | null
    customerId: bigint | null
    customerNameFree: string | null
    totalAmount: Decimal | null
    paidAmount: Decimal | null
    balance: Decimal | null
    status: string | null
    termDays: number | null
    installments: number | null
    dueDate: Date | null
    createdAt: Date | null
  }

  export type CrediarioAccountMaxAggregateOutputType = {
    id: bigint | null
    saleId: bigint | null
    customerId: bigint | null
    customerNameFree: string | null
    totalAmount: Decimal | null
    paidAmount: Decimal | null
    balance: Decimal | null
    status: string | null
    termDays: number | null
    installments: number | null
    dueDate: Date | null
    createdAt: Date | null
  }

  export type CrediarioAccountCountAggregateOutputType = {
    id: number
    saleId: number
    customerId: number
    customerNameFree: number
    totalAmount: number
    paidAmount: number
    balance: number
    status: number
    termDays: number
    installments: number
    dueDate: number
    createdAt: number
    _all: number
  }


  export type CrediarioAccountAvgAggregateInputType = {
    id?: true
    saleId?: true
    customerId?: true
    totalAmount?: true
    paidAmount?: true
    balance?: true
    termDays?: true
    installments?: true
  }

  export type CrediarioAccountSumAggregateInputType = {
    id?: true
    saleId?: true
    customerId?: true
    totalAmount?: true
    paidAmount?: true
    balance?: true
    termDays?: true
    installments?: true
  }

  export type CrediarioAccountMinAggregateInputType = {
    id?: true
    saleId?: true
    customerId?: true
    customerNameFree?: true
    totalAmount?: true
    paidAmount?: true
    balance?: true
    status?: true
    termDays?: true
    installments?: true
    dueDate?: true
    createdAt?: true
  }

  export type CrediarioAccountMaxAggregateInputType = {
    id?: true
    saleId?: true
    customerId?: true
    customerNameFree?: true
    totalAmount?: true
    paidAmount?: true
    balance?: true
    status?: true
    termDays?: true
    installments?: true
    dueDate?: true
    createdAt?: true
  }

  export type CrediarioAccountCountAggregateInputType = {
    id?: true
    saleId?: true
    customerId?: true
    customerNameFree?: true
    totalAmount?: true
    paidAmount?: true
    balance?: true
    status?: true
    termDays?: true
    installments?: true
    dueDate?: true
    createdAt?: true
    _all?: true
  }

  export type CrediarioAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CrediarioAccount to aggregate.
     */
    where?: CrediarioAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrediarioAccounts to fetch.
     */
    orderBy?: CrediarioAccountOrderByWithRelationInput | CrediarioAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CrediarioAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrediarioAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrediarioAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CrediarioAccounts
    **/
    _count?: true | CrediarioAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CrediarioAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CrediarioAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CrediarioAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CrediarioAccountMaxAggregateInputType
  }

  export type GetCrediarioAccountAggregateType<T extends CrediarioAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateCrediarioAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCrediarioAccount[P]>
      : GetScalarType<T[P], AggregateCrediarioAccount[P]>
  }




  export type CrediarioAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CrediarioAccountWhereInput
    orderBy?: CrediarioAccountOrderByWithAggregationInput | CrediarioAccountOrderByWithAggregationInput[]
    by: CrediarioAccountScalarFieldEnum[] | CrediarioAccountScalarFieldEnum
    having?: CrediarioAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CrediarioAccountCountAggregateInputType | true
    _avg?: CrediarioAccountAvgAggregateInputType
    _sum?: CrediarioAccountSumAggregateInputType
    _min?: CrediarioAccountMinAggregateInputType
    _max?: CrediarioAccountMaxAggregateInputType
  }

  export type CrediarioAccountGroupByOutputType = {
    id: bigint
    saleId: bigint
    customerId: bigint | null
    customerNameFree: string | null
    totalAmount: Decimal
    paidAmount: Decimal
    balance: Decimal
    status: string
    termDays: number | null
    installments: number | null
    dueDate: Date | null
    createdAt: Date
    _count: CrediarioAccountCountAggregateOutputType | null
    _avg: CrediarioAccountAvgAggregateOutputType | null
    _sum: CrediarioAccountSumAggregateOutputType | null
    _min: CrediarioAccountMinAggregateOutputType | null
    _max: CrediarioAccountMaxAggregateOutputType | null
  }

  type GetCrediarioAccountGroupByPayload<T extends CrediarioAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CrediarioAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CrediarioAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CrediarioAccountGroupByOutputType[P]>
            : GetScalarType<T[P], CrediarioAccountGroupByOutputType[P]>
        }
      >
    >


  export type CrediarioAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saleId?: boolean
    customerId?: boolean
    customerNameFree?: boolean
    totalAmount?: boolean
    paidAmount?: boolean
    balance?: boolean
    status?: boolean
    termDays?: boolean
    installments?: boolean
    dueDate?: boolean
    createdAt?: boolean
    sale?: boolean | SaleDefaultArgs<ExtArgs>
    customer?: boolean | CrediarioAccount$customerArgs<ExtArgs>
    payments?: boolean | CrediarioAccount$paymentsArgs<ExtArgs>
    _count?: boolean | CrediarioAccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crediarioAccount"]>

  export type CrediarioAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saleId?: boolean
    customerId?: boolean
    customerNameFree?: boolean
    totalAmount?: boolean
    paidAmount?: boolean
    balance?: boolean
    status?: boolean
    termDays?: boolean
    installments?: boolean
    dueDate?: boolean
    createdAt?: boolean
    sale?: boolean | SaleDefaultArgs<ExtArgs>
    customer?: boolean | CrediarioAccount$customerArgs<ExtArgs>
  }, ExtArgs["result"]["crediarioAccount"]>

  export type CrediarioAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saleId?: boolean
    customerId?: boolean
    customerNameFree?: boolean
    totalAmount?: boolean
    paidAmount?: boolean
    balance?: boolean
    status?: boolean
    termDays?: boolean
    installments?: boolean
    dueDate?: boolean
    createdAt?: boolean
    sale?: boolean | SaleDefaultArgs<ExtArgs>
    customer?: boolean | CrediarioAccount$customerArgs<ExtArgs>
  }, ExtArgs["result"]["crediarioAccount"]>

  export type CrediarioAccountSelectScalar = {
    id?: boolean
    saleId?: boolean
    customerId?: boolean
    customerNameFree?: boolean
    totalAmount?: boolean
    paidAmount?: boolean
    balance?: boolean
    status?: boolean
    termDays?: boolean
    installments?: boolean
    dueDate?: boolean
    createdAt?: boolean
  }

  export type CrediarioAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "saleId" | "customerId" | "customerNameFree" | "totalAmount" | "paidAmount" | "balance" | "status" | "termDays" | "installments" | "dueDate" | "createdAt", ExtArgs["result"]["crediarioAccount"]>
  export type CrediarioAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sale?: boolean | SaleDefaultArgs<ExtArgs>
    customer?: boolean | CrediarioAccount$customerArgs<ExtArgs>
    payments?: boolean | CrediarioAccount$paymentsArgs<ExtArgs>
    _count?: boolean | CrediarioAccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CrediarioAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sale?: boolean | SaleDefaultArgs<ExtArgs>
    customer?: boolean | CrediarioAccount$customerArgs<ExtArgs>
  }
  export type CrediarioAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sale?: boolean | SaleDefaultArgs<ExtArgs>
    customer?: boolean | CrediarioAccount$customerArgs<ExtArgs>
  }

  export type $CrediarioAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CrediarioAccount"
    objects: {
      sale: Prisma.$SalePayload<ExtArgs>
      customer: Prisma.$CustomerPayload<ExtArgs> | null
      payments: Prisma.$CrediarioPaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      saleId: bigint
      customerId: bigint | null
      customerNameFree: string | null
      totalAmount: Prisma.Decimal
      paidAmount: Prisma.Decimal
      balance: Prisma.Decimal
      status: string
      termDays: number | null
      installments: number | null
      dueDate: Date | null
      createdAt: Date
    }, ExtArgs["result"]["crediarioAccount"]>
    composites: {}
  }

  type CrediarioAccountGetPayload<S extends boolean | null | undefined | CrediarioAccountDefaultArgs> = $Result.GetResult<Prisma.$CrediarioAccountPayload, S>

  type CrediarioAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CrediarioAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CrediarioAccountCountAggregateInputType | true
    }

  export interface CrediarioAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CrediarioAccount'], meta: { name: 'CrediarioAccount' } }
    /**
     * Find zero or one CrediarioAccount that matches the filter.
     * @param {CrediarioAccountFindUniqueArgs} args - Arguments to find a CrediarioAccount
     * @example
     * // Get one CrediarioAccount
     * const crediarioAccount = await prisma.crediarioAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CrediarioAccountFindUniqueArgs>(args: SelectSubset<T, CrediarioAccountFindUniqueArgs<ExtArgs>>): Prisma__CrediarioAccountClient<$Result.GetResult<Prisma.$CrediarioAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CrediarioAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CrediarioAccountFindUniqueOrThrowArgs} args - Arguments to find a CrediarioAccount
     * @example
     * // Get one CrediarioAccount
     * const crediarioAccount = await prisma.crediarioAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CrediarioAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, CrediarioAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CrediarioAccountClient<$Result.GetResult<Prisma.$CrediarioAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CrediarioAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrediarioAccountFindFirstArgs} args - Arguments to find a CrediarioAccount
     * @example
     * // Get one CrediarioAccount
     * const crediarioAccount = await prisma.crediarioAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CrediarioAccountFindFirstArgs>(args?: SelectSubset<T, CrediarioAccountFindFirstArgs<ExtArgs>>): Prisma__CrediarioAccountClient<$Result.GetResult<Prisma.$CrediarioAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CrediarioAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrediarioAccountFindFirstOrThrowArgs} args - Arguments to find a CrediarioAccount
     * @example
     * // Get one CrediarioAccount
     * const crediarioAccount = await prisma.crediarioAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CrediarioAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, CrediarioAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__CrediarioAccountClient<$Result.GetResult<Prisma.$CrediarioAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CrediarioAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrediarioAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CrediarioAccounts
     * const crediarioAccounts = await prisma.crediarioAccount.findMany()
     * 
     * // Get first 10 CrediarioAccounts
     * const crediarioAccounts = await prisma.crediarioAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const crediarioAccountWithIdOnly = await prisma.crediarioAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CrediarioAccountFindManyArgs>(args?: SelectSubset<T, CrediarioAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrediarioAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CrediarioAccount.
     * @param {CrediarioAccountCreateArgs} args - Arguments to create a CrediarioAccount.
     * @example
     * // Create one CrediarioAccount
     * const CrediarioAccount = await prisma.crediarioAccount.create({
     *   data: {
     *     // ... data to create a CrediarioAccount
     *   }
     * })
     * 
     */
    create<T extends CrediarioAccountCreateArgs>(args: SelectSubset<T, CrediarioAccountCreateArgs<ExtArgs>>): Prisma__CrediarioAccountClient<$Result.GetResult<Prisma.$CrediarioAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CrediarioAccounts.
     * @param {CrediarioAccountCreateManyArgs} args - Arguments to create many CrediarioAccounts.
     * @example
     * // Create many CrediarioAccounts
     * const crediarioAccount = await prisma.crediarioAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CrediarioAccountCreateManyArgs>(args?: SelectSubset<T, CrediarioAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CrediarioAccounts and returns the data saved in the database.
     * @param {CrediarioAccountCreateManyAndReturnArgs} args - Arguments to create many CrediarioAccounts.
     * @example
     * // Create many CrediarioAccounts
     * const crediarioAccount = await prisma.crediarioAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CrediarioAccounts and only return the `id`
     * const crediarioAccountWithIdOnly = await prisma.crediarioAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CrediarioAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, CrediarioAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrediarioAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CrediarioAccount.
     * @param {CrediarioAccountDeleteArgs} args - Arguments to delete one CrediarioAccount.
     * @example
     * // Delete one CrediarioAccount
     * const CrediarioAccount = await prisma.crediarioAccount.delete({
     *   where: {
     *     // ... filter to delete one CrediarioAccount
     *   }
     * })
     * 
     */
    delete<T extends CrediarioAccountDeleteArgs>(args: SelectSubset<T, CrediarioAccountDeleteArgs<ExtArgs>>): Prisma__CrediarioAccountClient<$Result.GetResult<Prisma.$CrediarioAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CrediarioAccount.
     * @param {CrediarioAccountUpdateArgs} args - Arguments to update one CrediarioAccount.
     * @example
     * // Update one CrediarioAccount
     * const crediarioAccount = await prisma.crediarioAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CrediarioAccountUpdateArgs>(args: SelectSubset<T, CrediarioAccountUpdateArgs<ExtArgs>>): Prisma__CrediarioAccountClient<$Result.GetResult<Prisma.$CrediarioAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CrediarioAccounts.
     * @param {CrediarioAccountDeleteManyArgs} args - Arguments to filter CrediarioAccounts to delete.
     * @example
     * // Delete a few CrediarioAccounts
     * const { count } = await prisma.crediarioAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CrediarioAccountDeleteManyArgs>(args?: SelectSubset<T, CrediarioAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CrediarioAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrediarioAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CrediarioAccounts
     * const crediarioAccount = await prisma.crediarioAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CrediarioAccountUpdateManyArgs>(args: SelectSubset<T, CrediarioAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CrediarioAccounts and returns the data updated in the database.
     * @param {CrediarioAccountUpdateManyAndReturnArgs} args - Arguments to update many CrediarioAccounts.
     * @example
     * // Update many CrediarioAccounts
     * const crediarioAccount = await prisma.crediarioAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CrediarioAccounts and only return the `id`
     * const crediarioAccountWithIdOnly = await prisma.crediarioAccount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CrediarioAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, CrediarioAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrediarioAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CrediarioAccount.
     * @param {CrediarioAccountUpsertArgs} args - Arguments to update or create a CrediarioAccount.
     * @example
     * // Update or create a CrediarioAccount
     * const crediarioAccount = await prisma.crediarioAccount.upsert({
     *   create: {
     *     // ... data to create a CrediarioAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CrediarioAccount we want to update
     *   }
     * })
     */
    upsert<T extends CrediarioAccountUpsertArgs>(args: SelectSubset<T, CrediarioAccountUpsertArgs<ExtArgs>>): Prisma__CrediarioAccountClient<$Result.GetResult<Prisma.$CrediarioAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CrediarioAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrediarioAccountCountArgs} args - Arguments to filter CrediarioAccounts to count.
     * @example
     * // Count the number of CrediarioAccounts
     * const count = await prisma.crediarioAccount.count({
     *   where: {
     *     // ... the filter for the CrediarioAccounts we want to count
     *   }
     * })
    **/
    count<T extends CrediarioAccountCountArgs>(
      args?: Subset<T, CrediarioAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CrediarioAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CrediarioAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrediarioAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CrediarioAccountAggregateArgs>(args: Subset<T, CrediarioAccountAggregateArgs>): Prisma.PrismaPromise<GetCrediarioAccountAggregateType<T>>

    /**
     * Group by CrediarioAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrediarioAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CrediarioAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CrediarioAccountGroupByArgs['orderBy'] }
        : { orderBy?: CrediarioAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CrediarioAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCrediarioAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CrediarioAccount model
   */
  readonly fields: CrediarioAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CrediarioAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CrediarioAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sale<T extends SaleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SaleDefaultArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    customer<T extends CrediarioAccount$customerArgs<ExtArgs> = {}>(args?: Subset<T, CrediarioAccount$customerArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payments<T extends CrediarioAccount$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, CrediarioAccount$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrediarioPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CrediarioAccount model
   */
  interface CrediarioAccountFieldRefs {
    readonly id: FieldRef<"CrediarioAccount", 'BigInt'>
    readonly saleId: FieldRef<"CrediarioAccount", 'BigInt'>
    readonly customerId: FieldRef<"CrediarioAccount", 'BigInt'>
    readonly customerNameFree: FieldRef<"CrediarioAccount", 'String'>
    readonly totalAmount: FieldRef<"CrediarioAccount", 'Decimal'>
    readonly paidAmount: FieldRef<"CrediarioAccount", 'Decimal'>
    readonly balance: FieldRef<"CrediarioAccount", 'Decimal'>
    readonly status: FieldRef<"CrediarioAccount", 'String'>
    readonly termDays: FieldRef<"CrediarioAccount", 'Int'>
    readonly installments: FieldRef<"CrediarioAccount", 'Int'>
    readonly dueDate: FieldRef<"CrediarioAccount", 'DateTime'>
    readonly createdAt: FieldRef<"CrediarioAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CrediarioAccount findUnique
   */
  export type CrediarioAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrediarioAccount
     */
    select?: CrediarioAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrediarioAccount
     */
    omit?: CrediarioAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrediarioAccountInclude<ExtArgs> | null
    /**
     * Filter, which CrediarioAccount to fetch.
     */
    where: CrediarioAccountWhereUniqueInput
  }

  /**
   * CrediarioAccount findUniqueOrThrow
   */
  export type CrediarioAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrediarioAccount
     */
    select?: CrediarioAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrediarioAccount
     */
    omit?: CrediarioAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrediarioAccountInclude<ExtArgs> | null
    /**
     * Filter, which CrediarioAccount to fetch.
     */
    where: CrediarioAccountWhereUniqueInput
  }

  /**
   * CrediarioAccount findFirst
   */
  export type CrediarioAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrediarioAccount
     */
    select?: CrediarioAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrediarioAccount
     */
    omit?: CrediarioAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrediarioAccountInclude<ExtArgs> | null
    /**
     * Filter, which CrediarioAccount to fetch.
     */
    where?: CrediarioAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrediarioAccounts to fetch.
     */
    orderBy?: CrediarioAccountOrderByWithRelationInput | CrediarioAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CrediarioAccounts.
     */
    cursor?: CrediarioAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrediarioAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrediarioAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CrediarioAccounts.
     */
    distinct?: CrediarioAccountScalarFieldEnum | CrediarioAccountScalarFieldEnum[]
  }

  /**
   * CrediarioAccount findFirstOrThrow
   */
  export type CrediarioAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrediarioAccount
     */
    select?: CrediarioAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrediarioAccount
     */
    omit?: CrediarioAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrediarioAccountInclude<ExtArgs> | null
    /**
     * Filter, which CrediarioAccount to fetch.
     */
    where?: CrediarioAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrediarioAccounts to fetch.
     */
    orderBy?: CrediarioAccountOrderByWithRelationInput | CrediarioAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CrediarioAccounts.
     */
    cursor?: CrediarioAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrediarioAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrediarioAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CrediarioAccounts.
     */
    distinct?: CrediarioAccountScalarFieldEnum | CrediarioAccountScalarFieldEnum[]
  }

  /**
   * CrediarioAccount findMany
   */
  export type CrediarioAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrediarioAccount
     */
    select?: CrediarioAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrediarioAccount
     */
    omit?: CrediarioAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrediarioAccountInclude<ExtArgs> | null
    /**
     * Filter, which CrediarioAccounts to fetch.
     */
    where?: CrediarioAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrediarioAccounts to fetch.
     */
    orderBy?: CrediarioAccountOrderByWithRelationInput | CrediarioAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CrediarioAccounts.
     */
    cursor?: CrediarioAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrediarioAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrediarioAccounts.
     */
    skip?: number
    distinct?: CrediarioAccountScalarFieldEnum | CrediarioAccountScalarFieldEnum[]
  }

  /**
   * CrediarioAccount create
   */
  export type CrediarioAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrediarioAccount
     */
    select?: CrediarioAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrediarioAccount
     */
    omit?: CrediarioAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrediarioAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a CrediarioAccount.
     */
    data: XOR<CrediarioAccountCreateInput, CrediarioAccountUncheckedCreateInput>
  }

  /**
   * CrediarioAccount createMany
   */
  export type CrediarioAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CrediarioAccounts.
     */
    data: CrediarioAccountCreateManyInput | CrediarioAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CrediarioAccount createManyAndReturn
   */
  export type CrediarioAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrediarioAccount
     */
    select?: CrediarioAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CrediarioAccount
     */
    omit?: CrediarioAccountOmit<ExtArgs> | null
    /**
     * The data used to create many CrediarioAccounts.
     */
    data: CrediarioAccountCreateManyInput | CrediarioAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrediarioAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CrediarioAccount update
   */
  export type CrediarioAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrediarioAccount
     */
    select?: CrediarioAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrediarioAccount
     */
    omit?: CrediarioAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrediarioAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a CrediarioAccount.
     */
    data: XOR<CrediarioAccountUpdateInput, CrediarioAccountUncheckedUpdateInput>
    /**
     * Choose, which CrediarioAccount to update.
     */
    where: CrediarioAccountWhereUniqueInput
  }

  /**
   * CrediarioAccount updateMany
   */
  export type CrediarioAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CrediarioAccounts.
     */
    data: XOR<CrediarioAccountUpdateManyMutationInput, CrediarioAccountUncheckedUpdateManyInput>
    /**
     * Filter which CrediarioAccounts to update
     */
    where?: CrediarioAccountWhereInput
    /**
     * Limit how many CrediarioAccounts to update.
     */
    limit?: number
  }

  /**
   * CrediarioAccount updateManyAndReturn
   */
  export type CrediarioAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrediarioAccount
     */
    select?: CrediarioAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CrediarioAccount
     */
    omit?: CrediarioAccountOmit<ExtArgs> | null
    /**
     * The data used to update CrediarioAccounts.
     */
    data: XOR<CrediarioAccountUpdateManyMutationInput, CrediarioAccountUncheckedUpdateManyInput>
    /**
     * Filter which CrediarioAccounts to update
     */
    where?: CrediarioAccountWhereInput
    /**
     * Limit how many CrediarioAccounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrediarioAccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CrediarioAccount upsert
   */
  export type CrediarioAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrediarioAccount
     */
    select?: CrediarioAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrediarioAccount
     */
    omit?: CrediarioAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrediarioAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the CrediarioAccount to update in case it exists.
     */
    where: CrediarioAccountWhereUniqueInput
    /**
     * In case the CrediarioAccount found by the `where` argument doesn't exist, create a new CrediarioAccount with this data.
     */
    create: XOR<CrediarioAccountCreateInput, CrediarioAccountUncheckedCreateInput>
    /**
     * In case the CrediarioAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CrediarioAccountUpdateInput, CrediarioAccountUncheckedUpdateInput>
  }

  /**
   * CrediarioAccount delete
   */
  export type CrediarioAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrediarioAccount
     */
    select?: CrediarioAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrediarioAccount
     */
    omit?: CrediarioAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrediarioAccountInclude<ExtArgs> | null
    /**
     * Filter which CrediarioAccount to delete.
     */
    where: CrediarioAccountWhereUniqueInput
  }

  /**
   * CrediarioAccount deleteMany
   */
  export type CrediarioAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CrediarioAccounts to delete
     */
    where?: CrediarioAccountWhereInput
    /**
     * Limit how many CrediarioAccounts to delete.
     */
    limit?: number
  }

  /**
   * CrediarioAccount.customer
   */
  export type CrediarioAccount$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
  }

  /**
   * CrediarioAccount.payments
   */
  export type CrediarioAccount$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrediarioPayment
     */
    select?: CrediarioPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrediarioPayment
     */
    omit?: CrediarioPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrediarioPaymentInclude<ExtArgs> | null
    where?: CrediarioPaymentWhereInput
    orderBy?: CrediarioPaymentOrderByWithRelationInput | CrediarioPaymentOrderByWithRelationInput[]
    cursor?: CrediarioPaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CrediarioPaymentScalarFieldEnum | CrediarioPaymentScalarFieldEnum[]
  }

  /**
   * CrediarioAccount without action
   */
  export type CrediarioAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrediarioAccount
     */
    select?: CrediarioAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrediarioAccount
     */
    omit?: CrediarioAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrediarioAccountInclude<ExtArgs> | null
  }


  /**
   * Model CrediarioPayment
   */

  export type AggregateCrediarioPayment = {
    _count: CrediarioPaymentCountAggregateOutputType | null
    _avg: CrediarioPaymentAvgAggregateOutputType | null
    _sum: CrediarioPaymentSumAggregateOutputType | null
    _min: CrediarioPaymentMinAggregateOutputType | null
    _max: CrediarioPaymentMaxAggregateOutputType | null
  }

  export type CrediarioPaymentAvgAggregateOutputType = {
    id: number | null
    accountId: number | null
    amount: Decimal | null
  }

  export type CrediarioPaymentSumAggregateOutputType = {
    id: bigint | null
    accountId: bigint | null
    amount: Decimal | null
  }

  export type CrediarioPaymentMinAggregateOutputType = {
    id: bigint | null
    accountId: bigint | null
    amount: Decimal | null
    paymentMethod: string | null
    paidAt: Date | null
  }

  export type CrediarioPaymentMaxAggregateOutputType = {
    id: bigint | null
    accountId: bigint | null
    amount: Decimal | null
    paymentMethod: string | null
    paidAt: Date | null
  }

  export type CrediarioPaymentCountAggregateOutputType = {
    id: number
    accountId: number
    amount: number
    paymentMethod: number
    paidAt: number
    _all: number
  }


  export type CrediarioPaymentAvgAggregateInputType = {
    id?: true
    accountId?: true
    amount?: true
  }

  export type CrediarioPaymentSumAggregateInputType = {
    id?: true
    accountId?: true
    amount?: true
  }

  export type CrediarioPaymentMinAggregateInputType = {
    id?: true
    accountId?: true
    amount?: true
    paymentMethod?: true
    paidAt?: true
  }

  export type CrediarioPaymentMaxAggregateInputType = {
    id?: true
    accountId?: true
    amount?: true
    paymentMethod?: true
    paidAt?: true
  }

  export type CrediarioPaymentCountAggregateInputType = {
    id?: true
    accountId?: true
    amount?: true
    paymentMethod?: true
    paidAt?: true
    _all?: true
  }

  export type CrediarioPaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CrediarioPayment to aggregate.
     */
    where?: CrediarioPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrediarioPayments to fetch.
     */
    orderBy?: CrediarioPaymentOrderByWithRelationInput | CrediarioPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CrediarioPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrediarioPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrediarioPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CrediarioPayments
    **/
    _count?: true | CrediarioPaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CrediarioPaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CrediarioPaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CrediarioPaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CrediarioPaymentMaxAggregateInputType
  }

  export type GetCrediarioPaymentAggregateType<T extends CrediarioPaymentAggregateArgs> = {
        [P in keyof T & keyof AggregateCrediarioPayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCrediarioPayment[P]>
      : GetScalarType<T[P], AggregateCrediarioPayment[P]>
  }




  export type CrediarioPaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CrediarioPaymentWhereInput
    orderBy?: CrediarioPaymentOrderByWithAggregationInput | CrediarioPaymentOrderByWithAggregationInput[]
    by: CrediarioPaymentScalarFieldEnum[] | CrediarioPaymentScalarFieldEnum
    having?: CrediarioPaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CrediarioPaymentCountAggregateInputType | true
    _avg?: CrediarioPaymentAvgAggregateInputType
    _sum?: CrediarioPaymentSumAggregateInputType
    _min?: CrediarioPaymentMinAggregateInputType
    _max?: CrediarioPaymentMaxAggregateInputType
  }

  export type CrediarioPaymentGroupByOutputType = {
    id: bigint
    accountId: bigint
    amount: Decimal
    paymentMethod: string
    paidAt: Date
    _count: CrediarioPaymentCountAggregateOutputType | null
    _avg: CrediarioPaymentAvgAggregateOutputType | null
    _sum: CrediarioPaymentSumAggregateOutputType | null
    _min: CrediarioPaymentMinAggregateOutputType | null
    _max: CrediarioPaymentMaxAggregateOutputType | null
  }

  type GetCrediarioPaymentGroupByPayload<T extends CrediarioPaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CrediarioPaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CrediarioPaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CrediarioPaymentGroupByOutputType[P]>
            : GetScalarType<T[P], CrediarioPaymentGroupByOutputType[P]>
        }
      >
    >


  export type CrediarioPaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    amount?: boolean
    paymentMethod?: boolean
    paidAt?: boolean
    account?: boolean | CrediarioAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crediarioPayment"]>

  export type CrediarioPaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    amount?: boolean
    paymentMethod?: boolean
    paidAt?: boolean
    account?: boolean | CrediarioAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crediarioPayment"]>

  export type CrediarioPaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    amount?: boolean
    paymentMethod?: boolean
    paidAt?: boolean
    account?: boolean | CrediarioAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crediarioPayment"]>

  export type CrediarioPaymentSelectScalar = {
    id?: boolean
    accountId?: boolean
    amount?: boolean
    paymentMethod?: boolean
    paidAt?: boolean
  }

  export type CrediarioPaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "amount" | "paymentMethod" | "paidAt", ExtArgs["result"]["crediarioPayment"]>
  export type CrediarioPaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | CrediarioAccountDefaultArgs<ExtArgs>
  }
  export type CrediarioPaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | CrediarioAccountDefaultArgs<ExtArgs>
  }
  export type CrediarioPaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | CrediarioAccountDefaultArgs<ExtArgs>
  }

  export type $CrediarioPaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CrediarioPayment"
    objects: {
      account: Prisma.$CrediarioAccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      accountId: bigint
      amount: Prisma.Decimal
      paymentMethod: string
      paidAt: Date
    }, ExtArgs["result"]["crediarioPayment"]>
    composites: {}
  }

  type CrediarioPaymentGetPayload<S extends boolean | null | undefined | CrediarioPaymentDefaultArgs> = $Result.GetResult<Prisma.$CrediarioPaymentPayload, S>

  type CrediarioPaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CrediarioPaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CrediarioPaymentCountAggregateInputType | true
    }

  export interface CrediarioPaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CrediarioPayment'], meta: { name: 'CrediarioPayment' } }
    /**
     * Find zero or one CrediarioPayment that matches the filter.
     * @param {CrediarioPaymentFindUniqueArgs} args - Arguments to find a CrediarioPayment
     * @example
     * // Get one CrediarioPayment
     * const crediarioPayment = await prisma.crediarioPayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CrediarioPaymentFindUniqueArgs>(args: SelectSubset<T, CrediarioPaymentFindUniqueArgs<ExtArgs>>): Prisma__CrediarioPaymentClient<$Result.GetResult<Prisma.$CrediarioPaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CrediarioPayment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CrediarioPaymentFindUniqueOrThrowArgs} args - Arguments to find a CrediarioPayment
     * @example
     * // Get one CrediarioPayment
     * const crediarioPayment = await prisma.crediarioPayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CrediarioPaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, CrediarioPaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CrediarioPaymentClient<$Result.GetResult<Prisma.$CrediarioPaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CrediarioPayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrediarioPaymentFindFirstArgs} args - Arguments to find a CrediarioPayment
     * @example
     * // Get one CrediarioPayment
     * const crediarioPayment = await prisma.crediarioPayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CrediarioPaymentFindFirstArgs>(args?: SelectSubset<T, CrediarioPaymentFindFirstArgs<ExtArgs>>): Prisma__CrediarioPaymentClient<$Result.GetResult<Prisma.$CrediarioPaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CrediarioPayment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrediarioPaymentFindFirstOrThrowArgs} args - Arguments to find a CrediarioPayment
     * @example
     * // Get one CrediarioPayment
     * const crediarioPayment = await prisma.crediarioPayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CrediarioPaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, CrediarioPaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CrediarioPaymentClient<$Result.GetResult<Prisma.$CrediarioPaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CrediarioPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrediarioPaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CrediarioPayments
     * const crediarioPayments = await prisma.crediarioPayment.findMany()
     * 
     * // Get first 10 CrediarioPayments
     * const crediarioPayments = await prisma.crediarioPayment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const crediarioPaymentWithIdOnly = await prisma.crediarioPayment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CrediarioPaymentFindManyArgs>(args?: SelectSubset<T, CrediarioPaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrediarioPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CrediarioPayment.
     * @param {CrediarioPaymentCreateArgs} args - Arguments to create a CrediarioPayment.
     * @example
     * // Create one CrediarioPayment
     * const CrediarioPayment = await prisma.crediarioPayment.create({
     *   data: {
     *     // ... data to create a CrediarioPayment
     *   }
     * })
     * 
     */
    create<T extends CrediarioPaymentCreateArgs>(args: SelectSubset<T, CrediarioPaymentCreateArgs<ExtArgs>>): Prisma__CrediarioPaymentClient<$Result.GetResult<Prisma.$CrediarioPaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CrediarioPayments.
     * @param {CrediarioPaymentCreateManyArgs} args - Arguments to create many CrediarioPayments.
     * @example
     * // Create many CrediarioPayments
     * const crediarioPayment = await prisma.crediarioPayment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CrediarioPaymentCreateManyArgs>(args?: SelectSubset<T, CrediarioPaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CrediarioPayments and returns the data saved in the database.
     * @param {CrediarioPaymentCreateManyAndReturnArgs} args - Arguments to create many CrediarioPayments.
     * @example
     * // Create many CrediarioPayments
     * const crediarioPayment = await prisma.crediarioPayment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CrediarioPayments and only return the `id`
     * const crediarioPaymentWithIdOnly = await prisma.crediarioPayment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CrediarioPaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, CrediarioPaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrediarioPaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CrediarioPayment.
     * @param {CrediarioPaymentDeleteArgs} args - Arguments to delete one CrediarioPayment.
     * @example
     * // Delete one CrediarioPayment
     * const CrediarioPayment = await prisma.crediarioPayment.delete({
     *   where: {
     *     // ... filter to delete one CrediarioPayment
     *   }
     * })
     * 
     */
    delete<T extends CrediarioPaymentDeleteArgs>(args: SelectSubset<T, CrediarioPaymentDeleteArgs<ExtArgs>>): Prisma__CrediarioPaymentClient<$Result.GetResult<Prisma.$CrediarioPaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CrediarioPayment.
     * @param {CrediarioPaymentUpdateArgs} args - Arguments to update one CrediarioPayment.
     * @example
     * // Update one CrediarioPayment
     * const crediarioPayment = await prisma.crediarioPayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CrediarioPaymentUpdateArgs>(args: SelectSubset<T, CrediarioPaymentUpdateArgs<ExtArgs>>): Prisma__CrediarioPaymentClient<$Result.GetResult<Prisma.$CrediarioPaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CrediarioPayments.
     * @param {CrediarioPaymentDeleteManyArgs} args - Arguments to filter CrediarioPayments to delete.
     * @example
     * // Delete a few CrediarioPayments
     * const { count } = await prisma.crediarioPayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CrediarioPaymentDeleteManyArgs>(args?: SelectSubset<T, CrediarioPaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CrediarioPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrediarioPaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CrediarioPayments
     * const crediarioPayment = await prisma.crediarioPayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CrediarioPaymentUpdateManyArgs>(args: SelectSubset<T, CrediarioPaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CrediarioPayments and returns the data updated in the database.
     * @param {CrediarioPaymentUpdateManyAndReturnArgs} args - Arguments to update many CrediarioPayments.
     * @example
     * // Update many CrediarioPayments
     * const crediarioPayment = await prisma.crediarioPayment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CrediarioPayments and only return the `id`
     * const crediarioPaymentWithIdOnly = await prisma.crediarioPayment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CrediarioPaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, CrediarioPaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrediarioPaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CrediarioPayment.
     * @param {CrediarioPaymentUpsertArgs} args - Arguments to update or create a CrediarioPayment.
     * @example
     * // Update or create a CrediarioPayment
     * const crediarioPayment = await prisma.crediarioPayment.upsert({
     *   create: {
     *     // ... data to create a CrediarioPayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CrediarioPayment we want to update
     *   }
     * })
     */
    upsert<T extends CrediarioPaymentUpsertArgs>(args: SelectSubset<T, CrediarioPaymentUpsertArgs<ExtArgs>>): Prisma__CrediarioPaymentClient<$Result.GetResult<Prisma.$CrediarioPaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CrediarioPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrediarioPaymentCountArgs} args - Arguments to filter CrediarioPayments to count.
     * @example
     * // Count the number of CrediarioPayments
     * const count = await prisma.crediarioPayment.count({
     *   where: {
     *     // ... the filter for the CrediarioPayments we want to count
     *   }
     * })
    **/
    count<T extends CrediarioPaymentCountArgs>(
      args?: Subset<T, CrediarioPaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CrediarioPaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CrediarioPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrediarioPaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CrediarioPaymentAggregateArgs>(args: Subset<T, CrediarioPaymentAggregateArgs>): Prisma.PrismaPromise<GetCrediarioPaymentAggregateType<T>>

    /**
     * Group by CrediarioPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrediarioPaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CrediarioPaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CrediarioPaymentGroupByArgs['orderBy'] }
        : { orderBy?: CrediarioPaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CrediarioPaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCrediarioPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CrediarioPayment model
   */
  readonly fields: CrediarioPaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CrediarioPayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CrediarioPaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends CrediarioAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CrediarioAccountDefaultArgs<ExtArgs>>): Prisma__CrediarioAccountClient<$Result.GetResult<Prisma.$CrediarioAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CrediarioPayment model
   */
  interface CrediarioPaymentFieldRefs {
    readonly id: FieldRef<"CrediarioPayment", 'BigInt'>
    readonly accountId: FieldRef<"CrediarioPayment", 'BigInt'>
    readonly amount: FieldRef<"CrediarioPayment", 'Decimal'>
    readonly paymentMethod: FieldRef<"CrediarioPayment", 'String'>
    readonly paidAt: FieldRef<"CrediarioPayment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CrediarioPayment findUnique
   */
  export type CrediarioPaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrediarioPayment
     */
    select?: CrediarioPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrediarioPayment
     */
    omit?: CrediarioPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrediarioPaymentInclude<ExtArgs> | null
    /**
     * Filter, which CrediarioPayment to fetch.
     */
    where: CrediarioPaymentWhereUniqueInput
  }

  /**
   * CrediarioPayment findUniqueOrThrow
   */
  export type CrediarioPaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrediarioPayment
     */
    select?: CrediarioPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrediarioPayment
     */
    omit?: CrediarioPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrediarioPaymentInclude<ExtArgs> | null
    /**
     * Filter, which CrediarioPayment to fetch.
     */
    where: CrediarioPaymentWhereUniqueInput
  }

  /**
   * CrediarioPayment findFirst
   */
  export type CrediarioPaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrediarioPayment
     */
    select?: CrediarioPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrediarioPayment
     */
    omit?: CrediarioPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrediarioPaymentInclude<ExtArgs> | null
    /**
     * Filter, which CrediarioPayment to fetch.
     */
    where?: CrediarioPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrediarioPayments to fetch.
     */
    orderBy?: CrediarioPaymentOrderByWithRelationInput | CrediarioPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CrediarioPayments.
     */
    cursor?: CrediarioPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrediarioPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrediarioPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CrediarioPayments.
     */
    distinct?: CrediarioPaymentScalarFieldEnum | CrediarioPaymentScalarFieldEnum[]
  }

  /**
   * CrediarioPayment findFirstOrThrow
   */
  export type CrediarioPaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrediarioPayment
     */
    select?: CrediarioPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrediarioPayment
     */
    omit?: CrediarioPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrediarioPaymentInclude<ExtArgs> | null
    /**
     * Filter, which CrediarioPayment to fetch.
     */
    where?: CrediarioPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrediarioPayments to fetch.
     */
    orderBy?: CrediarioPaymentOrderByWithRelationInput | CrediarioPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CrediarioPayments.
     */
    cursor?: CrediarioPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrediarioPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrediarioPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CrediarioPayments.
     */
    distinct?: CrediarioPaymentScalarFieldEnum | CrediarioPaymentScalarFieldEnum[]
  }

  /**
   * CrediarioPayment findMany
   */
  export type CrediarioPaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrediarioPayment
     */
    select?: CrediarioPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrediarioPayment
     */
    omit?: CrediarioPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrediarioPaymentInclude<ExtArgs> | null
    /**
     * Filter, which CrediarioPayments to fetch.
     */
    where?: CrediarioPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrediarioPayments to fetch.
     */
    orderBy?: CrediarioPaymentOrderByWithRelationInput | CrediarioPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CrediarioPayments.
     */
    cursor?: CrediarioPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrediarioPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrediarioPayments.
     */
    skip?: number
    distinct?: CrediarioPaymentScalarFieldEnum | CrediarioPaymentScalarFieldEnum[]
  }

  /**
   * CrediarioPayment create
   */
  export type CrediarioPaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrediarioPayment
     */
    select?: CrediarioPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrediarioPayment
     */
    omit?: CrediarioPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrediarioPaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a CrediarioPayment.
     */
    data: XOR<CrediarioPaymentCreateInput, CrediarioPaymentUncheckedCreateInput>
  }

  /**
   * CrediarioPayment createMany
   */
  export type CrediarioPaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CrediarioPayments.
     */
    data: CrediarioPaymentCreateManyInput | CrediarioPaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CrediarioPayment createManyAndReturn
   */
  export type CrediarioPaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrediarioPayment
     */
    select?: CrediarioPaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CrediarioPayment
     */
    omit?: CrediarioPaymentOmit<ExtArgs> | null
    /**
     * The data used to create many CrediarioPayments.
     */
    data: CrediarioPaymentCreateManyInput | CrediarioPaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrediarioPaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CrediarioPayment update
   */
  export type CrediarioPaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrediarioPayment
     */
    select?: CrediarioPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrediarioPayment
     */
    omit?: CrediarioPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrediarioPaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a CrediarioPayment.
     */
    data: XOR<CrediarioPaymentUpdateInput, CrediarioPaymentUncheckedUpdateInput>
    /**
     * Choose, which CrediarioPayment to update.
     */
    where: CrediarioPaymentWhereUniqueInput
  }

  /**
   * CrediarioPayment updateMany
   */
  export type CrediarioPaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CrediarioPayments.
     */
    data: XOR<CrediarioPaymentUpdateManyMutationInput, CrediarioPaymentUncheckedUpdateManyInput>
    /**
     * Filter which CrediarioPayments to update
     */
    where?: CrediarioPaymentWhereInput
    /**
     * Limit how many CrediarioPayments to update.
     */
    limit?: number
  }

  /**
   * CrediarioPayment updateManyAndReturn
   */
  export type CrediarioPaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrediarioPayment
     */
    select?: CrediarioPaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CrediarioPayment
     */
    omit?: CrediarioPaymentOmit<ExtArgs> | null
    /**
     * The data used to update CrediarioPayments.
     */
    data: XOR<CrediarioPaymentUpdateManyMutationInput, CrediarioPaymentUncheckedUpdateManyInput>
    /**
     * Filter which CrediarioPayments to update
     */
    where?: CrediarioPaymentWhereInput
    /**
     * Limit how many CrediarioPayments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrediarioPaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CrediarioPayment upsert
   */
  export type CrediarioPaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrediarioPayment
     */
    select?: CrediarioPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrediarioPayment
     */
    omit?: CrediarioPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrediarioPaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the CrediarioPayment to update in case it exists.
     */
    where: CrediarioPaymentWhereUniqueInput
    /**
     * In case the CrediarioPayment found by the `where` argument doesn't exist, create a new CrediarioPayment with this data.
     */
    create: XOR<CrediarioPaymentCreateInput, CrediarioPaymentUncheckedCreateInput>
    /**
     * In case the CrediarioPayment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CrediarioPaymentUpdateInput, CrediarioPaymentUncheckedUpdateInput>
  }

  /**
   * CrediarioPayment delete
   */
  export type CrediarioPaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrediarioPayment
     */
    select?: CrediarioPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrediarioPayment
     */
    omit?: CrediarioPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrediarioPaymentInclude<ExtArgs> | null
    /**
     * Filter which CrediarioPayment to delete.
     */
    where: CrediarioPaymentWhereUniqueInput
  }

  /**
   * CrediarioPayment deleteMany
   */
  export type CrediarioPaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CrediarioPayments to delete
     */
    where?: CrediarioPaymentWhereInput
    /**
     * Limit how many CrediarioPayments to delete.
     */
    limit?: number
  }

  /**
   * CrediarioPayment without action
   */
  export type CrediarioPaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrediarioPayment
     */
    select?: CrediarioPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrediarioPayment
     */
    omit?: CrediarioPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrediarioPaymentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    barcode: 'barcode',
    category: 'category',
    brand: 'brand',
    costPrice: 'costPrice',
    salePrice: 'salePrice',
    stock: 'stock',
    minStock: 'minStock',
    createdAt: 'createdAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const StockAdjustmentScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    previousStock: 'previousStock',
    newStock: 'newStock',
    reason: 'reason',
    createdAt: 'createdAt'
  };

  export type StockAdjustmentScalarFieldEnum = (typeof StockAdjustmentScalarFieldEnum)[keyof typeof StockAdjustmentScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    city: 'city',
    lastPurchaseAt: 'lastPurchaseAt',
    totalSpent: 'totalSpent',
    createdAt: 'createdAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const SupplierScalarFieldEnum: {
    id: 'id',
    legalName: 'legalName',
    tradeName: 'tradeName',
    cnpj: 'cnpj',
    contactName: 'contactName',
    createdAt: 'createdAt'
  };

  export type SupplierScalarFieldEnum = (typeof SupplierScalarFieldEnum)[keyof typeof SupplierScalarFieldEnum]


  export const CashRegisterScalarFieldEnum: {
    id: 'id',
    openedAt: 'openedAt',
    closedAt: 'closedAt',
    openingAmount: 'openingAmount',
    status: 'status'
  };

  export type CashRegisterScalarFieldEnum = (typeof CashRegisterScalarFieldEnum)[keyof typeof CashRegisterScalarFieldEnum]


  export const CashWithdrawalScalarFieldEnum: {
    id: 'id',
    cashRegisterId: 'cashRegisterId',
    amount: 'amount',
    reason: 'reason',
    createdAt: 'createdAt'
  };

  export type CashWithdrawalScalarFieldEnum = (typeof CashWithdrawalScalarFieldEnum)[keyof typeof CashWithdrawalScalarFieldEnum]


  export const SaleScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    customerNameFree: 'customerNameFree',
    cashRegisterId: 'cashRegisterId',
    discount: 'discount',
    surcharge: 'surcharge',
    total: 'total',
    paymentMethod: 'paymentMethod',
    installments: 'installments',
    downPayment: 'downPayment',
    createdAt: 'createdAt'
  };

  export type SaleScalarFieldEnum = (typeof SaleScalarFieldEnum)[keyof typeof SaleScalarFieldEnum]


  export const SaleItemScalarFieldEnum: {
    id: 'id',
    saleId: 'saleId',
    productId: 'productId',
    quantity: 'quantity',
    unitPrice: 'unitPrice'
  };

  export type SaleItemScalarFieldEnum = (typeof SaleItemScalarFieldEnum)[keyof typeof SaleItemScalarFieldEnum]


  export const PayableScalarFieldEnum: {
    id: 'id',
    supplierId: 'supplierId',
    supplierNameFree: 'supplierNameFree',
    category: 'category',
    amount: 'amount',
    description: 'description',
    paymentMethod: 'paymentMethod',
    dueDate: 'dueDate',
    invoiceNumber: 'invoiceNumber',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type PayableScalarFieldEnum = (typeof PayableScalarFieldEnum)[keyof typeof PayableScalarFieldEnum]


  export const CrediarioAccountScalarFieldEnum: {
    id: 'id',
    saleId: 'saleId',
    customerId: 'customerId',
    customerNameFree: 'customerNameFree',
    totalAmount: 'totalAmount',
    paidAmount: 'paidAmount',
    balance: 'balance',
    status: 'status',
    termDays: 'termDays',
    installments: 'installments',
    dueDate: 'dueDate',
    createdAt: 'createdAt'
  };

  export type CrediarioAccountScalarFieldEnum = (typeof CrediarioAccountScalarFieldEnum)[keyof typeof CrediarioAccountScalarFieldEnum]


  export const CrediarioPaymentScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    amount: 'amount',
    paymentMethod: 'paymentMethod',
    paidAt: 'paidAt'
  };

  export type CrediarioPaymentScalarFieldEnum = (typeof CrediarioPaymentScalarFieldEnum)[keyof typeof CrediarioPaymentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: BigIntFilter<"User"> | bigint | number
    username?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"User"> | bigint | number
    username?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: BigIntFilter<"Product"> | bigint | number
    name?: StringFilter<"Product"> | string
    barcode?: StringFilter<"Product"> | string
    category?: StringFilter<"Product"> | string
    brand?: StringNullableFilter<"Product"> | string | null
    costPrice?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    salePrice?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    stock?: IntFilter<"Product"> | number
    minStock?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    saleItems?: SaleItemListRelationFilter
    stockAdjustments?: StockAdjustmentListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    barcode?: SortOrder
    category?: SortOrder
    brand?: SortOrderInput | SortOrder
    costPrice?: SortOrder
    salePrice?: SortOrder
    stock?: SortOrder
    minStock?: SortOrder
    createdAt?: SortOrder
    saleItems?: SaleItemOrderByRelationAggregateInput
    stockAdjustments?: StockAdjustmentOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    barcode?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    category?: StringFilter<"Product"> | string
    brand?: StringNullableFilter<"Product"> | string | null
    costPrice?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    salePrice?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    stock?: IntFilter<"Product"> | number
    minStock?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    saleItems?: SaleItemListRelationFilter
    stockAdjustments?: StockAdjustmentListRelationFilter
  }, "id" | "barcode">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    barcode?: SortOrder
    category?: SortOrder
    brand?: SortOrderInput | SortOrder
    costPrice?: SortOrder
    salePrice?: SortOrder
    stock?: SortOrder
    minStock?: SortOrder
    createdAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Product"> | bigint | number
    name?: StringWithAggregatesFilter<"Product"> | string
    barcode?: StringWithAggregatesFilter<"Product"> | string
    category?: StringWithAggregatesFilter<"Product"> | string
    brand?: StringNullableWithAggregatesFilter<"Product"> | string | null
    costPrice?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    salePrice?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    stock?: IntWithAggregatesFilter<"Product"> | number
    minStock?: IntWithAggregatesFilter<"Product"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type StockAdjustmentWhereInput = {
    AND?: StockAdjustmentWhereInput | StockAdjustmentWhereInput[]
    OR?: StockAdjustmentWhereInput[]
    NOT?: StockAdjustmentWhereInput | StockAdjustmentWhereInput[]
    id?: BigIntFilter<"StockAdjustment"> | bigint | number
    productId?: BigIntFilter<"StockAdjustment"> | bigint | number
    previousStock?: IntFilter<"StockAdjustment"> | number
    newStock?: IntFilter<"StockAdjustment"> | number
    reason?: StringNullableFilter<"StockAdjustment"> | string | null
    createdAt?: DateTimeFilter<"StockAdjustment"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type StockAdjustmentOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    previousStock?: SortOrder
    newStock?: SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type StockAdjustmentWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: StockAdjustmentWhereInput | StockAdjustmentWhereInput[]
    OR?: StockAdjustmentWhereInput[]
    NOT?: StockAdjustmentWhereInput | StockAdjustmentWhereInput[]
    productId?: BigIntFilter<"StockAdjustment"> | bigint | number
    previousStock?: IntFilter<"StockAdjustment"> | number
    newStock?: IntFilter<"StockAdjustment"> | number
    reason?: StringNullableFilter<"StockAdjustment"> | string | null
    createdAt?: DateTimeFilter<"StockAdjustment"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type StockAdjustmentOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    previousStock?: SortOrder
    newStock?: SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: StockAdjustmentCountOrderByAggregateInput
    _avg?: StockAdjustmentAvgOrderByAggregateInput
    _max?: StockAdjustmentMaxOrderByAggregateInput
    _min?: StockAdjustmentMinOrderByAggregateInput
    _sum?: StockAdjustmentSumOrderByAggregateInput
  }

  export type StockAdjustmentScalarWhereWithAggregatesInput = {
    AND?: StockAdjustmentScalarWhereWithAggregatesInput | StockAdjustmentScalarWhereWithAggregatesInput[]
    OR?: StockAdjustmentScalarWhereWithAggregatesInput[]
    NOT?: StockAdjustmentScalarWhereWithAggregatesInput | StockAdjustmentScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"StockAdjustment"> | bigint | number
    productId?: BigIntWithAggregatesFilter<"StockAdjustment"> | bigint | number
    previousStock?: IntWithAggregatesFilter<"StockAdjustment"> | number
    newStock?: IntWithAggregatesFilter<"StockAdjustment"> | number
    reason?: StringNullableWithAggregatesFilter<"StockAdjustment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"StockAdjustment"> | Date | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: BigIntFilter<"Customer"> | bigint | number
    name?: StringFilter<"Customer"> | string
    phone?: StringNullableFilter<"Customer"> | string | null
    city?: StringNullableFilter<"Customer"> | string | null
    lastPurchaseAt?: DateTimeNullableFilter<"Customer"> | Date | string | null
    totalSpent?: DecimalFilter<"Customer"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    sales?: SaleListRelationFilter
    crediarioAccounts?: CrediarioAccountListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    lastPurchaseAt?: SortOrderInput | SortOrder
    totalSpent?: SortOrder
    createdAt?: SortOrder
    sales?: SaleOrderByRelationAggregateInput
    crediarioAccounts?: CrediarioAccountOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    phone?: StringNullableFilter<"Customer"> | string | null
    city?: StringNullableFilter<"Customer"> | string | null
    lastPurchaseAt?: DateTimeNullableFilter<"Customer"> | Date | string | null
    totalSpent?: DecimalFilter<"Customer"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    sales?: SaleListRelationFilter
    crediarioAccounts?: CrediarioAccountListRelationFilter
  }, "id">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    lastPurchaseAt?: SortOrderInput | SortOrder
    totalSpent?: SortOrder
    createdAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Customer"> | bigint | number
    name?: StringWithAggregatesFilter<"Customer"> | string
    phone?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    city?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    lastPurchaseAt?: DateTimeNullableWithAggregatesFilter<"Customer"> | Date | string | null
    totalSpent?: DecimalWithAggregatesFilter<"Customer"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type SupplierWhereInput = {
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    id?: BigIntFilter<"Supplier"> | bigint | number
    legalName?: StringFilter<"Supplier"> | string
    tradeName?: StringNullableFilter<"Supplier"> | string | null
    cnpj?: StringNullableFilter<"Supplier"> | string | null
    contactName?: StringNullableFilter<"Supplier"> | string | null
    createdAt?: DateTimeFilter<"Supplier"> | Date | string
    payables?: PayableListRelationFilter
  }

  export type SupplierOrderByWithRelationInput = {
    id?: SortOrder
    legalName?: SortOrder
    tradeName?: SortOrderInput | SortOrder
    cnpj?: SortOrderInput | SortOrder
    contactName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    payables?: PayableOrderByRelationAggregateInput
  }

  export type SupplierWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    legalName?: StringFilter<"Supplier"> | string
    tradeName?: StringNullableFilter<"Supplier"> | string | null
    cnpj?: StringNullableFilter<"Supplier"> | string | null
    contactName?: StringNullableFilter<"Supplier"> | string | null
    createdAt?: DateTimeFilter<"Supplier"> | Date | string
    payables?: PayableListRelationFilter
  }, "id">

  export type SupplierOrderByWithAggregationInput = {
    id?: SortOrder
    legalName?: SortOrder
    tradeName?: SortOrderInput | SortOrder
    cnpj?: SortOrderInput | SortOrder
    contactName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SupplierCountOrderByAggregateInput
    _avg?: SupplierAvgOrderByAggregateInput
    _max?: SupplierMaxOrderByAggregateInput
    _min?: SupplierMinOrderByAggregateInput
    _sum?: SupplierSumOrderByAggregateInput
  }

  export type SupplierScalarWhereWithAggregatesInput = {
    AND?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    OR?: SupplierScalarWhereWithAggregatesInput[]
    NOT?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Supplier"> | bigint | number
    legalName?: StringWithAggregatesFilter<"Supplier"> | string
    tradeName?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    cnpj?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    contactName?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Supplier"> | Date | string
  }

  export type CashRegisterWhereInput = {
    AND?: CashRegisterWhereInput | CashRegisterWhereInput[]
    OR?: CashRegisterWhereInput[]
    NOT?: CashRegisterWhereInput | CashRegisterWhereInput[]
    id?: BigIntFilter<"CashRegister"> | bigint | number
    openedAt?: DateTimeFilter<"CashRegister"> | Date | string
    closedAt?: DateTimeNullableFilter<"CashRegister"> | Date | string | null
    openingAmount?: DecimalFilter<"CashRegister"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"CashRegister"> | string
    withdrawals?: CashWithdrawalListRelationFilter
    sales?: SaleListRelationFilter
  }

  export type CashRegisterOrderByWithRelationInput = {
    id?: SortOrder
    openedAt?: SortOrder
    closedAt?: SortOrderInput | SortOrder
    openingAmount?: SortOrder
    status?: SortOrder
    withdrawals?: CashWithdrawalOrderByRelationAggregateInput
    sales?: SaleOrderByRelationAggregateInput
  }

  export type CashRegisterWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: CashRegisterWhereInput | CashRegisterWhereInput[]
    OR?: CashRegisterWhereInput[]
    NOT?: CashRegisterWhereInput | CashRegisterWhereInput[]
    openedAt?: DateTimeFilter<"CashRegister"> | Date | string
    closedAt?: DateTimeNullableFilter<"CashRegister"> | Date | string | null
    openingAmount?: DecimalFilter<"CashRegister"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"CashRegister"> | string
    withdrawals?: CashWithdrawalListRelationFilter
    sales?: SaleListRelationFilter
  }, "id">

  export type CashRegisterOrderByWithAggregationInput = {
    id?: SortOrder
    openedAt?: SortOrder
    closedAt?: SortOrderInput | SortOrder
    openingAmount?: SortOrder
    status?: SortOrder
    _count?: CashRegisterCountOrderByAggregateInput
    _avg?: CashRegisterAvgOrderByAggregateInput
    _max?: CashRegisterMaxOrderByAggregateInput
    _min?: CashRegisterMinOrderByAggregateInput
    _sum?: CashRegisterSumOrderByAggregateInput
  }

  export type CashRegisterScalarWhereWithAggregatesInput = {
    AND?: CashRegisterScalarWhereWithAggregatesInput | CashRegisterScalarWhereWithAggregatesInput[]
    OR?: CashRegisterScalarWhereWithAggregatesInput[]
    NOT?: CashRegisterScalarWhereWithAggregatesInput | CashRegisterScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"CashRegister"> | bigint | number
    openedAt?: DateTimeWithAggregatesFilter<"CashRegister"> | Date | string
    closedAt?: DateTimeNullableWithAggregatesFilter<"CashRegister"> | Date | string | null
    openingAmount?: DecimalWithAggregatesFilter<"CashRegister"> | Decimal | DecimalJsLike | number | string
    status?: StringWithAggregatesFilter<"CashRegister"> | string
  }

  export type CashWithdrawalWhereInput = {
    AND?: CashWithdrawalWhereInput | CashWithdrawalWhereInput[]
    OR?: CashWithdrawalWhereInput[]
    NOT?: CashWithdrawalWhereInput | CashWithdrawalWhereInput[]
    id?: BigIntFilter<"CashWithdrawal"> | bigint | number
    cashRegisterId?: BigIntFilter<"CashWithdrawal"> | bigint | number
    amount?: DecimalFilter<"CashWithdrawal"> | Decimal | DecimalJsLike | number | string
    reason?: StringNullableFilter<"CashWithdrawal"> | string | null
    createdAt?: DateTimeFilter<"CashWithdrawal"> | Date | string
    cashRegister?: XOR<CashRegisterScalarRelationFilter, CashRegisterWhereInput>
  }

  export type CashWithdrawalOrderByWithRelationInput = {
    id?: SortOrder
    cashRegisterId?: SortOrder
    amount?: SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    cashRegister?: CashRegisterOrderByWithRelationInput
  }

  export type CashWithdrawalWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: CashWithdrawalWhereInput | CashWithdrawalWhereInput[]
    OR?: CashWithdrawalWhereInput[]
    NOT?: CashWithdrawalWhereInput | CashWithdrawalWhereInput[]
    cashRegisterId?: BigIntFilter<"CashWithdrawal"> | bigint | number
    amount?: DecimalFilter<"CashWithdrawal"> | Decimal | DecimalJsLike | number | string
    reason?: StringNullableFilter<"CashWithdrawal"> | string | null
    createdAt?: DateTimeFilter<"CashWithdrawal"> | Date | string
    cashRegister?: XOR<CashRegisterScalarRelationFilter, CashRegisterWhereInput>
  }, "id">

  export type CashWithdrawalOrderByWithAggregationInput = {
    id?: SortOrder
    cashRegisterId?: SortOrder
    amount?: SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CashWithdrawalCountOrderByAggregateInput
    _avg?: CashWithdrawalAvgOrderByAggregateInput
    _max?: CashWithdrawalMaxOrderByAggregateInput
    _min?: CashWithdrawalMinOrderByAggregateInput
    _sum?: CashWithdrawalSumOrderByAggregateInput
  }

  export type CashWithdrawalScalarWhereWithAggregatesInput = {
    AND?: CashWithdrawalScalarWhereWithAggregatesInput | CashWithdrawalScalarWhereWithAggregatesInput[]
    OR?: CashWithdrawalScalarWhereWithAggregatesInput[]
    NOT?: CashWithdrawalScalarWhereWithAggregatesInput | CashWithdrawalScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"CashWithdrawal"> | bigint | number
    cashRegisterId?: BigIntWithAggregatesFilter<"CashWithdrawal"> | bigint | number
    amount?: DecimalWithAggregatesFilter<"CashWithdrawal"> | Decimal | DecimalJsLike | number | string
    reason?: StringNullableWithAggregatesFilter<"CashWithdrawal"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CashWithdrawal"> | Date | string
  }

  export type SaleWhereInput = {
    AND?: SaleWhereInput | SaleWhereInput[]
    OR?: SaleWhereInput[]
    NOT?: SaleWhereInput | SaleWhereInput[]
    id?: BigIntFilter<"Sale"> | bigint | number
    customerId?: BigIntNullableFilter<"Sale"> | bigint | number | null
    customerNameFree?: StringNullableFilter<"Sale"> | string | null
    cashRegisterId?: BigIntNullableFilter<"Sale"> | bigint | number | null
    discount?: DecimalFilter<"Sale"> | Decimal | DecimalJsLike | number | string
    surcharge?: DecimalFilter<"Sale"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"Sale"> | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFilter<"Sale"> | string
    installments?: IntNullableFilter<"Sale"> | number | null
    downPayment?: DecimalNullableFilter<"Sale"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"Sale"> | Date | string
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
    cashRegister?: XOR<CashRegisterNullableScalarRelationFilter, CashRegisterWhereInput> | null
    items?: SaleItemListRelationFilter
    crediarioAccount?: XOR<CrediarioAccountNullableScalarRelationFilter, CrediarioAccountWhereInput> | null
  }

  export type SaleOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrderInput | SortOrder
    customerNameFree?: SortOrderInput | SortOrder
    cashRegisterId?: SortOrderInput | SortOrder
    discount?: SortOrder
    surcharge?: SortOrder
    total?: SortOrder
    paymentMethod?: SortOrder
    installments?: SortOrderInput | SortOrder
    downPayment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    cashRegister?: CashRegisterOrderByWithRelationInput
    items?: SaleItemOrderByRelationAggregateInput
    crediarioAccount?: CrediarioAccountOrderByWithRelationInput
  }

  export type SaleWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: SaleWhereInput | SaleWhereInput[]
    OR?: SaleWhereInput[]
    NOT?: SaleWhereInput | SaleWhereInput[]
    customerId?: BigIntNullableFilter<"Sale"> | bigint | number | null
    customerNameFree?: StringNullableFilter<"Sale"> | string | null
    cashRegisterId?: BigIntNullableFilter<"Sale"> | bigint | number | null
    discount?: DecimalFilter<"Sale"> | Decimal | DecimalJsLike | number | string
    surcharge?: DecimalFilter<"Sale"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"Sale"> | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFilter<"Sale"> | string
    installments?: IntNullableFilter<"Sale"> | number | null
    downPayment?: DecimalNullableFilter<"Sale"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"Sale"> | Date | string
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
    cashRegister?: XOR<CashRegisterNullableScalarRelationFilter, CashRegisterWhereInput> | null
    items?: SaleItemListRelationFilter
    crediarioAccount?: XOR<CrediarioAccountNullableScalarRelationFilter, CrediarioAccountWhereInput> | null
  }, "id">

  export type SaleOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrderInput | SortOrder
    customerNameFree?: SortOrderInput | SortOrder
    cashRegisterId?: SortOrderInput | SortOrder
    discount?: SortOrder
    surcharge?: SortOrder
    total?: SortOrder
    paymentMethod?: SortOrder
    installments?: SortOrderInput | SortOrder
    downPayment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SaleCountOrderByAggregateInput
    _avg?: SaleAvgOrderByAggregateInput
    _max?: SaleMaxOrderByAggregateInput
    _min?: SaleMinOrderByAggregateInput
    _sum?: SaleSumOrderByAggregateInput
  }

  export type SaleScalarWhereWithAggregatesInput = {
    AND?: SaleScalarWhereWithAggregatesInput | SaleScalarWhereWithAggregatesInput[]
    OR?: SaleScalarWhereWithAggregatesInput[]
    NOT?: SaleScalarWhereWithAggregatesInput | SaleScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Sale"> | bigint | number
    customerId?: BigIntNullableWithAggregatesFilter<"Sale"> | bigint | number | null
    customerNameFree?: StringNullableWithAggregatesFilter<"Sale"> | string | null
    cashRegisterId?: BigIntNullableWithAggregatesFilter<"Sale"> | bigint | number | null
    discount?: DecimalWithAggregatesFilter<"Sale"> | Decimal | DecimalJsLike | number | string
    surcharge?: DecimalWithAggregatesFilter<"Sale"> | Decimal | DecimalJsLike | number | string
    total?: DecimalWithAggregatesFilter<"Sale"> | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringWithAggregatesFilter<"Sale"> | string
    installments?: IntNullableWithAggregatesFilter<"Sale"> | number | null
    downPayment?: DecimalNullableWithAggregatesFilter<"Sale"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Sale"> | Date | string
  }

  export type SaleItemWhereInput = {
    AND?: SaleItemWhereInput | SaleItemWhereInput[]
    OR?: SaleItemWhereInput[]
    NOT?: SaleItemWhereInput | SaleItemWhereInput[]
    id?: BigIntFilter<"SaleItem"> | bigint | number
    saleId?: BigIntFilter<"SaleItem"> | bigint | number
    productId?: BigIntFilter<"SaleItem"> | bigint | number
    quantity?: IntFilter<"SaleItem"> | number
    unitPrice?: DecimalFilter<"SaleItem"> | Decimal | DecimalJsLike | number | string
    sale?: XOR<SaleScalarRelationFilter, SaleWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type SaleItemOrderByWithRelationInput = {
    id?: SortOrder
    saleId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    sale?: SaleOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type SaleItemWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: SaleItemWhereInput | SaleItemWhereInput[]
    OR?: SaleItemWhereInput[]
    NOT?: SaleItemWhereInput | SaleItemWhereInput[]
    saleId?: BigIntFilter<"SaleItem"> | bigint | number
    productId?: BigIntFilter<"SaleItem"> | bigint | number
    quantity?: IntFilter<"SaleItem"> | number
    unitPrice?: DecimalFilter<"SaleItem"> | Decimal | DecimalJsLike | number | string
    sale?: XOR<SaleScalarRelationFilter, SaleWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type SaleItemOrderByWithAggregationInput = {
    id?: SortOrder
    saleId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    _count?: SaleItemCountOrderByAggregateInput
    _avg?: SaleItemAvgOrderByAggregateInput
    _max?: SaleItemMaxOrderByAggregateInput
    _min?: SaleItemMinOrderByAggregateInput
    _sum?: SaleItemSumOrderByAggregateInput
  }

  export type SaleItemScalarWhereWithAggregatesInput = {
    AND?: SaleItemScalarWhereWithAggregatesInput | SaleItemScalarWhereWithAggregatesInput[]
    OR?: SaleItemScalarWhereWithAggregatesInput[]
    NOT?: SaleItemScalarWhereWithAggregatesInput | SaleItemScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"SaleItem"> | bigint | number
    saleId?: BigIntWithAggregatesFilter<"SaleItem"> | bigint | number
    productId?: BigIntWithAggregatesFilter<"SaleItem"> | bigint | number
    quantity?: IntWithAggregatesFilter<"SaleItem"> | number
    unitPrice?: DecimalWithAggregatesFilter<"SaleItem"> | Decimal | DecimalJsLike | number | string
  }

  export type PayableWhereInput = {
    AND?: PayableWhereInput | PayableWhereInput[]
    OR?: PayableWhereInput[]
    NOT?: PayableWhereInput | PayableWhereInput[]
    id?: BigIntFilter<"Payable"> | bigint | number
    supplierId?: BigIntNullableFilter<"Payable"> | bigint | number | null
    supplierNameFree?: StringNullableFilter<"Payable"> | string | null
    category?: StringFilter<"Payable"> | string
    amount?: DecimalFilter<"Payable"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"Payable"> | string | null
    paymentMethod?: StringFilter<"Payable"> | string
    dueDate?: DateTimeFilter<"Payable"> | Date | string
    invoiceNumber?: StringNullableFilter<"Payable"> | string | null
    status?: StringFilter<"Payable"> | string
    createdAt?: DateTimeFilter<"Payable"> | Date | string
    supplier?: XOR<SupplierNullableScalarRelationFilter, SupplierWhereInput> | null
  }

  export type PayableOrderByWithRelationInput = {
    id?: SortOrder
    supplierId?: SortOrderInput | SortOrder
    supplierNameFree?: SortOrderInput | SortOrder
    category?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    paymentMethod?: SortOrder
    dueDate?: SortOrder
    invoiceNumber?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    supplier?: SupplierOrderByWithRelationInput
  }

  export type PayableWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: PayableWhereInput | PayableWhereInput[]
    OR?: PayableWhereInput[]
    NOT?: PayableWhereInput | PayableWhereInput[]
    supplierId?: BigIntNullableFilter<"Payable"> | bigint | number | null
    supplierNameFree?: StringNullableFilter<"Payable"> | string | null
    category?: StringFilter<"Payable"> | string
    amount?: DecimalFilter<"Payable"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"Payable"> | string | null
    paymentMethod?: StringFilter<"Payable"> | string
    dueDate?: DateTimeFilter<"Payable"> | Date | string
    invoiceNumber?: StringNullableFilter<"Payable"> | string | null
    status?: StringFilter<"Payable"> | string
    createdAt?: DateTimeFilter<"Payable"> | Date | string
    supplier?: XOR<SupplierNullableScalarRelationFilter, SupplierWhereInput> | null
  }, "id">

  export type PayableOrderByWithAggregationInput = {
    id?: SortOrder
    supplierId?: SortOrderInput | SortOrder
    supplierNameFree?: SortOrderInput | SortOrder
    category?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    paymentMethod?: SortOrder
    dueDate?: SortOrder
    invoiceNumber?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: PayableCountOrderByAggregateInput
    _avg?: PayableAvgOrderByAggregateInput
    _max?: PayableMaxOrderByAggregateInput
    _min?: PayableMinOrderByAggregateInput
    _sum?: PayableSumOrderByAggregateInput
  }

  export type PayableScalarWhereWithAggregatesInput = {
    AND?: PayableScalarWhereWithAggregatesInput | PayableScalarWhereWithAggregatesInput[]
    OR?: PayableScalarWhereWithAggregatesInput[]
    NOT?: PayableScalarWhereWithAggregatesInput | PayableScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Payable"> | bigint | number
    supplierId?: BigIntNullableWithAggregatesFilter<"Payable"> | bigint | number | null
    supplierNameFree?: StringNullableWithAggregatesFilter<"Payable"> | string | null
    category?: StringWithAggregatesFilter<"Payable"> | string
    amount?: DecimalWithAggregatesFilter<"Payable"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableWithAggregatesFilter<"Payable"> | string | null
    paymentMethod?: StringWithAggregatesFilter<"Payable"> | string
    dueDate?: DateTimeWithAggregatesFilter<"Payable"> | Date | string
    invoiceNumber?: StringNullableWithAggregatesFilter<"Payable"> | string | null
    status?: StringWithAggregatesFilter<"Payable"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Payable"> | Date | string
  }

  export type CrediarioAccountWhereInput = {
    AND?: CrediarioAccountWhereInput | CrediarioAccountWhereInput[]
    OR?: CrediarioAccountWhereInput[]
    NOT?: CrediarioAccountWhereInput | CrediarioAccountWhereInput[]
    id?: BigIntFilter<"CrediarioAccount"> | bigint | number
    saleId?: BigIntFilter<"CrediarioAccount"> | bigint | number
    customerId?: BigIntNullableFilter<"CrediarioAccount"> | bigint | number | null
    customerNameFree?: StringNullableFilter<"CrediarioAccount"> | string | null
    totalAmount?: DecimalFilter<"CrediarioAccount"> | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFilter<"CrediarioAccount"> | Decimal | DecimalJsLike | number | string
    balance?: DecimalFilter<"CrediarioAccount"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"CrediarioAccount"> | string
    termDays?: IntNullableFilter<"CrediarioAccount"> | number | null
    installments?: IntNullableFilter<"CrediarioAccount"> | number | null
    dueDate?: DateTimeNullableFilter<"CrediarioAccount"> | Date | string | null
    createdAt?: DateTimeFilter<"CrediarioAccount"> | Date | string
    sale?: XOR<SaleScalarRelationFilter, SaleWhereInput>
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
    payments?: CrediarioPaymentListRelationFilter
  }

  export type CrediarioAccountOrderByWithRelationInput = {
    id?: SortOrder
    saleId?: SortOrder
    customerId?: SortOrderInput | SortOrder
    customerNameFree?: SortOrderInput | SortOrder
    totalAmount?: SortOrder
    paidAmount?: SortOrder
    balance?: SortOrder
    status?: SortOrder
    termDays?: SortOrderInput | SortOrder
    installments?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    sale?: SaleOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
    payments?: CrediarioPaymentOrderByRelationAggregateInput
  }

  export type CrediarioAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    saleId?: bigint | number
    AND?: CrediarioAccountWhereInput | CrediarioAccountWhereInput[]
    OR?: CrediarioAccountWhereInput[]
    NOT?: CrediarioAccountWhereInput | CrediarioAccountWhereInput[]
    customerId?: BigIntNullableFilter<"CrediarioAccount"> | bigint | number | null
    customerNameFree?: StringNullableFilter<"CrediarioAccount"> | string | null
    totalAmount?: DecimalFilter<"CrediarioAccount"> | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFilter<"CrediarioAccount"> | Decimal | DecimalJsLike | number | string
    balance?: DecimalFilter<"CrediarioAccount"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"CrediarioAccount"> | string
    termDays?: IntNullableFilter<"CrediarioAccount"> | number | null
    installments?: IntNullableFilter<"CrediarioAccount"> | number | null
    dueDate?: DateTimeNullableFilter<"CrediarioAccount"> | Date | string | null
    createdAt?: DateTimeFilter<"CrediarioAccount"> | Date | string
    sale?: XOR<SaleScalarRelationFilter, SaleWhereInput>
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
    payments?: CrediarioPaymentListRelationFilter
  }, "id" | "saleId">

  export type CrediarioAccountOrderByWithAggregationInput = {
    id?: SortOrder
    saleId?: SortOrder
    customerId?: SortOrderInput | SortOrder
    customerNameFree?: SortOrderInput | SortOrder
    totalAmount?: SortOrder
    paidAmount?: SortOrder
    balance?: SortOrder
    status?: SortOrder
    termDays?: SortOrderInput | SortOrder
    installments?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CrediarioAccountCountOrderByAggregateInput
    _avg?: CrediarioAccountAvgOrderByAggregateInput
    _max?: CrediarioAccountMaxOrderByAggregateInput
    _min?: CrediarioAccountMinOrderByAggregateInput
    _sum?: CrediarioAccountSumOrderByAggregateInput
  }

  export type CrediarioAccountScalarWhereWithAggregatesInput = {
    AND?: CrediarioAccountScalarWhereWithAggregatesInput | CrediarioAccountScalarWhereWithAggregatesInput[]
    OR?: CrediarioAccountScalarWhereWithAggregatesInput[]
    NOT?: CrediarioAccountScalarWhereWithAggregatesInput | CrediarioAccountScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"CrediarioAccount"> | bigint | number
    saleId?: BigIntWithAggregatesFilter<"CrediarioAccount"> | bigint | number
    customerId?: BigIntNullableWithAggregatesFilter<"CrediarioAccount"> | bigint | number | null
    customerNameFree?: StringNullableWithAggregatesFilter<"CrediarioAccount"> | string | null
    totalAmount?: DecimalWithAggregatesFilter<"CrediarioAccount"> | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalWithAggregatesFilter<"CrediarioAccount"> | Decimal | DecimalJsLike | number | string
    balance?: DecimalWithAggregatesFilter<"CrediarioAccount"> | Decimal | DecimalJsLike | number | string
    status?: StringWithAggregatesFilter<"CrediarioAccount"> | string
    termDays?: IntNullableWithAggregatesFilter<"CrediarioAccount"> | number | null
    installments?: IntNullableWithAggregatesFilter<"CrediarioAccount"> | number | null
    dueDate?: DateTimeNullableWithAggregatesFilter<"CrediarioAccount"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CrediarioAccount"> | Date | string
  }

  export type CrediarioPaymentWhereInput = {
    AND?: CrediarioPaymentWhereInput | CrediarioPaymentWhereInput[]
    OR?: CrediarioPaymentWhereInput[]
    NOT?: CrediarioPaymentWhereInput | CrediarioPaymentWhereInput[]
    id?: BigIntFilter<"CrediarioPayment"> | bigint | number
    accountId?: BigIntFilter<"CrediarioPayment"> | bigint | number
    amount?: DecimalFilter<"CrediarioPayment"> | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFilter<"CrediarioPayment"> | string
    paidAt?: DateTimeFilter<"CrediarioPayment"> | Date | string
    account?: XOR<CrediarioAccountScalarRelationFilter, CrediarioAccountWhereInput>
  }

  export type CrediarioPaymentOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
    paidAt?: SortOrder
    account?: CrediarioAccountOrderByWithRelationInput
  }

  export type CrediarioPaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: CrediarioPaymentWhereInput | CrediarioPaymentWhereInput[]
    OR?: CrediarioPaymentWhereInput[]
    NOT?: CrediarioPaymentWhereInput | CrediarioPaymentWhereInput[]
    accountId?: BigIntFilter<"CrediarioPayment"> | bigint | number
    amount?: DecimalFilter<"CrediarioPayment"> | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFilter<"CrediarioPayment"> | string
    paidAt?: DateTimeFilter<"CrediarioPayment"> | Date | string
    account?: XOR<CrediarioAccountScalarRelationFilter, CrediarioAccountWhereInput>
  }, "id">

  export type CrediarioPaymentOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
    paidAt?: SortOrder
    _count?: CrediarioPaymentCountOrderByAggregateInput
    _avg?: CrediarioPaymentAvgOrderByAggregateInput
    _max?: CrediarioPaymentMaxOrderByAggregateInput
    _min?: CrediarioPaymentMinOrderByAggregateInput
    _sum?: CrediarioPaymentSumOrderByAggregateInput
  }

  export type CrediarioPaymentScalarWhereWithAggregatesInput = {
    AND?: CrediarioPaymentScalarWhereWithAggregatesInput | CrediarioPaymentScalarWhereWithAggregatesInput[]
    OR?: CrediarioPaymentScalarWhereWithAggregatesInput[]
    NOT?: CrediarioPaymentScalarWhereWithAggregatesInput | CrediarioPaymentScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"CrediarioPayment"> | bigint | number
    accountId?: BigIntWithAggregatesFilter<"CrediarioPayment"> | bigint | number
    amount?: DecimalWithAggregatesFilter<"CrediarioPayment"> | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringWithAggregatesFilter<"CrediarioPayment"> | string
    paidAt?: DateTimeWithAggregatesFilter<"CrediarioPayment"> | Date | string
  }

  export type UserCreateInput = {
    id?: bigint | number
    username: string
    passwordHash: string
    createdAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: bigint | number
    username: string
    passwordHash: string
    createdAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: bigint | number
    username: string
    passwordHash: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    id?: bigint | number
    name: string
    barcode: string
    category: string
    brand?: string | null
    costPrice: Decimal | DecimalJsLike | number | string
    salePrice: Decimal | DecimalJsLike | number | string
    stock?: number
    minStock?: number
    createdAt?: Date | string
    saleItems?: SaleItemCreateNestedManyWithoutProductInput
    stockAdjustments?: StockAdjustmentCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: bigint | number
    name: string
    barcode: string
    category: string
    brand?: string | null
    costPrice: Decimal | DecimalJsLike | number | string
    salePrice: Decimal | DecimalJsLike | number | string
    stock?: number
    minStock?: number
    createdAt?: Date | string
    saleItems?: SaleItemUncheckedCreateNestedManyWithoutProductInput
    stockAdjustments?: StockAdjustmentUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    costPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    minStock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleItems?: SaleItemUpdateManyWithoutProductNestedInput
    stockAdjustments?: StockAdjustmentUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    costPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    minStock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleItems?: SaleItemUncheckedUpdateManyWithoutProductNestedInput
    stockAdjustments?: StockAdjustmentUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: bigint | number
    name: string
    barcode: string
    category: string
    brand?: string | null
    costPrice: Decimal | DecimalJsLike | number | string
    salePrice: Decimal | DecimalJsLike | number | string
    stock?: number
    minStock?: number
    createdAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    costPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    minStock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    costPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    minStock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockAdjustmentCreateInput = {
    id?: bigint | number
    previousStock: number
    newStock: number
    reason?: string | null
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutStockAdjustmentsInput
  }

  export type StockAdjustmentUncheckedCreateInput = {
    id?: bigint | number
    productId: bigint | number
    previousStock: number
    newStock: number
    reason?: string | null
    createdAt?: Date | string
  }

  export type StockAdjustmentUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    previousStock?: IntFieldUpdateOperationsInput | number
    newStock?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutStockAdjustmentsNestedInput
  }

  export type StockAdjustmentUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    productId?: BigIntFieldUpdateOperationsInput | bigint | number
    previousStock?: IntFieldUpdateOperationsInput | number
    newStock?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockAdjustmentCreateManyInput = {
    id?: bigint | number
    productId: bigint | number
    previousStock: number
    newStock: number
    reason?: string | null
    createdAt?: Date | string
  }

  export type StockAdjustmentUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    previousStock?: IntFieldUpdateOperationsInput | number
    newStock?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockAdjustmentUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    productId?: BigIntFieldUpdateOperationsInput | bigint | number
    previousStock?: IntFieldUpdateOperationsInput | number
    newStock?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateInput = {
    id?: bigint | number
    name: string
    phone?: string | null
    city?: string | null
    lastPurchaseAt?: Date | string | null
    totalSpent?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    sales?: SaleCreateNestedManyWithoutCustomerInput
    crediarioAccounts?: CrediarioAccountCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: bigint | number
    name: string
    phone?: string | null
    city?: string | null
    lastPurchaseAt?: Date | string | null
    totalSpent?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    sales?: SaleUncheckedCreateNestedManyWithoutCustomerInput
    crediarioAccounts?: CrediarioAccountUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    lastPurchaseAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUpdateManyWithoutCustomerNestedInput
    crediarioAccounts?: CrediarioAccountUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    lastPurchaseAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUncheckedUpdateManyWithoutCustomerNestedInput
    crediarioAccounts?: CrediarioAccountUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: bigint | number
    name: string
    phone?: string | null
    city?: string | null
    lastPurchaseAt?: Date | string | null
    totalSpent?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    lastPurchaseAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    lastPurchaseAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierCreateInput = {
    id?: bigint | number
    legalName: string
    tradeName?: string | null
    cnpj?: string | null
    contactName?: string | null
    createdAt?: Date | string
    payables?: PayableCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateInput = {
    id?: bigint | number
    legalName: string
    tradeName?: string | null
    cnpj?: string | null
    contactName?: string | null
    createdAt?: Date | string
    payables?: PayableUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    legalName?: StringFieldUpdateOperationsInput | string
    tradeName?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payables?: PayableUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    legalName?: StringFieldUpdateOperationsInput | string
    tradeName?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payables?: PayableUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierCreateManyInput = {
    id?: bigint | number
    legalName: string
    tradeName?: string | null
    cnpj?: string | null
    contactName?: string | null
    createdAt?: Date | string
  }

  export type SupplierUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    legalName?: StringFieldUpdateOperationsInput | string
    tradeName?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    legalName?: StringFieldUpdateOperationsInput | string
    tradeName?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashRegisterCreateInput = {
    id?: bigint | number
    openedAt?: Date | string
    closedAt?: Date | string | null
    openingAmount: Decimal | DecimalJsLike | number | string
    status?: string
    withdrawals?: CashWithdrawalCreateNestedManyWithoutCashRegisterInput
    sales?: SaleCreateNestedManyWithoutCashRegisterInput
  }

  export type CashRegisterUncheckedCreateInput = {
    id?: bigint | number
    openedAt?: Date | string
    closedAt?: Date | string | null
    openingAmount: Decimal | DecimalJsLike | number | string
    status?: string
    withdrawals?: CashWithdrawalUncheckedCreateNestedManyWithoutCashRegisterInput
    sales?: SaleUncheckedCreateNestedManyWithoutCashRegisterInput
  }

  export type CashRegisterUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    withdrawals?: CashWithdrawalUpdateManyWithoutCashRegisterNestedInput
    sales?: SaleUpdateManyWithoutCashRegisterNestedInput
  }

  export type CashRegisterUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    withdrawals?: CashWithdrawalUncheckedUpdateManyWithoutCashRegisterNestedInput
    sales?: SaleUncheckedUpdateManyWithoutCashRegisterNestedInput
  }

  export type CashRegisterCreateManyInput = {
    id?: bigint | number
    openedAt?: Date | string
    closedAt?: Date | string | null
    openingAmount: Decimal | DecimalJsLike | number | string
    status?: string
  }

  export type CashRegisterUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type CashRegisterUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type CashWithdrawalCreateInput = {
    id?: bigint | number
    amount: Decimal | DecimalJsLike | number | string
    reason?: string | null
    createdAt?: Date | string
    cashRegister: CashRegisterCreateNestedOneWithoutWithdrawalsInput
  }

  export type CashWithdrawalUncheckedCreateInput = {
    id?: bigint | number
    cashRegisterId: bigint | number
    amount: Decimal | DecimalJsLike | number | string
    reason?: string | null
    createdAt?: Date | string
  }

  export type CashWithdrawalUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cashRegister?: CashRegisterUpdateOneRequiredWithoutWithdrawalsNestedInput
  }

  export type CashWithdrawalUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    cashRegisterId?: BigIntFieldUpdateOperationsInput | bigint | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashWithdrawalCreateManyInput = {
    id?: bigint | number
    cashRegisterId: bigint | number
    amount: Decimal | DecimalJsLike | number | string
    reason?: string | null
    createdAt?: Date | string
  }

  export type CashWithdrawalUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashWithdrawalUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    cashRegisterId?: BigIntFieldUpdateOperationsInput | bigint | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleCreateInput = {
    id?: bigint | number
    customerNameFree?: string | null
    discount?: Decimal | DecimalJsLike | number | string
    surcharge?: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    paymentMethod: string
    installments?: number | null
    downPayment?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    customer?: CustomerCreateNestedOneWithoutSalesInput
    cashRegister?: CashRegisterCreateNestedOneWithoutSalesInput
    items?: SaleItemCreateNestedManyWithoutSaleInput
    crediarioAccount?: CrediarioAccountCreateNestedOneWithoutSaleInput
  }

  export type SaleUncheckedCreateInput = {
    id?: bigint | number
    customerId?: bigint | number | null
    customerNameFree?: string | null
    cashRegisterId?: bigint | number | null
    discount?: Decimal | DecimalJsLike | number | string
    surcharge?: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    paymentMethod: string
    installments?: number | null
    downPayment?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    items?: SaleItemUncheckedCreateNestedManyWithoutSaleInput
    crediarioAccount?: CrediarioAccountUncheckedCreateNestedOneWithoutSaleInput
  }

  export type SaleUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    customerNameFree?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    surcharge?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    installments?: NullableIntFieldUpdateOperationsInput | number | null
    downPayment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneWithoutSalesNestedInput
    cashRegister?: CashRegisterUpdateOneWithoutSalesNestedInput
    items?: SaleItemUpdateManyWithoutSaleNestedInput
    crediarioAccount?: CrediarioAccountUpdateOneWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    customerId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    customerNameFree?: NullableStringFieldUpdateOperationsInput | string | null
    cashRegisterId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    surcharge?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    installments?: NullableIntFieldUpdateOperationsInput | number | null
    downPayment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SaleItemUncheckedUpdateManyWithoutSaleNestedInput
    crediarioAccount?: CrediarioAccountUncheckedUpdateOneWithoutSaleNestedInput
  }

  export type SaleCreateManyInput = {
    id?: bigint | number
    customerId?: bigint | number | null
    customerNameFree?: string | null
    cashRegisterId?: bigint | number | null
    discount?: Decimal | DecimalJsLike | number | string
    surcharge?: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    paymentMethod: string
    installments?: number | null
    downPayment?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
  }

  export type SaleUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    customerNameFree?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    surcharge?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    installments?: NullableIntFieldUpdateOperationsInput | number | null
    downPayment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    customerId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    customerNameFree?: NullableStringFieldUpdateOperationsInput | string | null
    cashRegisterId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    surcharge?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    installments?: NullableIntFieldUpdateOperationsInput | number | null
    downPayment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleItemCreateInput = {
    id?: bigint | number
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    sale: SaleCreateNestedOneWithoutItemsInput
    product: ProductCreateNestedOneWithoutSaleItemsInput
  }

  export type SaleItemUncheckedCreateInput = {
    id?: bigint | number
    saleId: bigint | number
    productId: bigint | number
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
  }

  export type SaleItemUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sale?: SaleUpdateOneRequiredWithoutItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutSaleItemsNestedInput
  }

  export type SaleItemUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    saleId?: BigIntFieldUpdateOperationsInput | bigint | number
    productId?: BigIntFieldUpdateOperationsInput | bigint | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type SaleItemCreateManyInput = {
    id?: bigint | number
    saleId: bigint | number
    productId: bigint | number
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
  }

  export type SaleItemUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type SaleItemUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    saleId?: BigIntFieldUpdateOperationsInput | bigint | number
    productId?: BigIntFieldUpdateOperationsInput | bigint | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PayableCreateInput = {
    id?: bigint | number
    supplierNameFree?: string | null
    category: string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    paymentMethod: string
    dueDate: Date | string
    invoiceNumber?: string | null
    status?: string
    createdAt?: Date | string
    supplier?: SupplierCreateNestedOneWithoutPayablesInput
  }

  export type PayableUncheckedCreateInput = {
    id?: bigint | number
    supplierId?: bigint | number | null
    supplierNameFree?: string | null
    category: string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    paymentMethod: string
    dueDate: Date | string
    invoiceNumber?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type PayableUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    supplierNameFree?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SupplierUpdateOneWithoutPayablesNestedInput
  }

  export type PayableUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    supplierId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    supplierNameFree?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayableCreateManyInput = {
    id?: bigint | number
    supplierId?: bigint | number | null
    supplierNameFree?: string | null
    category: string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    paymentMethod: string
    dueDate: Date | string
    invoiceNumber?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type PayableUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    supplierNameFree?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayableUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    supplierId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    supplierNameFree?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrediarioAccountCreateInput = {
    id?: bigint | number
    customerNameFree?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    balance: Decimal | DecimalJsLike | number | string
    status?: string
    termDays?: number | null
    installments?: number | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    sale: SaleCreateNestedOneWithoutCrediarioAccountInput
    customer?: CustomerCreateNestedOneWithoutCrediarioAccountsInput
    payments?: CrediarioPaymentCreateNestedManyWithoutAccountInput
  }

  export type CrediarioAccountUncheckedCreateInput = {
    id?: bigint | number
    saleId: bigint | number
    customerId?: bigint | number | null
    customerNameFree?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    balance: Decimal | DecimalJsLike | number | string
    status?: string
    termDays?: number | null
    installments?: number | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    payments?: CrediarioPaymentUncheckedCreateNestedManyWithoutAccountInput
  }

  export type CrediarioAccountUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    customerNameFree?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    termDays?: NullableIntFieldUpdateOperationsInput | number | null
    installments?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sale?: SaleUpdateOneRequiredWithoutCrediarioAccountNestedInput
    customer?: CustomerUpdateOneWithoutCrediarioAccountsNestedInput
    payments?: CrediarioPaymentUpdateManyWithoutAccountNestedInput
  }

  export type CrediarioAccountUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    saleId?: BigIntFieldUpdateOperationsInput | bigint | number
    customerId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    customerNameFree?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    termDays?: NullableIntFieldUpdateOperationsInput | number | null
    installments?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: CrediarioPaymentUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type CrediarioAccountCreateManyInput = {
    id?: bigint | number
    saleId: bigint | number
    customerId?: bigint | number | null
    customerNameFree?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    balance: Decimal | DecimalJsLike | number | string
    status?: string
    termDays?: number | null
    installments?: number | null
    dueDate?: Date | string | null
    createdAt?: Date | string
  }

  export type CrediarioAccountUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    customerNameFree?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    termDays?: NullableIntFieldUpdateOperationsInput | number | null
    installments?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrediarioAccountUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    saleId?: BigIntFieldUpdateOperationsInput | bigint | number
    customerId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    customerNameFree?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    termDays?: NullableIntFieldUpdateOperationsInput | number | null
    installments?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrediarioPaymentCreateInput = {
    id?: bigint | number
    amount: Decimal | DecimalJsLike | number | string
    paymentMethod: string
    paidAt?: Date | string
    account: CrediarioAccountCreateNestedOneWithoutPaymentsInput
  }

  export type CrediarioPaymentUncheckedCreateInput = {
    id?: bigint | number
    accountId: bigint | number
    amount: Decimal | DecimalJsLike | number | string
    paymentMethod: string
    paidAt?: Date | string
  }

  export type CrediarioPaymentUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: CrediarioAccountUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type CrediarioPaymentUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    accountId?: BigIntFieldUpdateOperationsInput | bigint | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrediarioPaymentCreateManyInput = {
    id?: bigint | number
    accountId: bigint | number
    amount: Decimal | DecimalJsLike | number | string
    paymentMethod: string
    paidAt?: Date | string
  }

  export type CrediarioPaymentUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrediarioPaymentUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    accountId?: BigIntFieldUpdateOperationsInput | bigint | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SaleItemListRelationFilter = {
    every?: SaleItemWhereInput
    some?: SaleItemWhereInput
    none?: SaleItemWhereInput
  }

  export type StockAdjustmentListRelationFilter = {
    every?: StockAdjustmentWhereInput
    some?: StockAdjustmentWhereInput
    none?: StockAdjustmentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SaleItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StockAdjustmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    barcode?: SortOrder
    category?: SortOrder
    brand?: SortOrder
    costPrice?: SortOrder
    salePrice?: SortOrder
    stock?: SortOrder
    minStock?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    costPrice?: SortOrder
    salePrice?: SortOrder
    stock?: SortOrder
    minStock?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    barcode?: SortOrder
    category?: SortOrder
    brand?: SortOrder
    costPrice?: SortOrder
    salePrice?: SortOrder
    stock?: SortOrder
    minStock?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    barcode?: SortOrder
    category?: SortOrder
    brand?: SortOrder
    costPrice?: SortOrder
    salePrice?: SortOrder
    stock?: SortOrder
    minStock?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    costPrice?: SortOrder
    salePrice?: SortOrder
    stock?: SortOrder
    minStock?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type StockAdjustmentCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    previousStock?: SortOrder
    newStock?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type StockAdjustmentAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    previousStock?: SortOrder
    newStock?: SortOrder
  }

  export type StockAdjustmentMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    previousStock?: SortOrder
    newStock?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type StockAdjustmentMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    previousStock?: SortOrder
    newStock?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type StockAdjustmentSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    previousStock?: SortOrder
    newStock?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SaleListRelationFilter = {
    every?: SaleWhereInput
    some?: SaleWhereInput
    none?: SaleWhereInput
  }

  export type CrediarioAccountListRelationFilter = {
    every?: CrediarioAccountWhereInput
    some?: CrediarioAccountWhereInput
    none?: CrediarioAccountWhereInput
  }

  export type SaleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CrediarioAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    city?: SortOrder
    lastPurchaseAt?: SortOrder
    totalSpent?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    id?: SortOrder
    totalSpent?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    city?: SortOrder
    lastPurchaseAt?: SortOrder
    totalSpent?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    city?: SortOrder
    lastPurchaseAt?: SortOrder
    totalSpent?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    id?: SortOrder
    totalSpent?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PayableListRelationFilter = {
    every?: PayableWhereInput
    some?: PayableWhereInput
    none?: PayableWhereInput
  }

  export type PayableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupplierCountOrderByAggregateInput = {
    id?: SortOrder
    legalName?: SortOrder
    tradeName?: SortOrder
    cnpj?: SortOrder
    contactName?: SortOrder
    createdAt?: SortOrder
  }

  export type SupplierAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SupplierMaxOrderByAggregateInput = {
    id?: SortOrder
    legalName?: SortOrder
    tradeName?: SortOrder
    cnpj?: SortOrder
    contactName?: SortOrder
    createdAt?: SortOrder
  }

  export type SupplierMinOrderByAggregateInput = {
    id?: SortOrder
    legalName?: SortOrder
    tradeName?: SortOrder
    cnpj?: SortOrder
    contactName?: SortOrder
    createdAt?: SortOrder
  }

  export type SupplierSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CashWithdrawalListRelationFilter = {
    every?: CashWithdrawalWhereInput
    some?: CashWithdrawalWhereInput
    none?: CashWithdrawalWhereInput
  }

  export type CashWithdrawalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CashRegisterCountOrderByAggregateInput = {
    id?: SortOrder
    openedAt?: SortOrder
    closedAt?: SortOrder
    openingAmount?: SortOrder
    status?: SortOrder
  }

  export type CashRegisterAvgOrderByAggregateInput = {
    id?: SortOrder
    openingAmount?: SortOrder
  }

  export type CashRegisterMaxOrderByAggregateInput = {
    id?: SortOrder
    openedAt?: SortOrder
    closedAt?: SortOrder
    openingAmount?: SortOrder
    status?: SortOrder
  }

  export type CashRegisterMinOrderByAggregateInput = {
    id?: SortOrder
    openedAt?: SortOrder
    closedAt?: SortOrder
    openingAmount?: SortOrder
    status?: SortOrder
  }

  export type CashRegisterSumOrderByAggregateInput = {
    id?: SortOrder
    openingAmount?: SortOrder
  }

  export type CashRegisterScalarRelationFilter = {
    is?: CashRegisterWhereInput
    isNot?: CashRegisterWhereInput
  }

  export type CashWithdrawalCountOrderByAggregateInput = {
    id?: SortOrder
    cashRegisterId?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type CashWithdrawalAvgOrderByAggregateInput = {
    id?: SortOrder
    cashRegisterId?: SortOrder
    amount?: SortOrder
  }

  export type CashWithdrawalMaxOrderByAggregateInput = {
    id?: SortOrder
    cashRegisterId?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type CashWithdrawalMinOrderByAggregateInput = {
    id?: SortOrder
    cashRegisterId?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type CashWithdrawalSumOrderByAggregateInput = {
    id?: SortOrder
    cashRegisterId?: SortOrder
    amount?: SortOrder
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type CustomerNullableScalarRelationFilter = {
    is?: CustomerWhereInput | null
    isNot?: CustomerWhereInput | null
  }

  export type CashRegisterNullableScalarRelationFilter = {
    is?: CashRegisterWhereInput | null
    isNot?: CashRegisterWhereInput | null
  }

  export type CrediarioAccountNullableScalarRelationFilter = {
    is?: CrediarioAccountWhereInput | null
    isNot?: CrediarioAccountWhereInput | null
  }

  export type SaleCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    customerNameFree?: SortOrder
    cashRegisterId?: SortOrder
    discount?: SortOrder
    surcharge?: SortOrder
    total?: SortOrder
    paymentMethod?: SortOrder
    installments?: SortOrder
    downPayment?: SortOrder
    createdAt?: SortOrder
  }

  export type SaleAvgOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    cashRegisterId?: SortOrder
    discount?: SortOrder
    surcharge?: SortOrder
    total?: SortOrder
    installments?: SortOrder
    downPayment?: SortOrder
  }

  export type SaleMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    customerNameFree?: SortOrder
    cashRegisterId?: SortOrder
    discount?: SortOrder
    surcharge?: SortOrder
    total?: SortOrder
    paymentMethod?: SortOrder
    installments?: SortOrder
    downPayment?: SortOrder
    createdAt?: SortOrder
  }

  export type SaleMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    customerNameFree?: SortOrder
    cashRegisterId?: SortOrder
    discount?: SortOrder
    surcharge?: SortOrder
    total?: SortOrder
    paymentMethod?: SortOrder
    installments?: SortOrder
    downPayment?: SortOrder
    createdAt?: SortOrder
  }

  export type SaleSumOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    cashRegisterId?: SortOrder
    discount?: SortOrder
    surcharge?: SortOrder
    total?: SortOrder
    installments?: SortOrder
    downPayment?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type SaleScalarRelationFilter = {
    is?: SaleWhereInput
    isNot?: SaleWhereInput
  }

  export type SaleItemCountOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type SaleItemAvgOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type SaleItemMaxOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type SaleItemMinOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type SaleItemSumOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type SupplierNullableScalarRelationFilter = {
    is?: SupplierWhereInput | null
    isNot?: SupplierWhereInput | null
  }

  export type PayableCountOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    supplierNameFree?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    paymentMethod?: SortOrder
    dueDate?: SortOrder
    invoiceNumber?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PayableAvgOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    amount?: SortOrder
  }

  export type PayableMaxOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    supplierNameFree?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    paymentMethod?: SortOrder
    dueDate?: SortOrder
    invoiceNumber?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PayableMinOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    supplierNameFree?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    paymentMethod?: SortOrder
    dueDate?: SortOrder
    invoiceNumber?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PayableSumOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    amount?: SortOrder
  }

  export type CrediarioPaymentListRelationFilter = {
    every?: CrediarioPaymentWhereInput
    some?: CrediarioPaymentWhereInput
    none?: CrediarioPaymentWhereInput
  }

  export type CrediarioPaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CrediarioAccountCountOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    customerId?: SortOrder
    customerNameFree?: SortOrder
    totalAmount?: SortOrder
    paidAmount?: SortOrder
    balance?: SortOrder
    status?: SortOrder
    termDays?: SortOrder
    installments?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
  }

  export type CrediarioAccountAvgOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    customerId?: SortOrder
    totalAmount?: SortOrder
    paidAmount?: SortOrder
    balance?: SortOrder
    termDays?: SortOrder
    installments?: SortOrder
  }

  export type CrediarioAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    customerId?: SortOrder
    customerNameFree?: SortOrder
    totalAmount?: SortOrder
    paidAmount?: SortOrder
    balance?: SortOrder
    status?: SortOrder
    termDays?: SortOrder
    installments?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
  }

  export type CrediarioAccountMinOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    customerId?: SortOrder
    customerNameFree?: SortOrder
    totalAmount?: SortOrder
    paidAmount?: SortOrder
    balance?: SortOrder
    status?: SortOrder
    termDays?: SortOrder
    installments?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
  }

  export type CrediarioAccountSumOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    customerId?: SortOrder
    totalAmount?: SortOrder
    paidAmount?: SortOrder
    balance?: SortOrder
    termDays?: SortOrder
    installments?: SortOrder
  }

  export type CrediarioAccountScalarRelationFilter = {
    is?: CrediarioAccountWhereInput
    isNot?: CrediarioAccountWhereInput
  }

  export type CrediarioPaymentCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
    paidAt?: SortOrder
  }

  export type CrediarioPaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    amount?: SortOrder
  }

  export type CrediarioPaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
    paidAt?: SortOrder
  }

  export type CrediarioPaymentMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
    paidAt?: SortOrder
  }

  export type CrediarioPaymentSumOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    amount?: SortOrder
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SaleItemCreateNestedManyWithoutProductInput = {
    create?: XOR<SaleItemCreateWithoutProductInput, SaleItemUncheckedCreateWithoutProductInput> | SaleItemCreateWithoutProductInput[] | SaleItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutProductInput | SaleItemCreateOrConnectWithoutProductInput[]
    createMany?: SaleItemCreateManyProductInputEnvelope
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
  }

  export type StockAdjustmentCreateNestedManyWithoutProductInput = {
    create?: XOR<StockAdjustmentCreateWithoutProductInput, StockAdjustmentUncheckedCreateWithoutProductInput> | StockAdjustmentCreateWithoutProductInput[] | StockAdjustmentUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockAdjustmentCreateOrConnectWithoutProductInput | StockAdjustmentCreateOrConnectWithoutProductInput[]
    createMany?: StockAdjustmentCreateManyProductInputEnvelope
    connect?: StockAdjustmentWhereUniqueInput | StockAdjustmentWhereUniqueInput[]
  }

  export type SaleItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<SaleItemCreateWithoutProductInput, SaleItemUncheckedCreateWithoutProductInput> | SaleItemCreateWithoutProductInput[] | SaleItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutProductInput | SaleItemCreateOrConnectWithoutProductInput[]
    createMany?: SaleItemCreateManyProductInputEnvelope
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
  }

  export type StockAdjustmentUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<StockAdjustmentCreateWithoutProductInput, StockAdjustmentUncheckedCreateWithoutProductInput> | StockAdjustmentCreateWithoutProductInput[] | StockAdjustmentUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockAdjustmentCreateOrConnectWithoutProductInput | StockAdjustmentCreateOrConnectWithoutProductInput[]
    createMany?: StockAdjustmentCreateManyProductInputEnvelope
    connect?: StockAdjustmentWhereUniqueInput | StockAdjustmentWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SaleItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<SaleItemCreateWithoutProductInput, SaleItemUncheckedCreateWithoutProductInput> | SaleItemCreateWithoutProductInput[] | SaleItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutProductInput | SaleItemCreateOrConnectWithoutProductInput[]
    upsert?: SaleItemUpsertWithWhereUniqueWithoutProductInput | SaleItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: SaleItemCreateManyProductInputEnvelope
    set?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    disconnect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    delete?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    update?: SaleItemUpdateWithWhereUniqueWithoutProductInput | SaleItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: SaleItemUpdateManyWithWhereWithoutProductInput | SaleItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
  }

  export type StockAdjustmentUpdateManyWithoutProductNestedInput = {
    create?: XOR<StockAdjustmentCreateWithoutProductInput, StockAdjustmentUncheckedCreateWithoutProductInput> | StockAdjustmentCreateWithoutProductInput[] | StockAdjustmentUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockAdjustmentCreateOrConnectWithoutProductInput | StockAdjustmentCreateOrConnectWithoutProductInput[]
    upsert?: StockAdjustmentUpsertWithWhereUniqueWithoutProductInput | StockAdjustmentUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: StockAdjustmentCreateManyProductInputEnvelope
    set?: StockAdjustmentWhereUniqueInput | StockAdjustmentWhereUniqueInput[]
    disconnect?: StockAdjustmentWhereUniqueInput | StockAdjustmentWhereUniqueInput[]
    delete?: StockAdjustmentWhereUniqueInput | StockAdjustmentWhereUniqueInput[]
    connect?: StockAdjustmentWhereUniqueInput | StockAdjustmentWhereUniqueInput[]
    update?: StockAdjustmentUpdateWithWhereUniqueWithoutProductInput | StockAdjustmentUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: StockAdjustmentUpdateManyWithWhereWithoutProductInput | StockAdjustmentUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: StockAdjustmentScalarWhereInput | StockAdjustmentScalarWhereInput[]
  }

  export type SaleItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<SaleItemCreateWithoutProductInput, SaleItemUncheckedCreateWithoutProductInput> | SaleItemCreateWithoutProductInput[] | SaleItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutProductInput | SaleItemCreateOrConnectWithoutProductInput[]
    upsert?: SaleItemUpsertWithWhereUniqueWithoutProductInput | SaleItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: SaleItemCreateManyProductInputEnvelope
    set?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    disconnect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    delete?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    update?: SaleItemUpdateWithWhereUniqueWithoutProductInput | SaleItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: SaleItemUpdateManyWithWhereWithoutProductInput | SaleItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
  }

  export type StockAdjustmentUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<StockAdjustmentCreateWithoutProductInput, StockAdjustmentUncheckedCreateWithoutProductInput> | StockAdjustmentCreateWithoutProductInput[] | StockAdjustmentUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockAdjustmentCreateOrConnectWithoutProductInput | StockAdjustmentCreateOrConnectWithoutProductInput[]
    upsert?: StockAdjustmentUpsertWithWhereUniqueWithoutProductInput | StockAdjustmentUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: StockAdjustmentCreateManyProductInputEnvelope
    set?: StockAdjustmentWhereUniqueInput | StockAdjustmentWhereUniqueInput[]
    disconnect?: StockAdjustmentWhereUniqueInput | StockAdjustmentWhereUniqueInput[]
    delete?: StockAdjustmentWhereUniqueInput | StockAdjustmentWhereUniqueInput[]
    connect?: StockAdjustmentWhereUniqueInput | StockAdjustmentWhereUniqueInput[]
    update?: StockAdjustmentUpdateWithWhereUniqueWithoutProductInput | StockAdjustmentUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: StockAdjustmentUpdateManyWithWhereWithoutProductInput | StockAdjustmentUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: StockAdjustmentScalarWhereInput | StockAdjustmentScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutStockAdjustmentsInput = {
    create?: XOR<ProductCreateWithoutStockAdjustmentsInput, ProductUncheckedCreateWithoutStockAdjustmentsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutStockAdjustmentsInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutStockAdjustmentsNestedInput = {
    create?: XOR<ProductCreateWithoutStockAdjustmentsInput, ProductUncheckedCreateWithoutStockAdjustmentsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutStockAdjustmentsInput
    upsert?: ProductUpsertWithoutStockAdjustmentsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutStockAdjustmentsInput, ProductUpdateWithoutStockAdjustmentsInput>, ProductUncheckedUpdateWithoutStockAdjustmentsInput>
  }

  export type SaleCreateNestedManyWithoutCustomerInput = {
    create?: XOR<SaleCreateWithoutCustomerInput, SaleUncheckedCreateWithoutCustomerInput> | SaleCreateWithoutCustomerInput[] | SaleUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutCustomerInput | SaleCreateOrConnectWithoutCustomerInput[]
    createMany?: SaleCreateManyCustomerInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type CrediarioAccountCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CrediarioAccountCreateWithoutCustomerInput, CrediarioAccountUncheckedCreateWithoutCustomerInput> | CrediarioAccountCreateWithoutCustomerInput[] | CrediarioAccountUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CrediarioAccountCreateOrConnectWithoutCustomerInput | CrediarioAccountCreateOrConnectWithoutCustomerInput[]
    createMany?: CrediarioAccountCreateManyCustomerInputEnvelope
    connect?: CrediarioAccountWhereUniqueInput | CrediarioAccountWhereUniqueInput[]
  }

  export type SaleUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<SaleCreateWithoutCustomerInput, SaleUncheckedCreateWithoutCustomerInput> | SaleCreateWithoutCustomerInput[] | SaleUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutCustomerInput | SaleCreateOrConnectWithoutCustomerInput[]
    createMany?: SaleCreateManyCustomerInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type CrediarioAccountUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CrediarioAccountCreateWithoutCustomerInput, CrediarioAccountUncheckedCreateWithoutCustomerInput> | CrediarioAccountCreateWithoutCustomerInput[] | CrediarioAccountUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CrediarioAccountCreateOrConnectWithoutCustomerInput | CrediarioAccountCreateOrConnectWithoutCustomerInput[]
    createMany?: CrediarioAccountCreateManyCustomerInputEnvelope
    connect?: CrediarioAccountWhereUniqueInput | CrediarioAccountWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type SaleUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<SaleCreateWithoutCustomerInput, SaleUncheckedCreateWithoutCustomerInput> | SaleCreateWithoutCustomerInput[] | SaleUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutCustomerInput | SaleCreateOrConnectWithoutCustomerInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutCustomerInput | SaleUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: SaleCreateManyCustomerInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutCustomerInput | SaleUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutCustomerInput | SaleUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type CrediarioAccountUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CrediarioAccountCreateWithoutCustomerInput, CrediarioAccountUncheckedCreateWithoutCustomerInput> | CrediarioAccountCreateWithoutCustomerInput[] | CrediarioAccountUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CrediarioAccountCreateOrConnectWithoutCustomerInput | CrediarioAccountCreateOrConnectWithoutCustomerInput[]
    upsert?: CrediarioAccountUpsertWithWhereUniqueWithoutCustomerInput | CrediarioAccountUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CrediarioAccountCreateManyCustomerInputEnvelope
    set?: CrediarioAccountWhereUniqueInput | CrediarioAccountWhereUniqueInput[]
    disconnect?: CrediarioAccountWhereUniqueInput | CrediarioAccountWhereUniqueInput[]
    delete?: CrediarioAccountWhereUniqueInput | CrediarioAccountWhereUniqueInput[]
    connect?: CrediarioAccountWhereUniqueInput | CrediarioAccountWhereUniqueInput[]
    update?: CrediarioAccountUpdateWithWhereUniqueWithoutCustomerInput | CrediarioAccountUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CrediarioAccountUpdateManyWithWhereWithoutCustomerInput | CrediarioAccountUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CrediarioAccountScalarWhereInput | CrediarioAccountScalarWhereInput[]
  }

  export type SaleUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<SaleCreateWithoutCustomerInput, SaleUncheckedCreateWithoutCustomerInput> | SaleCreateWithoutCustomerInput[] | SaleUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutCustomerInput | SaleCreateOrConnectWithoutCustomerInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutCustomerInput | SaleUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: SaleCreateManyCustomerInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutCustomerInput | SaleUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutCustomerInput | SaleUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type CrediarioAccountUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CrediarioAccountCreateWithoutCustomerInput, CrediarioAccountUncheckedCreateWithoutCustomerInput> | CrediarioAccountCreateWithoutCustomerInput[] | CrediarioAccountUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CrediarioAccountCreateOrConnectWithoutCustomerInput | CrediarioAccountCreateOrConnectWithoutCustomerInput[]
    upsert?: CrediarioAccountUpsertWithWhereUniqueWithoutCustomerInput | CrediarioAccountUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CrediarioAccountCreateManyCustomerInputEnvelope
    set?: CrediarioAccountWhereUniqueInput | CrediarioAccountWhereUniqueInput[]
    disconnect?: CrediarioAccountWhereUniqueInput | CrediarioAccountWhereUniqueInput[]
    delete?: CrediarioAccountWhereUniqueInput | CrediarioAccountWhereUniqueInput[]
    connect?: CrediarioAccountWhereUniqueInput | CrediarioAccountWhereUniqueInput[]
    update?: CrediarioAccountUpdateWithWhereUniqueWithoutCustomerInput | CrediarioAccountUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CrediarioAccountUpdateManyWithWhereWithoutCustomerInput | CrediarioAccountUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CrediarioAccountScalarWhereInput | CrediarioAccountScalarWhereInput[]
  }

  export type PayableCreateNestedManyWithoutSupplierInput = {
    create?: XOR<PayableCreateWithoutSupplierInput, PayableUncheckedCreateWithoutSupplierInput> | PayableCreateWithoutSupplierInput[] | PayableUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: PayableCreateOrConnectWithoutSupplierInput | PayableCreateOrConnectWithoutSupplierInput[]
    createMany?: PayableCreateManySupplierInputEnvelope
    connect?: PayableWhereUniqueInput | PayableWhereUniqueInput[]
  }

  export type PayableUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<PayableCreateWithoutSupplierInput, PayableUncheckedCreateWithoutSupplierInput> | PayableCreateWithoutSupplierInput[] | PayableUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: PayableCreateOrConnectWithoutSupplierInput | PayableCreateOrConnectWithoutSupplierInput[]
    createMany?: PayableCreateManySupplierInputEnvelope
    connect?: PayableWhereUniqueInput | PayableWhereUniqueInput[]
  }

  export type PayableUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<PayableCreateWithoutSupplierInput, PayableUncheckedCreateWithoutSupplierInput> | PayableCreateWithoutSupplierInput[] | PayableUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: PayableCreateOrConnectWithoutSupplierInput | PayableCreateOrConnectWithoutSupplierInput[]
    upsert?: PayableUpsertWithWhereUniqueWithoutSupplierInput | PayableUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: PayableCreateManySupplierInputEnvelope
    set?: PayableWhereUniqueInput | PayableWhereUniqueInput[]
    disconnect?: PayableWhereUniqueInput | PayableWhereUniqueInput[]
    delete?: PayableWhereUniqueInput | PayableWhereUniqueInput[]
    connect?: PayableWhereUniqueInput | PayableWhereUniqueInput[]
    update?: PayableUpdateWithWhereUniqueWithoutSupplierInput | PayableUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: PayableUpdateManyWithWhereWithoutSupplierInput | PayableUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: PayableScalarWhereInput | PayableScalarWhereInput[]
  }

  export type PayableUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<PayableCreateWithoutSupplierInput, PayableUncheckedCreateWithoutSupplierInput> | PayableCreateWithoutSupplierInput[] | PayableUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: PayableCreateOrConnectWithoutSupplierInput | PayableCreateOrConnectWithoutSupplierInput[]
    upsert?: PayableUpsertWithWhereUniqueWithoutSupplierInput | PayableUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: PayableCreateManySupplierInputEnvelope
    set?: PayableWhereUniqueInput | PayableWhereUniqueInput[]
    disconnect?: PayableWhereUniqueInput | PayableWhereUniqueInput[]
    delete?: PayableWhereUniqueInput | PayableWhereUniqueInput[]
    connect?: PayableWhereUniqueInput | PayableWhereUniqueInput[]
    update?: PayableUpdateWithWhereUniqueWithoutSupplierInput | PayableUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: PayableUpdateManyWithWhereWithoutSupplierInput | PayableUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: PayableScalarWhereInput | PayableScalarWhereInput[]
  }

  export type CashWithdrawalCreateNestedManyWithoutCashRegisterInput = {
    create?: XOR<CashWithdrawalCreateWithoutCashRegisterInput, CashWithdrawalUncheckedCreateWithoutCashRegisterInput> | CashWithdrawalCreateWithoutCashRegisterInput[] | CashWithdrawalUncheckedCreateWithoutCashRegisterInput[]
    connectOrCreate?: CashWithdrawalCreateOrConnectWithoutCashRegisterInput | CashWithdrawalCreateOrConnectWithoutCashRegisterInput[]
    createMany?: CashWithdrawalCreateManyCashRegisterInputEnvelope
    connect?: CashWithdrawalWhereUniqueInput | CashWithdrawalWhereUniqueInput[]
  }

  export type SaleCreateNestedManyWithoutCashRegisterInput = {
    create?: XOR<SaleCreateWithoutCashRegisterInput, SaleUncheckedCreateWithoutCashRegisterInput> | SaleCreateWithoutCashRegisterInput[] | SaleUncheckedCreateWithoutCashRegisterInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutCashRegisterInput | SaleCreateOrConnectWithoutCashRegisterInput[]
    createMany?: SaleCreateManyCashRegisterInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type CashWithdrawalUncheckedCreateNestedManyWithoutCashRegisterInput = {
    create?: XOR<CashWithdrawalCreateWithoutCashRegisterInput, CashWithdrawalUncheckedCreateWithoutCashRegisterInput> | CashWithdrawalCreateWithoutCashRegisterInput[] | CashWithdrawalUncheckedCreateWithoutCashRegisterInput[]
    connectOrCreate?: CashWithdrawalCreateOrConnectWithoutCashRegisterInput | CashWithdrawalCreateOrConnectWithoutCashRegisterInput[]
    createMany?: CashWithdrawalCreateManyCashRegisterInputEnvelope
    connect?: CashWithdrawalWhereUniqueInput | CashWithdrawalWhereUniqueInput[]
  }

  export type SaleUncheckedCreateNestedManyWithoutCashRegisterInput = {
    create?: XOR<SaleCreateWithoutCashRegisterInput, SaleUncheckedCreateWithoutCashRegisterInput> | SaleCreateWithoutCashRegisterInput[] | SaleUncheckedCreateWithoutCashRegisterInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutCashRegisterInput | SaleCreateOrConnectWithoutCashRegisterInput[]
    createMany?: SaleCreateManyCashRegisterInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type CashWithdrawalUpdateManyWithoutCashRegisterNestedInput = {
    create?: XOR<CashWithdrawalCreateWithoutCashRegisterInput, CashWithdrawalUncheckedCreateWithoutCashRegisterInput> | CashWithdrawalCreateWithoutCashRegisterInput[] | CashWithdrawalUncheckedCreateWithoutCashRegisterInput[]
    connectOrCreate?: CashWithdrawalCreateOrConnectWithoutCashRegisterInput | CashWithdrawalCreateOrConnectWithoutCashRegisterInput[]
    upsert?: CashWithdrawalUpsertWithWhereUniqueWithoutCashRegisterInput | CashWithdrawalUpsertWithWhereUniqueWithoutCashRegisterInput[]
    createMany?: CashWithdrawalCreateManyCashRegisterInputEnvelope
    set?: CashWithdrawalWhereUniqueInput | CashWithdrawalWhereUniqueInput[]
    disconnect?: CashWithdrawalWhereUniqueInput | CashWithdrawalWhereUniqueInput[]
    delete?: CashWithdrawalWhereUniqueInput | CashWithdrawalWhereUniqueInput[]
    connect?: CashWithdrawalWhereUniqueInput | CashWithdrawalWhereUniqueInput[]
    update?: CashWithdrawalUpdateWithWhereUniqueWithoutCashRegisterInput | CashWithdrawalUpdateWithWhereUniqueWithoutCashRegisterInput[]
    updateMany?: CashWithdrawalUpdateManyWithWhereWithoutCashRegisterInput | CashWithdrawalUpdateManyWithWhereWithoutCashRegisterInput[]
    deleteMany?: CashWithdrawalScalarWhereInput | CashWithdrawalScalarWhereInput[]
  }

  export type SaleUpdateManyWithoutCashRegisterNestedInput = {
    create?: XOR<SaleCreateWithoutCashRegisterInput, SaleUncheckedCreateWithoutCashRegisterInput> | SaleCreateWithoutCashRegisterInput[] | SaleUncheckedCreateWithoutCashRegisterInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutCashRegisterInput | SaleCreateOrConnectWithoutCashRegisterInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutCashRegisterInput | SaleUpsertWithWhereUniqueWithoutCashRegisterInput[]
    createMany?: SaleCreateManyCashRegisterInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutCashRegisterInput | SaleUpdateWithWhereUniqueWithoutCashRegisterInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutCashRegisterInput | SaleUpdateManyWithWhereWithoutCashRegisterInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type CashWithdrawalUncheckedUpdateManyWithoutCashRegisterNestedInput = {
    create?: XOR<CashWithdrawalCreateWithoutCashRegisterInput, CashWithdrawalUncheckedCreateWithoutCashRegisterInput> | CashWithdrawalCreateWithoutCashRegisterInput[] | CashWithdrawalUncheckedCreateWithoutCashRegisterInput[]
    connectOrCreate?: CashWithdrawalCreateOrConnectWithoutCashRegisterInput | CashWithdrawalCreateOrConnectWithoutCashRegisterInput[]
    upsert?: CashWithdrawalUpsertWithWhereUniqueWithoutCashRegisterInput | CashWithdrawalUpsertWithWhereUniqueWithoutCashRegisterInput[]
    createMany?: CashWithdrawalCreateManyCashRegisterInputEnvelope
    set?: CashWithdrawalWhereUniqueInput | CashWithdrawalWhereUniqueInput[]
    disconnect?: CashWithdrawalWhereUniqueInput | CashWithdrawalWhereUniqueInput[]
    delete?: CashWithdrawalWhereUniqueInput | CashWithdrawalWhereUniqueInput[]
    connect?: CashWithdrawalWhereUniqueInput | CashWithdrawalWhereUniqueInput[]
    update?: CashWithdrawalUpdateWithWhereUniqueWithoutCashRegisterInput | CashWithdrawalUpdateWithWhereUniqueWithoutCashRegisterInput[]
    updateMany?: CashWithdrawalUpdateManyWithWhereWithoutCashRegisterInput | CashWithdrawalUpdateManyWithWhereWithoutCashRegisterInput[]
    deleteMany?: CashWithdrawalScalarWhereInput | CashWithdrawalScalarWhereInput[]
  }

  export type SaleUncheckedUpdateManyWithoutCashRegisterNestedInput = {
    create?: XOR<SaleCreateWithoutCashRegisterInput, SaleUncheckedCreateWithoutCashRegisterInput> | SaleCreateWithoutCashRegisterInput[] | SaleUncheckedCreateWithoutCashRegisterInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutCashRegisterInput | SaleCreateOrConnectWithoutCashRegisterInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutCashRegisterInput | SaleUpsertWithWhereUniqueWithoutCashRegisterInput[]
    createMany?: SaleCreateManyCashRegisterInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutCashRegisterInput | SaleUpdateWithWhereUniqueWithoutCashRegisterInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutCashRegisterInput | SaleUpdateManyWithWhereWithoutCashRegisterInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type CashRegisterCreateNestedOneWithoutWithdrawalsInput = {
    create?: XOR<CashRegisterCreateWithoutWithdrawalsInput, CashRegisterUncheckedCreateWithoutWithdrawalsInput>
    connectOrCreate?: CashRegisterCreateOrConnectWithoutWithdrawalsInput
    connect?: CashRegisterWhereUniqueInput
  }

  export type CashRegisterUpdateOneRequiredWithoutWithdrawalsNestedInput = {
    create?: XOR<CashRegisterCreateWithoutWithdrawalsInput, CashRegisterUncheckedCreateWithoutWithdrawalsInput>
    connectOrCreate?: CashRegisterCreateOrConnectWithoutWithdrawalsInput
    upsert?: CashRegisterUpsertWithoutWithdrawalsInput
    connect?: CashRegisterWhereUniqueInput
    update?: XOR<XOR<CashRegisterUpdateToOneWithWhereWithoutWithdrawalsInput, CashRegisterUpdateWithoutWithdrawalsInput>, CashRegisterUncheckedUpdateWithoutWithdrawalsInput>
  }

  export type CustomerCreateNestedOneWithoutSalesInput = {
    create?: XOR<CustomerCreateWithoutSalesInput, CustomerUncheckedCreateWithoutSalesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutSalesInput
    connect?: CustomerWhereUniqueInput
  }

  export type CashRegisterCreateNestedOneWithoutSalesInput = {
    create?: XOR<CashRegisterCreateWithoutSalesInput, CashRegisterUncheckedCreateWithoutSalesInput>
    connectOrCreate?: CashRegisterCreateOrConnectWithoutSalesInput
    connect?: CashRegisterWhereUniqueInput
  }

  export type SaleItemCreateNestedManyWithoutSaleInput = {
    create?: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput> | SaleItemCreateWithoutSaleInput[] | SaleItemUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutSaleInput | SaleItemCreateOrConnectWithoutSaleInput[]
    createMany?: SaleItemCreateManySaleInputEnvelope
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
  }

  export type CrediarioAccountCreateNestedOneWithoutSaleInput = {
    create?: XOR<CrediarioAccountCreateWithoutSaleInput, CrediarioAccountUncheckedCreateWithoutSaleInput>
    connectOrCreate?: CrediarioAccountCreateOrConnectWithoutSaleInput
    connect?: CrediarioAccountWhereUniqueInput
  }

  export type SaleItemUncheckedCreateNestedManyWithoutSaleInput = {
    create?: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput> | SaleItemCreateWithoutSaleInput[] | SaleItemUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutSaleInput | SaleItemCreateOrConnectWithoutSaleInput[]
    createMany?: SaleItemCreateManySaleInputEnvelope
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
  }

  export type CrediarioAccountUncheckedCreateNestedOneWithoutSaleInput = {
    create?: XOR<CrediarioAccountCreateWithoutSaleInput, CrediarioAccountUncheckedCreateWithoutSaleInput>
    connectOrCreate?: CrediarioAccountCreateOrConnectWithoutSaleInput
    connect?: CrediarioAccountWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type CustomerUpdateOneWithoutSalesNestedInput = {
    create?: XOR<CustomerCreateWithoutSalesInput, CustomerUncheckedCreateWithoutSalesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutSalesInput
    upsert?: CustomerUpsertWithoutSalesInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutSalesInput, CustomerUpdateWithoutSalesInput>, CustomerUncheckedUpdateWithoutSalesInput>
  }

  export type CashRegisterUpdateOneWithoutSalesNestedInput = {
    create?: XOR<CashRegisterCreateWithoutSalesInput, CashRegisterUncheckedCreateWithoutSalesInput>
    connectOrCreate?: CashRegisterCreateOrConnectWithoutSalesInput
    upsert?: CashRegisterUpsertWithoutSalesInput
    disconnect?: CashRegisterWhereInput | boolean
    delete?: CashRegisterWhereInput | boolean
    connect?: CashRegisterWhereUniqueInput
    update?: XOR<XOR<CashRegisterUpdateToOneWithWhereWithoutSalesInput, CashRegisterUpdateWithoutSalesInput>, CashRegisterUncheckedUpdateWithoutSalesInput>
  }

  export type SaleItemUpdateManyWithoutSaleNestedInput = {
    create?: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput> | SaleItemCreateWithoutSaleInput[] | SaleItemUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutSaleInput | SaleItemCreateOrConnectWithoutSaleInput[]
    upsert?: SaleItemUpsertWithWhereUniqueWithoutSaleInput | SaleItemUpsertWithWhereUniqueWithoutSaleInput[]
    createMany?: SaleItemCreateManySaleInputEnvelope
    set?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    disconnect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    delete?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    update?: SaleItemUpdateWithWhereUniqueWithoutSaleInput | SaleItemUpdateWithWhereUniqueWithoutSaleInput[]
    updateMany?: SaleItemUpdateManyWithWhereWithoutSaleInput | SaleItemUpdateManyWithWhereWithoutSaleInput[]
    deleteMany?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
  }

  export type CrediarioAccountUpdateOneWithoutSaleNestedInput = {
    create?: XOR<CrediarioAccountCreateWithoutSaleInput, CrediarioAccountUncheckedCreateWithoutSaleInput>
    connectOrCreate?: CrediarioAccountCreateOrConnectWithoutSaleInput
    upsert?: CrediarioAccountUpsertWithoutSaleInput
    disconnect?: CrediarioAccountWhereInput | boolean
    delete?: CrediarioAccountWhereInput | boolean
    connect?: CrediarioAccountWhereUniqueInput
    update?: XOR<XOR<CrediarioAccountUpdateToOneWithWhereWithoutSaleInput, CrediarioAccountUpdateWithoutSaleInput>, CrediarioAccountUncheckedUpdateWithoutSaleInput>
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type SaleItemUncheckedUpdateManyWithoutSaleNestedInput = {
    create?: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput> | SaleItemCreateWithoutSaleInput[] | SaleItemUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutSaleInput | SaleItemCreateOrConnectWithoutSaleInput[]
    upsert?: SaleItemUpsertWithWhereUniqueWithoutSaleInput | SaleItemUpsertWithWhereUniqueWithoutSaleInput[]
    createMany?: SaleItemCreateManySaleInputEnvelope
    set?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    disconnect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    delete?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    update?: SaleItemUpdateWithWhereUniqueWithoutSaleInput | SaleItemUpdateWithWhereUniqueWithoutSaleInput[]
    updateMany?: SaleItemUpdateManyWithWhereWithoutSaleInput | SaleItemUpdateManyWithWhereWithoutSaleInput[]
    deleteMany?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
  }

  export type CrediarioAccountUncheckedUpdateOneWithoutSaleNestedInput = {
    create?: XOR<CrediarioAccountCreateWithoutSaleInput, CrediarioAccountUncheckedCreateWithoutSaleInput>
    connectOrCreate?: CrediarioAccountCreateOrConnectWithoutSaleInput
    upsert?: CrediarioAccountUpsertWithoutSaleInput
    disconnect?: CrediarioAccountWhereInput | boolean
    delete?: CrediarioAccountWhereInput | boolean
    connect?: CrediarioAccountWhereUniqueInput
    update?: XOR<XOR<CrediarioAccountUpdateToOneWithWhereWithoutSaleInput, CrediarioAccountUpdateWithoutSaleInput>, CrediarioAccountUncheckedUpdateWithoutSaleInput>
  }

  export type SaleCreateNestedOneWithoutItemsInput = {
    create?: XOR<SaleCreateWithoutItemsInput, SaleUncheckedCreateWithoutItemsInput>
    connectOrCreate?: SaleCreateOrConnectWithoutItemsInput
    connect?: SaleWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutSaleItemsInput = {
    create?: XOR<ProductCreateWithoutSaleItemsInput, ProductUncheckedCreateWithoutSaleItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSaleItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type SaleUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<SaleCreateWithoutItemsInput, SaleUncheckedCreateWithoutItemsInput>
    connectOrCreate?: SaleCreateOrConnectWithoutItemsInput
    upsert?: SaleUpsertWithoutItemsInput
    connect?: SaleWhereUniqueInput
    update?: XOR<XOR<SaleUpdateToOneWithWhereWithoutItemsInput, SaleUpdateWithoutItemsInput>, SaleUncheckedUpdateWithoutItemsInput>
  }

  export type ProductUpdateOneRequiredWithoutSaleItemsNestedInput = {
    create?: XOR<ProductCreateWithoutSaleItemsInput, ProductUncheckedCreateWithoutSaleItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSaleItemsInput
    upsert?: ProductUpsertWithoutSaleItemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutSaleItemsInput, ProductUpdateWithoutSaleItemsInput>, ProductUncheckedUpdateWithoutSaleItemsInput>
  }

  export type SupplierCreateNestedOneWithoutPayablesInput = {
    create?: XOR<SupplierCreateWithoutPayablesInput, SupplierUncheckedCreateWithoutPayablesInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutPayablesInput
    connect?: SupplierWhereUniqueInput
  }

  export type SupplierUpdateOneWithoutPayablesNestedInput = {
    create?: XOR<SupplierCreateWithoutPayablesInput, SupplierUncheckedCreateWithoutPayablesInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutPayablesInput
    upsert?: SupplierUpsertWithoutPayablesInput
    disconnect?: SupplierWhereInput | boolean
    delete?: SupplierWhereInput | boolean
    connect?: SupplierWhereUniqueInput
    update?: XOR<XOR<SupplierUpdateToOneWithWhereWithoutPayablesInput, SupplierUpdateWithoutPayablesInput>, SupplierUncheckedUpdateWithoutPayablesInput>
  }

  export type SaleCreateNestedOneWithoutCrediarioAccountInput = {
    create?: XOR<SaleCreateWithoutCrediarioAccountInput, SaleUncheckedCreateWithoutCrediarioAccountInput>
    connectOrCreate?: SaleCreateOrConnectWithoutCrediarioAccountInput
    connect?: SaleWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutCrediarioAccountsInput = {
    create?: XOR<CustomerCreateWithoutCrediarioAccountsInput, CustomerUncheckedCreateWithoutCrediarioAccountsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutCrediarioAccountsInput
    connect?: CustomerWhereUniqueInput
  }

  export type CrediarioPaymentCreateNestedManyWithoutAccountInput = {
    create?: XOR<CrediarioPaymentCreateWithoutAccountInput, CrediarioPaymentUncheckedCreateWithoutAccountInput> | CrediarioPaymentCreateWithoutAccountInput[] | CrediarioPaymentUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CrediarioPaymentCreateOrConnectWithoutAccountInput | CrediarioPaymentCreateOrConnectWithoutAccountInput[]
    createMany?: CrediarioPaymentCreateManyAccountInputEnvelope
    connect?: CrediarioPaymentWhereUniqueInput | CrediarioPaymentWhereUniqueInput[]
  }

  export type CrediarioPaymentUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<CrediarioPaymentCreateWithoutAccountInput, CrediarioPaymentUncheckedCreateWithoutAccountInput> | CrediarioPaymentCreateWithoutAccountInput[] | CrediarioPaymentUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CrediarioPaymentCreateOrConnectWithoutAccountInput | CrediarioPaymentCreateOrConnectWithoutAccountInput[]
    createMany?: CrediarioPaymentCreateManyAccountInputEnvelope
    connect?: CrediarioPaymentWhereUniqueInput | CrediarioPaymentWhereUniqueInput[]
  }

  export type SaleUpdateOneRequiredWithoutCrediarioAccountNestedInput = {
    create?: XOR<SaleCreateWithoutCrediarioAccountInput, SaleUncheckedCreateWithoutCrediarioAccountInput>
    connectOrCreate?: SaleCreateOrConnectWithoutCrediarioAccountInput
    upsert?: SaleUpsertWithoutCrediarioAccountInput
    connect?: SaleWhereUniqueInput
    update?: XOR<XOR<SaleUpdateToOneWithWhereWithoutCrediarioAccountInput, SaleUpdateWithoutCrediarioAccountInput>, SaleUncheckedUpdateWithoutCrediarioAccountInput>
  }

  export type CustomerUpdateOneWithoutCrediarioAccountsNestedInput = {
    create?: XOR<CustomerCreateWithoutCrediarioAccountsInput, CustomerUncheckedCreateWithoutCrediarioAccountsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutCrediarioAccountsInput
    upsert?: CustomerUpsertWithoutCrediarioAccountsInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutCrediarioAccountsInput, CustomerUpdateWithoutCrediarioAccountsInput>, CustomerUncheckedUpdateWithoutCrediarioAccountsInput>
  }

  export type CrediarioPaymentUpdateManyWithoutAccountNestedInput = {
    create?: XOR<CrediarioPaymentCreateWithoutAccountInput, CrediarioPaymentUncheckedCreateWithoutAccountInput> | CrediarioPaymentCreateWithoutAccountInput[] | CrediarioPaymentUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CrediarioPaymentCreateOrConnectWithoutAccountInput | CrediarioPaymentCreateOrConnectWithoutAccountInput[]
    upsert?: CrediarioPaymentUpsertWithWhereUniqueWithoutAccountInput | CrediarioPaymentUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: CrediarioPaymentCreateManyAccountInputEnvelope
    set?: CrediarioPaymentWhereUniqueInput | CrediarioPaymentWhereUniqueInput[]
    disconnect?: CrediarioPaymentWhereUniqueInput | CrediarioPaymentWhereUniqueInput[]
    delete?: CrediarioPaymentWhereUniqueInput | CrediarioPaymentWhereUniqueInput[]
    connect?: CrediarioPaymentWhereUniqueInput | CrediarioPaymentWhereUniqueInput[]
    update?: CrediarioPaymentUpdateWithWhereUniqueWithoutAccountInput | CrediarioPaymentUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: CrediarioPaymentUpdateManyWithWhereWithoutAccountInput | CrediarioPaymentUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: CrediarioPaymentScalarWhereInput | CrediarioPaymentScalarWhereInput[]
  }

  export type CrediarioPaymentUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<CrediarioPaymentCreateWithoutAccountInput, CrediarioPaymentUncheckedCreateWithoutAccountInput> | CrediarioPaymentCreateWithoutAccountInput[] | CrediarioPaymentUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CrediarioPaymentCreateOrConnectWithoutAccountInput | CrediarioPaymentCreateOrConnectWithoutAccountInput[]
    upsert?: CrediarioPaymentUpsertWithWhereUniqueWithoutAccountInput | CrediarioPaymentUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: CrediarioPaymentCreateManyAccountInputEnvelope
    set?: CrediarioPaymentWhereUniqueInput | CrediarioPaymentWhereUniqueInput[]
    disconnect?: CrediarioPaymentWhereUniqueInput | CrediarioPaymentWhereUniqueInput[]
    delete?: CrediarioPaymentWhereUniqueInput | CrediarioPaymentWhereUniqueInput[]
    connect?: CrediarioPaymentWhereUniqueInput | CrediarioPaymentWhereUniqueInput[]
    update?: CrediarioPaymentUpdateWithWhereUniqueWithoutAccountInput | CrediarioPaymentUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: CrediarioPaymentUpdateManyWithWhereWithoutAccountInput | CrediarioPaymentUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: CrediarioPaymentScalarWhereInput | CrediarioPaymentScalarWhereInput[]
  }

  export type CrediarioAccountCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<CrediarioAccountCreateWithoutPaymentsInput, CrediarioAccountUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: CrediarioAccountCreateOrConnectWithoutPaymentsInput
    connect?: CrediarioAccountWhereUniqueInput
  }

  export type CrediarioAccountUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<CrediarioAccountCreateWithoutPaymentsInput, CrediarioAccountUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: CrediarioAccountCreateOrConnectWithoutPaymentsInput
    upsert?: CrediarioAccountUpsertWithoutPaymentsInput
    connect?: CrediarioAccountWhereUniqueInput
    update?: XOR<XOR<CrediarioAccountUpdateToOneWithWhereWithoutPaymentsInput, CrediarioAccountUpdateWithoutPaymentsInput>, CrediarioAccountUncheckedUpdateWithoutPaymentsInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type SaleItemCreateWithoutProductInput = {
    id?: bigint | number
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    sale: SaleCreateNestedOneWithoutItemsInput
  }

  export type SaleItemUncheckedCreateWithoutProductInput = {
    id?: bigint | number
    saleId: bigint | number
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
  }

  export type SaleItemCreateOrConnectWithoutProductInput = {
    where: SaleItemWhereUniqueInput
    create: XOR<SaleItemCreateWithoutProductInput, SaleItemUncheckedCreateWithoutProductInput>
  }

  export type SaleItemCreateManyProductInputEnvelope = {
    data: SaleItemCreateManyProductInput | SaleItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type StockAdjustmentCreateWithoutProductInput = {
    id?: bigint | number
    previousStock: number
    newStock: number
    reason?: string | null
    createdAt?: Date | string
  }

  export type StockAdjustmentUncheckedCreateWithoutProductInput = {
    id?: bigint | number
    previousStock: number
    newStock: number
    reason?: string | null
    createdAt?: Date | string
  }

  export type StockAdjustmentCreateOrConnectWithoutProductInput = {
    where: StockAdjustmentWhereUniqueInput
    create: XOR<StockAdjustmentCreateWithoutProductInput, StockAdjustmentUncheckedCreateWithoutProductInput>
  }

  export type StockAdjustmentCreateManyProductInputEnvelope = {
    data: StockAdjustmentCreateManyProductInput | StockAdjustmentCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type SaleItemUpsertWithWhereUniqueWithoutProductInput = {
    where: SaleItemWhereUniqueInput
    update: XOR<SaleItemUpdateWithoutProductInput, SaleItemUncheckedUpdateWithoutProductInput>
    create: XOR<SaleItemCreateWithoutProductInput, SaleItemUncheckedCreateWithoutProductInput>
  }

  export type SaleItemUpdateWithWhereUniqueWithoutProductInput = {
    where: SaleItemWhereUniqueInput
    data: XOR<SaleItemUpdateWithoutProductInput, SaleItemUncheckedUpdateWithoutProductInput>
  }

  export type SaleItemUpdateManyWithWhereWithoutProductInput = {
    where: SaleItemScalarWhereInput
    data: XOR<SaleItemUpdateManyMutationInput, SaleItemUncheckedUpdateManyWithoutProductInput>
  }

  export type SaleItemScalarWhereInput = {
    AND?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
    OR?: SaleItemScalarWhereInput[]
    NOT?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
    id?: BigIntFilter<"SaleItem"> | bigint | number
    saleId?: BigIntFilter<"SaleItem"> | bigint | number
    productId?: BigIntFilter<"SaleItem"> | bigint | number
    quantity?: IntFilter<"SaleItem"> | number
    unitPrice?: DecimalFilter<"SaleItem"> | Decimal | DecimalJsLike | number | string
  }

  export type StockAdjustmentUpsertWithWhereUniqueWithoutProductInput = {
    where: StockAdjustmentWhereUniqueInput
    update: XOR<StockAdjustmentUpdateWithoutProductInput, StockAdjustmentUncheckedUpdateWithoutProductInput>
    create: XOR<StockAdjustmentCreateWithoutProductInput, StockAdjustmentUncheckedCreateWithoutProductInput>
  }

  export type StockAdjustmentUpdateWithWhereUniqueWithoutProductInput = {
    where: StockAdjustmentWhereUniqueInput
    data: XOR<StockAdjustmentUpdateWithoutProductInput, StockAdjustmentUncheckedUpdateWithoutProductInput>
  }

  export type StockAdjustmentUpdateManyWithWhereWithoutProductInput = {
    where: StockAdjustmentScalarWhereInput
    data: XOR<StockAdjustmentUpdateManyMutationInput, StockAdjustmentUncheckedUpdateManyWithoutProductInput>
  }

  export type StockAdjustmentScalarWhereInput = {
    AND?: StockAdjustmentScalarWhereInput | StockAdjustmentScalarWhereInput[]
    OR?: StockAdjustmentScalarWhereInput[]
    NOT?: StockAdjustmentScalarWhereInput | StockAdjustmentScalarWhereInput[]
    id?: BigIntFilter<"StockAdjustment"> | bigint | number
    productId?: BigIntFilter<"StockAdjustment"> | bigint | number
    previousStock?: IntFilter<"StockAdjustment"> | number
    newStock?: IntFilter<"StockAdjustment"> | number
    reason?: StringNullableFilter<"StockAdjustment"> | string | null
    createdAt?: DateTimeFilter<"StockAdjustment"> | Date | string
  }

  export type ProductCreateWithoutStockAdjustmentsInput = {
    id?: bigint | number
    name: string
    barcode: string
    category: string
    brand?: string | null
    costPrice: Decimal | DecimalJsLike | number | string
    salePrice: Decimal | DecimalJsLike | number | string
    stock?: number
    minStock?: number
    createdAt?: Date | string
    saleItems?: SaleItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutStockAdjustmentsInput = {
    id?: bigint | number
    name: string
    barcode: string
    category: string
    brand?: string | null
    costPrice: Decimal | DecimalJsLike | number | string
    salePrice: Decimal | DecimalJsLike | number | string
    stock?: number
    minStock?: number
    createdAt?: Date | string
    saleItems?: SaleItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutStockAdjustmentsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutStockAdjustmentsInput, ProductUncheckedCreateWithoutStockAdjustmentsInput>
  }

  export type ProductUpsertWithoutStockAdjustmentsInput = {
    update: XOR<ProductUpdateWithoutStockAdjustmentsInput, ProductUncheckedUpdateWithoutStockAdjustmentsInput>
    create: XOR<ProductCreateWithoutStockAdjustmentsInput, ProductUncheckedCreateWithoutStockAdjustmentsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutStockAdjustmentsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutStockAdjustmentsInput, ProductUncheckedUpdateWithoutStockAdjustmentsInput>
  }

  export type ProductUpdateWithoutStockAdjustmentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    costPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    minStock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleItems?: SaleItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutStockAdjustmentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    costPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    minStock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleItems?: SaleItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type SaleCreateWithoutCustomerInput = {
    id?: bigint | number
    customerNameFree?: string | null
    discount?: Decimal | DecimalJsLike | number | string
    surcharge?: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    paymentMethod: string
    installments?: number | null
    downPayment?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    cashRegister?: CashRegisterCreateNestedOneWithoutSalesInput
    items?: SaleItemCreateNestedManyWithoutSaleInput
    crediarioAccount?: CrediarioAccountCreateNestedOneWithoutSaleInput
  }

  export type SaleUncheckedCreateWithoutCustomerInput = {
    id?: bigint | number
    customerNameFree?: string | null
    cashRegisterId?: bigint | number | null
    discount?: Decimal | DecimalJsLike | number | string
    surcharge?: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    paymentMethod: string
    installments?: number | null
    downPayment?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    items?: SaleItemUncheckedCreateNestedManyWithoutSaleInput
    crediarioAccount?: CrediarioAccountUncheckedCreateNestedOneWithoutSaleInput
  }

  export type SaleCreateOrConnectWithoutCustomerInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutCustomerInput, SaleUncheckedCreateWithoutCustomerInput>
  }

  export type SaleCreateManyCustomerInputEnvelope = {
    data: SaleCreateManyCustomerInput | SaleCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type CrediarioAccountCreateWithoutCustomerInput = {
    id?: bigint | number
    customerNameFree?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    balance: Decimal | DecimalJsLike | number | string
    status?: string
    termDays?: number | null
    installments?: number | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    sale: SaleCreateNestedOneWithoutCrediarioAccountInput
    payments?: CrediarioPaymentCreateNestedManyWithoutAccountInput
  }

  export type CrediarioAccountUncheckedCreateWithoutCustomerInput = {
    id?: bigint | number
    saleId: bigint | number
    customerNameFree?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    balance: Decimal | DecimalJsLike | number | string
    status?: string
    termDays?: number | null
    installments?: number | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    payments?: CrediarioPaymentUncheckedCreateNestedManyWithoutAccountInput
  }

  export type CrediarioAccountCreateOrConnectWithoutCustomerInput = {
    where: CrediarioAccountWhereUniqueInput
    create: XOR<CrediarioAccountCreateWithoutCustomerInput, CrediarioAccountUncheckedCreateWithoutCustomerInput>
  }

  export type CrediarioAccountCreateManyCustomerInputEnvelope = {
    data: CrediarioAccountCreateManyCustomerInput | CrediarioAccountCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type SaleUpsertWithWhereUniqueWithoutCustomerInput = {
    where: SaleWhereUniqueInput
    update: XOR<SaleUpdateWithoutCustomerInput, SaleUncheckedUpdateWithoutCustomerInput>
    create: XOR<SaleCreateWithoutCustomerInput, SaleUncheckedCreateWithoutCustomerInput>
  }

  export type SaleUpdateWithWhereUniqueWithoutCustomerInput = {
    where: SaleWhereUniqueInput
    data: XOR<SaleUpdateWithoutCustomerInput, SaleUncheckedUpdateWithoutCustomerInput>
  }

  export type SaleUpdateManyWithWhereWithoutCustomerInput = {
    where: SaleScalarWhereInput
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyWithoutCustomerInput>
  }

  export type SaleScalarWhereInput = {
    AND?: SaleScalarWhereInput | SaleScalarWhereInput[]
    OR?: SaleScalarWhereInput[]
    NOT?: SaleScalarWhereInput | SaleScalarWhereInput[]
    id?: BigIntFilter<"Sale"> | bigint | number
    customerId?: BigIntNullableFilter<"Sale"> | bigint | number | null
    customerNameFree?: StringNullableFilter<"Sale"> | string | null
    cashRegisterId?: BigIntNullableFilter<"Sale"> | bigint | number | null
    discount?: DecimalFilter<"Sale"> | Decimal | DecimalJsLike | number | string
    surcharge?: DecimalFilter<"Sale"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"Sale"> | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFilter<"Sale"> | string
    installments?: IntNullableFilter<"Sale"> | number | null
    downPayment?: DecimalNullableFilter<"Sale"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"Sale"> | Date | string
  }

  export type CrediarioAccountUpsertWithWhereUniqueWithoutCustomerInput = {
    where: CrediarioAccountWhereUniqueInput
    update: XOR<CrediarioAccountUpdateWithoutCustomerInput, CrediarioAccountUncheckedUpdateWithoutCustomerInput>
    create: XOR<CrediarioAccountCreateWithoutCustomerInput, CrediarioAccountUncheckedCreateWithoutCustomerInput>
  }

  export type CrediarioAccountUpdateWithWhereUniqueWithoutCustomerInput = {
    where: CrediarioAccountWhereUniqueInput
    data: XOR<CrediarioAccountUpdateWithoutCustomerInput, CrediarioAccountUncheckedUpdateWithoutCustomerInput>
  }

  export type CrediarioAccountUpdateManyWithWhereWithoutCustomerInput = {
    where: CrediarioAccountScalarWhereInput
    data: XOR<CrediarioAccountUpdateManyMutationInput, CrediarioAccountUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CrediarioAccountScalarWhereInput = {
    AND?: CrediarioAccountScalarWhereInput | CrediarioAccountScalarWhereInput[]
    OR?: CrediarioAccountScalarWhereInput[]
    NOT?: CrediarioAccountScalarWhereInput | CrediarioAccountScalarWhereInput[]
    id?: BigIntFilter<"CrediarioAccount"> | bigint | number
    saleId?: BigIntFilter<"CrediarioAccount"> | bigint | number
    customerId?: BigIntNullableFilter<"CrediarioAccount"> | bigint | number | null
    customerNameFree?: StringNullableFilter<"CrediarioAccount"> | string | null
    totalAmount?: DecimalFilter<"CrediarioAccount"> | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFilter<"CrediarioAccount"> | Decimal | DecimalJsLike | number | string
    balance?: DecimalFilter<"CrediarioAccount"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"CrediarioAccount"> | string
    termDays?: IntNullableFilter<"CrediarioAccount"> | number | null
    installments?: IntNullableFilter<"CrediarioAccount"> | number | null
    dueDate?: DateTimeNullableFilter<"CrediarioAccount"> | Date | string | null
    createdAt?: DateTimeFilter<"CrediarioAccount"> | Date | string
  }

  export type PayableCreateWithoutSupplierInput = {
    id?: bigint | number
    supplierNameFree?: string | null
    category: string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    paymentMethod: string
    dueDate: Date | string
    invoiceNumber?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type PayableUncheckedCreateWithoutSupplierInput = {
    id?: bigint | number
    supplierNameFree?: string | null
    category: string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    paymentMethod: string
    dueDate: Date | string
    invoiceNumber?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type PayableCreateOrConnectWithoutSupplierInput = {
    where: PayableWhereUniqueInput
    create: XOR<PayableCreateWithoutSupplierInput, PayableUncheckedCreateWithoutSupplierInput>
  }

  export type PayableCreateManySupplierInputEnvelope = {
    data: PayableCreateManySupplierInput | PayableCreateManySupplierInput[]
    skipDuplicates?: boolean
  }

  export type PayableUpsertWithWhereUniqueWithoutSupplierInput = {
    where: PayableWhereUniqueInput
    update: XOR<PayableUpdateWithoutSupplierInput, PayableUncheckedUpdateWithoutSupplierInput>
    create: XOR<PayableCreateWithoutSupplierInput, PayableUncheckedCreateWithoutSupplierInput>
  }

  export type PayableUpdateWithWhereUniqueWithoutSupplierInput = {
    where: PayableWhereUniqueInput
    data: XOR<PayableUpdateWithoutSupplierInput, PayableUncheckedUpdateWithoutSupplierInput>
  }

  export type PayableUpdateManyWithWhereWithoutSupplierInput = {
    where: PayableScalarWhereInput
    data: XOR<PayableUpdateManyMutationInput, PayableUncheckedUpdateManyWithoutSupplierInput>
  }

  export type PayableScalarWhereInput = {
    AND?: PayableScalarWhereInput | PayableScalarWhereInput[]
    OR?: PayableScalarWhereInput[]
    NOT?: PayableScalarWhereInput | PayableScalarWhereInput[]
    id?: BigIntFilter<"Payable"> | bigint | number
    supplierId?: BigIntNullableFilter<"Payable"> | bigint | number | null
    supplierNameFree?: StringNullableFilter<"Payable"> | string | null
    category?: StringFilter<"Payable"> | string
    amount?: DecimalFilter<"Payable"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"Payable"> | string | null
    paymentMethod?: StringFilter<"Payable"> | string
    dueDate?: DateTimeFilter<"Payable"> | Date | string
    invoiceNumber?: StringNullableFilter<"Payable"> | string | null
    status?: StringFilter<"Payable"> | string
    createdAt?: DateTimeFilter<"Payable"> | Date | string
  }

  export type CashWithdrawalCreateWithoutCashRegisterInput = {
    id?: bigint | number
    amount: Decimal | DecimalJsLike | number | string
    reason?: string | null
    createdAt?: Date | string
  }

  export type CashWithdrawalUncheckedCreateWithoutCashRegisterInput = {
    id?: bigint | number
    amount: Decimal | DecimalJsLike | number | string
    reason?: string | null
    createdAt?: Date | string
  }

  export type CashWithdrawalCreateOrConnectWithoutCashRegisterInput = {
    where: CashWithdrawalWhereUniqueInput
    create: XOR<CashWithdrawalCreateWithoutCashRegisterInput, CashWithdrawalUncheckedCreateWithoutCashRegisterInput>
  }

  export type CashWithdrawalCreateManyCashRegisterInputEnvelope = {
    data: CashWithdrawalCreateManyCashRegisterInput | CashWithdrawalCreateManyCashRegisterInput[]
    skipDuplicates?: boolean
  }

  export type SaleCreateWithoutCashRegisterInput = {
    id?: bigint | number
    customerNameFree?: string | null
    discount?: Decimal | DecimalJsLike | number | string
    surcharge?: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    paymentMethod: string
    installments?: number | null
    downPayment?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    customer?: CustomerCreateNestedOneWithoutSalesInput
    items?: SaleItemCreateNestedManyWithoutSaleInput
    crediarioAccount?: CrediarioAccountCreateNestedOneWithoutSaleInput
  }

  export type SaleUncheckedCreateWithoutCashRegisterInput = {
    id?: bigint | number
    customerId?: bigint | number | null
    customerNameFree?: string | null
    discount?: Decimal | DecimalJsLike | number | string
    surcharge?: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    paymentMethod: string
    installments?: number | null
    downPayment?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    items?: SaleItemUncheckedCreateNestedManyWithoutSaleInput
    crediarioAccount?: CrediarioAccountUncheckedCreateNestedOneWithoutSaleInput
  }

  export type SaleCreateOrConnectWithoutCashRegisterInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutCashRegisterInput, SaleUncheckedCreateWithoutCashRegisterInput>
  }

  export type SaleCreateManyCashRegisterInputEnvelope = {
    data: SaleCreateManyCashRegisterInput | SaleCreateManyCashRegisterInput[]
    skipDuplicates?: boolean
  }

  export type CashWithdrawalUpsertWithWhereUniqueWithoutCashRegisterInput = {
    where: CashWithdrawalWhereUniqueInput
    update: XOR<CashWithdrawalUpdateWithoutCashRegisterInput, CashWithdrawalUncheckedUpdateWithoutCashRegisterInput>
    create: XOR<CashWithdrawalCreateWithoutCashRegisterInput, CashWithdrawalUncheckedCreateWithoutCashRegisterInput>
  }

  export type CashWithdrawalUpdateWithWhereUniqueWithoutCashRegisterInput = {
    where: CashWithdrawalWhereUniqueInput
    data: XOR<CashWithdrawalUpdateWithoutCashRegisterInput, CashWithdrawalUncheckedUpdateWithoutCashRegisterInput>
  }

  export type CashWithdrawalUpdateManyWithWhereWithoutCashRegisterInput = {
    where: CashWithdrawalScalarWhereInput
    data: XOR<CashWithdrawalUpdateManyMutationInput, CashWithdrawalUncheckedUpdateManyWithoutCashRegisterInput>
  }

  export type CashWithdrawalScalarWhereInput = {
    AND?: CashWithdrawalScalarWhereInput | CashWithdrawalScalarWhereInput[]
    OR?: CashWithdrawalScalarWhereInput[]
    NOT?: CashWithdrawalScalarWhereInput | CashWithdrawalScalarWhereInput[]
    id?: BigIntFilter<"CashWithdrawal"> | bigint | number
    cashRegisterId?: BigIntFilter<"CashWithdrawal"> | bigint | number
    amount?: DecimalFilter<"CashWithdrawal"> | Decimal | DecimalJsLike | number | string
    reason?: StringNullableFilter<"CashWithdrawal"> | string | null
    createdAt?: DateTimeFilter<"CashWithdrawal"> | Date | string
  }

  export type SaleUpsertWithWhereUniqueWithoutCashRegisterInput = {
    where: SaleWhereUniqueInput
    update: XOR<SaleUpdateWithoutCashRegisterInput, SaleUncheckedUpdateWithoutCashRegisterInput>
    create: XOR<SaleCreateWithoutCashRegisterInput, SaleUncheckedCreateWithoutCashRegisterInput>
  }

  export type SaleUpdateWithWhereUniqueWithoutCashRegisterInput = {
    where: SaleWhereUniqueInput
    data: XOR<SaleUpdateWithoutCashRegisterInput, SaleUncheckedUpdateWithoutCashRegisterInput>
  }

  export type SaleUpdateManyWithWhereWithoutCashRegisterInput = {
    where: SaleScalarWhereInput
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyWithoutCashRegisterInput>
  }

  export type CashRegisterCreateWithoutWithdrawalsInput = {
    id?: bigint | number
    openedAt?: Date | string
    closedAt?: Date | string | null
    openingAmount: Decimal | DecimalJsLike | number | string
    status?: string
    sales?: SaleCreateNestedManyWithoutCashRegisterInput
  }

  export type CashRegisterUncheckedCreateWithoutWithdrawalsInput = {
    id?: bigint | number
    openedAt?: Date | string
    closedAt?: Date | string | null
    openingAmount: Decimal | DecimalJsLike | number | string
    status?: string
    sales?: SaleUncheckedCreateNestedManyWithoutCashRegisterInput
  }

  export type CashRegisterCreateOrConnectWithoutWithdrawalsInput = {
    where: CashRegisterWhereUniqueInput
    create: XOR<CashRegisterCreateWithoutWithdrawalsInput, CashRegisterUncheckedCreateWithoutWithdrawalsInput>
  }

  export type CashRegisterUpsertWithoutWithdrawalsInput = {
    update: XOR<CashRegisterUpdateWithoutWithdrawalsInput, CashRegisterUncheckedUpdateWithoutWithdrawalsInput>
    create: XOR<CashRegisterCreateWithoutWithdrawalsInput, CashRegisterUncheckedCreateWithoutWithdrawalsInput>
    where?: CashRegisterWhereInput
  }

  export type CashRegisterUpdateToOneWithWhereWithoutWithdrawalsInput = {
    where?: CashRegisterWhereInput
    data: XOR<CashRegisterUpdateWithoutWithdrawalsInput, CashRegisterUncheckedUpdateWithoutWithdrawalsInput>
  }

  export type CashRegisterUpdateWithoutWithdrawalsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    sales?: SaleUpdateManyWithoutCashRegisterNestedInput
  }

  export type CashRegisterUncheckedUpdateWithoutWithdrawalsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    sales?: SaleUncheckedUpdateManyWithoutCashRegisterNestedInput
  }

  export type CustomerCreateWithoutSalesInput = {
    id?: bigint | number
    name: string
    phone?: string | null
    city?: string | null
    lastPurchaseAt?: Date | string | null
    totalSpent?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    crediarioAccounts?: CrediarioAccountCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutSalesInput = {
    id?: bigint | number
    name: string
    phone?: string | null
    city?: string | null
    lastPurchaseAt?: Date | string | null
    totalSpent?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    crediarioAccounts?: CrediarioAccountUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutSalesInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutSalesInput, CustomerUncheckedCreateWithoutSalesInput>
  }

  export type CashRegisterCreateWithoutSalesInput = {
    id?: bigint | number
    openedAt?: Date | string
    closedAt?: Date | string | null
    openingAmount: Decimal | DecimalJsLike | number | string
    status?: string
    withdrawals?: CashWithdrawalCreateNestedManyWithoutCashRegisterInput
  }

  export type CashRegisterUncheckedCreateWithoutSalesInput = {
    id?: bigint | number
    openedAt?: Date | string
    closedAt?: Date | string | null
    openingAmount: Decimal | DecimalJsLike | number | string
    status?: string
    withdrawals?: CashWithdrawalUncheckedCreateNestedManyWithoutCashRegisterInput
  }

  export type CashRegisterCreateOrConnectWithoutSalesInput = {
    where: CashRegisterWhereUniqueInput
    create: XOR<CashRegisterCreateWithoutSalesInput, CashRegisterUncheckedCreateWithoutSalesInput>
  }

  export type SaleItemCreateWithoutSaleInput = {
    id?: bigint | number
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    product: ProductCreateNestedOneWithoutSaleItemsInput
  }

  export type SaleItemUncheckedCreateWithoutSaleInput = {
    id?: bigint | number
    productId: bigint | number
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
  }

  export type SaleItemCreateOrConnectWithoutSaleInput = {
    where: SaleItemWhereUniqueInput
    create: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput>
  }

  export type SaleItemCreateManySaleInputEnvelope = {
    data: SaleItemCreateManySaleInput | SaleItemCreateManySaleInput[]
    skipDuplicates?: boolean
  }

  export type CrediarioAccountCreateWithoutSaleInput = {
    id?: bigint | number
    customerNameFree?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    balance: Decimal | DecimalJsLike | number | string
    status?: string
    termDays?: number | null
    installments?: number | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    customer?: CustomerCreateNestedOneWithoutCrediarioAccountsInput
    payments?: CrediarioPaymentCreateNestedManyWithoutAccountInput
  }

  export type CrediarioAccountUncheckedCreateWithoutSaleInput = {
    id?: bigint | number
    customerId?: bigint | number | null
    customerNameFree?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    balance: Decimal | DecimalJsLike | number | string
    status?: string
    termDays?: number | null
    installments?: number | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    payments?: CrediarioPaymentUncheckedCreateNestedManyWithoutAccountInput
  }

  export type CrediarioAccountCreateOrConnectWithoutSaleInput = {
    where: CrediarioAccountWhereUniqueInput
    create: XOR<CrediarioAccountCreateWithoutSaleInput, CrediarioAccountUncheckedCreateWithoutSaleInput>
  }

  export type CustomerUpsertWithoutSalesInput = {
    update: XOR<CustomerUpdateWithoutSalesInput, CustomerUncheckedUpdateWithoutSalesInput>
    create: XOR<CustomerCreateWithoutSalesInput, CustomerUncheckedCreateWithoutSalesInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutSalesInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutSalesInput, CustomerUncheckedUpdateWithoutSalesInput>
  }

  export type CustomerUpdateWithoutSalesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    lastPurchaseAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crediarioAccounts?: CrediarioAccountUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutSalesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    lastPurchaseAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crediarioAccounts?: CrediarioAccountUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CashRegisterUpsertWithoutSalesInput = {
    update: XOR<CashRegisterUpdateWithoutSalesInput, CashRegisterUncheckedUpdateWithoutSalesInput>
    create: XOR<CashRegisterCreateWithoutSalesInput, CashRegisterUncheckedCreateWithoutSalesInput>
    where?: CashRegisterWhereInput
  }

  export type CashRegisterUpdateToOneWithWhereWithoutSalesInput = {
    where?: CashRegisterWhereInput
    data: XOR<CashRegisterUpdateWithoutSalesInput, CashRegisterUncheckedUpdateWithoutSalesInput>
  }

  export type CashRegisterUpdateWithoutSalesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    withdrawals?: CashWithdrawalUpdateManyWithoutCashRegisterNestedInput
  }

  export type CashRegisterUncheckedUpdateWithoutSalesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    withdrawals?: CashWithdrawalUncheckedUpdateManyWithoutCashRegisterNestedInput
  }

  export type SaleItemUpsertWithWhereUniqueWithoutSaleInput = {
    where: SaleItemWhereUniqueInput
    update: XOR<SaleItemUpdateWithoutSaleInput, SaleItemUncheckedUpdateWithoutSaleInput>
    create: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput>
  }

  export type SaleItemUpdateWithWhereUniqueWithoutSaleInput = {
    where: SaleItemWhereUniqueInput
    data: XOR<SaleItemUpdateWithoutSaleInput, SaleItemUncheckedUpdateWithoutSaleInput>
  }

  export type SaleItemUpdateManyWithWhereWithoutSaleInput = {
    where: SaleItemScalarWhereInput
    data: XOR<SaleItemUpdateManyMutationInput, SaleItemUncheckedUpdateManyWithoutSaleInput>
  }

  export type CrediarioAccountUpsertWithoutSaleInput = {
    update: XOR<CrediarioAccountUpdateWithoutSaleInput, CrediarioAccountUncheckedUpdateWithoutSaleInput>
    create: XOR<CrediarioAccountCreateWithoutSaleInput, CrediarioAccountUncheckedCreateWithoutSaleInput>
    where?: CrediarioAccountWhereInput
  }

  export type CrediarioAccountUpdateToOneWithWhereWithoutSaleInput = {
    where?: CrediarioAccountWhereInput
    data: XOR<CrediarioAccountUpdateWithoutSaleInput, CrediarioAccountUncheckedUpdateWithoutSaleInput>
  }

  export type CrediarioAccountUpdateWithoutSaleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    customerNameFree?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    termDays?: NullableIntFieldUpdateOperationsInput | number | null
    installments?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneWithoutCrediarioAccountsNestedInput
    payments?: CrediarioPaymentUpdateManyWithoutAccountNestedInput
  }

  export type CrediarioAccountUncheckedUpdateWithoutSaleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    customerId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    customerNameFree?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    termDays?: NullableIntFieldUpdateOperationsInput | number | null
    installments?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: CrediarioPaymentUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type SaleCreateWithoutItemsInput = {
    id?: bigint | number
    customerNameFree?: string | null
    discount?: Decimal | DecimalJsLike | number | string
    surcharge?: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    paymentMethod: string
    installments?: number | null
    downPayment?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    customer?: CustomerCreateNestedOneWithoutSalesInput
    cashRegister?: CashRegisterCreateNestedOneWithoutSalesInput
    crediarioAccount?: CrediarioAccountCreateNestedOneWithoutSaleInput
  }

  export type SaleUncheckedCreateWithoutItemsInput = {
    id?: bigint | number
    customerId?: bigint | number | null
    customerNameFree?: string | null
    cashRegisterId?: bigint | number | null
    discount?: Decimal | DecimalJsLike | number | string
    surcharge?: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    paymentMethod: string
    installments?: number | null
    downPayment?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    crediarioAccount?: CrediarioAccountUncheckedCreateNestedOneWithoutSaleInput
  }

  export type SaleCreateOrConnectWithoutItemsInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutItemsInput, SaleUncheckedCreateWithoutItemsInput>
  }

  export type ProductCreateWithoutSaleItemsInput = {
    id?: bigint | number
    name: string
    barcode: string
    category: string
    brand?: string | null
    costPrice: Decimal | DecimalJsLike | number | string
    salePrice: Decimal | DecimalJsLike | number | string
    stock?: number
    minStock?: number
    createdAt?: Date | string
    stockAdjustments?: StockAdjustmentCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutSaleItemsInput = {
    id?: bigint | number
    name: string
    barcode: string
    category: string
    brand?: string | null
    costPrice: Decimal | DecimalJsLike | number | string
    salePrice: Decimal | DecimalJsLike | number | string
    stock?: number
    minStock?: number
    createdAt?: Date | string
    stockAdjustments?: StockAdjustmentUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutSaleItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSaleItemsInput, ProductUncheckedCreateWithoutSaleItemsInput>
  }

  export type SaleUpsertWithoutItemsInput = {
    update: XOR<SaleUpdateWithoutItemsInput, SaleUncheckedUpdateWithoutItemsInput>
    create: XOR<SaleCreateWithoutItemsInput, SaleUncheckedCreateWithoutItemsInput>
    where?: SaleWhereInput
  }

  export type SaleUpdateToOneWithWhereWithoutItemsInput = {
    where?: SaleWhereInput
    data: XOR<SaleUpdateWithoutItemsInput, SaleUncheckedUpdateWithoutItemsInput>
  }

  export type SaleUpdateWithoutItemsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    customerNameFree?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    surcharge?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    installments?: NullableIntFieldUpdateOperationsInput | number | null
    downPayment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneWithoutSalesNestedInput
    cashRegister?: CashRegisterUpdateOneWithoutSalesNestedInput
    crediarioAccount?: CrediarioAccountUpdateOneWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateWithoutItemsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    customerId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    customerNameFree?: NullableStringFieldUpdateOperationsInput | string | null
    cashRegisterId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    surcharge?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    installments?: NullableIntFieldUpdateOperationsInput | number | null
    downPayment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    crediarioAccount?: CrediarioAccountUncheckedUpdateOneWithoutSaleNestedInput
  }

  export type ProductUpsertWithoutSaleItemsInput = {
    update: XOR<ProductUpdateWithoutSaleItemsInput, ProductUncheckedUpdateWithoutSaleItemsInput>
    create: XOR<ProductCreateWithoutSaleItemsInput, ProductUncheckedCreateWithoutSaleItemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutSaleItemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutSaleItemsInput, ProductUncheckedUpdateWithoutSaleItemsInput>
  }

  export type ProductUpdateWithoutSaleItemsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    costPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    minStock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockAdjustments?: StockAdjustmentUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutSaleItemsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    costPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    minStock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockAdjustments?: StockAdjustmentUncheckedUpdateManyWithoutProductNestedInput
  }

  export type SupplierCreateWithoutPayablesInput = {
    id?: bigint | number
    legalName: string
    tradeName?: string | null
    cnpj?: string | null
    contactName?: string | null
    createdAt?: Date | string
  }

  export type SupplierUncheckedCreateWithoutPayablesInput = {
    id?: bigint | number
    legalName: string
    tradeName?: string | null
    cnpj?: string | null
    contactName?: string | null
    createdAt?: Date | string
  }

  export type SupplierCreateOrConnectWithoutPayablesInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutPayablesInput, SupplierUncheckedCreateWithoutPayablesInput>
  }

  export type SupplierUpsertWithoutPayablesInput = {
    update: XOR<SupplierUpdateWithoutPayablesInput, SupplierUncheckedUpdateWithoutPayablesInput>
    create: XOR<SupplierCreateWithoutPayablesInput, SupplierUncheckedCreateWithoutPayablesInput>
    where?: SupplierWhereInput
  }

  export type SupplierUpdateToOneWithWhereWithoutPayablesInput = {
    where?: SupplierWhereInput
    data: XOR<SupplierUpdateWithoutPayablesInput, SupplierUncheckedUpdateWithoutPayablesInput>
  }

  export type SupplierUpdateWithoutPayablesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    legalName?: StringFieldUpdateOperationsInput | string
    tradeName?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierUncheckedUpdateWithoutPayablesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    legalName?: StringFieldUpdateOperationsInput | string
    tradeName?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleCreateWithoutCrediarioAccountInput = {
    id?: bigint | number
    customerNameFree?: string | null
    discount?: Decimal | DecimalJsLike | number | string
    surcharge?: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    paymentMethod: string
    installments?: number | null
    downPayment?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    customer?: CustomerCreateNestedOneWithoutSalesInput
    cashRegister?: CashRegisterCreateNestedOneWithoutSalesInput
    items?: SaleItemCreateNestedManyWithoutSaleInput
  }

  export type SaleUncheckedCreateWithoutCrediarioAccountInput = {
    id?: bigint | number
    customerId?: bigint | number | null
    customerNameFree?: string | null
    cashRegisterId?: bigint | number | null
    discount?: Decimal | DecimalJsLike | number | string
    surcharge?: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    paymentMethod: string
    installments?: number | null
    downPayment?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    items?: SaleItemUncheckedCreateNestedManyWithoutSaleInput
  }

  export type SaleCreateOrConnectWithoutCrediarioAccountInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutCrediarioAccountInput, SaleUncheckedCreateWithoutCrediarioAccountInput>
  }

  export type CustomerCreateWithoutCrediarioAccountsInput = {
    id?: bigint | number
    name: string
    phone?: string | null
    city?: string | null
    lastPurchaseAt?: Date | string | null
    totalSpent?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    sales?: SaleCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutCrediarioAccountsInput = {
    id?: bigint | number
    name: string
    phone?: string | null
    city?: string | null
    lastPurchaseAt?: Date | string | null
    totalSpent?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    sales?: SaleUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutCrediarioAccountsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutCrediarioAccountsInput, CustomerUncheckedCreateWithoutCrediarioAccountsInput>
  }

  export type CrediarioPaymentCreateWithoutAccountInput = {
    id?: bigint | number
    amount: Decimal | DecimalJsLike | number | string
    paymentMethod: string
    paidAt?: Date | string
  }

  export type CrediarioPaymentUncheckedCreateWithoutAccountInput = {
    id?: bigint | number
    amount: Decimal | DecimalJsLike | number | string
    paymentMethod: string
    paidAt?: Date | string
  }

  export type CrediarioPaymentCreateOrConnectWithoutAccountInput = {
    where: CrediarioPaymentWhereUniqueInput
    create: XOR<CrediarioPaymentCreateWithoutAccountInput, CrediarioPaymentUncheckedCreateWithoutAccountInput>
  }

  export type CrediarioPaymentCreateManyAccountInputEnvelope = {
    data: CrediarioPaymentCreateManyAccountInput | CrediarioPaymentCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type SaleUpsertWithoutCrediarioAccountInput = {
    update: XOR<SaleUpdateWithoutCrediarioAccountInput, SaleUncheckedUpdateWithoutCrediarioAccountInput>
    create: XOR<SaleCreateWithoutCrediarioAccountInput, SaleUncheckedCreateWithoutCrediarioAccountInput>
    where?: SaleWhereInput
  }

  export type SaleUpdateToOneWithWhereWithoutCrediarioAccountInput = {
    where?: SaleWhereInput
    data: XOR<SaleUpdateWithoutCrediarioAccountInput, SaleUncheckedUpdateWithoutCrediarioAccountInput>
  }

  export type SaleUpdateWithoutCrediarioAccountInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    customerNameFree?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    surcharge?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    installments?: NullableIntFieldUpdateOperationsInput | number | null
    downPayment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneWithoutSalesNestedInput
    cashRegister?: CashRegisterUpdateOneWithoutSalesNestedInput
    items?: SaleItemUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateWithoutCrediarioAccountInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    customerId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    customerNameFree?: NullableStringFieldUpdateOperationsInput | string | null
    cashRegisterId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    surcharge?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    installments?: NullableIntFieldUpdateOperationsInput | number | null
    downPayment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SaleItemUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type CustomerUpsertWithoutCrediarioAccountsInput = {
    update: XOR<CustomerUpdateWithoutCrediarioAccountsInput, CustomerUncheckedUpdateWithoutCrediarioAccountsInput>
    create: XOR<CustomerCreateWithoutCrediarioAccountsInput, CustomerUncheckedCreateWithoutCrediarioAccountsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutCrediarioAccountsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutCrediarioAccountsInput, CustomerUncheckedUpdateWithoutCrediarioAccountsInput>
  }

  export type CustomerUpdateWithoutCrediarioAccountsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    lastPurchaseAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutCrediarioAccountsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    lastPurchaseAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CrediarioPaymentUpsertWithWhereUniqueWithoutAccountInput = {
    where: CrediarioPaymentWhereUniqueInput
    update: XOR<CrediarioPaymentUpdateWithoutAccountInput, CrediarioPaymentUncheckedUpdateWithoutAccountInput>
    create: XOR<CrediarioPaymentCreateWithoutAccountInput, CrediarioPaymentUncheckedCreateWithoutAccountInput>
  }

  export type CrediarioPaymentUpdateWithWhereUniqueWithoutAccountInput = {
    where: CrediarioPaymentWhereUniqueInput
    data: XOR<CrediarioPaymentUpdateWithoutAccountInput, CrediarioPaymentUncheckedUpdateWithoutAccountInput>
  }

  export type CrediarioPaymentUpdateManyWithWhereWithoutAccountInput = {
    where: CrediarioPaymentScalarWhereInput
    data: XOR<CrediarioPaymentUpdateManyMutationInput, CrediarioPaymentUncheckedUpdateManyWithoutAccountInput>
  }

  export type CrediarioPaymentScalarWhereInput = {
    AND?: CrediarioPaymentScalarWhereInput | CrediarioPaymentScalarWhereInput[]
    OR?: CrediarioPaymentScalarWhereInput[]
    NOT?: CrediarioPaymentScalarWhereInput | CrediarioPaymentScalarWhereInput[]
    id?: BigIntFilter<"CrediarioPayment"> | bigint | number
    accountId?: BigIntFilter<"CrediarioPayment"> | bigint | number
    amount?: DecimalFilter<"CrediarioPayment"> | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFilter<"CrediarioPayment"> | string
    paidAt?: DateTimeFilter<"CrediarioPayment"> | Date | string
  }

  export type CrediarioAccountCreateWithoutPaymentsInput = {
    id?: bigint | number
    customerNameFree?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    balance: Decimal | DecimalJsLike | number | string
    status?: string
    termDays?: number | null
    installments?: number | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    sale: SaleCreateNestedOneWithoutCrediarioAccountInput
    customer?: CustomerCreateNestedOneWithoutCrediarioAccountsInput
  }

  export type CrediarioAccountUncheckedCreateWithoutPaymentsInput = {
    id?: bigint | number
    saleId: bigint | number
    customerId?: bigint | number | null
    customerNameFree?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    balance: Decimal | DecimalJsLike | number | string
    status?: string
    termDays?: number | null
    installments?: number | null
    dueDate?: Date | string | null
    createdAt?: Date | string
  }

  export type CrediarioAccountCreateOrConnectWithoutPaymentsInput = {
    where: CrediarioAccountWhereUniqueInput
    create: XOR<CrediarioAccountCreateWithoutPaymentsInput, CrediarioAccountUncheckedCreateWithoutPaymentsInput>
  }

  export type CrediarioAccountUpsertWithoutPaymentsInput = {
    update: XOR<CrediarioAccountUpdateWithoutPaymentsInput, CrediarioAccountUncheckedUpdateWithoutPaymentsInput>
    create: XOR<CrediarioAccountCreateWithoutPaymentsInput, CrediarioAccountUncheckedCreateWithoutPaymentsInput>
    where?: CrediarioAccountWhereInput
  }

  export type CrediarioAccountUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: CrediarioAccountWhereInput
    data: XOR<CrediarioAccountUpdateWithoutPaymentsInput, CrediarioAccountUncheckedUpdateWithoutPaymentsInput>
  }

  export type CrediarioAccountUpdateWithoutPaymentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    customerNameFree?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    termDays?: NullableIntFieldUpdateOperationsInput | number | null
    installments?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sale?: SaleUpdateOneRequiredWithoutCrediarioAccountNestedInput
    customer?: CustomerUpdateOneWithoutCrediarioAccountsNestedInput
  }

  export type CrediarioAccountUncheckedUpdateWithoutPaymentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    saleId?: BigIntFieldUpdateOperationsInput | bigint | number
    customerId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    customerNameFree?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    termDays?: NullableIntFieldUpdateOperationsInput | number | null
    installments?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleItemCreateManyProductInput = {
    id?: bigint | number
    saleId: bigint | number
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
  }

  export type StockAdjustmentCreateManyProductInput = {
    id?: bigint | number
    previousStock: number
    newStock: number
    reason?: string | null
    createdAt?: Date | string
  }

  export type SaleItemUpdateWithoutProductInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sale?: SaleUpdateOneRequiredWithoutItemsNestedInput
  }

  export type SaleItemUncheckedUpdateWithoutProductInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    saleId?: BigIntFieldUpdateOperationsInput | bigint | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type SaleItemUncheckedUpdateManyWithoutProductInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    saleId?: BigIntFieldUpdateOperationsInput | bigint | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type StockAdjustmentUpdateWithoutProductInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    previousStock?: IntFieldUpdateOperationsInput | number
    newStock?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockAdjustmentUncheckedUpdateWithoutProductInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    previousStock?: IntFieldUpdateOperationsInput | number
    newStock?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockAdjustmentUncheckedUpdateManyWithoutProductInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    previousStock?: IntFieldUpdateOperationsInput | number
    newStock?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleCreateManyCustomerInput = {
    id?: bigint | number
    customerNameFree?: string | null
    cashRegisterId?: bigint | number | null
    discount?: Decimal | DecimalJsLike | number | string
    surcharge?: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    paymentMethod: string
    installments?: number | null
    downPayment?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
  }

  export type CrediarioAccountCreateManyCustomerInput = {
    id?: bigint | number
    saleId: bigint | number
    customerNameFree?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    paidAmount?: Decimal | DecimalJsLike | number | string
    balance: Decimal | DecimalJsLike | number | string
    status?: string
    termDays?: number | null
    installments?: number | null
    dueDate?: Date | string | null
    createdAt?: Date | string
  }

  export type SaleUpdateWithoutCustomerInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    customerNameFree?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    surcharge?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    installments?: NullableIntFieldUpdateOperationsInput | number | null
    downPayment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cashRegister?: CashRegisterUpdateOneWithoutSalesNestedInput
    items?: SaleItemUpdateManyWithoutSaleNestedInput
    crediarioAccount?: CrediarioAccountUpdateOneWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateWithoutCustomerInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    customerNameFree?: NullableStringFieldUpdateOperationsInput | string | null
    cashRegisterId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    surcharge?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    installments?: NullableIntFieldUpdateOperationsInput | number | null
    downPayment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SaleItemUncheckedUpdateManyWithoutSaleNestedInput
    crediarioAccount?: CrediarioAccountUncheckedUpdateOneWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateManyWithoutCustomerInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    customerNameFree?: NullableStringFieldUpdateOperationsInput | string | null
    cashRegisterId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    surcharge?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    installments?: NullableIntFieldUpdateOperationsInput | number | null
    downPayment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrediarioAccountUpdateWithoutCustomerInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    customerNameFree?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    termDays?: NullableIntFieldUpdateOperationsInput | number | null
    installments?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sale?: SaleUpdateOneRequiredWithoutCrediarioAccountNestedInput
    payments?: CrediarioPaymentUpdateManyWithoutAccountNestedInput
  }

  export type CrediarioAccountUncheckedUpdateWithoutCustomerInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    saleId?: BigIntFieldUpdateOperationsInput | bigint | number
    customerNameFree?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    termDays?: NullableIntFieldUpdateOperationsInput | number | null
    installments?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: CrediarioPaymentUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type CrediarioAccountUncheckedUpdateManyWithoutCustomerInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    saleId?: BigIntFieldUpdateOperationsInput | bigint | number
    customerNameFree?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    termDays?: NullableIntFieldUpdateOperationsInput | number | null
    installments?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayableCreateManySupplierInput = {
    id?: bigint | number
    supplierNameFree?: string | null
    category: string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    paymentMethod: string
    dueDate: Date | string
    invoiceNumber?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type PayableUpdateWithoutSupplierInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    supplierNameFree?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayableUncheckedUpdateWithoutSupplierInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    supplierNameFree?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayableUncheckedUpdateManyWithoutSupplierInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    supplierNameFree?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashWithdrawalCreateManyCashRegisterInput = {
    id?: bigint | number
    amount: Decimal | DecimalJsLike | number | string
    reason?: string | null
    createdAt?: Date | string
  }

  export type SaleCreateManyCashRegisterInput = {
    id?: bigint | number
    customerId?: bigint | number | null
    customerNameFree?: string | null
    discount?: Decimal | DecimalJsLike | number | string
    surcharge?: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    paymentMethod: string
    installments?: number | null
    downPayment?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
  }

  export type CashWithdrawalUpdateWithoutCashRegisterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashWithdrawalUncheckedUpdateWithoutCashRegisterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashWithdrawalUncheckedUpdateManyWithoutCashRegisterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleUpdateWithoutCashRegisterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    customerNameFree?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    surcharge?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    installments?: NullableIntFieldUpdateOperationsInput | number | null
    downPayment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneWithoutSalesNestedInput
    items?: SaleItemUpdateManyWithoutSaleNestedInput
    crediarioAccount?: CrediarioAccountUpdateOneWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateWithoutCashRegisterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    customerId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    customerNameFree?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    surcharge?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    installments?: NullableIntFieldUpdateOperationsInput | number | null
    downPayment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SaleItemUncheckedUpdateManyWithoutSaleNestedInput
    crediarioAccount?: CrediarioAccountUncheckedUpdateOneWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateManyWithoutCashRegisterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    customerId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    customerNameFree?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    surcharge?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    installments?: NullableIntFieldUpdateOperationsInput | number | null
    downPayment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleItemCreateManySaleInput = {
    id?: bigint | number
    productId: bigint | number
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
  }

  export type SaleItemUpdateWithoutSaleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    product?: ProductUpdateOneRequiredWithoutSaleItemsNestedInput
  }

  export type SaleItemUncheckedUpdateWithoutSaleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    productId?: BigIntFieldUpdateOperationsInput | bigint | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type SaleItemUncheckedUpdateManyWithoutSaleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    productId?: BigIntFieldUpdateOperationsInput | bigint | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CrediarioPaymentCreateManyAccountInput = {
    id?: bigint | number
    amount: Decimal | DecimalJsLike | number | string
    paymentMethod: string
    paidAt?: Date | string
  }

  export type CrediarioPaymentUpdateWithoutAccountInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrediarioPaymentUncheckedUpdateWithoutAccountInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrediarioPaymentUncheckedUpdateManyWithoutAccountInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}