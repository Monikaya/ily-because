import { readFile } from 'fs';

export default async function getRandomReason() {
    readFile('public/reasons.txt', 'utf8', (err, data) => {
        if(err) throw err;
        console.log(data);
        const lines = data.split(/\r?\n/);

        lines.forEach(line => {
            console.log("Line: " + line);  
        })
        console.log(lines[1]);
        
        return lines[1];
    })
}