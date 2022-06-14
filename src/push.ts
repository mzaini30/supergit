#!/usr/bin/env node
import {execa} from 'execa'
import {existsSync, readFileSync, writeFileSync} from 'fs'

const storage = '/tmp/.supergit.txt'

async function main(){
	if (!existsSync(storage)){
		writeFileSync(storage, '')
	}
	let data = readFileSync(storage).toString()
	data = data.split('\n').filter(x => x) // become array
	for (let x of data){
		const push = await execa('git', ['push'], {cwd: x})
		if (push){
			console.log(`git push ${x}`)
			data = data.filter(y => y != x)
			writeFileSync(storage, data.join('\n'))
		}
	}
}
main()