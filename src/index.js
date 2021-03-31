import which from 'which'

export default async () => {
  try {
    await which('gp')
  } catch (error) {
    if (error.message === 'not found: gp') {
      return false
    }
    throw error
  }

  return true
}
