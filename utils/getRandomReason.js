// CURRENTLY UNUSED, DELETE B4 MERGE

async function pullFromAPI() {
    const penis = await fetch("/api/getReason")
        .then((response) => response.json());
    return penis;
}

export default async function getRandomReason() {
    // Fill me out l8r
    // use '/api/getReason', it's @ ~/server/api/getReason

    const penis = await pullFromAPI();
    console.log(penis);
    return penis;
}