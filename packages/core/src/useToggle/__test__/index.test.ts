import { describe, expect, it, vi } from 'vitest'

import { useToggle } from '../index'

describe('useToggle', () => {
  it('should initialize with default value', () => {
    const [data] = useToggle('off', 'on')
    expect(data.value).toBe('off')
  })

  it('should toggle between default and toggle value', () => {
    const [data, { toggle }] = useToggle(false, true)
    expect(data.value).toBe(false)

    toggle()
    expect(data.value).toBe(true)

    toggle()
    expect(data.value).toBe(false)
  })

  it('should support custom toggle values', () => {
    const [data, { toggle }] = useToggle('a', 'b')

    expect(data.value).toBe('a')
    toggle()
    expect(data.value).toBe('b')
    toggle()
    expect(data.value).toBe('a')
  })

  it('should toggleWith any value', () => {
    const [data, { toggleWith }] = useToggle<string | number, string | number>('off', 'on')

    toggleWith(100)
    expect(data.value).toBe('off')

    toggleWith('on')
    expect(data.value).toBe('on')
  })

  it('should reset to default value', () => {
    const [data, { toggle, reset }] = useToggle('off', 'on')

    toggle()
    expect(data.value).toBe('on')

    reset()
    expect(data.value).toBe('off')
  })

  it('should call callback on toggle', () => {
    const cb = vi.fn()
    const [data, { toggle }] = useToggle('off', 'on', cb)

    toggle()
    expect(cb).toHaveBeenCalledWith('on')
    expect(cb).toHaveBeenCalledTimes(1)

    toggle()
    expect(cb).toHaveBeenCalledWith('off')
    expect(cb).toHaveBeenCalledTimes(2)
  })

  it('should call callback on toggleWith', () => {
    const cb = vi.fn()
    const [, { toggleWith }] = useToggle('off', 'on', cb)

    toggleWith('on')
    expect(cb).toHaveBeenCalledWith('on')
    expect(cb).toHaveBeenCalledTimes(1)
  })
})
