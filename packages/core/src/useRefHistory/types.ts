import { Ref, ShallowRef } from 'vue-demi'

export interface UseRefHistoryParams<T> {
  refValue: Ref<T>
}

export interface UseRefHistoryResult<T> {
  history: Readonly<ShallowRef<T[]>>
  current: Readonly<Ref<T>>
  canUndo: Readonly<Ref<boolean>>
  canRedo: Readonly<Ref<boolean>>
  undo: () => void
  redo: () => void
  clear: () => void
}
