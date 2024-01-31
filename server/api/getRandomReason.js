import { readFile } from 'fs';

export default async function getRandomReason() {
    readFile('public/reasons.txt', (err, data) => {
        if(err) throw err;
        console.log(data);
        return data;
    })
}