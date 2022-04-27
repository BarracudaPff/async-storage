declare module AsyncStorage {
    export type Callback = (err?: Error, value?: any) => void;

    export function setItem(key: string, value: string, cb?: Callback): Promise<void>

    export function getItem(key: string, cb?: Callback): Promise<string | null>

    export function getAllKeys(cb?: Callback): Promise<Array<string>>

    export function removeItem(key: string, cb?: Callback): Promise<void>

    export function clear(): Promise<void>

    export function multiGet(keys: Array<string>): Promise<Array<[string, string | null]>>

    export function multiSet(kvPairs: Array<[string, string]>): Promise<void>

    export function multiMerge(kvPairs: Array<[string, string]>): Promise<void>

    export function multiRemove(keys: Array<string>): Promise<void>

    export function mergeItem(key: string, value: string): Promise<void>

    export function flushGetRequests(): void
}

export default AsyncStorage
