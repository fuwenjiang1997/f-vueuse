import { cloneDeep } from 'lodash-es'
import { computed, isReactive, isRef, Reactive, Ref, ref, shallowRef, watch } from 'vue-demi'

import { UseRefHistoryParams, UseRefHistoryResult } from './types'

/**
 * 简单实现历史记录
 * TODO commit手动保存快照、自定义序列化、深度监听、防抖节流、数据持久化
 */
export const useRefHistory = <T>(value: Ref<T> | Reactive<T>, params: UseRefHistoryParams<T> = {}): UseRefHistoryResult<T> => {
  const isReactiveValue = isReactive(value)
  const refValue = isRef(value) ? value : ref(value as T)
  const _history = shallowRef<T[]>([cloneDeep(refValue.value)])
  const currentIndex = ref(0)
  let changeFlag = false

  const canUndo = computed(() => currentIndex.value > 0)
  const canRedo = computed(() => currentIndex.value < _history.value.length - 1)
  const history = computed(() => _history.value.slice(0, currentIndex.value + 1))

  watch(
    () => refValue.value,
    (newValue: T) => {
      if (changeFlag) {
        changeFlag = false
        return
      }

      if (newValue !== _history.value[currentIndex.value]) {
        _history.value = _history.value.splice(0, currentIndex.value + 1)
        _history.value.push(cloneDeep(newValue))
        currentIndex.value = _history.value.length - 1
      }
    },
    { deep: params.deep }
  )

  const safeChangeValue = (newValue: T) => {
    changeFlag = true
    const _newValue = cloneDeep(newValue)
    if (isReactiveValue) {
      Object.assign(value as object, _newValue as object)
    } else {
      refValue.value = _newValue
    }
  }

  const undo = () => {
    if (currentIndex.value > 0) {
      currentIndex.value--
      safeChangeValue(_history.value[currentIndex.value])
    }
  }
  const redo = () => {
    if (currentIndex.value < _history.value.length - 1) {
      currentIndex.value++
      safeChangeValue(_history.value[currentIndex.value])
    }
  }
  const clear = () => {
    _history.value.length = 0
    currentIndex.value = -1
  }

  return {
    history,
    canUndo,
    canRedo,
    undo,
    redo,
    clear,
    currentIndex
  }
}
