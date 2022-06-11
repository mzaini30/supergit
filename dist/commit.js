#!/usr/bin/env node
import {question} from 'readline-sync'
import {execa} from 'execa'
import {existsSync, readFileSync, writeFileSync} from 'fs'
import {cwd} from 'process'

const storage = '/tmp/.supergit.txt'

async function main(){
	const message = question('Commit message: ')
	const {stdout: add} = await execa('git', ['add', '.'])
	const {stdout: commit} = await execa('git', ['commit', '-m', `"${message}"`])
	console.log(commit)
	if (!existsSync(storage)){
		writeFileSync(storage, '')
	}
	let data = readFileSync(storage).toString()
	data = data.split('\n').filter(x => x) // become array
	data.push(cwd())
	data = [...new Set(data)]
	data = data.join('\n')
	writeFileSync(storage, data)
}
main()