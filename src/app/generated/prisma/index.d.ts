
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
 * Model Board
 * 
 */
export type Board = $Result.DefaultSelection<Prisma.$BoardPayload>
/**
 * Model UserHasBoard
 * 
 */
export type UserHasBoard = $Result.DefaultSelection<Prisma.$UserHasBoardPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model Card
 * 
 */
export type Card = $Result.DefaultSelection<Prisma.$CardPayload>
/**
 * Model List
 * 
 */
export type List = $Result.DefaultSelection<Prisma.$ListPayload>
/**
 * Model ListItem
 * 
 */
export type ListItem = $Result.DefaultSelection<Prisma.$ListItemPayload>
/**
 * Model Column
 * 
 */
export type Column = $Result.DefaultSelection<Prisma.$ColumnPayload>
/**
 * Model CardAssignment
 * 
 */
export type CardAssignment = $Result.DefaultSelection<Prisma.$CardAssignmentPayload>
/**
 * Model CardHasTag
 * 
 */
export type CardHasTag = $Result.DefaultSelection<Prisma.$CardHasTagPayload>

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
   * `prisma.board`: Exposes CRUD operations for the **Board** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Boards
    * const boards = await prisma.board.findMany()
    * ```
    */
  get board(): Prisma.BoardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userHasBoard`: Exposes CRUD operations for the **UserHasBoard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserHasBoards
    * const userHasBoards = await prisma.userHasBoard.findMany()
    * ```
    */
  get userHasBoard(): Prisma.UserHasBoardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.card`: Exposes CRUD operations for the **Card** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cards
    * const cards = await prisma.card.findMany()
    * ```
    */
  get card(): Prisma.CardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.list`: Exposes CRUD operations for the **List** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lists
    * const lists = await prisma.list.findMany()
    * ```
    */
  get list(): Prisma.ListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.listItem`: Exposes CRUD operations for the **ListItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ListItems
    * const listItems = await prisma.listItem.findMany()
    * ```
    */
  get listItem(): Prisma.ListItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.column`: Exposes CRUD operations for the **Column** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Columns
    * const columns = await prisma.column.findMany()
    * ```
    */
  get column(): Prisma.ColumnDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cardAssignment`: Exposes CRUD operations for the **CardAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CardAssignments
    * const cardAssignments = await prisma.cardAssignment.findMany()
    * ```
    */
  get cardAssignment(): Prisma.CardAssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cardHasTag`: Exposes CRUD operations for the **CardHasTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CardHasTags
    * const cardHasTags = await prisma.cardHasTag.findMany()
    * ```
    */
  get cardHasTag(): Prisma.CardHasTagDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
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
    Board: 'Board',
    UserHasBoard: 'UserHasBoard',
    Tag: 'Tag',
    Card: 'Card',
    List: 'List',
    ListItem: 'ListItem',
    Column: 'Column',
    CardAssignment: 'CardAssignment',
    CardHasTag: 'CardHasTag'
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
      modelProps: "user" | "board" | "userHasBoard" | "tag" | "card" | "list" | "listItem" | "column" | "cardAssignment" | "cardHasTag"
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
      Board: {
        payload: Prisma.$BoardPayload<ExtArgs>
        fields: Prisma.BoardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BoardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BoardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          findFirst: {
            args: Prisma.BoardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BoardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          findMany: {
            args: Prisma.BoardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>[]
          }
          create: {
            args: Prisma.BoardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          createMany: {
            args: Prisma.BoardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BoardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>[]
          }
          delete: {
            args: Prisma.BoardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          update: {
            args: Prisma.BoardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          deleteMany: {
            args: Prisma.BoardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BoardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BoardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>[]
          }
          upsert: {
            args: Prisma.BoardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          aggregate: {
            args: Prisma.BoardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBoard>
          }
          groupBy: {
            args: Prisma.BoardGroupByArgs<ExtArgs>
            result: $Utils.Optional<BoardGroupByOutputType>[]
          }
          count: {
            args: Prisma.BoardCountArgs<ExtArgs>
            result: $Utils.Optional<BoardCountAggregateOutputType> | number
          }
        }
      }
      UserHasBoard: {
        payload: Prisma.$UserHasBoardPayload<ExtArgs>
        fields: Prisma.UserHasBoardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserHasBoardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHasBoardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserHasBoardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHasBoardPayload>
          }
          findFirst: {
            args: Prisma.UserHasBoardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHasBoardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserHasBoardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHasBoardPayload>
          }
          findMany: {
            args: Prisma.UserHasBoardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHasBoardPayload>[]
          }
          create: {
            args: Prisma.UserHasBoardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHasBoardPayload>
          }
          createMany: {
            args: Prisma.UserHasBoardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserHasBoardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHasBoardPayload>[]
          }
          delete: {
            args: Prisma.UserHasBoardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHasBoardPayload>
          }
          update: {
            args: Prisma.UserHasBoardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHasBoardPayload>
          }
          deleteMany: {
            args: Prisma.UserHasBoardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserHasBoardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserHasBoardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHasBoardPayload>[]
          }
          upsert: {
            args: Prisma.UserHasBoardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHasBoardPayload>
          }
          aggregate: {
            args: Prisma.UserHasBoardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserHasBoard>
          }
          groupBy: {
            args: Prisma.UserHasBoardGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserHasBoardGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserHasBoardCountArgs<ExtArgs>
            result: $Utils.Optional<UserHasBoardCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      Card: {
        payload: Prisma.$CardPayload<ExtArgs>
        fields: Prisma.CardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          findFirst: {
            args: Prisma.CardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          findMany: {
            args: Prisma.CardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          create: {
            args: Prisma.CardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          createMany: {
            args: Prisma.CardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          delete: {
            args: Prisma.CardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          update: {
            args: Prisma.CardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          deleteMany: {
            args: Prisma.CardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          upsert: {
            args: Prisma.CardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          aggregate: {
            args: Prisma.CardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCard>
          }
          groupBy: {
            args: Prisma.CardGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardGroupByOutputType>[]
          }
          count: {
            args: Prisma.CardCountArgs<ExtArgs>
            result: $Utils.Optional<CardCountAggregateOutputType> | number
          }
        }
      }
      List: {
        payload: Prisma.$ListPayload<ExtArgs>
        fields: Prisma.ListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          findFirst: {
            args: Prisma.ListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          findMany: {
            args: Prisma.ListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>[]
          }
          create: {
            args: Prisma.ListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          createMany: {
            args: Prisma.ListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>[]
          }
          delete: {
            args: Prisma.ListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          update: {
            args: Prisma.ListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          deleteMany: {
            args: Prisma.ListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>[]
          }
          upsert: {
            args: Prisma.ListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          aggregate: {
            args: Prisma.ListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateList>
          }
          groupBy: {
            args: Prisma.ListGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListCountArgs<ExtArgs>
            result: $Utils.Optional<ListCountAggregateOutputType> | number
          }
        }
      }
      ListItem: {
        payload: Prisma.$ListItemPayload<ExtArgs>
        fields: Prisma.ListItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListItemPayload>
          }
          findFirst: {
            args: Prisma.ListItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListItemPayload>
          }
          findMany: {
            args: Prisma.ListItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListItemPayload>[]
          }
          create: {
            args: Prisma.ListItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListItemPayload>
          }
          createMany: {
            args: Prisma.ListItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListItemPayload>[]
          }
          delete: {
            args: Prisma.ListItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListItemPayload>
          }
          update: {
            args: Prisma.ListItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListItemPayload>
          }
          deleteMany: {
            args: Prisma.ListItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ListItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListItemPayload>[]
          }
          upsert: {
            args: Prisma.ListItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListItemPayload>
          }
          aggregate: {
            args: Prisma.ListItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListItem>
          }
          groupBy: {
            args: Prisma.ListItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListItemCountArgs<ExtArgs>
            result: $Utils.Optional<ListItemCountAggregateOutputType> | number
          }
        }
      }
      Column: {
        payload: Prisma.$ColumnPayload<ExtArgs>
        fields: Prisma.ColumnFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ColumnFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ColumnFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>
          }
          findFirst: {
            args: Prisma.ColumnFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ColumnFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>
          }
          findMany: {
            args: Prisma.ColumnFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>[]
          }
          create: {
            args: Prisma.ColumnCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>
          }
          createMany: {
            args: Prisma.ColumnCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ColumnCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>[]
          }
          delete: {
            args: Prisma.ColumnDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>
          }
          update: {
            args: Prisma.ColumnUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>
          }
          deleteMany: {
            args: Prisma.ColumnDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ColumnUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ColumnUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>[]
          }
          upsert: {
            args: Prisma.ColumnUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>
          }
          aggregate: {
            args: Prisma.ColumnAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateColumn>
          }
          groupBy: {
            args: Prisma.ColumnGroupByArgs<ExtArgs>
            result: $Utils.Optional<ColumnGroupByOutputType>[]
          }
          count: {
            args: Prisma.ColumnCountArgs<ExtArgs>
            result: $Utils.Optional<ColumnCountAggregateOutputType> | number
          }
        }
      }
      CardAssignment: {
        payload: Prisma.$CardAssignmentPayload<ExtArgs>
        fields: Prisma.CardAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CardAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CardAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardAssignmentPayload>
          }
          findFirst: {
            args: Prisma.CardAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CardAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardAssignmentPayload>
          }
          findMany: {
            args: Prisma.CardAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardAssignmentPayload>[]
          }
          create: {
            args: Prisma.CardAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardAssignmentPayload>
          }
          createMany: {
            args: Prisma.CardAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CardAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardAssignmentPayload>[]
          }
          delete: {
            args: Prisma.CardAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardAssignmentPayload>
          }
          update: {
            args: Prisma.CardAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.CardAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CardAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CardAssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardAssignmentPayload>[]
          }
          upsert: {
            args: Prisma.CardAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardAssignmentPayload>
          }
          aggregate: {
            args: Prisma.CardAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCardAssignment>
          }
          groupBy: {
            args: Prisma.CardAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CardAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<CardAssignmentCountAggregateOutputType> | number
          }
        }
      }
      CardHasTag: {
        payload: Prisma.$CardHasTagPayload<ExtArgs>
        fields: Prisma.CardHasTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CardHasTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardHasTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CardHasTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardHasTagPayload>
          }
          findFirst: {
            args: Prisma.CardHasTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardHasTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CardHasTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardHasTagPayload>
          }
          findMany: {
            args: Prisma.CardHasTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardHasTagPayload>[]
          }
          create: {
            args: Prisma.CardHasTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardHasTagPayload>
          }
          createMany: {
            args: Prisma.CardHasTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CardHasTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardHasTagPayload>[]
          }
          delete: {
            args: Prisma.CardHasTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardHasTagPayload>
          }
          update: {
            args: Prisma.CardHasTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardHasTagPayload>
          }
          deleteMany: {
            args: Prisma.CardHasTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CardHasTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CardHasTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardHasTagPayload>[]
          }
          upsert: {
            args: Prisma.CardHasTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardHasTagPayload>
          }
          aggregate: {
            args: Prisma.CardHasTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCardHasTag>
          }
          groupBy: {
            args: Prisma.CardHasTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardHasTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.CardHasTagCountArgs<ExtArgs>
            result: $Utils.Optional<CardHasTagCountAggregateOutputType> | number
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
    board?: BoardOmit
    userHasBoard?: UserHasBoardOmit
    tag?: TagOmit
    card?: CardOmit
    list?: ListOmit
    listItem?: ListItemOmit
    column?: ColumnOmit
    cardAssignment?: CardAssignmentOmit
    cardHasTag?: CardHasTagOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    UserHasBoard: number
    Card: number
    CardAssignment: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserHasBoard?: boolean | UserCountOutputTypeCountUserHasBoardArgs
    Card?: boolean | UserCountOutputTypeCountCardArgs
    CardAssignment?: boolean | UserCountOutputTypeCountCardAssignmentArgs
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
  export type UserCountOutputTypeCountUserHasBoardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserHasBoardWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCardAssignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardAssignmentWhereInput
  }


  /**
   * Count Type BoardCountOutputType
   */

  export type BoardCountOutputType = {
    UserHasBoard: number
    Tag: number
    Column: number
  }

  export type BoardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserHasBoard?: boolean | BoardCountOutputTypeCountUserHasBoardArgs
    Tag?: boolean | BoardCountOutputTypeCountTagArgs
    Column?: boolean | BoardCountOutputTypeCountColumnArgs
  }

  // Custom InputTypes
  /**
   * BoardCountOutputType without action
   */
  export type BoardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardCountOutputType
     */
    select?: BoardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BoardCountOutputType without action
   */
  export type BoardCountOutputTypeCountUserHasBoardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserHasBoardWhereInput
  }

  /**
   * BoardCountOutputType without action
   */
  export type BoardCountOutputTypeCountTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }

  /**
   * BoardCountOutputType without action
   */
  export type BoardCountOutputTypeCountColumnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ColumnWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    CardHasTag: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CardHasTag?: boolean | TagCountOutputTypeCountCardHasTagArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountCardHasTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardHasTagWhereInput
  }


  /**
   * Count Type CardCountOutputType
   */

  export type CardCountOutputType = {
    List: number
    CardAssignment: number
    CardHasTag: number
  }

  export type CardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    List?: boolean | CardCountOutputTypeCountListArgs
    CardAssignment?: boolean | CardCountOutputTypeCountCardAssignmentArgs
    CardHasTag?: boolean | CardCountOutputTypeCountCardHasTagArgs
  }

  // Custom InputTypes
  /**
   * CardCountOutputType without action
   */
  export type CardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardCountOutputType
     */
    select?: CardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CardCountOutputType without action
   */
  export type CardCountOutputTypeCountListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListWhereInput
  }

  /**
   * CardCountOutputType without action
   */
  export type CardCountOutputTypeCountCardAssignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardAssignmentWhereInput
  }

  /**
   * CardCountOutputType without action
   */
  export type CardCountOutputTypeCountCardHasTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardHasTagWhereInput
  }


  /**
   * Count Type ListCountOutputType
   */

  export type ListCountOutputType = {
    ListItem: number
  }

  export type ListCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ListItem?: boolean | ListCountOutputTypeCountListItemArgs
  }

  // Custom InputTypes
  /**
   * ListCountOutputType without action
   */
  export type ListCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListCountOutputType
     */
    select?: ListCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ListCountOutputType without action
   */
  export type ListCountOutputTypeCountListItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListItemWhereInput
  }


  /**
   * Count Type ColumnCountOutputType
   */

  export type ColumnCountOutputType = {
    Card: number
  }

  export type ColumnCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Card?: boolean | ColumnCountOutputTypeCountCardArgs
  }

  // Custom InputTypes
  /**
   * ColumnCountOutputType without action
   */
  export type ColumnCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnCountOutputType
     */
    select?: ColumnCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ColumnCountOutputType without action
   */
  export type ColumnCountOutputTypeCountCardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardWhereInput
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
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    password: string | null
    pictureUrl: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    password: string | null
    pictureUrl: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    password: number
    pictureUrl: number
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
    email?: true
    username?: true
    password?: true
    pictureUrl?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    pictureUrl?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    pictureUrl?: true
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
    email: string
    username: string
    password: string
    pictureUrl: string
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
    email?: boolean
    username?: boolean
    password?: boolean
    pictureUrl?: boolean
    UserHasBoard?: boolean | User$UserHasBoardArgs<ExtArgs>
    Card?: boolean | User$CardArgs<ExtArgs>
    CardAssignment?: boolean | User$CardAssignmentArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    pictureUrl?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    pictureUrl?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    pictureUrl?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "password" | "pictureUrl", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserHasBoard?: boolean | User$UserHasBoardArgs<ExtArgs>
    Card?: boolean | User$CardArgs<ExtArgs>
    CardAssignment?: boolean | User$CardAssignmentArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      UserHasBoard: Prisma.$UserHasBoardPayload<ExtArgs>[]
      Card: Prisma.$CardPayload<ExtArgs>[]
      CardAssignment: Prisma.$CardAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      username: string
      password: string
      pictureUrl: string
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
    UserHasBoard<T extends User$UserHasBoardArgs<ExtArgs> = {}>(args?: Subset<T, User$UserHasBoardArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserHasBoardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Card<T extends User$CardArgs<ExtArgs> = {}>(args?: Subset<T, User$CardArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CardAssignment<T extends User$CardAssignmentArgs<ExtArgs> = {}>(args?: Subset<T, User$CardAssignmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly pictureUrl: FieldRef<"User", 'String'>
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
   * User.UserHasBoard
   */
  export type User$UserHasBoardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHasBoard
     */
    select?: UserHasBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHasBoard
     */
    omit?: UserHasBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHasBoardInclude<ExtArgs> | null
    where?: UserHasBoardWhereInput
    orderBy?: UserHasBoardOrderByWithRelationInput | UserHasBoardOrderByWithRelationInput[]
    cursor?: UserHasBoardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserHasBoardScalarFieldEnum | UserHasBoardScalarFieldEnum[]
  }

  /**
   * User.Card
   */
  export type User$CardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    where?: CardWhereInput
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    cursor?: CardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * User.CardAssignment
   */
  export type User$CardAssignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardAssignment
     */
    select?: CardAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardAssignment
     */
    omit?: CardAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardAssignmentInclude<ExtArgs> | null
    where?: CardAssignmentWhereInput
    orderBy?: CardAssignmentOrderByWithRelationInput | CardAssignmentOrderByWithRelationInput[]
    cursor?: CardAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CardAssignmentScalarFieldEnum | CardAssignmentScalarFieldEnum[]
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
   * Model Board
   */

  export type AggregateBoard = {
    _count: BoardCountAggregateOutputType | null
    _avg: BoardAvgAggregateOutputType | null
    _sum: BoardSumAggregateOutputType | null
    _min: BoardMinAggregateOutputType | null
    _max: BoardMaxAggregateOutputType | null
  }

  export type BoardAvgAggregateOutputType = {
    id: number | null
  }

  export type BoardSumAggregateOutputType = {
    id: number | null
  }

  export type BoardMinAggregateOutputType = {
    id: number | null
    name: string | null
    LastEdited: string | null
    Color: string | null
  }

  export type BoardMaxAggregateOutputType = {
    id: number | null
    name: string | null
    LastEdited: string | null
    Color: string | null
  }

  export type BoardCountAggregateOutputType = {
    id: number
    name: number
    LastEdited: number
    Color: number
    _all: number
  }


  export type BoardAvgAggregateInputType = {
    id?: true
  }

  export type BoardSumAggregateInputType = {
    id?: true
  }

  export type BoardMinAggregateInputType = {
    id?: true
    name?: true
    LastEdited?: true
    Color?: true
  }

  export type BoardMaxAggregateInputType = {
    id?: true
    name?: true
    LastEdited?: true
    Color?: true
  }

  export type BoardCountAggregateInputType = {
    id?: true
    name?: true
    LastEdited?: true
    Color?: true
    _all?: true
  }

  export type BoardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Board to aggregate.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Boards
    **/
    _count?: true | BoardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BoardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BoardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoardMaxAggregateInputType
  }

  export type GetBoardAggregateType<T extends BoardAggregateArgs> = {
        [P in keyof T & keyof AggregateBoard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoard[P]>
      : GetScalarType<T[P], AggregateBoard[P]>
  }




  export type BoardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoardWhereInput
    orderBy?: BoardOrderByWithAggregationInput | BoardOrderByWithAggregationInput[]
    by: BoardScalarFieldEnum[] | BoardScalarFieldEnum
    having?: BoardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoardCountAggregateInputType | true
    _avg?: BoardAvgAggregateInputType
    _sum?: BoardSumAggregateInputType
    _min?: BoardMinAggregateInputType
    _max?: BoardMaxAggregateInputType
  }

  export type BoardGroupByOutputType = {
    id: number
    name: string
    LastEdited: string
    Color: string
    _count: BoardCountAggregateOutputType | null
    _avg: BoardAvgAggregateOutputType | null
    _sum: BoardSumAggregateOutputType | null
    _min: BoardMinAggregateOutputType | null
    _max: BoardMaxAggregateOutputType | null
  }

  type GetBoardGroupByPayload<T extends BoardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BoardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoardGroupByOutputType[P]>
            : GetScalarType<T[P], BoardGroupByOutputType[P]>
        }
      >
    >


  export type BoardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    LastEdited?: boolean
    Color?: boolean
    UserHasBoard?: boolean | Board$UserHasBoardArgs<ExtArgs>
    Tag?: boolean | Board$TagArgs<ExtArgs>
    Column?: boolean | Board$ColumnArgs<ExtArgs>
    _count?: boolean | BoardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["board"]>

  export type BoardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    LastEdited?: boolean
    Color?: boolean
  }, ExtArgs["result"]["board"]>

  export type BoardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    LastEdited?: boolean
    Color?: boolean
  }, ExtArgs["result"]["board"]>

  export type BoardSelectScalar = {
    id?: boolean
    name?: boolean
    LastEdited?: boolean
    Color?: boolean
  }

  export type BoardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "LastEdited" | "Color", ExtArgs["result"]["board"]>
  export type BoardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserHasBoard?: boolean | Board$UserHasBoardArgs<ExtArgs>
    Tag?: boolean | Board$TagArgs<ExtArgs>
    Column?: boolean | Board$ColumnArgs<ExtArgs>
    _count?: boolean | BoardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BoardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BoardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BoardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Board"
    objects: {
      UserHasBoard: Prisma.$UserHasBoardPayload<ExtArgs>[]
      Tag: Prisma.$TagPayload<ExtArgs>[]
      Column: Prisma.$ColumnPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      LastEdited: string
      Color: string
    }, ExtArgs["result"]["board"]>
    composites: {}
  }

  type BoardGetPayload<S extends boolean | null | undefined | BoardDefaultArgs> = $Result.GetResult<Prisma.$BoardPayload, S>

  type BoardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BoardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BoardCountAggregateInputType | true
    }

  export interface BoardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Board'], meta: { name: 'Board' } }
    /**
     * Find zero or one Board that matches the filter.
     * @param {BoardFindUniqueArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BoardFindUniqueArgs>(args: SelectSubset<T, BoardFindUniqueArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Board that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BoardFindUniqueOrThrowArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BoardFindUniqueOrThrowArgs>(args: SelectSubset<T, BoardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Board that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindFirstArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BoardFindFirstArgs>(args?: SelectSubset<T, BoardFindFirstArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Board that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindFirstOrThrowArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BoardFindFirstOrThrowArgs>(args?: SelectSubset<T, BoardFindFirstOrThrowArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Boards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Boards
     * const boards = await prisma.board.findMany()
     * 
     * // Get first 10 Boards
     * const boards = await prisma.board.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boardWithIdOnly = await prisma.board.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BoardFindManyArgs>(args?: SelectSubset<T, BoardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Board.
     * @param {BoardCreateArgs} args - Arguments to create a Board.
     * @example
     * // Create one Board
     * const Board = await prisma.board.create({
     *   data: {
     *     // ... data to create a Board
     *   }
     * })
     * 
     */
    create<T extends BoardCreateArgs>(args: SelectSubset<T, BoardCreateArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Boards.
     * @param {BoardCreateManyArgs} args - Arguments to create many Boards.
     * @example
     * // Create many Boards
     * const board = await prisma.board.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BoardCreateManyArgs>(args?: SelectSubset<T, BoardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Boards and returns the data saved in the database.
     * @param {BoardCreateManyAndReturnArgs} args - Arguments to create many Boards.
     * @example
     * // Create many Boards
     * const board = await prisma.board.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Boards and only return the `id`
     * const boardWithIdOnly = await prisma.board.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BoardCreateManyAndReturnArgs>(args?: SelectSubset<T, BoardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Board.
     * @param {BoardDeleteArgs} args - Arguments to delete one Board.
     * @example
     * // Delete one Board
     * const Board = await prisma.board.delete({
     *   where: {
     *     // ... filter to delete one Board
     *   }
     * })
     * 
     */
    delete<T extends BoardDeleteArgs>(args: SelectSubset<T, BoardDeleteArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Board.
     * @param {BoardUpdateArgs} args - Arguments to update one Board.
     * @example
     * // Update one Board
     * const board = await prisma.board.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BoardUpdateArgs>(args: SelectSubset<T, BoardUpdateArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Boards.
     * @param {BoardDeleteManyArgs} args - Arguments to filter Boards to delete.
     * @example
     * // Delete a few Boards
     * const { count } = await prisma.board.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BoardDeleteManyArgs>(args?: SelectSubset<T, BoardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Boards
     * const board = await prisma.board.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BoardUpdateManyArgs>(args: SelectSubset<T, BoardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boards and returns the data updated in the database.
     * @param {BoardUpdateManyAndReturnArgs} args - Arguments to update many Boards.
     * @example
     * // Update many Boards
     * const board = await prisma.board.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Boards and only return the `id`
     * const boardWithIdOnly = await prisma.board.updateManyAndReturn({
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
    updateManyAndReturn<T extends BoardUpdateManyAndReturnArgs>(args: SelectSubset<T, BoardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Board.
     * @param {BoardUpsertArgs} args - Arguments to update or create a Board.
     * @example
     * // Update or create a Board
     * const board = await prisma.board.upsert({
     *   create: {
     *     // ... data to create a Board
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Board we want to update
     *   }
     * })
     */
    upsert<T extends BoardUpsertArgs>(args: SelectSubset<T, BoardUpsertArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardCountArgs} args - Arguments to filter Boards to count.
     * @example
     * // Count the number of Boards
     * const count = await prisma.board.count({
     *   where: {
     *     // ... the filter for the Boards we want to count
     *   }
     * })
    **/
    count<T extends BoardCountArgs>(
      args?: Subset<T, BoardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Board.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BoardAggregateArgs>(args: Subset<T, BoardAggregateArgs>): Prisma.PrismaPromise<GetBoardAggregateType<T>>

    /**
     * Group by Board.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardGroupByArgs} args - Group by arguments.
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
      T extends BoardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoardGroupByArgs['orderBy'] }
        : { orderBy?: BoardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BoardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Board model
   */
  readonly fields: BoardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Board.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BoardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    UserHasBoard<T extends Board$UserHasBoardArgs<ExtArgs> = {}>(args?: Subset<T, Board$UserHasBoardArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserHasBoardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Tag<T extends Board$TagArgs<ExtArgs> = {}>(args?: Subset<T, Board$TagArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Column<T extends Board$ColumnArgs<ExtArgs> = {}>(args?: Subset<T, Board$ColumnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Board model
   */
  interface BoardFieldRefs {
    readonly id: FieldRef<"Board", 'Int'>
    readonly name: FieldRef<"Board", 'String'>
    readonly LastEdited: FieldRef<"Board", 'String'>
    readonly Color: FieldRef<"Board", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Board findUnique
   */
  export type BoardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board findUniqueOrThrow
   */
  export type BoardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board findFirst
   */
  export type BoardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boards.
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boards.
     */
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }

  /**
   * Board findFirstOrThrow
   */
  export type BoardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boards.
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boards.
     */
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }

  /**
   * Board findMany
   */
  export type BoardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Boards to fetch.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Boards.
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }

  /**
   * Board create
   */
  export type BoardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * The data needed to create a Board.
     */
    data: XOR<BoardCreateInput, BoardUncheckedCreateInput>
  }

  /**
   * Board createMany
   */
  export type BoardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Boards.
     */
    data: BoardCreateManyInput | BoardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Board createManyAndReturn
   */
  export type BoardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * The data used to create many Boards.
     */
    data: BoardCreateManyInput | BoardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Board update
   */
  export type BoardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * The data needed to update a Board.
     */
    data: XOR<BoardUpdateInput, BoardUncheckedUpdateInput>
    /**
     * Choose, which Board to update.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board updateMany
   */
  export type BoardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Boards.
     */
    data: XOR<BoardUpdateManyMutationInput, BoardUncheckedUpdateManyInput>
    /**
     * Filter which Boards to update
     */
    where?: BoardWhereInput
    /**
     * Limit how many Boards to update.
     */
    limit?: number
  }

  /**
   * Board updateManyAndReturn
   */
  export type BoardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * The data used to update Boards.
     */
    data: XOR<BoardUpdateManyMutationInput, BoardUncheckedUpdateManyInput>
    /**
     * Filter which Boards to update
     */
    where?: BoardWhereInput
    /**
     * Limit how many Boards to update.
     */
    limit?: number
  }

  /**
   * Board upsert
   */
  export type BoardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * The filter to search for the Board to update in case it exists.
     */
    where: BoardWhereUniqueInput
    /**
     * In case the Board found by the `where` argument doesn't exist, create a new Board with this data.
     */
    create: XOR<BoardCreateInput, BoardUncheckedCreateInput>
    /**
     * In case the Board was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoardUpdateInput, BoardUncheckedUpdateInput>
  }

  /**
   * Board delete
   */
  export type BoardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter which Board to delete.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board deleteMany
   */
  export type BoardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Boards to delete
     */
    where?: BoardWhereInput
    /**
     * Limit how many Boards to delete.
     */
    limit?: number
  }

  /**
   * Board.UserHasBoard
   */
  export type Board$UserHasBoardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHasBoard
     */
    select?: UserHasBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHasBoard
     */
    omit?: UserHasBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHasBoardInclude<ExtArgs> | null
    where?: UserHasBoardWhereInput
    orderBy?: UserHasBoardOrderByWithRelationInput | UserHasBoardOrderByWithRelationInput[]
    cursor?: UserHasBoardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserHasBoardScalarFieldEnum | UserHasBoardScalarFieldEnum[]
  }

  /**
   * Board.Tag
   */
  export type Board$TagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Board.Column
   */
  export type Board$ColumnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    where?: ColumnWhereInput
    orderBy?: ColumnOrderByWithRelationInput | ColumnOrderByWithRelationInput[]
    cursor?: ColumnWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ColumnScalarFieldEnum | ColumnScalarFieldEnum[]
  }

  /**
   * Board without action
   */
  export type BoardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
  }


  /**
   * Model UserHasBoard
   */

  export type AggregateUserHasBoard = {
    _count: UserHasBoardCountAggregateOutputType | null
    _avg: UserHasBoardAvgAggregateOutputType | null
    _sum: UserHasBoardSumAggregateOutputType | null
    _min: UserHasBoardMinAggregateOutputType | null
    _max: UserHasBoardMaxAggregateOutputType | null
  }

  export type UserHasBoardAvgAggregateOutputType = {
    id: number | null
    boardId: number | null
    userId: number | null
  }

  export type UserHasBoardSumAggregateOutputType = {
    id: number | null
    boardId: number | null
    userId: number | null
  }

  export type UserHasBoardMinAggregateOutputType = {
    id: number | null
    role: string | null
    boardId: number | null
    userId: number | null
  }

  export type UserHasBoardMaxAggregateOutputType = {
    id: number | null
    role: string | null
    boardId: number | null
    userId: number | null
  }

  export type UserHasBoardCountAggregateOutputType = {
    id: number
    role: number
    boardId: number
    userId: number
    _all: number
  }


  export type UserHasBoardAvgAggregateInputType = {
    id?: true
    boardId?: true
    userId?: true
  }

  export type UserHasBoardSumAggregateInputType = {
    id?: true
    boardId?: true
    userId?: true
  }

  export type UserHasBoardMinAggregateInputType = {
    id?: true
    role?: true
    boardId?: true
    userId?: true
  }

  export type UserHasBoardMaxAggregateInputType = {
    id?: true
    role?: true
    boardId?: true
    userId?: true
  }

  export type UserHasBoardCountAggregateInputType = {
    id?: true
    role?: true
    boardId?: true
    userId?: true
    _all?: true
  }

  export type UserHasBoardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserHasBoard to aggregate.
     */
    where?: UserHasBoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserHasBoards to fetch.
     */
    orderBy?: UserHasBoardOrderByWithRelationInput | UserHasBoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserHasBoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserHasBoards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserHasBoards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserHasBoards
    **/
    _count?: true | UserHasBoardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserHasBoardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserHasBoardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserHasBoardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserHasBoardMaxAggregateInputType
  }

  export type GetUserHasBoardAggregateType<T extends UserHasBoardAggregateArgs> = {
        [P in keyof T & keyof AggregateUserHasBoard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserHasBoard[P]>
      : GetScalarType<T[P], AggregateUserHasBoard[P]>
  }




  export type UserHasBoardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserHasBoardWhereInput
    orderBy?: UserHasBoardOrderByWithAggregationInput | UserHasBoardOrderByWithAggregationInput[]
    by: UserHasBoardScalarFieldEnum[] | UserHasBoardScalarFieldEnum
    having?: UserHasBoardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserHasBoardCountAggregateInputType | true
    _avg?: UserHasBoardAvgAggregateInputType
    _sum?: UserHasBoardSumAggregateInputType
    _min?: UserHasBoardMinAggregateInputType
    _max?: UserHasBoardMaxAggregateInputType
  }

  export type UserHasBoardGroupByOutputType = {
    id: number
    role: string
    boardId: number
    userId: number
    _count: UserHasBoardCountAggregateOutputType | null
    _avg: UserHasBoardAvgAggregateOutputType | null
    _sum: UserHasBoardSumAggregateOutputType | null
    _min: UserHasBoardMinAggregateOutputType | null
    _max: UserHasBoardMaxAggregateOutputType | null
  }

  type GetUserHasBoardGroupByPayload<T extends UserHasBoardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserHasBoardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserHasBoardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserHasBoardGroupByOutputType[P]>
            : GetScalarType<T[P], UserHasBoardGroupByOutputType[P]>
        }
      >
    >


  export type UserHasBoardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    boardId?: boolean
    userId?: boolean
    board?: boolean | BoardDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userHasBoard"]>

  export type UserHasBoardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    boardId?: boolean
    userId?: boolean
    board?: boolean | BoardDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userHasBoard"]>

  export type UserHasBoardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    boardId?: boolean
    userId?: boolean
    board?: boolean | BoardDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userHasBoard"]>

  export type UserHasBoardSelectScalar = {
    id?: boolean
    role?: boolean
    boardId?: boolean
    userId?: boolean
  }

  export type UserHasBoardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "boardId" | "userId", ExtArgs["result"]["userHasBoard"]>
  export type UserHasBoardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    board?: boolean | BoardDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserHasBoardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    board?: boolean | BoardDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserHasBoardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    board?: boolean | BoardDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserHasBoardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserHasBoard"
    objects: {
      board: Prisma.$BoardPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      role: string
      boardId: number
      userId: number
    }, ExtArgs["result"]["userHasBoard"]>
    composites: {}
  }

  type UserHasBoardGetPayload<S extends boolean | null | undefined | UserHasBoardDefaultArgs> = $Result.GetResult<Prisma.$UserHasBoardPayload, S>

  type UserHasBoardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserHasBoardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserHasBoardCountAggregateInputType | true
    }

  export interface UserHasBoardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserHasBoard'], meta: { name: 'UserHasBoard' } }
    /**
     * Find zero or one UserHasBoard that matches the filter.
     * @param {UserHasBoardFindUniqueArgs} args - Arguments to find a UserHasBoard
     * @example
     * // Get one UserHasBoard
     * const userHasBoard = await prisma.userHasBoard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserHasBoardFindUniqueArgs>(args: SelectSubset<T, UserHasBoardFindUniqueArgs<ExtArgs>>): Prisma__UserHasBoardClient<$Result.GetResult<Prisma.$UserHasBoardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserHasBoard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserHasBoardFindUniqueOrThrowArgs} args - Arguments to find a UserHasBoard
     * @example
     * // Get one UserHasBoard
     * const userHasBoard = await prisma.userHasBoard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserHasBoardFindUniqueOrThrowArgs>(args: SelectSubset<T, UserHasBoardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserHasBoardClient<$Result.GetResult<Prisma.$UserHasBoardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserHasBoard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHasBoardFindFirstArgs} args - Arguments to find a UserHasBoard
     * @example
     * // Get one UserHasBoard
     * const userHasBoard = await prisma.userHasBoard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserHasBoardFindFirstArgs>(args?: SelectSubset<T, UserHasBoardFindFirstArgs<ExtArgs>>): Prisma__UserHasBoardClient<$Result.GetResult<Prisma.$UserHasBoardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserHasBoard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHasBoardFindFirstOrThrowArgs} args - Arguments to find a UserHasBoard
     * @example
     * // Get one UserHasBoard
     * const userHasBoard = await prisma.userHasBoard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserHasBoardFindFirstOrThrowArgs>(args?: SelectSubset<T, UserHasBoardFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserHasBoardClient<$Result.GetResult<Prisma.$UserHasBoardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserHasBoards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHasBoardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserHasBoards
     * const userHasBoards = await prisma.userHasBoard.findMany()
     * 
     * // Get first 10 UserHasBoards
     * const userHasBoards = await prisma.userHasBoard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userHasBoardWithIdOnly = await prisma.userHasBoard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserHasBoardFindManyArgs>(args?: SelectSubset<T, UserHasBoardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserHasBoardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserHasBoard.
     * @param {UserHasBoardCreateArgs} args - Arguments to create a UserHasBoard.
     * @example
     * // Create one UserHasBoard
     * const UserHasBoard = await prisma.userHasBoard.create({
     *   data: {
     *     // ... data to create a UserHasBoard
     *   }
     * })
     * 
     */
    create<T extends UserHasBoardCreateArgs>(args: SelectSubset<T, UserHasBoardCreateArgs<ExtArgs>>): Prisma__UserHasBoardClient<$Result.GetResult<Prisma.$UserHasBoardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserHasBoards.
     * @param {UserHasBoardCreateManyArgs} args - Arguments to create many UserHasBoards.
     * @example
     * // Create many UserHasBoards
     * const userHasBoard = await prisma.userHasBoard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserHasBoardCreateManyArgs>(args?: SelectSubset<T, UserHasBoardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserHasBoards and returns the data saved in the database.
     * @param {UserHasBoardCreateManyAndReturnArgs} args - Arguments to create many UserHasBoards.
     * @example
     * // Create many UserHasBoards
     * const userHasBoard = await prisma.userHasBoard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserHasBoards and only return the `id`
     * const userHasBoardWithIdOnly = await prisma.userHasBoard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserHasBoardCreateManyAndReturnArgs>(args?: SelectSubset<T, UserHasBoardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserHasBoardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserHasBoard.
     * @param {UserHasBoardDeleteArgs} args - Arguments to delete one UserHasBoard.
     * @example
     * // Delete one UserHasBoard
     * const UserHasBoard = await prisma.userHasBoard.delete({
     *   where: {
     *     // ... filter to delete one UserHasBoard
     *   }
     * })
     * 
     */
    delete<T extends UserHasBoardDeleteArgs>(args: SelectSubset<T, UserHasBoardDeleteArgs<ExtArgs>>): Prisma__UserHasBoardClient<$Result.GetResult<Prisma.$UserHasBoardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserHasBoard.
     * @param {UserHasBoardUpdateArgs} args - Arguments to update one UserHasBoard.
     * @example
     * // Update one UserHasBoard
     * const userHasBoard = await prisma.userHasBoard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserHasBoardUpdateArgs>(args: SelectSubset<T, UserHasBoardUpdateArgs<ExtArgs>>): Prisma__UserHasBoardClient<$Result.GetResult<Prisma.$UserHasBoardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserHasBoards.
     * @param {UserHasBoardDeleteManyArgs} args - Arguments to filter UserHasBoards to delete.
     * @example
     * // Delete a few UserHasBoards
     * const { count } = await prisma.userHasBoard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserHasBoardDeleteManyArgs>(args?: SelectSubset<T, UserHasBoardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserHasBoards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHasBoardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserHasBoards
     * const userHasBoard = await prisma.userHasBoard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserHasBoardUpdateManyArgs>(args: SelectSubset<T, UserHasBoardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserHasBoards and returns the data updated in the database.
     * @param {UserHasBoardUpdateManyAndReturnArgs} args - Arguments to update many UserHasBoards.
     * @example
     * // Update many UserHasBoards
     * const userHasBoard = await prisma.userHasBoard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserHasBoards and only return the `id`
     * const userHasBoardWithIdOnly = await prisma.userHasBoard.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserHasBoardUpdateManyAndReturnArgs>(args: SelectSubset<T, UserHasBoardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserHasBoardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserHasBoard.
     * @param {UserHasBoardUpsertArgs} args - Arguments to update or create a UserHasBoard.
     * @example
     * // Update or create a UserHasBoard
     * const userHasBoard = await prisma.userHasBoard.upsert({
     *   create: {
     *     // ... data to create a UserHasBoard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserHasBoard we want to update
     *   }
     * })
     */
    upsert<T extends UserHasBoardUpsertArgs>(args: SelectSubset<T, UserHasBoardUpsertArgs<ExtArgs>>): Prisma__UserHasBoardClient<$Result.GetResult<Prisma.$UserHasBoardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserHasBoards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHasBoardCountArgs} args - Arguments to filter UserHasBoards to count.
     * @example
     * // Count the number of UserHasBoards
     * const count = await prisma.userHasBoard.count({
     *   where: {
     *     // ... the filter for the UserHasBoards we want to count
     *   }
     * })
    **/
    count<T extends UserHasBoardCountArgs>(
      args?: Subset<T, UserHasBoardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserHasBoardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserHasBoard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHasBoardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserHasBoardAggregateArgs>(args: Subset<T, UserHasBoardAggregateArgs>): Prisma.PrismaPromise<GetUserHasBoardAggregateType<T>>

    /**
     * Group by UserHasBoard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHasBoardGroupByArgs} args - Group by arguments.
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
      T extends UserHasBoardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserHasBoardGroupByArgs['orderBy'] }
        : { orderBy?: UserHasBoardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserHasBoardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserHasBoardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserHasBoard model
   */
  readonly fields: UserHasBoardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserHasBoard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserHasBoardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    board<T extends BoardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BoardDefaultArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserHasBoard model
   */
  interface UserHasBoardFieldRefs {
    readonly id: FieldRef<"UserHasBoard", 'Int'>
    readonly role: FieldRef<"UserHasBoard", 'String'>
    readonly boardId: FieldRef<"UserHasBoard", 'Int'>
    readonly userId: FieldRef<"UserHasBoard", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserHasBoard findUnique
   */
  export type UserHasBoardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHasBoard
     */
    select?: UserHasBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHasBoard
     */
    omit?: UserHasBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHasBoardInclude<ExtArgs> | null
    /**
     * Filter, which UserHasBoard to fetch.
     */
    where: UserHasBoardWhereUniqueInput
  }

  /**
   * UserHasBoard findUniqueOrThrow
   */
  export type UserHasBoardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHasBoard
     */
    select?: UserHasBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHasBoard
     */
    omit?: UserHasBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHasBoardInclude<ExtArgs> | null
    /**
     * Filter, which UserHasBoard to fetch.
     */
    where: UserHasBoardWhereUniqueInput
  }

  /**
   * UserHasBoard findFirst
   */
  export type UserHasBoardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHasBoard
     */
    select?: UserHasBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHasBoard
     */
    omit?: UserHasBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHasBoardInclude<ExtArgs> | null
    /**
     * Filter, which UserHasBoard to fetch.
     */
    where?: UserHasBoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserHasBoards to fetch.
     */
    orderBy?: UserHasBoardOrderByWithRelationInput | UserHasBoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserHasBoards.
     */
    cursor?: UserHasBoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserHasBoards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserHasBoards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserHasBoards.
     */
    distinct?: UserHasBoardScalarFieldEnum | UserHasBoardScalarFieldEnum[]
  }

  /**
   * UserHasBoard findFirstOrThrow
   */
  export type UserHasBoardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHasBoard
     */
    select?: UserHasBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHasBoard
     */
    omit?: UserHasBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHasBoardInclude<ExtArgs> | null
    /**
     * Filter, which UserHasBoard to fetch.
     */
    where?: UserHasBoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserHasBoards to fetch.
     */
    orderBy?: UserHasBoardOrderByWithRelationInput | UserHasBoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserHasBoards.
     */
    cursor?: UserHasBoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserHasBoards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserHasBoards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserHasBoards.
     */
    distinct?: UserHasBoardScalarFieldEnum | UserHasBoardScalarFieldEnum[]
  }

  /**
   * UserHasBoard findMany
   */
  export type UserHasBoardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHasBoard
     */
    select?: UserHasBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHasBoard
     */
    omit?: UserHasBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHasBoardInclude<ExtArgs> | null
    /**
     * Filter, which UserHasBoards to fetch.
     */
    where?: UserHasBoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserHasBoards to fetch.
     */
    orderBy?: UserHasBoardOrderByWithRelationInput | UserHasBoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserHasBoards.
     */
    cursor?: UserHasBoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserHasBoards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserHasBoards.
     */
    skip?: number
    distinct?: UserHasBoardScalarFieldEnum | UserHasBoardScalarFieldEnum[]
  }

  /**
   * UserHasBoard create
   */
  export type UserHasBoardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHasBoard
     */
    select?: UserHasBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHasBoard
     */
    omit?: UserHasBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHasBoardInclude<ExtArgs> | null
    /**
     * The data needed to create a UserHasBoard.
     */
    data: XOR<UserHasBoardCreateInput, UserHasBoardUncheckedCreateInput>
  }

  /**
   * UserHasBoard createMany
   */
  export type UserHasBoardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserHasBoards.
     */
    data: UserHasBoardCreateManyInput | UserHasBoardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserHasBoard createManyAndReturn
   */
  export type UserHasBoardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHasBoard
     */
    select?: UserHasBoardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserHasBoard
     */
    omit?: UserHasBoardOmit<ExtArgs> | null
    /**
     * The data used to create many UserHasBoards.
     */
    data: UserHasBoardCreateManyInput | UserHasBoardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHasBoardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserHasBoard update
   */
  export type UserHasBoardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHasBoard
     */
    select?: UserHasBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHasBoard
     */
    omit?: UserHasBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHasBoardInclude<ExtArgs> | null
    /**
     * The data needed to update a UserHasBoard.
     */
    data: XOR<UserHasBoardUpdateInput, UserHasBoardUncheckedUpdateInput>
    /**
     * Choose, which UserHasBoard to update.
     */
    where: UserHasBoardWhereUniqueInput
  }

  /**
   * UserHasBoard updateMany
   */
  export type UserHasBoardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserHasBoards.
     */
    data: XOR<UserHasBoardUpdateManyMutationInput, UserHasBoardUncheckedUpdateManyInput>
    /**
     * Filter which UserHasBoards to update
     */
    where?: UserHasBoardWhereInput
    /**
     * Limit how many UserHasBoards to update.
     */
    limit?: number
  }

  /**
   * UserHasBoard updateManyAndReturn
   */
  export type UserHasBoardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHasBoard
     */
    select?: UserHasBoardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserHasBoard
     */
    omit?: UserHasBoardOmit<ExtArgs> | null
    /**
     * The data used to update UserHasBoards.
     */
    data: XOR<UserHasBoardUpdateManyMutationInput, UserHasBoardUncheckedUpdateManyInput>
    /**
     * Filter which UserHasBoards to update
     */
    where?: UserHasBoardWhereInput
    /**
     * Limit how many UserHasBoards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHasBoardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserHasBoard upsert
   */
  export type UserHasBoardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHasBoard
     */
    select?: UserHasBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHasBoard
     */
    omit?: UserHasBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHasBoardInclude<ExtArgs> | null
    /**
     * The filter to search for the UserHasBoard to update in case it exists.
     */
    where: UserHasBoardWhereUniqueInput
    /**
     * In case the UserHasBoard found by the `where` argument doesn't exist, create a new UserHasBoard with this data.
     */
    create: XOR<UserHasBoardCreateInput, UserHasBoardUncheckedCreateInput>
    /**
     * In case the UserHasBoard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserHasBoardUpdateInput, UserHasBoardUncheckedUpdateInput>
  }

  /**
   * UserHasBoard delete
   */
  export type UserHasBoardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHasBoard
     */
    select?: UserHasBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHasBoard
     */
    omit?: UserHasBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHasBoardInclude<ExtArgs> | null
    /**
     * Filter which UserHasBoard to delete.
     */
    where: UserHasBoardWhereUniqueInput
  }

  /**
   * UserHasBoard deleteMany
   */
  export type UserHasBoardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserHasBoards to delete
     */
    where?: UserHasBoardWhereInput
    /**
     * Limit how many UserHasBoards to delete.
     */
    limit?: number
  }

  /**
   * UserHasBoard without action
   */
  export type UserHasBoardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHasBoard
     */
    select?: UserHasBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHasBoard
     */
    omit?: UserHasBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHasBoardInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagAvgAggregateOutputType = {
    id: number | null
    boardId: number | null
    cardId: number | null
  }

  export type TagSumAggregateOutputType = {
    id: number | null
    boardId: number | null
    cardId: number | null
  }

  export type TagMinAggregateOutputType = {
    id: number | null
    name: string | null
    boardId: number | null
    color: string | null
    cardId: number | null
  }

  export type TagMaxAggregateOutputType = {
    id: number | null
    name: string | null
    boardId: number | null
    color: string | null
    cardId: number | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    boardId: number
    color: number
    cardId: number
    _all: number
  }


  export type TagAvgAggregateInputType = {
    id?: true
    boardId?: true
    cardId?: true
  }

  export type TagSumAggregateInputType = {
    id?: true
    boardId?: true
    cardId?: true
  }

  export type TagMinAggregateInputType = {
    id?: true
    name?: true
    boardId?: true
    color?: true
    cardId?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
    boardId?: true
    color?: true
    cardId?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    boardId?: true
    color?: true
    cardId?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _avg?: TagAvgAggregateInputType
    _sum?: TagSumAggregateInputType
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: number
    name: string
    boardId: number
    color: string
    cardId: number | null
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    boardId?: boolean
    color?: boolean
    cardId?: boolean
    board?: boolean | BoardDefaultArgs<ExtArgs>
    CardHasTag?: boolean | Tag$CardHasTagArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    boardId?: boolean
    color?: boolean
    cardId?: boolean
    board?: boolean | BoardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    boardId?: boolean
    color?: boolean
    cardId?: boolean
    board?: boolean | BoardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
    boardId?: boolean
    color?: boolean
    cardId?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "boardId" | "color" | "cardId", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    board?: boolean | BoardDefaultArgs<ExtArgs>
    CardHasTag?: boolean | Tag$CardHasTagArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    board?: boolean | BoardDefaultArgs<ExtArgs>
  }
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    board?: boolean | BoardDefaultArgs<ExtArgs>
  }

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      board: Prisma.$BoardPayload<ExtArgs>
      CardHasTag: Prisma.$CardHasTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      boardId: number
      color: string
      cardId: number | null
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
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
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    board<T extends BoardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BoardDefaultArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    CardHasTag<T extends Tag$CardHasTagArgs<ExtArgs> = {}>(args?: Subset<T, Tag$CardHasTagArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardHasTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'Int'>
    readonly name: FieldRef<"Tag", 'String'>
    readonly boardId: FieldRef<"Tag", 'Int'>
    readonly color: FieldRef<"Tag", 'String'>
    readonly cardId: FieldRef<"Tag", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.CardHasTag
   */
  export type Tag$CardHasTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardHasTag
     */
    select?: CardHasTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardHasTag
     */
    omit?: CardHasTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardHasTagInclude<ExtArgs> | null
    where?: CardHasTagWhereInput
    orderBy?: CardHasTagOrderByWithRelationInput | CardHasTagOrderByWithRelationInput[]
    cursor?: CardHasTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CardHasTagScalarFieldEnum | CardHasTagScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model Card
   */

  export type AggregateCard = {
    _count: CardCountAggregateOutputType | null
    _avg: CardAvgAggregateOutputType | null
    _sum: CardSumAggregateOutputType | null
    _min: CardMinAggregateOutputType | null
    _max: CardMaxAggregateOutputType | null
  }

  export type CardAvgAggregateOutputType = {
    id: number | null
    creatorId: number | null
    columnId: number | null
  }

  export type CardSumAggregateOutputType = {
    id: number | null
    creatorId: number | null
    columnId: number | null
  }

  export type CardMinAggregateOutputType = {
    id: number | null
    status: string | null
    title: string | null
    content: string | null
    startDate: string | null
    endDate: string | null
    creatorId: number | null
    columnId: number | null
    color: string | null
  }

  export type CardMaxAggregateOutputType = {
    id: number | null
    status: string | null
    title: string | null
    content: string | null
    startDate: string | null
    endDate: string | null
    creatorId: number | null
    columnId: number | null
    color: string | null
  }

  export type CardCountAggregateOutputType = {
    id: number
    status: number
    title: number
    content: number
    startDate: number
    endDate: number
    creatorId: number
    columnId: number
    color: number
    _all: number
  }


  export type CardAvgAggregateInputType = {
    id?: true
    creatorId?: true
    columnId?: true
  }

  export type CardSumAggregateInputType = {
    id?: true
    creatorId?: true
    columnId?: true
  }

  export type CardMinAggregateInputType = {
    id?: true
    status?: true
    title?: true
    content?: true
    startDate?: true
    endDate?: true
    creatorId?: true
    columnId?: true
    color?: true
  }

  export type CardMaxAggregateInputType = {
    id?: true
    status?: true
    title?: true
    content?: true
    startDate?: true
    endDate?: true
    creatorId?: true
    columnId?: true
    color?: true
  }

  export type CardCountAggregateInputType = {
    id?: true
    status?: true
    title?: true
    content?: true
    startDate?: true
    endDate?: true
    creatorId?: true
    columnId?: true
    color?: true
    _all?: true
  }

  export type CardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Card to aggregate.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cards
    **/
    _count?: true | CardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardMaxAggregateInputType
  }

  export type GetCardAggregateType<T extends CardAggregateArgs> = {
        [P in keyof T & keyof AggregateCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCard[P]>
      : GetScalarType<T[P], AggregateCard[P]>
  }




  export type CardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardWhereInput
    orderBy?: CardOrderByWithAggregationInput | CardOrderByWithAggregationInput[]
    by: CardScalarFieldEnum[] | CardScalarFieldEnum
    having?: CardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardCountAggregateInputType | true
    _avg?: CardAvgAggregateInputType
    _sum?: CardSumAggregateInputType
    _min?: CardMinAggregateInputType
    _max?: CardMaxAggregateInputType
  }

  export type CardGroupByOutputType = {
    id: number
    status: string | null
    title: string
    content: string | null
    startDate: string | null
    endDate: string | null
    creatorId: number | null
    columnId: number
    color: string
    _count: CardCountAggregateOutputType | null
    _avg: CardAvgAggregateOutputType | null
    _sum: CardSumAggregateOutputType | null
    _min: CardMinAggregateOutputType | null
    _max: CardMaxAggregateOutputType | null
  }

  type GetCardGroupByPayload<T extends CardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardGroupByOutputType[P]>
            : GetScalarType<T[P], CardGroupByOutputType[P]>
        }
      >
    >


  export type CardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    title?: boolean
    content?: boolean
    startDate?: boolean
    endDate?: boolean
    creatorId?: boolean
    columnId?: boolean
    color?: boolean
    List?: boolean | Card$ListArgs<ExtArgs>
    creator?: boolean | Card$creatorArgs<ExtArgs>
    column?: boolean | ColumnDefaultArgs<ExtArgs>
    CardAssignment?: boolean | Card$CardAssignmentArgs<ExtArgs>
    CardHasTag?: boolean | Card$CardHasTagArgs<ExtArgs>
    _count?: boolean | CardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["card"]>

  export type CardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    title?: boolean
    content?: boolean
    startDate?: boolean
    endDate?: boolean
    creatorId?: boolean
    columnId?: boolean
    color?: boolean
    creator?: boolean | Card$creatorArgs<ExtArgs>
    column?: boolean | ColumnDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["card"]>

  export type CardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    title?: boolean
    content?: boolean
    startDate?: boolean
    endDate?: boolean
    creatorId?: boolean
    columnId?: boolean
    color?: boolean
    creator?: boolean | Card$creatorArgs<ExtArgs>
    column?: boolean | ColumnDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["card"]>

  export type CardSelectScalar = {
    id?: boolean
    status?: boolean
    title?: boolean
    content?: boolean
    startDate?: boolean
    endDate?: boolean
    creatorId?: boolean
    columnId?: boolean
    color?: boolean
  }

  export type CardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "title" | "content" | "startDate" | "endDate" | "creatorId" | "columnId" | "color", ExtArgs["result"]["card"]>
  export type CardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    List?: boolean | Card$ListArgs<ExtArgs>
    creator?: boolean | Card$creatorArgs<ExtArgs>
    column?: boolean | ColumnDefaultArgs<ExtArgs>
    CardAssignment?: boolean | Card$CardAssignmentArgs<ExtArgs>
    CardHasTag?: boolean | Card$CardHasTagArgs<ExtArgs>
    _count?: boolean | CardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | Card$creatorArgs<ExtArgs>
    column?: boolean | ColumnDefaultArgs<ExtArgs>
  }
  export type CardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | Card$creatorArgs<ExtArgs>
    column?: boolean | ColumnDefaultArgs<ExtArgs>
  }

  export type $CardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Card"
    objects: {
      List: Prisma.$ListPayload<ExtArgs>[]
      creator: Prisma.$UserPayload<ExtArgs> | null
      column: Prisma.$ColumnPayload<ExtArgs>
      CardAssignment: Prisma.$CardAssignmentPayload<ExtArgs>[]
      CardHasTag: Prisma.$CardHasTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: string | null
      title: string
      content: string | null
      startDate: string | null
      endDate: string | null
      creatorId: number | null
      columnId: number
      color: string
    }, ExtArgs["result"]["card"]>
    composites: {}
  }

  type CardGetPayload<S extends boolean | null | undefined | CardDefaultArgs> = $Result.GetResult<Prisma.$CardPayload, S>

  type CardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CardCountAggregateInputType | true
    }

  export interface CardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Card'], meta: { name: 'Card' } }
    /**
     * Find zero or one Card that matches the filter.
     * @param {CardFindUniqueArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardFindUniqueArgs>(args: SelectSubset<T, CardFindUniqueArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Card that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CardFindUniqueOrThrowArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardFindUniqueOrThrowArgs>(args: SelectSubset<T, CardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Card that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindFirstArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardFindFirstArgs>(args?: SelectSubset<T, CardFindFirstArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Card that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindFirstOrThrowArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardFindFirstOrThrowArgs>(args?: SelectSubset<T, CardFindFirstOrThrowArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cards
     * const cards = await prisma.card.findMany()
     * 
     * // Get first 10 Cards
     * const cards = await prisma.card.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cardWithIdOnly = await prisma.card.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CardFindManyArgs>(args?: SelectSubset<T, CardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Card.
     * @param {CardCreateArgs} args - Arguments to create a Card.
     * @example
     * // Create one Card
     * const Card = await prisma.card.create({
     *   data: {
     *     // ... data to create a Card
     *   }
     * })
     * 
     */
    create<T extends CardCreateArgs>(args: SelectSubset<T, CardCreateArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cards.
     * @param {CardCreateManyArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const card = await prisma.card.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CardCreateManyArgs>(args?: SelectSubset<T, CardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cards and returns the data saved in the database.
     * @param {CardCreateManyAndReturnArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const card = await prisma.card.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cards and only return the `id`
     * const cardWithIdOnly = await prisma.card.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CardCreateManyAndReturnArgs>(args?: SelectSubset<T, CardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Card.
     * @param {CardDeleteArgs} args - Arguments to delete one Card.
     * @example
     * // Delete one Card
     * const Card = await prisma.card.delete({
     *   where: {
     *     // ... filter to delete one Card
     *   }
     * })
     * 
     */
    delete<T extends CardDeleteArgs>(args: SelectSubset<T, CardDeleteArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Card.
     * @param {CardUpdateArgs} args - Arguments to update one Card.
     * @example
     * // Update one Card
     * const card = await prisma.card.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CardUpdateArgs>(args: SelectSubset<T, CardUpdateArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cards.
     * @param {CardDeleteManyArgs} args - Arguments to filter Cards to delete.
     * @example
     * // Delete a few Cards
     * const { count } = await prisma.card.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CardDeleteManyArgs>(args?: SelectSubset<T, CardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cards
     * const card = await prisma.card.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CardUpdateManyArgs>(args: SelectSubset<T, CardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards and returns the data updated in the database.
     * @param {CardUpdateManyAndReturnArgs} args - Arguments to update many Cards.
     * @example
     * // Update many Cards
     * const card = await prisma.card.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cards and only return the `id`
     * const cardWithIdOnly = await prisma.card.updateManyAndReturn({
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
    updateManyAndReturn<T extends CardUpdateManyAndReturnArgs>(args: SelectSubset<T, CardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Card.
     * @param {CardUpsertArgs} args - Arguments to update or create a Card.
     * @example
     * // Update or create a Card
     * const card = await prisma.card.upsert({
     *   create: {
     *     // ... data to create a Card
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Card we want to update
     *   }
     * })
     */
    upsert<T extends CardUpsertArgs>(args: SelectSubset<T, CardUpsertArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardCountArgs} args - Arguments to filter Cards to count.
     * @example
     * // Count the number of Cards
     * const count = await prisma.card.count({
     *   where: {
     *     // ... the filter for the Cards we want to count
     *   }
     * })
    **/
    count<T extends CardCountArgs>(
      args?: Subset<T, CardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CardAggregateArgs>(args: Subset<T, CardAggregateArgs>): Prisma.PrismaPromise<GetCardAggregateType<T>>

    /**
     * Group by Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardGroupByArgs} args - Group by arguments.
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
      T extends CardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardGroupByArgs['orderBy'] }
        : { orderBy?: CardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Card model
   */
  readonly fields: CardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Card.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    List<T extends Card$ListArgs<ExtArgs> = {}>(args?: Subset<T, Card$ListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    creator<T extends Card$creatorArgs<ExtArgs> = {}>(args?: Subset<T, Card$creatorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    column<T extends ColumnDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ColumnDefaultArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    CardAssignment<T extends Card$CardAssignmentArgs<ExtArgs> = {}>(args?: Subset<T, Card$CardAssignmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CardHasTag<T extends Card$CardHasTagArgs<ExtArgs> = {}>(args?: Subset<T, Card$CardHasTagArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardHasTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Card model
   */
  interface CardFieldRefs {
    readonly id: FieldRef<"Card", 'Int'>
    readonly status: FieldRef<"Card", 'String'>
    readonly title: FieldRef<"Card", 'String'>
    readonly content: FieldRef<"Card", 'String'>
    readonly startDate: FieldRef<"Card", 'String'>
    readonly endDate: FieldRef<"Card", 'String'>
    readonly creatorId: FieldRef<"Card", 'Int'>
    readonly columnId: FieldRef<"Card", 'Int'>
    readonly color: FieldRef<"Card", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Card findUnique
   */
  export type CardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card findUniqueOrThrow
   */
  export type CardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card findFirst
   */
  export type CardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card findFirstOrThrow
   */
  export type CardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card findMany
   */
  export type CardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Cards to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card create
   */
  export type CardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The data needed to create a Card.
     */
    data: XOR<CardCreateInput, CardUncheckedCreateInput>
  }

  /**
   * Card createMany
   */
  export type CardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cards.
     */
    data: CardCreateManyInput | CardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Card createManyAndReturn
   */
  export type CardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * The data used to create many Cards.
     */
    data: CardCreateManyInput | CardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Card update
   */
  export type CardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The data needed to update a Card.
     */
    data: XOR<CardUpdateInput, CardUncheckedUpdateInput>
    /**
     * Choose, which Card to update.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card updateMany
   */
  export type CardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cards.
     */
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyInput>
    /**
     * Filter which Cards to update
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to update.
     */
    limit?: number
  }

  /**
   * Card updateManyAndReturn
   */
  export type CardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * The data used to update Cards.
     */
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyInput>
    /**
     * Filter which Cards to update
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Card upsert
   */
  export type CardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The filter to search for the Card to update in case it exists.
     */
    where: CardWhereUniqueInput
    /**
     * In case the Card found by the `where` argument doesn't exist, create a new Card with this data.
     */
    create: XOR<CardCreateInput, CardUncheckedCreateInput>
    /**
     * In case the Card was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CardUpdateInput, CardUncheckedUpdateInput>
  }

  /**
   * Card delete
   */
  export type CardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter which Card to delete.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card deleteMany
   */
  export type CardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cards to delete
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to delete.
     */
    limit?: number
  }

  /**
   * Card.List
   */
  export type Card$ListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    where?: ListWhereInput
    orderBy?: ListOrderByWithRelationInput | ListOrderByWithRelationInput[]
    cursor?: ListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListScalarFieldEnum | ListScalarFieldEnum[]
  }

  /**
   * Card.creator
   */
  export type Card$creatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Card.CardAssignment
   */
  export type Card$CardAssignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardAssignment
     */
    select?: CardAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardAssignment
     */
    omit?: CardAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardAssignmentInclude<ExtArgs> | null
    where?: CardAssignmentWhereInput
    orderBy?: CardAssignmentOrderByWithRelationInput | CardAssignmentOrderByWithRelationInput[]
    cursor?: CardAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CardAssignmentScalarFieldEnum | CardAssignmentScalarFieldEnum[]
  }

  /**
   * Card.CardHasTag
   */
  export type Card$CardHasTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardHasTag
     */
    select?: CardHasTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardHasTag
     */
    omit?: CardHasTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardHasTagInclude<ExtArgs> | null
    where?: CardHasTagWhereInput
    orderBy?: CardHasTagOrderByWithRelationInput | CardHasTagOrderByWithRelationInput[]
    cursor?: CardHasTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CardHasTagScalarFieldEnum | CardHasTagScalarFieldEnum[]
  }

  /**
   * Card without action
   */
  export type CardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
  }


  /**
   * Model List
   */

  export type AggregateList = {
    _count: ListCountAggregateOutputType | null
    _avg: ListAvgAggregateOutputType | null
    _sum: ListSumAggregateOutputType | null
    _min: ListMinAggregateOutputType | null
    _max: ListMaxAggregateOutputType | null
  }

  export type ListAvgAggregateOutputType = {
    id: number | null
    cardId: number | null
  }

  export type ListSumAggregateOutputType = {
    id: number | null
    cardId: number | null
  }

  export type ListMinAggregateOutputType = {
    id: number | null
    title: string | null
    cardId: number | null
  }

  export type ListMaxAggregateOutputType = {
    id: number | null
    title: string | null
    cardId: number | null
  }

  export type ListCountAggregateOutputType = {
    id: number
    title: number
    cardId: number
    _all: number
  }


  export type ListAvgAggregateInputType = {
    id?: true
    cardId?: true
  }

  export type ListSumAggregateInputType = {
    id?: true
    cardId?: true
  }

  export type ListMinAggregateInputType = {
    id?: true
    title?: true
    cardId?: true
  }

  export type ListMaxAggregateInputType = {
    id?: true
    title?: true
    cardId?: true
  }

  export type ListCountAggregateInputType = {
    id?: true
    title?: true
    cardId?: true
    _all?: true
  }

  export type ListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which List to aggregate.
     */
    where?: ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lists to fetch.
     */
    orderBy?: ListOrderByWithRelationInput | ListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lists
    **/
    _count?: true | ListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListMaxAggregateInputType
  }

  export type GetListAggregateType<T extends ListAggregateArgs> = {
        [P in keyof T & keyof AggregateList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateList[P]>
      : GetScalarType<T[P], AggregateList[P]>
  }




  export type ListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListWhereInput
    orderBy?: ListOrderByWithAggregationInput | ListOrderByWithAggregationInput[]
    by: ListScalarFieldEnum[] | ListScalarFieldEnum
    having?: ListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListCountAggregateInputType | true
    _avg?: ListAvgAggregateInputType
    _sum?: ListSumAggregateInputType
    _min?: ListMinAggregateInputType
    _max?: ListMaxAggregateInputType
  }

  export type ListGroupByOutputType = {
    id: number
    title: string
    cardId: number
    _count: ListCountAggregateOutputType | null
    _avg: ListAvgAggregateOutputType | null
    _sum: ListSumAggregateOutputType | null
    _min: ListMinAggregateOutputType | null
    _max: ListMaxAggregateOutputType | null
  }

  type GetListGroupByPayload<T extends ListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListGroupByOutputType[P]>
            : GetScalarType<T[P], ListGroupByOutputType[P]>
        }
      >
    >


  export type ListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    cardId?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
    ListItem?: boolean | List$ListItemArgs<ExtArgs>
    _count?: boolean | ListCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["list"]>

  export type ListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    cardId?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["list"]>

  export type ListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    cardId?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["list"]>

  export type ListSelectScalar = {
    id?: boolean
    title?: boolean
    cardId?: boolean
  }

  export type ListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "cardId", ExtArgs["result"]["list"]>
  export type ListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
    ListItem?: boolean | List$ListItemArgs<ExtArgs>
    _count?: boolean | ListCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
  }
  export type ListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
  }

  export type $ListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "List"
    objects: {
      card: Prisma.$CardPayload<ExtArgs>
      ListItem: Prisma.$ListItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      cardId: number
    }, ExtArgs["result"]["list"]>
    composites: {}
  }

  type ListGetPayload<S extends boolean | null | undefined | ListDefaultArgs> = $Result.GetResult<Prisma.$ListPayload, S>

  type ListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListCountAggregateInputType | true
    }

  export interface ListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['List'], meta: { name: 'List' } }
    /**
     * Find zero or one List that matches the filter.
     * @param {ListFindUniqueArgs} args - Arguments to find a List
     * @example
     * // Get one List
     * const list = await prisma.list.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListFindUniqueArgs>(args: SelectSubset<T, ListFindUniqueArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one List that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListFindUniqueOrThrowArgs} args - Arguments to find a List
     * @example
     * // Get one List
     * const list = await prisma.list.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListFindUniqueOrThrowArgs>(args: SelectSubset<T, ListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first List that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListFindFirstArgs} args - Arguments to find a List
     * @example
     * // Get one List
     * const list = await prisma.list.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListFindFirstArgs>(args?: SelectSubset<T, ListFindFirstArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first List that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListFindFirstOrThrowArgs} args - Arguments to find a List
     * @example
     * // Get one List
     * const list = await prisma.list.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListFindFirstOrThrowArgs>(args?: SelectSubset<T, ListFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lists
     * const lists = await prisma.list.findMany()
     * 
     * // Get first 10 Lists
     * const lists = await prisma.list.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listWithIdOnly = await prisma.list.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ListFindManyArgs>(args?: SelectSubset<T, ListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a List.
     * @param {ListCreateArgs} args - Arguments to create a List.
     * @example
     * // Create one List
     * const List = await prisma.list.create({
     *   data: {
     *     // ... data to create a List
     *   }
     * })
     * 
     */
    create<T extends ListCreateArgs>(args: SelectSubset<T, ListCreateArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lists.
     * @param {ListCreateManyArgs} args - Arguments to create many Lists.
     * @example
     * // Create many Lists
     * const list = await prisma.list.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListCreateManyArgs>(args?: SelectSubset<T, ListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lists and returns the data saved in the database.
     * @param {ListCreateManyAndReturnArgs} args - Arguments to create many Lists.
     * @example
     * // Create many Lists
     * const list = await prisma.list.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lists and only return the `id`
     * const listWithIdOnly = await prisma.list.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListCreateManyAndReturnArgs>(args?: SelectSubset<T, ListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a List.
     * @param {ListDeleteArgs} args - Arguments to delete one List.
     * @example
     * // Delete one List
     * const List = await prisma.list.delete({
     *   where: {
     *     // ... filter to delete one List
     *   }
     * })
     * 
     */
    delete<T extends ListDeleteArgs>(args: SelectSubset<T, ListDeleteArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one List.
     * @param {ListUpdateArgs} args - Arguments to update one List.
     * @example
     * // Update one List
     * const list = await prisma.list.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListUpdateArgs>(args: SelectSubset<T, ListUpdateArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lists.
     * @param {ListDeleteManyArgs} args - Arguments to filter Lists to delete.
     * @example
     * // Delete a few Lists
     * const { count } = await prisma.list.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListDeleteManyArgs>(args?: SelectSubset<T, ListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lists
     * const list = await prisma.list.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListUpdateManyArgs>(args: SelectSubset<T, ListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lists and returns the data updated in the database.
     * @param {ListUpdateManyAndReturnArgs} args - Arguments to update many Lists.
     * @example
     * // Update many Lists
     * const list = await prisma.list.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lists and only return the `id`
     * const listWithIdOnly = await prisma.list.updateManyAndReturn({
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
    updateManyAndReturn<T extends ListUpdateManyAndReturnArgs>(args: SelectSubset<T, ListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one List.
     * @param {ListUpsertArgs} args - Arguments to update or create a List.
     * @example
     * // Update or create a List
     * const list = await prisma.list.upsert({
     *   create: {
     *     // ... data to create a List
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the List we want to update
     *   }
     * })
     */
    upsert<T extends ListUpsertArgs>(args: SelectSubset<T, ListUpsertArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListCountArgs} args - Arguments to filter Lists to count.
     * @example
     * // Count the number of Lists
     * const count = await prisma.list.count({
     *   where: {
     *     // ... the filter for the Lists we want to count
     *   }
     * })
    **/
    count<T extends ListCountArgs>(
      args?: Subset<T, ListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a List.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ListAggregateArgs>(args: Subset<T, ListAggregateArgs>): Prisma.PrismaPromise<GetListAggregateType<T>>

    /**
     * Group by List.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListGroupByArgs} args - Group by arguments.
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
      T extends ListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListGroupByArgs['orderBy'] }
        : { orderBy?: ListGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the List model
   */
  readonly fields: ListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for List.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    card<T extends CardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CardDefaultArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ListItem<T extends List$ListItemArgs<ExtArgs> = {}>(args?: Subset<T, List$ListItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the List model
   */
  interface ListFieldRefs {
    readonly id: FieldRef<"List", 'Int'>
    readonly title: FieldRef<"List", 'String'>
    readonly cardId: FieldRef<"List", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * List findUnique
   */
  export type ListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter, which List to fetch.
     */
    where: ListWhereUniqueInput
  }

  /**
   * List findUniqueOrThrow
   */
  export type ListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter, which List to fetch.
     */
    where: ListWhereUniqueInput
  }

  /**
   * List findFirst
   */
  export type ListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter, which List to fetch.
     */
    where?: ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lists to fetch.
     */
    orderBy?: ListOrderByWithRelationInput | ListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lists.
     */
    cursor?: ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lists.
     */
    distinct?: ListScalarFieldEnum | ListScalarFieldEnum[]
  }

  /**
   * List findFirstOrThrow
   */
  export type ListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter, which List to fetch.
     */
    where?: ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lists to fetch.
     */
    orderBy?: ListOrderByWithRelationInput | ListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lists.
     */
    cursor?: ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lists.
     */
    distinct?: ListScalarFieldEnum | ListScalarFieldEnum[]
  }

  /**
   * List findMany
   */
  export type ListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter, which Lists to fetch.
     */
    where?: ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lists to fetch.
     */
    orderBy?: ListOrderByWithRelationInput | ListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lists.
     */
    cursor?: ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lists.
     */
    skip?: number
    distinct?: ListScalarFieldEnum | ListScalarFieldEnum[]
  }

  /**
   * List create
   */
  export type ListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * The data needed to create a List.
     */
    data: XOR<ListCreateInput, ListUncheckedCreateInput>
  }

  /**
   * List createMany
   */
  export type ListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lists.
     */
    data: ListCreateManyInput | ListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * List createManyAndReturn
   */
  export type ListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * The data used to create many Lists.
     */
    data: ListCreateManyInput | ListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * List update
   */
  export type ListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * The data needed to update a List.
     */
    data: XOR<ListUpdateInput, ListUncheckedUpdateInput>
    /**
     * Choose, which List to update.
     */
    where: ListWhereUniqueInput
  }

  /**
   * List updateMany
   */
  export type ListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lists.
     */
    data: XOR<ListUpdateManyMutationInput, ListUncheckedUpdateManyInput>
    /**
     * Filter which Lists to update
     */
    where?: ListWhereInput
    /**
     * Limit how many Lists to update.
     */
    limit?: number
  }

  /**
   * List updateManyAndReturn
   */
  export type ListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * The data used to update Lists.
     */
    data: XOR<ListUpdateManyMutationInput, ListUncheckedUpdateManyInput>
    /**
     * Filter which Lists to update
     */
    where?: ListWhereInput
    /**
     * Limit how many Lists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * List upsert
   */
  export type ListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * The filter to search for the List to update in case it exists.
     */
    where: ListWhereUniqueInput
    /**
     * In case the List found by the `where` argument doesn't exist, create a new List with this data.
     */
    create: XOR<ListCreateInput, ListUncheckedCreateInput>
    /**
     * In case the List was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListUpdateInput, ListUncheckedUpdateInput>
  }

  /**
   * List delete
   */
  export type ListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter which List to delete.
     */
    where: ListWhereUniqueInput
  }

  /**
   * List deleteMany
   */
  export type ListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lists to delete
     */
    where?: ListWhereInput
    /**
     * Limit how many Lists to delete.
     */
    limit?: number
  }

  /**
   * List.ListItem
   */
  export type List$ListItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItem
     */
    select?: ListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItem
     */
    omit?: ListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemInclude<ExtArgs> | null
    where?: ListItemWhereInput
    orderBy?: ListItemOrderByWithRelationInput | ListItemOrderByWithRelationInput[]
    cursor?: ListItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListItemScalarFieldEnum | ListItemScalarFieldEnum[]
  }

  /**
   * List without action
   */
  export type ListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
  }


  /**
   * Model ListItem
   */

  export type AggregateListItem = {
    _count: ListItemCountAggregateOutputType | null
    _avg: ListItemAvgAggregateOutputType | null
    _sum: ListItemSumAggregateOutputType | null
    _min: ListItemMinAggregateOutputType | null
    _max: ListItemMaxAggregateOutputType | null
  }

  export type ListItemAvgAggregateOutputType = {
    id: number | null
    listId: number | null
    order: number | null
  }

  export type ListItemSumAggregateOutputType = {
    id: number | null
    listId: number | null
    order: number | null
  }

  export type ListItemMinAggregateOutputType = {
    id: number | null
    content: string | null
    listId: number | null
    status: boolean | null
    order: number | null
  }

  export type ListItemMaxAggregateOutputType = {
    id: number | null
    content: string | null
    listId: number | null
    status: boolean | null
    order: number | null
  }

  export type ListItemCountAggregateOutputType = {
    id: number
    content: number
    listId: number
    status: number
    order: number
    _all: number
  }


  export type ListItemAvgAggregateInputType = {
    id?: true
    listId?: true
    order?: true
  }

  export type ListItemSumAggregateInputType = {
    id?: true
    listId?: true
    order?: true
  }

  export type ListItemMinAggregateInputType = {
    id?: true
    content?: true
    listId?: true
    status?: true
    order?: true
  }

  export type ListItemMaxAggregateInputType = {
    id?: true
    content?: true
    listId?: true
    status?: true
    order?: true
  }

  export type ListItemCountAggregateInputType = {
    id?: true
    content?: true
    listId?: true
    status?: true
    order?: true
    _all?: true
  }

  export type ListItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListItem to aggregate.
     */
    where?: ListItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListItems to fetch.
     */
    orderBy?: ListItemOrderByWithRelationInput | ListItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ListItems
    **/
    _count?: true | ListItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListItemMaxAggregateInputType
  }

  export type GetListItemAggregateType<T extends ListItemAggregateArgs> = {
        [P in keyof T & keyof AggregateListItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListItem[P]>
      : GetScalarType<T[P], AggregateListItem[P]>
  }




  export type ListItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListItemWhereInput
    orderBy?: ListItemOrderByWithAggregationInput | ListItemOrderByWithAggregationInput[]
    by: ListItemScalarFieldEnum[] | ListItemScalarFieldEnum
    having?: ListItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListItemCountAggregateInputType | true
    _avg?: ListItemAvgAggregateInputType
    _sum?: ListItemSumAggregateInputType
    _min?: ListItemMinAggregateInputType
    _max?: ListItemMaxAggregateInputType
  }

  export type ListItemGroupByOutputType = {
    id: number
    content: string
    listId: number
    status: boolean
    order: number
    _count: ListItemCountAggregateOutputType | null
    _avg: ListItemAvgAggregateOutputType | null
    _sum: ListItemSumAggregateOutputType | null
    _min: ListItemMinAggregateOutputType | null
    _max: ListItemMaxAggregateOutputType | null
  }

  type GetListItemGroupByPayload<T extends ListItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListItemGroupByOutputType[P]>
            : GetScalarType<T[P], ListItemGroupByOutputType[P]>
        }
      >
    >


  export type ListItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    listId?: boolean
    status?: boolean
    order?: boolean
    list?: boolean | ListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listItem"]>

  export type ListItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    listId?: boolean
    status?: boolean
    order?: boolean
    list?: boolean | ListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listItem"]>

  export type ListItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    listId?: boolean
    status?: boolean
    order?: boolean
    list?: boolean | ListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listItem"]>

  export type ListItemSelectScalar = {
    id?: boolean
    content?: boolean
    listId?: boolean
    status?: boolean
    order?: boolean
  }

  export type ListItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "listId" | "status" | "order", ExtArgs["result"]["listItem"]>
  export type ListItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | ListDefaultArgs<ExtArgs>
  }
  export type ListItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | ListDefaultArgs<ExtArgs>
  }
  export type ListItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | ListDefaultArgs<ExtArgs>
  }

  export type $ListItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ListItem"
    objects: {
      list: Prisma.$ListPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      listId: number
      status: boolean
      order: number
    }, ExtArgs["result"]["listItem"]>
    composites: {}
  }

  type ListItemGetPayload<S extends boolean | null | undefined | ListItemDefaultArgs> = $Result.GetResult<Prisma.$ListItemPayload, S>

  type ListItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListItemCountAggregateInputType | true
    }

  export interface ListItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ListItem'], meta: { name: 'ListItem' } }
    /**
     * Find zero or one ListItem that matches the filter.
     * @param {ListItemFindUniqueArgs} args - Arguments to find a ListItem
     * @example
     * // Get one ListItem
     * const listItem = await prisma.listItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListItemFindUniqueArgs>(args: SelectSubset<T, ListItemFindUniqueArgs<ExtArgs>>): Prisma__ListItemClient<$Result.GetResult<Prisma.$ListItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ListItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListItemFindUniqueOrThrowArgs} args - Arguments to find a ListItem
     * @example
     * // Get one ListItem
     * const listItem = await prisma.listItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ListItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListItemClient<$Result.GetResult<Prisma.$ListItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListItemFindFirstArgs} args - Arguments to find a ListItem
     * @example
     * // Get one ListItem
     * const listItem = await prisma.listItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListItemFindFirstArgs>(args?: SelectSubset<T, ListItemFindFirstArgs<ExtArgs>>): Prisma__ListItemClient<$Result.GetResult<Prisma.$ListItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListItemFindFirstOrThrowArgs} args - Arguments to find a ListItem
     * @example
     * // Get one ListItem
     * const listItem = await prisma.listItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ListItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListItemClient<$Result.GetResult<Prisma.$ListItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ListItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ListItems
     * const listItems = await prisma.listItem.findMany()
     * 
     * // Get first 10 ListItems
     * const listItems = await prisma.listItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listItemWithIdOnly = await prisma.listItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ListItemFindManyArgs>(args?: SelectSubset<T, ListItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ListItem.
     * @param {ListItemCreateArgs} args - Arguments to create a ListItem.
     * @example
     * // Create one ListItem
     * const ListItem = await prisma.listItem.create({
     *   data: {
     *     // ... data to create a ListItem
     *   }
     * })
     * 
     */
    create<T extends ListItemCreateArgs>(args: SelectSubset<T, ListItemCreateArgs<ExtArgs>>): Prisma__ListItemClient<$Result.GetResult<Prisma.$ListItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ListItems.
     * @param {ListItemCreateManyArgs} args - Arguments to create many ListItems.
     * @example
     * // Create many ListItems
     * const listItem = await prisma.listItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListItemCreateManyArgs>(args?: SelectSubset<T, ListItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ListItems and returns the data saved in the database.
     * @param {ListItemCreateManyAndReturnArgs} args - Arguments to create many ListItems.
     * @example
     * // Create many ListItems
     * const listItem = await prisma.listItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ListItems and only return the `id`
     * const listItemWithIdOnly = await prisma.listItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ListItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ListItem.
     * @param {ListItemDeleteArgs} args - Arguments to delete one ListItem.
     * @example
     * // Delete one ListItem
     * const ListItem = await prisma.listItem.delete({
     *   where: {
     *     // ... filter to delete one ListItem
     *   }
     * })
     * 
     */
    delete<T extends ListItemDeleteArgs>(args: SelectSubset<T, ListItemDeleteArgs<ExtArgs>>): Prisma__ListItemClient<$Result.GetResult<Prisma.$ListItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ListItem.
     * @param {ListItemUpdateArgs} args - Arguments to update one ListItem.
     * @example
     * // Update one ListItem
     * const listItem = await prisma.listItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListItemUpdateArgs>(args: SelectSubset<T, ListItemUpdateArgs<ExtArgs>>): Prisma__ListItemClient<$Result.GetResult<Prisma.$ListItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ListItems.
     * @param {ListItemDeleteManyArgs} args - Arguments to filter ListItems to delete.
     * @example
     * // Delete a few ListItems
     * const { count } = await prisma.listItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListItemDeleteManyArgs>(args?: SelectSubset<T, ListItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ListItems
     * const listItem = await prisma.listItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListItemUpdateManyArgs>(args: SelectSubset<T, ListItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListItems and returns the data updated in the database.
     * @param {ListItemUpdateManyAndReturnArgs} args - Arguments to update many ListItems.
     * @example
     * // Update many ListItems
     * const listItem = await prisma.listItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ListItems and only return the `id`
     * const listItemWithIdOnly = await prisma.listItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends ListItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ListItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ListItem.
     * @param {ListItemUpsertArgs} args - Arguments to update or create a ListItem.
     * @example
     * // Update or create a ListItem
     * const listItem = await prisma.listItem.upsert({
     *   create: {
     *     // ... data to create a ListItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ListItem we want to update
     *   }
     * })
     */
    upsert<T extends ListItemUpsertArgs>(args: SelectSubset<T, ListItemUpsertArgs<ExtArgs>>): Prisma__ListItemClient<$Result.GetResult<Prisma.$ListItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ListItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListItemCountArgs} args - Arguments to filter ListItems to count.
     * @example
     * // Count the number of ListItems
     * const count = await prisma.listItem.count({
     *   where: {
     *     // ... the filter for the ListItems we want to count
     *   }
     * })
    **/
    count<T extends ListItemCountArgs>(
      args?: Subset<T, ListItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ListItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ListItemAggregateArgs>(args: Subset<T, ListItemAggregateArgs>): Prisma.PrismaPromise<GetListItemAggregateType<T>>

    /**
     * Group by ListItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListItemGroupByArgs} args - Group by arguments.
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
      T extends ListItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListItemGroupByArgs['orderBy'] }
        : { orderBy?: ListItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ListItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ListItem model
   */
  readonly fields: ListItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ListItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    list<T extends ListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ListDefaultArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ListItem model
   */
  interface ListItemFieldRefs {
    readonly id: FieldRef<"ListItem", 'Int'>
    readonly content: FieldRef<"ListItem", 'String'>
    readonly listId: FieldRef<"ListItem", 'Int'>
    readonly status: FieldRef<"ListItem", 'Boolean'>
    readonly order: FieldRef<"ListItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ListItem findUnique
   */
  export type ListItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItem
     */
    select?: ListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItem
     */
    omit?: ListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemInclude<ExtArgs> | null
    /**
     * Filter, which ListItem to fetch.
     */
    where: ListItemWhereUniqueInput
  }

  /**
   * ListItem findUniqueOrThrow
   */
  export type ListItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItem
     */
    select?: ListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItem
     */
    omit?: ListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemInclude<ExtArgs> | null
    /**
     * Filter, which ListItem to fetch.
     */
    where: ListItemWhereUniqueInput
  }

  /**
   * ListItem findFirst
   */
  export type ListItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItem
     */
    select?: ListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItem
     */
    omit?: ListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemInclude<ExtArgs> | null
    /**
     * Filter, which ListItem to fetch.
     */
    where?: ListItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListItems to fetch.
     */
    orderBy?: ListItemOrderByWithRelationInput | ListItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListItems.
     */
    cursor?: ListItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListItems.
     */
    distinct?: ListItemScalarFieldEnum | ListItemScalarFieldEnum[]
  }

  /**
   * ListItem findFirstOrThrow
   */
  export type ListItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItem
     */
    select?: ListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItem
     */
    omit?: ListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemInclude<ExtArgs> | null
    /**
     * Filter, which ListItem to fetch.
     */
    where?: ListItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListItems to fetch.
     */
    orderBy?: ListItemOrderByWithRelationInput | ListItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListItems.
     */
    cursor?: ListItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListItems.
     */
    distinct?: ListItemScalarFieldEnum | ListItemScalarFieldEnum[]
  }

  /**
   * ListItem findMany
   */
  export type ListItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItem
     */
    select?: ListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItem
     */
    omit?: ListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemInclude<ExtArgs> | null
    /**
     * Filter, which ListItems to fetch.
     */
    where?: ListItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListItems to fetch.
     */
    orderBy?: ListItemOrderByWithRelationInput | ListItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ListItems.
     */
    cursor?: ListItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListItems.
     */
    skip?: number
    distinct?: ListItemScalarFieldEnum | ListItemScalarFieldEnum[]
  }

  /**
   * ListItem create
   */
  export type ListItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItem
     */
    select?: ListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItem
     */
    omit?: ListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemInclude<ExtArgs> | null
    /**
     * The data needed to create a ListItem.
     */
    data: XOR<ListItemCreateInput, ListItemUncheckedCreateInput>
  }

  /**
   * ListItem createMany
   */
  export type ListItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ListItems.
     */
    data: ListItemCreateManyInput | ListItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ListItem createManyAndReturn
   */
  export type ListItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItem
     */
    select?: ListItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListItem
     */
    omit?: ListItemOmit<ExtArgs> | null
    /**
     * The data used to create many ListItems.
     */
    data: ListItemCreateManyInput | ListItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ListItem update
   */
  export type ListItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItem
     */
    select?: ListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItem
     */
    omit?: ListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemInclude<ExtArgs> | null
    /**
     * The data needed to update a ListItem.
     */
    data: XOR<ListItemUpdateInput, ListItemUncheckedUpdateInput>
    /**
     * Choose, which ListItem to update.
     */
    where: ListItemWhereUniqueInput
  }

  /**
   * ListItem updateMany
   */
  export type ListItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ListItems.
     */
    data: XOR<ListItemUpdateManyMutationInput, ListItemUncheckedUpdateManyInput>
    /**
     * Filter which ListItems to update
     */
    where?: ListItemWhereInput
    /**
     * Limit how many ListItems to update.
     */
    limit?: number
  }

  /**
   * ListItem updateManyAndReturn
   */
  export type ListItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItem
     */
    select?: ListItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListItem
     */
    omit?: ListItemOmit<ExtArgs> | null
    /**
     * The data used to update ListItems.
     */
    data: XOR<ListItemUpdateManyMutationInput, ListItemUncheckedUpdateManyInput>
    /**
     * Filter which ListItems to update
     */
    where?: ListItemWhereInput
    /**
     * Limit how many ListItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ListItem upsert
   */
  export type ListItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItem
     */
    select?: ListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItem
     */
    omit?: ListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemInclude<ExtArgs> | null
    /**
     * The filter to search for the ListItem to update in case it exists.
     */
    where: ListItemWhereUniqueInput
    /**
     * In case the ListItem found by the `where` argument doesn't exist, create a new ListItem with this data.
     */
    create: XOR<ListItemCreateInput, ListItemUncheckedCreateInput>
    /**
     * In case the ListItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListItemUpdateInput, ListItemUncheckedUpdateInput>
  }

  /**
   * ListItem delete
   */
  export type ListItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItem
     */
    select?: ListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItem
     */
    omit?: ListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemInclude<ExtArgs> | null
    /**
     * Filter which ListItem to delete.
     */
    where: ListItemWhereUniqueInput
  }

  /**
   * ListItem deleteMany
   */
  export type ListItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListItems to delete
     */
    where?: ListItemWhereInput
    /**
     * Limit how many ListItems to delete.
     */
    limit?: number
  }

  /**
   * ListItem without action
   */
  export type ListItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListItem
     */
    select?: ListItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListItem
     */
    omit?: ListItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListItemInclude<ExtArgs> | null
  }


  /**
   * Model Column
   */

  export type AggregateColumn = {
    _count: ColumnCountAggregateOutputType | null
    _avg: ColumnAvgAggregateOutputType | null
    _sum: ColumnSumAggregateOutputType | null
    _min: ColumnMinAggregateOutputType | null
    _max: ColumnMaxAggregateOutputType | null
  }

  export type ColumnAvgAggregateOutputType = {
    id: number | null
    boardId: number | null
    order: number | null
  }

  export type ColumnSumAggregateOutputType = {
    id: number | null
    boardId: number | null
    order: number | null
  }

  export type ColumnMinAggregateOutputType = {
    id: number | null
    name: string | null
    boardId: number | null
    order: number | null
  }

  export type ColumnMaxAggregateOutputType = {
    id: number | null
    name: string | null
    boardId: number | null
    order: number | null
  }

  export type ColumnCountAggregateOutputType = {
    id: number
    name: number
    boardId: number
    order: number
    _all: number
  }


  export type ColumnAvgAggregateInputType = {
    id?: true
    boardId?: true
    order?: true
  }

  export type ColumnSumAggregateInputType = {
    id?: true
    boardId?: true
    order?: true
  }

  export type ColumnMinAggregateInputType = {
    id?: true
    name?: true
    boardId?: true
    order?: true
  }

  export type ColumnMaxAggregateInputType = {
    id?: true
    name?: true
    boardId?: true
    order?: true
  }

  export type ColumnCountAggregateInputType = {
    id?: true
    name?: true
    boardId?: true
    order?: true
    _all?: true
  }

  export type ColumnAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Column to aggregate.
     */
    where?: ColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Columns to fetch.
     */
    orderBy?: ColumnOrderByWithRelationInput | ColumnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Columns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Columns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Columns
    **/
    _count?: true | ColumnCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ColumnAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ColumnSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ColumnMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ColumnMaxAggregateInputType
  }

  export type GetColumnAggregateType<T extends ColumnAggregateArgs> = {
        [P in keyof T & keyof AggregateColumn]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateColumn[P]>
      : GetScalarType<T[P], AggregateColumn[P]>
  }




  export type ColumnGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ColumnWhereInput
    orderBy?: ColumnOrderByWithAggregationInput | ColumnOrderByWithAggregationInput[]
    by: ColumnScalarFieldEnum[] | ColumnScalarFieldEnum
    having?: ColumnScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ColumnCountAggregateInputType | true
    _avg?: ColumnAvgAggregateInputType
    _sum?: ColumnSumAggregateInputType
    _min?: ColumnMinAggregateInputType
    _max?: ColumnMaxAggregateInputType
  }

  export type ColumnGroupByOutputType = {
    id: number
    name: string
    boardId: number
    order: number
    _count: ColumnCountAggregateOutputType | null
    _avg: ColumnAvgAggregateOutputType | null
    _sum: ColumnSumAggregateOutputType | null
    _min: ColumnMinAggregateOutputType | null
    _max: ColumnMaxAggregateOutputType | null
  }

  type GetColumnGroupByPayload<T extends ColumnGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ColumnGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ColumnGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ColumnGroupByOutputType[P]>
            : GetScalarType<T[P], ColumnGroupByOutputType[P]>
        }
      >
    >


  export type ColumnSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    boardId?: boolean
    order?: boolean
    board?: boolean | BoardDefaultArgs<ExtArgs>
    Card?: boolean | Column$CardArgs<ExtArgs>
    _count?: boolean | ColumnCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["column"]>

  export type ColumnSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    boardId?: boolean
    order?: boolean
    board?: boolean | BoardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["column"]>

  export type ColumnSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    boardId?: boolean
    order?: boolean
    board?: boolean | BoardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["column"]>

  export type ColumnSelectScalar = {
    id?: boolean
    name?: boolean
    boardId?: boolean
    order?: boolean
  }

  export type ColumnOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "boardId" | "order", ExtArgs["result"]["column"]>
  export type ColumnInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    board?: boolean | BoardDefaultArgs<ExtArgs>
    Card?: boolean | Column$CardArgs<ExtArgs>
    _count?: boolean | ColumnCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ColumnIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    board?: boolean | BoardDefaultArgs<ExtArgs>
  }
  export type ColumnIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    board?: boolean | BoardDefaultArgs<ExtArgs>
  }

  export type $ColumnPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Column"
    objects: {
      board: Prisma.$BoardPayload<ExtArgs>
      Card: Prisma.$CardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      boardId: number
      order: number
    }, ExtArgs["result"]["column"]>
    composites: {}
  }

  type ColumnGetPayload<S extends boolean | null | undefined | ColumnDefaultArgs> = $Result.GetResult<Prisma.$ColumnPayload, S>

  type ColumnCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ColumnFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ColumnCountAggregateInputType | true
    }

  export interface ColumnDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Column'], meta: { name: 'Column' } }
    /**
     * Find zero or one Column that matches the filter.
     * @param {ColumnFindUniqueArgs} args - Arguments to find a Column
     * @example
     * // Get one Column
     * const column = await prisma.column.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ColumnFindUniqueArgs>(args: SelectSubset<T, ColumnFindUniqueArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Column that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ColumnFindUniqueOrThrowArgs} args - Arguments to find a Column
     * @example
     * // Get one Column
     * const column = await prisma.column.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ColumnFindUniqueOrThrowArgs>(args: SelectSubset<T, ColumnFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Column that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnFindFirstArgs} args - Arguments to find a Column
     * @example
     * // Get one Column
     * const column = await prisma.column.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ColumnFindFirstArgs>(args?: SelectSubset<T, ColumnFindFirstArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Column that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnFindFirstOrThrowArgs} args - Arguments to find a Column
     * @example
     * // Get one Column
     * const column = await prisma.column.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ColumnFindFirstOrThrowArgs>(args?: SelectSubset<T, ColumnFindFirstOrThrowArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Columns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Columns
     * const columns = await prisma.column.findMany()
     * 
     * // Get first 10 Columns
     * const columns = await prisma.column.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const columnWithIdOnly = await prisma.column.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ColumnFindManyArgs>(args?: SelectSubset<T, ColumnFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Column.
     * @param {ColumnCreateArgs} args - Arguments to create a Column.
     * @example
     * // Create one Column
     * const Column = await prisma.column.create({
     *   data: {
     *     // ... data to create a Column
     *   }
     * })
     * 
     */
    create<T extends ColumnCreateArgs>(args: SelectSubset<T, ColumnCreateArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Columns.
     * @param {ColumnCreateManyArgs} args - Arguments to create many Columns.
     * @example
     * // Create many Columns
     * const column = await prisma.column.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ColumnCreateManyArgs>(args?: SelectSubset<T, ColumnCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Columns and returns the data saved in the database.
     * @param {ColumnCreateManyAndReturnArgs} args - Arguments to create many Columns.
     * @example
     * // Create many Columns
     * const column = await prisma.column.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Columns and only return the `id`
     * const columnWithIdOnly = await prisma.column.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ColumnCreateManyAndReturnArgs>(args?: SelectSubset<T, ColumnCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Column.
     * @param {ColumnDeleteArgs} args - Arguments to delete one Column.
     * @example
     * // Delete one Column
     * const Column = await prisma.column.delete({
     *   where: {
     *     // ... filter to delete one Column
     *   }
     * })
     * 
     */
    delete<T extends ColumnDeleteArgs>(args: SelectSubset<T, ColumnDeleteArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Column.
     * @param {ColumnUpdateArgs} args - Arguments to update one Column.
     * @example
     * // Update one Column
     * const column = await prisma.column.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ColumnUpdateArgs>(args: SelectSubset<T, ColumnUpdateArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Columns.
     * @param {ColumnDeleteManyArgs} args - Arguments to filter Columns to delete.
     * @example
     * // Delete a few Columns
     * const { count } = await prisma.column.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ColumnDeleteManyArgs>(args?: SelectSubset<T, ColumnDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Columns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Columns
     * const column = await prisma.column.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ColumnUpdateManyArgs>(args: SelectSubset<T, ColumnUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Columns and returns the data updated in the database.
     * @param {ColumnUpdateManyAndReturnArgs} args - Arguments to update many Columns.
     * @example
     * // Update many Columns
     * const column = await prisma.column.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Columns and only return the `id`
     * const columnWithIdOnly = await prisma.column.updateManyAndReturn({
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
    updateManyAndReturn<T extends ColumnUpdateManyAndReturnArgs>(args: SelectSubset<T, ColumnUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Column.
     * @param {ColumnUpsertArgs} args - Arguments to update or create a Column.
     * @example
     * // Update or create a Column
     * const column = await prisma.column.upsert({
     *   create: {
     *     // ... data to create a Column
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Column we want to update
     *   }
     * })
     */
    upsert<T extends ColumnUpsertArgs>(args: SelectSubset<T, ColumnUpsertArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Columns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnCountArgs} args - Arguments to filter Columns to count.
     * @example
     * // Count the number of Columns
     * const count = await prisma.column.count({
     *   where: {
     *     // ... the filter for the Columns we want to count
     *   }
     * })
    **/
    count<T extends ColumnCountArgs>(
      args?: Subset<T, ColumnCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ColumnCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Column.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ColumnAggregateArgs>(args: Subset<T, ColumnAggregateArgs>): Prisma.PrismaPromise<GetColumnAggregateType<T>>

    /**
     * Group by Column.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnGroupByArgs} args - Group by arguments.
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
      T extends ColumnGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ColumnGroupByArgs['orderBy'] }
        : { orderBy?: ColumnGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ColumnGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetColumnGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Column model
   */
  readonly fields: ColumnFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Column.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ColumnClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    board<T extends BoardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BoardDefaultArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Card<T extends Column$CardArgs<ExtArgs> = {}>(args?: Subset<T, Column$CardArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Column model
   */
  interface ColumnFieldRefs {
    readonly id: FieldRef<"Column", 'Int'>
    readonly name: FieldRef<"Column", 'String'>
    readonly boardId: FieldRef<"Column", 'Int'>
    readonly order: FieldRef<"Column", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Column findUnique
   */
  export type ColumnFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * Filter, which Column to fetch.
     */
    where: ColumnWhereUniqueInput
  }

  /**
   * Column findUniqueOrThrow
   */
  export type ColumnFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * Filter, which Column to fetch.
     */
    where: ColumnWhereUniqueInput
  }

  /**
   * Column findFirst
   */
  export type ColumnFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * Filter, which Column to fetch.
     */
    where?: ColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Columns to fetch.
     */
    orderBy?: ColumnOrderByWithRelationInput | ColumnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Columns.
     */
    cursor?: ColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Columns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Columns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Columns.
     */
    distinct?: ColumnScalarFieldEnum | ColumnScalarFieldEnum[]
  }

  /**
   * Column findFirstOrThrow
   */
  export type ColumnFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * Filter, which Column to fetch.
     */
    where?: ColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Columns to fetch.
     */
    orderBy?: ColumnOrderByWithRelationInput | ColumnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Columns.
     */
    cursor?: ColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Columns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Columns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Columns.
     */
    distinct?: ColumnScalarFieldEnum | ColumnScalarFieldEnum[]
  }

  /**
   * Column findMany
   */
  export type ColumnFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * Filter, which Columns to fetch.
     */
    where?: ColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Columns to fetch.
     */
    orderBy?: ColumnOrderByWithRelationInput | ColumnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Columns.
     */
    cursor?: ColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Columns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Columns.
     */
    skip?: number
    distinct?: ColumnScalarFieldEnum | ColumnScalarFieldEnum[]
  }

  /**
   * Column create
   */
  export type ColumnCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * The data needed to create a Column.
     */
    data: XOR<ColumnCreateInput, ColumnUncheckedCreateInput>
  }

  /**
   * Column createMany
   */
  export type ColumnCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Columns.
     */
    data: ColumnCreateManyInput | ColumnCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Column createManyAndReturn
   */
  export type ColumnCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * The data used to create many Columns.
     */
    data: ColumnCreateManyInput | ColumnCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Column update
   */
  export type ColumnUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * The data needed to update a Column.
     */
    data: XOR<ColumnUpdateInput, ColumnUncheckedUpdateInput>
    /**
     * Choose, which Column to update.
     */
    where: ColumnWhereUniqueInput
  }

  /**
   * Column updateMany
   */
  export type ColumnUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Columns.
     */
    data: XOR<ColumnUpdateManyMutationInput, ColumnUncheckedUpdateManyInput>
    /**
     * Filter which Columns to update
     */
    where?: ColumnWhereInput
    /**
     * Limit how many Columns to update.
     */
    limit?: number
  }

  /**
   * Column updateManyAndReturn
   */
  export type ColumnUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * The data used to update Columns.
     */
    data: XOR<ColumnUpdateManyMutationInput, ColumnUncheckedUpdateManyInput>
    /**
     * Filter which Columns to update
     */
    where?: ColumnWhereInput
    /**
     * Limit how many Columns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Column upsert
   */
  export type ColumnUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * The filter to search for the Column to update in case it exists.
     */
    where: ColumnWhereUniqueInput
    /**
     * In case the Column found by the `where` argument doesn't exist, create a new Column with this data.
     */
    create: XOR<ColumnCreateInput, ColumnUncheckedCreateInput>
    /**
     * In case the Column was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ColumnUpdateInput, ColumnUncheckedUpdateInput>
  }

  /**
   * Column delete
   */
  export type ColumnDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * Filter which Column to delete.
     */
    where: ColumnWhereUniqueInput
  }

  /**
   * Column deleteMany
   */
  export type ColumnDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Columns to delete
     */
    where?: ColumnWhereInput
    /**
     * Limit how many Columns to delete.
     */
    limit?: number
  }

  /**
   * Column.Card
   */
  export type Column$CardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    where?: CardWhereInput
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    cursor?: CardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Column without action
   */
  export type ColumnDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
  }


  /**
   * Model CardAssignment
   */

  export type AggregateCardAssignment = {
    _count: CardAssignmentCountAggregateOutputType | null
    _avg: CardAssignmentAvgAggregateOutputType | null
    _sum: CardAssignmentSumAggregateOutputType | null
    _min: CardAssignmentMinAggregateOutputType | null
    _max: CardAssignmentMaxAggregateOutputType | null
  }

  export type CardAssignmentAvgAggregateOutputType = {
    id: number | null
    cardId: number | null
    userId: number | null
  }

  export type CardAssignmentSumAggregateOutputType = {
    id: number | null
    cardId: number | null
    userId: number | null
  }

  export type CardAssignmentMinAggregateOutputType = {
    id: number | null
    cardId: number | null
    userId: number | null
  }

  export type CardAssignmentMaxAggregateOutputType = {
    id: number | null
    cardId: number | null
    userId: number | null
  }

  export type CardAssignmentCountAggregateOutputType = {
    id: number
    cardId: number
    userId: number
    _all: number
  }


  export type CardAssignmentAvgAggregateInputType = {
    id?: true
    cardId?: true
    userId?: true
  }

  export type CardAssignmentSumAggregateInputType = {
    id?: true
    cardId?: true
    userId?: true
  }

  export type CardAssignmentMinAggregateInputType = {
    id?: true
    cardId?: true
    userId?: true
  }

  export type CardAssignmentMaxAggregateInputType = {
    id?: true
    cardId?: true
    userId?: true
  }

  export type CardAssignmentCountAggregateInputType = {
    id?: true
    cardId?: true
    userId?: true
    _all?: true
  }

  export type CardAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CardAssignment to aggregate.
     */
    where?: CardAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardAssignments to fetch.
     */
    orderBy?: CardAssignmentOrderByWithRelationInput | CardAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CardAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CardAssignments
    **/
    _count?: true | CardAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CardAssignmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CardAssignmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardAssignmentMaxAggregateInputType
  }

  export type GetCardAssignmentAggregateType<T extends CardAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateCardAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCardAssignment[P]>
      : GetScalarType<T[P], AggregateCardAssignment[P]>
  }




  export type CardAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardAssignmentWhereInput
    orderBy?: CardAssignmentOrderByWithAggregationInput | CardAssignmentOrderByWithAggregationInput[]
    by: CardAssignmentScalarFieldEnum[] | CardAssignmentScalarFieldEnum
    having?: CardAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardAssignmentCountAggregateInputType | true
    _avg?: CardAssignmentAvgAggregateInputType
    _sum?: CardAssignmentSumAggregateInputType
    _min?: CardAssignmentMinAggregateInputType
    _max?: CardAssignmentMaxAggregateInputType
  }

  export type CardAssignmentGroupByOutputType = {
    id: number
    cardId: number
    userId: number
    _count: CardAssignmentCountAggregateOutputType | null
    _avg: CardAssignmentAvgAggregateOutputType | null
    _sum: CardAssignmentSumAggregateOutputType | null
    _min: CardAssignmentMinAggregateOutputType | null
    _max: CardAssignmentMaxAggregateOutputType | null
  }

  type GetCardAssignmentGroupByPayload<T extends CardAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], CardAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type CardAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardId?: boolean
    userId?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardAssignment"]>

  export type CardAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardId?: boolean
    userId?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardAssignment"]>

  export type CardAssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardId?: boolean
    userId?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardAssignment"]>

  export type CardAssignmentSelectScalar = {
    id?: boolean
    cardId?: boolean
    userId?: boolean
  }

  export type CardAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cardId" | "userId", ExtArgs["result"]["cardAssignment"]>
  export type CardAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CardAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CardAssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CardAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CardAssignment"
    objects: {
      card: Prisma.$CardPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cardId: number
      userId: number
    }, ExtArgs["result"]["cardAssignment"]>
    composites: {}
  }

  type CardAssignmentGetPayload<S extends boolean | null | undefined | CardAssignmentDefaultArgs> = $Result.GetResult<Prisma.$CardAssignmentPayload, S>

  type CardAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CardAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CardAssignmentCountAggregateInputType | true
    }

  export interface CardAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CardAssignment'], meta: { name: 'CardAssignment' } }
    /**
     * Find zero or one CardAssignment that matches the filter.
     * @param {CardAssignmentFindUniqueArgs} args - Arguments to find a CardAssignment
     * @example
     * // Get one CardAssignment
     * const cardAssignment = await prisma.cardAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardAssignmentFindUniqueArgs>(args: SelectSubset<T, CardAssignmentFindUniqueArgs<ExtArgs>>): Prisma__CardAssignmentClient<$Result.GetResult<Prisma.$CardAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CardAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CardAssignmentFindUniqueOrThrowArgs} args - Arguments to find a CardAssignment
     * @example
     * // Get one CardAssignment
     * const cardAssignment = await prisma.cardAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, CardAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CardAssignmentClient<$Result.GetResult<Prisma.$CardAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CardAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardAssignmentFindFirstArgs} args - Arguments to find a CardAssignment
     * @example
     * // Get one CardAssignment
     * const cardAssignment = await prisma.cardAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardAssignmentFindFirstArgs>(args?: SelectSubset<T, CardAssignmentFindFirstArgs<ExtArgs>>): Prisma__CardAssignmentClient<$Result.GetResult<Prisma.$CardAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CardAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardAssignmentFindFirstOrThrowArgs} args - Arguments to find a CardAssignment
     * @example
     * // Get one CardAssignment
     * const cardAssignment = await prisma.cardAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, CardAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CardAssignmentClient<$Result.GetResult<Prisma.$CardAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CardAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CardAssignments
     * const cardAssignments = await prisma.cardAssignment.findMany()
     * 
     * // Get first 10 CardAssignments
     * const cardAssignments = await prisma.cardAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cardAssignmentWithIdOnly = await prisma.cardAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CardAssignmentFindManyArgs>(args?: SelectSubset<T, CardAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CardAssignment.
     * @param {CardAssignmentCreateArgs} args - Arguments to create a CardAssignment.
     * @example
     * // Create one CardAssignment
     * const CardAssignment = await prisma.cardAssignment.create({
     *   data: {
     *     // ... data to create a CardAssignment
     *   }
     * })
     * 
     */
    create<T extends CardAssignmentCreateArgs>(args: SelectSubset<T, CardAssignmentCreateArgs<ExtArgs>>): Prisma__CardAssignmentClient<$Result.GetResult<Prisma.$CardAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CardAssignments.
     * @param {CardAssignmentCreateManyArgs} args - Arguments to create many CardAssignments.
     * @example
     * // Create many CardAssignments
     * const cardAssignment = await prisma.cardAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CardAssignmentCreateManyArgs>(args?: SelectSubset<T, CardAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CardAssignments and returns the data saved in the database.
     * @param {CardAssignmentCreateManyAndReturnArgs} args - Arguments to create many CardAssignments.
     * @example
     * // Create many CardAssignments
     * const cardAssignment = await prisma.cardAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CardAssignments and only return the `id`
     * const cardAssignmentWithIdOnly = await prisma.cardAssignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CardAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, CardAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CardAssignment.
     * @param {CardAssignmentDeleteArgs} args - Arguments to delete one CardAssignment.
     * @example
     * // Delete one CardAssignment
     * const CardAssignment = await prisma.cardAssignment.delete({
     *   where: {
     *     // ... filter to delete one CardAssignment
     *   }
     * })
     * 
     */
    delete<T extends CardAssignmentDeleteArgs>(args: SelectSubset<T, CardAssignmentDeleteArgs<ExtArgs>>): Prisma__CardAssignmentClient<$Result.GetResult<Prisma.$CardAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CardAssignment.
     * @param {CardAssignmentUpdateArgs} args - Arguments to update one CardAssignment.
     * @example
     * // Update one CardAssignment
     * const cardAssignment = await prisma.cardAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CardAssignmentUpdateArgs>(args: SelectSubset<T, CardAssignmentUpdateArgs<ExtArgs>>): Prisma__CardAssignmentClient<$Result.GetResult<Prisma.$CardAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CardAssignments.
     * @param {CardAssignmentDeleteManyArgs} args - Arguments to filter CardAssignments to delete.
     * @example
     * // Delete a few CardAssignments
     * const { count } = await prisma.cardAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CardAssignmentDeleteManyArgs>(args?: SelectSubset<T, CardAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CardAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CardAssignments
     * const cardAssignment = await prisma.cardAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CardAssignmentUpdateManyArgs>(args: SelectSubset<T, CardAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CardAssignments and returns the data updated in the database.
     * @param {CardAssignmentUpdateManyAndReturnArgs} args - Arguments to update many CardAssignments.
     * @example
     * // Update many CardAssignments
     * const cardAssignment = await prisma.cardAssignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CardAssignments and only return the `id`
     * const cardAssignmentWithIdOnly = await prisma.cardAssignment.updateManyAndReturn({
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
    updateManyAndReturn<T extends CardAssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, CardAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CardAssignment.
     * @param {CardAssignmentUpsertArgs} args - Arguments to update or create a CardAssignment.
     * @example
     * // Update or create a CardAssignment
     * const cardAssignment = await prisma.cardAssignment.upsert({
     *   create: {
     *     // ... data to create a CardAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CardAssignment we want to update
     *   }
     * })
     */
    upsert<T extends CardAssignmentUpsertArgs>(args: SelectSubset<T, CardAssignmentUpsertArgs<ExtArgs>>): Prisma__CardAssignmentClient<$Result.GetResult<Prisma.$CardAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CardAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardAssignmentCountArgs} args - Arguments to filter CardAssignments to count.
     * @example
     * // Count the number of CardAssignments
     * const count = await prisma.cardAssignment.count({
     *   where: {
     *     // ... the filter for the CardAssignments we want to count
     *   }
     * })
    **/
    count<T extends CardAssignmentCountArgs>(
      args?: Subset<T, CardAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CardAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CardAssignmentAggregateArgs>(args: Subset<T, CardAssignmentAggregateArgs>): Prisma.PrismaPromise<GetCardAssignmentAggregateType<T>>

    /**
     * Group by CardAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardAssignmentGroupByArgs} args - Group by arguments.
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
      T extends CardAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: CardAssignmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CardAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CardAssignment model
   */
  readonly fields: CardAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CardAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CardAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    card<T extends CardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CardDefaultArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CardAssignment model
   */
  interface CardAssignmentFieldRefs {
    readonly id: FieldRef<"CardAssignment", 'Int'>
    readonly cardId: FieldRef<"CardAssignment", 'Int'>
    readonly userId: FieldRef<"CardAssignment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CardAssignment findUnique
   */
  export type CardAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardAssignment
     */
    select?: CardAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardAssignment
     */
    omit?: CardAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which CardAssignment to fetch.
     */
    where: CardAssignmentWhereUniqueInput
  }

  /**
   * CardAssignment findUniqueOrThrow
   */
  export type CardAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardAssignment
     */
    select?: CardAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardAssignment
     */
    omit?: CardAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which CardAssignment to fetch.
     */
    where: CardAssignmentWhereUniqueInput
  }

  /**
   * CardAssignment findFirst
   */
  export type CardAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardAssignment
     */
    select?: CardAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardAssignment
     */
    omit?: CardAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which CardAssignment to fetch.
     */
    where?: CardAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardAssignments to fetch.
     */
    orderBy?: CardAssignmentOrderByWithRelationInput | CardAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CardAssignments.
     */
    cursor?: CardAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CardAssignments.
     */
    distinct?: CardAssignmentScalarFieldEnum | CardAssignmentScalarFieldEnum[]
  }

  /**
   * CardAssignment findFirstOrThrow
   */
  export type CardAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardAssignment
     */
    select?: CardAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardAssignment
     */
    omit?: CardAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which CardAssignment to fetch.
     */
    where?: CardAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardAssignments to fetch.
     */
    orderBy?: CardAssignmentOrderByWithRelationInput | CardAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CardAssignments.
     */
    cursor?: CardAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CardAssignments.
     */
    distinct?: CardAssignmentScalarFieldEnum | CardAssignmentScalarFieldEnum[]
  }

  /**
   * CardAssignment findMany
   */
  export type CardAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardAssignment
     */
    select?: CardAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardAssignment
     */
    omit?: CardAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which CardAssignments to fetch.
     */
    where?: CardAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardAssignments to fetch.
     */
    orderBy?: CardAssignmentOrderByWithRelationInput | CardAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CardAssignments.
     */
    cursor?: CardAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardAssignments.
     */
    skip?: number
    distinct?: CardAssignmentScalarFieldEnum | CardAssignmentScalarFieldEnum[]
  }

  /**
   * CardAssignment create
   */
  export type CardAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardAssignment
     */
    select?: CardAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardAssignment
     */
    omit?: CardAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a CardAssignment.
     */
    data: XOR<CardAssignmentCreateInput, CardAssignmentUncheckedCreateInput>
  }

  /**
   * CardAssignment createMany
   */
  export type CardAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CardAssignments.
     */
    data: CardAssignmentCreateManyInput | CardAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CardAssignment createManyAndReturn
   */
  export type CardAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardAssignment
     */
    select?: CardAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CardAssignment
     */
    omit?: CardAssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many CardAssignments.
     */
    data: CardAssignmentCreateManyInput | CardAssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CardAssignment update
   */
  export type CardAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardAssignment
     */
    select?: CardAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardAssignment
     */
    omit?: CardAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a CardAssignment.
     */
    data: XOR<CardAssignmentUpdateInput, CardAssignmentUncheckedUpdateInput>
    /**
     * Choose, which CardAssignment to update.
     */
    where: CardAssignmentWhereUniqueInput
  }

  /**
   * CardAssignment updateMany
   */
  export type CardAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CardAssignments.
     */
    data: XOR<CardAssignmentUpdateManyMutationInput, CardAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which CardAssignments to update
     */
    where?: CardAssignmentWhereInput
    /**
     * Limit how many CardAssignments to update.
     */
    limit?: number
  }

  /**
   * CardAssignment updateManyAndReturn
   */
  export type CardAssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardAssignment
     */
    select?: CardAssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CardAssignment
     */
    omit?: CardAssignmentOmit<ExtArgs> | null
    /**
     * The data used to update CardAssignments.
     */
    data: XOR<CardAssignmentUpdateManyMutationInput, CardAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which CardAssignments to update
     */
    where?: CardAssignmentWhereInput
    /**
     * Limit how many CardAssignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CardAssignment upsert
   */
  export type CardAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardAssignment
     */
    select?: CardAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardAssignment
     */
    omit?: CardAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the CardAssignment to update in case it exists.
     */
    where: CardAssignmentWhereUniqueInput
    /**
     * In case the CardAssignment found by the `where` argument doesn't exist, create a new CardAssignment with this data.
     */
    create: XOR<CardAssignmentCreateInput, CardAssignmentUncheckedCreateInput>
    /**
     * In case the CardAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CardAssignmentUpdateInput, CardAssignmentUncheckedUpdateInput>
  }

  /**
   * CardAssignment delete
   */
  export type CardAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardAssignment
     */
    select?: CardAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardAssignment
     */
    omit?: CardAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardAssignmentInclude<ExtArgs> | null
    /**
     * Filter which CardAssignment to delete.
     */
    where: CardAssignmentWhereUniqueInput
  }

  /**
   * CardAssignment deleteMany
   */
  export type CardAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CardAssignments to delete
     */
    where?: CardAssignmentWhereInput
    /**
     * Limit how many CardAssignments to delete.
     */
    limit?: number
  }

  /**
   * CardAssignment without action
   */
  export type CardAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardAssignment
     */
    select?: CardAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardAssignment
     */
    omit?: CardAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardAssignmentInclude<ExtArgs> | null
  }


  /**
   * Model CardHasTag
   */

  export type AggregateCardHasTag = {
    _count: CardHasTagCountAggregateOutputType | null
    _avg: CardHasTagAvgAggregateOutputType | null
    _sum: CardHasTagSumAggregateOutputType | null
    _min: CardHasTagMinAggregateOutputType | null
    _max: CardHasTagMaxAggregateOutputType | null
  }

  export type CardHasTagAvgAggregateOutputType = {
    id: number | null
    cardId: number | null
    tagId: number | null
  }

  export type CardHasTagSumAggregateOutputType = {
    id: number | null
    cardId: number | null
    tagId: number | null
  }

  export type CardHasTagMinAggregateOutputType = {
    id: number | null
    cardId: number | null
    tagId: number | null
  }

  export type CardHasTagMaxAggregateOutputType = {
    id: number | null
    cardId: number | null
    tagId: number | null
  }

  export type CardHasTagCountAggregateOutputType = {
    id: number
    cardId: number
    tagId: number
    _all: number
  }


  export type CardHasTagAvgAggregateInputType = {
    id?: true
    cardId?: true
    tagId?: true
  }

  export type CardHasTagSumAggregateInputType = {
    id?: true
    cardId?: true
    tagId?: true
  }

  export type CardHasTagMinAggregateInputType = {
    id?: true
    cardId?: true
    tagId?: true
  }

  export type CardHasTagMaxAggregateInputType = {
    id?: true
    cardId?: true
    tagId?: true
  }

  export type CardHasTagCountAggregateInputType = {
    id?: true
    cardId?: true
    tagId?: true
    _all?: true
  }

  export type CardHasTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CardHasTag to aggregate.
     */
    where?: CardHasTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardHasTags to fetch.
     */
    orderBy?: CardHasTagOrderByWithRelationInput | CardHasTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CardHasTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardHasTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardHasTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CardHasTags
    **/
    _count?: true | CardHasTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CardHasTagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CardHasTagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardHasTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardHasTagMaxAggregateInputType
  }

  export type GetCardHasTagAggregateType<T extends CardHasTagAggregateArgs> = {
        [P in keyof T & keyof AggregateCardHasTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCardHasTag[P]>
      : GetScalarType<T[P], AggregateCardHasTag[P]>
  }




  export type CardHasTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardHasTagWhereInput
    orderBy?: CardHasTagOrderByWithAggregationInput | CardHasTagOrderByWithAggregationInput[]
    by: CardHasTagScalarFieldEnum[] | CardHasTagScalarFieldEnum
    having?: CardHasTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardHasTagCountAggregateInputType | true
    _avg?: CardHasTagAvgAggregateInputType
    _sum?: CardHasTagSumAggregateInputType
    _min?: CardHasTagMinAggregateInputType
    _max?: CardHasTagMaxAggregateInputType
  }

  export type CardHasTagGroupByOutputType = {
    id: number
    cardId: number
    tagId: number
    _count: CardHasTagCountAggregateOutputType | null
    _avg: CardHasTagAvgAggregateOutputType | null
    _sum: CardHasTagSumAggregateOutputType | null
    _min: CardHasTagMinAggregateOutputType | null
    _max: CardHasTagMaxAggregateOutputType | null
  }

  type GetCardHasTagGroupByPayload<T extends CardHasTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardHasTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardHasTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardHasTagGroupByOutputType[P]>
            : GetScalarType<T[P], CardHasTagGroupByOutputType[P]>
        }
      >
    >


  export type CardHasTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardId?: boolean
    tagId?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardHasTag"]>

  export type CardHasTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardId?: boolean
    tagId?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardHasTag"]>

  export type CardHasTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardId?: boolean
    tagId?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardHasTag"]>

  export type CardHasTagSelectScalar = {
    id?: boolean
    cardId?: boolean
    tagId?: boolean
  }

  export type CardHasTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cardId" | "tagId", ExtArgs["result"]["cardHasTag"]>
  export type CardHasTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type CardHasTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type CardHasTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $CardHasTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CardHasTag"
    objects: {
      card: Prisma.$CardPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cardId: number
      tagId: number
    }, ExtArgs["result"]["cardHasTag"]>
    composites: {}
  }

  type CardHasTagGetPayload<S extends boolean | null | undefined | CardHasTagDefaultArgs> = $Result.GetResult<Prisma.$CardHasTagPayload, S>

  type CardHasTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CardHasTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CardHasTagCountAggregateInputType | true
    }

  export interface CardHasTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CardHasTag'], meta: { name: 'CardHasTag' } }
    /**
     * Find zero or one CardHasTag that matches the filter.
     * @param {CardHasTagFindUniqueArgs} args - Arguments to find a CardHasTag
     * @example
     * // Get one CardHasTag
     * const cardHasTag = await prisma.cardHasTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardHasTagFindUniqueArgs>(args: SelectSubset<T, CardHasTagFindUniqueArgs<ExtArgs>>): Prisma__CardHasTagClient<$Result.GetResult<Prisma.$CardHasTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CardHasTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CardHasTagFindUniqueOrThrowArgs} args - Arguments to find a CardHasTag
     * @example
     * // Get one CardHasTag
     * const cardHasTag = await prisma.cardHasTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardHasTagFindUniqueOrThrowArgs>(args: SelectSubset<T, CardHasTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CardHasTagClient<$Result.GetResult<Prisma.$CardHasTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CardHasTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardHasTagFindFirstArgs} args - Arguments to find a CardHasTag
     * @example
     * // Get one CardHasTag
     * const cardHasTag = await prisma.cardHasTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardHasTagFindFirstArgs>(args?: SelectSubset<T, CardHasTagFindFirstArgs<ExtArgs>>): Prisma__CardHasTagClient<$Result.GetResult<Prisma.$CardHasTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CardHasTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardHasTagFindFirstOrThrowArgs} args - Arguments to find a CardHasTag
     * @example
     * // Get one CardHasTag
     * const cardHasTag = await prisma.cardHasTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardHasTagFindFirstOrThrowArgs>(args?: SelectSubset<T, CardHasTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__CardHasTagClient<$Result.GetResult<Prisma.$CardHasTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CardHasTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardHasTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CardHasTags
     * const cardHasTags = await prisma.cardHasTag.findMany()
     * 
     * // Get first 10 CardHasTags
     * const cardHasTags = await prisma.cardHasTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cardHasTagWithIdOnly = await prisma.cardHasTag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CardHasTagFindManyArgs>(args?: SelectSubset<T, CardHasTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardHasTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CardHasTag.
     * @param {CardHasTagCreateArgs} args - Arguments to create a CardHasTag.
     * @example
     * // Create one CardHasTag
     * const CardHasTag = await prisma.cardHasTag.create({
     *   data: {
     *     // ... data to create a CardHasTag
     *   }
     * })
     * 
     */
    create<T extends CardHasTagCreateArgs>(args: SelectSubset<T, CardHasTagCreateArgs<ExtArgs>>): Prisma__CardHasTagClient<$Result.GetResult<Prisma.$CardHasTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CardHasTags.
     * @param {CardHasTagCreateManyArgs} args - Arguments to create many CardHasTags.
     * @example
     * // Create many CardHasTags
     * const cardHasTag = await prisma.cardHasTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CardHasTagCreateManyArgs>(args?: SelectSubset<T, CardHasTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CardHasTags and returns the data saved in the database.
     * @param {CardHasTagCreateManyAndReturnArgs} args - Arguments to create many CardHasTags.
     * @example
     * // Create many CardHasTags
     * const cardHasTag = await prisma.cardHasTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CardHasTags and only return the `id`
     * const cardHasTagWithIdOnly = await prisma.cardHasTag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CardHasTagCreateManyAndReturnArgs>(args?: SelectSubset<T, CardHasTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardHasTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CardHasTag.
     * @param {CardHasTagDeleteArgs} args - Arguments to delete one CardHasTag.
     * @example
     * // Delete one CardHasTag
     * const CardHasTag = await prisma.cardHasTag.delete({
     *   where: {
     *     // ... filter to delete one CardHasTag
     *   }
     * })
     * 
     */
    delete<T extends CardHasTagDeleteArgs>(args: SelectSubset<T, CardHasTagDeleteArgs<ExtArgs>>): Prisma__CardHasTagClient<$Result.GetResult<Prisma.$CardHasTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CardHasTag.
     * @param {CardHasTagUpdateArgs} args - Arguments to update one CardHasTag.
     * @example
     * // Update one CardHasTag
     * const cardHasTag = await prisma.cardHasTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CardHasTagUpdateArgs>(args: SelectSubset<T, CardHasTagUpdateArgs<ExtArgs>>): Prisma__CardHasTagClient<$Result.GetResult<Prisma.$CardHasTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CardHasTags.
     * @param {CardHasTagDeleteManyArgs} args - Arguments to filter CardHasTags to delete.
     * @example
     * // Delete a few CardHasTags
     * const { count } = await prisma.cardHasTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CardHasTagDeleteManyArgs>(args?: SelectSubset<T, CardHasTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CardHasTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardHasTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CardHasTags
     * const cardHasTag = await prisma.cardHasTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CardHasTagUpdateManyArgs>(args: SelectSubset<T, CardHasTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CardHasTags and returns the data updated in the database.
     * @param {CardHasTagUpdateManyAndReturnArgs} args - Arguments to update many CardHasTags.
     * @example
     * // Update many CardHasTags
     * const cardHasTag = await prisma.cardHasTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CardHasTags and only return the `id`
     * const cardHasTagWithIdOnly = await prisma.cardHasTag.updateManyAndReturn({
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
    updateManyAndReturn<T extends CardHasTagUpdateManyAndReturnArgs>(args: SelectSubset<T, CardHasTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardHasTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CardHasTag.
     * @param {CardHasTagUpsertArgs} args - Arguments to update or create a CardHasTag.
     * @example
     * // Update or create a CardHasTag
     * const cardHasTag = await prisma.cardHasTag.upsert({
     *   create: {
     *     // ... data to create a CardHasTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CardHasTag we want to update
     *   }
     * })
     */
    upsert<T extends CardHasTagUpsertArgs>(args: SelectSubset<T, CardHasTagUpsertArgs<ExtArgs>>): Prisma__CardHasTagClient<$Result.GetResult<Prisma.$CardHasTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CardHasTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardHasTagCountArgs} args - Arguments to filter CardHasTags to count.
     * @example
     * // Count the number of CardHasTags
     * const count = await prisma.cardHasTag.count({
     *   where: {
     *     // ... the filter for the CardHasTags we want to count
     *   }
     * })
    **/
    count<T extends CardHasTagCountArgs>(
      args?: Subset<T, CardHasTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardHasTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CardHasTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardHasTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CardHasTagAggregateArgs>(args: Subset<T, CardHasTagAggregateArgs>): Prisma.PrismaPromise<GetCardHasTagAggregateType<T>>

    /**
     * Group by CardHasTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardHasTagGroupByArgs} args - Group by arguments.
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
      T extends CardHasTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardHasTagGroupByArgs['orderBy'] }
        : { orderBy?: CardHasTagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CardHasTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardHasTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CardHasTag model
   */
  readonly fields: CardHasTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CardHasTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CardHasTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    card<T extends CardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CardDefaultArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CardHasTag model
   */
  interface CardHasTagFieldRefs {
    readonly id: FieldRef<"CardHasTag", 'Int'>
    readonly cardId: FieldRef<"CardHasTag", 'Int'>
    readonly tagId: FieldRef<"CardHasTag", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CardHasTag findUnique
   */
  export type CardHasTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardHasTag
     */
    select?: CardHasTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardHasTag
     */
    omit?: CardHasTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardHasTagInclude<ExtArgs> | null
    /**
     * Filter, which CardHasTag to fetch.
     */
    where: CardHasTagWhereUniqueInput
  }

  /**
   * CardHasTag findUniqueOrThrow
   */
  export type CardHasTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardHasTag
     */
    select?: CardHasTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardHasTag
     */
    omit?: CardHasTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardHasTagInclude<ExtArgs> | null
    /**
     * Filter, which CardHasTag to fetch.
     */
    where: CardHasTagWhereUniqueInput
  }

  /**
   * CardHasTag findFirst
   */
  export type CardHasTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardHasTag
     */
    select?: CardHasTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardHasTag
     */
    omit?: CardHasTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardHasTagInclude<ExtArgs> | null
    /**
     * Filter, which CardHasTag to fetch.
     */
    where?: CardHasTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardHasTags to fetch.
     */
    orderBy?: CardHasTagOrderByWithRelationInput | CardHasTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CardHasTags.
     */
    cursor?: CardHasTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardHasTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardHasTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CardHasTags.
     */
    distinct?: CardHasTagScalarFieldEnum | CardHasTagScalarFieldEnum[]
  }

  /**
   * CardHasTag findFirstOrThrow
   */
  export type CardHasTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardHasTag
     */
    select?: CardHasTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardHasTag
     */
    omit?: CardHasTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardHasTagInclude<ExtArgs> | null
    /**
     * Filter, which CardHasTag to fetch.
     */
    where?: CardHasTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardHasTags to fetch.
     */
    orderBy?: CardHasTagOrderByWithRelationInput | CardHasTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CardHasTags.
     */
    cursor?: CardHasTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardHasTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardHasTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CardHasTags.
     */
    distinct?: CardHasTagScalarFieldEnum | CardHasTagScalarFieldEnum[]
  }

  /**
   * CardHasTag findMany
   */
  export type CardHasTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardHasTag
     */
    select?: CardHasTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardHasTag
     */
    omit?: CardHasTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardHasTagInclude<ExtArgs> | null
    /**
     * Filter, which CardHasTags to fetch.
     */
    where?: CardHasTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardHasTags to fetch.
     */
    orderBy?: CardHasTagOrderByWithRelationInput | CardHasTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CardHasTags.
     */
    cursor?: CardHasTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardHasTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardHasTags.
     */
    skip?: number
    distinct?: CardHasTagScalarFieldEnum | CardHasTagScalarFieldEnum[]
  }

  /**
   * CardHasTag create
   */
  export type CardHasTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardHasTag
     */
    select?: CardHasTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardHasTag
     */
    omit?: CardHasTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardHasTagInclude<ExtArgs> | null
    /**
     * The data needed to create a CardHasTag.
     */
    data: XOR<CardHasTagCreateInput, CardHasTagUncheckedCreateInput>
  }

  /**
   * CardHasTag createMany
   */
  export type CardHasTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CardHasTags.
     */
    data: CardHasTagCreateManyInput | CardHasTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CardHasTag createManyAndReturn
   */
  export type CardHasTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardHasTag
     */
    select?: CardHasTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CardHasTag
     */
    omit?: CardHasTagOmit<ExtArgs> | null
    /**
     * The data used to create many CardHasTags.
     */
    data: CardHasTagCreateManyInput | CardHasTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardHasTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CardHasTag update
   */
  export type CardHasTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardHasTag
     */
    select?: CardHasTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardHasTag
     */
    omit?: CardHasTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardHasTagInclude<ExtArgs> | null
    /**
     * The data needed to update a CardHasTag.
     */
    data: XOR<CardHasTagUpdateInput, CardHasTagUncheckedUpdateInput>
    /**
     * Choose, which CardHasTag to update.
     */
    where: CardHasTagWhereUniqueInput
  }

  /**
   * CardHasTag updateMany
   */
  export type CardHasTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CardHasTags.
     */
    data: XOR<CardHasTagUpdateManyMutationInput, CardHasTagUncheckedUpdateManyInput>
    /**
     * Filter which CardHasTags to update
     */
    where?: CardHasTagWhereInput
    /**
     * Limit how many CardHasTags to update.
     */
    limit?: number
  }

  /**
   * CardHasTag updateManyAndReturn
   */
  export type CardHasTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardHasTag
     */
    select?: CardHasTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CardHasTag
     */
    omit?: CardHasTagOmit<ExtArgs> | null
    /**
     * The data used to update CardHasTags.
     */
    data: XOR<CardHasTagUpdateManyMutationInput, CardHasTagUncheckedUpdateManyInput>
    /**
     * Filter which CardHasTags to update
     */
    where?: CardHasTagWhereInput
    /**
     * Limit how many CardHasTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardHasTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CardHasTag upsert
   */
  export type CardHasTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardHasTag
     */
    select?: CardHasTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardHasTag
     */
    omit?: CardHasTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardHasTagInclude<ExtArgs> | null
    /**
     * The filter to search for the CardHasTag to update in case it exists.
     */
    where: CardHasTagWhereUniqueInput
    /**
     * In case the CardHasTag found by the `where` argument doesn't exist, create a new CardHasTag with this data.
     */
    create: XOR<CardHasTagCreateInput, CardHasTagUncheckedCreateInput>
    /**
     * In case the CardHasTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CardHasTagUpdateInput, CardHasTagUncheckedUpdateInput>
  }

  /**
   * CardHasTag delete
   */
  export type CardHasTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardHasTag
     */
    select?: CardHasTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardHasTag
     */
    omit?: CardHasTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardHasTagInclude<ExtArgs> | null
    /**
     * Filter which CardHasTag to delete.
     */
    where: CardHasTagWhereUniqueInput
  }

  /**
   * CardHasTag deleteMany
   */
  export type CardHasTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CardHasTags to delete
     */
    where?: CardHasTagWhereInput
    /**
     * Limit how many CardHasTags to delete.
     */
    limit?: number
  }

  /**
   * CardHasTag without action
   */
  export type CardHasTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardHasTag
     */
    select?: CardHasTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardHasTag
     */
    omit?: CardHasTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardHasTagInclude<ExtArgs> | null
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
    email: 'email',
    username: 'username',
    password: 'password',
    pictureUrl: 'pictureUrl'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BoardScalarFieldEnum: {
    id: 'id',
    name: 'name',
    LastEdited: 'LastEdited',
    Color: 'Color'
  };

  export type BoardScalarFieldEnum = (typeof BoardScalarFieldEnum)[keyof typeof BoardScalarFieldEnum]


  export const UserHasBoardScalarFieldEnum: {
    id: 'id',
    role: 'role',
    boardId: 'boardId',
    userId: 'userId'
  };

  export type UserHasBoardScalarFieldEnum = (typeof UserHasBoardScalarFieldEnum)[keyof typeof UserHasBoardScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    boardId: 'boardId',
    color: 'color',
    cardId: 'cardId'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const CardScalarFieldEnum: {
    id: 'id',
    status: 'status',
    title: 'title',
    content: 'content',
    startDate: 'startDate',
    endDate: 'endDate',
    creatorId: 'creatorId',
    columnId: 'columnId',
    color: 'color'
  };

  export type CardScalarFieldEnum = (typeof CardScalarFieldEnum)[keyof typeof CardScalarFieldEnum]


  export const ListScalarFieldEnum: {
    id: 'id',
    title: 'title',
    cardId: 'cardId'
  };

  export type ListScalarFieldEnum = (typeof ListScalarFieldEnum)[keyof typeof ListScalarFieldEnum]


  export const ListItemScalarFieldEnum: {
    id: 'id',
    content: 'content',
    listId: 'listId',
    status: 'status',
    order: 'order'
  };

  export type ListItemScalarFieldEnum = (typeof ListItemScalarFieldEnum)[keyof typeof ListItemScalarFieldEnum]


  export const ColumnScalarFieldEnum: {
    id: 'id',
    name: 'name',
    boardId: 'boardId',
    order: 'order'
  };

  export type ColumnScalarFieldEnum = (typeof ColumnScalarFieldEnum)[keyof typeof ColumnScalarFieldEnum]


  export const CardAssignmentScalarFieldEnum: {
    id: 'id',
    cardId: 'cardId',
    userId: 'userId'
  };

  export type CardAssignmentScalarFieldEnum = (typeof CardAssignmentScalarFieldEnum)[keyof typeof CardAssignmentScalarFieldEnum]


  export const CardHasTagScalarFieldEnum: {
    id: 'id',
    cardId: 'cardId',
    tagId: 'tagId'
  };

  export type CardHasTagScalarFieldEnum = (typeof CardHasTagScalarFieldEnum)[keyof typeof CardHasTagScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    pictureUrl?: StringFilter<"User"> | string
    UserHasBoard?: UserHasBoardListRelationFilter
    Card?: CardListRelationFilter
    CardAssignment?: CardAssignmentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    pictureUrl?: SortOrder
    UserHasBoard?: UserHasBoardOrderByRelationAggregateInput
    Card?: CardOrderByRelationAggregateInput
    CardAssignment?: CardAssignmentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    pictureUrl?: StringFilter<"User"> | string
    UserHasBoard?: UserHasBoardListRelationFilter
    Card?: CardListRelationFilter
    CardAssignment?: CardAssignmentListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    pictureUrl?: SortOrder
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
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    pictureUrl?: StringWithAggregatesFilter<"User"> | string
  }

  export type BoardWhereInput = {
    AND?: BoardWhereInput | BoardWhereInput[]
    OR?: BoardWhereInput[]
    NOT?: BoardWhereInput | BoardWhereInput[]
    id?: IntFilter<"Board"> | number
    name?: StringFilter<"Board"> | string
    LastEdited?: StringFilter<"Board"> | string
    Color?: StringFilter<"Board"> | string
    UserHasBoard?: UserHasBoardListRelationFilter
    Tag?: TagListRelationFilter
    Column?: ColumnListRelationFilter
  }

  export type BoardOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    LastEdited?: SortOrder
    Color?: SortOrder
    UserHasBoard?: UserHasBoardOrderByRelationAggregateInput
    Tag?: TagOrderByRelationAggregateInput
    Column?: ColumnOrderByRelationAggregateInput
  }

  export type BoardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BoardWhereInput | BoardWhereInput[]
    OR?: BoardWhereInput[]
    NOT?: BoardWhereInput | BoardWhereInput[]
    name?: StringFilter<"Board"> | string
    LastEdited?: StringFilter<"Board"> | string
    Color?: StringFilter<"Board"> | string
    UserHasBoard?: UserHasBoardListRelationFilter
    Tag?: TagListRelationFilter
    Column?: ColumnListRelationFilter
  }, "id">

  export type BoardOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    LastEdited?: SortOrder
    Color?: SortOrder
    _count?: BoardCountOrderByAggregateInput
    _avg?: BoardAvgOrderByAggregateInput
    _max?: BoardMaxOrderByAggregateInput
    _min?: BoardMinOrderByAggregateInput
    _sum?: BoardSumOrderByAggregateInput
  }

  export type BoardScalarWhereWithAggregatesInput = {
    AND?: BoardScalarWhereWithAggregatesInput | BoardScalarWhereWithAggregatesInput[]
    OR?: BoardScalarWhereWithAggregatesInput[]
    NOT?: BoardScalarWhereWithAggregatesInput | BoardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Board"> | number
    name?: StringWithAggregatesFilter<"Board"> | string
    LastEdited?: StringWithAggregatesFilter<"Board"> | string
    Color?: StringWithAggregatesFilter<"Board"> | string
  }

  export type UserHasBoardWhereInput = {
    AND?: UserHasBoardWhereInput | UserHasBoardWhereInput[]
    OR?: UserHasBoardWhereInput[]
    NOT?: UserHasBoardWhereInput | UserHasBoardWhereInput[]
    id?: IntFilter<"UserHasBoard"> | number
    role?: StringFilter<"UserHasBoard"> | string
    boardId?: IntFilter<"UserHasBoard"> | number
    userId?: IntFilter<"UserHasBoard"> | number
    board?: XOR<BoardScalarRelationFilter, BoardWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserHasBoardOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    boardId?: SortOrder
    userId?: SortOrder
    board?: BoardOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type UserHasBoardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserHasBoardWhereInput | UserHasBoardWhereInput[]
    OR?: UserHasBoardWhereInput[]
    NOT?: UserHasBoardWhereInput | UserHasBoardWhereInput[]
    role?: StringFilter<"UserHasBoard"> | string
    boardId?: IntFilter<"UserHasBoard"> | number
    userId?: IntFilter<"UserHasBoard"> | number
    board?: XOR<BoardScalarRelationFilter, BoardWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserHasBoardOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    boardId?: SortOrder
    userId?: SortOrder
    _count?: UserHasBoardCountOrderByAggregateInput
    _avg?: UserHasBoardAvgOrderByAggregateInput
    _max?: UserHasBoardMaxOrderByAggregateInput
    _min?: UserHasBoardMinOrderByAggregateInput
    _sum?: UserHasBoardSumOrderByAggregateInput
  }

  export type UserHasBoardScalarWhereWithAggregatesInput = {
    AND?: UserHasBoardScalarWhereWithAggregatesInput | UserHasBoardScalarWhereWithAggregatesInput[]
    OR?: UserHasBoardScalarWhereWithAggregatesInput[]
    NOT?: UserHasBoardScalarWhereWithAggregatesInput | UserHasBoardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserHasBoard"> | number
    role?: StringWithAggregatesFilter<"UserHasBoard"> | string
    boardId?: IntWithAggregatesFilter<"UserHasBoard"> | number
    userId?: IntWithAggregatesFilter<"UserHasBoard"> | number
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: IntFilter<"Tag"> | number
    name?: StringFilter<"Tag"> | string
    boardId?: IntFilter<"Tag"> | number
    color?: StringFilter<"Tag"> | string
    cardId?: IntNullableFilter<"Tag"> | number | null
    board?: XOR<BoardScalarRelationFilter, BoardWhereInput>
    CardHasTag?: CardHasTagListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    boardId?: SortOrder
    color?: SortOrder
    cardId?: SortOrderInput | SortOrder
    board?: BoardOrderByWithRelationInput
    CardHasTag?: CardHasTagOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    name?: StringFilter<"Tag"> | string
    boardId?: IntFilter<"Tag"> | number
    color?: StringFilter<"Tag"> | string
    cardId?: IntNullableFilter<"Tag"> | number | null
    board?: XOR<BoardScalarRelationFilter, BoardWhereInput>
    CardHasTag?: CardHasTagListRelationFilter
  }, "id">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    boardId?: SortOrder
    color?: SortOrder
    cardId?: SortOrderInput | SortOrder
    _count?: TagCountOrderByAggregateInput
    _avg?: TagAvgOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
    _sum?: TagSumOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tag"> | number
    name?: StringWithAggregatesFilter<"Tag"> | string
    boardId?: IntWithAggregatesFilter<"Tag"> | number
    color?: StringWithAggregatesFilter<"Tag"> | string
    cardId?: IntNullableWithAggregatesFilter<"Tag"> | number | null
  }

  export type CardWhereInput = {
    AND?: CardWhereInput | CardWhereInput[]
    OR?: CardWhereInput[]
    NOT?: CardWhereInput | CardWhereInput[]
    id?: IntFilter<"Card"> | number
    status?: StringNullableFilter<"Card"> | string | null
    title?: StringFilter<"Card"> | string
    content?: StringNullableFilter<"Card"> | string | null
    startDate?: StringNullableFilter<"Card"> | string | null
    endDate?: StringNullableFilter<"Card"> | string | null
    creatorId?: IntNullableFilter<"Card"> | number | null
    columnId?: IntFilter<"Card"> | number
    color?: StringFilter<"Card"> | string
    List?: ListListRelationFilter
    creator?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    column?: XOR<ColumnScalarRelationFilter, ColumnWhereInput>
    CardAssignment?: CardAssignmentListRelationFilter
    CardHasTag?: CardHasTagListRelationFilter
  }

  export type CardOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrderInput | SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    creatorId?: SortOrderInput | SortOrder
    columnId?: SortOrder
    color?: SortOrder
    List?: ListOrderByRelationAggregateInput
    creator?: UserOrderByWithRelationInput
    column?: ColumnOrderByWithRelationInput
    CardAssignment?: CardAssignmentOrderByRelationAggregateInput
    CardHasTag?: CardHasTagOrderByRelationAggregateInput
  }

  export type CardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CardWhereInput | CardWhereInput[]
    OR?: CardWhereInput[]
    NOT?: CardWhereInput | CardWhereInput[]
    status?: StringNullableFilter<"Card"> | string | null
    title?: StringFilter<"Card"> | string
    content?: StringNullableFilter<"Card"> | string | null
    startDate?: StringNullableFilter<"Card"> | string | null
    endDate?: StringNullableFilter<"Card"> | string | null
    creatorId?: IntNullableFilter<"Card"> | number | null
    columnId?: IntFilter<"Card"> | number
    color?: StringFilter<"Card"> | string
    List?: ListListRelationFilter
    creator?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    column?: XOR<ColumnScalarRelationFilter, ColumnWhereInput>
    CardAssignment?: CardAssignmentListRelationFilter
    CardHasTag?: CardHasTagListRelationFilter
  }, "id">

  export type CardOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrderInput | SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    creatorId?: SortOrderInput | SortOrder
    columnId?: SortOrder
    color?: SortOrder
    _count?: CardCountOrderByAggregateInput
    _avg?: CardAvgOrderByAggregateInput
    _max?: CardMaxOrderByAggregateInput
    _min?: CardMinOrderByAggregateInput
    _sum?: CardSumOrderByAggregateInput
  }

  export type CardScalarWhereWithAggregatesInput = {
    AND?: CardScalarWhereWithAggregatesInput | CardScalarWhereWithAggregatesInput[]
    OR?: CardScalarWhereWithAggregatesInput[]
    NOT?: CardScalarWhereWithAggregatesInput | CardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Card"> | number
    status?: StringNullableWithAggregatesFilter<"Card"> | string | null
    title?: StringWithAggregatesFilter<"Card"> | string
    content?: StringNullableWithAggregatesFilter<"Card"> | string | null
    startDate?: StringNullableWithAggregatesFilter<"Card"> | string | null
    endDate?: StringNullableWithAggregatesFilter<"Card"> | string | null
    creatorId?: IntNullableWithAggregatesFilter<"Card"> | number | null
    columnId?: IntWithAggregatesFilter<"Card"> | number
    color?: StringWithAggregatesFilter<"Card"> | string
  }

  export type ListWhereInput = {
    AND?: ListWhereInput | ListWhereInput[]
    OR?: ListWhereInput[]
    NOT?: ListWhereInput | ListWhereInput[]
    id?: IntFilter<"List"> | number
    title?: StringFilter<"List"> | string
    cardId?: IntFilter<"List"> | number
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
    ListItem?: ListItemListRelationFilter
  }

  export type ListOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    cardId?: SortOrder
    card?: CardOrderByWithRelationInput
    ListItem?: ListItemOrderByRelationAggregateInput
  }

  export type ListWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ListWhereInput | ListWhereInput[]
    OR?: ListWhereInput[]
    NOT?: ListWhereInput | ListWhereInput[]
    title?: StringFilter<"List"> | string
    cardId?: IntFilter<"List"> | number
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
    ListItem?: ListItemListRelationFilter
  }, "id">

  export type ListOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    cardId?: SortOrder
    _count?: ListCountOrderByAggregateInput
    _avg?: ListAvgOrderByAggregateInput
    _max?: ListMaxOrderByAggregateInput
    _min?: ListMinOrderByAggregateInput
    _sum?: ListSumOrderByAggregateInput
  }

  export type ListScalarWhereWithAggregatesInput = {
    AND?: ListScalarWhereWithAggregatesInput | ListScalarWhereWithAggregatesInput[]
    OR?: ListScalarWhereWithAggregatesInput[]
    NOT?: ListScalarWhereWithAggregatesInput | ListScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"List"> | number
    title?: StringWithAggregatesFilter<"List"> | string
    cardId?: IntWithAggregatesFilter<"List"> | number
  }

  export type ListItemWhereInput = {
    AND?: ListItemWhereInput | ListItemWhereInput[]
    OR?: ListItemWhereInput[]
    NOT?: ListItemWhereInput | ListItemWhereInput[]
    id?: IntFilter<"ListItem"> | number
    content?: StringFilter<"ListItem"> | string
    listId?: IntFilter<"ListItem"> | number
    status?: BoolFilter<"ListItem"> | boolean
    order?: IntFilter<"ListItem"> | number
    list?: XOR<ListScalarRelationFilter, ListWhereInput>
  }

  export type ListItemOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    listId?: SortOrder
    status?: SortOrder
    order?: SortOrder
    list?: ListOrderByWithRelationInput
  }

  export type ListItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ListItemWhereInput | ListItemWhereInput[]
    OR?: ListItemWhereInput[]
    NOT?: ListItemWhereInput | ListItemWhereInput[]
    content?: StringFilter<"ListItem"> | string
    listId?: IntFilter<"ListItem"> | number
    status?: BoolFilter<"ListItem"> | boolean
    order?: IntFilter<"ListItem"> | number
    list?: XOR<ListScalarRelationFilter, ListWhereInput>
  }, "id">

  export type ListItemOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    listId?: SortOrder
    status?: SortOrder
    order?: SortOrder
    _count?: ListItemCountOrderByAggregateInput
    _avg?: ListItemAvgOrderByAggregateInput
    _max?: ListItemMaxOrderByAggregateInput
    _min?: ListItemMinOrderByAggregateInput
    _sum?: ListItemSumOrderByAggregateInput
  }

  export type ListItemScalarWhereWithAggregatesInput = {
    AND?: ListItemScalarWhereWithAggregatesInput | ListItemScalarWhereWithAggregatesInput[]
    OR?: ListItemScalarWhereWithAggregatesInput[]
    NOT?: ListItemScalarWhereWithAggregatesInput | ListItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ListItem"> | number
    content?: StringWithAggregatesFilter<"ListItem"> | string
    listId?: IntWithAggregatesFilter<"ListItem"> | number
    status?: BoolWithAggregatesFilter<"ListItem"> | boolean
    order?: IntWithAggregatesFilter<"ListItem"> | number
  }

  export type ColumnWhereInput = {
    AND?: ColumnWhereInput | ColumnWhereInput[]
    OR?: ColumnWhereInput[]
    NOT?: ColumnWhereInput | ColumnWhereInput[]
    id?: IntFilter<"Column"> | number
    name?: StringFilter<"Column"> | string
    boardId?: IntFilter<"Column"> | number
    order?: IntFilter<"Column"> | number
    board?: XOR<BoardScalarRelationFilter, BoardWhereInput>
    Card?: CardListRelationFilter
  }

  export type ColumnOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    boardId?: SortOrder
    order?: SortOrder
    board?: BoardOrderByWithRelationInput
    Card?: CardOrderByRelationAggregateInput
  }

  export type ColumnWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ColumnWhereInput | ColumnWhereInput[]
    OR?: ColumnWhereInput[]
    NOT?: ColumnWhereInput | ColumnWhereInput[]
    name?: StringFilter<"Column"> | string
    boardId?: IntFilter<"Column"> | number
    order?: IntFilter<"Column"> | number
    board?: XOR<BoardScalarRelationFilter, BoardWhereInput>
    Card?: CardListRelationFilter
  }, "id">

  export type ColumnOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    boardId?: SortOrder
    order?: SortOrder
    _count?: ColumnCountOrderByAggregateInput
    _avg?: ColumnAvgOrderByAggregateInput
    _max?: ColumnMaxOrderByAggregateInput
    _min?: ColumnMinOrderByAggregateInput
    _sum?: ColumnSumOrderByAggregateInput
  }

  export type ColumnScalarWhereWithAggregatesInput = {
    AND?: ColumnScalarWhereWithAggregatesInput | ColumnScalarWhereWithAggregatesInput[]
    OR?: ColumnScalarWhereWithAggregatesInput[]
    NOT?: ColumnScalarWhereWithAggregatesInput | ColumnScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Column"> | number
    name?: StringWithAggregatesFilter<"Column"> | string
    boardId?: IntWithAggregatesFilter<"Column"> | number
    order?: IntWithAggregatesFilter<"Column"> | number
  }

  export type CardAssignmentWhereInput = {
    AND?: CardAssignmentWhereInput | CardAssignmentWhereInput[]
    OR?: CardAssignmentWhereInput[]
    NOT?: CardAssignmentWhereInput | CardAssignmentWhereInput[]
    id?: IntFilter<"CardAssignment"> | number
    cardId?: IntFilter<"CardAssignment"> | number
    userId?: IntFilter<"CardAssignment"> | number
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CardAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    cardId?: SortOrder
    userId?: SortOrder
    card?: CardOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type CardAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CardAssignmentWhereInput | CardAssignmentWhereInput[]
    OR?: CardAssignmentWhereInput[]
    NOT?: CardAssignmentWhereInput | CardAssignmentWhereInput[]
    cardId?: IntFilter<"CardAssignment"> | number
    userId?: IntFilter<"CardAssignment"> | number
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CardAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    cardId?: SortOrder
    userId?: SortOrder
    _count?: CardAssignmentCountOrderByAggregateInput
    _avg?: CardAssignmentAvgOrderByAggregateInput
    _max?: CardAssignmentMaxOrderByAggregateInput
    _min?: CardAssignmentMinOrderByAggregateInput
    _sum?: CardAssignmentSumOrderByAggregateInput
  }

  export type CardAssignmentScalarWhereWithAggregatesInput = {
    AND?: CardAssignmentScalarWhereWithAggregatesInput | CardAssignmentScalarWhereWithAggregatesInput[]
    OR?: CardAssignmentScalarWhereWithAggregatesInput[]
    NOT?: CardAssignmentScalarWhereWithAggregatesInput | CardAssignmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CardAssignment"> | number
    cardId?: IntWithAggregatesFilter<"CardAssignment"> | number
    userId?: IntWithAggregatesFilter<"CardAssignment"> | number
  }

  export type CardHasTagWhereInput = {
    AND?: CardHasTagWhereInput | CardHasTagWhereInput[]
    OR?: CardHasTagWhereInput[]
    NOT?: CardHasTagWhereInput | CardHasTagWhereInput[]
    id?: IntFilter<"CardHasTag"> | number
    cardId?: IntFilter<"CardHasTag"> | number
    tagId?: IntFilter<"CardHasTag"> | number
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type CardHasTagOrderByWithRelationInput = {
    id?: SortOrder
    cardId?: SortOrder
    tagId?: SortOrder
    card?: CardOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type CardHasTagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CardHasTagWhereInput | CardHasTagWhereInput[]
    OR?: CardHasTagWhereInput[]
    NOT?: CardHasTagWhereInput | CardHasTagWhereInput[]
    cardId?: IntFilter<"CardHasTag"> | number
    tagId?: IntFilter<"CardHasTag"> | number
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "id">

  export type CardHasTagOrderByWithAggregationInput = {
    id?: SortOrder
    cardId?: SortOrder
    tagId?: SortOrder
    _count?: CardHasTagCountOrderByAggregateInput
    _avg?: CardHasTagAvgOrderByAggregateInput
    _max?: CardHasTagMaxOrderByAggregateInput
    _min?: CardHasTagMinOrderByAggregateInput
    _sum?: CardHasTagSumOrderByAggregateInput
  }

  export type CardHasTagScalarWhereWithAggregatesInput = {
    AND?: CardHasTagScalarWhereWithAggregatesInput | CardHasTagScalarWhereWithAggregatesInput[]
    OR?: CardHasTagScalarWhereWithAggregatesInput[]
    NOT?: CardHasTagScalarWhereWithAggregatesInput | CardHasTagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CardHasTag"> | number
    cardId?: IntWithAggregatesFilter<"CardHasTag"> | number
    tagId?: IntWithAggregatesFilter<"CardHasTag"> | number
  }

  export type UserCreateInput = {
    email: string
    username: string
    password: string
    pictureUrl: string
    UserHasBoard?: UserHasBoardCreateNestedManyWithoutUserInput
    Card?: CardCreateNestedManyWithoutCreatorInput
    CardAssignment?: CardAssignmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    username: string
    password: string
    pictureUrl: string
    UserHasBoard?: UserHasBoardUncheckedCreateNestedManyWithoutUserInput
    Card?: CardUncheckedCreateNestedManyWithoutCreatorInput
    CardAssignment?: CardAssignmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pictureUrl?: StringFieldUpdateOperationsInput | string
    UserHasBoard?: UserHasBoardUpdateManyWithoutUserNestedInput
    Card?: CardUpdateManyWithoutCreatorNestedInput
    CardAssignment?: CardAssignmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pictureUrl?: StringFieldUpdateOperationsInput | string
    UserHasBoard?: UserHasBoardUncheckedUpdateManyWithoutUserNestedInput
    Card?: CardUncheckedUpdateManyWithoutCreatorNestedInput
    CardAssignment?: CardAssignmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    username: string
    password: string
    pictureUrl: string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pictureUrl?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pictureUrl?: StringFieldUpdateOperationsInput | string
  }

  export type BoardCreateInput = {
    name: string
    LastEdited: string
    Color: string
    UserHasBoard?: UserHasBoardCreateNestedManyWithoutBoardInput
    Tag?: TagCreateNestedManyWithoutBoardInput
    Column?: ColumnCreateNestedManyWithoutBoardInput
  }

  export type BoardUncheckedCreateInput = {
    id?: number
    name: string
    LastEdited: string
    Color: string
    UserHasBoard?: UserHasBoardUncheckedCreateNestedManyWithoutBoardInput
    Tag?: TagUncheckedCreateNestedManyWithoutBoardInput
    Column?: ColumnUncheckedCreateNestedManyWithoutBoardInput
  }

  export type BoardUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    LastEdited?: StringFieldUpdateOperationsInput | string
    Color?: StringFieldUpdateOperationsInput | string
    UserHasBoard?: UserHasBoardUpdateManyWithoutBoardNestedInput
    Tag?: TagUpdateManyWithoutBoardNestedInput
    Column?: ColumnUpdateManyWithoutBoardNestedInput
  }

  export type BoardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    LastEdited?: StringFieldUpdateOperationsInput | string
    Color?: StringFieldUpdateOperationsInput | string
    UserHasBoard?: UserHasBoardUncheckedUpdateManyWithoutBoardNestedInput
    Tag?: TagUncheckedUpdateManyWithoutBoardNestedInput
    Column?: ColumnUncheckedUpdateManyWithoutBoardNestedInput
  }

  export type BoardCreateManyInput = {
    id?: number
    name: string
    LastEdited: string
    Color: string
  }

  export type BoardUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    LastEdited?: StringFieldUpdateOperationsInput | string
    Color?: StringFieldUpdateOperationsInput | string
  }

  export type BoardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    LastEdited?: StringFieldUpdateOperationsInput | string
    Color?: StringFieldUpdateOperationsInput | string
  }

  export type UserHasBoardCreateInput = {
    role: string
    board: BoardCreateNestedOneWithoutUserHasBoardInput
    user: UserCreateNestedOneWithoutUserHasBoardInput
  }

  export type UserHasBoardUncheckedCreateInput = {
    id?: number
    role: string
    boardId: number
    userId: number
  }

  export type UserHasBoardUpdateInput = {
    role?: StringFieldUpdateOperationsInput | string
    board?: BoardUpdateOneRequiredWithoutUserHasBoardNestedInput
    user?: UserUpdateOneRequiredWithoutUserHasBoardNestedInput
  }

  export type UserHasBoardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    boardId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserHasBoardCreateManyInput = {
    id?: number
    role: string
    boardId: number
    userId: number
  }

  export type UserHasBoardUpdateManyMutationInput = {
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserHasBoardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    boardId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TagCreateInput = {
    name: string
    color: string
    cardId?: number | null
    board: BoardCreateNestedOneWithoutTagInput
    CardHasTag?: CardHasTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: number
    name: string
    boardId: number
    color: string
    cardId?: number | null
    CardHasTag?: CardHasTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    cardId?: NullableIntFieldUpdateOperationsInput | number | null
    board?: BoardUpdateOneRequiredWithoutTagNestedInput
    CardHasTag?: CardHasTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    boardId?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    cardId?: NullableIntFieldUpdateOperationsInput | number | null
    CardHasTag?: CardHasTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: number
    name: string
    boardId: number
    color: string
    cardId?: number | null
  }

  export type TagUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    cardId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    boardId?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    cardId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CardCreateInput = {
    status?: string | null
    title: string
    content?: string | null
    startDate?: string | null
    endDate?: string | null
    color: string
    List?: ListCreateNestedManyWithoutCardInput
    creator?: UserCreateNestedOneWithoutCardInput
    column: ColumnCreateNestedOneWithoutCardInput
    CardAssignment?: CardAssignmentCreateNestedManyWithoutCardInput
    CardHasTag?: CardHasTagCreateNestedManyWithoutCardInput
  }

  export type CardUncheckedCreateInput = {
    id?: number
    status?: string | null
    title: string
    content?: string | null
    startDate?: string | null
    endDate?: string | null
    creatorId?: number | null
    columnId: number
    color: string
    List?: ListUncheckedCreateNestedManyWithoutCardInput
    CardAssignment?: CardAssignmentUncheckedCreateNestedManyWithoutCardInput
    CardHasTag?: CardHasTagUncheckedCreateNestedManyWithoutCardInput
  }

  export type CardUpdateInput = {
    status?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    List?: ListUpdateManyWithoutCardNestedInput
    creator?: UserUpdateOneWithoutCardNestedInput
    column?: ColumnUpdateOneRequiredWithoutCardNestedInput
    CardAssignment?: CardAssignmentUpdateManyWithoutCardNestedInput
    CardHasTag?: CardHasTagUpdateManyWithoutCardNestedInput
  }

  export type CardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: NullableIntFieldUpdateOperationsInput | number | null
    columnId?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    List?: ListUncheckedUpdateManyWithoutCardNestedInput
    CardAssignment?: CardAssignmentUncheckedUpdateManyWithoutCardNestedInput
    CardHasTag?: CardHasTagUncheckedUpdateManyWithoutCardNestedInput
  }

  export type CardCreateManyInput = {
    id?: number
    status?: string | null
    title: string
    content?: string | null
    startDate?: string | null
    endDate?: string | null
    creatorId?: number | null
    columnId: number
    color: string
  }

  export type CardUpdateManyMutationInput = {
    status?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
  }

  export type CardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: NullableIntFieldUpdateOperationsInput | number | null
    columnId?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
  }

  export type ListCreateInput = {
    title: string
    card: CardCreateNestedOneWithoutListInput
    ListItem?: ListItemCreateNestedManyWithoutListInput
  }

  export type ListUncheckedCreateInput = {
    id?: number
    title: string
    cardId: number
    ListItem?: ListItemUncheckedCreateNestedManyWithoutListInput
  }

  export type ListUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    card?: CardUpdateOneRequiredWithoutListNestedInput
    ListItem?: ListItemUpdateManyWithoutListNestedInput
  }

  export type ListUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    cardId?: IntFieldUpdateOperationsInput | number
    ListItem?: ListItemUncheckedUpdateManyWithoutListNestedInput
  }

  export type ListCreateManyInput = {
    id?: number
    title: string
    cardId: number
  }

  export type ListUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type ListUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    cardId?: IntFieldUpdateOperationsInput | number
  }

  export type ListItemCreateInput = {
    content: string
    status: boolean
    order?: number
    list: ListCreateNestedOneWithoutListItemInput
  }

  export type ListItemUncheckedCreateInput = {
    id?: number
    content: string
    listId: number
    status: boolean
    order?: number
  }

  export type ListItemUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    list?: ListUpdateOneRequiredWithoutListItemNestedInput
  }

  export type ListItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    listId?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ListItemCreateManyInput = {
    id?: number
    content: string
    listId: number
    status: boolean
    order?: number
  }

  export type ListItemUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ListItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    listId?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ColumnCreateInput = {
    name: string
    order?: number
    board: BoardCreateNestedOneWithoutColumnInput
    Card?: CardCreateNestedManyWithoutColumnInput
  }

  export type ColumnUncheckedCreateInput = {
    id?: number
    name: string
    boardId: number
    order?: number
    Card?: CardUncheckedCreateNestedManyWithoutColumnInput
  }

  export type ColumnUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    board?: BoardUpdateOneRequiredWithoutColumnNestedInput
    Card?: CardUpdateManyWithoutColumnNestedInput
  }

  export type ColumnUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    boardId?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    Card?: CardUncheckedUpdateManyWithoutColumnNestedInput
  }

  export type ColumnCreateManyInput = {
    id?: number
    name: string
    boardId: number
    order?: number
  }

  export type ColumnUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ColumnUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    boardId?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type CardAssignmentCreateInput = {
    card: CardCreateNestedOneWithoutCardAssignmentInput
    user: UserCreateNestedOneWithoutCardAssignmentInput
  }

  export type CardAssignmentUncheckedCreateInput = {
    id?: number
    cardId: number
    userId: number
  }

  export type CardAssignmentUpdateInput = {
    card?: CardUpdateOneRequiredWithoutCardAssignmentNestedInput
    user?: UserUpdateOneRequiredWithoutCardAssignmentNestedInput
  }

  export type CardAssignmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cardId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CardAssignmentCreateManyInput = {
    id?: number
    cardId: number
    userId: number
  }

  export type CardAssignmentUpdateManyMutationInput = {

  }

  export type CardAssignmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cardId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CardHasTagCreateInput = {
    card: CardCreateNestedOneWithoutCardHasTagInput
    tag: TagCreateNestedOneWithoutCardHasTagInput
  }

  export type CardHasTagUncheckedCreateInput = {
    id?: number
    cardId: number
    tagId: number
  }

  export type CardHasTagUpdateInput = {
    card?: CardUpdateOneRequiredWithoutCardHasTagNestedInput
    tag?: TagUpdateOneRequiredWithoutCardHasTagNestedInput
  }

  export type CardHasTagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cardId?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type CardHasTagCreateManyInput = {
    id?: number
    cardId: number
    tagId: number
  }

  export type CardHasTagUpdateManyMutationInput = {

  }

  export type CardHasTagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cardId?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
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

  export type UserHasBoardListRelationFilter = {
    every?: UserHasBoardWhereInput
    some?: UserHasBoardWhereInput
    none?: UserHasBoardWhereInput
  }

  export type CardListRelationFilter = {
    every?: CardWhereInput
    some?: CardWhereInput
    none?: CardWhereInput
  }

  export type CardAssignmentListRelationFilter = {
    every?: CardAssignmentWhereInput
    some?: CardAssignmentWhereInput
    none?: CardAssignmentWhereInput
  }

  export type UserHasBoardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CardAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    pictureUrl?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    pictureUrl?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    pictureUrl?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type TagListRelationFilter = {
    every?: TagWhereInput
    some?: TagWhereInput
    none?: TagWhereInput
  }

  export type ColumnListRelationFilter = {
    every?: ColumnWhereInput
    some?: ColumnWhereInput
    none?: ColumnWhereInput
  }

  export type TagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ColumnOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BoardCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    LastEdited?: SortOrder
    Color?: SortOrder
  }

  export type BoardAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoardMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    LastEdited?: SortOrder
    Color?: SortOrder
  }

  export type BoardMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    LastEdited?: SortOrder
    Color?: SortOrder
  }

  export type BoardSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoardScalarRelationFilter = {
    is?: BoardWhereInput
    isNot?: BoardWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserHasBoardCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    boardId?: SortOrder
    userId?: SortOrder
  }

  export type UserHasBoardAvgOrderByAggregateInput = {
    id?: SortOrder
    boardId?: SortOrder
    userId?: SortOrder
  }

  export type UserHasBoardMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    boardId?: SortOrder
    userId?: SortOrder
  }

  export type UserHasBoardMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    boardId?: SortOrder
    userId?: SortOrder
  }

  export type UserHasBoardSumOrderByAggregateInput = {
    id?: SortOrder
    boardId?: SortOrder
    userId?: SortOrder
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

  export type CardHasTagListRelationFilter = {
    every?: CardHasTagWhereInput
    some?: CardHasTagWhereInput
    none?: CardHasTagWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CardHasTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    boardId?: SortOrder
    color?: SortOrder
    cardId?: SortOrder
  }

  export type TagAvgOrderByAggregateInput = {
    id?: SortOrder
    boardId?: SortOrder
    cardId?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    boardId?: SortOrder
    color?: SortOrder
    cardId?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    boardId?: SortOrder
    color?: SortOrder
    cardId?: SortOrder
  }

  export type TagSumOrderByAggregateInput = {
    id?: SortOrder
    boardId?: SortOrder
    cardId?: SortOrder
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

  export type ListListRelationFilter = {
    every?: ListWhereInput
    some?: ListWhereInput
    none?: ListWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ColumnScalarRelationFilter = {
    is?: ColumnWhereInput
    isNot?: ColumnWhereInput
  }

  export type ListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CardCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    title?: SortOrder
    content?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    creatorId?: SortOrder
    columnId?: SortOrder
    color?: SortOrder
  }

  export type CardAvgOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    columnId?: SortOrder
  }

  export type CardMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    title?: SortOrder
    content?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    creatorId?: SortOrder
    columnId?: SortOrder
    color?: SortOrder
  }

  export type CardMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    title?: SortOrder
    content?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    creatorId?: SortOrder
    columnId?: SortOrder
    color?: SortOrder
  }

  export type CardSumOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    columnId?: SortOrder
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

  export type CardScalarRelationFilter = {
    is?: CardWhereInput
    isNot?: CardWhereInput
  }

  export type ListItemListRelationFilter = {
    every?: ListItemWhereInput
    some?: ListItemWhereInput
    none?: ListItemWhereInput
  }

  export type ListItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ListCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    cardId?: SortOrder
  }

  export type ListAvgOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
  }

  export type ListMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    cardId?: SortOrder
  }

  export type ListMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    cardId?: SortOrder
  }

  export type ListSumOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ListScalarRelationFilter = {
    is?: ListWhereInput
    isNot?: ListWhereInput
  }

  export type ListItemCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    listId?: SortOrder
    status?: SortOrder
    order?: SortOrder
  }

  export type ListItemAvgOrderByAggregateInput = {
    id?: SortOrder
    listId?: SortOrder
    order?: SortOrder
  }

  export type ListItemMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    listId?: SortOrder
    status?: SortOrder
    order?: SortOrder
  }

  export type ListItemMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    listId?: SortOrder
    status?: SortOrder
    order?: SortOrder
  }

  export type ListItemSumOrderByAggregateInput = {
    id?: SortOrder
    listId?: SortOrder
    order?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ColumnCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    boardId?: SortOrder
    order?: SortOrder
  }

  export type ColumnAvgOrderByAggregateInput = {
    id?: SortOrder
    boardId?: SortOrder
    order?: SortOrder
  }

  export type ColumnMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    boardId?: SortOrder
    order?: SortOrder
  }

  export type ColumnMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    boardId?: SortOrder
    order?: SortOrder
  }

  export type ColumnSumOrderByAggregateInput = {
    id?: SortOrder
    boardId?: SortOrder
    order?: SortOrder
  }

  export type CardAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    userId?: SortOrder
  }

  export type CardAssignmentAvgOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    userId?: SortOrder
  }

  export type CardAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    userId?: SortOrder
  }

  export type CardAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    userId?: SortOrder
  }

  export type CardAssignmentSumOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    userId?: SortOrder
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type CardHasTagCountOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    tagId?: SortOrder
  }

  export type CardHasTagAvgOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    tagId?: SortOrder
  }

  export type CardHasTagMaxOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    tagId?: SortOrder
  }

  export type CardHasTagMinOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    tagId?: SortOrder
  }

  export type CardHasTagSumOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    tagId?: SortOrder
  }

  export type UserHasBoardCreateNestedManyWithoutUserInput = {
    create?: XOR<UserHasBoardCreateWithoutUserInput, UserHasBoardUncheckedCreateWithoutUserInput> | UserHasBoardCreateWithoutUserInput[] | UserHasBoardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserHasBoardCreateOrConnectWithoutUserInput | UserHasBoardCreateOrConnectWithoutUserInput[]
    createMany?: UserHasBoardCreateManyUserInputEnvelope
    connect?: UserHasBoardWhereUniqueInput | UserHasBoardWhereUniqueInput[]
  }

  export type CardCreateNestedManyWithoutCreatorInput = {
    create?: XOR<CardCreateWithoutCreatorInput, CardUncheckedCreateWithoutCreatorInput> | CardCreateWithoutCreatorInput[] | CardUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CardCreateOrConnectWithoutCreatorInput | CardCreateOrConnectWithoutCreatorInput[]
    createMany?: CardCreateManyCreatorInputEnvelope
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
  }

  export type CardAssignmentCreateNestedManyWithoutUserInput = {
    create?: XOR<CardAssignmentCreateWithoutUserInput, CardAssignmentUncheckedCreateWithoutUserInput> | CardAssignmentCreateWithoutUserInput[] | CardAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CardAssignmentCreateOrConnectWithoutUserInput | CardAssignmentCreateOrConnectWithoutUserInput[]
    createMany?: CardAssignmentCreateManyUserInputEnvelope
    connect?: CardAssignmentWhereUniqueInput | CardAssignmentWhereUniqueInput[]
  }

  export type UserHasBoardUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserHasBoardCreateWithoutUserInput, UserHasBoardUncheckedCreateWithoutUserInput> | UserHasBoardCreateWithoutUserInput[] | UserHasBoardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserHasBoardCreateOrConnectWithoutUserInput | UserHasBoardCreateOrConnectWithoutUserInput[]
    createMany?: UserHasBoardCreateManyUserInputEnvelope
    connect?: UserHasBoardWhereUniqueInput | UserHasBoardWhereUniqueInput[]
  }

  export type CardUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<CardCreateWithoutCreatorInput, CardUncheckedCreateWithoutCreatorInput> | CardCreateWithoutCreatorInput[] | CardUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CardCreateOrConnectWithoutCreatorInput | CardCreateOrConnectWithoutCreatorInput[]
    createMany?: CardCreateManyCreatorInputEnvelope
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
  }

  export type CardAssignmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CardAssignmentCreateWithoutUserInput, CardAssignmentUncheckedCreateWithoutUserInput> | CardAssignmentCreateWithoutUserInput[] | CardAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CardAssignmentCreateOrConnectWithoutUserInput | CardAssignmentCreateOrConnectWithoutUserInput[]
    createMany?: CardAssignmentCreateManyUserInputEnvelope
    connect?: CardAssignmentWhereUniqueInput | CardAssignmentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserHasBoardUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserHasBoardCreateWithoutUserInput, UserHasBoardUncheckedCreateWithoutUserInput> | UserHasBoardCreateWithoutUserInput[] | UserHasBoardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserHasBoardCreateOrConnectWithoutUserInput | UserHasBoardCreateOrConnectWithoutUserInput[]
    upsert?: UserHasBoardUpsertWithWhereUniqueWithoutUserInput | UserHasBoardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserHasBoardCreateManyUserInputEnvelope
    set?: UserHasBoardWhereUniqueInput | UserHasBoardWhereUniqueInput[]
    disconnect?: UserHasBoardWhereUniqueInput | UserHasBoardWhereUniqueInput[]
    delete?: UserHasBoardWhereUniqueInput | UserHasBoardWhereUniqueInput[]
    connect?: UserHasBoardWhereUniqueInput | UserHasBoardWhereUniqueInput[]
    update?: UserHasBoardUpdateWithWhereUniqueWithoutUserInput | UserHasBoardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserHasBoardUpdateManyWithWhereWithoutUserInput | UserHasBoardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserHasBoardScalarWhereInput | UserHasBoardScalarWhereInput[]
  }

  export type CardUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<CardCreateWithoutCreatorInput, CardUncheckedCreateWithoutCreatorInput> | CardCreateWithoutCreatorInput[] | CardUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CardCreateOrConnectWithoutCreatorInput | CardCreateOrConnectWithoutCreatorInput[]
    upsert?: CardUpsertWithWhereUniqueWithoutCreatorInput | CardUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: CardCreateManyCreatorInputEnvelope
    set?: CardWhereUniqueInput | CardWhereUniqueInput[]
    disconnect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    delete?: CardWhereUniqueInput | CardWhereUniqueInput[]
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    update?: CardUpdateWithWhereUniqueWithoutCreatorInput | CardUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: CardUpdateManyWithWhereWithoutCreatorInput | CardUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: CardScalarWhereInput | CardScalarWhereInput[]
  }

  export type CardAssignmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CardAssignmentCreateWithoutUserInput, CardAssignmentUncheckedCreateWithoutUserInput> | CardAssignmentCreateWithoutUserInput[] | CardAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CardAssignmentCreateOrConnectWithoutUserInput | CardAssignmentCreateOrConnectWithoutUserInput[]
    upsert?: CardAssignmentUpsertWithWhereUniqueWithoutUserInput | CardAssignmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CardAssignmentCreateManyUserInputEnvelope
    set?: CardAssignmentWhereUniqueInput | CardAssignmentWhereUniqueInput[]
    disconnect?: CardAssignmentWhereUniqueInput | CardAssignmentWhereUniqueInput[]
    delete?: CardAssignmentWhereUniqueInput | CardAssignmentWhereUniqueInput[]
    connect?: CardAssignmentWhereUniqueInput | CardAssignmentWhereUniqueInput[]
    update?: CardAssignmentUpdateWithWhereUniqueWithoutUserInput | CardAssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CardAssignmentUpdateManyWithWhereWithoutUserInput | CardAssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CardAssignmentScalarWhereInput | CardAssignmentScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserHasBoardUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserHasBoardCreateWithoutUserInput, UserHasBoardUncheckedCreateWithoutUserInput> | UserHasBoardCreateWithoutUserInput[] | UserHasBoardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserHasBoardCreateOrConnectWithoutUserInput | UserHasBoardCreateOrConnectWithoutUserInput[]
    upsert?: UserHasBoardUpsertWithWhereUniqueWithoutUserInput | UserHasBoardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserHasBoardCreateManyUserInputEnvelope
    set?: UserHasBoardWhereUniqueInput | UserHasBoardWhereUniqueInput[]
    disconnect?: UserHasBoardWhereUniqueInput | UserHasBoardWhereUniqueInput[]
    delete?: UserHasBoardWhereUniqueInput | UserHasBoardWhereUniqueInput[]
    connect?: UserHasBoardWhereUniqueInput | UserHasBoardWhereUniqueInput[]
    update?: UserHasBoardUpdateWithWhereUniqueWithoutUserInput | UserHasBoardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserHasBoardUpdateManyWithWhereWithoutUserInput | UserHasBoardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserHasBoardScalarWhereInput | UserHasBoardScalarWhereInput[]
  }

  export type CardUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<CardCreateWithoutCreatorInput, CardUncheckedCreateWithoutCreatorInput> | CardCreateWithoutCreatorInput[] | CardUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CardCreateOrConnectWithoutCreatorInput | CardCreateOrConnectWithoutCreatorInput[]
    upsert?: CardUpsertWithWhereUniqueWithoutCreatorInput | CardUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: CardCreateManyCreatorInputEnvelope
    set?: CardWhereUniqueInput | CardWhereUniqueInput[]
    disconnect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    delete?: CardWhereUniqueInput | CardWhereUniqueInput[]
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    update?: CardUpdateWithWhereUniqueWithoutCreatorInput | CardUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: CardUpdateManyWithWhereWithoutCreatorInput | CardUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: CardScalarWhereInput | CardScalarWhereInput[]
  }

  export type CardAssignmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CardAssignmentCreateWithoutUserInput, CardAssignmentUncheckedCreateWithoutUserInput> | CardAssignmentCreateWithoutUserInput[] | CardAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CardAssignmentCreateOrConnectWithoutUserInput | CardAssignmentCreateOrConnectWithoutUserInput[]
    upsert?: CardAssignmentUpsertWithWhereUniqueWithoutUserInput | CardAssignmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CardAssignmentCreateManyUserInputEnvelope
    set?: CardAssignmentWhereUniqueInput | CardAssignmentWhereUniqueInput[]
    disconnect?: CardAssignmentWhereUniqueInput | CardAssignmentWhereUniqueInput[]
    delete?: CardAssignmentWhereUniqueInput | CardAssignmentWhereUniqueInput[]
    connect?: CardAssignmentWhereUniqueInput | CardAssignmentWhereUniqueInput[]
    update?: CardAssignmentUpdateWithWhereUniqueWithoutUserInput | CardAssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CardAssignmentUpdateManyWithWhereWithoutUserInput | CardAssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CardAssignmentScalarWhereInput | CardAssignmentScalarWhereInput[]
  }

  export type UserHasBoardCreateNestedManyWithoutBoardInput = {
    create?: XOR<UserHasBoardCreateWithoutBoardInput, UserHasBoardUncheckedCreateWithoutBoardInput> | UserHasBoardCreateWithoutBoardInput[] | UserHasBoardUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: UserHasBoardCreateOrConnectWithoutBoardInput | UserHasBoardCreateOrConnectWithoutBoardInput[]
    createMany?: UserHasBoardCreateManyBoardInputEnvelope
    connect?: UserHasBoardWhereUniqueInput | UserHasBoardWhereUniqueInput[]
  }

  export type TagCreateNestedManyWithoutBoardInput = {
    create?: XOR<TagCreateWithoutBoardInput, TagUncheckedCreateWithoutBoardInput> | TagCreateWithoutBoardInput[] | TagUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: TagCreateOrConnectWithoutBoardInput | TagCreateOrConnectWithoutBoardInput[]
    createMany?: TagCreateManyBoardInputEnvelope
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type ColumnCreateNestedManyWithoutBoardInput = {
    create?: XOR<ColumnCreateWithoutBoardInput, ColumnUncheckedCreateWithoutBoardInput> | ColumnCreateWithoutBoardInput[] | ColumnUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: ColumnCreateOrConnectWithoutBoardInput | ColumnCreateOrConnectWithoutBoardInput[]
    createMany?: ColumnCreateManyBoardInputEnvelope
    connect?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[]
  }

  export type UserHasBoardUncheckedCreateNestedManyWithoutBoardInput = {
    create?: XOR<UserHasBoardCreateWithoutBoardInput, UserHasBoardUncheckedCreateWithoutBoardInput> | UserHasBoardCreateWithoutBoardInput[] | UserHasBoardUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: UserHasBoardCreateOrConnectWithoutBoardInput | UserHasBoardCreateOrConnectWithoutBoardInput[]
    createMany?: UserHasBoardCreateManyBoardInputEnvelope
    connect?: UserHasBoardWhereUniqueInput | UserHasBoardWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutBoardInput = {
    create?: XOR<TagCreateWithoutBoardInput, TagUncheckedCreateWithoutBoardInput> | TagCreateWithoutBoardInput[] | TagUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: TagCreateOrConnectWithoutBoardInput | TagCreateOrConnectWithoutBoardInput[]
    createMany?: TagCreateManyBoardInputEnvelope
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type ColumnUncheckedCreateNestedManyWithoutBoardInput = {
    create?: XOR<ColumnCreateWithoutBoardInput, ColumnUncheckedCreateWithoutBoardInput> | ColumnCreateWithoutBoardInput[] | ColumnUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: ColumnCreateOrConnectWithoutBoardInput | ColumnCreateOrConnectWithoutBoardInput[]
    createMany?: ColumnCreateManyBoardInputEnvelope
    connect?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[]
  }

  export type UserHasBoardUpdateManyWithoutBoardNestedInput = {
    create?: XOR<UserHasBoardCreateWithoutBoardInput, UserHasBoardUncheckedCreateWithoutBoardInput> | UserHasBoardCreateWithoutBoardInput[] | UserHasBoardUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: UserHasBoardCreateOrConnectWithoutBoardInput | UserHasBoardCreateOrConnectWithoutBoardInput[]
    upsert?: UserHasBoardUpsertWithWhereUniqueWithoutBoardInput | UserHasBoardUpsertWithWhereUniqueWithoutBoardInput[]
    createMany?: UserHasBoardCreateManyBoardInputEnvelope
    set?: UserHasBoardWhereUniqueInput | UserHasBoardWhereUniqueInput[]
    disconnect?: UserHasBoardWhereUniqueInput | UserHasBoardWhereUniqueInput[]
    delete?: UserHasBoardWhereUniqueInput | UserHasBoardWhereUniqueInput[]
    connect?: UserHasBoardWhereUniqueInput | UserHasBoardWhereUniqueInput[]
    update?: UserHasBoardUpdateWithWhereUniqueWithoutBoardInput | UserHasBoardUpdateWithWhereUniqueWithoutBoardInput[]
    updateMany?: UserHasBoardUpdateManyWithWhereWithoutBoardInput | UserHasBoardUpdateManyWithWhereWithoutBoardInput[]
    deleteMany?: UserHasBoardScalarWhereInput | UserHasBoardScalarWhereInput[]
  }

  export type TagUpdateManyWithoutBoardNestedInput = {
    create?: XOR<TagCreateWithoutBoardInput, TagUncheckedCreateWithoutBoardInput> | TagCreateWithoutBoardInput[] | TagUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: TagCreateOrConnectWithoutBoardInput | TagCreateOrConnectWithoutBoardInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutBoardInput | TagUpsertWithWhereUniqueWithoutBoardInput[]
    createMany?: TagCreateManyBoardInputEnvelope
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutBoardInput | TagUpdateWithWhereUniqueWithoutBoardInput[]
    updateMany?: TagUpdateManyWithWhereWithoutBoardInput | TagUpdateManyWithWhereWithoutBoardInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type ColumnUpdateManyWithoutBoardNestedInput = {
    create?: XOR<ColumnCreateWithoutBoardInput, ColumnUncheckedCreateWithoutBoardInput> | ColumnCreateWithoutBoardInput[] | ColumnUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: ColumnCreateOrConnectWithoutBoardInput | ColumnCreateOrConnectWithoutBoardInput[]
    upsert?: ColumnUpsertWithWhereUniqueWithoutBoardInput | ColumnUpsertWithWhereUniqueWithoutBoardInput[]
    createMany?: ColumnCreateManyBoardInputEnvelope
    set?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[]
    disconnect?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[]
    delete?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[]
    connect?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[]
    update?: ColumnUpdateWithWhereUniqueWithoutBoardInput | ColumnUpdateWithWhereUniqueWithoutBoardInput[]
    updateMany?: ColumnUpdateManyWithWhereWithoutBoardInput | ColumnUpdateManyWithWhereWithoutBoardInput[]
    deleteMany?: ColumnScalarWhereInput | ColumnScalarWhereInput[]
  }

  export type UserHasBoardUncheckedUpdateManyWithoutBoardNestedInput = {
    create?: XOR<UserHasBoardCreateWithoutBoardInput, UserHasBoardUncheckedCreateWithoutBoardInput> | UserHasBoardCreateWithoutBoardInput[] | UserHasBoardUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: UserHasBoardCreateOrConnectWithoutBoardInput | UserHasBoardCreateOrConnectWithoutBoardInput[]
    upsert?: UserHasBoardUpsertWithWhereUniqueWithoutBoardInput | UserHasBoardUpsertWithWhereUniqueWithoutBoardInput[]
    createMany?: UserHasBoardCreateManyBoardInputEnvelope
    set?: UserHasBoardWhereUniqueInput | UserHasBoardWhereUniqueInput[]
    disconnect?: UserHasBoardWhereUniqueInput | UserHasBoardWhereUniqueInput[]
    delete?: UserHasBoardWhereUniqueInput | UserHasBoardWhereUniqueInput[]
    connect?: UserHasBoardWhereUniqueInput | UserHasBoardWhereUniqueInput[]
    update?: UserHasBoardUpdateWithWhereUniqueWithoutBoardInput | UserHasBoardUpdateWithWhereUniqueWithoutBoardInput[]
    updateMany?: UserHasBoardUpdateManyWithWhereWithoutBoardInput | UserHasBoardUpdateManyWithWhereWithoutBoardInput[]
    deleteMany?: UserHasBoardScalarWhereInput | UserHasBoardScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutBoardNestedInput = {
    create?: XOR<TagCreateWithoutBoardInput, TagUncheckedCreateWithoutBoardInput> | TagCreateWithoutBoardInput[] | TagUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: TagCreateOrConnectWithoutBoardInput | TagCreateOrConnectWithoutBoardInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutBoardInput | TagUpsertWithWhereUniqueWithoutBoardInput[]
    createMany?: TagCreateManyBoardInputEnvelope
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutBoardInput | TagUpdateWithWhereUniqueWithoutBoardInput[]
    updateMany?: TagUpdateManyWithWhereWithoutBoardInput | TagUpdateManyWithWhereWithoutBoardInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type ColumnUncheckedUpdateManyWithoutBoardNestedInput = {
    create?: XOR<ColumnCreateWithoutBoardInput, ColumnUncheckedCreateWithoutBoardInput> | ColumnCreateWithoutBoardInput[] | ColumnUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: ColumnCreateOrConnectWithoutBoardInput | ColumnCreateOrConnectWithoutBoardInput[]
    upsert?: ColumnUpsertWithWhereUniqueWithoutBoardInput | ColumnUpsertWithWhereUniqueWithoutBoardInput[]
    createMany?: ColumnCreateManyBoardInputEnvelope
    set?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[]
    disconnect?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[]
    delete?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[]
    connect?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[]
    update?: ColumnUpdateWithWhereUniqueWithoutBoardInput | ColumnUpdateWithWhereUniqueWithoutBoardInput[]
    updateMany?: ColumnUpdateManyWithWhereWithoutBoardInput | ColumnUpdateManyWithWhereWithoutBoardInput[]
    deleteMany?: ColumnScalarWhereInput | ColumnScalarWhereInput[]
  }

  export type BoardCreateNestedOneWithoutUserHasBoardInput = {
    create?: XOR<BoardCreateWithoutUserHasBoardInput, BoardUncheckedCreateWithoutUserHasBoardInput>
    connectOrCreate?: BoardCreateOrConnectWithoutUserHasBoardInput
    connect?: BoardWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUserHasBoardInput = {
    create?: XOR<UserCreateWithoutUserHasBoardInput, UserUncheckedCreateWithoutUserHasBoardInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserHasBoardInput
    connect?: UserWhereUniqueInput
  }

  export type BoardUpdateOneRequiredWithoutUserHasBoardNestedInput = {
    create?: XOR<BoardCreateWithoutUserHasBoardInput, BoardUncheckedCreateWithoutUserHasBoardInput>
    connectOrCreate?: BoardCreateOrConnectWithoutUserHasBoardInput
    upsert?: BoardUpsertWithoutUserHasBoardInput
    connect?: BoardWhereUniqueInput
    update?: XOR<XOR<BoardUpdateToOneWithWhereWithoutUserHasBoardInput, BoardUpdateWithoutUserHasBoardInput>, BoardUncheckedUpdateWithoutUserHasBoardInput>
  }

  export type UserUpdateOneRequiredWithoutUserHasBoardNestedInput = {
    create?: XOR<UserCreateWithoutUserHasBoardInput, UserUncheckedCreateWithoutUserHasBoardInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserHasBoardInput
    upsert?: UserUpsertWithoutUserHasBoardInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserHasBoardInput, UserUpdateWithoutUserHasBoardInput>, UserUncheckedUpdateWithoutUserHasBoardInput>
  }

  export type BoardCreateNestedOneWithoutTagInput = {
    create?: XOR<BoardCreateWithoutTagInput, BoardUncheckedCreateWithoutTagInput>
    connectOrCreate?: BoardCreateOrConnectWithoutTagInput
    connect?: BoardWhereUniqueInput
  }

  export type CardHasTagCreateNestedManyWithoutTagInput = {
    create?: XOR<CardHasTagCreateWithoutTagInput, CardHasTagUncheckedCreateWithoutTagInput> | CardHasTagCreateWithoutTagInput[] | CardHasTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: CardHasTagCreateOrConnectWithoutTagInput | CardHasTagCreateOrConnectWithoutTagInput[]
    createMany?: CardHasTagCreateManyTagInputEnvelope
    connect?: CardHasTagWhereUniqueInput | CardHasTagWhereUniqueInput[]
  }

  export type CardHasTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<CardHasTagCreateWithoutTagInput, CardHasTagUncheckedCreateWithoutTagInput> | CardHasTagCreateWithoutTagInput[] | CardHasTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: CardHasTagCreateOrConnectWithoutTagInput | CardHasTagCreateOrConnectWithoutTagInput[]
    createMany?: CardHasTagCreateManyTagInputEnvelope
    connect?: CardHasTagWhereUniqueInput | CardHasTagWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoardUpdateOneRequiredWithoutTagNestedInput = {
    create?: XOR<BoardCreateWithoutTagInput, BoardUncheckedCreateWithoutTagInput>
    connectOrCreate?: BoardCreateOrConnectWithoutTagInput
    upsert?: BoardUpsertWithoutTagInput
    connect?: BoardWhereUniqueInput
    update?: XOR<XOR<BoardUpdateToOneWithWhereWithoutTagInput, BoardUpdateWithoutTagInput>, BoardUncheckedUpdateWithoutTagInput>
  }

  export type CardHasTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<CardHasTagCreateWithoutTagInput, CardHasTagUncheckedCreateWithoutTagInput> | CardHasTagCreateWithoutTagInput[] | CardHasTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: CardHasTagCreateOrConnectWithoutTagInput | CardHasTagCreateOrConnectWithoutTagInput[]
    upsert?: CardHasTagUpsertWithWhereUniqueWithoutTagInput | CardHasTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: CardHasTagCreateManyTagInputEnvelope
    set?: CardHasTagWhereUniqueInput | CardHasTagWhereUniqueInput[]
    disconnect?: CardHasTagWhereUniqueInput | CardHasTagWhereUniqueInput[]
    delete?: CardHasTagWhereUniqueInput | CardHasTagWhereUniqueInput[]
    connect?: CardHasTagWhereUniqueInput | CardHasTagWhereUniqueInput[]
    update?: CardHasTagUpdateWithWhereUniqueWithoutTagInput | CardHasTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: CardHasTagUpdateManyWithWhereWithoutTagInput | CardHasTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: CardHasTagScalarWhereInput | CardHasTagScalarWhereInput[]
  }

  export type CardHasTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<CardHasTagCreateWithoutTagInput, CardHasTagUncheckedCreateWithoutTagInput> | CardHasTagCreateWithoutTagInput[] | CardHasTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: CardHasTagCreateOrConnectWithoutTagInput | CardHasTagCreateOrConnectWithoutTagInput[]
    upsert?: CardHasTagUpsertWithWhereUniqueWithoutTagInput | CardHasTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: CardHasTagCreateManyTagInputEnvelope
    set?: CardHasTagWhereUniqueInput | CardHasTagWhereUniqueInput[]
    disconnect?: CardHasTagWhereUniqueInput | CardHasTagWhereUniqueInput[]
    delete?: CardHasTagWhereUniqueInput | CardHasTagWhereUniqueInput[]
    connect?: CardHasTagWhereUniqueInput | CardHasTagWhereUniqueInput[]
    update?: CardHasTagUpdateWithWhereUniqueWithoutTagInput | CardHasTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: CardHasTagUpdateManyWithWhereWithoutTagInput | CardHasTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: CardHasTagScalarWhereInput | CardHasTagScalarWhereInput[]
  }

  export type ListCreateNestedManyWithoutCardInput = {
    create?: XOR<ListCreateWithoutCardInput, ListUncheckedCreateWithoutCardInput> | ListCreateWithoutCardInput[] | ListUncheckedCreateWithoutCardInput[]
    connectOrCreate?: ListCreateOrConnectWithoutCardInput | ListCreateOrConnectWithoutCardInput[]
    createMany?: ListCreateManyCardInputEnvelope
    connect?: ListWhereUniqueInput | ListWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCardInput = {
    create?: XOR<UserCreateWithoutCardInput, UserUncheckedCreateWithoutCardInput>
    connectOrCreate?: UserCreateOrConnectWithoutCardInput
    connect?: UserWhereUniqueInput
  }

  export type ColumnCreateNestedOneWithoutCardInput = {
    create?: XOR<ColumnCreateWithoutCardInput, ColumnUncheckedCreateWithoutCardInput>
    connectOrCreate?: ColumnCreateOrConnectWithoutCardInput
    connect?: ColumnWhereUniqueInput
  }

  export type CardAssignmentCreateNestedManyWithoutCardInput = {
    create?: XOR<CardAssignmentCreateWithoutCardInput, CardAssignmentUncheckedCreateWithoutCardInput> | CardAssignmentCreateWithoutCardInput[] | CardAssignmentUncheckedCreateWithoutCardInput[]
    connectOrCreate?: CardAssignmentCreateOrConnectWithoutCardInput | CardAssignmentCreateOrConnectWithoutCardInput[]
    createMany?: CardAssignmentCreateManyCardInputEnvelope
    connect?: CardAssignmentWhereUniqueInput | CardAssignmentWhereUniqueInput[]
  }

  export type CardHasTagCreateNestedManyWithoutCardInput = {
    create?: XOR<CardHasTagCreateWithoutCardInput, CardHasTagUncheckedCreateWithoutCardInput> | CardHasTagCreateWithoutCardInput[] | CardHasTagUncheckedCreateWithoutCardInput[]
    connectOrCreate?: CardHasTagCreateOrConnectWithoutCardInput | CardHasTagCreateOrConnectWithoutCardInput[]
    createMany?: CardHasTagCreateManyCardInputEnvelope
    connect?: CardHasTagWhereUniqueInput | CardHasTagWhereUniqueInput[]
  }

  export type ListUncheckedCreateNestedManyWithoutCardInput = {
    create?: XOR<ListCreateWithoutCardInput, ListUncheckedCreateWithoutCardInput> | ListCreateWithoutCardInput[] | ListUncheckedCreateWithoutCardInput[]
    connectOrCreate?: ListCreateOrConnectWithoutCardInput | ListCreateOrConnectWithoutCardInput[]
    createMany?: ListCreateManyCardInputEnvelope
    connect?: ListWhereUniqueInput | ListWhereUniqueInput[]
  }

  export type CardAssignmentUncheckedCreateNestedManyWithoutCardInput = {
    create?: XOR<CardAssignmentCreateWithoutCardInput, CardAssignmentUncheckedCreateWithoutCardInput> | CardAssignmentCreateWithoutCardInput[] | CardAssignmentUncheckedCreateWithoutCardInput[]
    connectOrCreate?: CardAssignmentCreateOrConnectWithoutCardInput | CardAssignmentCreateOrConnectWithoutCardInput[]
    createMany?: CardAssignmentCreateManyCardInputEnvelope
    connect?: CardAssignmentWhereUniqueInput | CardAssignmentWhereUniqueInput[]
  }

  export type CardHasTagUncheckedCreateNestedManyWithoutCardInput = {
    create?: XOR<CardHasTagCreateWithoutCardInput, CardHasTagUncheckedCreateWithoutCardInput> | CardHasTagCreateWithoutCardInput[] | CardHasTagUncheckedCreateWithoutCardInput[]
    connectOrCreate?: CardHasTagCreateOrConnectWithoutCardInput | CardHasTagCreateOrConnectWithoutCardInput[]
    createMany?: CardHasTagCreateManyCardInputEnvelope
    connect?: CardHasTagWhereUniqueInput | CardHasTagWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ListUpdateManyWithoutCardNestedInput = {
    create?: XOR<ListCreateWithoutCardInput, ListUncheckedCreateWithoutCardInput> | ListCreateWithoutCardInput[] | ListUncheckedCreateWithoutCardInput[]
    connectOrCreate?: ListCreateOrConnectWithoutCardInput | ListCreateOrConnectWithoutCardInput[]
    upsert?: ListUpsertWithWhereUniqueWithoutCardInput | ListUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: ListCreateManyCardInputEnvelope
    set?: ListWhereUniqueInput | ListWhereUniqueInput[]
    disconnect?: ListWhereUniqueInput | ListWhereUniqueInput[]
    delete?: ListWhereUniqueInput | ListWhereUniqueInput[]
    connect?: ListWhereUniqueInput | ListWhereUniqueInput[]
    update?: ListUpdateWithWhereUniqueWithoutCardInput | ListUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: ListUpdateManyWithWhereWithoutCardInput | ListUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: ListScalarWhereInput | ListScalarWhereInput[]
  }

  export type UserUpdateOneWithoutCardNestedInput = {
    create?: XOR<UserCreateWithoutCardInput, UserUncheckedCreateWithoutCardInput>
    connectOrCreate?: UserCreateOrConnectWithoutCardInput
    upsert?: UserUpsertWithoutCardInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCardInput, UserUpdateWithoutCardInput>, UserUncheckedUpdateWithoutCardInput>
  }

  export type ColumnUpdateOneRequiredWithoutCardNestedInput = {
    create?: XOR<ColumnCreateWithoutCardInput, ColumnUncheckedCreateWithoutCardInput>
    connectOrCreate?: ColumnCreateOrConnectWithoutCardInput
    upsert?: ColumnUpsertWithoutCardInput
    connect?: ColumnWhereUniqueInput
    update?: XOR<XOR<ColumnUpdateToOneWithWhereWithoutCardInput, ColumnUpdateWithoutCardInput>, ColumnUncheckedUpdateWithoutCardInput>
  }

  export type CardAssignmentUpdateManyWithoutCardNestedInput = {
    create?: XOR<CardAssignmentCreateWithoutCardInput, CardAssignmentUncheckedCreateWithoutCardInput> | CardAssignmentCreateWithoutCardInput[] | CardAssignmentUncheckedCreateWithoutCardInput[]
    connectOrCreate?: CardAssignmentCreateOrConnectWithoutCardInput | CardAssignmentCreateOrConnectWithoutCardInput[]
    upsert?: CardAssignmentUpsertWithWhereUniqueWithoutCardInput | CardAssignmentUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: CardAssignmentCreateManyCardInputEnvelope
    set?: CardAssignmentWhereUniqueInput | CardAssignmentWhereUniqueInput[]
    disconnect?: CardAssignmentWhereUniqueInput | CardAssignmentWhereUniqueInput[]
    delete?: CardAssignmentWhereUniqueInput | CardAssignmentWhereUniqueInput[]
    connect?: CardAssignmentWhereUniqueInput | CardAssignmentWhereUniqueInput[]
    update?: CardAssignmentUpdateWithWhereUniqueWithoutCardInput | CardAssignmentUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: CardAssignmentUpdateManyWithWhereWithoutCardInput | CardAssignmentUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: CardAssignmentScalarWhereInput | CardAssignmentScalarWhereInput[]
  }

  export type CardHasTagUpdateManyWithoutCardNestedInput = {
    create?: XOR<CardHasTagCreateWithoutCardInput, CardHasTagUncheckedCreateWithoutCardInput> | CardHasTagCreateWithoutCardInput[] | CardHasTagUncheckedCreateWithoutCardInput[]
    connectOrCreate?: CardHasTagCreateOrConnectWithoutCardInput | CardHasTagCreateOrConnectWithoutCardInput[]
    upsert?: CardHasTagUpsertWithWhereUniqueWithoutCardInput | CardHasTagUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: CardHasTagCreateManyCardInputEnvelope
    set?: CardHasTagWhereUniqueInput | CardHasTagWhereUniqueInput[]
    disconnect?: CardHasTagWhereUniqueInput | CardHasTagWhereUniqueInput[]
    delete?: CardHasTagWhereUniqueInput | CardHasTagWhereUniqueInput[]
    connect?: CardHasTagWhereUniqueInput | CardHasTagWhereUniqueInput[]
    update?: CardHasTagUpdateWithWhereUniqueWithoutCardInput | CardHasTagUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: CardHasTagUpdateManyWithWhereWithoutCardInput | CardHasTagUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: CardHasTagScalarWhereInput | CardHasTagScalarWhereInput[]
  }

  export type ListUncheckedUpdateManyWithoutCardNestedInput = {
    create?: XOR<ListCreateWithoutCardInput, ListUncheckedCreateWithoutCardInput> | ListCreateWithoutCardInput[] | ListUncheckedCreateWithoutCardInput[]
    connectOrCreate?: ListCreateOrConnectWithoutCardInput | ListCreateOrConnectWithoutCardInput[]
    upsert?: ListUpsertWithWhereUniqueWithoutCardInput | ListUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: ListCreateManyCardInputEnvelope
    set?: ListWhereUniqueInput | ListWhereUniqueInput[]
    disconnect?: ListWhereUniqueInput | ListWhereUniqueInput[]
    delete?: ListWhereUniqueInput | ListWhereUniqueInput[]
    connect?: ListWhereUniqueInput | ListWhereUniqueInput[]
    update?: ListUpdateWithWhereUniqueWithoutCardInput | ListUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: ListUpdateManyWithWhereWithoutCardInput | ListUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: ListScalarWhereInput | ListScalarWhereInput[]
  }

  export type CardAssignmentUncheckedUpdateManyWithoutCardNestedInput = {
    create?: XOR<CardAssignmentCreateWithoutCardInput, CardAssignmentUncheckedCreateWithoutCardInput> | CardAssignmentCreateWithoutCardInput[] | CardAssignmentUncheckedCreateWithoutCardInput[]
    connectOrCreate?: CardAssignmentCreateOrConnectWithoutCardInput | CardAssignmentCreateOrConnectWithoutCardInput[]
    upsert?: CardAssignmentUpsertWithWhereUniqueWithoutCardInput | CardAssignmentUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: CardAssignmentCreateManyCardInputEnvelope
    set?: CardAssignmentWhereUniqueInput | CardAssignmentWhereUniqueInput[]
    disconnect?: CardAssignmentWhereUniqueInput | CardAssignmentWhereUniqueInput[]
    delete?: CardAssignmentWhereUniqueInput | CardAssignmentWhereUniqueInput[]
    connect?: CardAssignmentWhereUniqueInput | CardAssignmentWhereUniqueInput[]
    update?: CardAssignmentUpdateWithWhereUniqueWithoutCardInput | CardAssignmentUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: CardAssignmentUpdateManyWithWhereWithoutCardInput | CardAssignmentUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: CardAssignmentScalarWhereInput | CardAssignmentScalarWhereInput[]
  }

  export type CardHasTagUncheckedUpdateManyWithoutCardNestedInput = {
    create?: XOR<CardHasTagCreateWithoutCardInput, CardHasTagUncheckedCreateWithoutCardInput> | CardHasTagCreateWithoutCardInput[] | CardHasTagUncheckedCreateWithoutCardInput[]
    connectOrCreate?: CardHasTagCreateOrConnectWithoutCardInput | CardHasTagCreateOrConnectWithoutCardInput[]
    upsert?: CardHasTagUpsertWithWhereUniqueWithoutCardInput | CardHasTagUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: CardHasTagCreateManyCardInputEnvelope
    set?: CardHasTagWhereUniqueInput | CardHasTagWhereUniqueInput[]
    disconnect?: CardHasTagWhereUniqueInput | CardHasTagWhereUniqueInput[]
    delete?: CardHasTagWhereUniqueInput | CardHasTagWhereUniqueInput[]
    connect?: CardHasTagWhereUniqueInput | CardHasTagWhereUniqueInput[]
    update?: CardHasTagUpdateWithWhereUniqueWithoutCardInput | CardHasTagUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: CardHasTagUpdateManyWithWhereWithoutCardInput | CardHasTagUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: CardHasTagScalarWhereInput | CardHasTagScalarWhereInput[]
  }

  export type CardCreateNestedOneWithoutListInput = {
    create?: XOR<CardCreateWithoutListInput, CardUncheckedCreateWithoutListInput>
    connectOrCreate?: CardCreateOrConnectWithoutListInput
    connect?: CardWhereUniqueInput
  }

  export type ListItemCreateNestedManyWithoutListInput = {
    create?: XOR<ListItemCreateWithoutListInput, ListItemUncheckedCreateWithoutListInput> | ListItemCreateWithoutListInput[] | ListItemUncheckedCreateWithoutListInput[]
    connectOrCreate?: ListItemCreateOrConnectWithoutListInput | ListItemCreateOrConnectWithoutListInput[]
    createMany?: ListItemCreateManyListInputEnvelope
    connect?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
  }

  export type ListItemUncheckedCreateNestedManyWithoutListInput = {
    create?: XOR<ListItemCreateWithoutListInput, ListItemUncheckedCreateWithoutListInput> | ListItemCreateWithoutListInput[] | ListItemUncheckedCreateWithoutListInput[]
    connectOrCreate?: ListItemCreateOrConnectWithoutListInput | ListItemCreateOrConnectWithoutListInput[]
    createMany?: ListItemCreateManyListInputEnvelope
    connect?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
  }

  export type CardUpdateOneRequiredWithoutListNestedInput = {
    create?: XOR<CardCreateWithoutListInput, CardUncheckedCreateWithoutListInput>
    connectOrCreate?: CardCreateOrConnectWithoutListInput
    upsert?: CardUpsertWithoutListInput
    connect?: CardWhereUniqueInput
    update?: XOR<XOR<CardUpdateToOneWithWhereWithoutListInput, CardUpdateWithoutListInput>, CardUncheckedUpdateWithoutListInput>
  }

  export type ListItemUpdateManyWithoutListNestedInput = {
    create?: XOR<ListItemCreateWithoutListInput, ListItemUncheckedCreateWithoutListInput> | ListItemCreateWithoutListInput[] | ListItemUncheckedCreateWithoutListInput[]
    connectOrCreate?: ListItemCreateOrConnectWithoutListInput | ListItemCreateOrConnectWithoutListInput[]
    upsert?: ListItemUpsertWithWhereUniqueWithoutListInput | ListItemUpsertWithWhereUniqueWithoutListInput[]
    createMany?: ListItemCreateManyListInputEnvelope
    set?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    disconnect?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    delete?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    connect?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    update?: ListItemUpdateWithWhereUniqueWithoutListInput | ListItemUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: ListItemUpdateManyWithWhereWithoutListInput | ListItemUpdateManyWithWhereWithoutListInput[]
    deleteMany?: ListItemScalarWhereInput | ListItemScalarWhereInput[]
  }

  export type ListItemUncheckedUpdateManyWithoutListNestedInput = {
    create?: XOR<ListItemCreateWithoutListInput, ListItemUncheckedCreateWithoutListInput> | ListItemCreateWithoutListInput[] | ListItemUncheckedCreateWithoutListInput[]
    connectOrCreate?: ListItemCreateOrConnectWithoutListInput | ListItemCreateOrConnectWithoutListInput[]
    upsert?: ListItemUpsertWithWhereUniqueWithoutListInput | ListItemUpsertWithWhereUniqueWithoutListInput[]
    createMany?: ListItemCreateManyListInputEnvelope
    set?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    disconnect?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    delete?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    connect?: ListItemWhereUniqueInput | ListItemWhereUniqueInput[]
    update?: ListItemUpdateWithWhereUniqueWithoutListInput | ListItemUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: ListItemUpdateManyWithWhereWithoutListInput | ListItemUpdateManyWithWhereWithoutListInput[]
    deleteMany?: ListItemScalarWhereInput | ListItemScalarWhereInput[]
  }

  export type ListCreateNestedOneWithoutListItemInput = {
    create?: XOR<ListCreateWithoutListItemInput, ListUncheckedCreateWithoutListItemInput>
    connectOrCreate?: ListCreateOrConnectWithoutListItemInput
    connect?: ListWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ListUpdateOneRequiredWithoutListItemNestedInput = {
    create?: XOR<ListCreateWithoutListItemInput, ListUncheckedCreateWithoutListItemInput>
    connectOrCreate?: ListCreateOrConnectWithoutListItemInput
    upsert?: ListUpsertWithoutListItemInput
    connect?: ListWhereUniqueInput
    update?: XOR<XOR<ListUpdateToOneWithWhereWithoutListItemInput, ListUpdateWithoutListItemInput>, ListUncheckedUpdateWithoutListItemInput>
  }

  export type BoardCreateNestedOneWithoutColumnInput = {
    create?: XOR<BoardCreateWithoutColumnInput, BoardUncheckedCreateWithoutColumnInput>
    connectOrCreate?: BoardCreateOrConnectWithoutColumnInput
    connect?: BoardWhereUniqueInput
  }

  export type CardCreateNestedManyWithoutColumnInput = {
    create?: XOR<CardCreateWithoutColumnInput, CardUncheckedCreateWithoutColumnInput> | CardCreateWithoutColumnInput[] | CardUncheckedCreateWithoutColumnInput[]
    connectOrCreate?: CardCreateOrConnectWithoutColumnInput | CardCreateOrConnectWithoutColumnInput[]
    createMany?: CardCreateManyColumnInputEnvelope
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
  }

  export type CardUncheckedCreateNestedManyWithoutColumnInput = {
    create?: XOR<CardCreateWithoutColumnInput, CardUncheckedCreateWithoutColumnInput> | CardCreateWithoutColumnInput[] | CardUncheckedCreateWithoutColumnInput[]
    connectOrCreate?: CardCreateOrConnectWithoutColumnInput | CardCreateOrConnectWithoutColumnInput[]
    createMany?: CardCreateManyColumnInputEnvelope
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
  }

  export type BoardUpdateOneRequiredWithoutColumnNestedInput = {
    create?: XOR<BoardCreateWithoutColumnInput, BoardUncheckedCreateWithoutColumnInput>
    connectOrCreate?: BoardCreateOrConnectWithoutColumnInput
    upsert?: BoardUpsertWithoutColumnInput
    connect?: BoardWhereUniqueInput
    update?: XOR<XOR<BoardUpdateToOneWithWhereWithoutColumnInput, BoardUpdateWithoutColumnInput>, BoardUncheckedUpdateWithoutColumnInput>
  }

  export type CardUpdateManyWithoutColumnNestedInput = {
    create?: XOR<CardCreateWithoutColumnInput, CardUncheckedCreateWithoutColumnInput> | CardCreateWithoutColumnInput[] | CardUncheckedCreateWithoutColumnInput[]
    connectOrCreate?: CardCreateOrConnectWithoutColumnInput | CardCreateOrConnectWithoutColumnInput[]
    upsert?: CardUpsertWithWhereUniqueWithoutColumnInput | CardUpsertWithWhereUniqueWithoutColumnInput[]
    createMany?: CardCreateManyColumnInputEnvelope
    set?: CardWhereUniqueInput | CardWhereUniqueInput[]
    disconnect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    delete?: CardWhereUniqueInput | CardWhereUniqueInput[]
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    update?: CardUpdateWithWhereUniqueWithoutColumnInput | CardUpdateWithWhereUniqueWithoutColumnInput[]
    updateMany?: CardUpdateManyWithWhereWithoutColumnInput | CardUpdateManyWithWhereWithoutColumnInput[]
    deleteMany?: CardScalarWhereInput | CardScalarWhereInput[]
  }

  export type CardUncheckedUpdateManyWithoutColumnNestedInput = {
    create?: XOR<CardCreateWithoutColumnInput, CardUncheckedCreateWithoutColumnInput> | CardCreateWithoutColumnInput[] | CardUncheckedCreateWithoutColumnInput[]
    connectOrCreate?: CardCreateOrConnectWithoutColumnInput | CardCreateOrConnectWithoutColumnInput[]
    upsert?: CardUpsertWithWhereUniqueWithoutColumnInput | CardUpsertWithWhereUniqueWithoutColumnInput[]
    createMany?: CardCreateManyColumnInputEnvelope
    set?: CardWhereUniqueInput | CardWhereUniqueInput[]
    disconnect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    delete?: CardWhereUniqueInput | CardWhereUniqueInput[]
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    update?: CardUpdateWithWhereUniqueWithoutColumnInput | CardUpdateWithWhereUniqueWithoutColumnInput[]
    updateMany?: CardUpdateManyWithWhereWithoutColumnInput | CardUpdateManyWithWhereWithoutColumnInput[]
    deleteMany?: CardScalarWhereInput | CardScalarWhereInput[]
  }

  export type CardCreateNestedOneWithoutCardAssignmentInput = {
    create?: XOR<CardCreateWithoutCardAssignmentInput, CardUncheckedCreateWithoutCardAssignmentInput>
    connectOrCreate?: CardCreateOrConnectWithoutCardAssignmentInput
    connect?: CardWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCardAssignmentInput = {
    create?: XOR<UserCreateWithoutCardAssignmentInput, UserUncheckedCreateWithoutCardAssignmentInput>
    connectOrCreate?: UserCreateOrConnectWithoutCardAssignmentInput
    connect?: UserWhereUniqueInput
  }

  export type CardUpdateOneRequiredWithoutCardAssignmentNestedInput = {
    create?: XOR<CardCreateWithoutCardAssignmentInput, CardUncheckedCreateWithoutCardAssignmentInput>
    connectOrCreate?: CardCreateOrConnectWithoutCardAssignmentInput
    upsert?: CardUpsertWithoutCardAssignmentInput
    connect?: CardWhereUniqueInput
    update?: XOR<XOR<CardUpdateToOneWithWhereWithoutCardAssignmentInput, CardUpdateWithoutCardAssignmentInput>, CardUncheckedUpdateWithoutCardAssignmentInput>
  }

  export type UserUpdateOneRequiredWithoutCardAssignmentNestedInput = {
    create?: XOR<UserCreateWithoutCardAssignmentInput, UserUncheckedCreateWithoutCardAssignmentInput>
    connectOrCreate?: UserCreateOrConnectWithoutCardAssignmentInput
    upsert?: UserUpsertWithoutCardAssignmentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCardAssignmentInput, UserUpdateWithoutCardAssignmentInput>, UserUncheckedUpdateWithoutCardAssignmentInput>
  }

  export type CardCreateNestedOneWithoutCardHasTagInput = {
    create?: XOR<CardCreateWithoutCardHasTagInput, CardUncheckedCreateWithoutCardHasTagInput>
    connectOrCreate?: CardCreateOrConnectWithoutCardHasTagInput
    connect?: CardWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutCardHasTagInput = {
    create?: XOR<TagCreateWithoutCardHasTagInput, TagUncheckedCreateWithoutCardHasTagInput>
    connectOrCreate?: TagCreateOrConnectWithoutCardHasTagInput
    connect?: TagWhereUniqueInput
  }

  export type CardUpdateOneRequiredWithoutCardHasTagNestedInput = {
    create?: XOR<CardCreateWithoutCardHasTagInput, CardUncheckedCreateWithoutCardHasTagInput>
    connectOrCreate?: CardCreateOrConnectWithoutCardHasTagInput
    upsert?: CardUpsertWithoutCardHasTagInput
    connect?: CardWhereUniqueInput
    update?: XOR<XOR<CardUpdateToOneWithWhereWithoutCardHasTagInput, CardUpdateWithoutCardHasTagInput>, CardUncheckedUpdateWithoutCardHasTagInput>
  }

  export type TagUpdateOneRequiredWithoutCardHasTagNestedInput = {
    create?: XOR<TagCreateWithoutCardHasTagInput, TagUncheckedCreateWithoutCardHasTagInput>
    connectOrCreate?: TagCreateOrConnectWithoutCardHasTagInput
    upsert?: TagUpsertWithoutCardHasTagInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutCardHasTagInput, TagUpdateWithoutCardHasTagInput>, TagUncheckedUpdateWithoutCardHasTagInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserHasBoardCreateWithoutUserInput = {
    role: string
    board: BoardCreateNestedOneWithoutUserHasBoardInput
  }

  export type UserHasBoardUncheckedCreateWithoutUserInput = {
    id?: number
    role: string
    boardId: number
  }

  export type UserHasBoardCreateOrConnectWithoutUserInput = {
    where: UserHasBoardWhereUniqueInput
    create: XOR<UserHasBoardCreateWithoutUserInput, UserHasBoardUncheckedCreateWithoutUserInput>
  }

  export type UserHasBoardCreateManyUserInputEnvelope = {
    data: UserHasBoardCreateManyUserInput | UserHasBoardCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CardCreateWithoutCreatorInput = {
    status?: string | null
    title: string
    content?: string | null
    startDate?: string | null
    endDate?: string | null
    color: string
    List?: ListCreateNestedManyWithoutCardInput
    column: ColumnCreateNestedOneWithoutCardInput
    CardAssignment?: CardAssignmentCreateNestedManyWithoutCardInput
    CardHasTag?: CardHasTagCreateNestedManyWithoutCardInput
  }

  export type CardUncheckedCreateWithoutCreatorInput = {
    id?: number
    status?: string | null
    title: string
    content?: string | null
    startDate?: string | null
    endDate?: string | null
    columnId: number
    color: string
    List?: ListUncheckedCreateNestedManyWithoutCardInput
    CardAssignment?: CardAssignmentUncheckedCreateNestedManyWithoutCardInput
    CardHasTag?: CardHasTagUncheckedCreateNestedManyWithoutCardInput
  }

  export type CardCreateOrConnectWithoutCreatorInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutCreatorInput, CardUncheckedCreateWithoutCreatorInput>
  }

  export type CardCreateManyCreatorInputEnvelope = {
    data: CardCreateManyCreatorInput | CardCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type CardAssignmentCreateWithoutUserInput = {
    card: CardCreateNestedOneWithoutCardAssignmentInput
  }

  export type CardAssignmentUncheckedCreateWithoutUserInput = {
    id?: number
    cardId: number
  }

  export type CardAssignmentCreateOrConnectWithoutUserInput = {
    where: CardAssignmentWhereUniqueInput
    create: XOR<CardAssignmentCreateWithoutUserInput, CardAssignmentUncheckedCreateWithoutUserInput>
  }

  export type CardAssignmentCreateManyUserInputEnvelope = {
    data: CardAssignmentCreateManyUserInput | CardAssignmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserHasBoardUpsertWithWhereUniqueWithoutUserInput = {
    where: UserHasBoardWhereUniqueInput
    update: XOR<UserHasBoardUpdateWithoutUserInput, UserHasBoardUncheckedUpdateWithoutUserInput>
    create: XOR<UserHasBoardCreateWithoutUserInput, UserHasBoardUncheckedCreateWithoutUserInput>
  }

  export type UserHasBoardUpdateWithWhereUniqueWithoutUserInput = {
    where: UserHasBoardWhereUniqueInput
    data: XOR<UserHasBoardUpdateWithoutUserInput, UserHasBoardUncheckedUpdateWithoutUserInput>
  }

  export type UserHasBoardUpdateManyWithWhereWithoutUserInput = {
    where: UserHasBoardScalarWhereInput
    data: XOR<UserHasBoardUpdateManyMutationInput, UserHasBoardUncheckedUpdateManyWithoutUserInput>
  }

  export type UserHasBoardScalarWhereInput = {
    AND?: UserHasBoardScalarWhereInput | UserHasBoardScalarWhereInput[]
    OR?: UserHasBoardScalarWhereInput[]
    NOT?: UserHasBoardScalarWhereInput | UserHasBoardScalarWhereInput[]
    id?: IntFilter<"UserHasBoard"> | number
    role?: StringFilter<"UserHasBoard"> | string
    boardId?: IntFilter<"UserHasBoard"> | number
    userId?: IntFilter<"UserHasBoard"> | number
  }

  export type CardUpsertWithWhereUniqueWithoutCreatorInput = {
    where: CardWhereUniqueInput
    update: XOR<CardUpdateWithoutCreatorInput, CardUncheckedUpdateWithoutCreatorInput>
    create: XOR<CardCreateWithoutCreatorInput, CardUncheckedCreateWithoutCreatorInput>
  }

  export type CardUpdateWithWhereUniqueWithoutCreatorInput = {
    where: CardWhereUniqueInput
    data: XOR<CardUpdateWithoutCreatorInput, CardUncheckedUpdateWithoutCreatorInput>
  }

  export type CardUpdateManyWithWhereWithoutCreatorInput = {
    where: CardScalarWhereInput
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyWithoutCreatorInput>
  }

  export type CardScalarWhereInput = {
    AND?: CardScalarWhereInput | CardScalarWhereInput[]
    OR?: CardScalarWhereInput[]
    NOT?: CardScalarWhereInput | CardScalarWhereInput[]
    id?: IntFilter<"Card"> | number
    status?: StringNullableFilter<"Card"> | string | null
    title?: StringFilter<"Card"> | string
    content?: StringNullableFilter<"Card"> | string | null
    startDate?: StringNullableFilter<"Card"> | string | null
    endDate?: StringNullableFilter<"Card"> | string | null
    creatorId?: IntNullableFilter<"Card"> | number | null
    columnId?: IntFilter<"Card"> | number
    color?: StringFilter<"Card"> | string
  }

  export type CardAssignmentUpsertWithWhereUniqueWithoutUserInput = {
    where: CardAssignmentWhereUniqueInput
    update: XOR<CardAssignmentUpdateWithoutUserInput, CardAssignmentUncheckedUpdateWithoutUserInput>
    create: XOR<CardAssignmentCreateWithoutUserInput, CardAssignmentUncheckedCreateWithoutUserInput>
  }

  export type CardAssignmentUpdateWithWhereUniqueWithoutUserInput = {
    where: CardAssignmentWhereUniqueInput
    data: XOR<CardAssignmentUpdateWithoutUserInput, CardAssignmentUncheckedUpdateWithoutUserInput>
  }

  export type CardAssignmentUpdateManyWithWhereWithoutUserInput = {
    where: CardAssignmentScalarWhereInput
    data: XOR<CardAssignmentUpdateManyMutationInput, CardAssignmentUncheckedUpdateManyWithoutUserInput>
  }

  export type CardAssignmentScalarWhereInput = {
    AND?: CardAssignmentScalarWhereInput | CardAssignmentScalarWhereInput[]
    OR?: CardAssignmentScalarWhereInput[]
    NOT?: CardAssignmentScalarWhereInput | CardAssignmentScalarWhereInput[]
    id?: IntFilter<"CardAssignment"> | number
    cardId?: IntFilter<"CardAssignment"> | number
    userId?: IntFilter<"CardAssignment"> | number
  }

  export type UserHasBoardCreateWithoutBoardInput = {
    role: string
    user: UserCreateNestedOneWithoutUserHasBoardInput
  }

  export type UserHasBoardUncheckedCreateWithoutBoardInput = {
    id?: number
    role: string
    userId: number
  }

  export type UserHasBoardCreateOrConnectWithoutBoardInput = {
    where: UserHasBoardWhereUniqueInput
    create: XOR<UserHasBoardCreateWithoutBoardInput, UserHasBoardUncheckedCreateWithoutBoardInput>
  }

  export type UserHasBoardCreateManyBoardInputEnvelope = {
    data: UserHasBoardCreateManyBoardInput | UserHasBoardCreateManyBoardInput[]
    skipDuplicates?: boolean
  }

  export type TagCreateWithoutBoardInput = {
    name: string
    color: string
    cardId?: number | null
    CardHasTag?: CardHasTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateWithoutBoardInput = {
    id?: number
    name: string
    color: string
    cardId?: number | null
    CardHasTag?: CardHasTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagCreateOrConnectWithoutBoardInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutBoardInput, TagUncheckedCreateWithoutBoardInput>
  }

  export type TagCreateManyBoardInputEnvelope = {
    data: TagCreateManyBoardInput | TagCreateManyBoardInput[]
    skipDuplicates?: boolean
  }

  export type ColumnCreateWithoutBoardInput = {
    name: string
    order?: number
    Card?: CardCreateNestedManyWithoutColumnInput
  }

  export type ColumnUncheckedCreateWithoutBoardInput = {
    id?: number
    name: string
    order?: number
    Card?: CardUncheckedCreateNestedManyWithoutColumnInput
  }

  export type ColumnCreateOrConnectWithoutBoardInput = {
    where: ColumnWhereUniqueInput
    create: XOR<ColumnCreateWithoutBoardInput, ColumnUncheckedCreateWithoutBoardInput>
  }

  export type ColumnCreateManyBoardInputEnvelope = {
    data: ColumnCreateManyBoardInput | ColumnCreateManyBoardInput[]
    skipDuplicates?: boolean
  }

  export type UserHasBoardUpsertWithWhereUniqueWithoutBoardInput = {
    where: UserHasBoardWhereUniqueInput
    update: XOR<UserHasBoardUpdateWithoutBoardInput, UserHasBoardUncheckedUpdateWithoutBoardInput>
    create: XOR<UserHasBoardCreateWithoutBoardInput, UserHasBoardUncheckedCreateWithoutBoardInput>
  }

  export type UserHasBoardUpdateWithWhereUniqueWithoutBoardInput = {
    where: UserHasBoardWhereUniqueInput
    data: XOR<UserHasBoardUpdateWithoutBoardInput, UserHasBoardUncheckedUpdateWithoutBoardInput>
  }

  export type UserHasBoardUpdateManyWithWhereWithoutBoardInput = {
    where: UserHasBoardScalarWhereInput
    data: XOR<UserHasBoardUpdateManyMutationInput, UserHasBoardUncheckedUpdateManyWithoutBoardInput>
  }

  export type TagUpsertWithWhereUniqueWithoutBoardInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutBoardInput, TagUncheckedUpdateWithoutBoardInput>
    create: XOR<TagCreateWithoutBoardInput, TagUncheckedCreateWithoutBoardInput>
  }

  export type TagUpdateWithWhereUniqueWithoutBoardInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutBoardInput, TagUncheckedUpdateWithoutBoardInput>
  }

  export type TagUpdateManyWithWhereWithoutBoardInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutBoardInput>
  }

  export type TagScalarWhereInput = {
    AND?: TagScalarWhereInput | TagScalarWhereInput[]
    OR?: TagScalarWhereInput[]
    NOT?: TagScalarWhereInput | TagScalarWhereInput[]
    id?: IntFilter<"Tag"> | number
    name?: StringFilter<"Tag"> | string
    boardId?: IntFilter<"Tag"> | number
    color?: StringFilter<"Tag"> | string
    cardId?: IntNullableFilter<"Tag"> | number | null
  }

  export type ColumnUpsertWithWhereUniqueWithoutBoardInput = {
    where: ColumnWhereUniqueInput
    update: XOR<ColumnUpdateWithoutBoardInput, ColumnUncheckedUpdateWithoutBoardInput>
    create: XOR<ColumnCreateWithoutBoardInput, ColumnUncheckedCreateWithoutBoardInput>
  }

  export type ColumnUpdateWithWhereUniqueWithoutBoardInput = {
    where: ColumnWhereUniqueInput
    data: XOR<ColumnUpdateWithoutBoardInput, ColumnUncheckedUpdateWithoutBoardInput>
  }

  export type ColumnUpdateManyWithWhereWithoutBoardInput = {
    where: ColumnScalarWhereInput
    data: XOR<ColumnUpdateManyMutationInput, ColumnUncheckedUpdateManyWithoutBoardInput>
  }

  export type ColumnScalarWhereInput = {
    AND?: ColumnScalarWhereInput | ColumnScalarWhereInput[]
    OR?: ColumnScalarWhereInput[]
    NOT?: ColumnScalarWhereInput | ColumnScalarWhereInput[]
    id?: IntFilter<"Column"> | number
    name?: StringFilter<"Column"> | string
    boardId?: IntFilter<"Column"> | number
    order?: IntFilter<"Column"> | number
  }

  export type BoardCreateWithoutUserHasBoardInput = {
    name: string
    LastEdited: string
    Color: string
    Tag?: TagCreateNestedManyWithoutBoardInput
    Column?: ColumnCreateNestedManyWithoutBoardInput
  }

  export type BoardUncheckedCreateWithoutUserHasBoardInput = {
    id?: number
    name: string
    LastEdited: string
    Color: string
    Tag?: TagUncheckedCreateNestedManyWithoutBoardInput
    Column?: ColumnUncheckedCreateNestedManyWithoutBoardInput
  }

  export type BoardCreateOrConnectWithoutUserHasBoardInput = {
    where: BoardWhereUniqueInput
    create: XOR<BoardCreateWithoutUserHasBoardInput, BoardUncheckedCreateWithoutUserHasBoardInput>
  }

  export type UserCreateWithoutUserHasBoardInput = {
    email: string
    username: string
    password: string
    pictureUrl: string
    Card?: CardCreateNestedManyWithoutCreatorInput
    CardAssignment?: CardAssignmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserHasBoardInput = {
    id?: number
    email: string
    username: string
    password: string
    pictureUrl: string
    Card?: CardUncheckedCreateNestedManyWithoutCreatorInput
    CardAssignment?: CardAssignmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserHasBoardInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserHasBoardInput, UserUncheckedCreateWithoutUserHasBoardInput>
  }

  export type BoardUpsertWithoutUserHasBoardInput = {
    update: XOR<BoardUpdateWithoutUserHasBoardInput, BoardUncheckedUpdateWithoutUserHasBoardInput>
    create: XOR<BoardCreateWithoutUserHasBoardInput, BoardUncheckedCreateWithoutUserHasBoardInput>
    where?: BoardWhereInput
  }

  export type BoardUpdateToOneWithWhereWithoutUserHasBoardInput = {
    where?: BoardWhereInput
    data: XOR<BoardUpdateWithoutUserHasBoardInput, BoardUncheckedUpdateWithoutUserHasBoardInput>
  }

  export type BoardUpdateWithoutUserHasBoardInput = {
    name?: StringFieldUpdateOperationsInput | string
    LastEdited?: StringFieldUpdateOperationsInput | string
    Color?: StringFieldUpdateOperationsInput | string
    Tag?: TagUpdateManyWithoutBoardNestedInput
    Column?: ColumnUpdateManyWithoutBoardNestedInput
  }

  export type BoardUncheckedUpdateWithoutUserHasBoardInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    LastEdited?: StringFieldUpdateOperationsInput | string
    Color?: StringFieldUpdateOperationsInput | string
    Tag?: TagUncheckedUpdateManyWithoutBoardNestedInput
    Column?: ColumnUncheckedUpdateManyWithoutBoardNestedInput
  }

  export type UserUpsertWithoutUserHasBoardInput = {
    update: XOR<UserUpdateWithoutUserHasBoardInput, UserUncheckedUpdateWithoutUserHasBoardInput>
    create: XOR<UserCreateWithoutUserHasBoardInput, UserUncheckedCreateWithoutUserHasBoardInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserHasBoardInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserHasBoardInput, UserUncheckedUpdateWithoutUserHasBoardInput>
  }

  export type UserUpdateWithoutUserHasBoardInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pictureUrl?: StringFieldUpdateOperationsInput | string
    Card?: CardUpdateManyWithoutCreatorNestedInput
    CardAssignment?: CardAssignmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserHasBoardInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pictureUrl?: StringFieldUpdateOperationsInput | string
    Card?: CardUncheckedUpdateManyWithoutCreatorNestedInput
    CardAssignment?: CardAssignmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BoardCreateWithoutTagInput = {
    name: string
    LastEdited: string
    Color: string
    UserHasBoard?: UserHasBoardCreateNestedManyWithoutBoardInput
    Column?: ColumnCreateNestedManyWithoutBoardInput
  }

  export type BoardUncheckedCreateWithoutTagInput = {
    id?: number
    name: string
    LastEdited: string
    Color: string
    UserHasBoard?: UserHasBoardUncheckedCreateNestedManyWithoutBoardInput
    Column?: ColumnUncheckedCreateNestedManyWithoutBoardInput
  }

  export type BoardCreateOrConnectWithoutTagInput = {
    where: BoardWhereUniqueInput
    create: XOR<BoardCreateWithoutTagInput, BoardUncheckedCreateWithoutTagInput>
  }

  export type CardHasTagCreateWithoutTagInput = {
    card: CardCreateNestedOneWithoutCardHasTagInput
  }

  export type CardHasTagUncheckedCreateWithoutTagInput = {
    id?: number
    cardId: number
  }

  export type CardHasTagCreateOrConnectWithoutTagInput = {
    where: CardHasTagWhereUniqueInput
    create: XOR<CardHasTagCreateWithoutTagInput, CardHasTagUncheckedCreateWithoutTagInput>
  }

  export type CardHasTagCreateManyTagInputEnvelope = {
    data: CardHasTagCreateManyTagInput | CardHasTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type BoardUpsertWithoutTagInput = {
    update: XOR<BoardUpdateWithoutTagInput, BoardUncheckedUpdateWithoutTagInput>
    create: XOR<BoardCreateWithoutTagInput, BoardUncheckedCreateWithoutTagInput>
    where?: BoardWhereInput
  }

  export type BoardUpdateToOneWithWhereWithoutTagInput = {
    where?: BoardWhereInput
    data: XOR<BoardUpdateWithoutTagInput, BoardUncheckedUpdateWithoutTagInput>
  }

  export type BoardUpdateWithoutTagInput = {
    name?: StringFieldUpdateOperationsInput | string
    LastEdited?: StringFieldUpdateOperationsInput | string
    Color?: StringFieldUpdateOperationsInput | string
    UserHasBoard?: UserHasBoardUpdateManyWithoutBoardNestedInput
    Column?: ColumnUpdateManyWithoutBoardNestedInput
  }

  export type BoardUncheckedUpdateWithoutTagInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    LastEdited?: StringFieldUpdateOperationsInput | string
    Color?: StringFieldUpdateOperationsInput | string
    UserHasBoard?: UserHasBoardUncheckedUpdateManyWithoutBoardNestedInput
    Column?: ColumnUncheckedUpdateManyWithoutBoardNestedInput
  }

  export type CardHasTagUpsertWithWhereUniqueWithoutTagInput = {
    where: CardHasTagWhereUniqueInput
    update: XOR<CardHasTagUpdateWithoutTagInput, CardHasTagUncheckedUpdateWithoutTagInput>
    create: XOR<CardHasTagCreateWithoutTagInput, CardHasTagUncheckedCreateWithoutTagInput>
  }

  export type CardHasTagUpdateWithWhereUniqueWithoutTagInput = {
    where: CardHasTagWhereUniqueInput
    data: XOR<CardHasTagUpdateWithoutTagInput, CardHasTagUncheckedUpdateWithoutTagInput>
  }

  export type CardHasTagUpdateManyWithWhereWithoutTagInput = {
    where: CardHasTagScalarWhereInput
    data: XOR<CardHasTagUpdateManyMutationInput, CardHasTagUncheckedUpdateManyWithoutTagInput>
  }

  export type CardHasTagScalarWhereInput = {
    AND?: CardHasTagScalarWhereInput | CardHasTagScalarWhereInput[]
    OR?: CardHasTagScalarWhereInput[]
    NOT?: CardHasTagScalarWhereInput | CardHasTagScalarWhereInput[]
    id?: IntFilter<"CardHasTag"> | number
    cardId?: IntFilter<"CardHasTag"> | number
    tagId?: IntFilter<"CardHasTag"> | number
  }

  export type ListCreateWithoutCardInput = {
    title: string
    ListItem?: ListItemCreateNestedManyWithoutListInput
  }

  export type ListUncheckedCreateWithoutCardInput = {
    id?: number
    title: string
    ListItem?: ListItemUncheckedCreateNestedManyWithoutListInput
  }

  export type ListCreateOrConnectWithoutCardInput = {
    where: ListWhereUniqueInput
    create: XOR<ListCreateWithoutCardInput, ListUncheckedCreateWithoutCardInput>
  }

  export type ListCreateManyCardInputEnvelope = {
    data: ListCreateManyCardInput | ListCreateManyCardInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCardInput = {
    email: string
    username: string
    password: string
    pictureUrl: string
    UserHasBoard?: UserHasBoardCreateNestedManyWithoutUserInput
    CardAssignment?: CardAssignmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCardInput = {
    id?: number
    email: string
    username: string
    password: string
    pictureUrl: string
    UserHasBoard?: UserHasBoardUncheckedCreateNestedManyWithoutUserInput
    CardAssignment?: CardAssignmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCardInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCardInput, UserUncheckedCreateWithoutCardInput>
  }

  export type ColumnCreateWithoutCardInput = {
    name: string
    order?: number
    board: BoardCreateNestedOneWithoutColumnInput
  }

  export type ColumnUncheckedCreateWithoutCardInput = {
    id?: number
    name: string
    boardId: number
    order?: number
  }

  export type ColumnCreateOrConnectWithoutCardInput = {
    where: ColumnWhereUniqueInput
    create: XOR<ColumnCreateWithoutCardInput, ColumnUncheckedCreateWithoutCardInput>
  }

  export type CardAssignmentCreateWithoutCardInput = {
    user: UserCreateNestedOneWithoutCardAssignmentInput
  }

  export type CardAssignmentUncheckedCreateWithoutCardInput = {
    id?: number
    userId: number
  }

  export type CardAssignmentCreateOrConnectWithoutCardInput = {
    where: CardAssignmentWhereUniqueInput
    create: XOR<CardAssignmentCreateWithoutCardInput, CardAssignmentUncheckedCreateWithoutCardInput>
  }

  export type CardAssignmentCreateManyCardInputEnvelope = {
    data: CardAssignmentCreateManyCardInput | CardAssignmentCreateManyCardInput[]
    skipDuplicates?: boolean
  }

  export type CardHasTagCreateWithoutCardInput = {
    tag: TagCreateNestedOneWithoutCardHasTagInput
  }

  export type CardHasTagUncheckedCreateWithoutCardInput = {
    id?: number
    tagId: number
  }

  export type CardHasTagCreateOrConnectWithoutCardInput = {
    where: CardHasTagWhereUniqueInput
    create: XOR<CardHasTagCreateWithoutCardInput, CardHasTagUncheckedCreateWithoutCardInput>
  }

  export type CardHasTagCreateManyCardInputEnvelope = {
    data: CardHasTagCreateManyCardInput | CardHasTagCreateManyCardInput[]
    skipDuplicates?: boolean
  }

  export type ListUpsertWithWhereUniqueWithoutCardInput = {
    where: ListWhereUniqueInput
    update: XOR<ListUpdateWithoutCardInput, ListUncheckedUpdateWithoutCardInput>
    create: XOR<ListCreateWithoutCardInput, ListUncheckedCreateWithoutCardInput>
  }

  export type ListUpdateWithWhereUniqueWithoutCardInput = {
    where: ListWhereUniqueInput
    data: XOR<ListUpdateWithoutCardInput, ListUncheckedUpdateWithoutCardInput>
  }

  export type ListUpdateManyWithWhereWithoutCardInput = {
    where: ListScalarWhereInput
    data: XOR<ListUpdateManyMutationInput, ListUncheckedUpdateManyWithoutCardInput>
  }

  export type ListScalarWhereInput = {
    AND?: ListScalarWhereInput | ListScalarWhereInput[]
    OR?: ListScalarWhereInput[]
    NOT?: ListScalarWhereInput | ListScalarWhereInput[]
    id?: IntFilter<"List"> | number
    title?: StringFilter<"List"> | string
    cardId?: IntFilter<"List"> | number
  }

  export type UserUpsertWithoutCardInput = {
    update: XOR<UserUpdateWithoutCardInput, UserUncheckedUpdateWithoutCardInput>
    create: XOR<UserCreateWithoutCardInput, UserUncheckedCreateWithoutCardInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCardInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCardInput, UserUncheckedUpdateWithoutCardInput>
  }

  export type UserUpdateWithoutCardInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pictureUrl?: StringFieldUpdateOperationsInput | string
    UserHasBoard?: UserHasBoardUpdateManyWithoutUserNestedInput
    CardAssignment?: CardAssignmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCardInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pictureUrl?: StringFieldUpdateOperationsInput | string
    UserHasBoard?: UserHasBoardUncheckedUpdateManyWithoutUserNestedInput
    CardAssignment?: CardAssignmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ColumnUpsertWithoutCardInput = {
    update: XOR<ColumnUpdateWithoutCardInput, ColumnUncheckedUpdateWithoutCardInput>
    create: XOR<ColumnCreateWithoutCardInput, ColumnUncheckedCreateWithoutCardInput>
    where?: ColumnWhereInput
  }

  export type ColumnUpdateToOneWithWhereWithoutCardInput = {
    where?: ColumnWhereInput
    data: XOR<ColumnUpdateWithoutCardInput, ColumnUncheckedUpdateWithoutCardInput>
  }

  export type ColumnUpdateWithoutCardInput = {
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    board?: BoardUpdateOneRequiredWithoutColumnNestedInput
  }

  export type ColumnUncheckedUpdateWithoutCardInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    boardId?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type CardAssignmentUpsertWithWhereUniqueWithoutCardInput = {
    where: CardAssignmentWhereUniqueInput
    update: XOR<CardAssignmentUpdateWithoutCardInput, CardAssignmentUncheckedUpdateWithoutCardInput>
    create: XOR<CardAssignmentCreateWithoutCardInput, CardAssignmentUncheckedCreateWithoutCardInput>
  }

  export type CardAssignmentUpdateWithWhereUniqueWithoutCardInput = {
    where: CardAssignmentWhereUniqueInput
    data: XOR<CardAssignmentUpdateWithoutCardInput, CardAssignmentUncheckedUpdateWithoutCardInput>
  }

  export type CardAssignmentUpdateManyWithWhereWithoutCardInput = {
    where: CardAssignmentScalarWhereInput
    data: XOR<CardAssignmentUpdateManyMutationInput, CardAssignmentUncheckedUpdateManyWithoutCardInput>
  }

  export type CardHasTagUpsertWithWhereUniqueWithoutCardInput = {
    where: CardHasTagWhereUniqueInput
    update: XOR<CardHasTagUpdateWithoutCardInput, CardHasTagUncheckedUpdateWithoutCardInput>
    create: XOR<CardHasTagCreateWithoutCardInput, CardHasTagUncheckedCreateWithoutCardInput>
  }

  export type CardHasTagUpdateWithWhereUniqueWithoutCardInput = {
    where: CardHasTagWhereUniqueInput
    data: XOR<CardHasTagUpdateWithoutCardInput, CardHasTagUncheckedUpdateWithoutCardInput>
  }

  export type CardHasTagUpdateManyWithWhereWithoutCardInput = {
    where: CardHasTagScalarWhereInput
    data: XOR<CardHasTagUpdateManyMutationInput, CardHasTagUncheckedUpdateManyWithoutCardInput>
  }

  export type CardCreateWithoutListInput = {
    status?: string | null
    title: string
    content?: string | null
    startDate?: string | null
    endDate?: string | null
    color: string
    creator?: UserCreateNestedOneWithoutCardInput
    column: ColumnCreateNestedOneWithoutCardInput
    CardAssignment?: CardAssignmentCreateNestedManyWithoutCardInput
    CardHasTag?: CardHasTagCreateNestedManyWithoutCardInput
  }

  export type CardUncheckedCreateWithoutListInput = {
    id?: number
    status?: string | null
    title: string
    content?: string | null
    startDate?: string | null
    endDate?: string | null
    creatorId?: number | null
    columnId: number
    color: string
    CardAssignment?: CardAssignmentUncheckedCreateNestedManyWithoutCardInput
    CardHasTag?: CardHasTagUncheckedCreateNestedManyWithoutCardInput
  }

  export type CardCreateOrConnectWithoutListInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutListInput, CardUncheckedCreateWithoutListInput>
  }

  export type ListItemCreateWithoutListInput = {
    content: string
    status: boolean
    order?: number
  }

  export type ListItemUncheckedCreateWithoutListInput = {
    id?: number
    content: string
    status: boolean
    order?: number
  }

  export type ListItemCreateOrConnectWithoutListInput = {
    where: ListItemWhereUniqueInput
    create: XOR<ListItemCreateWithoutListInput, ListItemUncheckedCreateWithoutListInput>
  }

  export type ListItemCreateManyListInputEnvelope = {
    data: ListItemCreateManyListInput | ListItemCreateManyListInput[]
    skipDuplicates?: boolean
  }

  export type CardUpsertWithoutListInput = {
    update: XOR<CardUpdateWithoutListInput, CardUncheckedUpdateWithoutListInput>
    create: XOR<CardCreateWithoutListInput, CardUncheckedCreateWithoutListInput>
    where?: CardWhereInput
  }

  export type CardUpdateToOneWithWhereWithoutListInput = {
    where?: CardWhereInput
    data: XOR<CardUpdateWithoutListInput, CardUncheckedUpdateWithoutListInput>
  }

  export type CardUpdateWithoutListInput = {
    status?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    creator?: UserUpdateOneWithoutCardNestedInput
    column?: ColumnUpdateOneRequiredWithoutCardNestedInput
    CardAssignment?: CardAssignmentUpdateManyWithoutCardNestedInput
    CardHasTag?: CardHasTagUpdateManyWithoutCardNestedInput
  }

  export type CardUncheckedUpdateWithoutListInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: NullableIntFieldUpdateOperationsInput | number | null
    columnId?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    CardAssignment?: CardAssignmentUncheckedUpdateManyWithoutCardNestedInput
    CardHasTag?: CardHasTagUncheckedUpdateManyWithoutCardNestedInput
  }

  export type ListItemUpsertWithWhereUniqueWithoutListInput = {
    where: ListItemWhereUniqueInput
    update: XOR<ListItemUpdateWithoutListInput, ListItemUncheckedUpdateWithoutListInput>
    create: XOR<ListItemCreateWithoutListInput, ListItemUncheckedCreateWithoutListInput>
  }

  export type ListItemUpdateWithWhereUniqueWithoutListInput = {
    where: ListItemWhereUniqueInput
    data: XOR<ListItemUpdateWithoutListInput, ListItemUncheckedUpdateWithoutListInput>
  }

  export type ListItemUpdateManyWithWhereWithoutListInput = {
    where: ListItemScalarWhereInput
    data: XOR<ListItemUpdateManyMutationInput, ListItemUncheckedUpdateManyWithoutListInput>
  }

  export type ListItemScalarWhereInput = {
    AND?: ListItemScalarWhereInput | ListItemScalarWhereInput[]
    OR?: ListItemScalarWhereInput[]
    NOT?: ListItemScalarWhereInput | ListItemScalarWhereInput[]
    id?: IntFilter<"ListItem"> | number
    content?: StringFilter<"ListItem"> | string
    listId?: IntFilter<"ListItem"> | number
    status?: BoolFilter<"ListItem"> | boolean
    order?: IntFilter<"ListItem"> | number
  }

  export type ListCreateWithoutListItemInput = {
    title: string
    card: CardCreateNestedOneWithoutListInput
  }

  export type ListUncheckedCreateWithoutListItemInput = {
    id?: number
    title: string
    cardId: number
  }

  export type ListCreateOrConnectWithoutListItemInput = {
    where: ListWhereUniqueInput
    create: XOR<ListCreateWithoutListItemInput, ListUncheckedCreateWithoutListItemInput>
  }

  export type ListUpsertWithoutListItemInput = {
    update: XOR<ListUpdateWithoutListItemInput, ListUncheckedUpdateWithoutListItemInput>
    create: XOR<ListCreateWithoutListItemInput, ListUncheckedCreateWithoutListItemInput>
    where?: ListWhereInput
  }

  export type ListUpdateToOneWithWhereWithoutListItemInput = {
    where?: ListWhereInput
    data: XOR<ListUpdateWithoutListItemInput, ListUncheckedUpdateWithoutListItemInput>
  }

  export type ListUpdateWithoutListItemInput = {
    title?: StringFieldUpdateOperationsInput | string
    card?: CardUpdateOneRequiredWithoutListNestedInput
  }

  export type ListUncheckedUpdateWithoutListItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    cardId?: IntFieldUpdateOperationsInput | number
  }

  export type BoardCreateWithoutColumnInput = {
    name: string
    LastEdited: string
    Color: string
    UserHasBoard?: UserHasBoardCreateNestedManyWithoutBoardInput
    Tag?: TagCreateNestedManyWithoutBoardInput
  }

  export type BoardUncheckedCreateWithoutColumnInput = {
    id?: number
    name: string
    LastEdited: string
    Color: string
    UserHasBoard?: UserHasBoardUncheckedCreateNestedManyWithoutBoardInput
    Tag?: TagUncheckedCreateNestedManyWithoutBoardInput
  }

  export type BoardCreateOrConnectWithoutColumnInput = {
    where: BoardWhereUniqueInput
    create: XOR<BoardCreateWithoutColumnInput, BoardUncheckedCreateWithoutColumnInput>
  }

  export type CardCreateWithoutColumnInput = {
    status?: string | null
    title: string
    content?: string | null
    startDate?: string | null
    endDate?: string | null
    color: string
    List?: ListCreateNestedManyWithoutCardInput
    creator?: UserCreateNestedOneWithoutCardInput
    CardAssignment?: CardAssignmentCreateNestedManyWithoutCardInput
    CardHasTag?: CardHasTagCreateNestedManyWithoutCardInput
  }

  export type CardUncheckedCreateWithoutColumnInput = {
    id?: number
    status?: string | null
    title: string
    content?: string | null
    startDate?: string | null
    endDate?: string | null
    creatorId?: number | null
    color: string
    List?: ListUncheckedCreateNestedManyWithoutCardInput
    CardAssignment?: CardAssignmentUncheckedCreateNestedManyWithoutCardInput
    CardHasTag?: CardHasTagUncheckedCreateNestedManyWithoutCardInput
  }

  export type CardCreateOrConnectWithoutColumnInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutColumnInput, CardUncheckedCreateWithoutColumnInput>
  }

  export type CardCreateManyColumnInputEnvelope = {
    data: CardCreateManyColumnInput | CardCreateManyColumnInput[]
    skipDuplicates?: boolean
  }

  export type BoardUpsertWithoutColumnInput = {
    update: XOR<BoardUpdateWithoutColumnInput, BoardUncheckedUpdateWithoutColumnInput>
    create: XOR<BoardCreateWithoutColumnInput, BoardUncheckedCreateWithoutColumnInput>
    where?: BoardWhereInput
  }

  export type BoardUpdateToOneWithWhereWithoutColumnInput = {
    where?: BoardWhereInput
    data: XOR<BoardUpdateWithoutColumnInput, BoardUncheckedUpdateWithoutColumnInput>
  }

  export type BoardUpdateWithoutColumnInput = {
    name?: StringFieldUpdateOperationsInput | string
    LastEdited?: StringFieldUpdateOperationsInput | string
    Color?: StringFieldUpdateOperationsInput | string
    UserHasBoard?: UserHasBoardUpdateManyWithoutBoardNestedInput
    Tag?: TagUpdateManyWithoutBoardNestedInput
  }

  export type BoardUncheckedUpdateWithoutColumnInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    LastEdited?: StringFieldUpdateOperationsInput | string
    Color?: StringFieldUpdateOperationsInput | string
    UserHasBoard?: UserHasBoardUncheckedUpdateManyWithoutBoardNestedInput
    Tag?: TagUncheckedUpdateManyWithoutBoardNestedInput
  }

  export type CardUpsertWithWhereUniqueWithoutColumnInput = {
    where: CardWhereUniqueInput
    update: XOR<CardUpdateWithoutColumnInput, CardUncheckedUpdateWithoutColumnInput>
    create: XOR<CardCreateWithoutColumnInput, CardUncheckedCreateWithoutColumnInput>
  }

  export type CardUpdateWithWhereUniqueWithoutColumnInput = {
    where: CardWhereUniqueInput
    data: XOR<CardUpdateWithoutColumnInput, CardUncheckedUpdateWithoutColumnInput>
  }

  export type CardUpdateManyWithWhereWithoutColumnInput = {
    where: CardScalarWhereInput
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyWithoutColumnInput>
  }

  export type CardCreateWithoutCardAssignmentInput = {
    status?: string | null
    title: string
    content?: string | null
    startDate?: string | null
    endDate?: string | null
    color: string
    List?: ListCreateNestedManyWithoutCardInput
    creator?: UserCreateNestedOneWithoutCardInput
    column: ColumnCreateNestedOneWithoutCardInput
    CardHasTag?: CardHasTagCreateNestedManyWithoutCardInput
  }

  export type CardUncheckedCreateWithoutCardAssignmentInput = {
    id?: number
    status?: string | null
    title: string
    content?: string | null
    startDate?: string | null
    endDate?: string | null
    creatorId?: number | null
    columnId: number
    color: string
    List?: ListUncheckedCreateNestedManyWithoutCardInput
    CardHasTag?: CardHasTagUncheckedCreateNestedManyWithoutCardInput
  }

  export type CardCreateOrConnectWithoutCardAssignmentInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutCardAssignmentInput, CardUncheckedCreateWithoutCardAssignmentInput>
  }

  export type UserCreateWithoutCardAssignmentInput = {
    email: string
    username: string
    password: string
    pictureUrl: string
    UserHasBoard?: UserHasBoardCreateNestedManyWithoutUserInput
    Card?: CardCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutCardAssignmentInput = {
    id?: number
    email: string
    username: string
    password: string
    pictureUrl: string
    UserHasBoard?: UserHasBoardUncheckedCreateNestedManyWithoutUserInput
    Card?: CardUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutCardAssignmentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCardAssignmentInput, UserUncheckedCreateWithoutCardAssignmentInput>
  }

  export type CardUpsertWithoutCardAssignmentInput = {
    update: XOR<CardUpdateWithoutCardAssignmentInput, CardUncheckedUpdateWithoutCardAssignmentInput>
    create: XOR<CardCreateWithoutCardAssignmentInput, CardUncheckedCreateWithoutCardAssignmentInput>
    where?: CardWhereInput
  }

  export type CardUpdateToOneWithWhereWithoutCardAssignmentInput = {
    where?: CardWhereInput
    data: XOR<CardUpdateWithoutCardAssignmentInput, CardUncheckedUpdateWithoutCardAssignmentInput>
  }

  export type CardUpdateWithoutCardAssignmentInput = {
    status?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    List?: ListUpdateManyWithoutCardNestedInput
    creator?: UserUpdateOneWithoutCardNestedInput
    column?: ColumnUpdateOneRequiredWithoutCardNestedInput
    CardHasTag?: CardHasTagUpdateManyWithoutCardNestedInput
  }

  export type CardUncheckedUpdateWithoutCardAssignmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: NullableIntFieldUpdateOperationsInput | number | null
    columnId?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    List?: ListUncheckedUpdateManyWithoutCardNestedInput
    CardHasTag?: CardHasTagUncheckedUpdateManyWithoutCardNestedInput
  }

  export type UserUpsertWithoutCardAssignmentInput = {
    update: XOR<UserUpdateWithoutCardAssignmentInput, UserUncheckedUpdateWithoutCardAssignmentInput>
    create: XOR<UserCreateWithoutCardAssignmentInput, UserUncheckedCreateWithoutCardAssignmentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCardAssignmentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCardAssignmentInput, UserUncheckedUpdateWithoutCardAssignmentInput>
  }

  export type UserUpdateWithoutCardAssignmentInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pictureUrl?: StringFieldUpdateOperationsInput | string
    UserHasBoard?: UserHasBoardUpdateManyWithoutUserNestedInput
    Card?: CardUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutCardAssignmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pictureUrl?: StringFieldUpdateOperationsInput | string
    UserHasBoard?: UserHasBoardUncheckedUpdateManyWithoutUserNestedInput
    Card?: CardUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type CardCreateWithoutCardHasTagInput = {
    status?: string | null
    title: string
    content?: string | null
    startDate?: string | null
    endDate?: string | null
    color: string
    List?: ListCreateNestedManyWithoutCardInput
    creator?: UserCreateNestedOneWithoutCardInput
    column: ColumnCreateNestedOneWithoutCardInput
    CardAssignment?: CardAssignmentCreateNestedManyWithoutCardInput
  }

  export type CardUncheckedCreateWithoutCardHasTagInput = {
    id?: number
    status?: string | null
    title: string
    content?: string | null
    startDate?: string | null
    endDate?: string | null
    creatorId?: number | null
    columnId: number
    color: string
    List?: ListUncheckedCreateNestedManyWithoutCardInput
    CardAssignment?: CardAssignmentUncheckedCreateNestedManyWithoutCardInput
  }

  export type CardCreateOrConnectWithoutCardHasTagInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutCardHasTagInput, CardUncheckedCreateWithoutCardHasTagInput>
  }

  export type TagCreateWithoutCardHasTagInput = {
    name: string
    color: string
    cardId?: number | null
    board: BoardCreateNestedOneWithoutTagInput
  }

  export type TagUncheckedCreateWithoutCardHasTagInput = {
    id?: number
    name: string
    boardId: number
    color: string
    cardId?: number | null
  }

  export type TagCreateOrConnectWithoutCardHasTagInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutCardHasTagInput, TagUncheckedCreateWithoutCardHasTagInput>
  }

  export type CardUpsertWithoutCardHasTagInput = {
    update: XOR<CardUpdateWithoutCardHasTagInput, CardUncheckedUpdateWithoutCardHasTagInput>
    create: XOR<CardCreateWithoutCardHasTagInput, CardUncheckedCreateWithoutCardHasTagInput>
    where?: CardWhereInput
  }

  export type CardUpdateToOneWithWhereWithoutCardHasTagInput = {
    where?: CardWhereInput
    data: XOR<CardUpdateWithoutCardHasTagInput, CardUncheckedUpdateWithoutCardHasTagInput>
  }

  export type CardUpdateWithoutCardHasTagInput = {
    status?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    List?: ListUpdateManyWithoutCardNestedInput
    creator?: UserUpdateOneWithoutCardNestedInput
    column?: ColumnUpdateOneRequiredWithoutCardNestedInput
    CardAssignment?: CardAssignmentUpdateManyWithoutCardNestedInput
  }

  export type CardUncheckedUpdateWithoutCardHasTagInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: NullableIntFieldUpdateOperationsInput | number | null
    columnId?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    List?: ListUncheckedUpdateManyWithoutCardNestedInput
    CardAssignment?: CardAssignmentUncheckedUpdateManyWithoutCardNestedInput
  }

  export type TagUpsertWithoutCardHasTagInput = {
    update: XOR<TagUpdateWithoutCardHasTagInput, TagUncheckedUpdateWithoutCardHasTagInput>
    create: XOR<TagCreateWithoutCardHasTagInput, TagUncheckedCreateWithoutCardHasTagInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutCardHasTagInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutCardHasTagInput, TagUncheckedUpdateWithoutCardHasTagInput>
  }

  export type TagUpdateWithoutCardHasTagInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    cardId?: NullableIntFieldUpdateOperationsInput | number | null
    board?: BoardUpdateOneRequiredWithoutTagNestedInput
  }

  export type TagUncheckedUpdateWithoutCardHasTagInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    boardId?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    cardId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserHasBoardCreateManyUserInput = {
    id?: number
    role: string
    boardId: number
  }

  export type CardCreateManyCreatorInput = {
    id?: number
    status?: string | null
    title: string
    content?: string | null
    startDate?: string | null
    endDate?: string | null
    columnId: number
    color: string
  }

  export type CardAssignmentCreateManyUserInput = {
    id?: number
    cardId: number
  }

  export type UserHasBoardUpdateWithoutUserInput = {
    role?: StringFieldUpdateOperationsInput | string
    board?: BoardUpdateOneRequiredWithoutUserHasBoardNestedInput
  }

  export type UserHasBoardUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    boardId?: IntFieldUpdateOperationsInput | number
  }

  export type UserHasBoardUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    boardId?: IntFieldUpdateOperationsInput | number
  }

  export type CardUpdateWithoutCreatorInput = {
    status?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    List?: ListUpdateManyWithoutCardNestedInput
    column?: ColumnUpdateOneRequiredWithoutCardNestedInput
    CardAssignment?: CardAssignmentUpdateManyWithoutCardNestedInput
    CardHasTag?: CardHasTagUpdateManyWithoutCardNestedInput
  }

  export type CardUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    columnId?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    List?: ListUncheckedUpdateManyWithoutCardNestedInput
    CardAssignment?: CardAssignmentUncheckedUpdateManyWithoutCardNestedInput
    CardHasTag?: CardHasTagUncheckedUpdateManyWithoutCardNestedInput
  }

  export type CardUncheckedUpdateManyWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    columnId?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
  }

  export type CardAssignmentUpdateWithoutUserInput = {
    card?: CardUpdateOneRequiredWithoutCardAssignmentNestedInput
  }

  export type CardAssignmentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    cardId?: IntFieldUpdateOperationsInput | number
  }

  export type CardAssignmentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    cardId?: IntFieldUpdateOperationsInput | number
  }

  export type UserHasBoardCreateManyBoardInput = {
    id?: number
    role: string
    userId: number
  }

  export type TagCreateManyBoardInput = {
    id?: number
    name: string
    color: string
    cardId?: number | null
  }

  export type ColumnCreateManyBoardInput = {
    id?: number
    name: string
    order?: number
  }

  export type UserHasBoardUpdateWithoutBoardInput = {
    role?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutUserHasBoardNestedInput
  }

  export type UserHasBoardUncheckedUpdateWithoutBoardInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserHasBoardUncheckedUpdateManyWithoutBoardInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TagUpdateWithoutBoardInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    cardId?: NullableIntFieldUpdateOperationsInput | number | null
    CardHasTag?: CardHasTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateWithoutBoardInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    cardId?: NullableIntFieldUpdateOperationsInput | number | null
    CardHasTag?: CardHasTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateManyWithoutBoardInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    cardId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ColumnUpdateWithoutBoardInput = {
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    Card?: CardUpdateManyWithoutColumnNestedInput
  }

  export type ColumnUncheckedUpdateWithoutBoardInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    Card?: CardUncheckedUpdateManyWithoutColumnNestedInput
  }

  export type ColumnUncheckedUpdateManyWithoutBoardInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type CardHasTagCreateManyTagInput = {
    id?: number
    cardId: number
  }

  export type CardHasTagUpdateWithoutTagInput = {
    card?: CardUpdateOneRequiredWithoutCardHasTagNestedInput
  }

  export type CardHasTagUncheckedUpdateWithoutTagInput = {
    id?: IntFieldUpdateOperationsInput | number
    cardId?: IntFieldUpdateOperationsInput | number
  }

  export type CardHasTagUncheckedUpdateManyWithoutTagInput = {
    id?: IntFieldUpdateOperationsInput | number
    cardId?: IntFieldUpdateOperationsInput | number
  }

  export type ListCreateManyCardInput = {
    id?: number
    title: string
  }

  export type CardAssignmentCreateManyCardInput = {
    id?: number
    userId: number
  }

  export type CardHasTagCreateManyCardInput = {
    id?: number
    tagId: number
  }

  export type ListUpdateWithoutCardInput = {
    title?: StringFieldUpdateOperationsInput | string
    ListItem?: ListItemUpdateManyWithoutListNestedInput
  }

  export type ListUncheckedUpdateWithoutCardInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    ListItem?: ListItemUncheckedUpdateManyWithoutListNestedInput
  }

  export type ListUncheckedUpdateManyWithoutCardInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type CardAssignmentUpdateWithoutCardInput = {
    user?: UserUpdateOneRequiredWithoutCardAssignmentNestedInput
  }

  export type CardAssignmentUncheckedUpdateWithoutCardInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CardAssignmentUncheckedUpdateManyWithoutCardInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CardHasTagUpdateWithoutCardInput = {
    tag?: TagUpdateOneRequiredWithoutCardHasTagNestedInput
  }

  export type CardHasTagUncheckedUpdateWithoutCardInput = {
    id?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type CardHasTagUncheckedUpdateManyWithoutCardInput = {
    id?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type ListItemCreateManyListInput = {
    id?: number
    content: string
    status: boolean
    order?: number
  }

  export type ListItemUpdateWithoutListInput = {
    content?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ListItemUncheckedUpdateWithoutListInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ListItemUncheckedUpdateManyWithoutListInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
  }

  export type CardCreateManyColumnInput = {
    id?: number
    status?: string | null
    title: string
    content?: string | null
    startDate?: string | null
    endDate?: string | null
    creatorId?: number | null
    color: string
  }

  export type CardUpdateWithoutColumnInput = {
    status?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    List?: ListUpdateManyWithoutCardNestedInput
    creator?: UserUpdateOneWithoutCardNestedInput
    CardAssignment?: CardAssignmentUpdateManyWithoutCardNestedInput
    CardHasTag?: CardHasTagUpdateManyWithoutCardNestedInput
  }

  export type CardUncheckedUpdateWithoutColumnInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: NullableIntFieldUpdateOperationsInput | number | null
    color?: StringFieldUpdateOperationsInput | string
    List?: ListUncheckedUpdateManyWithoutCardNestedInput
    CardAssignment?: CardAssignmentUncheckedUpdateManyWithoutCardNestedInput
    CardHasTag?: CardHasTagUncheckedUpdateManyWithoutCardNestedInput
  }

  export type CardUncheckedUpdateManyWithoutColumnInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: NullableIntFieldUpdateOperationsInput | number | null
    color?: StringFieldUpdateOperationsInput | string
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