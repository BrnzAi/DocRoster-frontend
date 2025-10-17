#!/usr/bin/env node

import { copyFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const docsDir = join(process.cwd(), 'docs');
const indexPath = join(docsDir, 'index.html');
const fallbackPath = join(docsDir, '404.html');

if (!existsSync(indexPath)) {
  console.error('Expected docs/index.html to exist. Did you run "npm run build:github-pages" first?');
  process.exit(1);
}

try {
  copyFileSync(indexPath, fallbackPath);
  console.log('Created docs/404.html fallback for client-side routing.');
} catch (error) {
  console.error('Failed to copy docs/index.html to docs/404.html');
  console.error(error);
  process.exit(1);
}
