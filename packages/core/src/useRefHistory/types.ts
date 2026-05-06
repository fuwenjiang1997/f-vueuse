import { ComputedRef, Ref } from 'vue-demi'

export interface UseRefHistoryParams<T> {
  deep?: boolean
}

export interface UseRefHistoryResult<T> {
  history: ComputedRef<T[]>
  canUndo: ComputedRef<boolean>
  canRedo: ComputedRef<boolean>
  undo: () => void
  redo: () => void
  clear: () => void
}
