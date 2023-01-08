#!/usr/bin/env node

import api from './index.js'

const run = async () => {
  if (!(await api())) {
    process.exit(1)
  }
}
run()
