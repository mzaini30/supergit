#!/usr/bin/env node
import {question} from 'readline-sync'
import {execa} from 'execa'

async function main(){
	const message = question('Commit message: ')
	const {stdout: add} = await execa('git', ['add', '.'])
	const {stdout: commit} = await execa('git', ['commit', '-m', `"${message}"`])
	console.log(commit)
}
main()