import { rollupConfig } from '../../rollup'
import pkg from './package.json'

export default rollupConfig({
    outputFileMain: pkg.main,
    outputFileModule: pkg.module,
})
