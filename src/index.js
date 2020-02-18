import which from 'which'

export default async () => {
  try {
    await which('gp')
  } catch (error) {
    return false
  }
  return true
}
