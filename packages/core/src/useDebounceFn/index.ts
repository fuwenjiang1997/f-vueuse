import { UseDebounceFnOptions, UseDebounceFnResult } from './types'

export const useDebounceFn = <T extends (...args: any[]) => any>(
  fn: T,
  delay: number = 500,
  options: UseDebounceFnOptions = {}
): UseDebounceFnResult<T> => {
  const { immediate = false } = options
  let timer: ReturnType<typeof setTimeout> | null = null

  const debounced: UseDebounceFnResult<T> = (...args: Parameters<T>) => {
    if (timer) {
      clearTimeout(timer)
    }

    if (immediate && !timer) {
      fn(...args)
    }

    timer = setTimeout(() => {
      if (!immediate) {
        fn(...args)
      }
      timer = null
    }, delay)
  }

  return debounced
}
