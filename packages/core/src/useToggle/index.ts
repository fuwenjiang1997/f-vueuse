import { shallowRef } from 'vue'

import { UseToggleResult } from './types'

export const useToggle = <T, R>(defaultValue: T, toggleValue: R, cb?: (newValue: T | R) => void): UseToggleResult<T, R> => {
  const data = shallowRef<T | R>(defaultValue)

  const toggle = () => {
    data.value = data.value === defaultValue ? toggleValue : defaultValue
    cb?.(data.value)
  }

  const toggleWith = (value: T | R) => {
    if (value !== defaultValue && value !== toggleValue) {
      return
    }
    data.value = value
    cb?.(value)
  }

  const reset = () => {
    data.value = defaultValue
  }

  return [
    data,
    {
      toggle,
      reset,
      toggleWith
    }
  ]
}
