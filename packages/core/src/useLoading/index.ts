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

/**
 * 示例
 */
const [handler1, isLoading1] = useLoading(done => {
  setTimeout(() => {
    // console.log('你好')
    done()
  }, 1000)
})

const [handler2, isLoading2] = useLoading(async (done, params1: string) => {
  await handler1()
  done()
})
handler2('章三')
