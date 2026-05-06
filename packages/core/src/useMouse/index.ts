import { onMounted, onUnmounted, ref } from 'vue-demi'

import { UseMouseResult } from './types'

export const useMouse = (): UseMouseResult => {
  const x = ref(0)
  const y = ref(0)

  const updateMousePosition = (event: MouseEvent) => {
    const { clientX, clientY } = event
    x.value = clientX
    y.value = clientY
  }

  // 监听鼠标事件，mousemove 事件
  onMounted(() => {
    window.addEventListener('mousemove', updateMousePosition)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', updateMousePosition)
  })

  return {
    x,
    y
  }
}
