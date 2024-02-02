import * as path from 'node:path';
import * as fs from 'node:fs';

export default defineEventHandler(async (event) => {
  const filePath = 'public/reasons.txt';
  const list = await fs.promises.readFile(filePath, 'utf-8')
  const thing = await list.split(/\r?\n|\r|\n/g);
  
  return thing
})
