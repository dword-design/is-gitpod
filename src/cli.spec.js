import execa from 'execa'
import withLocalTmpDir from 'with-local-tmp-dir'
import { outputFile, chmod } from 'fs-extra'
import { split, filter, join } from '@dword-design/functions'

const pathDelimiter = process.platform === 'win32' ? ';' : ':'

const getModifiedPath = () => [
  ...process.env.PATH
    |> split(pathDelimiter)
    |> filter(path => !['/bin', '/usr/bin'].includes(path)),
  process.cwd(),
]
  |> join(pathDelimiter)

export default {
  'inside gitpod': () => withLocalTmpDir(async () => {
    const filename = `gp${process.platform === 'win32' ? '.bat' : ''}`
    await outputFile(filename, '')
    await chmod(filename, '755')
    console.log(getModifiedPath())
    const { all } = await execa.command('is-gitpod', {
      env: { ...process.env, PATH: getModifiedPath() },
      all: true,
    })
    expect(all).toEqual('')
  }),
  'outside gitpod': async () => {
    let all
    try {
      await execa.command('is-gitpod', {
        env: { ...process.env, PATH: getModifiedPath() },
        all: true,
      })
    } catch (error) {
      all = error.all
    }
    expect(all).toEqual('')
  },
}
