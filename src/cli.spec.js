import execa from 'execa'
import withLocalTmpDir from 'with-local-tmp-dir'
import { outputFile, chmod } from 'fs-extra'
import { split, filter, join } from '@dword-design/functions'

const getModifiedPath = () => process.env.PATH |> split(':')
  |> filter(path => !['/bin', '/usr/bin'].includes(path))
  |> join(':')

export default {
  'inside gitpod': () => withLocalTmpDir(async () => {
    await outputFile('gp', '')
    await chmod('gp', '755')
    const { all } = await execa.command('is-gitpod', { env: { ...process.env, PATH: `${getModifiedPath()}:${process.cwd()}` }, all: true })
    expect(all).toEqual('')
  }),
  'outside gitpod': async () => {
    let all
    try {
      await execa.command('is-gitpod', { env: { ...process.env, PATH: getModifiedPath() }, all: true })
    } catch (error) {
      all = error.all
    }
    expect(all).toEqual('')
  },
}
