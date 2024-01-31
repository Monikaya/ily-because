import { readFile } from 'fs';

export default defineEventHandler(() =>
readFile('public/reasons.txt', 'utf8', (err, data) => {
        if(err) throw err;
        const lines = data.split(/\r?\n/);

        lines.forEach(line => {
            // console.log("Line: " + line);  
        })
        
        return { "reason": "penis" };
    })
)