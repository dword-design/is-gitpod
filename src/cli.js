#!/usr/bin/env node

import api from './index'

(async () => {
  if (!await api()) {
    process.exit(1)
  }
})()
