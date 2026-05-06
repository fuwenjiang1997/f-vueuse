import { computed, readonly, ref, shallowRef, watch } from 'vue-demi'
import { UseRefHistoryParams, UseRefHistoryResult } from './types'

/**
 *
 * 简单实现历史记录
 * TODO commit手动保存快照、 自定义序列化、深度监听、防抖节流、数据持久化
 */
export const useRefHistory = <T>(params: UseRefHistoryParams<T>): UseRefHistoryResult<T> => {
  const { refValue } = params
  const history = shallowRef<T[]>([])
  const currentIndex = ref(0)
  const current = computed(() => history.value[currentIndex.value])

  const canUndo = computed(() => currentIndex.value > 0)
  const canRedo = computed(() => currentIndex.value < history.value.length - 1)

  watch(refValue, (newValue: T, oldValue: T) => {
    if (newValue !== history.value[currentIndex.value]) {
      history.value = history.value.splice(0, currentIndex.value + 1)
      history.value.push(newValue)
      currentIndex.value = history.value.length - 1
    }
  })

  const undo = () => {
    if (currentIndex.value > 0) {
      currentIndex.value--
    }
  }
  const redo = () => {
    if (currentIndex.value < history.value.length - 1) {
      currentIndex.value++
    }
  }
  const clear = () => {
    history.value.length = 0
    currentIndex.value = 0
  }

  return {
    history: history,
    current: current,
    canUndo,
    canRedo,
    undo,
    redo,
    clear
  }
}
