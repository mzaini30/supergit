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
		const {stdout} = await execa('git', ['push'], {cwd: x})
		console.log(stdout)
	}
}
main()