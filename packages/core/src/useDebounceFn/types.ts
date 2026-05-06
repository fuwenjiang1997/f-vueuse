export interface UseDebounceFnOptions {
  immediate?: boolean
}

export type UseDebounceFnResult<T extends (...args: any[]) => any> = ((...args: Parameters<T>) => void) | (() => void)
