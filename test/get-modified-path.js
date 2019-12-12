import { split, filter, join } from '@dword-design/functions'

export default () => process.env.PATH |> split(':') |> filter(path => !['/bin', '/usr/bin'].includes(path)) |> join(':')
