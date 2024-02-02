import * as path from 'node:path';
import * as fs from 'node:fs';

export default defineEventHandler(async (event) => {
  const filePath = 'public/reasons.txt';
  const data = fs.promises.readFile(filePath, 'utf-8')
  return data
})
