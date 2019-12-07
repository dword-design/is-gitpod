import { spawn } from 'child_process'

export default async () => {
  try {
    await spawn('which', ['gp'])
  } catch (error) {
    return false
  }
  return true
}
