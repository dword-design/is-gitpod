import { filter, join, split } from '@dword-design/functions'
import { execa } from 'execa'
import fs from 'fs-extra'
import { createRequire } from 'module'
import withLocalTmpDir from 'with-local-tmp-dir'

const _require = createRequire(import.meta.url)

const pathDelimiter = process.platform === 'win32' ? ';' : ':'

const getModifiedPath = () =>
  [
    ...(process.env.PATH
      |> split(pathDelimiter)
      |> filter(path => !['/bin', '/usr/bin'].includes(path))),
    process.cwd(),
  ] |> join(pathDelimiter)

export default {
  'inside gitpod': () =>
    withLocalTmpDir(async () => {
      const filename = `gp${process.platform === 'win32' ? '.bat' : ''}`
      await Promise.all([
        fs.outputFile(filename, '', { mode: '755' }),
        fs.outputFile('package.json', JSON.stringify({ type: 'module' })),
      ])

      const output = await execa(_require.resolve('./cli'), {
        all: true,
        env: { PATH: getModifiedPath() },
      })
      expect(output.all).toEqual('')
    }),
  'outside gitpod': async () => {
    let all
    try {
      await execa(_require.resolve('./cli'), {
        all: true,
        env: { PATH: getModifiedPath() },
      })
    } catch (error) {
      all = error.all
    }
    expect(all).toEqual('')
  },
}
