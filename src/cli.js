#!/usr/bin/env node

import api from '.'

(async () => {
  if (!await api()) {
    process.exit(1)
  }
})()
