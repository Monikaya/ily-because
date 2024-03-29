import * as path from 'node:path';
import * as fs from 'node:fs';

export default defineEventHandler(async (event) => {
  const filePath = path.join(process.cwd(), 'public', 'reasons.txt')
  const blob = await fs.promises.readFile(filePath, 'utf-8');
  const reasonArr = await blob.split(/\r?\n|\r|\n/g);

  return reasonArr;
})
