// 传入的函数类型：第一个参数是 done 回调，剩余参数是用户自定义参数
export type UseLoadingFn<T extends any[] = any[]> = (done: (res?: any) => void, ...args: T) => void

// 返回的 handler 函数类型：只接收用户自定义参数
export type UseLoadingHandler<T extends any[] = any[]> = (...args: T) => Promise<any>

// hook 返回类型元组
export type UseLoadingReturn<T extends any[] = any[]> = [UseLoadingHandler<T>, { value: boolean }]
