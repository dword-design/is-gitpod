import { spawn } from 'child-process-promise'
import getModifiedPath from './get-modified-path'
import withLocalTmpDir from 'with-local-tmp-dir'
import { outputFile, chmod } from 'fs-extra'

export const it = () => withLocalTmpDir(async () => {
  await outputFile('gp', '')
  await chmod('gp', '755')
  const { stdout } = await spawn('is-gitpod', [], { env: { ...process.env, PATH: `${getModifiedPath()}:${process.cwd()}` }, capture: ['stdout'] })
  expect(stdout).toEqual('')
})

export const timeout = 5000
