import { UseThrottleFnOptions, UseThrottleFnResult } from './types'

export const useThrottleFn = <T extends (...args: any[]) => any>(
  fn: T,
  delay: number = 500,
  options: UseThrottleFnOptions = {}
): UseThrottleFnResult<T> => {
  const { immediate = false } = options
  let lastTime = 0

  const throttled: UseThrottleFnResult<T> = (...args: Parameters<T>) => {
    const now = Date.now()
    const timeLeft = delay - (now - lastTime)

    if (timeLeft <= 0) {
      lastTime = now
      fn(...args)
    }
  }

  immediate && throttled()

  return throttled
}
