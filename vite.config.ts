/** @type {import('vite').UserConfig} */
/*
 * @Description: 
 * @Author: zhaohaohua@bytegreen.cn
 * @Date: 2023-01-16 16:52:37
 * @LastEditors: zhaohaohua@bytegreen.cn
 * @LastEditTime: 2023-01-31 09:20:05
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import { presetAttributify,presetUno } from "unocss"
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'
import { resolve } from 'path';

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
            rules: [
                // ['text-e']
            ]
        }),
        react(),
    ]
})
