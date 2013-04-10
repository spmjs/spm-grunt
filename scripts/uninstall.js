#!/usr/bin/env node

try {
  require('spm').plugin.uninstall('grunt');
} catch(e) {}
