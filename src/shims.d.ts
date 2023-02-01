/*
 * @Description: 
 * @Author: zhaohaohua@bytegreen.cn
 * @Date: 2023-01-30 10:32:28
 * @LastEditors: zhaohaohua@bytegreen.cn
 * @LastEditTime: 2023-01-30 11:07:17
 */
import type { AttributifyOptions } from '@unocss/preset-attributify/dist'

declare module 'react' {
  interface HTMLAttributes<T> extends AttributifyOptions {}
}