import { filter, join, split } from '@dword-design/functions'
import execa from 'execa'
import { chmod, outputFile } from 'fs-extra'
import withLocalTmpDir from 'with-local-tmp-dir'

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
      await outputFile(filename, '')
      await chmod(filename, '755')
      const output = await execa(require.resolve('./cli'), {
        all: true,
        env: { PATH: getModifiedPath() },
      })
      expect(output.all).toEqual('')
    }),
  'outside gitpod': async () => {
    let all
    try {
      await execa(require.resolve('./cli'), {
        all: true,
        env: { PATH: getModifiedPath() },
      })
    } catch (error) {
      all = error.all
    }
    expect(all).toEqual('')
  },
}
