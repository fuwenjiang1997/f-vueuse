import { describe, expect, it, vi } from 'vitest'

import { useWithLoading } from '../index'

describe('useWithLoading', () => {
  it('should initialize with isLoading false', () => {
    const [, isLoading] = useWithLoading(done => {
      done()
    })
    expect(isLoading.value).toBe(false)
  })

  it('should set isLoading to true when handler is called', async () => {
    const [handler, isLoading] = useWithLoading(done => {
      setTimeout(done, 100)
    })

    expect(isLoading.value).toBe(false)
    const promise = handler()
    expect(isLoading.value).toBe(true)

    await promise
    expect(isLoading.value).toBe(false)
  })

  it('should call fn with done callback and args', async () => {
    const fn = vi.fn((done, a, b) => {
      done()
    })
    const [handler, isLoading] = useWithLoading(fn)

    await handler(1, 2)

    expect(fn).toHaveBeenCalledTimes(1)
    expect(fn).toHaveBeenCalledWith(expect.any(Function), 1, 2)
    expect(isLoading.value).toBe(false)
  })

  it('should handle async operation', async () => {
    const [handler, isLoading] = useWithLoading(done => {
      setTimeout(done, 50)
    })

    const promise = handler()
    expect(isLoading.value).toBe(true)

    await promise
    expect(isLoading.value).toBe(false)
  })

  it('should support multiple sequential calls', async () => {
    const [handler, isLoading] = useWithLoading(done => {
      setTimeout(done, 10)
    })

    await handler()
    expect(isLoading.value).toBe(false)

    await handler()
    expect(isLoading.value).toBe(false)
  })

  it('should width result', async () => {
    const [handler, isLoading] = useWithLoading((done, param) => {
      setTimeout(() => {
        done(`hello ${param}`)
      }, 10)
    })

    const res = await handler('li')
    expect(isLoading.value).toBe(false)
    expect(res).toBe('hello li')
  })
})
