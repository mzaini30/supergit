import fg from 'fast-glob'
import {defineBuildConfig} from 'unbuild'

export default defineBuildConfig({
	entry: [...fg.sync('src/*.js')]
})
