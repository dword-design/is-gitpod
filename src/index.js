import { spawn } from 'child-process-promise'

export default async () => {
  try {
    await spawn('which', ['gp'])
  } catch (error) {
    return false
  }
  return true
}
