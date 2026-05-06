import type { Ref } from 'vue-demi'

export interface UseToggleParams {
  defaultValue?: boolean
}

export interface UseToggleResultApi {
  toggle: () => void
  on: () => void
  off: () => void
  reset: () => void
  toggleWith: (value: boolean) => void
}

export type UseToggleResult = [Ref<boolean>, UseToggleResultApi]
