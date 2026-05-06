import { ref } from 'vue-demi'

import type { UseLoadingFn, UseLoadingReturn } from './types'

export function useLoading<T extends any[] = any[]>(fn: UseLoadingFn<T>): UseLoadingReturn<T> {
  const isLoading = ref(false)

  const handler = (...args: T) => {
    return new Promise<void>(resolve => {
      isLoading.value = true
      fn(
        () => {
          isLoading.value = false
          resolve()
        },
        ...args
      )
    })
  }

  return [handler, isLoading]
}
