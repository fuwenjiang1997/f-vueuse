export interface UseThrottleFnOptions {
  immediate?: boolean
}

export type UseThrottleFnResult<T extends (...args: any[]) => any> = ((...args: Parameters<T>) => void) | (() => void)
