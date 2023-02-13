/** @type {import('vite').UserConfig} */
/*
 * @Description: 
 * @Author: zhaohaohua@bytegreen.cn
 * @Date: 2023-01-16 16:52:37
 * @LastEditors: zhh_e
 * @LastEditTime: 2023-02-13 11:55:58
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import { presetAttributify,presetUno } from "unocss"
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'
import { resolve } from 'path';
import { viteMockServe } from "vite-plugin-mock"

// https://vitejs.dev/config/
export default defineConfig({
    resolve:{
        alias:[
            { find: '@', replacement: resolve(__dirname, 'src') },
            { find: 'components', replacement: resolve(__dirname, 'src/components')}
        ]
    },
    plugins: [
        UnoCSS({
            presets: [
                presetAttributify({ /* preset options */}),
                presetUno(),
            ],
            transformers: [
                transformerAttributifyJsx(), // <--
            ],
        }),
        react(),
        viteMockServe({
            mockPath: './src/mock',
            localEnabled: true
        })
    ]
})
