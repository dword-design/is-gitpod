import execa from 'execa'

export default async () => {
  try {
    await execa.command('which gp')
  } catch (error) {
    return false
  }
  return true
}
