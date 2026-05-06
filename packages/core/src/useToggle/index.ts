import { ref } from 'vue-demi'

import { UseToggleParams, UseToggleResult } from './types'

export const useToggle = (params: UseToggleParams): UseToggleResult => {
  const data = ref(params.defaultValue || false)

  const toggle = () => {
    data.value = !data.value
  }

  const toggleWith = (value: boolean) => {
    data.value = value
  }

  const on = () => {
    data.value = true
  }

  const off = () => {
    data.value = false
  }

  const reset = () => {
    data.value = params.defaultValue || false
  }

  return [
    data,
    {
      toggle,
      on,
      off,
      reset,
      toggleWith
    }
  ]
}
