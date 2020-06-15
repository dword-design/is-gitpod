#!/usr/bin/env node

import api from '.'

const run = async () => {
  if (!(await api())) {
    process.exit(1)
  }
}
run()
