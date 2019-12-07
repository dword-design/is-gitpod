import { spawn } from 'child_process'
import getModifiedPath from './get-modified-path'
import expect from 'expect'

export const it = async () => {
  let stdout
  try {
    await spawn('is-gitpod', [], { env: { ...process.env, PATH: getModifiedPath() }, capture: ['stdout'] })
  } catch (error) {
    stdout = error.stdout
  }
  expect(stdout).toEqual('')
}

export const timeout = 5000
