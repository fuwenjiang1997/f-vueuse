import { ref } from 'vue-demi'

import type { UseLoadingFn, UseLoadingReturn } from './types'

/**
 * 带loading状态的handler
 * @param fn
 * @returns
 */
export function useWithLoading<T extends any[] = any[], R = undefined>(fn: UseLoadingFn<T>): UseLoadingReturn<T> {
  const isLoading = ref(false)

  const handler = (...args: T) => {
    return new Promise<R | undefined>(resolve => {
      if (isLoading.value === true) {
        resolve(undefined)
      }
      isLoading.value = true
      fn(
        (res: any) => {
          isLoading.value = false
          resolve(res)
        },
        ...args
      )
    })
  }

  return [handler, isLoading]
}
