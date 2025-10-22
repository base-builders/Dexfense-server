
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
 * Model Code
 * 
 */
export type Code = $Result.DefaultSelection<Prisma.$CodePayload>
/**
 * Model Pool
 * 
 */
export type Pool = $Result.DefaultSelection<Prisma.$PoolPayload>
/**
 * Model PoolTreasury
 * 
 */
export type PoolTreasury = $Result.DefaultSelection<Prisma.$PoolTreasuryPayload>
/**
 * Model GameResultLog
 * 
 */
export type GameResultLog = $Result.DefaultSelection<Prisma.$GameResultLogPayload>
/**
 * Model GameTreasury
 * 
 */
export type GameTreasury = $Result.DefaultSelection<Prisma.$GameTreasuryPayload>
/**
 * Model DynamicAdjustmentFactor
 * 
 */
export type DynamicAdjustmentFactor = $Result.DefaultSelection<Prisma.$DynamicAdjustmentFactorPayload>
/**
 * Model DynamicFactorCount
 * 
 */
export type DynamicFactorCount = $Result.DefaultSelection<Prisma.$DynamicFactorCountPayload>
/**
 * Model Game
 * 
 */
export type Game = $Result.DefaultSelection<Prisma.$GamePayload>
/**
 * Model CardChoice
 * 
 */
export type CardChoice = $Result.DefaultSelection<Prisma.$CardChoicePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CardType: {
  NORMAL: 'NORMAL',
  BOSS: 'BOSS'
};

export type CardType = (typeof CardType)[keyof typeof CardType]


export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Difficulty: {
  EASY: 'EASY',
  NORMAL: 'NORMAL',
  HARD: 'HARD'
};

export type Difficulty = (typeof Difficulty)[keyof typeof Difficulty]

}

export type CardType = $Enums.CardType

export const CardType: typeof $Enums.CardType

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Difficulty = $Enums.Difficulty

export const Difficulty: typeof $Enums.Difficulty

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
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.code`: Exposes CRUD operations for the **Code** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Codes
    * const codes = await prisma.code.findMany()
    * ```
    */
  get code(): Prisma.CodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pool`: Exposes CRUD operations for the **Pool** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pools
    * const pools = await prisma.pool.findMany()
    * ```
    */
  get pool(): Prisma.PoolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.poolTreasury`: Exposes CRUD operations for the **PoolTreasury** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PoolTreasuries
    * const poolTreasuries = await prisma.poolTreasury.findMany()
    * ```
    */
  get poolTreasury(): Prisma.PoolTreasuryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gameResultLog`: Exposes CRUD operations for the **GameResultLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameResultLogs
    * const gameResultLogs = await prisma.gameResultLog.findMany()
    * ```
    */
  get gameResultLog(): Prisma.GameResultLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gameTreasury`: Exposes CRUD operations for the **GameTreasury** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameTreasuries
    * const gameTreasuries = await prisma.gameTreasury.findMany()
    * ```
    */
  get gameTreasury(): Prisma.GameTreasuryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dynamicAdjustmentFactor`: Exposes CRUD operations for the **DynamicAdjustmentFactor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DynamicAdjustmentFactors
    * const dynamicAdjustmentFactors = await prisma.dynamicAdjustmentFactor.findMany()
    * ```
    */
  get dynamicAdjustmentFactor(): Prisma.DynamicAdjustmentFactorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dynamicFactorCount`: Exposes CRUD operations for the **DynamicFactorCount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DynamicFactorCounts
    * const dynamicFactorCounts = await prisma.dynamicFactorCount.findMany()
    * ```
    */
  get dynamicFactorCount(): Prisma.DynamicFactorCountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cardChoice`: Exposes CRUD operations for the **CardChoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CardChoices
    * const cardChoices = await prisma.cardChoice.findMany()
    * ```
    */
  get cardChoice(): Prisma.CardChoiceDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Code: 'Code',
    Pool: 'Pool',
    PoolTreasury: 'PoolTreasury',
    GameResultLog: 'GameResultLog',
    GameTreasury: 'GameTreasury',
    DynamicAdjustmentFactor: 'DynamicAdjustmentFactor',
    DynamicFactorCount: 'DynamicFactorCount',
    Game: 'Game',
    CardChoice: 'CardChoice'
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
      modelProps: "user" | "code" | "pool" | "poolTreasury" | "gameResultLog" | "gameTreasury" | "dynamicAdjustmentFactor" | "dynamicFactorCount" | "game" | "cardChoice"
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
      Code: {
        payload: Prisma.$CodePayload<ExtArgs>
        fields: Prisma.CodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePayload>
          }
          findFirst: {
            args: Prisma.CodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePayload>
          }
          findMany: {
            args: Prisma.CodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePayload>[]
          }
          create: {
            args: Prisma.CodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePayload>
          }
          createMany: {
            args: Prisma.CodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePayload>[]
          }
          delete: {
            args: Prisma.CodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePayload>
          }
          update: {
            args: Prisma.CodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePayload>
          }
          deleteMany: {
            args: Prisma.CodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePayload>[]
          }
          upsert: {
            args: Prisma.CodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePayload>
          }
          aggregate: {
            args: Prisma.CodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCode>
          }
          groupBy: {
            args: Prisma.CodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CodeCountArgs<ExtArgs>
            result: $Utils.Optional<CodeCountAggregateOutputType> | number
          }
        }
      }
      Pool: {
        payload: Prisma.$PoolPayload<ExtArgs>
        fields: Prisma.PoolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PoolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PoolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolPayload>
          }
          findFirst: {
            args: Prisma.PoolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PoolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolPayload>
          }
          findMany: {
            args: Prisma.PoolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolPayload>[]
          }
          create: {
            args: Prisma.PoolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolPayload>
          }
          createMany: {
            args: Prisma.PoolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PoolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolPayload>[]
          }
          delete: {
            args: Prisma.PoolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolPayload>
          }
          update: {
            args: Prisma.PoolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolPayload>
          }
          deleteMany: {
            args: Prisma.PoolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PoolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PoolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolPayload>[]
          }
          upsert: {
            args: Prisma.PoolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolPayload>
          }
          aggregate: {
            args: Prisma.PoolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePool>
          }
          groupBy: {
            args: Prisma.PoolGroupByArgs<ExtArgs>
            result: $Utils.Optional<PoolGroupByOutputType>[]
          }
          count: {
            args: Prisma.PoolCountArgs<ExtArgs>
            result: $Utils.Optional<PoolCountAggregateOutputType> | number
          }
        }
      }
      PoolTreasury: {
        payload: Prisma.$PoolTreasuryPayload<ExtArgs>
        fields: Prisma.PoolTreasuryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PoolTreasuryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolTreasuryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PoolTreasuryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolTreasuryPayload>
          }
          findFirst: {
            args: Prisma.PoolTreasuryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolTreasuryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PoolTreasuryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolTreasuryPayload>
          }
          findMany: {
            args: Prisma.PoolTreasuryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolTreasuryPayload>[]
          }
          create: {
            args: Prisma.PoolTreasuryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolTreasuryPayload>
          }
          createMany: {
            args: Prisma.PoolTreasuryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PoolTreasuryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolTreasuryPayload>[]
          }
          delete: {
            args: Prisma.PoolTreasuryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolTreasuryPayload>
          }
          update: {
            args: Prisma.PoolTreasuryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolTreasuryPayload>
          }
          deleteMany: {
            args: Prisma.PoolTreasuryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PoolTreasuryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PoolTreasuryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolTreasuryPayload>[]
          }
          upsert: {
            args: Prisma.PoolTreasuryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolTreasuryPayload>
          }
          aggregate: {
            args: Prisma.PoolTreasuryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePoolTreasury>
          }
          groupBy: {
            args: Prisma.PoolTreasuryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PoolTreasuryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PoolTreasuryCountArgs<ExtArgs>
            result: $Utils.Optional<PoolTreasuryCountAggregateOutputType> | number
          }
        }
      }
      GameResultLog: {
        payload: Prisma.$GameResultLogPayload<ExtArgs>
        fields: Prisma.GameResultLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameResultLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameResultLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameResultLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameResultLogPayload>
          }
          findFirst: {
            args: Prisma.GameResultLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameResultLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameResultLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameResultLogPayload>
          }
          findMany: {
            args: Prisma.GameResultLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameResultLogPayload>[]
          }
          create: {
            args: Prisma.GameResultLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameResultLogPayload>
          }
          createMany: {
            args: Prisma.GameResultLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameResultLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameResultLogPayload>[]
          }
          delete: {
            args: Prisma.GameResultLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameResultLogPayload>
          }
          update: {
            args: Prisma.GameResultLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameResultLogPayload>
          }
          deleteMany: {
            args: Prisma.GameResultLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameResultLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameResultLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameResultLogPayload>[]
          }
          upsert: {
            args: Prisma.GameResultLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameResultLogPayload>
          }
          aggregate: {
            args: Prisma.GameResultLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameResultLog>
          }
          groupBy: {
            args: Prisma.GameResultLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameResultLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameResultLogCountArgs<ExtArgs>
            result: $Utils.Optional<GameResultLogCountAggregateOutputType> | number
          }
        }
      }
      GameTreasury: {
        payload: Prisma.$GameTreasuryPayload<ExtArgs>
        fields: Prisma.GameTreasuryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameTreasuryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTreasuryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameTreasuryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTreasuryPayload>
          }
          findFirst: {
            args: Prisma.GameTreasuryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTreasuryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameTreasuryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTreasuryPayload>
          }
          findMany: {
            args: Prisma.GameTreasuryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTreasuryPayload>[]
          }
          create: {
            args: Prisma.GameTreasuryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTreasuryPayload>
          }
          createMany: {
            args: Prisma.GameTreasuryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameTreasuryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTreasuryPayload>[]
          }
          delete: {
            args: Prisma.GameTreasuryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTreasuryPayload>
          }
          update: {
            args: Prisma.GameTreasuryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTreasuryPayload>
          }
          deleteMany: {
            args: Prisma.GameTreasuryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameTreasuryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameTreasuryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTreasuryPayload>[]
          }
          upsert: {
            args: Prisma.GameTreasuryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTreasuryPayload>
          }
          aggregate: {
            args: Prisma.GameTreasuryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameTreasury>
          }
          groupBy: {
            args: Prisma.GameTreasuryGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameTreasuryGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameTreasuryCountArgs<ExtArgs>
            result: $Utils.Optional<GameTreasuryCountAggregateOutputType> | number
          }
        }
      }
      DynamicAdjustmentFactor: {
        payload: Prisma.$DynamicAdjustmentFactorPayload<ExtArgs>
        fields: Prisma.DynamicAdjustmentFactorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DynamicAdjustmentFactorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DynamicAdjustmentFactorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DynamicAdjustmentFactorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DynamicAdjustmentFactorPayload>
          }
          findFirst: {
            args: Prisma.DynamicAdjustmentFactorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DynamicAdjustmentFactorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DynamicAdjustmentFactorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DynamicAdjustmentFactorPayload>
          }
          findMany: {
            args: Prisma.DynamicAdjustmentFactorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DynamicAdjustmentFactorPayload>[]
          }
          create: {
            args: Prisma.DynamicAdjustmentFactorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DynamicAdjustmentFactorPayload>
          }
          createMany: {
            args: Prisma.DynamicAdjustmentFactorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DynamicAdjustmentFactorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DynamicAdjustmentFactorPayload>[]
          }
          delete: {
            args: Prisma.DynamicAdjustmentFactorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DynamicAdjustmentFactorPayload>
          }
          update: {
            args: Prisma.DynamicAdjustmentFactorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DynamicAdjustmentFactorPayload>
          }
          deleteMany: {
            args: Prisma.DynamicAdjustmentFactorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DynamicAdjustmentFactorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DynamicAdjustmentFactorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DynamicAdjustmentFactorPayload>[]
          }
          upsert: {
            args: Prisma.DynamicAdjustmentFactorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DynamicAdjustmentFactorPayload>
          }
          aggregate: {
            args: Prisma.DynamicAdjustmentFactorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDynamicAdjustmentFactor>
          }
          groupBy: {
            args: Prisma.DynamicAdjustmentFactorGroupByArgs<ExtArgs>
            result: $Utils.Optional<DynamicAdjustmentFactorGroupByOutputType>[]
          }
          count: {
            args: Prisma.DynamicAdjustmentFactorCountArgs<ExtArgs>
            result: $Utils.Optional<DynamicAdjustmentFactorCountAggregateOutputType> | number
          }
        }
      }
      DynamicFactorCount: {
        payload: Prisma.$DynamicFactorCountPayload<ExtArgs>
        fields: Prisma.DynamicFactorCountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DynamicFactorCountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DynamicFactorCountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DynamicFactorCountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DynamicFactorCountPayload>
          }
          findFirst: {
            args: Prisma.DynamicFactorCountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DynamicFactorCountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DynamicFactorCountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DynamicFactorCountPayload>
          }
          findMany: {
            args: Prisma.DynamicFactorCountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DynamicFactorCountPayload>[]
          }
          create: {
            args: Prisma.DynamicFactorCountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DynamicFactorCountPayload>
          }
          createMany: {
            args: Prisma.DynamicFactorCountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DynamicFactorCountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DynamicFactorCountPayload>[]
          }
          delete: {
            args: Prisma.DynamicFactorCountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DynamicFactorCountPayload>
          }
          update: {
            args: Prisma.DynamicFactorCountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DynamicFactorCountPayload>
          }
          deleteMany: {
            args: Prisma.DynamicFactorCountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DynamicFactorCountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DynamicFactorCountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DynamicFactorCountPayload>[]
          }
          upsert: {
            args: Prisma.DynamicFactorCountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DynamicFactorCountPayload>
          }
          aggregate: {
            args: Prisma.DynamicFactorCountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDynamicFactorCount>
          }
          groupBy: {
            args: Prisma.DynamicFactorCountGroupByArgs<ExtArgs>
            result: $Utils.Optional<DynamicFactorCountGroupByOutputType>[]
          }
          count: {
            args: Prisma.DynamicFactorCountCountArgs<ExtArgs>
            result: $Utils.Optional<DynamicFactorCountCountAggregateOutputType> | number
          }
        }
      }
      Game: {
        payload: Prisma.$GamePayload<ExtArgs>
        fields: Prisma.GameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findFirst: {
            args: Prisma.GameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findMany: {
            args: Prisma.GameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          create: {
            args: Prisma.GameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          createMany: {
            args: Prisma.GameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          delete: {
            args: Prisma.GameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          update: {
            args: Prisma.GameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          deleteMany: {
            args: Prisma.GameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          upsert: {
            args: Prisma.GameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          aggregate: {
            args: Prisma.GameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGame>
          }
          groupBy: {
            args: Prisma.GameGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameCountArgs<ExtArgs>
            result: $Utils.Optional<GameCountAggregateOutputType> | number
          }
        }
      }
      CardChoice: {
        payload: Prisma.$CardChoicePayload<ExtArgs>
        fields: Prisma.CardChoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CardChoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardChoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CardChoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardChoicePayload>
          }
          findFirst: {
            args: Prisma.CardChoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardChoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CardChoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardChoicePayload>
          }
          findMany: {
            args: Prisma.CardChoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardChoicePayload>[]
          }
          create: {
            args: Prisma.CardChoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardChoicePayload>
          }
          createMany: {
            args: Prisma.CardChoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CardChoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardChoicePayload>[]
          }
          delete: {
            args: Prisma.CardChoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardChoicePayload>
          }
          update: {
            args: Prisma.CardChoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardChoicePayload>
          }
          deleteMany: {
            args: Prisma.CardChoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CardChoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CardChoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardChoicePayload>[]
          }
          upsert: {
            args: Prisma.CardChoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardChoicePayload>
          }
          aggregate: {
            args: Prisma.CardChoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCardChoice>
          }
          groupBy: {
            args: Prisma.CardChoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardChoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.CardChoiceCountArgs<ExtArgs>
            result: $Utils.Optional<CardChoiceCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    code?: CodeOmit
    pool?: PoolOmit
    poolTreasury?: PoolTreasuryOmit
    gameResultLog?: GameResultLogOmit
    gameTreasury?: GameTreasuryOmit
    dynamicAdjustmentFactor?: DynamicAdjustmentFactorOmit
    dynamicFactorCount?: DynamicFactorCountOmit
    game?: GameOmit
    cardChoice?: CardChoiceOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    gameResults: number
    games: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameResults?: boolean | UserCountOutputTypeCountGameResultsArgs
    games?: boolean | UserCountOutputTypeCountGamesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGameResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameResultLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }


  /**
   * Count Type GameCountOutputType
   */

  export type GameCountOutputType = {
    cardChoices: number
  }

  export type GameCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cardChoices?: boolean | GameCountOutputTypeCountCardChoicesArgs
  }

  // Custom InputTypes
  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountOutputType
     */
    select?: GameCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountCardChoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardChoiceWhereInput
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
    codeId: number | null
    token1Amount: number | null
    token2Amount: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    codeId: number | null
    token1Amount: number | null
    token2Amount: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    address: string | null
    createdAt: Date | null
    codeId: number | null
    password: string | null
    role: $Enums.Role | null
    token1Amount: number | null
    token2Amount: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    address: string | null
    createdAt: Date | null
    codeId: number | null
    password: string | null
    role: $Enums.Role | null
    token1Amount: number | null
    token2Amount: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    address: number
    createdAt: number
    codeId: number
    password: number
    role: number
    token1Amount: number
    token2Amount: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    codeId?: true
    token1Amount?: true
    token2Amount?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    codeId?: true
    token1Amount?: true
    token2Amount?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    address?: true
    createdAt?: true
    codeId?: true
    password?: true
    role?: true
    token1Amount?: true
    token2Amount?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    address?: true
    createdAt?: true
    codeId?: true
    password?: true
    role?: true
    token1Amount?: true
    token2Amount?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    address?: true
    createdAt?: true
    codeId?: true
    password?: true
    role?: true
    token1Amount?: true
    token2Amount?: true
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
    id: number
    address: string
    createdAt: Date
    codeId: number
    password: string
    role: $Enums.Role
    token1Amount: number
    token2Amount: number
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
    address?: boolean
    createdAt?: boolean
    codeId?: boolean
    password?: boolean
    role?: boolean
    token1Amount?: boolean
    token2Amount?: boolean
    gameResults?: boolean | User$gameResultsArgs<ExtArgs>
    games?: boolean | User$gamesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    createdAt?: boolean
    codeId?: boolean
    password?: boolean
    role?: boolean
    token1Amount?: boolean
    token2Amount?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    createdAt?: boolean
    codeId?: boolean
    password?: boolean
    role?: boolean
    token1Amount?: boolean
    token2Amount?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    address?: boolean
    createdAt?: boolean
    codeId?: boolean
    password?: boolean
    role?: boolean
    token1Amount?: boolean
    token2Amount?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "address" | "createdAt" | "codeId" | "password" | "role" | "token1Amount" | "token2Amount", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameResults?: boolean | User$gameResultsArgs<ExtArgs>
    games?: boolean | User$gamesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      gameResults: Prisma.$GameResultLogPayload<ExtArgs>[]
      games: Prisma.$GamePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      address: string
      createdAt: Date
      codeId: number
      password: string
      role: $Enums.Role
      token1Amount: number
      token2Amount: number
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
    gameResults<T extends User$gameResultsArgs<ExtArgs> = {}>(args?: Subset<T, User$gameResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameResultLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    games<T extends User$gamesArgs<ExtArgs> = {}>(args?: Subset<T, User$gamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly address: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly codeId: FieldRef<"User", 'Int'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly token1Amount: FieldRef<"User", 'Float'>
    readonly token2Amount: FieldRef<"User", 'Float'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User.gameResults
   */
  export type User$gameResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameResultLog
     */
    select?: GameResultLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameResultLog
     */
    omit?: GameResultLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameResultLogInclude<ExtArgs> | null
    where?: GameResultLogWhereInput
    orderBy?: GameResultLogOrderByWithRelationInput | GameResultLogOrderByWithRelationInput[]
    cursor?: GameResultLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameResultLogScalarFieldEnum | GameResultLogScalarFieldEnum[]
  }

  /**
   * User.games
   */
  export type User$gamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Code
   */

  export type AggregateCode = {
    _count: CodeCountAggregateOutputType | null
    _avg: CodeAvgAggregateOutputType | null
    _sum: CodeSumAggregateOutputType | null
    _min: CodeMinAggregateOutputType | null
    _max: CodeMaxAggregateOutputType | null
  }

  export type CodeAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CodeSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CodeMinAggregateOutputType = {
    id: number | null
    code: string | null
    userId: number | null
    createdAt: Date | null
  }

  export type CodeMaxAggregateOutputType = {
    id: number | null
    code: string | null
    userId: number | null
    createdAt: Date | null
  }

  export type CodeCountAggregateOutputType = {
    id: number
    code: number
    userId: number
    createdAt: number
    _all: number
  }


  export type CodeAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CodeSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CodeMinAggregateInputType = {
    id?: true
    code?: true
    userId?: true
    createdAt?: true
  }

  export type CodeMaxAggregateInputType = {
    id?: true
    code?: true
    userId?: true
    createdAt?: true
  }

  export type CodeCountAggregateInputType = {
    id?: true
    code?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type CodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Code to aggregate.
     */
    where?: CodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Codes to fetch.
     */
    orderBy?: CodeOrderByWithRelationInput | CodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Codes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Codes
    **/
    _count?: true | CodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CodeMaxAggregateInputType
  }

  export type GetCodeAggregateType<T extends CodeAggregateArgs> = {
        [P in keyof T & keyof AggregateCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCode[P]>
      : GetScalarType<T[P], AggregateCode[P]>
  }




  export type CodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CodeWhereInput
    orderBy?: CodeOrderByWithAggregationInput | CodeOrderByWithAggregationInput[]
    by: CodeScalarFieldEnum[] | CodeScalarFieldEnum
    having?: CodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CodeCountAggregateInputType | true
    _avg?: CodeAvgAggregateInputType
    _sum?: CodeSumAggregateInputType
    _min?: CodeMinAggregateInputType
    _max?: CodeMaxAggregateInputType
  }

  export type CodeGroupByOutputType = {
    id: number
    code: string
    userId: number | null
    createdAt: Date
    _count: CodeCountAggregateOutputType | null
    _avg: CodeAvgAggregateOutputType | null
    _sum: CodeSumAggregateOutputType | null
    _min: CodeMinAggregateOutputType | null
    _max: CodeMaxAggregateOutputType | null
  }

  type GetCodeGroupByPayload<T extends CodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CodeGroupByOutputType[P]>
            : GetScalarType<T[P], CodeGroupByOutputType[P]>
        }
      >
    >


  export type CodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    userId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["code"]>

  export type CodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    userId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["code"]>

  export type CodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    userId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["code"]>

  export type CodeSelectScalar = {
    id?: boolean
    code?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type CodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "userId" | "createdAt", ExtArgs["result"]["code"]>

  export type $CodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Code"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      userId: number | null
      createdAt: Date
    }, ExtArgs["result"]["code"]>
    composites: {}
  }

  type CodeGetPayload<S extends boolean | null | undefined | CodeDefaultArgs> = $Result.GetResult<Prisma.$CodePayload, S>

  type CodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CodeCountAggregateInputType | true
    }

  export interface CodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Code'], meta: { name: 'Code' } }
    /**
     * Find zero or one Code that matches the filter.
     * @param {CodeFindUniqueArgs} args - Arguments to find a Code
     * @example
     * // Get one Code
     * const code = await prisma.code.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CodeFindUniqueArgs>(args: SelectSubset<T, CodeFindUniqueArgs<ExtArgs>>): Prisma__CodeClient<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Code that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CodeFindUniqueOrThrowArgs} args - Arguments to find a Code
     * @example
     * // Get one Code
     * const code = await prisma.code.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CodeFindUniqueOrThrowArgs>(args: SelectSubset<T, CodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CodeClient<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Code that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeFindFirstArgs} args - Arguments to find a Code
     * @example
     * // Get one Code
     * const code = await prisma.code.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CodeFindFirstArgs>(args?: SelectSubset<T, CodeFindFirstArgs<ExtArgs>>): Prisma__CodeClient<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Code that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeFindFirstOrThrowArgs} args - Arguments to find a Code
     * @example
     * // Get one Code
     * const code = await prisma.code.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CodeFindFirstOrThrowArgs>(args?: SelectSubset<T, CodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CodeClient<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Codes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Codes
     * const codes = await prisma.code.findMany()
     * 
     * // Get first 10 Codes
     * const codes = await prisma.code.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const codeWithIdOnly = await prisma.code.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CodeFindManyArgs>(args?: SelectSubset<T, CodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Code.
     * @param {CodeCreateArgs} args - Arguments to create a Code.
     * @example
     * // Create one Code
     * const Code = await prisma.code.create({
     *   data: {
     *     // ... data to create a Code
     *   }
     * })
     * 
     */
    create<T extends CodeCreateArgs>(args: SelectSubset<T, CodeCreateArgs<ExtArgs>>): Prisma__CodeClient<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Codes.
     * @param {CodeCreateManyArgs} args - Arguments to create many Codes.
     * @example
     * // Create many Codes
     * const code = await prisma.code.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CodeCreateManyArgs>(args?: SelectSubset<T, CodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Codes and returns the data saved in the database.
     * @param {CodeCreateManyAndReturnArgs} args - Arguments to create many Codes.
     * @example
     * // Create many Codes
     * const code = await prisma.code.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Codes and only return the `id`
     * const codeWithIdOnly = await prisma.code.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CodeCreateManyAndReturnArgs>(args?: SelectSubset<T, CodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Code.
     * @param {CodeDeleteArgs} args - Arguments to delete one Code.
     * @example
     * // Delete one Code
     * const Code = await prisma.code.delete({
     *   where: {
     *     // ... filter to delete one Code
     *   }
     * })
     * 
     */
    delete<T extends CodeDeleteArgs>(args: SelectSubset<T, CodeDeleteArgs<ExtArgs>>): Prisma__CodeClient<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Code.
     * @param {CodeUpdateArgs} args - Arguments to update one Code.
     * @example
     * // Update one Code
     * const code = await prisma.code.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CodeUpdateArgs>(args: SelectSubset<T, CodeUpdateArgs<ExtArgs>>): Prisma__CodeClient<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Codes.
     * @param {CodeDeleteManyArgs} args - Arguments to filter Codes to delete.
     * @example
     * // Delete a few Codes
     * const { count } = await prisma.code.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CodeDeleteManyArgs>(args?: SelectSubset<T, CodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Codes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Codes
     * const code = await prisma.code.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CodeUpdateManyArgs>(args: SelectSubset<T, CodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Codes and returns the data updated in the database.
     * @param {CodeUpdateManyAndReturnArgs} args - Arguments to update many Codes.
     * @example
     * // Update many Codes
     * const code = await prisma.code.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Codes and only return the `id`
     * const codeWithIdOnly = await prisma.code.updateManyAndReturn({
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
    updateManyAndReturn<T extends CodeUpdateManyAndReturnArgs>(args: SelectSubset<T, CodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Code.
     * @param {CodeUpsertArgs} args - Arguments to update or create a Code.
     * @example
     * // Update or create a Code
     * const code = await prisma.code.upsert({
     *   create: {
     *     // ... data to create a Code
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Code we want to update
     *   }
     * })
     */
    upsert<T extends CodeUpsertArgs>(args: SelectSubset<T, CodeUpsertArgs<ExtArgs>>): Prisma__CodeClient<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Codes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeCountArgs} args - Arguments to filter Codes to count.
     * @example
     * // Count the number of Codes
     * const count = await prisma.code.count({
     *   where: {
     *     // ... the filter for the Codes we want to count
     *   }
     * })
    **/
    count<T extends CodeCountArgs>(
      args?: Subset<T, CodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Code.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CodeAggregateArgs>(args: Subset<T, CodeAggregateArgs>): Prisma.PrismaPromise<GetCodeAggregateType<T>>

    /**
     * Group by Code.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeGroupByArgs} args - Group by arguments.
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
      T extends CodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CodeGroupByArgs['orderBy'] }
        : { orderBy?: CodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Code model
   */
  readonly fields: CodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Code.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Code model
   */
  interface CodeFieldRefs {
    readonly id: FieldRef<"Code", 'Int'>
    readonly code: FieldRef<"Code", 'String'>
    readonly userId: FieldRef<"Code", 'Int'>
    readonly createdAt: FieldRef<"Code", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Code findUnique
   */
  export type CodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * Filter, which Code to fetch.
     */
    where: CodeWhereUniqueInput
  }

  /**
   * Code findUniqueOrThrow
   */
  export type CodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * Filter, which Code to fetch.
     */
    where: CodeWhereUniqueInput
  }

  /**
   * Code findFirst
   */
  export type CodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * Filter, which Code to fetch.
     */
    where?: CodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Codes to fetch.
     */
    orderBy?: CodeOrderByWithRelationInput | CodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Codes.
     */
    cursor?: CodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Codes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Codes.
     */
    distinct?: CodeScalarFieldEnum | CodeScalarFieldEnum[]
  }

  /**
   * Code findFirstOrThrow
   */
  export type CodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * Filter, which Code to fetch.
     */
    where?: CodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Codes to fetch.
     */
    orderBy?: CodeOrderByWithRelationInput | CodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Codes.
     */
    cursor?: CodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Codes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Codes.
     */
    distinct?: CodeScalarFieldEnum | CodeScalarFieldEnum[]
  }

  /**
   * Code findMany
   */
  export type CodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * Filter, which Codes to fetch.
     */
    where?: CodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Codes to fetch.
     */
    orderBy?: CodeOrderByWithRelationInput | CodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Codes.
     */
    cursor?: CodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Codes.
     */
    skip?: number
    distinct?: CodeScalarFieldEnum | CodeScalarFieldEnum[]
  }

  /**
   * Code create
   */
  export type CodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * The data needed to create a Code.
     */
    data: XOR<CodeCreateInput, CodeUncheckedCreateInput>
  }

  /**
   * Code createMany
   */
  export type CodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Codes.
     */
    data: CodeCreateManyInput | CodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Code createManyAndReturn
   */
  export type CodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * The data used to create many Codes.
     */
    data: CodeCreateManyInput | CodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Code update
   */
  export type CodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * The data needed to update a Code.
     */
    data: XOR<CodeUpdateInput, CodeUncheckedUpdateInput>
    /**
     * Choose, which Code to update.
     */
    where: CodeWhereUniqueInput
  }

  /**
   * Code updateMany
   */
  export type CodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Codes.
     */
    data: XOR<CodeUpdateManyMutationInput, CodeUncheckedUpdateManyInput>
    /**
     * Filter which Codes to update
     */
    where?: CodeWhereInput
    /**
     * Limit how many Codes to update.
     */
    limit?: number
  }

  /**
   * Code updateManyAndReturn
   */
  export type CodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * The data used to update Codes.
     */
    data: XOR<CodeUpdateManyMutationInput, CodeUncheckedUpdateManyInput>
    /**
     * Filter which Codes to update
     */
    where?: CodeWhereInput
    /**
     * Limit how many Codes to update.
     */
    limit?: number
  }

  /**
   * Code upsert
   */
  export type CodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * The filter to search for the Code to update in case it exists.
     */
    where: CodeWhereUniqueInput
    /**
     * In case the Code found by the `where` argument doesn't exist, create a new Code with this data.
     */
    create: XOR<CodeCreateInput, CodeUncheckedCreateInput>
    /**
     * In case the Code was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CodeUpdateInput, CodeUncheckedUpdateInput>
  }

  /**
   * Code delete
   */
  export type CodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * Filter which Code to delete.
     */
    where: CodeWhereUniqueInput
  }

  /**
   * Code deleteMany
   */
  export type CodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Codes to delete
     */
    where?: CodeWhereInput
    /**
     * Limit how many Codes to delete.
     */
    limit?: number
  }

  /**
   * Code without action
   */
  export type CodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
  }


  /**
   * Model Pool
   */

  export type AggregatePool = {
    _count: PoolCountAggregateOutputType | null
    _avg: PoolAvgAggregateOutputType | null
    _sum: PoolSumAggregateOutputType | null
    _min: PoolMinAggregateOutputType | null
    _max: PoolMaxAggregateOutputType | null
  }

  export type PoolAvgAggregateOutputType = {
    id: number | null
    token1Amount: number | null
    token2Amount: number | null
    token1SavedFee: number | null
    token2SavedFee: number | null
  }

  export type PoolSumAggregateOutputType = {
    id: number | null
    token1Amount: number | null
    token2Amount: number | null
    token1SavedFee: number | null
    token2SavedFee: number | null
  }

  export type PoolMinAggregateOutputType = {
    id: number | null
    updatedAt: Date | null
    token1Amount: number | null
    token2Amount: number | null
    token1SavedFee: number | null
    token2SavedFee: number | null
  }

  export type PoolMaxAggregateOutputType = {
    id: number | null
    updatedAt: Date | null
    token1Amount: number | null
    token2Amount: number | null
    token1SavedFee: number | null
    token2SavedFee: number | null
  }

  export type PoolCountAggregateOutputType = {
    id: number
    updatedAt: number
    token1Amount: number
    token2Amount: number
    token1SavedFee: number
    token2SavedFee: number
    _all: number
  }


  export type PoolAvgAggregateInputType = {
    id?: true
    token1Amount?: true
    token2Amount?: true
    token1SavedFee?: true
    token2SavedFee?: true
  }

  export type PoolSumAggregateInputType = {
    id?: true
    token1Amount?: true
    token2Amount?: true
    token1SavedFee?: true
    token2SavedFee?: true
  }

  export type PoolMinAggregateInputType = {
    id?: true
    updatedAt?: true
    token1Amount?: true
    token2Amount?: true
    token1SavedFee?: true
    token2SavedFee?: true
  }

  export type PoolMaxAggregateInputType = {
    id?: true
    updatedAt?: true
    token1Amount?: true
    token2Amount?: true
    token1SavedFee?: true
    token2SavedFee?: true
  }

  export type PoolCountAggregateInputType = {
    id?: true
    updatedAt?: true
    token1Amount?: true
    token2Amount?: true
    token1SavedFee?: true
    token2SavedFee?: true
    _all?: true
  }

  export type PoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pool to aggregate.
     */
    where?: PoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pools to fetch.
     */
    orderBy?: PoolOrderByWithRelationInput | PoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pools
    **/
    _count?: true | PoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PoolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PoolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PoolMaxAggregateInputType
  }

  export type GetPoolAggregateType<T extends PoolAggregateArgs> = {
        [P in keyof T & keyof AggregatePool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePool[P]>
      : GetScalarType<T[P], AggregatePool[P]>
  }




  export type PoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PoolWhereInput
    orderBy?: PoolOrderByWithAggregationInput | PoolOrderByWithAggregationInput[]
    by: PoolScalarFieldEnum[] | PoolScalarFieldEnum
    having?: PoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PoolCountAggregateInputType | true
    _avg?: PoolAvgAggregateInputType
    _sum?: PoolSumAggregateInputType
    _min?: PoolMinAggregateInputType
    _max?: PoolMaxAggregateInputType
  }

  export type PoolGroupByOutputType = {
    id: number
    updatedAt: Date
    token1Amount: number
    token2Amount: number
    token1SavedFee: number
    token2SavedFee: number
    _count: PoolCountAggregateOutputType | null
    _avg: PoolAvgAggregateOutputType | null
    _sum: PoolSumAggregateOutputType | null
    _min: PoolMinAggregateOutputType | null
    _max: PoolMaxAggregateOutputType | null
  }

  type GetPoolGroupByPayload<T extends PoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PoolGroupByOutputType[P]>
            : GetScalarType<T[P], PoolGroupByOutputType[P]>
        }
      >
    >


  export type PoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    updatedAt?: boolean
    token1Amount?: boolean
    token2Amount?: boolean
    token1SavedFee?: boolean
    token2SavedFee?: boolean
  }, ExtArgs["result"]["pool"]>

  export type PoolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    updatedAt?: boolean
    token1Amount?: boolean
    token2Amount?: boolean
    token1SavedFee?: boolean
    token2SavedFee?: boolean
  }, ExtArgs["result"]["pool"]>

  export type PoolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    updatedAt?: boolean
    token1Amount?: boolean
    token2Amount?: boolean
    token1SavedFee?: boolean
    token2SavedFee?: boolean
  }, ExtArgs["result"]["pool"]>

  export type PoolSelectScalar = {
    id?: boolean
    updatedAt?: boolean
    token1Amount?: boolean
    token2Amount?: boolean
    token1SavedFee?: boolean
    token2SavedFee?: boolean
  }

  export type PoolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "updatedAt" | "token1Amount" | "token2Amount" | "token1SavedFee" | "token2SavedFee", ExtArgs["result"]["pool"]>

  export type $PoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pool"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      updatedAt: Date
      token1Amount: number
      token2Amount: number
      token1SavedFee: number
      token2SavedFee: number
    }, ExtArgs["result"]["pool"]>
    composites: {}
  }

  type PoolGetPayload<S extends boolean | null | undefined | PoolDefaultArgs> = $Result.GetResult<Prisma.$PoolPayload, S>

  type PoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PoolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PoolCountAggregateInputType | true
    }

  export interface PoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pool'], meta: { name: 'Pool' } }
    /**
     * Find zero or one Pool that matches the filter.
     * @param {PoolFindUniqueArgs} args - Arguments to find a Pool
     * @example
     * // Get one Pool
     * const pool = await prisma.pool.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PoolFindUniqueArgs>(args: SelectSubset<T, PoolFindUniqueArgs<ExtArgs>>): Prisma__PoolClient<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pool that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PoolFindUniqueOrThrowArgs} args - Arguments to find a Pool
     * @example
     * // Get one Pool
     * const pool = await prisma.pool.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PoolFindUniqueOrThrowArgs>(args: SelectSubset<T, PoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PoolClient<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pool that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolFindFirstArgs} args - Arguments to find a Pool
     * @example
     * // Get one Pool
     * const pool = await prisma.pool.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PoolFindFirstArgs>(args?: SelectSubset<T, PoolFindFirstArgs<ExtArgs>>): Prisma__PoolClient<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pool that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolFindFirstOrThrowArgs} args - Arguments to find a Pool
     * @example
     * // Get one Pool
     * const pool = await prisma.pool.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PoolFindFirstOrThrowArgs>(args?: SelectSubset<T, PoolFindFirstOrThrowArgs<ExtArgs>>): Prisma__PoolClient<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pools
     * const pools = await prisma.pool.findMany()
     * 
     * // Get first 10 Pools
     * const pools = await prisma.pool.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const poolWithIdOnly = await prisma.pool.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PoolFindManyArgs>(args?: SelectSubset<T, PoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pool.
     * @param {PoolCreateArgs} args - Arguments to create a Pool.
     * @example
     * // Create one Pool
     * const Pool = await prisma.pool.create({
     *   data: {
     *     // ... data to create a Pool
     *   }
     * })
     * 
     */
    create<T extends PoolCreateArgs>(args: SelectSubset<T, PoolCreateArgs<ExtArgs>>): Prisma__PoolClient<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pools.
     * @param {PoolCreateManyArgs} args - Arguments to create many Pools.
     * @example
     * // Create many Pools
     * const pool = await prisma.pool.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PoolCreateManyArgs>(args?: SelectSubset<T, PoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pools and returns the data saved in the database.
     * @param {PoolCreateManyAndReturnArgs} args - Arguments to create many Pools.
     * @example
     * // Create many Pools
     * const pool = await prisma.pool.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pools and only return the `id`
     * const poolWithIdOnly = await prisma.pool.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PoolCreateManyAndReturnArgs>(args?: SelectSubset<T, PoolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pool.
     * @param {PoolDeleteArgs} args - Arguments to delete one Pool.
     * @example
     * // Delete one Pool
     * const Pool = await prisma.pool.delete({
     *   where: {
     *     // ... filter to delete one Pool
     *   }
     * })
     * 
     */
    delete<T extends PoolDeleteArgs>(args: SelectSubset<T, PoolDeleteArgs<ExtArgs>>): Prisma__PoolClient<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pool.
     * @param {PoolUpdateArgs} args - Arguments to update one Pool.
     * @example
     * // Update one Pool
     * const pool = await prisma.pool.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PoolUpdateArgs>(args: SelectSubset<T, PoolUpdateArgs<ExtArgs>>): Prisma__PoolClient<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pools.
     * @param {PoolDeleteManyArgs} args - Arguments to filter Pools to delete.
     * @example
     * // Delete a few Pools
     * const { count } = await prisma.pool.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PoolDeleteManyArgs>(args?: SelectSubset<T, PoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pools
     * const pool = await prisma.pool.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PoolUpdateManyArgs>(args: SelectSubset<T, PoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pools and returns the data updated in the database.
     * @param {PoolUpdateManyAndReturnArgs} args - Arguments to update many Pools.
     * @example
     * // Update many Pools
     * const pool = await prisma.pool.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pools and only return the `id`
     * const poolWithIdOnly = await prisma.pool.updateManyAndReturn({
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
    updateManyAndReturn<T extends PoolUpdateManyAndReturnArgs>(args: SelectSubset<T, PoolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pool.
     * @param {PoolUpsertArgs} args - Arguments to update or create a Pool.
     * @example
     * // Update or create a Pool
     * const pool = await prisma.pool.upsert({
     *   create: {
     *     // ... data to create a Pool
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pool we want to update
     *   }
     * })
     */
    upsert<T extends PoolUpsertArgs>(args: SelectSubset<T, PoolUpsertArgs<ExtArgs>>): Prisma__PoolClient<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolCountArgs} args - Arguments to filter Pools to count.
     * @example
     * // Count the number of Pools
     * const count = await prisma.pool.count({
     *   where: {
     *     // ... the filter for the Pools we want to count
     *   }
     * })
    **/
    count<T extends PoolCountArgs>(
      args?: Subset<T, PoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PoolAggregateArgs>(args: Subset<T, PoolAggregateArgs>): Prisma.PrismaPromise<GetPoolAggregateType<T>>

    /**
     * Group by Pool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolGroupByArgs} args - Group by arguments.
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
      T extends PoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PoolGroupByArgs['orderBy'] }
        : { orderBy?: PoolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pool model
   */
  readonly fields: PoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pool.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PoolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Pool model
   */
  interface PoolFieldRefs {
    readonly id: FieldRef<"Pool", 'Int'>
    readonly updatedAt: FieldRef<"Pool", 'DateTime'>
    readonly token1Amount: FieldRef<"Pool", 'Float'>
    readonly token2Amount: FieldRef<"Pool", 'Float'>
    readonly token1SavedFee: FieldRef<"Pool", 'Float'>
    readonly token2SavedFee: FieldRef<"Pool", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Pool findUnique
   */
  export type PoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * Filter, which Pool to fetch.
     */
    where: PoolWhereUniqueInput
  }

  /**
   * Pool findUniqueOrThrow
   */
  export type PoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * Filter, which Pool to fetch.
     */
    where: PoolWhereUniqueInput
  }

  /**
   * Pool findFirst
   */
  export type PoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * Filter, which Pool to fetch.
     */
    where?: PoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pools to fetch.
     */
    orderBy?: PoolOrderByWithRelationInput | PoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pools.
     */
    cursor?: PoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pools.
     */
    distinct?: PoolScalarFieldEnum | PoolScalarFieldEnum[]
  }

  /**
   * Pool findFirstOrThrow
   */
  export type PoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * Filter, which Pool to fetch.
     */
    where?: PoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pools to fetch.
     */
    orderBy?: PoolOrderByWithRelationInput | PoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pools.
     */
    cursor?: PoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pools.
     */
    distinct?: PoolScalarFieldEnum | PoolScalarFieldEnum[]
  }

  /**
   * Pool findMany
   */
  export type PoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * Filter, which Pools to fetch.
     */
    where?: PoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pools to fetch.
     */
    orderBy?: PoolOrderByWithRelationInput | PoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pools.
     */
    cursor?: PoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pools.
     */
    skip?: number
    distinct?: PoolScalarFieldEnum | PoolScalarFieldEnum[]
  }

  /**
   * Pool create
   */
  export type PoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * The data needed to create a Pool.
     */
    data: XOR<PoolCreateInput, PoolUncheckedCreateInput>
  }

  /**
   * Pool createMany
   */
  export type PoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pools.
     */
    data: PoolCreateManyInput | PoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pool createManyAndReturn
   */
  export type PoolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * The data used to create many Pools.
     */
    data: PoolCreateManyInput | PoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pool update
   */
  export type PoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * The data needed to update a Pool.
     */
    data: XOR<PoolUpdateInput, PoolUncheckedUpdateInput>
    /**
     * Choose, which Pool to update.
     */
    where: PoolWhereUniqueInput
  }

  /**
   * Pool updateMany
   */
  export type PoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pools.
     */
    data: XOR<PoolUpdateManyMutationInput, PoolUncheckedUpdateManyInput>
    /**
     * Filter which Pools to update
     */
    where?: PoolWhereInput
    /**
     * Limit how many Pools to update.
     */
    limit?: number
  }

  /**
   * Pool updateManyAndReturn
   */
  export type PoolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * The data used to update Pools.
     */
    data: XOR<PoolUpdateManyMutationInput, PoolUncheckedUpdateManyInput>
    /**
     * Filter which Pools to update
     */
    where?: PoolWhereInput
    /**
     * Limit how many Pools to update.
     */
    limit?: number
  }

  /**
   * Pool upsert
   */
  export type PoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * The filter to search for the Pool to update in case it exists.
     */
    where: PoolWhereUniqueInput
    /**
     * In case the Pool found by the `where` argument doesn't exist, create a new Pool with this data.
     */
    create: XOR<PoolCreateInput, PoolUncheckedCreateInput>
    /**
     * In case the Pool was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PoolUpdateInput, PoolUncheckedUpdateInput>
  }

  /**
   * Pool delete
   */
  export type PoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * Filter which Pool to delete.
     */
    where: PoolWhereUniqueInput
  }

  /**
   * Pool deleteMany
   */
  export type PoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pools to delete
     */
    where?: PoolWhereInput
    /**
     * Limit how many Pools to delete.
     */
    limit?: number
  }

  /**
   * Pool without action
   */
  export type PoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
  }


  /**
   * Model PoolTreasury
   */

  export type AggregatePoolTreasury = {
    _count: PoolTreasuryCountAggregateOutputType | null
    _avg: PoolTreasuryAvgAggregateOutputType | null
    _sum: PoolTreasurySumAggregateOutputType | null
    _min: PoolTreasuryMinAggregateOutputType | null
    _max: PoolTreasuryMaxAggregateOutputType | null
  }

  export type PoolTreasuryAvgAggregateOutputType = {
    id: number | null
    token1Amount: number | null
    token2Amount: number | null
  }

  export type PoolTreasurySumAggregateOutputType = {
    id: number | null
    token1Amount: number | null
    token2Amount: number | null
  }

  export type PoolTreasuryMinAggregateOutputType = {
    id: number | null
    token1Amount: number | null
    token2Amount: number | null
    createdAt: Date | null
  }

  export type PoolTreasuryMaxAggregateOutputType = {
    id: number | null
    token1Amount: number | null
    token2Amount: number | null
    createdAt: Date | null
  }

  export type PoolTreasuryCountAggregateOutputType = {
    id: number
    token1Amount: number
    token2Amount: number
    createdAt: number
    _all: number
  }


  export type PoolTreasuryAvgAggregateInputType = {
    id?: true
    token1Amount?: true
    token2Amount?: true
  }

  export type PoolTreasurySumAggregateInputType = {
    id?: true
    token1Amount?: true
    token2Amount?: true
  }

  export type PoolTreasuryMinAggregateInputType = {
    id?: true
    token1Amount?: true
    token2Amount?: true
    createdAt?: true
  }

  export type PoolTreasuryMaxAggregateInputType = {
    id?: true
    token1Amount?: true
    token2Amount?: true
    createdAt?: true
  }

  export type PoolTreasuryCountAggregateInputType = {
    id?: true
    token1Amount?: true
    token2Amount?: true
    createdAt?: true
    _all?: true
  }

  export type PoolTreasuryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PoolTreasury to aggregate.
     */
    where?: PoolTreasuryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PoolTreasuries to fetch.
     */
    orderBy?: PoolTreasuryOrderByWithRelationInput | PoolTreasuryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PoolTreasuryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PoolTreasuries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PoolTreasuries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PoolTreasuries
    **/
    _count?: true | PoolTreasuryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PoolTreasuryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PoolTreasurySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PoolTreasuryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PoolTreasuryMaxAggregateInputType
  }

  export type GetPoolTreasuryAggregateType<T extends PoolTreasuryAggregateArgs> = {
        [P in keyof T & keyof AggregatePoolTreasury]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoolTreasury[P]>
      : GetScalarType<T[P], AggregatePoolTreasury[P]>
  }




  export type PoolTreasuryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PoolTreasuryWhereInput
    orderBy?: PoolTreasuryOrderByWithAggregationInput | PoolTreasuryOrderByWithAggregationInput[]
    by: PoolTreasuryScalarFieldEnum[] | PoolTreasuryScalarFieldEnum
    having?: PoolTreasuryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PoolTreasuryCountAggregateInputType | true
    _avg?: PoolTreasuryAvgAggregateInputType
    _sum?: PoolTreasurySumAggregateInputType
    _min?: PoolTreasuryMinAggregateInputType
    _max?: PoolTreasuryMaxAggregateInputType
  }

  export type PoolTreasuryGroupByOutputType = {
    id: number
    token1Amount: number
    token2Amount: number
    createdAt: Date
    _count: PoolTreasuryCountAggregateOutputType | null
    _avg: PoolTreasuryAvgAggregateOutputType | null
    _sum: PoolTreasurySumAggregateOutputType | null
    _min: PoolTreasuryMinAggregateOutputType | null
    _max: PoolTreasuryMaxAggregateOutputType | null
  }

  type GetPoolTreasuryGroupByPayload<T extends PoolTreasuryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PoolTreasuryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PoolTreasuryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PoolTreasuryGroupByOutputType[P]>
            : GetScalarType<T[P], PoolTreasuryGroupByOutputType[P]>
        }
      >
    >


  export type PoolTreasurySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token1Amount?: boolean
    token2Amount?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["poolTreasury"]>

  export type PoolTreasurySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token1Amount?: boolean
    token2Amount?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["poolTreasury"]>

  export type PoolTreasurySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token1Amount?: boolean
    token2Amount?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["poolTreasury"]>

  export type PoolTreasurySelectScalar = {
    id?: boolean
    token1Amount?: boolean
    token2Amount?: boolean
    createdAt?: boolean
  }

  export type PoolTreasuryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token1Amount" | "token2Amount" | "createdAt", ExtArgs["result"]["poolTreasury"]>

  export type $PoolTreasuryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PoolTreasury"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      token1Amount: number
      token2Amount: number
      createdAt: Date
    }, ExtArgs["result"]["poolTreasury"]>
    composites: {}
  }

  type PoolTreasuryGetPayload<S extends boolean | null | undefined | PoolTreasuryDefaultArgs> = $Result.GetResult<Prisma.$PoolTreasuryPayload, S>

  type PoolTreasuryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PoolTreasuryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PoolTreasuryCountAggregateInputType | true
    }

  export interface PoolTreasuryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PoolTreasury'], meta: { name: 'PoolTreasury' } }
    /**
     * Find zero or one PoolTreasury that matches the filter.
     * @param {PoolTreasuryFindUniqueArgs} args - Arguments to find a PoolTreasury
     * @example
     * // Get one PoolTreasury
     * const poolTreasury = await prisma.poolTreasury.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PoolTreasuryFindUniqueArgs>(args: SelectSubset<T, PoolTreasuryFindUniqueArgs<ExtArgs>>): Prisma__PoolTreasuryClient<$Result.GetResult<Prisma.$PoolTreasuryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PoolTreasury that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PoolTreasuryFindUniqueOrThrowArgs} args - Arguments to find a PoolTreasury
     * @example
     * // Get one PoolTreasury
     * const poolTreasury = await prisma.poolTreasury.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PoolTreasuryFindUniqueOrThrowArgs>(args: SelectSubset<T, PoolTreasuryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PoolTreasuryClient<$Result.GetResult<Prisma.$PoolTreasuryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PoolTreasury that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolTreasuryFindFirstArgs} args - Arguments to find a PoolTreasury
     * @example
     * // Get one PoolTreasury
     * const poolTreasury = await prisma.poolTreasury.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PoolTreasuryFindFirstArgs>(args?: SelectSubset<T, PoolTreasuryFindFirstArgs<ExtArgs>>): Prisma__PoolTreasuryClient<$Result.GetResult<Prisma.$PoolTreasuryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PoolTreasury that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolTreasuryFindFirstOrThrowArgs} args - Arguments to find a PoolTreasury
     * @example
     * // Get one PoolTreasury
     * const poolTreasury = await prisma.poolTreasury.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PoolTreasuryFindFirstOrThrowArgs>(args?: SelectSubset<T, PoolTreasuryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PoolTreasuryClient<$Result.GetResult<Prisma.$PoolTreasuryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PoolTreasuries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolTreasuryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PoolTreasuries
     * const poolTreasuries = await prisma.poolTreasury.findMany()
     * 
     * // Get first 10 PoolTreasuries
     * const poolTreasuries = await prisma.poolTreasury.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const poolTreasuryWithIdOnly = await prisma.poolTreasury.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PoolTreasuryFindManyArgs>(args?: SelectSubset<T, PoolTreasuryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoolTreasuryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PoolTreasury.
     * @param {PoolTreasuryCreateArgs} args - Arguments to create a PoolTreasury.
     * @example
     * // Create one PoolTreasury
     * const PoolTreasury = await prisma.poolTreasury.create({
     *   data: {
     *     // ... data to create a PoolTreasury
     *   }
     * })
     * 
     */
    create<T extends PoolTreasuryCreateArgs>(args: SelectSubset<T, PoolTreasuryCreateArgs<ExtArgs>>): Prisma__PoolTreasuryClient<$Result.GetResult<Prisma.$PoolTreasuryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PoolTreasuries.
     * @param {PoolTreasuryCreateManyArgs} args - Arguments to create many PoolTreasuries.
     * @example
     * // Create many PoolTreasuries
     * const poolTreasury = await prisma.poolTreasury.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PoolTreasuryCreateManyArgs>(args?: SelectSubset<T, PoolTreasuryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PoolTreasuries and returns the data saved in the database.
     * @param {PoolTreasuryCreateManyAndReturnArgs} args - Arguments to create many PoolTreasuries.
     * @example
     * // Create many PoolTreasuries
     * const poolTreasury = await prisma.poolTreasury.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PoolTreasuries and only return the `id`
     * const poolTreasuryWithIdOnly = await prisma.poolTreasury.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PoolTreasuryCreateManyAndReturnArgs>(args?: SelectSubset<T, PoolTreasuryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoolTreasuryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PoolTreasury.
     * @param {PoolTreasuryDeleteArgs} args - Arguments to delete one PoolTreasury.
     * @example
     * // Delete one PoolTreasury
     * const PoolTreasury = await prisma.poolTreasury.delete({
     *   where: {
     *     // ... filter to delete one PoolTreasury
     *   }
     * })
     * 
     */
    delete<T extends PoolTreasuryDeleteArgs>(args: SelectSubset<T, PoolTreasuryDeleteArgs<ExtArgs>>): Prisma__PoolTreasuryClient<$Result.GetResult<Prisma.$PoolTreasuryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PoolTreasury.
     * @param {PoolTreasuryUpdateArgs} args - Arguments to update one PoolTreasury.
     * @example
     * // Update one PoolTreasury
     * const poolTreasury = await prisma.poolTreasury.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PoolTreasuryUpdateArgs>(args: SelectSubset<T, PoolTreasuryUpdateArgs<ExtArgs>>): Prisma__PoolTreasuryClient<$Result.GetResult<Prisma.$PoolTreasuryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PoolTreasuries.
     * @param {PoolTreasuryDeleteManyArgs} args - Arguments to filter PoolTreasuries to delete.
     * @example
     * // Delete a few PoolTreasuries
     * const { count } = await prisma.poolTreasury.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PoolTreasuryDeleteManyArgs>(args?: SelectSubset<T, PoolTreasuryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PoolTreasuries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolTreasuryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PoolTreasuries
     * const poolTreasury = await prisma.poolTreasury.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PoolTreasuryUpdateManyArgs>(args: SelectSubset<T, PoolTreasuryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PoolTreasuries and returns the data updated in the database.
     * @param {PoolTreasuryUpdateManyAndReturnArgs} args - Arguments to update many PoolTreasuries.
     * @example
     * // Update many PoolTreasuries
     * const poolTreasury = await prisma.poolTreasury.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PoolTreasuries and only return the `id`
     * const poolTreasuryWithIdOnly = await prisma.poolTreasury.updateManyAndReturn({
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
    updateManyAndReturn<T extends PoolTreasuryUpdateManyAndReturnArgs>(args: SelectSubset<T, PoolTreasuryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoolTreasuryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PoolTreasury.
     * @param {PoolTreasuryUpsertArgs} args - Arguments to update or create a PoolTreasury.
     * @example
     * // Update or create a PoolTreasury
     * const poolTreasury = await prisma.poolTreasury.upsert({
     *   create: {
     *     // ... data to create a PoolTreasury
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PoolTreasury we want to update
     *   }
     * })
     */
    upsert<T extends PoolTreasuryUpsertArgs>(args: SelectSubset<T, PoolTreasuryUpsertArgs<ExtArgs>>): Prisma__PoolTreasuryClient<$Result.GetResult<Prisma.$PoolTreasuryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PoolTreasuries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolTreasuryCountArgs} args - Arguments to filter PoolTreasuries to count.
     * @example
     * // Count the number of PoolTreasuries
     * const count = await prisma.poolTreasury.count({
     *   where: {
     *     // ... the filter for the PoolTreasuries we want to count
     *   }
     * })
    **/
    count<T extends PoolTreasuryCountArgs>(
      args?: Subset<T, PoolTreasuryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PoolTreasuryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PoolTreasury.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolTreasuryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PoolTreasuryAggregateArgs>(args: Subset<T, PoolTreasuryAggregateArgs>): Prisma.PrismaPromise<GetPoolTreasuryAggregateType<T>>

    /**
     * Group by PoolTreasury.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolTreasuryGroupByArgs} args - Group by arguments.
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
      T extends PoolTreasuryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PoolTreasuryGroupByArgs['orderBy'] }
        : { orderBy?: PoolTreasuryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PoolTreasuryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPoolTreasuryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PoolTreasury model
   */
  readonly fields: PoolTreasuryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PoolTreasury.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PoolTreasuryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PoolTreasury model
   */
  interface PoolTreasuryFieldRefs {
    readonly id: FieldRef<"PoolTreasury", 'Int'>
    readonly token1Amount: FieldRef<"PoolTreasury", 'Float'>
    readonly token2Amount: FieldRef<"PoolTreasury", 'Float'>
    readonly createdAt: FieldRef<"PoolTreasury", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PoolTreasury findUnique
   */
  export type PoolTreasuryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolTreasury
     */
    select?: PoolTreasurySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolTreasury
     */
    omit?: PoolTreasuryOmit<ExtArgs> | null
    /**
     * Filter, which PoolTreasury to fetch.
     */
    where: PoolTreasuryWhereUniqueInput
  }

  /**
   * PoolTreasury findUniqueOrThrow
   */
  export type PoolTreasuryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolTreasury
     */
    select?: PoolTreasurySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolTreasury
     */
    omit?: PoolTreasuryOmit<ExtArgs> | null
    /**
     * Filter, which PoolTreasury to fetch.
     */
    where: PoolTreasuryWhereUniqueInput
  }

  /**
   * PoolTreasury findFirst
   */
  export type PoolTreasuryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolTreasury
     */
    select?: PoolTreasurySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolTreasury
     */
    omit?: PoolTreasuryOmit<ExtArgs> | null
    /**
     * Filter, which PoolTreasury to fetch.
     */
    where?: PoolTreasuryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PoolTreasuries to fetch.
     */
    orderBy?: PoolTreasuryOrderByWithRelationInput | PoolTreasuryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PoolTreasuries.
     */
    cursor?: PoolTreasuryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PoolTreasuries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PoolTreasuries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PoolTreasuries.
     */
    distinct?: PoolTreasuryScalarFieldEnum | PoolTreasuryScalarFieldEnum[]
  }

  /**
   * PoolTreasury findFirstOrThrow
   */
  export type PoolTreasuryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolTreasury
     */
    select?: PoolTreasurySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolTreasury
     */
    omit?: PoolTreasuryOmit<ExtArgs> | null
    /**
     * Filter, which PoolTreasury to fetch.
     */
    where?: PoolTreasuryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PoolTreasuries to fetch.
     */
    orderBy?: PoolTreasuryOrderByWithRelationInput | PoolTreasuryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PoolTreasuries.
     */
    cursor?: PoolTreasuryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PoolTreasuries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PoolTreasuries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PoolTreasuries.
     */
    distinct?: PoolTreasuryScalarFieldEnum | PoolTreasuryScalarFieldEnum[]
  }

  /**
   * PoolTreasury findMany
   */
  export type PoolTreasuryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolTreasury
     */
    select?: PoolTreasurySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolTreasury
     */
    omit?: PoolTreasuryOmit<ExtArgs> | null
    /**
     * Filter, which PoolTreasuries to fetch.
     */
    where?: PoolTreasuryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PoolTreasuries to fetch.
     */
    orderBy?: PoolTreasuryOrderByWithRelationInput | PoolTreasuryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PoolTreasuries.
     */
    cursor?: PoolTreasuryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PoolTreasuries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PoolTreasuries.
     */
    skip?: number
    distinct?: PoolTreasuryScalarFieldEnum | PoolTreasuryScalarFieldEnum[]
  }

  /**
   * PoolTreasury create
   */
  export type PoolTreasuryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolTreasury
     */
    select?: PoolTreasurySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolTreasury
     */
    omit?: PoolTreasuryOmit<ExtArgs> | null
    /**
     * The data needed to create a PoolTreasury.
     */
    data: XOR<PoolTreasuryCreateInput, PoolTreasuryUncheckedCreateInput>
  }

  /**
   * PoolTreasury createMany
   */
  export type PoolTreasuryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PoolTreasuries.
     */
    data: PoolTreasuryCreateManyInput | PoolTreasuryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PoolTreasury createManyAndReturn
   */
  export type PoolTreasuryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolTreasury
     */
    select?: PoolTreasurySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PoolTreasury
     */
    omit?: PoolTreasuryOmit<ExtArgs> | null
    /**
     * The data used to create many PoolTreasuries.
     */
    data: PoolTreasuryCreateManyInput | PoolTreasuryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PoolTreasury update
   */
  export type PoolTreasuryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolTreasury
     */
    select?: PoolTreasurySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolTreasury
     */
    omit?: PoolTreasuryOmit<ExtArgs> | null
    /**
     * The data needed to update a PoolTreasury.
     */
    data: XOR<PoolTreasuryUpdateInput, PoolTreasuryUncheckedUpdateInput>
    /**
     * Choose, which PoolTreasury to update.
     */
    where: PoolTreasuryWhereUniqueInput
  }

  /**
   * PoolTreasury updateMany
   */
  export type PoolTreasuryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PoolTreasuries.
     */
    data: XOR<PoolTreasuryUpdateManyMutationInput, PoolTreasuryUncheckedUpdateManyInput>
    /**
     * Filter which PoolTreasuries to update
     */
    where?: PoolTreasuryWhereInput
    /**
     * Limit how many PoolTreasuries to update.
     */
    limit?: number
  }

  /**
   * PoolTreasury updateManyAndReturn
   */
  export type PoolTreasuryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolTreasury
     */
    select?: PoolTreasurySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PoolTreasury
     */
    omit?: PoolTreasuryOmit<ExtArgs> | null
    /**
     * The data used to update PoolTreasuries.
     */
    data: XOR<PoolTreasuryUpdateManyMutationInput, PoolTreasuryUncheckedUpdateManyInput>
    /**
     * Filter which PoolTreasuries to update
     */
    where?: PoolTreasuryWhereInput
    /**
     * Limit how many PoolTreasuries to update.
     */
    limit?: number
  }

  /**
   * PoolTreasury upsert
   */
  export type PoolTreasuryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolTreasury
     */
    select?: PoolTreasurySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolTreasury
     */
    omit?: PoolTreasuryOmit<ExtArgs> | null
    /**
     * The filter to search for the PoolTreasury to update in case it exists.
     */
    where: PoolTreasuryWhereUniqueInput
    /**
     * In case the PoolTreasury found by the `where` argument doesn't exist, create a new PoolTreasury with this data.
     */
    create: XOR<PoolTreasuryCreateInput, PoolTreasuryUncheckedCreateInput>
    /**
     * In case the PoolTreasury was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PoolTreasuryUpdateInput, PoolTreasuryUncheckedUpdateInput>
  }

  /**
   * PoolTreasury delete
   */
  export type PoolTreasuryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolTreasury
     */
    select?: PoolTreasurySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolTreasury
     */
    omit?: PoolTreasuryOmit<ExtArgs> | null
    /**
     * Filter which PoolTreasury to delete.
     */
    where: PoolTreasuryWhereUniqueInput
  }

  /**
   * PoolTreasury deleteMany
   */
  export type PoolTreasuryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PoolTreasuries to delete
     */
    where?: PoolTreasuryWhereInput
    /**
     * Limit how many PoolTreasuries to delete.
     */
    limit?: number
  }

  /**
   * PoolTreasury without action
   */
  export type PoolTreasuryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolTreasury
     */
    select?: PoolTreasurySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolTreasury
     */
    omit?: PoolTreasuryOmit<ExtArgs> | null
  }


  /**
   * Model GameResultLog
   */

  export type AggregateGameResultLog = {
    _count: GameResultLogCountAggregateOutputType | null
    _avg: GameResultLogAvgAggregateOutputType | null
    _sum: GameResultLogSumAggregateOutputType | null
    _min: GameResultLogMinAggregateOutputType | null
    _max: GameResultLogMaxAggregateOutputType | null
  }

  export type GameResultLogAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    totalMonstersKilled: number | null
    lastWave: number | null
  }

  export type GameResultLogSumAggregateOutputType = {
    id: number | null
    userId: number | null
    totalMonstersKilled: number | null
    lastWave: number | null
  }

  export type GameResultLogMinAggregateOutputType = {
    id: number | null
    userId: number | null
    totalMonstersKilled: number | null
    createdAt: Date | null
    difficulty: $Enums.Difficulty | null
    lastWave: number | null
  }

  export type GameResultLogMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    totalMonstersKilled: number | null
    createdAt: Date | null
    difficulty: $Enums.Difficulty | null
    lastWave: number | null
  }

  export type GameResultLogCountAggregateOutputType = {
    id: number
    userId: number
    totalMonstersKilled: number
    createdAt: number
    difficulty: number
    lastWave: number
    _all: number
  }


  export type GameResultLogAvgAggregateInputType = {
    id?: true
    userId?: true
    totalMonstersKilled?: true
    lastWave?: true
  }

  export type GameResultLogSumAggregateInputType = {
    id?: true
    userId?: true
    totalMonstersKilled?: true
    lastWave?: true
  }

  export type GameResultLogMinAggregateInputType = {
    id?: true
    userId?: true
    totalMonstersKilled?: true
    createdAt?: true
    difficulty?: true
    lastWave?: true
  }

  export type GameResultLogMaxAggregateInputType = {
    id?: true
    userId?: true
    totalMonstersKilled?: true
    createdAt?: true
    difficulty?: true
    lastWave?: true
  }

  export type GameResultLogCountAggregateInputType = {
    id?: true
    userId?: true
    totalMonstersKilled?: true
    createdAt?: true
    difficulty?: true
    lastWave?: true
    _all?: true
  }

  export type GameResultLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameResultLog to aggregate.
     */
    where?: GameResultLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameResultLogs to fetch.
     */
    orderBy?: GameResultLogOrderByWithRelationInput | GameResultLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameResultLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameResultLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameResultLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameResultLogs
    **/
    _count?: true | GameResultLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameResultLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameResultLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameResultLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameResultLogMaxAggregateInputType
  }

  export type GetGameResultLogAggregateType<T extends GameResultLogAggregateArgs> = {
        [P in keyof T & keyof AggregateGameResultLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameResultLog[P]>
      : GetScalarType<T[P], AggregateGameResultLog[P]>
  }




  export type GameResultLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameResultLogWhereInput
    orderBy?: GameResultLogOrderByWithAggregationInput | GameResultLogOrderByWithAggregationInput[]
    by: GameResultLogScalarFieldEnum[] | GameResultLogScalarFieldEnum
    having?: GameResultLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameResultLogCountAggregateInputType | true
    _avg?: GameResultLogAvgAggregateInputType
    _sum?: GameResultLogSumAggregateInputType
    _min?: GameResultLogMinAggregateInputType
    _max?: GameResultLogMaxAggregateInputType
  }

  export type GameResultLogGroupByOutputType = {
    id: number
    userId: number
    totalMonstersKilled: number
    createdAt: Date
    difficulty: $Enums.Difficulty
    lastWave: number
    _count: GameResultLogCountAggregateOutputType | null
    _avg: GameResultLogAvgAggregateOutputType | null
    _sum: GameResultLogSumAggregateOutputType | null
    _min: GameResultLogMinAggregateOutputType | null
    _max: GameResultLogMaxAggregateOutputType | null
  }

  type GetGameResultLogGroupByPayload<T extends GameResultLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameResultLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameResultLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameResultLogGroupByOutputType[P]>
            : GetScalarType<T[P], GameResultLogGroupByOutputType[P]>
        }
      >
    >


  export type GameResultLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalMonstersKilled?: boolean
    createdAt?: boolean
    difficulty?: boolean
    lastWave?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameResultLog"]>

  export type GameResultLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalMonstersKilled?: boolean
    createdAt?: boolean
    difficulty?: boolean
    lastWave?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameResultLog"]>

  export type GameResultLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalMonstersKilled?: boolean
    createdAt?: boolean
    difficulty?: boolean
    lastWave?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameResultLog"]>

  export type GameResultLogSelectScalar = {
    id?: boolean
    userId?: boolean
    totalMonstersKilled?: boolean
    createdAt?: boolean
    difficulty?: boolean
    lastWave?: boolean
  }

  export type GameResultLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "totalMonstersKilled" | "createdAt" | "difficulty" | "lastWave", ExtArgs["result"]["gameResultLog"]>
  export type GameResultLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GameResultLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GameResultLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GameResultLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameResultLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      totalMonstersKilled: number
      createdAt: Date
      difficulty: $Enums.Difficulty
      lastWave: number
    }, ExtArgs["result"]["gameResultLog"]>
    composites: {}
  }

  type GameResultLogGetPayload<S extends boolean | null | undefined | GameResultLogDefaultArgs> = $Result.GetResult<Prisma.$GameResultLogPayload, S>

  type GameResultLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameResultLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameResultLogCountAggregateInputType | true
    }

  export interface GameResultLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameResultLog'], meta: { name: 'GameResultLog' } }
    /**
     * Find zero or one GameResultLog that matches the filter.
     * @param {GameResultLogFindUniqueArgs} args - Arguments to find a GameResultLog
     * @example
     * // Get one GameResultLog
     * const gameResultLog = await prisma.gameResultLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameResultLogFindUniqueArgs>(args: SelectSubset<T, GameResultLogFindUniqueArgs<ExtArgs>>): Prisma__GameResultLogClient<$Result.GetResult<Prisma.$GameResultLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GameResultLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameResultLogFindUniqueOrThrowArgs} args - Arguments to find a GameResultLog
     * @example
     * // Get one GameResultLog
     * const gameResultLog = await prisma.gameResultLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameResultLogFindUniqueOrThrowArgs>(args: SelectSubset<T, GameResultLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameResultLogClient<$Result.GetResult<Prisma.$GameResultLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameResultLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameResultLogFindFirstArgs} args - Arguments to find a GameResultLog
     * @example
     * // Get one GameResultLog
     * const gameResultLog = await prisma.gameResultLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameResultLogFindFirstArgs>(args?: SelectSubset<T, GameResultLogFindFirstArgs<ExtArgs>>): Prisma__GameResultLogClient<$Result.GetResult<Prisma.$GameResultLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameResultLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameResultLogFindFirstOrThrowArgs} args - Arguments to find a GameResultLog
     * @example
     * // Get one GameResultLog
     * const gameResultLog = await prisma.gameResultLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameResultLogFindFirstOrThrowArgs>(args?: SelectSubset<T, GameResultLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameResultLogClient<$Result.GetResult<Prisma.$GameResultLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GameResultLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameResultLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameResultLogs
     * const gameResultLogs = await prisma.gameResultLog.findMany()
     * 
     * // Get first 10 GameResultLogs
     * const gameResultLogs = await prisma.gameResultLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameResultLogWithIdOnly = await prisma.gameResultLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameResultLogFindManyArgs>(args?: SelectSubset<T, GameResultLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameResultLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GameResultLog.
     * @param {GameResultLogCreateArgs} args - Arguments to create a GameResultLog.
     * @example
     * // Create one GameResultLog
     * const GameResultLog = await prisma.gameResultLog.create({
     *   data: {
     *     // ... data to create a GameResultLog
     *   }
     * })
     * 
     */
    create<T extends GameResultLogCreateArgs>(args: SelectSubset<T, GameResultLogCreateArgs<ExtArgs>>): Prisma__GameResultLogClient<$Result.GetResult<Prisma.$GameResultLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GameResultLogs.
     * @param {GameResultLogCreateManyArgs} args - Arguments to create many GameResultLogs.
     * @example
     * // Create many GameResultLogs
     * const gameResultLog = await prisma.gameResultLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameResultLogCreateManyArgs>(args?: SelectSubset<T, GameResultLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameResultLogs and returns the data saved in the database.
     * @param {GameResultLogCreateManyAndReturnArgs} args - Arguments to create many GameResultLogs.
     * @example
     * // Create many GameResultLogs
     * const gameResultLog = await prisma.gameResultLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameResultLogs and only return the `id`
     * const gameResultLogWithIdOnly = await prisma.gameResultLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameResultLogCreateManyAndReturnArgs>(args?: SelectSubset<T, GameResultLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameResultLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GameResultLog.
     * @param {GameResultLogDeleteArgs} args - Arguments to delete one GameResultLog.
     * @example
     * // Delete one GameResultLog
     * const GameResultLog = await prisma.gameResultLog.delete({
     *   where: {
     *     // ... filter to delete one GameResultLog
     *   }
     * })
     * 
     */
    delete<T extends GameResultLogDeleteArgs>(args: SelectSubset<T, GameResultLogDeleteArgs<ExtArgs>>): Prisma__GameResultLogClient<$Result.GetResult<Prisma.$GameResultLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GameResultLog.
     * @param {GameResultLogUpdateArgs} args - Arguments to update one GameResultLog.
     * @example
     * // Update one GameResultLog
     * const gameResultLog = await prisma.gameResultLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameResultLogUpdateArgs>(args: SelectSubset<T, GameResultLogUpdateArgs<ExtArgs>>): Prisma__GameResultLogClient<$Result.GetResult<Prisma.$GameResultLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GameResultLogs.
     * @param {GameResultLogDeleteManyArgs} args - Arguments to filter GameResultLogs to delete.
     * @example
     * // Delete a few GameResultLogs
     * const { count } = await prisma.gameResultLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameResultLogDeleteManyArgs>(args?: SelectSubset<T, GameResultLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameResultLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameResultLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameResultLogs
     * const gameResultLog = await prisma.gameResultLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameResultLogUpdateManyArgs>(args: SelectSubset<T, GameResultLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameResultLogs and returns the data updated in the database.
     * @param {GameResultLogUpdateManyAndReturnArgs} args - Arguments to update many GameResultLogs.
     * @example
     * // Update many GameResultLogs
     * const gameResultLog = await prisma.gameResultLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GameResultLogs and only return the `id`
     * const gameResultLogWithIdOnly = await prisma.gameResultLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends GameResultLogUpdateManyAndReturnArgs>(args: SelectSubset<T, GameResultLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameResultLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GameResultLog.
     * @param {GameResultLogUpsertArgs} args - Arguments to update or create a GameResultLog.
     * @example
     * // Update or create a GameResultLog
     * const gameResultLog = await prisma.gameResultLog.upsert({
     *   create: {
     *     // ... data to create a GameResultLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameResultLog we want to update
     *   }
     * })
     */
    upsert<T extends GameResultLogUpsertArgs>(args: SelectSubset<T, GameResultLogUpsertArgs<ExtArgs>>): Prisma__GameResultLogClient<$Result.GetResult<Prisma.$GameResultLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GameResultLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameResultLogCountArgs} args - Arguments to filter GameResultLogs to count.
     * @example
     * // Count the number of GameResultLogs
     * const count = await prisma.gameResultLog.count({
     *   where: {
     *     // ... the filter for the GameResultLogs we want to count
     *   }
     * })
    **/
    count<T extends GameResultLogCountArgs>(
      args?: Subset<T, GameResultLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameResultLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameResultLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameResultLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GameResultLogAggregateArgs>(args: Subset<T, GameResultLogAggregateArgs>): Prisma.PrismaPromise<GetGameResultLogAggregateType<T>>

    /**
     * Group by GameResultLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameResultLogGroupByArgs} args - Group by arguments.
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
      T extends GameResultLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameResultLogGroupByArgs['orderBy'] }
        : { orderBy?: GameResultLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GameResultLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameResultLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameResultLog model
   */
  readonly fields: GameResultLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameResultLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameResultLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GameResultLog model
   */
  interface GameResultLogFieldRefs {
    readonly id: FieldRef<"GameResultLog", 'Int'>
    readonly userId: FieldRef<"GameResultLog", 'Int'>
    readonly totalMonstersKilled: FieldRef<"GameResultLog", 'Int'>
    readonly createdAt: FieldRef<"GameResultLog", 'DateTime'>
    readonly difficulty: FieldRef<"GameResultLog", 'Difficulty'>
    readonly lastWave: FieldRef<"GameResultLog", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * GameResultLog findUnique
   */
  export type GameResultLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameResultLog
     */
    select?: GameResultLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameResultLog
     */
    omit?: GameResultLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameResultLogInclude<ExtArgs> | null
    /**
     * Filter, which GameResultLog to fetch.
     */
    where: GameResultLogWhereUniqueInput
  }

  /**
   * GameResultLog findUniqueOrThrow
   */
  export type GameResultLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameResultLog
     */
    select?: GameResultLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameResultLog
     */
    omit?: GameResultLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameResultLogInclude<ExtArgs> | null
    /**
     * Filter, which GameResultLog to fetch.
     */
    where: GameResultLogWhereUniqueInput
  }

  /**
   * GameResultLog findFirst
   */
  export type GameResultLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameResultLog
     */
    select?: GameResultLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameResultLog
     */
    omit?: GameResultLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameResultLogInclude<ExtArgs> | null
    /**
     * Filter, which GameResultLog to fetch.
     */
    where?: GameResultLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameResultLogs to fetch.
     */
    orderBy?: GameResultLogOrderByWithRelationInput | GameResultLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameResultLogs.
     */
    cursor?: GameResultLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameResultLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameResultLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameResultLogs.
     */
    distinct?: GameResultLogScalarFieldEnum | GameResultLogScalarFieldEnum[]
  }

  /**
   * GameResultLog findFirstOrThrow
   */
  export type GameResultLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameResultLog
     */
    select?: GameResultLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameResultLog
     */
    omit?: GameResultLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameResultLogInclude<ExtArgs> | null
    /**
     * Filter, which GameResultLog to fetch.
     */
    where?: GameResultLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameResultLogs to fetch.
     */
    orderBy?: GameResultLogOrderByWithRelationInput | GameResultLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameResultLogs.
     */
    cursor?: GameResultLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameResultLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameResultLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameResultLogs.
     */
    distinct?: GameResultLogScalarFieldEnum | GameResultLogScalarFieldEnum[]
  }

  /**
   * GameResultLog findMany
   */
  export type GameResultLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameResultLog
     */
    select?: GameResultLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameResultLog
     */
    omit?: GameResultLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameResultLogInclude<ExtArgs> | null
    /**
     * Filter, which GameResultLogs to fetch.
     */
    where?: GameResultLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameResultLogs to fetch.
     */
    orderBy?: GameResultLogOrderByWithRelationInput | GameResultLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameResultLogs.
     */
    cursor?: GameResultLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameResultLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameResultLogs.
     */
    skip?: number
    distinct?: GameResultLogScalarFieldEnum | GameResultLogScalarFieldEnum[]
  }

  /**
   * GameResultLog create
   */
  export type GameResultLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameResultLog
     */
    select?: GameResultLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameResultLog
     */
    omit?: GameResultLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameResultLogInclude<ExtArgs> | null
    /**
     * The data needed to create a GameResultLog.
     */
    data: XOR<GameResultLogCreateInput, GameResultLogUncheckedCreateInput>
  }

  /**
   * GameResultLog createMany
   */
  export type GameResultLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameResultLogs.
     */
    data: GameResultLogCreateManyInput | GameResultLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameResultLog createManyAndReturn
   */
  export type GameResultLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameResultLog
     */
    select?: GameResultLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameResultLog
     */
    omit?: GameResultLogOmit<ExtArgs> | null
    /**
     * The data used to create many GameResultLogs.
     */
    data: GameResultLogCreateManyInput | GameResultLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameResultLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameResultLog update
   */
  export type GameResultLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameResultLog
     */
    select?: GameResultLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameResultLog
     */
    omit?: GameResultLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameResultLogInclude<ExtArgs> | null
    /**
     * The data needed to update a GameResultLog.
     */
    data: XOR<GameResultLogUpdateInput, GameResultLogUncheckedUpdateInput>
    /**
     * Choose, which GameResultLog to update.
     */
    where: GameResultLogWhereUniqueInput
  }

  /**
   * GameResultLog updateMany
   */
  export type GameResultLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameResultLogs.
     */
    data: XOR<GameResultLogUpdateManyMutationInput, GameResultLogUncheckedUpdateManyInput>
    /**
     * Filter which GameResultLogs to update
     */
    where?: GameResultLogWhereInput
    /**
     * Limit how many GameResultLogs to update.
     */
    limit?: number
  }

  /**
   * GameResultLog updateManyAndReturn
   */
  export type GameResultLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameResultLog
     */
    select?: GameResultLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameResultLog
     */
    omit?: GameResultLogOmit<ExtArgs> | null
    /**
     * The data used to update GameResultLogs.
     */
    data: XOR<GameResultLogUpdateManyMutationInput, GameResultLogUncheckedUpdateManyInput>
    /**
     * Filter which GameResultLogs to update
     */
    where?: GameResultLogWhereInput
    /**
     * Limit how many GameResultLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameResultLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameResultLog upsert
   */
  export type GameResultLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameResultLog
     */
    select?: GameResultLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameResultLog
     */
    omit?: GameResultLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameResultLogInclude<ExtArgs> | null
    /**
     * The filter to search for the GameResultLog to update in case it exists.
     */
    where: GameResultLogWhereUniqueInput
    /**
     * In case the GameResultLog found by the `where` argument doesn't exist, create a new GameResultLog with this data.
     */
    create: XOR<GameResultLogCreateInput, GameResultLogUncheckedCreateInput>
    /**
     * In case the GameResultLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameResultLogUpdateInput, GameResultLogUncheckedUpdateInput>
  }

  /**
   * GameResultLog delete
   */
  export type GameResultLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameResultLog
     */
    select?: GameResultLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameResultLog
     */
    omit?: GameResultLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameResultLogInclude<ExtArgs> | null
    /**
     * Filter which GameResultLog to delete.
     */
    where: GameResultLogWhereUniqueInput
  }

  /**
   * GameResultLog deleteMany
   */
  export type GameResultLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameResultLogs to delete
     */
    where?: GameResultLogWhereInput
    /**
     * Limit how many GameResultLogs to delete.
     */
    limit?: number
  }

  /**
   * GameResultLog without action
   */
  export type GameResultLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameResultLog
     */
    select?: GameResultLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameResultLog
     */
    omit?: GameResultLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameResultLogInclude<ExtArgs> | null
  }


  /**
   * Model GameTreasury
   */

  export type AggregateGameTreasury = {
    _count: GameTreasuryCountAggregateOutputType | null
    _avg: GameTreasuryAvgAggregateOutputType | null
    _sum: GameTreasurySumAggregateOutputType | null
    _min: GameTreasuryMinAggregateOutputType | null
    _max: GameTreasuryMaxAggregateOutputType | null
  }

  export type GameTreasuryAvgAggregateOutputType = {
    id: number | null
    token2Amount: number | null
  }

  export type GameTreasurySumAggregateOutputType = {
    id: number | null
    token2Amount: number | null
  }

  export type GameTreasuryMinAggregateOutputType = {
    id: number | null
    token2Amount: number | null
    createdAt: Date | null
  }

  export type GameTreasuryMaxAggregateOutputType = {
    id: number | null
    token2Amount: number | null
    createdAt: Date | null
  }

  export type GameTreasuryCountAggregateOutputType = {
    id: number
    token2Amount: number
    createdAt: number
    _all: number
  }


  export type GameTreasuryAvgAggregateInputType = {
    id?: true
    token2Amount?: true
  }

  export type GameTreasurySumAggregateInputType = {
    id?: true
    token2Amount?: true
  }

  export type GameTreasuryMinAggregateInputType = {
    id?: true
    token2Amount?: true
    createdAt?: true
  }

  export type GameTreasuryMaxAggregateInputType = {
    id?: true
    token2Amount?: true
    createdAt?: true
  }

  export type GameTreasuryCountAggregateInputType = {
    id?: true
    token2Amount?: true
    createdAt?: true
    _all?: true
  }

  export type GameTreasuryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameTreasury to aggregate.
     */
    where?: GameTreasuryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameTreasuries to fetch.
     */
    orderBy?: GameTreasuryOrderByWithRelationInput | GameTreasuryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameTreasuryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameTreasuries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameTreasuries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameTreasuries
    **/
    _count?: true | GameTreasuryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameTreasuryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameTreasurySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameTreasuryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameTreasuryMaxAggregateInputType
  }

  export type GetGameTreasuryAggregateType<T extends GameTreasuryAggregateArgs> = {
        [P in keyof T & keyof AggregateGameTreasury]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameTreasury[P]>
      : GetScalarType<T[P], AggregateGameTreasury[P]>
  }




  export type GameTreasuryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameTreasuryWhereInput
    orderBy?: GameTreasuryOrderByWithAggregationInput | GameTreasuryOrderByWithAggregationInput[]
    by: GameTreasuryScalarFieldEnum[] | GameTreasuryScalarFieldEnum
    having?: GameTreasuryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameTreasuryCountAggregateInputType | true
    _avg?: GameTreasuryAvgAggregateInputType
    _sum?: GameTreasurySumAggregateInputType
    _min?: GameTreasuryMinAggregateInputType
    _max?: GameTreasuryMaxAggregateInputType
  }

  export type GameTreasuryGroupByOutputType = {
    id: number
    token2Amount: number
    createdAt: Date
    _count: GameTreasuryCountAggregateOutputType | null
    _avg: GameTreasuryAvgAggregateOutputType | null
    _sum: GameTreasurySumAggregateOutputType | null
    _min: GameTreasuryMinAggregateOutputType | null
    _max: GameTreasuryMaxAggregateOutputType | null
  }

  type GetGameTreasuryGroupByPayload<T extends GameTreasuryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameTreasuryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameTreasuryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameTreasuryGroupByOutputType[P]>
            : GetScalarType<T[P], GameTreasuryGroupByOutputType[P]>
        }
      >
    >


  export type GameTreasurySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token2Amount?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["gameTreasury"]>

  export type GameTreasurySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token2Amount?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["gameTreasury"]>

  export type GameTreasurySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token2Amount?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["gameTreasury"]>

  export type GameTreasurySelectScalar = {
    id?: boolean
    token2Amount?: boolean
    createdAt?: boolean
  }

  export type GameTreasuryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token2Amount" | "createdAt", ExtArgs["result"]["gameTreasury"]>

  export type $GameTreasuryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameTreasury"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      token2Amount: number
      createdAt: Date
    }, ExtArgs["result"]["gameTreasury"]>
    composites: {}
  }

  type GameTreasuryGetPayload<S extends boolean | null | undefined | GameTreasuryDefaultArgs> = $Result.GetResult<Prisma.$GameTreasuryPayload, S>

  type GameTreasuryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameTreasuryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameTreasuryCountAggregateInputType | true
    }

  export interface GameTreasuryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameTreasury'], meta: { name: 'GameTreasury' } }
    /**
     * Find zero or one GameTreasury that matches the filter.
     * @param {GameTreasuryFindUniqueArgs} args - Arguments to find a GameTreasury
     * @example
     * // Get one GameTreasury
     * const gameTreasury = await prisma.gameTreasury.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameTreasuryFindUniqueArgs>(args: SelectSubset<T, GameTreasuryFindUniqueArgs<ExtArgs>>): Prisma__GameTreasuryClient<$Result.GetResult<Prisma.$GameTreasuryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GameTreasury that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameTreasuryFindUniqueOrThrowArgs} args - Arguments to find a GameTreasury
     * @example
     * // Get one GameTreasury
     * const gameTreasury = await prisma.gameTreasury.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameTreasuryFindUniqueOrThrowArgs>(args: SelectSubset<T, GameTreasuryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameTreasuryClient<$Result.GetResult<Prisma.$GameTreasuryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameTreasury that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameTreasuryFindFirstArgs} args - Arguments to find a GameTreasury
     * @example
     * // Get one GameTreasury
     * const gameTreasury = await prisma.gameTreasury.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameTreasuryFindFirstArgs>(args?: SelectSubset<T, GameTreasuryFindFirstArgs<ExtArgs>>): Prisma__GameTreasuryClient<$Result.GetResult<Prisma.$GameTreasuryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameTreasury that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameTreasuryFindFirstOrThrowArgs} args - Arguments to find a GameTreasury
     * @example
     * // Get one GameTreasury
     * const gameTreasury = await prisma.gameTreasury.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameTreasuryFindFirstOrThrowArgs>(args?: SelectSubset<T, GameTreasuryFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameTreasuryClient<$Result.GetResult<Prisma.$GameTreasuryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GameTreasuries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameTreasuryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameTreasuries
     * const gameTreasuries = await prisma.gameTreasury.findMany()
     * 
     * // Get first 10 GameTreasuries
     * const gameTreasuries = await prisma.gameTreasury.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameTreasuryWithIdOnly = await prisma.gameTreasury.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameTreasuryFindManyArgs>(args?: SelectSubset<T, GameTreasuryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameTreasuryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GameTreasury.
     * @param {GameTreasuryCreateArgs} args - Arguments to create a GameTreasury.
     * @example
     * // Create one GameTreasury
     * const GameTreasury = await prisma.gameTreasury.create({
     *   data: {
     *     // ... data to create a GameTreasury
     *   }
     * })
     * 
     */
    create<T extends GameTreasuryCreateArgs>(args: SelectSubset<T, GameTreasuryCreateArgs<ExtArgs>>): Prisma__GameTreasuryClient<$Result.GetResult<Prisma.$GameTreasuryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GameTreasuries.
     * @param {GameTreasuryCreateManyArgs} args - Arguments to create many GameTreasuries.
     * @example
     * // Create many GameTreasuries
     * const gameTreasury = await prisma.gameTreasury.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameTreasuryCreateManyArgs>(args?: SelectSubset<T, GameTreasuryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameTreasuries and returns the data saved in the database.
     * @param {GameTreasuryCreateManyAndReturnArgs} args - Arguments to create many GameTreasuries.
     * @example
     * // Create many GameTreasuries
     * const gameTreasury = await prisma.gameTreasury.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameTreasuries and only return the `id`
     * const gameTreasuryWithIdOnly = await prisma.gameTreasury.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameTreasuryCreateManyAndReturnArgs>(args?: SelectSubset<T, GameTreasuryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameTreasuryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GameTreasury.
     * @param {GameTreasuryDeleteArgs} args - Arguments to delete one GameTreasury.
     * @example
     * // Delete one GameTreasury
     * const GameTreasury = await prisma.gameTreasury.delete({
     *   where: {
     *     // ... filter to delete one GameTreasury
     *   }
     * })
     * 
     */
    delete<T extends GameTreasuryDeleteArgs>(args: SelectSubset<T, GameTreasuryDeleteArgs<ExtArgs>>): Prisma__GameTreasuryClient<$Result.GetResult<Prisma.$GameTreasuryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GameTreasury.
     * @param {GameTreasuryUpdateArgs} args - Arguments to update one GameTreasury.
     * @example
     * // Update one GameTreasury
     * const gameTreasury = await prisma.gameTreasury.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameTreasuryUpdateArgs>(args: SelectSubset<T, GameTreasuryUpdateArgs<ExtArgs>>): Prisma__GameTreasuryClient<$Result.GetResult<Prisma.$GameTreasuryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GameTreasuries.
     * @param {GameTreasuryDeleteManyArgs} args - Arguments to filter GameTreasuries to delete.
     * @example
     * // Delete a few GameTreasuries
     * const { count } = await prisma.gameTreasury.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameTreasuryDeleteManyArgs>(args?: SelectSubset<T, GameTreasuryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameTreasuries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameTreasuryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameTreasuries
     * const gameTreasury = await prisma.gameTreasury.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameTreasuryUpdateManyArgs>(args: SelectSubset<T, GameTreasuryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameTreasuries and returns the data updated in the database.
     * @param {GameTreasuryUpdateManyAndReturnArgs} args - Arguments to update many GameTreasuries.
     * @example
     * // Update many GameTreasuries
     * const gameTreasury = await prisma.gameTreasury.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GameTreasuries and only return the `id`
     * const gameTreasuryWithIdOnly = await prisma.gameTreasury.updateManyAndReturn({
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
    updateManyAndReturn<T extends GameTreasuryUpdateManyAndReturnArgs>(args: SelectSubset<T, GameTreasuryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameTreasuryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GameTreasury.
     * @param {GameTreasuryUpsertArgs} args - Arguments to update or create a GameTreasury.
     * @example
     * // Update or create a GameTreasury
     * const gameTreasury = await prisma.gameTreasury.upsert({
     *   create: {
     *     // ... data to create a GameTreasury
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameTreasury we want to update
     *   }
     * })
     */
    upsert<T extends GameTreasuryUpsertArgs>(args: SelectSubset<T, GameTreasuryUpsertArgs<ExtArgs>>): Prisma__GameTreasuryClient<$Result.GetResult<Prisma.$GameTreasuryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GameTreasuries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameTreasuryCountArgs} args - Arguments to filter GameTreasuries to count.
     * @example
     * // Count the number of GameTreasuries
     * const count = await prisma.gameTreasury.count({
     *   where: {
     *     // ... the filter for the GameTreasuries we want to count
     *   }
     * })
    **/
    count<T extends GameTreasuryCountArgs>(
      args?: Subset<T, GameTreasuryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameTreasuryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameTreasury.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameTreasuryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GameTreasuryAggregateArgs>(args: Subset<T, GameTreasuryAggregateArgs>): Prisma.PrismaPromise<GetGameTreasuryAggregateType<T>>

    /**
     * Group by GameTreasury.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameTreasuryGroupByArgs} args - Group by arguments.
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
      T extends GameTreasuryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameTreasuryGroupByArgs['orderBy'] }
        : { orderBy?: GameTreasuryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GameTreasuryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameTreasuryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameTreasury model
   */
  readonly fields: GameTreasuryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameTreasury.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameTreasuryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the GameTreasury model
   */
  interface GameTreasuryFieldRefs {
    readonly id: FieldRef<"GameTreasury", 'Int'>
    readonly token2Amount: FieldRef<"GameTreasury", 'Float'>
    readonly createdAt: FieldRef<"GameTreasury", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GameTreasury findUnique
   */
  export type GameTreasuryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTreasury
     */
    select?: GameTreasurySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameTreasury
     */
    omit?: GameTreasuryOmit<ExtArgs> | null
    /**
     * Filter, which GameTreasury to fetch.
     */
    where: GameTreasuryWhereUniqueInput
  }

  /**
   * GameTreasury findUniqueOrThrow
   */
  export type GameTreasuryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTreasury
     */
    select?: GameTreasurySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameTreasury
     */
    omit?: GameTreasuryOmit<ExtArgs> | null
    /**
     * Filter, which GameTreasury to fetch.
     */
    where: GameTreasuryWhereUniqueInput
  }

  /**
   * GameTreasury findFirst
   */
  export type GameTreasuryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTreasury
     */
    select?: GameTreasurySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameTreasury
     */
    omit?: GameTreasuryOmit<ExtArgs> | null
    /**
     * Filter, which GameTreasury to fetch.
     */
    where?: GameTreasuryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameTreasuries to fetch.
     */
    orderBy?: GameTreasuryOrderByWithRelationInput | GameTreasuryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameTreasuries.
     */
    cursor?: GameTreasuryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameTreasuries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameTreasuries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameTreasuries.
     */
    distinct?: GameTreasuryScalarFieldEnum | GameTreasuryScalarFieldEnum[]
  }

  /**
   * GameTreasury findFirstOrThrow
   */
  export type GameTreasuryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTreasury
     */
    select?: GameTreasurySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameTreasury
     */
    omit?: GameTreasuryOmit<ExtArgs> | null
    /**
     * Filter, which GameTreasury to fetch.
     */
    where?: GameTreasuryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameTreasuries to fetch.
     */
    orderBy?: GameTreasuryOrderByWithRelationInput | GameTreasuryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameTreasuries.
     */
    cursor?: GameTreasuryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameTreasuries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameTreasuries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameTreasuries.
     */
    distinct?: GameTreasuryScalarFieldEnum | GameTreasuryScalarFieldEnum[]
  }

  /**
   * GameTreasury findMany
   */
  export type GameTreasuryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTreasury
     */
    select?: GameTreasurySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameTreasury
     */
    omit?: GameTreasuryOmit<ExtArgs> | null
    /**
     * Filter, which GameTreasuries to fetch.
     */
    where?: GameTreasuryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameTreasuries to fetch.
     */
    orderBy?: GameTreasuryOrderByWithRelationInput | GameTreasuryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameTreasuries.
     */
    cursor?: GameTreasuryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameTreasuries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameTreasuries.
     */
    skip?: number
    distinct?: GameTreasuryScalarFieldEnum | GameTreasuryScalarFieldEnum[]
  }

  /**
   * GameTreasury create
   */
  export type GameTreasuryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTreasury
     */
    select?: GameTreasurySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameTreasury
     */
    omit?: GameTreasuryOmit<ExtArgs> | null
    /**
     * The data needed to create a GameTreasury.
     */
    data?: XOR<GameTreasuryCreateInput, GameTreasuryUncheckedCreateInput>
  }

  /**
   * GameTreasury createMany
   */
  export type GameTreasuryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameTreasuries.
     */
    data: GameTreasuryCreateManyInput | GameTreasuryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameTreasury createManyAndReturn
   */
  export type GameTreasuryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTreasury
     */
    select?: GameTreasurySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameTreasury
     */
    omit?: GameTreasuryOmit<ExtArgs> | null
    /**
     * The data used to create many GameTreasuries.
     */
    data: GameTreasuryCreateManyInput | GameTreasuryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameTreasury update
   */
  export type GameTreasuryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTreasury
     */
    select?: GameTreasurySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameTreasury
     */
    omit?: GameTreasuryOmit<ExtArgs> | null
    /**
     * The data needed to update a GameTreasury.
     */
    data: XOR<GameTreasuryUpdateInput, GameTreasuryUncheckedUpdateInput>
    /**
     * Choose, which GameTreasury to update.
     */
    where: GameTreasuryWhereUniqueInput
  }

  /**
   * GameTreasury updateMany
   */
  export type GameTreasuryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameTreasuries.
     */
    data: XOR<GameTreasuryUpdateManyMutationInput, GameTreasuryUncheckedUpdateManyInput>
    /**
     * Filter which GameTreasuries to update
     */
    where?: GameTreasuryWhereInput
    /**
     * Limit how many GameTreasuries to update.
     */
    limit?: number
  }

  /**
   * GameTreasury updateManyAndReturn
   */
  export type GameTreasuryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTreasury
     */
    select?: GameTreasurySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameTreasury
     */
    omit?: GameTreasuryOmit<ExtArgs> | null
    /**
     * The data used to update GameTreasuries.
     */
    data: XOR<GameTreasuryUpdateManyMutationInput, GameTreasuryUncheckedUpdateManyInput>
    /**
     * Filter which GameTreasuries to update
     */
    where?: GameTreasuryWhereInput
    /**
     * Limit how many GameTreasuries to update.
     */
    limit?: number
  }

  /**
   * GameTreasury upsert
   */
  export type GameTreasuryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTreasury
     */
    select?: GameTreasurySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameTreasury
     */
    omit?: GameTreasuryOmit<ExtArgs> | null
    /**
     * The filter to search for the GameTreasury to update in case it exists.
     */
    where: GameTreasuryWhereUniqueInput
    /**
     * In case the GameTreasury found by the `where` argument doesn't exist, create a new GameTreasury with this data.
     */
    create: XOR<GameTreasuryCreateInput, GameTreasuryUncheckedCreateInput>
    /**
     * In case the GameTreasury was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameTreasuryUpdateInput, GameTreasuryUncheckedUpdateInput>
  }

  /**
   * GameTreasury delete
   */
  export type GameTreasuryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTreasury
     */
    select?: GameTreasurySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameTreasury
     */
    omit?: GameTreasuryOmit<ExtArgs> | null
    /**
     * Filter which GameTreasury to delete.
     */
    where: GameTreasuryWhereUniqueInput
  }

  /**
   * GameTreasury deleteMany
   */
  export type GameTreasuryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameTreasuries to delete
     */
    where?: GameTreasuryWhereInput
    /**
     * Limit how many GameTreasuries to delete.
     */
    limit?: number
  }

  /**
   * GameTreasury without action
   */
  export type GameTreasuryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTreasury
     */
    select?: GameTreasurySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameTreasury
     */
    omit?: GameTreasuryOmit<ExtArgs> | null
  }


  /**
   * Model DynamicAdjustmentFactor
   */

  export type AggregateDynamicAdjustmentFactor = {
    _count: DynamicAdjustmentFactorCountAggregateOutputType | null
    _avg: DynamicAdjustmentFactorAvgAggregateOutputType | null
    _sum: DynamicAdjustmentFactorSumAggregateOutputType | null
    _min: DynamicAdjustmentFactorMinAggregateOutputType | null
    _max: DynamicAdjustmentFactorMaxAggregateOutputType | null
  }

  export type DynamicAdjustmentFactorAvgAggregateOutputType = {
    id: number | null
    factorValue: number | null
    resultIds: number | null
  }

  export type DynamicAdjustmentFactorSumAggregateOutputType = {
    id: number | null
    factorValue: number | null
    resultIds: number[]
  }

  export type DynamicAdjustmentFactorMinAggregateOutputType = {
    id: number | null
    difficulty: $Enums.Difficulty | null
    factorValue: number | null
    createdAt: Date | null
  }

  export type DynamicAdjustmentFactorMaxAggregateOutputType = {
    id: number | null
    difficulty: $Enums.Difficulty | null
    factorValue: number | null
    createdAt: Date | null
  }

  export type DynamicAdjustmentFactorCountAggregateOutputType = {
    id: number
    difficulty: number
    factorValue: number
    resultIds: number
    createdAt: number
    _all: number
  }


  export type DynamicAdjustmentFactorAvgAggregateInputType = {
    id?: true
    factorValue?: true
    resultIds?: true
  }

  export type DynamicAdjustmentFactorSumAggregateInputType = {
    id?: true
    factorValue?: true
    resultIds?: true
  }

  export type DynamicAdjustmentFactorMinAggregateInputType = {
    id?: true
    difficulty?: true
    factorValue?: true
    createdAt?: true
  }

  export type DynamicAdjustmentFactorMaxAggregateInputType = {
    id?: true
    difficulty?: true
    factorValue?: true
    createdAt?: true
  }

  export type DynamicAdjustmentFactorCountAggregateInputType = {
    id?: true
    difficulty?: true
    factorValue?: true
    resultIds?: true
    createdAt?: true
    _all?: true
  }

  export type DynamicAdjustmentFactorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DynamicAdjustmentFactor to aggregate.
     */
    where?: DynamicAdjustmentFactorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DynamicAdjustmentFactors to fetch.
     */
    orderBy?: DynamicAdjustmentFactorOrderByWithRelationInput | DynamicAdjustmentFactorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DynamicAdjustmentFactorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DynamicAdjustmentFactors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DynamicAdjustmentFactors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DynamicAdjustmentFactors
    **/
    _count?: true | DynamicAdjustmentFactorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DynamicAdjustmentFactorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DynamicAdjustmentFactorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DynamicAdjustmentFactorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DynamicAdjustmentFactorMaxAggregateInputType
  }

  export type GetDynamicAdjustmentFactorAggregateType<T extends DynamicAdjustmentFactorAggregateArgs> = {
        [P in keyof T & keyof AggregateDynamicAdjustmentFactor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDynamicAdjustmentFactor[P]>
      : GetScalarType<T[P], AggregateDynamicAdjustmentFactor[P]>
  }




  export type DynamicAdjustmentFactorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DynamicAdjustmentFactorWhereInput
    orderBy?: DynamicAdjustmentFactorOrderByWithAggregationInput | DynamicAdjustmentFactorOrderByWithAggregationInput[]
    by: DynamicAdjustmentFactorScalarFieldEnum[] | DynamicAdjustmentFactorScalarFieldEnum
    having?: DynamicAdjustmentFactorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DynamicAdjustmentFactorCountAggregateInputType | true
    _avg?: DynamicAdjustmentFactorAvgAggregateInputType
    _sum?: DynamicAdjustmentFactorSumAggregateInputType
    _min?: DynamicAdjustmentFactorMinAggregateInputType
    _max?: DynamicAdjustmentFactorMaxAggregateInputType
  }

  export type DynamicAdjustmentFactorGroupByOutputType = {
    id: number
    difficulty: $Enums.Difficulty
    factorValue: number
    resultIds: number[]
    createdAt: Date
    _count: DynamicAdjustmentFactorCountAggregateOutputType | null
    _avg: DynamicAdjustmentFactorAvgAggregateOutputType | null
    _sum: DynamicAdjustmentFactorSumAggregateOutputType | null
    _min: DynamicAdjustmentFactorMinAggregateOutputType | null
    _max: DynamicAdjustmentFactorMaxAggregateOutputType | null
  }

  type GetDynamicAdjustmentFactorGroupByPayload<T extends DynamicAdjustmentFactorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DynamicAdjustmentFactorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DynamicAdjustmentFactorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DynamicAdjustmentFactorGroupByOutputType[P]>
            : GetScalarType<T[P], DynamicAdjustmentFactorGroupByOutputType[P]>
        }
      >
    >


  export type DynamicAdjustmentFactorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    difficulty?: boolean
    factorValue?: boolean
    resultIds?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["dynamicAdjustmentFactor"]>

  export type DynamicAdjustmentFactorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    difficulty?: boolean
    factorValue?: boolean
    resultIds?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["dynamicAdjustmentFactor"]>

  export type DynamicAdjustmentFactorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    difficulty?: boolean
    factorValue?: boolean
    resultIds?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["dynamicAdjustmentFactor"]>

  export type DynamicAdjustmentFactorSelectScalar = {
    id?: boolean
    difficulty?: boolean
    factorValue?: boolean
    resultIds?: boolean
    createdAt?: boolean
  }

  export type DynamicAdjustmentFactorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "difficulty" | "factorValue" | "resultIds" | "createdAt", ExtArgs["result"]["dynamicAdjustmentFactor"]>

  export type $DynamicAdjustmentFactorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DynamicAdjustmentFactor"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      difficulty: $Enums.Difficulty
      factorValue: number
      /**
       * 집계된 GameResultLog 아이디 리스트
       */
      resultIds: number[]
      createdAt: Date
    }, ExtArgs["result"]["dynamicAdjustmentFactor"]>
    composites: {}
  }

  type DynamicAdjustmentFactorGetPayload<S extends boolean | null | undefined | DynamicAdjustmentFactorDefaultArgs> = $Result.GetResult<Prisma.$DynamicAdjustmentFactorPayload, S>

  type DynamicAdjustmentFactorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DynamicAdjustmentFactorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DynamicAdjustmentFactorCountAggregateInputType | true
    }

  export interface DynamicAdjustmentFactorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DynamicAdjustmentFactor'], meta: { name: 'DynamicAdjustmentFactor' } }
    /**
     * Find zero or one DynamicAdjustmentFactor that matches the filter.
     * @param {DynamicAdjustmentFactorFindUniqueArgs} args - Arguments to find a DynamicAdjustmentFactor
     * @example
     * // Get one DynamicAdjustmentFactor
     * const dynamicAdjustmentFactor = await prisma.dynamicAdjustmentFactor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DynamicAdjustmentFactorFindUniqueArgs>(args: SelectSubset<T, DynamicAdjustmentFactorFindUniqueArgs<ExtArgs>>): Prisma__DynamicAdjustmentFactorClient<$Result.GetResult<Prisma.$DynamicAdjustmentFactorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DynamicAdjustmentFactor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DynamicAdjustmentFactorFindUniqueOrThrowArgs} args - Arguments to find a DynamicAdjustmentFactor
     * @example
     * // Get one DynamicAdjustmentFactor
     * const dynamicAdjustmentFactor = await prisma.dynamicAdjustmentFactor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DynamicAdjustmentFactorFindUniqueOrThrowArgs>(args: SelectSubset<T, DynamicAdjustmentFactorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DynamicAdjustmentFactorClient<$Result.GetResult<Prisma.$DynamicAdjustmentFactorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DynamicAdjustmentFactor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicAdjustmentFactorFindFirstArgs} args - Arguments to find a DynamicAdjustmentFactor
     * @example
     * // Get one DynamicAdjustmentFactor
     * const dynamicAdjustmentFactor = await prisma.dynamicAdjustmentFactor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DynamicAdjustmentFactorFindFirstArgs>(args?: SelectSubset<T, DynamicAdjustmentFactorFindFirstArgs<ExtArgs>>): Prisma__DynamicAdjustmentFactorClient<$Result.GetResult<Prisma.$DynamicAdjustmentFactorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DynamicAdjustmentFactor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicAdjustmentFactorFindFirstOrThrowArgs} args - Arguments to find a DynamicAdjustmentFactor
     * @example
     * // Get one DynamicAdjustmentFactor
     * const dynamicAdjustmentFactor = await prisma.dynamicAdjustmentFactor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DynamicAdjustmentFactorFindFirstOrThrowArgs>(args?: SelectSubset<T, DynamicAdjustmentFactorFindFirstOrThrowArgs<ExtArgs>>): Prisma__DynamicAdjustmentFactorClient<$Result.GetResult<Prisma.$DynamicAdjustmentFactorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DynamicAdjustmentFactors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicAdjustmentFactorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DynamicAdjustmentFactors
     * const dynamicAdjustmentFactors = await prisma.dynamicAdjustmentFactor.findMany()
     * 
     * // Get first 10 DynamicAdjustmentFactors
     * const dynamicAdjustmentFactors = await prisma.dynamicAdjustmentFactor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dynamicAdjustmentFactorWithIdOnly = await prisma.dynamicAdjustmentFactor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DynamicAdjustmentFactorFindManyArgs>(args?: SelectSubset<T, DynamicAdjustmentFactorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DynamicAdjustmentFactorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DynamicAdjustmentFactor.
     * @param {DynamicAdjustmentFactorCreateArgs} args - Arguments to create a DynamicAdjustmentFactor.
     * @example
     * // Create one DynamicAdjustmentFactor
     * const DynamicAdjustmentFactor = await prisma.dynamicAdjustmentFactor.create({
     *   data: {
     *     // ... data to create a DynamicAdjustmentFactor
     *   }
     * })
     * 
     */
    create<T extends DynamicAdjustmentFactorCreateArgs>(args: SelectSubset<T, DynamicAdjustmentFactorCreateArgs<ExtArgs>>): Prisma__DynamicAdjustmentFactorClient<$Result.GetResult<Prisma.$DynamicAdjustmentFactorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DynamicAdjustmentFactors.
     * @param {DynamicAdjustmentFactorCreateManyArgs} args - Arguments to create many DynamicAdjustmentFactors.
     * @example
     * // Create many DynamicAdjustmentFactors
     * const dynamicAdjustmentFactor = await prisma.dynamicAdjustmentFactor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DynamicAdjustmentFactorCreateManyArgs>(args?: SelectSubset<T, DynamicAdjustmentFactorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DynamicAdjustmentFactors and returns the data saved in the database.
     * @param {DynamicAdjustmentFactorCreateManyAndReturnArgs} args - Arguments to create many DynamicAdjustmentFactors.
     * @example
     * // Create many DynamicAdjustmentFactors
     * const dynamicAdjustmentFactor = await prisma.dynamicAdjustmentFactor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DynamicAdjustmentFactors and only return the `id`
     * const dynamicAdjustmentFactorWithIdOnly = await prisma.dynamicAdjustmentFactor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DynamicAdjustmentFactorCreateManyAndReturnArgs>(args?: SelectSubset<T, DynamicAdjustmentFactorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DynamicAdjustmentFactorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DynamicAdjustmentFactor.
     * @param {DynamicAdjustmentFactorDeleteArgs} args - Arguments to delete one DynamicAdjustmentFactor.
     * @example
     * // Delete one DynamicAdjustmentFactor
     * const DynamicAdjustmentFactor = await prisma.dynamicAdjustmentFactor.delete({
     *   where: {
     *     // ... filter to delete one DynamicAdjustmentFactor
     *   }
     * })
     * 
     */
    delete<T extends DynamicAdjustmentFactorDeleteArgs>(args: SelectSubset<T, DynamicAdjustmentFactorDeleteArgs<ExtArgs>>): Prisma__DynamicAdjustmentFactorClient<$Result.GetResult<Prisma.$DynamicAdjustmentFactorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DynamicAdjustmentFactor.
     * @param {DynamicAdjustmentFactorUpdateArgs} args - Arguments to update one DynamicAdjustmentFactor.
     * @example
     * // Update one DynamicAdjustmentFactor
     * const dynamicAdjustmentFactor = await prisma.dynamicAdjustmentFactor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DynamicAdjustmentFactorUpdateArgs>(args: SelectSubset<T, DynamicAdjustmentFactorUpdateArgs<ExtArgs>>): Prisma__DynamicAdjustmentFactorClient<$Result.GetResult<Prisma.$DynamicAdjustmentFactorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DynamicAdjustmentFactors.
     * @param {DynamicAdjustmentFactorDeleteManyArgs} args - Arguments to filter DynamicAdjustmentFactors to delete.
     * @example
     * // Delete a few DynamicAdjustmentFactors
     * const { count } = await prisma.dynamicAdjustmentFactor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DynamicAdjustmentFactorDeleteManyArgs>(args?: SelectSubset<T, DynamicAdjustmentFactorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DynamicAdjustmentFactors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicAdjustmentFactorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DynamicAdjustmentFactors
     * const dynamicAdjustmentFactor = await prisma.dynamicAdjustmentFactor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DynamicAdjustmentFactorUpdateManyArgs>(args: SelectSubset<T, DynamicAdjustmentFactorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DynamicAdjustmentFactors and returns the data updated in the database.
     * @param {DynamicAdjustmentFactorUpdateManyAndReturnArgs} args - Arguments to update many DynamicAdjustmentFactors.
     * @example
     * // Update many DynamicAdjustmentFactors
     * const dynamicAdjustmentFactor = await prisma.dynamicAdjustmentFactor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DynamicAdjustmentFactors and only return the `id`
     * const dynamicAdjustmentFactorWithIdOnly = await prisma.dynamicAdjustmentFactor.updateManyAndReturn({
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
    updateManyAndReturn<T extends DynamicAdjustmentFactorUpdateManyAndReturnArgs>(args: SelectSubset<T, DynamicAdjustmentFactorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DynamicAdjustmentFactorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DynamicAdjustmentFactor.
     * @param {DynamicAdjustmentFactorUpsertArgs} args - Arguments to update or create a DynamicAdjustmentFactor.
     * @example
     * // Update or create a DynamicAdjustmentFactor
     * const dynamicAdjustmentFactor = await prisma.dynamicAdjustmentFactor.upsert({
     *   create: {
     *     // ... data to create a DynamicAdjustmentFactor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DynamicAdjustmentFactor we want to update
     *   }
     * })
     */
    upsert<T extends DynamicAdjustmentFactorUpsertArgs>(args: SelectSubset<T, DynamicAdjustmentFactorUpsertArgs<ExtArgs>>): Prisma__DynamicAdjustmentFactorClient<$Result.GetResult<Prisma.$DynamicAdjustmentFactorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DynamicAdjustmentFactors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicAdjustmentFactorCountArgs} args - Arguments to filter DynamicAdjustmentFactors to count.
     * @example
     * // Count the number of DynamicAdjustmentFactors
     * const count = await prisma.dynamicAdjustmentFactor.count({
     *   where: {
     *     // ... the filter for the DynamicAdjustmentFactors we want to count
     *   }
     * })
    **/
    count<T extends DynamicAdjustmentFactorCountArgs>(
      args?: Subset<T, DynamicAdjustmentFactorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DynamicAdjustmentFactorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DynamicAdjustmentFactor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicAdjustmentFactorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DynamicAdjustmentFactorAggregateArgs>(args: Subset<T, DynamicAdjustmentFactorAggregateArgs>): Prisma.PrismaPromise<GetDynamicAdjustmentFactorAggregateType<T>>

    /**
     * Group by DynamicAdjustmentFactor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicAdjustmentFactorGroupByArgs} args - Group by arguments.
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
      T extends DynamicAdjustmentFactorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DynamicAdjustmentFactorGroupByArgs['orderBy'] }
        : { orderBy?: DynamicAdjustmentFactorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DynamicAdjustmentFactorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDynamicAdjustmentFactorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DynamicAdjustmentFactor model
   */
  readonly fields: DynamicAdjustmentFactorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DynamicAdjustmentFactor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DynamicAdjustmentFactorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the DynamicAdjustmentFactor model
   */
  interface DynamicAdjustmentFactorFieldRefs {
    readonly id: FieldRef<"DynamicAdjustmentFactor", 'Int'>
    readonly difficulty: FieldRef<"DynamicAdjustmentFactor", 'Difficulty'>
    readonly factorValue: FieldRef<"DynamicAdjustmentFactor", 'Float'>
    readonly resultIds: FieldRef<"DynamicAdjustmentFactor", 'Int[]'>
    readonly createdAt: FieldRef<"DynamicAdjustmentFactor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DynamicAdjustmentFactor findUnique
   */
  export type DynamicAdjustmentFactorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicAdjustmentFactor
     */
    select?: DynamicAdjustmentFactorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DynamicAdjustmentFactor
     */
    omit?: DynamicAdjustmentFactorOmit<ExtArgs> | null
    /**
     * Filter, which DynamicAdjustmentFactor to fetch.
     */
    where: DynamicAdjustmentFactorWhereUniqueInput
  }

  /**
   * DynamicAdjustmentFactor findUniqueOrThrow
   */
  export type DynamicAdjustmentFactorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicAdjustmentFactor
     */
    select?: DynamicAdjustmentFactorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DynamicAdjustmentFactor
     */
    omit?: DynamicAdjustmentFactorOmit<ExtArgs> | null
    /**
     * Filter, which DynamicAdjustmentFactor to fetch.
     */
    where: DynamicAdjustmentFactorWhereUniqueInput
  }

  /**
   * DynamicAdjustmentFactor findFirst
   */
  export type DynamicAdjustmentFactorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicAdjustmentFactor
     */
    select?: DynamicAdjustmentFactorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DynamicAdjustmentFactor
     */
    omit?: DynamicAdjustmentFactorOmit<ExtArgs> | null
    /**
     * Filter, which DynamicAdjustmentFactor to fetch.
     */
    where?: DynamicAdjustmentFactorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DynamicAdjustmentFactors to fetch.
     */
    orderBy?: DynamicAdjustmentFactorOrderByWithRelationInput | DynamicAdjustmentFactorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DynamicAdjustmentFactors.
     */
    cursor?: DynamicAdjustmentFactorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DynamicAdjustmentFactors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DynamicAdjustmentFactors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DynamicAdjustmentFactors.
     */
    distinct?: DynamicAdjustmentFactorScalarFieldEnum | DynamicAdjustmentFactorScalarFieldEnum[]
  }

  /**
   * DynamicAdjustmentFactor findFirstOrThrow
   */
  export type DynamicAdjustmentFactorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicAdjustmentFactor
     */
    select?: DynamicAdjustmentFactorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DynamicAdjustmentFactor
     */
    omit?: DynamicAdjustmentFactorOmit<ExtArgs> | null
    /**
     * Filter, which DynamicAdjustmentFactor to fetch.
     */
    where?: DynamicAdjustmentFactorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DynamicAdjustmentFactors to fetch.
     */
    orderBy?: DynamicAdjustmentFactorOrderByWithRelationInput | DynamicAdjustmentFactorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DynamicAdjustmentFactors.
     */
    cursor?: DynamicAdjustmentFactorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DynamicAdjustmentFactors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DynamicAdjustmentFactors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DynamicAdjustmentFactors.
     */
    distinct?: DynamicAdjustmentFactorScalarFieldEnum | DynamicAdjustmentFactorScalarFieldEnum[]
  }

  /**
   * DynamicAdjustmentFactor findMany
   */
  export type DynamicAdjustmentFactorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicAdjustmentFactor
     */
    select?: DynamicAdjustmentFactorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DynamicAdjustmentFactor
     */
    omit?: DynamicAdjustmentFactorOmit<ExtArgs> | null
    /**
     * Filter, which DynamicAdjustmentFactors to fetch.
     */
    where?: DynamicAdjustmentFactorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DynamicAdjustmentFactors to fetch.
     */
    orderBy?: DynamicAdjustmentFactorOrderByWithRelationInput | DynamicAdjustmentFactorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DynamicAdjustmentFactors.
     */
    cursor?: DynamicAdjustmentFactorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DynamicAdjustmentFactors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DynamicAdjustmentFactors.
     */
    skip?: number
    distinct?: DynamicAdjustmentFactorScalarFieldEnum | DynamicAdjustmentFactorScalarFieldEnum[]
  }

  /**
   * DynamicAdjustmentFactor create
   */
  export type DynamicAdjustmentFactorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicAdjustmentFactor
     */
    select?: DynamicAdjustmentFactorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DynamicAdjustmentFactor
     */
    omit?: DynamicAdjustmentFactorOmit<ExtArgs> | null
    /**
     * The data needed to create a DynamicAdjustmentFactor.
     */
    data: XOR<DynamicAdjustmentFactorCreateInput, DynamicAdjustmentFactorUncheckedCreateInput>
  }

  /**
   * DynamicAdjustmentFactor createMany
   */
  export type DynamicAdjustmentFactorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DynamicAdjustmentFactors.
     */
    data: DynamicAdjustmentFactorCreateManyInput | DynamicAdjustmentFactorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DynamicAdjustmentFactor createManyAndReturn
   */
  export type DynamicAdjustmentFactorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicAdjustmentFactor
     */
    select?: DynamicAdjustmentFactorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DynamicAdjustmentFactor
     */
    omit?: DynamicAdjustmentFactorOmit<ExtArgs> | null
    /**
     * The data used to create many DynamicAdjustmentFactors.
     */
    data: DynamicAdjustmentFactorCreateManyInput | DynamicAdjustmentFactorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DynamicAdjustmentFactor update
   */
  export type DynamicAdjustmentFactorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicAdjustmentFactor
     */
    select?: DynamicAdjustmentFactorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DynamicAdjustmentFactor
     */
    omit?: DynamicAdjustmentFactorOmit<ExtArgs> | null
    /**
     * The data needed to update a DynamicAdjustmentFactor.
     */
    data: XOR<DynamicAdjustmentFactorUpdateInput, DynamicAdjustmentFactorUncheckedUpdateInput>
    /**
     * Choose, which DynamicAdjustmentFactor to update.
     */
    where: DynamicAdjustmentFactorWhereUniqueInput
  }

  /**
   * DynamicAdjustmentFactor updateMany
   */
  export type DynamicAdjustmentFactorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DynamicAdjustmentFactors.
     */
    data: XOR<DynamicAdjustmentFactorUpdateManyMutationInput, DynamicAdjustmentFactorUncheckedUpdateManyInput>
    /**
     * Filter which DynamicAdjustmentFactors to update
     */
    where?: DynamicAdjustmentFactorWhereInput
    /**
     * Limit how many DynamicAdjustmentFactors to update.
     */
    limit?: number
  }

  /**
   * DynamicAdjustmentFactor updateManyAndReturn
   */
  export type DynamicAdjustmentFactorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicAdjustmentFactor
     */
    select?: DynamicAdjustmentFactorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DynamicAdjustmentFactor
     */
    omit?: DynamicAdjustmentFactorOmit<ExtArgs> | null
    /**
     * The data used to update DynamicAdjustmentFactors.
     */
    data: XOR<DynamicAdjustmentFactorUpdateManyMutationInput, DynamicAdjustmentFactorUncheckedUpdateManyInput>
    /**
     * Filter which DynamicAdjustmentFactors to update
     */
    where?: DynamicAdjustmentFactorWhereInput
    /**
     * Limit how many DynamicAdjustmentFactors to update.
     */
    limit?: number
  }

  /**
   * DynamicAdjustmentFactor upsert
   */
  export type DynamicAdjustmentFactorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicAdjustmentFactor
     */
    select?: DynamicAdjustmentFactorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DynamicAdjustmentFactor
     */
    omit?: DynamicAdjustmentFactorOmit<ExtArgs> | null
    /**
     * The filter to search for the DynamicAdjustmentFactor to update in case it exists.
     */
    where: DynamicAdjustmentFactorWhereUniqueInput
    /**
     * In case the DynamicAdjustmentFactor found by the `where` argument doesn't exist, create a new DynamicAdjustmentFactor with this data.
     */
    create: XOR<DynamicAdjustmentFactorCreateInput, DynamicAdjustmentFactorUncheckedCreateInput>
    /**
     * In case the DynamicAdjustmentFactor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DynamicAdjustmentFactorUpdateInput, DynamicAdjustmentFactorUncheckedUpdateInput>
  }

  /**
   * DynamicAdjustmentFactor delete
   */
  export type DynamicAdjustmentFactorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicAdjustmentFactor
     */
    select?: DynamicAdjustmentFactorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DynamicAdjustmentFactor
     */
    omit?: DynamicAdjustmentFactorOmit<ExtArgs> | null
    /**
     * Filter which DynamicAdjustmentFactor to delete.
     */
    where: DynamicAdjustmentFactorWhereUniqueInput
  }

  /**
   * DynamicAdjustmentFactor deleteMany
   */
  export type DynamicAdjustmentFactorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DynamicAdjustmentFactors to delete
     */
    where?: DynamicAdjustmentFactorWhereInput
    /**
     * Limit how many DynamicAdjustmentFactors to delete.
     */
    limit?: number
  }

  /**
   * DynamicAdjustmentFactor without action
   */
  export type DynamicAdjustmentFactorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicAdjustmentFactor
     */
    select?: DynamicAdjustmentFactorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DynamicAdjustmentFactor
     */
    omit?: DynamicAdjustmentFactorOmit<ExtArgs> | null
  }


  /**
   * Model DynamicFactorCount
   */

  export type AggregateDynamicFactorCount = {
    _count: DynamicFactorCountCountAggregateOutputType | null
    _avg: DynamicFactorCountAvgAggregateOutputType | null
    _sum: DynamicFactorCountSumAggregateOutputType | null
    _min: DynamicFactorCountMinAggregateOutputType | null
    _max: DynamicFactorCountMaxAggregateOutputType | null
  }

  export type DynamicFactorCountAvgAggregateOutputType = {
    count: number | null
  }

  export type DynamicFactorCountSumAggregateOutputType = {
    count: number | null
  }

  export type DynamicFactorCountMinAggregateOutputType = {
    difficulty: $Enums.Difficulty | null
    count: number | null
  }

  export type DynamicFactorCountMaxAggregateOutputType = {
    difficulty: $Enums.Difficulty | null
    count: number | null
  }

  export type DynamicFactorCountCountAggregateOutputType = {
    difficulty: number
    count: number
    _all: number
  }


  export type DynamicFactorCountAvgAggregateInputType = {
    count?: true
  }

  export type DynamicFactorCountSumAggregateInputType = {
    count?: true
  }

  export type DynamicFactorCountMinAggregateInputType = {
    difficulty?: true
    count?: true
  }

  export type DynamicFactorCountMaxAggregateInputType = {
    difficulty?: true
    count?: true
  }

  export type DynamicFactorCountCountAggregateInputType = {
    difficulty?: true
    count?: true
    _all?: true
  }

  export type DynamicFactorCountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DynamicFactorCount to aggregate.
     */
    where?: DynamicFactorCountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DynamicFactorCounts to fetch.
     */
    orderBy?: DynamicFactorCountOrderByWithRelationInput | DynamicFactorCountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DynamicFactorCountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DynamicFactorCounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DynamicFactorCounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DynamicFactorCounts
    **/
    _count?: true | DynamicFactorCountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DynamicFactorCountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DynamicFactorCountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DynamicFactorCountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DynamicFactorCountMaxAggregateInputType
  }

  export type GetDynamicFactorCountAggregateType<T extends DynamicFactorCountAggregateArgs> = {
        [P in keyof T & keyof AggregateDynamicFactorCount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDynamicFactorCount[P]>
      : GetScalarType<T[P], AggregateDynamicFactorCount[P]>
  }




  export type DynamicFactorCountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DynamicFactorCountWhereInput
    orderBy?: DynamicFactorCountOrderByWithAggregationInput | DynamicFactorCountOrderByWithAggregationInput[]
    by: DynamicFactorCountScalarFieldEnum[] | DynamicFactorCountScalarFieldEnum
    having?: DynamicFactorCountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DynamicFactorCountCountAggregateInputType | true
    _avg?: DynamicFactorCountAvgAggregateInputType
    _sum?: DynamicFactorCountSumAggregateInputType
    _min?: DynamicFactorCountMinAggregateInputType
    _max?: DynamicFactorCountMaxAggregateInputType
  }

  export type DynamicFactorCountGroupByOutputType = {
    difficulty: $Enums.Difficulty
    count: number
    _count: DynamicFactorCountCountAggregateOutputType | null
    _avg: DynamicFactorCountAvgAggregateOutputType | null
    _sum: DynamicFactorCountSumAggregateOutputType | null
    _min: DynamicFactorCountMinAggregateOutputType | null
    _max: DynamicFactorCountMaxAggregateOutputType | null
  }

  type GetDynamicFactorCountGroupByPayload<T extends DynamicFactorCountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DynamicFactorCountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DynamicFactorCountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DynamicFactorCountGroupByOutputType[P]>
            : GetScalarType<T[P], DynamicFactorCountGroupByOutputType[P]>
        }
      >
    >


  export type DynamicFactorCountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    difficulty?: boolean
    count?: boolean
  }, ExtArgs["result"]["dynamicFactorCount"]>

  export type DynamicFactorCountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    difficulty?: boolean
    count?: boolean
  }, ExtArgs["result"]["dynamicFactorCount"]>

  export type DynamicFactorCountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    difficulty?: boolean
    count?: boolean
  }, ExtArgs["result"]["dynamicFactorCount"]>

  export type DynamicFactorCountSelectScalar = {
    difficulty?: boolean
    count?: boolean
  }

  export type DynamicFactorCountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"difficulty" | "count", ExtArgs["result"]["dynamicFactorCount"]>

  export type $DynamicFactorCountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DynamicFactorCount"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      difficulty: $Enums.Difficulty
      count: number
    }, ExtArgs["result"]["dynamicFactorCount"]>
    composites: {}
  }

  type DynamicFactorCountGetPayload<S extends boolean | null | undefined | DynamicFactorCountDefaultArgs> = $Result.GetResult<Prisma.$DynamicFactorCountPayload, S>

  type DynamicFactorCountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DynamicFactorCountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DynamicFactorCountCountAggregateInputType | true
    }

  export interface DynamicFactorCountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DynamicFactorCount'], meta: { name: 'DynamicFactorCount' } }
    /**
     * Find zero or one DynamicFactorCount that matches the filter.
     * @param {DynamicFactorCountFindUniqueArgs} args - Arguments to find a DynamicFactorCount
     * @example
     * // Get one DynamicFactorCount
     * const dynamicFactorCount = await prisma.dynamicFactorCount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DynamicFactorCountFindUniqueArgs>(args: SelectSubset<T, DynamicFactorCountFindUniqueArgs<ExtArgs>>): Prisma__DynamicFactorCountClient<$Result.GetResult<Prisma.$DynamicFactorCountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DynamicFactorCount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DynamicFactorCountFindUniqueOrThrowArgs} args - Arguments to find a DynamicFactorCount
     * @example
     * // Get one DynamicFactorCount
     * const dynamicFactorCount = await prisma.dynamicFactorCount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DynamicFactorCountFindUniqueOrThrowArgs>(args: SelectSubset<T, DynamicFactorCountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DynamicFactorCountClient<$Result.GetResult<Prisma.$DynamicFactorCountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DynamicFactorCount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicFactorCountFindFirstArgs} args - Arguments to find a DynamicFactorCount
     * @example
     * // Get one DynamicFactorCount
     * const dynamicFactorCount = await prisma.dynamicFactorCount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DynamicFactorCountFindFirstArgs>(args?: SelectSubset<T, DynamicFactorCountFindFirstArgs<ExtArgs>>): Prisma__DynamicFactorCountClient<$Result.GetResult<Prisma.$DynamicFactorCountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DynamicFactorCount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicFactorCountFindFirstOrThrowArgs} args - Arguments to find a DynamicFactorCount
     * @example
     * // Get one DynamicFactorCount
     * const dynamicFactorCount = await prisma.dynamicFactorCount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DynamicFactorCountFindFirstOrThrowArgs>(args?: SelectSubset<T, DynamicFactorCountFindFirstOrThrowArgs<ExtArgs>>): Prisma__DynamicFactorCountClient<$Result.GetResult<Prisma.$DynamicFactorCountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DynamicFactorCounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicFactorCountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DynamicFactorCounts
     * const dynamicFactorCounts = await prisma.dynamicFactorCount.findMany()
     * 
     * // Get first 10 DynamicFactorCounts
     * const dynamicFactorCounts = await prisma.dynamicFactorCount.findMany({ take: 10 })
     * 
     * // Only select the `count`
     * const dynamicFactorCountWithCountOnly = await prisma.dynamicFactorCount.findMany({ select: { count: true } })
     * 
     */
    findMany<T extends DynamicFactorCountFindManyArgs>(args?: SelectSubset<T, DynamicFactorCountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DynamicFactorCountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DynamicFactorCount.
     * @param {DynamicFactorCountCreateArgs} args - Arguments to create a DynamicFactorCount.
     * @example
     * // Create one DynamicFactorCount
     * const DynamicFactorCount = await prisma.dynamicFactorCount.create({
     *   data: {
     *     // ... data to create a DynamicFactorCount
     *   }
     * })
     * 
     */
    create<T extends DynamicFactorCountCreateArgs>(args: SelectSubset<T, DynamicFactorCountCreateArgs<ExtArgs>>): Prisma__DynamicFactorCountClient<$Result.GetResult<Prisma.$DynamicFactorCountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DynamicFactorCounts.
     * @param {DynamicFactorCountCreateManyArgs} args - Arguments to create many DynamicFactorCounts.
     * @example
     * // Create many DynamicFactorCounts
     * const dynamicFactorCount = await prisma.dynamicFactorCount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DynamicFactorCountCreateManyArgs>(args?: SelectSubset<T, DynamicFactorCountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DynamicFactorCounts and returns the data saved in the database.
     * @param {DynamicFactorCountCreateManyAndReturnArgs} args - Arguments to create many DynamicFactorCounts.
     * @example
     * // Create many DynamicFactorCounts
     * const dynamicFactorCount = await prisma.dynamicFactorCount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DynamicFactorCounts and only return the `count`
     * const dynamicFactorCountWithCountOnly = await prisma.dynamicFactorCount.createManyAndReturn({
     *   select: { count: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DynamicFactorCountCreateManyAndReturnArgs>(args?: SelectSubset<T, DynamicFactorCountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DynamicFactorCountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DynamicFactorCount.
     * @param {DynamicFactorCountDeleteArgs} args - Arguments to delete one DynamicFactorCount.
     * @example
     * // Delete one DynamicFactorCount
     * const DynamicFactorCount = await prisma.dynamicFactorCount.delete({
     *   where: {
     *     // ... filter to delete one DynamicFactorCount
     *   }
     * })
     * 
     */
    delete<T extends DynamicFactorCountDeleteArgs>(args: SelectSubset<T, DynamicFactorCountDeleteArgs<ExtArgs>>): Prisma__DynamicFactorCountClient<$Result.GetResult<Prisma.$DynamicFactorCountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DynamicFactorCount.
     * @param {DynamicFactorCountUpdateArgs} args - Arguments to update one DynamicFactorCount.
     * @example
     * // Update one DynamicFactorCount
     * const dynamicFactorCount = await prisma.dynamicFactorCount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DynamicFactorCountUpdateArgs>(args: SelectSubset<T, DynamicFactorCountUpdateArgs<ExtArgs>>): Prisma__DynamicFactorCountClient<$Result.GetResult<Prisma.$DynamicFactorCountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DynamicFactorCounts.
     * @param {DynamicFactorCountDeleteManyArgs} args - Arguments to filter DynamicFactorCounts to delete.
     * @example
     * // Delete a few DynamicFactorCounts
     * const { count } = await prisma.dynamicFactorCount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DynamicFactorCountDeleteManyArgs>(args?: SelectSubset<T, DynamicFactorCountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DynamicFactorCounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicFactorCountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DynamicFactorCounts
     * const dynamicFactorCount = await prisma.dynamicFactorCount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DynamicFactorCountUpdateManyArgs>(args: SelectSubset<T, DynamicFactorCountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DynamicFactorCounts and returns the data updated in the database.
     * @param {DynamicFactorCountUpdateManyAndReturnArgs} args - Arguments to update many DynamicFactorCounts.
     * @example
     * // Update many DynamicFactorCounts
     * const dynamicFactorCount = await prisma.dynamicFactorCount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DynamicFactorCounts and only return the `count`
     * const dynamicFactorCountWithCountOnly = await prisma.dynamicFactorCount.updateManyAndReturn({
     *   select: { count: true },
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
    updateManyAndReturn<T extends DynamicFactorCountUpdateManyAndReturnArgs>(args: SelectSubset<T, DynamicFactorCountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DynamicFactorCountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DynamicFactorCount.
     * @param {DynamicFactorCountUpsertArgs} args - Arguments to update or create a DynamicFactorCount.
     * @example
     * // Update or create a DynamicFactorCount
     * const dynamicFactorCount = await prisma.dynamicFactorCount.upsert({
     *   create: {
     *     // ... data to create a DynamicFactorCount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DynamicFactorCount we want to update
     *   }
     * })
     */
    upsert<T extends DynamicFactorCountUpsertArgs>(args: SelectSubset<T, DynamicFactorCountUpsertArgs<ExtArgs>>): Prisma__DynamicFactorCountClient<$Result.GetResult<Prisma.$DynamicFactorCountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DynamicFactorCounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicFactorCountCountArgs} args - Arguments to filter DynamicFactorCounts to count.
     * @example
     * // Count the number of DynamicFactorCounts
     * const count = await prisma.dynamicFactorCount.count({
     *   where: {
     *     // ... the filter for the DynamicFactorCounts we want to count
     *   }
     * })
    **/
    count<T extends DynamicFactorCountCountArgs>(
      args?: Subset<T, DynamicFactorCountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DynamicFactorCountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DynamicFactorCount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicFactorCountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DynamicFactorCountAggregateArgs>(args: Subset<T, DynamicFactorCountAggregateArgs>): Prisma.PrismaPromise<GetDynamicFactorCountAggregateType<T>>

    /**
     * Group by DynamicFactorCount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DynamicFactorCountGroupByArgs} args - Group by arguments.
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
      T extends DynamicFactorCountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DynamicFactorCountGroupByArgs['orderBy'] }
        : { orderBy?: DynamicFactorCountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DynamicFactorCountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDynamicFactorCountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DynamicFactorCount model
   */
  readonly fields: DynamicFactorCountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DynamicFactorCount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DynamicFactorCountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the DynamicFactorCount model
   */
  interface DynamicFactorCountFieldRefs {
    readonly difficulty: FieldRef<"DynamicFactorCount", 'Difficulty'>
    readonly count: FieldRef<"DynamicFactorCount", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DynamicFactorCount findUnique
   */
  export type DynamicFactorCountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicFactorCount
     */
    select?: DynamicFactorCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DynamicFactorCount
     */
    omit?: DynamicFactorCountOmit<ExtArgs> | null
    /**
     * Filter, which DynamicFactorCount to fetch.
     */
    where: DynamicFactorCountWhereUniqueInput
  }

  /**
   * DynamicFactorCount findUniqueOrThrow
   */
  export type DynamicFactorCountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicFactorCount
     */
    select?: DynamicFactorCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DynamicFactorCount
     */
    omit?: DynamicFactorCountOmit<ExtArgs> | null
    /**
     * Filter, which DynamicFactorCount to fetch.
     */
    where: DynamicFactorCountWhereUniqueInput
  }

  /**
   * DynamicFactorCount findFirst
   */
  export type DynamicFactorCountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicFactorCount
     */
    select?: DynamicFactorCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DynamicFactorCount
     */
    omit?: DynamicFactorCountOmit<ExtArgs> | null
    /**
     * Filter, which DynamicFactorCount to fetch.
     */
    where?: DynamicFactorCountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DynamicFactorCounts to fetch.
     */
    orderBy?: DynamicFactorCountOrderByWithRelationInput | DynamicFactorCountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DynamicFactorCounts.
     */
    cursor?: DynamicFactorCountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DynamicFactorCounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DynamicFactorCounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DynamicFactorCounts.
     */
    distinct?: DynamicFactorCountScalarFieldEnum | DynamicFactorCountScalarFieldEnum[]
  }

  /**
   * DynamicFactorCount findFirstOrThrow
   */
  export type DynamicFactorCountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicFactorCount
     */
    select?: DynamicFactorCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DynamicFactorCount
     */
    omit?: DynamicFactorCountOmit<ExtArgs> | null
    /**
     * Filter, which DynamicFactorCount to fetch.
     */
    where?: DynamicFactorCountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DynamicFactorCounts to fetch.
     */
    orderBy?: DynamicFactorCountOrderByWithRelationInput | DynamicFactorCountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DynamicFactorCounts.
     */
    cursor?: DynamicFactorCountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DynamicFactorCounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DynamicFactorCounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DynamicFactorCounts.
     */
    distinct?: DynamicFactorCountScalarFieldEnum | DynamicFactorCountScalarFieldEnum[]
  }

  /**
   * DynamicFactorCount findMany
   */
  export type DynamicFactorCountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicFactorCount
     */
    select?: DynamicFactorCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DynamicFactorCount
     */
    omit?: DynamicFactorCountOmit<ExtArgs> | null
    /**
     * Filter, which DynamicFactorCounts to fetch.
     */
    where?: DynamicFactorCountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DynamicFactorCounts to fetch.
     */
    orderBy?: DynamicFactorCountOrderByWithRelationInput | DynamicFactorCountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DynamicFactorCounts.
     */
    cursor?: DynamicFactorCountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DynamicFactorCounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DynamicFactorCounts.
     */
    skip?: number
    distinct?: DynamicFactorCountScalarFieldEnum | DynamicFactorCountScalarFieldEnum[]
  }

  /**
   * DynamicFactorCount create
   */
  export type DynamicFactorCountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicFactorCount
     */
    select?: DynamicFactorCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DynamicFactorCount
     */
    omit?: DynamicFactorCountOmit<ExtArgs> | null
    /**
     * The data needed to create a DynamicFactorCount.
     */
    data: XOR<DynamicFactorCountCreateInput, DynamicFactorCountUncheckedCreateInput>
  }

  /**
   * DynamicFactorCount createMany
   */
  export type DynamicFactorCountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DynamicFactorCounts.
     */
    data: DynamicFactorCountCreateManyInput | DynamicFactorCountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DynamicFactorCount createManyAndReturn
   */
  export type DynamicFactorCountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicFactorCount
     */
    select?: DynamicFactorCountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DynamicFactorCount
     */
    omit?: DynamicFactorCountOmit<ExtArgs> | null
    /**
     * The data used to create many DynamicFactorCounts.
     */
    data: DynamicFactorCountCreateManyInput | DynamicFactorCountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DynamicFactorCount update
   */
  export type DynamicFactorCountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicFactorCount
     */
    select?: DynamicFactorCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DynamicFactorCount
     */
    omit?: DynamicFactorCountOmit<ExtArgs> | null
    /**
     * The data needed to update a DynamicFactorCount.
     */
    data: XOR<DynamicFactorCountUpdateInput, DynamicFactorCountUncheckedUpdateInput>
    /**
     * Choose, which DynamicFactorCount to update.
     */
    where: DynamicFactorCountWhereUniqueInput
  }

  /**
   * DynamicFactorCount updateMany
   */
  export type DynamicFactorCountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DynamicFactorCounts.
     */
    data: XOR<DynamicFactorCountUpdateManyMutationInput, DynamicFactorCountUncheckedUpdateManyInput>
    /**
     * Filter which DynamicFactorCounts to update
     */
    where?: DynamicFactorCountWhereInput
    /**
     * Limit how many DynamicFactorCounts to update.
     */
    limit?: number
  }

  /**
   * DynamicFactorCount updateManyAndReturn
   */
  export type DynamicFactorCountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicFactorCount
     */
    select?: DynamicFactorCountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DynamicFactorCount
     */
    omit?: DynamicFactorCountOmit<ExtArgs> | null
    /**
     * The data used to update DynamicFactorCounts.
     */
    data: XOR<DynamicFactorCountUpdateManyMutationInput, DynamicFactorCountUncheckedUpdateManyInput>
    /**
     * Filter which DynamicFactorCounts to update
     */
    where?: DynamicFactorCountWhereInput
    /**
     * Limit how many DynamicFactorCounts to update.
     */
    limit?: number
  }

  /**
   * DynamicFactorCount upsert
   */
  export type DynamicFactorCountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicFactorCount
     */
    select?: DynamicFactorCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DynamicFactorCount
     */
    omit?: DynamicFactorCountOmit<ExtArgs> | null
    /**
     * The filter to search for the DynamicFactorCount to update in case it exists.
     */
    where: DynamicFactorCountWhereUniqueInput
    /**
     * In case the DynamicFactorCount found by the `where` argument doesn't exist, create a new DynamicFactorCount with this data.
     */
    create: XOR<DynamicFactorCountCreateInput, DynamicFactorCountUncheckedCreateInput>
    /**
     * In case the DynamicFactorCount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DynamicFactorCountUpdateInput, DynamicFactorCountUncheckedUpdateInput>
  }

  /**
   * DynamicFactorCount delete
   */
  export type DynamicFactorCountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicFactorCount
     */
    select?: DynamicFactorCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DynamicFactorCount
     */
    omit?: DynamicFactorCountOmit<ExtArgs> | null
    /**
     * Filter which DynamicFactorCount to delete.
     */
    where: DynamicFactorCountWhereUniqueInput
  }

  /**
   * DynamicFactorCount deleteMany
   */
  export type DynamicFactorCountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DynamicFactorCounts to delete
     */
    where?: DynamicFactorCountWhereInput
    /**
     * Limit how many DynamicFactorCounts to delete.
     */
    limit?: number
  }

  /**
   * DynamicFactorCount without action
   */
  export type DynamicFactorCountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DynamicFactorCount
     */
    select?: DynamicFactorCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DynamicFactorCount
     */
    omit?: DynamicFactorCountOmit<ExtArgs> | null
  }


  /**
   * Model Game
   */

  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    waveCount: number | null
  }

  export type GameSumAggregateOutputType = {
    id: number | null
    userId: number | null
    waveCount: number | null
  }

  export type GameMinAggregateOutputType = {
    id: number | null
    userId: number | null
    difficulty: $Enums.Difficulty | null
    waveCount: number | null
    createdAt: Date | null
  }

  export type GameMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    difficulty: $Enums.Difficulty | null
    waveCount: number | null
    createdAt: Date | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    userId: number
    difficulty: number
    waveCount: number
    createdAt: number
    _all: number
  }


  export type GameAvgAggregateInputType = {
    id?: true
    userId?: true
    waveCount?: true
  }

  export type GameSumAggregateInputType = {
    id?: true
    userId?: true
    waveCount?: true
  }

  export type GameMinAggregateInputType = {
    id?: true
    userId?: true
    difficulty?: true
    waveCount?: true
    createdAt?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    userId?: true
    difficulty?: true
    waveCount?: true
    createdAt?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    userId?: true
    difficulty?: true
    waveCount?: true
    createdAt?: true
    _all?: true
  }

  export type GameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Game to aggregate.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type GameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
    orderBy?: GameOrderByWithAggregationInput | GameOrderByWithAggregationInput[]
    by: GameScalarFieldEnum[] | GameScalarFieldEnum
    having?: GameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _avg?: GameAvgAggregateInputType
    _sum?: GameSumAggregateInputType
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }

  export type GameGroupByOutputType = {
    id: number
    userId: number
    difficulty: $Enums.Difficulty
    waveCount: number
    createdAt: Date
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends GameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type GameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    difficulty?: boolean
    waveCount?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    cardChoices?: boolean | Game$cardChoicesArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    difficulty?: boolean
    waveCount?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    difficulty?: boolean
    waveCount?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectScalar = {
    id?: boolean
    userId?: boolean
    difficulty?: boolean
    waveCount?: boolean
    createdAt?: boolean
  }

  export type GameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "difficulty" | "waveCount" | "createdAt", ExtArgs["result"]["game"]>
  export type GameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    cardChoices?: boolean | Game$cardChoicesArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GameIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Game"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      cardChoices: Prisma.$CardChoicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      difficulty: $Enums.Difficulty
      waveCount: number
      createdAt: Date
    }, ExtArgs["result"]["game"]>
    composites: {}
  }

  type GameGetPayload<S extends boolean | null | undefined | GameDefaultArgs> = $Result.GetResult<Prisma.$GamePayload, S>

  type GameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameCountAggregateInputType | true
    }

  export interface GameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Game'], meta: { name: 'Game' } }
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameFindUniqueArgs>(args: SelectSubset<T, GameFindUniqueArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Game that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameFindUniqueOrThrowArgs>(args: SelectSubset<T, GameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameFindFirstArgs>(args?: SelectSubset<T, GameFindFirstArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameFindFirstOrThrowArgs>(args?: SelectSubset<T, GameFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameFindManyArgs>(args?: SelectSubset<T, GameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
     */
    create<T extends GameCreateArgs>(args: SelectSubset<T, GameCreateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Games.
     * @param {GameCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameCreateManyArgs>(args?: SelectSubset<T, GameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Games and returns the data saved in the database.
     * @param {GameCreateManyAndReturnArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameCreateManyAndReturnArgs>(args?: SelectSubset<T, GameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
     */
    delete<T extends GameDeleteArgs>(args: SelectSubset<T, GameDeleteArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameUpdateArgs>(args: SelectSubset<T, GameUpdateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameDeleteManyArgs>(args?: SelectSubset<T, GameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameUpdateManyArgs>(args: SelectSubset<T, GameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games and returns the data updated in the database.
     * @param {GameUpdateManyAndReturnArgs} args - Arguments to update many Games.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.updateManyAndReturn({
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
    updateManyAndReturn<T extends GameUpdateManyAndReturnArgs>(args: SelectSubset<T, GameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
     */
    upsert<T extends GameUpsertArgs>(args: SelectSubset<T, GameUpsertArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GameCountArgs>(
      args?: Subset<T, GameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): Prisma.PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGroupByArgs} args - Group by arguments.
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
      T extends GameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameGroupByArgs['orderBy'] }
        : { orderBy?: GameGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Game model
   */
  readonly fields: GameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cardChoices<T extends Game$cardChoicesArgs<ExtArgs> = {}>(args?: Subset<T, Game$cardChoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardChoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Game model
   */
  interface GameFieldRefs {
    readonly id: FieldRef<"Game", 'Int'>
    readonly userId: FieldRef<"Game", 'Int'>
    readonly difficulty: FieldRef<"Game", 'Difficulty'>
    readonly waveCount: FieldRef<"Game", 'Int'>
    readonly createdAt: FieldRef<"Game", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Game findUnique
   */
  export type GameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findUniqueOrThrow
   */
  export type GameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findFirst
   */
  export type GameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findFirstOrThrow
   */
  export type GameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findMany
   */
  export type GameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game create
   */
  export type GameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to create a Game.
     */
    data: XOR<GameCreateInput, GameUncheckedCreateInput>
  }

  /**
   * Game createMany
   */
  export type GameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Game createManyAndReturn
   */
  export type GameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Game update
   */
  export type GameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to update a Game.
     */
    data: XOR<GameUpdateInput, GameUncheckedUpdateInput>
    /**
     * Choose, which Game to update.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game updateMany
   */
  export type GameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Game updateManyAndReturn
   */
  export type GameUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Game upsert
   */
  export type GameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The filter to search for the Game to update in case it exists.
     */
    where: GameWhereUniqueInput
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
     */
    create: XOR<GameCreateInput, GameUncheckedCreateInput>
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameUpdateInput, GameUncheckedUpdateInput>
  }

  /**
   * Game delete
   */
  export type GameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter which Game to delete.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game deleteMany
   */
  export type GameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to delete
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to delete.
     */
    limit?: number
  }

  /**
   * Game.cardChoices
   */
  export type Game$cardChoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardChoice
     */
    select?: CardChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardChoice
     */
    omit?: CardChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardChoiceInclude<ExtArgs> | null
    where?: CardChoiceWhereInput
    orderBy?: CardChoiceOrderByWithRelationInput | CardChoiceOrderByWithRelationInput[]
    cursor?: CardChoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CardChoiceScalarFieldEnum | CardChoiceScalarFieldEnum[]
  }

  /**
   * Game without action
   */
  export type GameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
  }


  /**
   * Model CardChoice
   */

  export type AggregateCardChoice = {
    _count: CardChoiceCountAggregateOutputType | null
    _avg: CardChoiceAvgAggregateOutputType | null
    _sum: CardChoiceSumAggregateOutputType | null
    _min: CardChoiceMinAggregateOutputType | null
    _max: CardChoiceMaxAggregateOutputType | null
  }

  export type CardChoiceAvgAggregateOutputType = {
    id: number | null
    gameId: number | null
    waveNumber: number | null
    offeredCards: number | null
    selectedCard: number | null
  }

  export type CardChoiceSumAggregateOutputType = {
    id: number | null
    gameId: number | null
    waveNumber: number | null
    offeredCards: number[]
    selectedCard: number | null
  }

  export type CardChoiceMinAggregateOutputType = {
    id: number | null
    gameId: number | null
    waveNumber: number | null
    cardType: $Enums.CardType | null
    selectedCard: number | null
    createdAt: Date | null
  }

  export type CardChoiceMaxAggregateOutputType = {
    id: number | null
    gameId: number | null
    waveNumber: number | null
    cardType: $Enums.CardType | null
    selectedCard: number | null
    createdAt: Date | null
  }

  export type CardChoiceCountAggregateOutputType = {
    id: number
    gameId: number
    waveNumber: number
    cardType: number
    offeredCards: number
    selectedCard: number
    createdAt: number
    _all: number
  }


  export type CardChoiceAvgAggregateInputType = {
    id?: true
    gameId?: true
    waveNumber?: true
    offeredCards?: true
    selectedCard?: true
  }

  export type CardChoiceSumAggregateInputType = {
    id?: true
    gameId?: true
    waveNumber?: true
    offeredCards?: true
    selectedCard?: true
  }

  export type CardChoiceMinAggregateInputType = {
    id?: true
    gameId?: true
    waveNumber?: true
    cardType?: true
    selectedCard?: true
    createdAt?: true
  }

  export type CardChoiceMaxAggregateInputType = {
    id?: true
    gameId?: true
    waveNumber?: true
    cardType?: true
    selectedCard?: true
    createdAt?: true
  }

  export type CardChoiceCountAggregateInputType = {
    id?: true
    gameId?: true
    waveNumber?: true
    cardType?: true
    offeredCards?: true
    selectedCard?: true
    createdAt?: true
    _all?: true
  }

  export type CardChoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CardChoice to aggregate.
     */
    where?: CardChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardChoices to fetch.
     */
    orderBy?: CardChoiceOrderByWithRelationInput | CardChoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CardChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardChoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardChoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CardChoices
    **/
    _count?: true | CardChoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CardChoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CardChoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardChoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardChoiceMaxAggregateInputType
  }

  export type GetCardChoiceAggregateType<T extends CardChoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateCardChoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCardChoice[P]>
      : GetScalarType<T[P], AggregateCardChoice[P]>
  }




  export type CardChoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardChoiceWhereInput
    orderBy?: CardChoiceOrderByWithAggregationInput | CardChoiceOrderByWithAggregationInput[]
    by: CardChoiceScalarFieldEnum[] | CardChoiceScalarFieldEnum
    having?: CardChoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardChoiceCountAggregateInputType | true
    _avg?: CardChoiceAvgAggregateInputType
    _sum?: CardChoiceSumAggregateInputType
    _min?: CardChoiceMinAggregateInputType
    _max?: CardChoiceMaxAggregateInputType
  }

  export type CardChoiceGroupByOutputType = {
    id: number
    gameId: number
    waveNumber: number
    cardType: $Enums.CardType
    offeredCards: number[]
    selectedCard: number
    createdAt: Date
    _count: CardChoiceCountAggregateOutputType | null
    _avg: CardChoiceAvgAggregateOutputType | null
    _sum: CardChoiceSumAggregateOutputType | null
    _min: CardChoiceMinAggregateOutputType | null
    _max: CardChoiceMaxAggregateOutputType | null
  }

  type GetCardChoiceGroupByPayload<T extends CardChoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardChoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardChoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardChoiceGroupByOutputType[P]>
            : GetScalarType<T[P], CardChoiceGroupByOutputType[P]>
        }
      >
    >


  export type CardChoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    waveNumber?: boolean
    cardType?: boolean
    offeredCards?: boolean
    selectedCard?: boolean
    createdAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardChoice"]>

  export type CardChoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    waveNumber?: boolean
    cardType?: boolean
    offeredCards?: boolean
    selectedCard?: boolean
    createdAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardChoice"]>

  export type CardChoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    waveNumber?: boolean
    cardType?: boolean
    offeredCards?: boolean
    selectedCard?: boolean
    createdAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardChoice"]>

  export type CardChoiceSelectScalar = {
    id?: boolean
    gameId?: boolean
    waveNumber?: boolean
    cardType?: boolean
    offeredCards?: boolean
    selectedCard?: boolean
    createdAt?: boolean
  }

  export type CardChoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gameId" | "waveNumber" | "cardType" | "offeredCards" | "selectedCard" | "createdAt", ExtArgs["result"]["cardChoice"]>
  export type CardChoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type CardChoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type CardChoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }

  export type $CardChoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CardChoice"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      gameId: number
      waveNumber: number
      cardType: $Enums.CardType
      offeredCards: number[]
      selectedCard: number
      createdAt: Date
    }, ExtArgs["result"]["cardChoice"]>
    composites: {}
  }

  type CardChoiceGetPayload<S extends boolean | null | undefined | CardChoiceDefaultArgs> = $Result.GetResult<Prisma.$CardChoicePayload, S>

  type CardChoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CardChoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CardChoiceCountAggregateInputType | true
    }

  export interface CardChoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CardChoice'], meta: { name: 'CardChoice' } }
    /**
     * Find zero or one CardChoice that matches the filter.
     * @param {CardChoiceFindUniqueArgs} args - Arguments to find a CardChoice
     * @example
     * // Get one CardChoice
     * const cardChoice = await prisma.cardChoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardChoiceFindUniqueArgs>(args: SelectSubset<T, CardChoiceFindUniqueArgs<ExtArgs>>): Prisma__CardChoiceClient<$Result.GetResult<Prisma.$CardChoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CardChoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CardChoiceFindUniqueOrThrowArgs} args - Arguments to find a CardChoice
     * @example
     * // Get one CardChoice
     * const cardChoice = await prisma.cardChoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardChoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, CardChoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CardChoiceClient<$Result.GetResult<Prisma.$CardChoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CardChoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardChoiceFindFirstArgs} args - Arguments to find a CardChoice
     * @example
     * // Get one CardChoice
     * const cardChoice = await prisma.cardChoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardChoiceFindFirstArgs>(args?: SelectSubset<T, CardChoiceFindFirstArgs<ExtArgs>>): Prisma__CardChoiceClient<$Result.GetResult<Prisma.$CardChoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CardChoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardChoiceFindFirstOrThrowArgs} args - Arguments to find a CardChoice
     * @example
     * // Get one CardChoice
     * const cardChoice = await prisma.cardChoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardChoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, CardChoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__CardChoiceClient<$Result.GetResult<Prisma.$CardChoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CardChoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardChoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CardChoices
     * const cardChoices = await prisma.cardChoice.findMany()
     * 
     * // Get first 10 CardChoices
     * const cardChoices = await prisma.cardChoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cardChoiceWithIdOnly = await prisma.cardChoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CardChoiceFindManyArgs>(args?: SelectSubset<T, CardChoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardChoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CardChoice.
     * @param {CardChoiceCreateArgs} args - Arguments to create a CardChoice.
     * @example
     * // Create one CardChoice
     * const CardChoice = await prisma.cardChoice.create({
     *   data: {
     *     // ... data to create a CardChoice
     *   }
     * })
     * 
     */
    create<T extends CardChoiceCreateArgs>(args: SelectSubset<T, CardChoiceCreateArgs<ExtArgs>>): Prisma__CardChoiceClient<$Result.GetResult<Prisma.$CardChoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CardChoices.
     * @param {CardChoiceCreateManyArgs} args - Arguments to create many CardChoices.
     * @example
     * // Create many CardChoices
     * const cardChoice = await prisma.cardChoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CardChoiceCreateManyArgs>(args?: SelectSubset<T, CardChoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CardChoices and returns the data saved in the database.
     * @param {CardChoiceCreateManyAndReturnArgs} args - Arguments to create many CardChoices.
     * @example
     * // Create many CardChoices
     * const cardChoice = await prisma.cardChoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CardChoices and only return the `id`
     * const cardChoiceWithIdOnly = await prisma.cardChoice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CardChoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, CardChoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardChoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CardChoice.
     * @param {CardChoiceDeleteArgs} args - Arguments to delete one CardChoice.
     * @example
     * // Delete one CardChoice
     * const CardChoice = await prisma.cardChoice.delete({
     *   where: {
     *     // ... filter to delete one CardChoice
     *   }
     * })
     * 
     */
    delete<T extends CardChoiceDeleteArgs>(args: SelectSubset<T, CardChoiceDeleteArgs<ExtArgs>>): Prisma__CardChoiceClient<$Result.GetResult<Prisma.$CardChoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CardChoice.
     * @param {CardChoiceUpdateArgs} args - Arguments to update one CardChoice.
     * @example
     * // Update one CardChoice
     * const cardChoice = await prisma.cardChoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CardChoiceUpdateArgs>(args: SelectSubset<T, CardChoiceUpdateArgs<ExtArgs>>): Prisma__CardChoiceClient<$Result.GetResult<Prisma.$CardChoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CardChoices.
     * @param {CardChoiceDeleteManyArgs} args - Arguments to filter CardChoices to delete.
     * @example
     * // Delete a few CardChoices
     * const { count } = await prisma.cardChoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CardChoiceDeleteManyArgs>(args?: SelectSubset<T, CardChoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CardChoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardChoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CardChoices
     * const cardChoice = await prisma.cardChoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CardChoiceUpdateManyArgs>(args: SelectSubset<T, CardChoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CardChoices and returns the data updated in the database.
     * @param {CardChoiceUpdateManyAndReturnArgs} args - Arguments to update many CardChoices.
     * @example
     * // Update many CardChoices
     * const cardChoice = await prisma.cardChoice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CardChoices and only return the `id`
     * const cardChoiceWithIdOnly = await prisma.cardChoice.updateManyAndReturn({
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
    updateManyAndReturn<T extends CardChoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, CardChoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardChoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CardChoice.
     * @param {CardChoiceUpsertArgs} args - Arguments to update or create a CardChoice.
     * @example
     * // Update or create a CardChoice
     * const cardChoice = await prisma.cardChoice.upsert({
     *   create: {
     *     // ... data to create a CardChoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CardChoice we want to update
     *   }
     * })
     */
    upsert<T extends CardChoiceUpsertArgs>(args: SelectSubset<T, CardChoiceUpsertArgs<ExtArgs>>): Prisma__CardChoiceClient<$Result.GetResult<Prisma.$CardChoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CardChoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardChoiceCountArgs} args - Arguments to filter CardChoices to count.
     * @example
     * // Count the number of CardChoices
     * const count = await prisma.cardChoice.count({
     *   where: {
     *     // ... the filter for the CardChoices we want to count
     *   }
     * })
    **/
    count<T extends CardChoiceCountArgs>(
      args?: Subset<T, CardChoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardChoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CardChoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardChoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CardChoiceAggregateArgs>(args: Subset<T, CardChoiceAggregateArgs>): Prisma.PrismaPromise<GetCardChoiceAggregateType<T>>

    /**
     * Group by CardChoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardChoiceGroupByArgs} args - Group by arguments.
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
      T extends CardChoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardChoiceGroupByArgs['orderBy'] }
        : { orderBy?: CardChoiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CardChoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardChoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CardChoice model
   */
  readonly fields: CardChoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CardChoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CardChoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CardChoice model
   */
  interface CardChoiceFieldRefs {
    readonly id: FieldRef<"CardChoice", 'Int'>
    readonly gameId: FieldRef<"CardChoice", 'Int'>
    readonly waveNumber: FieldRef<"CardChoice", 'Int'>
    readonly cardType: FieldRef<"CardChoice", 'CardType'>
    readonly offeredCards: FieldRef<"CardChoice", 'Int[]'>
    readonly selectedCard: FieldRef<"CardChoice", 'Int'>
    readonly createdAt: FieldRef<"CardChoice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CardChoice findUnique
   */
  export type CardChoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardChoice
     */
    select?: CardChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardChoice
     */
    omit?: CardChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardChoiceInclude<ExtArgs> | null
    /**
     * Filter, which CardChoice to fetch.
     */
    where: CardChoiceWhereUniqueInput
  }

  /**
   * CardChoice findUniqueOrThrow
   */
  export type CardChoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardChoice
     */
    select?: CardChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardChoice
     */
    omit?: CardChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardChoiceInclude<ExtArgs> | null
    /**
     * Filter, which CardChoice to fetch.
     */
    where: CardChoiceWhereUniqueInput
  }

  /**
   * CardChoice findFirst
   */
  export type CardChoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardChoice
     */
    select?: CardChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardChoice
     */
    omit?: CardChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardChoiceInclude<ExtArgs> | null
    /**
     * Filter, which CardChoice to fetch.
     */
    where?: CardChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardChoices to fetch.
     */
    orderBy?: CardChoiceOrderByWithRelationInput | CardChoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CardChoices.
     */
    cursor?: CardChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardChoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardChoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CardChoices.
     */
    distinct?: CardChoiceScalarFieldEnum | CardChoiceScalarFieldEnum[]
  }

  /**
   * CardChoice findFirstOrThrow
   */
  export type CardChoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardChoice
     */
    select?: CardChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardChoice
     */
    omit?: CardChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardChoiceInclude<ExtArgs> | null
    /**
     * Filter, which CardChoice to fetch.
     */
    where?: CardChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardChoices to fetch.
     */
    orderBy?: CardChoiceOrderByWithRelationInput | CardChoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CardChoices.
     */
    cursor?: CardChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardChoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardChoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CardChoices.
     */
    distinct?: CardChoiceScalarFieldEnum | CardChoiceScalarFieldEnum[]
  }

  /**
   * CardChoice findMany
   */
  export type CardChoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardChoice
     */
    select?: CardChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardChoice
     */
    omit?: CardChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardChoiceInclude<ExtArgs> | null
    /**
     * Filter, which CardChoices to fetch.
     */
    where?: CardChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardChoices to fetch.
     */
    orderBy?: CardChoiceOrderByWithRelationInput | CardChoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CardChoices.
     */
    cursor?: CardChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardChoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardChoices.
     */
    skip?: number
    distinct?: CardChoiceScalarFieldEnum | CardChoiceScalarFieldEnum[]
  }

  /**
   * CardChoice create
   */
  export type CardChoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardChoice
     */
    select?: CardChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardChoice
     */
    omit?: CardChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardChoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a CardChoice.
     */
    data: XOR<CardChoiceCreateInput, CardChoiceUncheckedCreateInput>
  }

  /**
   * CardChoice createMany
   */
  export type CardChoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CardChoices.
     */
    data: CardChoiceCreateManyInput | CardChoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CardChoice createManyAndReturn
   */
  export type CardChoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardChoice
     */
    select?: CardChoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CardChoice
     */
    omit?: CardChoiceOmit<ExtArgs> | null
    /**
     * The data used to create many CardChoices.
     */
    data: CardChoiceCreateManyInput | CardChoiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardChoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CardChoice update
   */
  export type CardChoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardChoice
     */
    select?: CardChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardChoice
     */
    omit?: CardChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardChoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a CardChoice.
     */
    data: XOR<CardChoiceUpdateInput, CardChoiceUncheckedUpdateInput>
    /**
     * Choose, which CardChoice to update.
     */
    where: CardChoiceWhereUniqueInput
  }

  /**
   * CardChoice updateMany
   */
  export type CardChoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CardChoices.
     */
    data: XOR<CardChoiceUpdateManyMutationInput, CardChoiceUncheckedUpdateManyInput>
    /**
     * Filter which CardChoices to update
     */
    where?: CardChoiceWhereInput
    /**
     * Limit how many CardChoices to update.
     */
    limit?: number
  }

  /**
   * CardChoice updateManyAndReturn
   */
  export type CardChoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardChoice
     */
    select?: CardChoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CardChoice
     */
    omit?: CardChoiceOmit<ExtArgs> | null
    /**
     * The data used to update CardChoices.
     */
    data: XOR<CardChoiceUpdateManyMutationInput, CardChoiceUncheckedUpdateManyInput>
    /**
     * Filter which CardChoices to update
     */
    where?: CardChoiceWhereInput
    /**
     * Limit how many CardChoices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardChoiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CardChoice upsert
   */
  export type CardChoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardChoice
     */
    select?: CardChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardChoice
     */
    omit?: CardChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardChoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the CardChoice to update in case it exists.
     */
    where: CardChoiceWhereUniqueInput
    /**
     * In case the CardChoice found by the `where` argument doesn't exist, create a new CardChoice with this data.
     */
    create: XOR<CardChoiceCreateInput, CardChoiceUncheckedCreateInput>
    /**
     * In case the CardChoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CardChoiceUpdateInput, CardChoiceUncheckedUpdateInput>
  }

  /**
   * CardChoice delete
   */
  export type CardChoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardChoice
     */
    select?: CardChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardChoice
     */
    omit?: CardChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardChoiceInclude<ExtArgs> | null
    /**
     * Filter which CardChoice to delete.
     */
    where: CardChoiceWhereUniqueInput
  }

  /**
   * CardChoice deleteMany
   */
  export type CardChoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CardChoices to delete
     */
    where?: CardChoiceWhereInput
    /**
     * Limit how many CardChoices to delete.
     */
    limit?: number
  }

  /**
   * CardChoice without action
   */
  export type CardChoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardChoice
     */
    select?: CardChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardChoice
     */
    omit?: CardChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardChoiceInclude<ExtArgs> | null
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
    address: 'address',
    createdAt: 'createdAt',
    codeId: 'codeId',
    password: 'password',
    role: 'role',
    token1Amount: 'token1Amount',
    token2Amount: 'token2Amount'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CodeScalarFieldEnum: {
    id: 'id',
    code: 'code',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type CodeScalarFieldEnum = (typeof CodeScalarFieldEnum)[keyof typeof CodeScalarFieldEnum]


  export const PoolScalarFieldEnum: {
    id: 'id',
    updatedAt: 'updatedAt',
    token1Amount: 'token1Amount',
    token2Amount: 'token2Amount',
    token1SavedFee: 'token1SavedFee',
    token2SavedFee: 'token2SavedFee'
  };

  export type PoolScalarFieldEnum = (typeof PoolScalarFieldEnum)[keyof typeof PoolScalarFieldEnum]


  export const PoolTreasuryScalarFieldEnum: {
    id: 'id',
    token1Amount: 'token1Amount',
    token2Amount: 'token2Amount',
    createdAt: 'createdAt'
  };

  export type PoolTreasuryScalarFieldEnum = (typeof PoolTreasuryScalarFieldEnum)[keyof typeof PoolTreasuryScalarFieldEnum]


  export const GameResultLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    totalMonstersKilled: 'totalMonstersKilled',
    createdAt: 'createdAt',
    difficulty: 'difficulty',
    lastWave: 'lastWave'
  };

  export type GameResultLogScalarFieldEnum = (typeof GameResultLogScalarFieldEnum)[keyof typeof GameResultLogScalarFieldEnum]


  export const GameTreasuryScalarFieldEnum: {
    id: 'id',
    token2Amount: 'token2Amount',
    createdAt: 'createdAt'
  };

  export type GameTreasuryScalarFieldEnum = (typeof GameTreasuryScalarFieldEnum)[keyof typeof GameTreasuryScalarFieldEnum]


  export const DynamicAdjustmentFactorScalarFieldEnum: {
    id: 'id',
    difficulty: 'difficulty',
    factorValue: 'factorValue',
    resultIds: 'resultIds',
    createdAt: 'createdAt'
  };

  export type DynamicAdjustmentFactorScalarFieldEnum = (typeof DynamicAdjustmentFactorScalarFieldEnum)[keyof typeof DynamicAdjustmentFactorScalarFieldEnum]


  export const DynamicFactorCountScalarFieldEnum: {
    difficulty: 'difficulty',
    count: 'count'
  };

  export type DynamicFactorCountScalarFieldEnum = (typeof DynamicFactorCountScalarFieldEnum)[keyof typeof DynamicFactorCountScalarFieldEnum]


  export const GameScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    difficulty: 'difficulty',
    waveCount: 'waveCount',
    createdAt: 'createdAt'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const CardChoiceScalarFieldEnum: {
    id: 'id',
    gameId: 'gameId',
    waveNumber: 'waveNumber',
    cardType: 'cardType',
    offeredCards: 'offeredCards',
    selectedCard: 'selectedCard',
    createdAt: 'createdAt'
  };

  export type CardChoiceScalarFieldEnum = (typeof CardChoiceScalarFieldEnum)[keyof typeof CardChoiceScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Difficulty'
   */
  export type EnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty'>
    


  /**
   * Reference to a field of type 'Difficulty[]'
   */
  export type ListEnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty[]'>
    


  /**
   * Reference to a field of type 'CardType'
   */
  export type EnumCardTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CardType'>
    


  /**
   * Reference to a field of type 'CardType[]'
   */
  export type ListEnumCardTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CardType[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    address?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    codeId?: IntFilter<"User"> | number
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    token1Amount?: FloatFilter<"User"> | number
    token2Amount?: FloatFilter<"User"> | number
    gameResults?: GameResultLogListRelationFilter
    games?: GameListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    codeId?: SortOrder
    password?: SortOrder
    role?: SortOrder
    token1Amount?: SortOrder
    token2Amount?: SortOrder
    gameResults?: GameResultLogOrderByRelationAggregateInput
    games?: GameOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    address?: string
    codeId?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    token1Amount?: FloatFilter<"User"> | number
    token2Amount?: FloatFilter<"User"> | number
    gameResults?: GameResultLogListRelationFilter
    games?: GameListRelationFilter
  }, "id" | "address" | "codeId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    codeId?: SortOrder
    password?: SortOrder
    role?: SortOrder
    token1Amount?: SortOrder
    token2Amount?: SortOrder
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
    id?: IntWithAggregatesFilter<"User"> | number
    address?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    codeId?: IntWithAggregatesFilter<"User"> | number
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    token1Amount?: FloatWithAggregatesFilter<"User"> | number
    token2Amount?: FloatWithAggregatesFilter<"User"> | number
  }

  export type CodeWhereInput = {
    AND?: CodeWhereInput | CodeWhereInput[]
    OR?: CodeWhereInput[]
    NOT?: CodeWhereInput | CodeWhereInput[]
    id?: IntFilter<"Code"> | number
    code?: StringFilter<"Code"> | string
    userId?: IntNullableFilter<"Code"> | number | null
    createdAt?: DateTimeFilter<"Code"> | Date | string
  }

  export type CodeOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type CodeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: CodeWhereInput | CodeWhereInput[]
    OR?: CodeWhereInput[]
    NOT?: CodeWhereInput | CodeWhereInput[]
    userId?: IntNullableFilter<"Code"> | number | null
    createdAt?: DateTimeFilter<"Code"> | Date | string
  }, "id" | "code">

  export type CodeOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CodeCountOrderByAggregateInput
    _avg?: CodeAvgOrderByAggregateInput
    _max?: CodeMaxOrderByAggregateInput
    _min?: CodeMinOrderByAggregateInput
    _sum?: CodeSumOrderByAggregateInput
  }

  export type CodeScalarWhereWithAggregatesInput = {
    AND?: CodeScalarWhereWithAggregatesInput | CodeScalarWhereWithAggregatesInput[]
    OR?: CodeScalarWhereWithAggregatesInput[]
    NOT?: CodeScalarWhereWithAggregatesInput | CodeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Code"> | number
    code?: StringWithAggregatesFilter<"Code"> | string
    userId?: IntNullableWithAggregatesFilter<"Code"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Code"> | Date | string
  }

  export type PoolWhereInput = {
    AND?: PoolWhereInput | PoolWhereInput[]
    OR?: PoolWhereInput[]
    NOT?: PoolWhereInput | PoolWhereInput[]
    id?: IntFilter<"Pool"> | number
    updatedAt?: DateTimeFilter<"Pool"> | Date | string
    token1Amount?: FloatFilter<"Pool"> | number
    token2Amount?: FloatFilter<"Pool"> | number
    token1SavedFee?: FloatFilter<"Pool"> | number
    token2SavedFee?: FloatFilter<"Pool"> | number
  }

  export type PoolOrderByWithRelationInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    token1Amount?: SortOrder
    token2Amount?: SortOrder
    token1SavedFee?: SortOrder
    token2SavedFee?: SortOrder
  }

  export type PoolWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PoolWhereInput | PoolWhereInput[]
    OR?: PoolWhereInput[]
    NOT?: PoolWhereInput | PoolWhereInput[]
    updatedAt?: DateTimeFilter<"Pool"> | Date | string
    token1Amount?: FloatFilter<"Pool"> | number
    token2Amount?: FloatFilter<"Pool"> | number
    token1SavedFee?: FloatFilter<"Pool"> | number
    token2SavedFee?: FloatFilter<"Pool"> | number
  }, "id">

  export type PoolOrderByWithAggregationInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    token1Amount?: SortOrder
    token2Amount?: SortOrder
    token1SavedFee?: SortOrder
    token2SavedFee?: SortOrder
    _count?: PoolCountOrderByAggregateInput
    _avg?: PoolAvgOrderByAggregateInput
    _max?: PoolMaxOrderByAggregateInput
    _min?: PoolMinOrderByAggregateInput
    _sum?: PoolSumOrderByAggregateInput
  }

  export type PoolScalarWhereWithAggregatesInput = {
    AND?: PoolScalarWhereWithAggregatesInput | PoolScalarWhereWithAggregatesInput[]
    OR?: PoolScalarWhereWithAggregatesInput[]
    NOT?: PoolScalarWhereWithAggregatesInput | PoolScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pool"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"Pool"> | Date | string
    token1Amount?: FloatWithAggregatesFilter<"Pool"> | number
    token2Amount?: FloatWithAggregatesFilter<"Pool"> | number
    token1SavedFee?: FloatWithAggregatesFilter<"Pool"> | number
    token2SavedFee?: FloatWithAggregatesFilter<"Pool"> | number
  }

  export type PoolTreasuryWhereInput = {
    AND?: PoolTreasuryWhereInput | PoolTreasuryWhereInput[]
    OR?: PoolTreasuryWhereInput[]
    NOT?: PoolTreasuryWhereInput | PoolTreasuryWhereInput[]
    id?: IntFilter<"PoolTreasury"> | number
    token1Amount?: FloatFilter<"PoolTreasury"> | number
    token2Amount?: FloatFilter<"PoolTreasury"> | number
    createdAt?: DateTimeFilter<"PoolTreasury"> | Date | string
  }

  export type PoolTreasuryOrderByWithRelationInput = {
    id?: SortOrder
    token1Amount?: SortOrder
    token2Amount?: SortOrder
    createdAt?: SortOrder
  }

  export type PoolTreasuryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PoolTreasuryWhereInput | PoolTreasuryWhereInput[]
    OR?: PoolTreasuryWhereInput[]
    NOT?: PoolTreasuryWhereInput | PoolTreasuryWhereInput[]
    token1Amount?: FloatFilter<"PoolTreasury"> | number
    token2Amount?: FloatFilter<"PoolTreasury"> | number
    createdAt?: DateTimeFilter<"PoolTreasury"> | Date | string
  }, "id">

  export type PoolTreasuryOrderByWithAggregationInput = {
    id?: SortOrder
    token1Amount?: SortOrder
    token2Amount?: SortOrder
    createdAt?: SortOrder
    _count?: PoolTreasuryCountOrderByAggregateInput
    _avg?: PoolTreasuryAvgOrderByAggregateInput
    _max?: PoolTreasuryMaxOrderByAggregateInput
    _min?: PoolTreasuryMinOrderByAggregateInput
    _sum?: PoolTreasurySumOrderByAggregateInput
  }

  export type PoolTreasuryScalarWhereWithAggregatesInput = {
    AND?: PoolTreasuryScalarWhereWithAggregatesInput | PoolTreasuryScalarWhereWithAggregatesInput[]
    OR?: PoolTreasuryScalarWhereWithAggregatesInput[]
    NOT?: PoolTreasuryScalarWhereWithAggregatesInput | PoolTreasuryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PoolTreasury"> | number
    token1Amount?: FloatWithAggregatesFilter<"PoolTreasury"> | number
    token2Amount?: FloatWithAggregatesFilter<"PoolTreasury"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PoolTreasury"> | Date | string
  }

  export type GameResultLogWhereInput = {
    AND?: GameResultLogWhereInput | GameResultLogWhereInput[]
    OR?: GameResultLogWhereInput[]
    NOT?: GameResultLogWhereInput | GameResultLogWhereInput[]
    id?: IntFilter<"GameResultLog"> | number
    userId?: IntFilter<"GameResultLog"> | number
    totalMonstersKilled?: IntFilter<"GameResultLog"> | number
    createdAt?: DateTimeFilter<"GameResultLog"> | Date | string
    difficulty?: EnumDifficultyFilter<"GameResultLog"> | $Enums.Difficulty
    lastWave?: IntFilter<"GameResultLog"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GameResultLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    totalMonstersKilled?: SortOrder
    createdAt?: SortOrder
    difficulty?: SortOrder
    lastWave?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type GameResultLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GameResultLogWhereInput | GameResultLogWhereInput[]
    OR?: GameResultLogWhereInput[]
    NOT?: GameResultLogWhereInput | GameResultLogWhereInput[]
    userId?: IntFilter<"GameResultLog"> | number
    totalMonstersKilled?: IntFilter<"GameResultLog"> | number
    createdAt?: DateTimeFilter<"GameResultLog"> | Date | string
    difficulty?: EnumDifficultyFilter<"GameResultLog"> | $Enums.Difficulty
    lastWave?: IntFilter<"GameResultLog"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type GameResultLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    totalMonstersKilled?: SortOrder
    createdAt?: SortOrder
    difficulty?: SortOrder
    lastWave?: SortOrder
    _count?: GameResultLogCountOrderByAggregateInput
    _avg?: GameResultLogAvgOrderByAggregateInput
    _max?: GameResultLogMaxOrderByAggregateInput
    _min?: GameResultLogMinOrderByAggregateInput
    _sum?: GameResultLogSumOrderByAggregateInput
  }

  export type GameResultLogScalarWhereWithAggregatesInput = {
    AND?: GameResultLogScalarWhereWithAggregatesInput | GameResultLogScalarWhereWithAggregatesInput[]
    OR?: GameResultLogScalarWhereWithAggregatesInput[]
    NOT?: GameResultLogScalarWhereWithAggregatesInput | GameResultLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GameResultLog"> | number
    userId?: IntWithAggregatesFilter<"GameResultLog"> | number
    totalMonstersKilled?: IntWithAggregatesFilter<"GameResultLog"> | number
    createdAt?: DateTimeWithAggregatesFilter<"GameResultLog"> | Date | string
    difficulty?: EnumDifficultyWithAggregatesFilter<"GameResultLog"> | $Enums.Difficulty
    lastWave?: IntWithAggregatesFilter<"GameResultLog"> | number
  }

  export type GameTreasuryWhereInput = {
    AND?: GameTreasuryWhereInput | GameTreasuryWhereInput[]
    OR?: GameTreasuryWhereInput[]
    NOT?: GameTreasuryWhereInput | GameTreasuryWhereInput[]
    id?: IntFilter<"GameTreasury"> | number
    token2Amount?: FloatFilter<"GameTreasury"> | number
    createdAt?: DateTimeFilter<"GameTreasury"> | Date | string
  }

  export type GameTreasuryOrderByWithRelationInput = {
    id?: SortOrder
    token2Amount?: SortOrder
    createdAt?: SortOrder
  }

  export type GameTreasuryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GameTreasuryWhereInput | GameTreasuryWhereInput[]
    OR?: GameTreasuryWhereInput[]
    NOT?: GameTreasuryWhereInput | GameTreasuryWhereInput[]
    token2Amount?: FloatFilter<"GameTreasury"> | number
    createdAt?: DateTimeFilter<"GameTreasury"> | Date | string
  }, "id">

  export type GameTreasuryOrderByWithAggregationInput = {
    id?: SortOrder
    token2Amount?: SortOrder
    createdAt?: SortOrder
    _count?: GameTreasuryCountOrderByAggregateInput
    _avg?: GameTreasuryAvgOrderByAggregateInput
    _max?: GameTreasuryMaxOrderByAggregateInput
    _min?: GameTreasuryMinOrderByAggregateInput
    _sum?: GameTreasurySumOrderByAggregateInput
  }

  export type GameTreasuryScalarWhereWithAggregatesInput = {
    AND?: GameTreasuryScalarWhereWithAggregatesInput | GameTreasuryScalarWhereWithAggregatesInput[]
    OR?: GameTreasuryScalarWhereWithAggregatesInput[]
    NOT?: GameTreasuryScalarWhereWithAggregatesInput | GameTreasuryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GameTreasury"> | number
    token2Amount?: FloatWithAggregatesFilter<"GameTreasury"> | number
    createdAt?: DateTimeWithAggregatesFilter<"GameTreasury"> | Date | string
  }

  export type DynamicAdjustmentFactorWhereInput = {
    AND?: DynamicAdjustmentFactorWhereInput | DynamicAdjustmentFactorWhereInput[]
    OR?: DynamicAdjustmentFactorWhereInput[]
    NOT?: DynamicAdjustmentFactorWhereInput | DynamicAdjustmentFactorWhereInput[]
    id?: IntFilter<"DynamicAdjustmentFactor"> | number
    difficulty?: EnumDifficultyFilter<"DynamicAdjustmentFactor"> | $Enums.Difficulty
    factorValue?: FloatFilter<"DynamicAdjustmentFactor"> | number
    resultIds?: IntNullableListFilter<"DynamicAdjustmentFactor">
    createdAt?: DateTimeFilter<"DynamicAdjustmentFactor"> | Date | string
  }

  export type DynamicAdjustmentFactorOrderByWithRelationInput = {
    id?: SortOrder
    difficulty?: SortOrder
    factorValue?: SortOrder
    resultIds?: SortOrder
    createdAt?: SortOrder
  }

  export type DynamicAdjustmentFactorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DynamicAdjustmentFactorWhereInput | DynamicAdjustmentFactorWhereInput[]
    OR?: DynamicAdjustmentFactorWhereInput[]
    NOT?: DynamicAdjustmentFactorWhereInput | DynamicAdjustmentFactorWhereInput[]
    difficulty?: EnumDifficultyFilter<"DynamicAdjustmentFactor"> | $Enums.Difficulty
    factorValue?: FloatFilter<"DynamicAdjustmentFactor"> | number
    resultIds?: IntNullableListFilter<"DynamicAdjustmentFactor">
    createdAt?: DateTimeFilter<"DynamicAdjustmentFactor"> | Date | string
  }, "id">

  export type DynamicAdjustmentFactorOrderByWithAggregationInput = {
    id?: SortOrder
    difficulty?: SortOrder
    factorValue?: SortOrder
    resultIds?: SortOrder
    createdAt?: SortOrder
    _count?: DynamicAdjustmentFactorCountOrderByAggregateInput
    _avg?: DynamicAdjustmentFactorAvgOrderByAggregateInput
    _max?: DynamicAdjustmentFactorMaxOrderByAggregateInput
    _min?: DynamicAdjustmentFactorMinOrderByAggregateInput
    _sum?: DynamicAdjustmentFactorSumOrderByAggregateInput
  }

  export type DynamicAdjustmentFactorScalarWhereWithAggregatesInput = {
    AND?: DynamicAdjustmentFactorScalarWhereWithAggregatesInput | DynamicAdjustmentFactorScalarWhereWithAggregatesInput[]
    OR?: DynamicAdjustmentFactorScalarWhereWithAggregatesInput[]
    NOT?: DynamicAdjustmentFactorScalarWhereWithAggregatesInput | DynamicAdjustmentFactorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DynamicAdjustmentFactor"> | number
    difficulty?: EnumDifficultyWithAggregatesFilter<"DynamicAdjustmentFactor"> | $Enums.Difficulty
    factorValue?: FloatWithAggregatesFilter<"DynamicAdjustmentFactor"> | number
    resultIds?: IntNullableListFilter<"DynamicAdjustmentFactor">
    createdAt?: DateTimeWithAggregatesFilter<"DynamicAdjustmentFactor"> | Date | string
  }

  export type DynamicFactorCountWhereInput = {
    AND?: DynamicFactorCountWhereInput | DynamicFactorCountWhereInput[]
    OR?: DynamicFactorCountWhereInput[]
    NOT?: DynamicFactorCountWhereInput | DynamicFactorCountWhereInput[]
    difficulty?: EnumDifficultyFilter<"DynamicFactorCount"> | $Enums.Difficulty
    count?: IntFilter<"DynamicFactorCount"> | number
  }

  export type DynamicFactorCountOrderByWithRelationInput = {
    difficulty?: SortOrder
    count?: SortOrder
  }

  export type DynamicFactorCountWhereUniqueInput = Prisma.AtLeast<{
    difficulty?: $Enums.Difficulty
    AND?: DynamicFactorCountWhereInput | DynamicFactorCountWhereInput[]
    OR?: DynamicFactorCountWhereInput[]
    NOT?: DynamicFactorCountWhereInput | DynamicFactorCountWhereInput[]
    count?: IntFilter<"DynamicFactorCount"> | number
  }, "difficulty">

  export type DynamicFactorCountOrderByWithAggregationInput = {
    difficulty?: SortOrder
    count?: SortOrder
    _count?: DynamicFactorCountCountOrderByAggregateInput
    _avg?: DynamicFactorCountAvgOrderByAggregateInput
    _max?: DynamicFactorCountMaxOrderByAggregateInput
    _min?: DynamicFactorCountMinOrderByAggregateInput
    _sum?: DynamicFactorCountSumOrderByAggregateInput
  }

  export type DynamicFactorCountScalarWhereWithAggregatesInput = {
    AND?: DynamicFactorCountScalarWhereWithAggregatesInput | DynamicFactorCountScalarWhereWithAggregatesInput[]
    OR?: DynamicFactorCountScalarWhereWithAggregatesInput[]
    NOT?: DynamicFactorCountScalarWhereWithAggregatesInput | DynamicFactorCountScalarWhereWithAggregatesInput[]
    difficulty?: EnumDifficultyWithAggregatesFilter<"DynamicFactorCount"> | $Enums.Difficulty
    count?: IntWithAggregatesFilter<"DynamicFactorCount"> | number
  }

  export type GameWhereInput = {
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    id?: IntFilter<"Game"> | number
    userId?: IntFilter<"Game"> | number
    difficulty?: EnumDifficultyFilter<"Game"> | $Enums.Difficulty
    waveCount?: IntFilter<"Game"> | number
    createdAt?: DateTimeFilter<"Game"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    cardChoices?: CardChoiceListRelationFilter
  }

  export type GameOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    difficulty?: SortOrder
    waveCount?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    cardChoices?: CardChoiceOrderByRelationAggregateInput
  }

  export type GameWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    userId?: IntFilter<"Game"> | number
    difficulty?: EnumDifficultyFilter<"Game"> | $Enums.Difficulty
    waveCount?: IntFilter<"Game"> | number
    createdAt?: DateTimeFilter<"Game"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    cardChoices?: CardChoiceListRelationFilter
  }, "id">

  export type GameOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    difficulty?: SortOrder
    waveCount?: SortOrder
    createdAt?: SortOrder
    _count?: GameCountOrderByAggregateInput
    _avg?: GameAvgOrderByAggregateInput
    _max?: GameMaxOrderByAggregateInput
    _min?: GameMinOrderByAggregateInput
    _sum?: GameSumOrderByAggregateInput
  }

  export type GameScalarWhereWithAggregatesInput = {
    AND?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    OR?: GameScalarWhereWithAggregatesInput[]
    NOT?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Game"> | number
    userId?: IntWithAggregatesFilter<"Game"> | number
    difficulty?: EnumDifficultyWithAggregatesFilter<"Game"> | $Enums.Difficulty
    waveCount?: IntWithAggregatesFilter<"Game"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Game"> | Date | string
  }

  export type CardChoiceWhereInput = {
    AND?: CardChoiceWhereInput | CardChoiceWhereInput[]
    OR?: CardChoiceWhereInput[]
    NOT?: CardChoiceWhereInput | CardChoiceWhereInput[]
    id?: IntFilter<"CardChoice"> | number
    gameId?: IntFilter<"CardChoice"> | number
    waveNumber?: IntFilter<"CardChoice"> | number
    cardType?: EnumCardTypeFilter<"CardChoice"> | $Enums.CardType
    offeredCards?: IntNullableListFilter<"CardChoice">
    selectedCard?: IntFilter<"CardChoice"> | number
    createdAt?: DateTimeFilter<"CardChoice"> | Date | string
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }

  export type CardChoiceOrderByWithRelationInput = {
    id?: SortOrder
    gameId?: SortOrder
    waveNumber?: SortOrder
    cardType?: SortOrder
    offeredCards?: SortOrder
    selectedCard?: SortOrder
    createdAt?: SortOrder
    game?: GameOrderByWithRelationInput
  }

  export type CardChoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CardChoiceWhereInput | CardChoiceWhereInput[]
    OR?: CardChoiceWhereInput[]
    NOT?: CardChoiceWhereInput | CardChoiceWhereInput[]
    gameId?: IntFilter<"CardChoice"> | number
    waveNumber?: IntFilter<"CardChoice"> | number
    cardType?: EnumCardTypeFilter<"CardChoice"> | $Enums.CardType
    offeredCards?: IntNullableListFilter<"CardChoice">
    selectedCard?: IntFilter<"CardChoice"> | number
    createdAt?: DateTimeFilter<"CardChoice"> | Date | string
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }, "id">

  export type CardChoiceOrderByWithAggregationInput = {
    id?: SortOrder
    gameId?: SortOrder
    waveNumber?: SortOrder
    cardType?: SortOrder
    offeredCards?: SortOrder
    selectedCard?: SortOrder
    createdAt?: SortOrder
    _count?: CardChoiceCountOrderByAggregateInput
    _avg?: CardChoiceAvgOrderByAggregateInput
    _max?: CardChoiceMaxOrderByAggregateInput
    _min?: CardChoiceMinOrderByAggregateInput
    _sum?: CardChoiceSumOrderByAggregateInput
  }

  export type CardChoiceScalarWhereWithAggregatesInput = {
    AND?: CardChoiceScalarWhereWithAggregatesInput | CardChoiceScalarWhereWithAggregatesInput[]
    OR?: CardChoiceScalarWhereWithAggregatesInput[]
    NOT?: CardChoiceScalarWhereWithAggregatesInput | CardChoiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CardChoice"> | number
    gameId?: IntWithAggregatesFilter<"CardChoice"> | number
    waveNumber?: IntWithAggregatesFilter<"CardChoice"> | number
    cardType?: EnumCardTypeWithAggregatesFilter<"CardChoice"> | $Enums.CardType
    offeredCards?: IntNullableListFilter<"CardChoice">
    selectedCard?: IntWithAggregatesFilter<"CardChoice"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CardChoice"> | Date | string
  }

  export type UserCreateInput = {
    address: string
    createdAt?: Date | string
    codeId: number
    password: string
    role?: $Enums.Role
    token1Amount?: number
    token2Amount?: number
    gameResults?: GameResultLogCreateNestedManyWithoutUserInput
    games?: GameCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    address: string
    createdAt?: Date | string
    codeId: number
    password: string
    role?: $Enums.Role
    token1Amount?: number
    token2Amount?: number
    gameResults?: GameResultLogUncheckedCreateNestedManyWithoutUserInput
    games?: GameUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codeId?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    token1Amount?: FloatFieldUpdateOperationsInput | number
    token2Amount?: FloatFieldUpdateOperationsInput | number
    gameResults?: GameResultLogUpdateManyWithoutUserNestedInput
    games?: GameUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codeId?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    token1Amount?: FloatFieldUpdateOperationsInput | number
    token2Amount?: FloatFieldUpdateOperationsInput | number
    gameResults?: GameResultLogUncheckedUpdateManyWithoutUserNestedInput
    games?: GameUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    address: string
    createdAt?: Date | string
    codeId: number
    password: string
    role?: $Enums.Role
    token1Amount?: number
    token2Amount?: number
  }

  export type UserUpdateManyMutationInput = {
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codeId?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    token1Amount?: FloatFieldUpdateOperationsInput | number
    token2Amount?: FloatFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codeId?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    token1Amount?: FloatFieldUpdateOperationsInput | number
    token2Amount?: FloatFieldUpdateOperationsInput | number
  }

  export type CodeCreateInput = {
    code: string
    userId?: number | null
    createdAt?: Date | string
  }

  export type CodeUncheckedCreateInput = {
    id?: number
    code: string
    userId?: number | null
    createdAt?: Date | string
  }

  export type CodeUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodeCreateManyInput = {
    id?: number
    code: string
    userId?: number | null
    createdAt?: Date | string
  }

  export type CodeUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PoolCreateInput = {
    updatedAt?: Date | string
    token1Amount: number
    token2Amount: number
    token1SavedFee?: number
    token2SavedFee?: number
  }

  export type PoolUncheckedCreateInput = {
    id?: number
    updatedAt?: Date | string
    token1Amount: number
    token2Amount: number
    token1SavedFee?: number
    token2SavedFee?: number
  }

  export type PoolUpdateInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token1Amount?: FloatFieldUpdateOperationsInput | number
    token2Amount?: FloatFieldUpdateOperationsInput | number
    token1SavedFee?: FloatFieldUpdateOperationsInput | number
    token2SavedFee?: FloatFieldUpdateOperationsInput | number
  }

  export type PoolUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token1Amount?: FloatFieldUpdateOperationsInput | number
    token2Amount?: FloatFieldUpdateOperationsInput | number
    token1SavedFee?: FloatFieldUpdateOperationsInput | number
    token2SavedFee?: FloatFieldUpdateOperationsInput | number
  }

  export type PoolCreateManyInput = {
    id?: number
    updatedAt?: Date | string
    token1Amount: number
    token2Amount: number
    token1SavedFee?: number
    token2SavedFee?: number
  }

  export type PoolUpdateManyMutationInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token1Amount?: FloatFieldUpdateOperationsInput | number
    token2Amount?: FloatFieldUpdateOperationsInput | number
    token1SavedFee?: FloatFieldUpdateOperationsInput | number
    token2SavedFee?: FloatFieldUpdateOperationsInput | number
  }

  export type PoolUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token1Amount?: FloatFieldUpdateOperationsInput | number
    token2Amount?: FloatFieldUpdateOperationsInput | number
    token1SavedFee?: FloatFieldUpdateOperationsInput | number
    token2SavedFee?: FloatFieldUpdateOperationsInput | number
  }

  export type PoolTreasuryCreateInput = {
    token1Amount: number
    token2Amount: number
    createdAt?: Date | string
  }

  export type PoolTreasuryUncheckedCreateInput = {
    id?: number
    token1Amount: number
    token2Amount: number
    createdAt?: Date | string
  }

  export type PoolTreasuryUpdateInput = {
    token1Amount?: FloatFieldUpdateOperationsInput | number
    token2Amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PoolTreasuryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    token1Amount?: FloatFieldUpdateOperationsInput | number
    token2Amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PoolTreasuryCreateManyInput = {
    id?: number
    token1Amount: number
    token2Amount: number
    createdAt?: Date | string
  }

  export type PoolTreasuryUpdateManyMutationInput = {
    token1Amount?: FloatFieldUpdateOperationsInput | number
    token2Amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PoolTreasuryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    token1Amount?: FloatFieldUpdateOperationsInput | number
    token2Amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameResultLogCreateInput = {
    totalMonstersKilled: number
    createdAt?: Date | string
    difficulty: $Enums.Difficulty
    lastWave: number
    user: UserCreateNestedOneWithoutGameResultsInput
  }

  export type GameResultLogUncheckedCreateInput = {
    id?: number
    userId: number
    totalMonstersKilled: number
    createdAt?: Date | string
    difficulty: $Enums.Difficulty
    lastWave: number
  }

  export type GameResultLogUpdateInput = {
    totalMonstersKilled?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    lastWave?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutGameResultsNestedInput
  }

  export type GameResultLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    totalMonstersKilled?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    lastWave?: IntFieldUpdateOperationsInput | number
  }

  export type GameResultLogCreateManyInput = {
    id?: number
    userId: number
    totalMonstersKilled: number
    createdAt?: Date | string
    difficulty: $Enums.Difficulty
    lastWave: number
  }

  export type GameResultLogUpdateManyMutationInput = {
    totalMonstersKilled?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    lastWave?: IntFieldUpdateOperationsInput | number
  }

  export type GameResultLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    totalMonstersKilled?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    lastWave?: IntFieldUpdateOperationsInput | number
  }

  export type GameTreasuryCreateInput = {
    token2Amount?: number
    createdAt?: Date | string
  }

  export type GameTreasuryUncheckedCreateInput = {
    id?: number
    token2Amount?: number
    createdAt?: Date | string
  }

  export type GameTreasuryUpdateInput = {
    token2Amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameTreasuryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    token2Amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameTreasuryCreateManyInput = {
    id?: number
    token2Amount?: number
    createdAt?: Date | string
  }

  export type GameTreasuryUpdateManyMutationInput = {
    token2Amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameTreasuryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    token2Amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DynamicAdjustmentFactorCreateInput = {
    difficulty: $Enums.Difficulty
    factorValue: number
    resultIds?: DynamicAdjustmentFactorCreateresultIdsInput | number[]
    createdAt?: Date | string
  }

  export type DynamicAdjustmentFactorUncheckedCreateInput = {
    id?: number
    difficulty: $Enums.Difficulty
    factorValue: number
    resultIds?: DynamicAdjustmentFactorCreateresultIdsInput | number[]
    createdAt?: Date | string
  }

  export type DynamicAdjustmentFactorUpdateInput = {
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    factorValue?: FloatFieldUpdateOperationsInput | number
    resultIds?: DynamicAdjustmentFactorUpdateresultIdsInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DynamicAdjustmentFactorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    factorValue?: FloatFieldUpdateOperationsInput | number
    resultIds?: DynamicAdjustmentFactorUpdateresultIdsInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DynamicAdjustmentFactorCreateManyInput = {
    id?: number
    difficulty: $Enums.Difficulty
    factorValue: number
    resultIds?: DynamicAdjustmentFactorCreateresultIdsInput | number[]
    createdAt?: Date | string
  }

  export type DynamicAdjustmentFactorUpdateManyMutationInput = {
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    factorValue?: FloatFieldUpdateOperationsInput | number
    resultIds?: DynamicAdjustmentFactorUpdateresultIdsInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DynamicAdjustmentFactorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    factorValue?: FloatFieldUpdateOperationsInput | number
    resultIds?: DynamicAdjustmentFactorUpdateresultIdsInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DynamicFactorCountCreateInput = {
    difficulty: $Enums.Difficulty
    count: number
  }

  export type DynamicFactorCountUncheckedCreateInput = {
    difficulty: $Enums.Difficulty
    count: number
  }

  export type DynamicFactorCountUpdateInput = {
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    count?: IntFieldUpdateOperationsInput | number
  }

  export type DynamicFactorCountUncheckedUpdateInput = {
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    count?: IntFieldUpdateOperationsInput | number
  }

  export type DynamicFactorCountCreateManyInput = {
    difficulty: $Enums.Difficulty
    count: number
  }

  export type DynamicFactorCountUpdateManyMutationInput = {
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    count?: IntFieldUpdateOperationsInput | number
  }

  export type DynamicFactorCountUncheckedUpdateManyInput = {
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    count?: IntFieldUpdateOperationsInput | number
  }

  export type GameCreateInput = {
    difficulty: $Enums.Difficulty
    waveCount: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutGamesInput
    cardChoices?: CardChoiceCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateInput = {
    id?: number
    userId: number
    difficulty: $Enums.Difficulty
    waveCount: number
    createdAt?: Date | string
    cardChoices?: CardChoiceUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameUpdateInput = {
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    waveCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGamesNestedInput
    cardChoices?: CardChoiceUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    waveCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cardChoices?: CardChoiceUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameCreateManyInput = {
    id?: number
    userId: number
    difficulty: $Enums.Difficulty
    waveCount: number
    createdAt?: Date | string
  }

  export type GameUpdateManyMutationInput = {
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    waveCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    waveCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardChoiceCreateInput = {
    waveNumber: number
    cardType?: $Enums.CardType
    offeredCards?: CardChoiceCreateofferedCardsInput | number[]
    selectedCard: number
    createdAt?: Date | string
    game: GameCreateNestedOneWithoutCardChoicesInput
  }

  export type CardChoiceUncheckedCreateInput = {
    id?: number
    gameId: number
    waveNumber: number
    cardType?: $Enums.CardType
    offeredCards?: CardChoiceCreateofferedCardsInput | number[]
    selectedCard: number
    createdAt?: Date | string
  }

  export type CardChoiceUpdateInput = {
    waveNumber?: IntFieldUpdateOperationsInput | number
    cardType?: EnumCardTypeFieldUpdateOperationsInput | $Enums.CardType
    offeredCards?: CardChoiceUpdateofferedCardsInput | number[]
    selectedCard?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutCardChoicesNestedInput
  }

  export type CardChoiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
    waveNumber?: IntFieldUpdateOperationsInput | number
    cardType?: EnumCardTypeFieldUpdateOperationsInput | $Enums.CardType
    offeredCards?: CardChoiceUpdateofferedCardsInput | number[]
    selectedCard?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardChoiceCreateManyInput = {
    id?: number
    gameId: number
    waveNumber: number
    cardType?: $Enums.CardType
    offeredCards?: CardChoiceCreateofferedCardsInput | number[]
    selectedCard: number
    createdAt?: Date | string
  }

  export type CardChoiceUpdateManyMutationInput = {
    waveNumber?: IntFieldUpdateOperationsInput | number
    cardType?: EnumCardTypeFieldUpdateOperationsInput | $Enums.CardType
    offeredCards?: CardChoiceUpdateofferedCardsInput | number[]
    selectedCard?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardChoiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
    waveNumber?: IntFieldUpdateOperationsInput | number
    cardType?: EnumCardTypeFieldUpdateOperationsInput | $Enums.CardType
    offeredCards?: CardChoiceUpdateofferedCardsInput | number[]
    selectedCard?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type GameResultLogListRelationFilter = {
    every?: GameResultLogWhereInput
    some?: GameResultLogWhereInput
    none?: GameResultLogWhereInput
  }

  export type GameListRelationFilter = {
    every?: GameWhereInput
    some?: GameWhereInput
    none?: GameWhereInput
  }

  export type GameResultLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    codeId?: SortOrder
    password?: SortOrder
    role?: SortOrder
    token1Amount?: SortOrder
    token2Amount?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    codeId?: SortOrder
    token1Amount?: SortOrder
    token2Amount?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    codeId?: SortOrder
    password?: SortOrder
    role?: SortOrder
    token1Amount?: SortOrder
    token2Amount?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    codeId?: SortOrder
    password?: SortOrder
    role?: SortOrder
    token1Amount?: SortOrder
    token2Amount?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    codeId?: SortOrder
    token1Amount?: SortOrder
    token2Amount?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CodeCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type CodeAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type CodeMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type CodeMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type CodeSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
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

  export type PoolCountOrderByAggregateInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    token1Amount?: SortOrder
    token2Amount?: SortOrder
    token1SavedFee?: SortOrder
    token2SavedFee?: SortOrder
  }

  export type PoolAvgOrderByAggregateInput = {
    id?: SortOrder
    token1Amount?: SortOrder
    token2Amount?: SortOrder
    token1SavedFee?: SortOrder
    token2SavedFee?: SortOrder
  }

  export type PoolMaxOrderByAggregateInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    token1Amount?: SortOrder
    token2Amount?: SortOrder
    token1SavedFee?: SortOrder
    token2SavedFee?: SortOrder
  }

  export type PoolMinOrderByAggregateInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    token1Amount?: SortOrder
    token2Amount?: SortOrder
    token1SavedFee?: SortOrder
    token2SavedFee?: SortOrder
  }

  export type PoolSumOrderByAggregateInput = {
    id?: SortOrder
    token1Amount?: SortOrder
    token2Amount?: SortOrder
    token1SavedFee?: SortOrder
    token2SavedFee?: SortOrder
  }

  export type PoolTreasuryCountOrderByAggregateInput = {
    id?: SortOrder
    token1Amount?: SortOrder
    token2Amount?: SortOrder
    createdAt?: SortOrder
  }

  export type PoolTreasuryAvgOrderByAggregateInput = {
    id?: SortOrder
    token1Amount?: SortOrder
    token2Amount?: SortOrder
  }

  export type PoolTreasuryMaxOrderByAggregateInput = {
    id?: SortOrder
    token1Amount?: SortOrder
    token2Amount?: SortOrder
    createdAt?: SortOrder
  }

  export type PoolTreasuryMinOrderByAggregateInput = {
    id?: SortOrder
    token1Amount?: SortOrder
    token2Amount?: SortOrder
    createdAt?: SortOrder
  }

  export type PoolTreasurySumOrderByAggregateInput = {
    id?: SortOrder
    token1Amount?: SortOrder
    token2Amount?: SortOrder
  }

  export type EnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type GameResultLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalMonstersKilled?: SortOrder
    createdAt?: SortOrder
    difficulty?: SortOrder
    lastWave?: SortOrder
  }

  export type GameResultLogAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalMonstersKilled?: SortOrder
    lastWave?: SortOrder
  }

  export type GameResultLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalMonstersKilled?: SortOrder
    createdAt?: SortOrder
    difficulty?: SortOrder
    lastWave?: SortOrder
  }

  export type GameResultLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalMonstersKilled?: SortOrder
    createdAt?: SortOrder
    difficulty?: SortOrder
    lastWave?: SortOrder
  }

  export type GameResultLogSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalMonstersKilled?: SortOrder
    lastWave?: SortOrder
  }

  export type EnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }

  export type GameTreasuryCountOrderByAggregateInput = {
    id?: SortOrder
    token2Amount?: SortOrder
    createdAt?: SortOrder
  }

  export type GameTreasuryAvgOrderByAggregateInput = {
    id?: SortOrder
    token2Amount?: SortOrder
  }

  export type GameTreasuryMaxOrderByAggregateInput = {
    id?: SortOrder
    token2Amount?: SortOrder
    createdAt?: SortOrder
  }

  export type GameTreasuryMinOrderByAggregateInput = {
    id?: SortOrder
    token2Amount?: SortOrder
    createdAt?: SortOrder
  }

  export type GameTreasurySumOrderByAggregateInput = {
    id?: SortOrder
    token2Amount?: SortOrder
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DynamicAdjustmentFactorCountOrderByAggregateInput = {
    id?: SortOrder
    difficulty?: SortOrder
    factorValue?: SortOrder
    resultIds?: SortOrder
    createdAt?: SortOrder
  }

  export type DynamicAdjustmentFactorAvgOrderByAggregateInput = {
    id?: SortOrder
    factorValue?: SortOrder
    resultIds?: SortOrder
  }

  export type DynamicAdjustmentFactorMaxOrderByAggregateInput = {
    id?: SortOrder
    difficulty?: SortOrder
    factorValue?: SortOrder
    createdAt?: SortOrder
  }

  export type DynamicAdjustmentFactorMinOrderByAggregateInput = {
    id?: SortOrder
    difficulty?: SortOrder
    factorValue?: SortOrder
    createdAt?: SortOrder
  }

  export type DynamicAdjustmentFactorSumOrderByAggregateInput = {
    id?: SortOrder
    factorValue?: SortOrder
    resultIds?: SortOrder
  }

  export type DynamicFactorCountCountOrderByAggregateInput = {
    difficulty?: SortOrder
    count?: SortOrder
  }

  export type DynamicFactorCountAvgOrderByAggregateInput = {
    count?: SortOrder
  }

  export type DynamicFactorCountMaxOrderByAggregateInput = {
    difficulty?: SortOrder
    count?: SortOrder
  }

  export type DynamicFactorCountMinOrderByAggregateInput = {
    difficulty?: SortOrder
    count?: SortOrder
  }

  export type DynamicFactorCountSumOrderByAggregateInput = {
    count?: SortOrder
  }

  export type CardChoiceListRelationFilter = {
    every?: CardChoiceWhereInput
    some?: CardChoiceWhereInput
    none?: CardChoiceWhereInput
  }

  export type CardChoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    difficulty?: SortOrder
    waveCount?: SortOrder
    createdAt?: SortOrder
  }

  export type GameAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    waveCount?: SortOrder
  }

  export type GameMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    difficulty?: SortOrder
    waveCount?: SortOrder
    createdAt?: SortOrder
  }

  export type GameMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    difficulty?: SortOrder
    waveCount?: SortOrder
    createdAt?: SortOrder
  }

  export type GameSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    waveCount?: SortOrder
  }

  export type EnumCardTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CardType | EnumCardTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CardType[] | ListEnumCardTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CardType[] | ListEnumCardTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCardTypeFilter<$PrismaModel> | $Enums.CardType
  }

  export type GameScalarRelationFilter = {
    is?: GameWhereInput
    isNot?: GameWhereInput
  }

  export type CardChoiceCountOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    waveNumber?: SortOrder
    cardType?: SortOrder
    offeredCards?: SortOrder
    selectedCard?: SortOrder
    createdAt?: SortOrder
  }

  export type CardChoiceAvgOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    waveNumber?: SortOrder
    offeredCards?: SortOrder
    selectedCard?: SortOrder
  }

  export type CardChoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    waveNumber?: SortOrder
    cardType?: SortOrder
    selectedCard?: SortOrder
    createdAt?: SortOrder
  }

  export type CardChoiceMinOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    waveNumber?: SortOrder
    cardType?: SortOrder
    selectedCard?: SortOrder
    createdAt?: SortOrder
  }

  export type CardChoiceSumOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    waveNumber?: SortOrder
    offeredCards?: SortOrder
    selectedCard?: SortOrder
  }

  export type EnumCardTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CardType | EnumCardTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CardType[] | ListEnumCardTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CardType[] | ListEnumCardTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCardTypeWithAggregatesFilter<$PrismaModel> | $Enums.CardType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCardTypeFilter<$PrismaModel>
    _max?: NestedEnumCardTypeFilter<$PrismaModel>
  }

  export type GameResultLogCreateNestedManyWithoutUserInput = {
    create?: XOR<GameResultLogCreateWithoutUserInput, GameResultLogUncheckedCreateWithoutUserInput> | GameResultLogCreateWithoutUserInput[] | GameResultLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameResultLogCreateOrConnectWithoutUserInput | GameResultLogCreateOrConnectWithoutUserInput[]
    createMany?: GameResultLogCreateManyUserInputEnvelope
    connect?: GameResultLogWhereUniqueInput | GameResultLogWhereUniqueInput[]
  }

  export type GameCreateNestedManyWithoutUserInput = {
    create?: XOR<GameCreateWithoutUserInput, GameUncheckedCreateWithoutUserInput> | GameCreateWithoutUserInput[] | GameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameCreateOrConnectWithoutUserInput | GameCreateOrConnectWithoutUserInput[]
    createMany?: GameCreateManyUserInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameResultLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GameResultLogCreateWithoutUserInput, GameResultLogUncheckedCreateWithoutUserInput> | GameResultLogCreateWithoutUserInput[] | GameResultLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameResultLogCreateOrConnectWithoutUserInput | GameResultLogCreateOrConnectWithoutUserInput[]
    createMany?: GameResultLogCreateManyUserInputEnvelope
    connect?: GameResultLogWhereUniqueInput | GameResultLogWhereUniqueInput[]
  }

  export type GameUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GameCreateWithoutUserInput, GameUncheckedCreateWithoutUserInput> | GameCreateWithoutUserInput[] | GameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameCreateOrConnectWithoutUserInput | GameCreateOrConnectWithoutUserInput[]
    createMany?: GameCreateManyUserInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GameResultLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<GameResultLogCreateWithoutUserInput, GameResultLogUncheckedCreateWithoutUserInput> | GameResultLogCreateWithoutUserInput[] | GameResultLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameResultLogCreateOrConnectWithoutUserInput | GameResultLogCreateOrConnectWithoutUserInput[]
    upsert?: GameResultLogUpsertWithWhereUniqueWithoutUserInput | GameResultLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GameResultLogCreateManyUserInputEnvelope
    set?: GameResultLogWhereUniqueInput | GameResultLogWhereUniqueInput[]
    disconnect?: GameResultLogWhereUniqueInput | GameResultLogWhereUniqueInput[]
    delete?: GameResultLogWhereUniqueInput | GameResultLogWhereUniqueInput[]
    connect?: GameResultLogWhereUniqueInput | GameResultLogWhereUniqueInput[]
    update?: GameResultLogUpdateWithWhereUniqueWithoutUserInput | GameResultLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GameResultLogUpdateManyWithWhereWithoutUserInput | GameResultLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GameResultLogScalarWhereInput | GameResultLogScalarWhereInput[]
  }

  export type GameUpdateManyWithoutUserNestedInput = {
    create?: XOR<GameCreateWithoutUserInput, GameUncheckedCreateWithoutUserInput> | GameCreateWithoutUserInput[] | GameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameCreateOrConnectWithoutUserInput | GameCreateOrConnectWithoutUserInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutUserInput | GameUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GameCreateManyUserInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutUserInput | GameUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GameUpdateManyWithWhereWithoutUserInput | GameUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameResultLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GameResultLogCreateWithoutUserInput, GameResultLogUncheckedCreateWithoutUserInput> | GameResultLogCreateWithoutUserInput[] | GameResultLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameResultLogCreateOrConnectWithoutUserInput | GameResultLogCreateOrConnectWithoutUserInput[]
    upsert?: GameResultLogUpsertWithWhereUniqueWithoutUserInput | GameResultLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GameResultLogCreateManyUserInputEnvelope
    set?: GameResultLogWhereUniqueInput | GameResultLogWhereUniqueInput[]
    disconnect?: GameResultLogWhereUniqueInput | GameResultLogWhereUniqueInput[]
    delete?: GameResultLogWhereUniqueInput | GameResultLogWhereUniqueInput[]
    connect?: GameResultLogWhereUniqueInput | GameResultLogWhereUniqueInput[]
    update?: GameResultLogUpdateWithWhereUniqueWithoutUserInput | GameResultLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GameResultLogUpdateManyWithWhereWithoutUserInput | GameResultLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GameResultLogScalarWhereInput | GameResultLogScalarWhereInput[]
  }

  export type GameUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GameCreateWithoutUserInput, GameUncheckedCreateWithoutUserInput> | GameCreateWithoutUserInput[] | GameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameCreateOrConnectWithoutUserInput | GameCreateOrConnectWithoutUserInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutUserInput | GameUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GameCreateManyUserInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutUserInput | GameUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GameUpdateManyWithWhereWithoutUserInput | GameUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutGameResultsInput = {
    create?: XOR<UserCreateWithoutGameResultsInput, UserUncheckedCreateWithoutGameResultsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGameResultsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.Difficulty
  }

  export type UserUpdateOneRequiredWithoutGameResultsNestedInput = {
    create?: XOR<UserCreateWithoutGameResultsInput, UserUncheckedCreateWithoutGameResultsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGameResultsInput
    upsert?: UserUpsertWithoutGameResultsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGameResultsInput, UserUpdateWithoutGameResultsInput>, UserUncheckedUpdateWithoutGameResultsInput>
  }

  export type DynamicAdjustmentFactorCreateresultIdsInput = {
    set: number[]
  }

  export type DynamicAdjustmentFactorUpdateresultIdsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type UserCreateNestedOneWithoutGamesInput = {
    create?: XOR<UserCreateWithoutGamesInput, UserUncheckedCreateWithoutGamesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGamesInput
    connect?: UserWhereUniqueInput
  }

  export type CardChoiceCreateNestedManyWithoutGameInput = {
    create?: XOR<CardChoiceCreateWithoutGameInput, CardChoiceUncheckedCreateWithoutGameInput> | CardChoiceCreateWithoutGameInput[] | CardChoiceUncheckedCreateWithoutGameInput[]
    connectOrCreate?: CardChoiceCreateOrConnectWithoutGameInput | CardChoiceCreateOrConnectWithoutGameInput[]
    createMany?: CardChoiceCreateManyGameInputEnvelope
    connect?: CardChoiceWhereUniqueInput | CardChoiceWhereUniqueInput[]
  }

  export type CardChoiceUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<CardChoiceCreateWithoutGameInput, CardChoiceUncheckedCreateWithoutGameInput> | CardChoiceCreateWithoutGameInput[] | CardChoiceUncheckedCreateWithoutGameInput[]
    connectOrCreate?: CardChoiceCreateOrConnectWithoutGameInput | CardChoiceCreateOrConnectWithoutGameInput[]
    createMany?: CardChoiceCreateManyGameInputEnvelope
    connect?: CardChoiceWhereUniqueInput | CardChoiceWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutGamesNestedInput = {
    create?: XOR<UserCreateWithoutGamesInput, UserUncheckedCreateWithoutGamesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGamesInput
    upsert?: UserUpsertWithoutGamesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGamesInput, UserUpdateWithoutGamesInput>, UserUncheckedUpdateWithoutGamesInput>
  }

  export type CardChoiceUpdateManyWithoutGameNestedInput = {
    create?: XOR<CardChoiceCreateWithoutGameInput, CardChoiceUncheckedCreateWithoutGameInput> | CardChoiceCreateWithoutGameInput[] | CardChoiceUncheckedCreateWithoutGameInput[]
    connectOrCreate?: CardChoiceCreateOrConnectWithoutGameInput | CardChoiceCreateOrConnectWithoutGameInput[]
    upsert?: CardChoiceUpsertWithWhereUniqueWithoutGameInput | CardChoiceUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: CardChoiceCreateManyGameInputEnvelope
    set?: CardChoiceWhereUniqueInput | CardChoiceWhereUniqueInput[]
    disconnect?: CardChoiceWhereUniqueInput | CardChoiceWhereUniqueInput[]
    delete?: CardChoiceWhereUniqueInput | CardChoiceWhereUniqueInput[]
    connect?: CardChoiceWhereUniqueInput | CardChoiceWhereUniqueInput[]
    update?: CardChoiceUpdateWithWhereUniqueWithoutGameInput | CardChoiceUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: CardChoiceUpdateManyWithWhereWithoutGameInput | CardChoiceUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: CardChoiceScalarWhereInput | CardChoiceScalarWhereInput[]
  }

  export type CardChoiceUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<CardChoiceCreateWithoutGameInput, CardChoiceUncheckedCreateWithoutGameInput> | CardChoiceCreateWithoutGameInput[] | CardChoiceUncheckedCreateWithoutGameInput[]
    connectOrCreate?: CardChoiceCreateOrConnectWithoutGameInput | CardChoiceCreateOrConnectWithoutGameInput[]
    upsert?: CardChoiceUpsertWithWhereUniqueWithoutGameInput | CardChoiceUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: CardChoiceCreateManyGameInputEnvelope
    set?: CardChoiceWhereUniqueInput | CardChoiceWhereUniqueInput[]
    disconnect?: CardChoiceWhereUniqueInput | CardChoiceWhereUniqueInput[]
    delete?: CardChoiceWhereUniqueInput | CardChoiceWhereUniqueInput[]
    connect?: CardChoiceWhereUniqueInput | CardChoiceWhereUniqueInput[]
    update?: CardChoiceUpdateWithWhereUniqueWithoutGameInput | CardChoiceUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: CardChoiceUpdateManyWithWhereWithoutGameInput | CardChoiceUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: CardChoiceScalarWhereInput | CardChoiceScalarWhereInput[]
  }

  export type CardChoiceCreateofferedCardsInput = {
    set: number[]
  }

  export type GameCreateNestedOneWithoutCardChoicesInput = {
    create?: XOR<GameCreateWithoutCardChoicesInput, GameUncheckedCreateWithoutCardChoicesInput>
    connectOrCreate?: GameCreateOrConnectWithoutCardChoicesInput
    connect?: GameWhereUniqueInput
  }

  export type EnumCardTypeFieldUpdateOperationsInput = {
    set?: $Enums.CardType
  }

  export type CardChoiceUpdateofferedCardsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type GameUpdateOneRequiredWithoutCardChoicesNestedInput = {
    create?: XOR<GameCreateWithoutCardChoicesInput, GameUncheckedCreateWithoutCardChoicesInput>
    connectOrCreate?: GameCreateOrConnectWithoutCardChoicesInput
    upsert?: GameUpsertWithoutCardChoicesInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutCardChoicesInput, GameUpdateWithoutCardChoicesInput>, GameUncheckedUpdateWithoutCardChoicesInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedEnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type NestedEnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }

  export type NestedEnumCardTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CardType | EnumCardTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CardType[] | ListEnumCardTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CardType[] | ListEnumCardTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCardTypeFilter<$PrismaModel> | $Enums.CardType
  }

  export type NestedEnumCardTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CardType | EnumCardTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CardType[] | ListEnumCardTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CardType[] | ListEnumCardTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCardTypeWithAggregatesFilter<$PrismaModel> | $Enums.CardType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCardTypeFilter<$PrismaModel>
    _max?: NestedEnumCardTypeFilter<$PrismaModel>
  }

  export type GameResultLogCreateWithoutUserInput = {
    totalMonstersKilled: number
    createdAt?: Date | string
    difficulty: $Enums.Difficulty
    lastWave: number
  }

  export type GameResultLogUncheckedCreateWithoutUserInput = {
    id?: number
    totalMonstersKilled: number
    createdAt?: Date | string
    difficulty: $Enums.Difficulty
    lastWave: number
  }

  export type GameResultLogCreateOrConnectWithoutUserInput = {
    where: GameResultLogWhereUniqueInput
    create: XOR<GameResultLogCreateWithoutUserInput, GameResultLogUncheckedCreateWithoutUserInput>
  }

  export type GameResultLogCreateManyUserInputEnvelope = {
    data: GameResultLogCreateManyUserInput | GameResultLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GameCreateWithoutUserInput = {
    difficulty: $Enums.Difficulty
    waveCount: number
    createdAt?: Date | string
    cardChoices?: CardChoiceCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutUserInput = {
    id?: number
    difficulty: $Enums.Difficulty
    waveCount: number
    createdAt?: Date | string
    cardChoices?: CardChoiceUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutUserInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutUserInput, GameUncheckedCreateWithoutUserInput>
  }

  export type GameCreateManyUserInputEnvelope = {
    data: GameCreateManyUserInput | GameCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GameResultLogUpsertWithWhereUniqueWithoutUserInput = {
    where: GameResultLogWhereUniqueInput
    update: XOR<GameResultLogUpdateWithoutUserInput, GameResultLogUncheckedUpdateWithoutUserInput>
    create: XOR<GameResultLogCreateWithoutUserInput, GameResultLogUncheckedCreateWithoutUserInput>
  }

  export type GameResultLogUpdateWithWhereUniqueWithoutUserInput = {
    where: GameResultLogWhereUniqueInput
    data: XOR<GameResultLogUpdateWithoutUserInput, GameResultLogUncheckedUpdateWithoutUserInput>
  }

  export type GameResultLogUpdateManyWithWhereWithoutUserInput = {
    where: GameResultLogScalarWhereInput
    data: XOR<GameResultLogUpdateManyMutationInput, GameResultLogUncheckedUpdateManyWithoutUserInput>
  }

  export type GameResultLogScalarWhereInput = {
    AND?: GameResultLogScalarWhereInput | GameResultLogScalarWhereInput[]
    OR?: GameResultLogScalarWhereInput[]
    NOT?: GameResultLogScalarWhereInput | GameResultLogScalarWhereInput[]
    id?: IntFilter<"GameResultLog"> | number
    userId?: IntFilter<"GameResultLog"> | number
    totalMonstersKilled?: IntFilter<"GameResultLog"> | number
    createdAt?: DateTimeFilter<"GameResultLog"> | Date | string
    difficulty?: EnumDifficultyFilter<"GameResultLog"> | $Enums.Difficulty
    lastWave?: IntFilter<"GameResultLog"> | number
  }

  export type GameUpsertWithWhereUniqueWithoutUserInput = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutUserInput, GameUncheckedUpdateWithoutUserInput>
    create: XOR<GameCreateWithoutUserInput, GameUncheckedCreateWithoutUserInput>
  }

  export type GameUpdateWithWhereUniqueWithoutUserInput = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutUserInput, GameUncheckedUpdateWithoutUserInput>
  }

  export type GameUpdateManyWithWhereWithoutUserInput = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutUserInput>
  }

  export type GameScalarWhereInput = {
    AND?: GameScalarWhereInput | GameScalarWhereInput[]
    OR?: GameScalarWhereInput[]
    NOT?: GameScalarWhereInput | GameScalarWhereInput[]
    id?: IntFilter<"Game"> | number
    userId?: IntFilter<"Game"> | number
    difficulty?: EnumDifficultyFilter<"Game"> | $Enums.Difficulty
    waveCount?: IntFilter<"Game"> | number
    createdAt?: DateTimeFilter<"Game"> | Date | string
  }

  export type UserCreateWithoutGameResultsInput = {
    address: string
    createdAt?: Date | string
    codeId: number
    password: string
    role?: $Enums.Role
    token1Amount?: number
    token2Amount?: number
    games?: GameCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGameResultsInput = {
    id?: number
    address: string
    createdAt?: Date | string
    codeId: number
    password: string
    role?: $Enums.Role
    token1Amount?: number
    token2Amount?: number
    games?: GameUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGameResultsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGameResultsInput, UserUncheckedCreateWithoutGameResultsInput>
  }

  export type UserUpsertWithoutGameResultsInput = {
    update: XOR<UserUpdateWithoutGameResultsInput, UserUncheckedUpdateWithoutGameResultsInput>
    create: XOR<UserCreateWithoutGameResultsInput, UserUncheckedCreateWithoutGameResultsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGameResultsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGameResultsInput, UserUncheckedUpdateWithoutGameResultsInput>
  }

  export type UserUpdateWithoutGameResultsInput = {
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codeId?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    token1Amount?: FloatFieldUpdateOperationsInput | number
    token2Amount?: FloatFieldUpdateOperationsInput | number
    games?: GameUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGameResultsInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codeId?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    token1Amount?: FloatFieldUpdateOperationsInput | number
    token2Amount?: FloatFieldUpdateOperationsInput | number
    games?: GameUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutGamesInput = {
    address: string
    createdAt?: Date | string
    codeId: number
    password: string
    role?: $Enums.Role
    token1Amount?: number
    token2Amount?: number
    gameResults?: GameResultLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGamesInput = {
    id?: number
    address: string
    createdAt?: Date | string
    codeId: number
    password: string
    role?: $Enums.Role
    token1Amount?: number
    token2Amount?: number
    gameResults?: GameResultLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGamesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGamesInput, UserUncheckedCreateWithoutGamesInput>
  }

  export type CardChoiceCreateWithoutGameInput = {
    waveNumber: number
    cardType?: $Enums.CardType
    offeredCards?: CardChoiceCreateofferedCardsInput | number[]
    selectedCard: number
    createdAt?: Date | string
  }

  export type CardChoiceUncheckedCreateWithoutGameInput = {
    id?: number
    waveNumber: number
    cardType?: $Enums.CardType
    offeredCards?: CardChoiceCreateofferedCardsInput | number[]
    selectedCard: number
    createdAt?: Date | string
  }

  export type CardChoiceCreateOrConnectWithoutGameInput = {
    where: CardChoiceWhereUniqueInput
    create: XOR<CardChoiceCreateWithoutGameInput, CardChoiceUncheckedCreateWithoutGameInput>
  }

  export type CardChoiceCreateManyGameInputEnvelope = {
    data: CardChoiceCreateManyGameInput | CardChoiceCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutGamesInput = {
    update: XOR<UserUpdateWithoutGamesInput, UserUncheckedUpdateWithoutGamesInput>
    create: XOR<UserCreateWithoutGamesInput, UserUncheckedCreateWithoutGamesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGamesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGamesInput, UserUncheckedUpdateWithoutGamesInput>
  }

  export type UserUpdateWithoutGamesInput = {
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codeId?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    token1Amount?: FloatFieldUpdateOperationsInput | number
    token2Amount?: FloatFieldUpdateOperationsInput | number
    gameResults?: GameResultLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codeId?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    token1Amount?: FloatFieldUpdateOperationsInput | number
    token2Amount?: FloatFieldUpdateOperationsInput | number
    gameResults?: GameResultLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CardChoiceUpsertWithWhereUniqueWithoutGameInput = {
    where: CardChoiceWhereUniqueInput
    update: XOR<CardChoiceUpdateWithoutGameInput, CardChoiceUncheckedUpdateWithoutGameInput>
    create: XOR<CardChoiceCreateWithoutGameInput, CardChoiceUncheckedCreateWithoutGameInput>
  }

  export type CardChoiceUpdateWithWhereUniqueWithoutGameInput = {
    where: CardChoiceWhereUniqueInput
    data: XOR<CardChoiceUpdateWithoutGameInput, CardChoiceUncheckedUpdateWithoutGameInput>
  }

  export type CardChoiceUpdateManyWithWhereWithoutGameInput = {
    where: CardChoiceScalarWhereInput
    data: XOR<CardChoiceUpdateManyMutationInput, CardChoiceUncheckedUpdateManyWithoutGameInput>
  }

  export type CardChoiceScalarWhereInput = {
    AND?: CardChoiceScalarWhereInput | CardChoiceScalarWhereInput[]
    OR?: CardChoiceScalarWhereInput[]
    NOT?: CardChoiceScalarWhereInput | CardChoiceScalarWhereInput[]
    id?: IntFilter<"CardChoice"> | number
    gameId?: IntFilter<"CardChoice"> | number
    waveNumber?: IntFilter<"CardChoice"> | number
    cardType?: EnumCardTypeFilter<"CardChoice"> | $Enums.CardType
    offeredCards?: IntNullableListFilter<"CardChoice">
    selectedCard?: IntFilter<"CardChoice"> | number
    createdAt?: DateTimeFilter<"CardChoice"> | Date | string
  }

  export type GameCreateWithoutCardChoicesInput = {
    difficulty: $Enums.Difficulty
    waveCount: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutGamesInput
  }

  export type GameUncheckedCreateWithoutCardChoicesInput = {
    id?: number
    userId: number
    difficulty: $Enums.Difficulty
    waveCount: number
    createdAt?: Date | string
  }

  export type GameCreateOrConnectWithoutCardChoicesInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutCardChoicesInput, GameUncheckedCreateWithoutCardChoicesInput>
  }

  export type GameUpsertWithoutCardChoicesInput = {
    update: XOR<GameUpdateWithoutCardChoicesInput, GameUncheckedUpdateWithoutCardChoicesInput>
    create: XOR<GameCreateWithoutCardChoicesInput, GameUncheckedCreateWithoutCardChoicesInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutCardChoicesInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutCardChoicesInput, GameUncheckedUpdateWithoutCardChoicesInput>
  }

  export type GameUpdateWithoutCardChoicesInput = {
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    waveCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGamesNestedInput
  }

  export type GameUncheckedUpdateWithoutCardChoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    waveCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameResultLogCreateManyUserInput = {
    id?: number
    totalMonstersKilled: number
    createdAt?: Date | string
    difficulty: $Enums.Difficulty
    lastWave: number
  }

  export type GameCreateManyUserInput = {
    id?: number
    difficulty: $Enums.Difficulty
    waveCount: number
    createdAt?: Date | string
  }

  export type GameResultLogUpdateWithoutUserInput = {
    totalMonstersKilled?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    lastWave?: IntFieldUpdateOperationsInput | number
  }

  export type GameResultLogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalMonstersKilled?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    lastWave?: IntFieldUpdateOperationsInput | number
  }

  export type GameResultLogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalMonstersKilled?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    lastWave?: IntFieldUpdateOperationsInput | number
  }

  export type GameUpdateWithoutUserInput = {
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    waveCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cardChoices?: CardChoiceUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    waveCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cardChoices?: CardChoiceUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    waveCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardChoiceCreateManyGameInput = {
    id?: number
    waveNumber: number
    cardType?: $Enums.CardType
    offeredCards?: CardChoiceCreateofferedCardsInput | number[]
    selectedCard: number
    createdAt?: Date | string
  }

  export type CardChoiceUpdateWithoutGameInput = {
    waveNumber?: IntFieldUpdateOperationsInput | number
    cardType?: EnumCardTypeFieldUpdateOperationsInput | $Enums.CardType
    offeredCards?: CardChoiceUpdateofferedCardsInput | number[]
    selectedCard?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardChoiceUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    waveNumber?: IntFieldUpdateOperationsInput | number
    cardType?: EnumCardTypeFieldUpdateOperationsInput | $Enums.CardType
    offeredCards?: CardChoiceUpdateofferedCardsInput | number[]
    selectedCard?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardChoiceUncheckedUpdateManyWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    waveNumber?: IntFieldUpdateOperationsInput | number
    cardType?: EnumCardTypeFieldUpdateOperationsInput | $Enums.CardType
    offeredCards?: CardChoiceUpdateofferedCardsInput | number[]
    selectedCard?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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