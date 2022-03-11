import peerDepsExternal from 'rollup-plugin-peer-deps-external' //不编译peer里面的包
import resolve from '@rollup/plugin-node-resolve' //直接使用模块名称导入模块
import commonjs from '@rollup/plugin-commonjs' //转换commonjs
import typescript from 'rollup-plugin-typescript2' //ts支持
import { terser } from 'rollup-plugin-terser' //压缩代码
import json from 'rollup-plugin-json' //从.json中获取数据
import dts from 'rollup-plugin-dts' //汇总.d.ts定义文件

export function rollupConfig({
    input = 'src/index.ts',
    outputFileMain,
    outputFileModule,
    moduleName = 'WDKX',
}) {
    return [
        {
            input,
            output: [
                {
                    file: outputFileMain,
                    format: 'cjs',
                    sourcemap: true,
                    name: moduleName,
                },
                {
                    file: outputFileModule,
                    format: 'esm',
                    sourcemap: true,
                },
            ],
            plugins: [
                json(),
                peerDepsExternal(),
                terser(), //对模块代码进行压缩
                resolve(), //直接使用模块名称导入模块
                commonjs(), //加载CommonJS模块
                typescript({
                    useTsconfigDeclarationDir: true,
                }),
            ],
        },
        {
            input: 'lib/types/index.d.ts',
            output: [{ file: 'lib/index.d.ts', format: 'esm' }],
            plugins: [dts()],
        },
    ]
}
