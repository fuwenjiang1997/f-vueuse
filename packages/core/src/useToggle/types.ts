import type { Ref } from 'vue'

export interface UseToggleResultApi<T, R> {
  toggle: () => void
  reset: () => void
  toggleWith: (value: T | R) => void
}

export type UseToggleResult<T, R> = [Ref<T | R>, UseToggleResultApi<T, R>]
