#include <stdio.h>
#include <stdlib.h>

function fetchData() : Promise<unknown> { Show usages new *
    return new Promise( executor: (resolve, reject) : void => {
    setTimeout( handler: () => resolve( value: 'Data fetched! Student Name: Vuth Vichet'), timeout: 1000);
    });
}

async function fetchAndProcessData() : Promise<void> { Show usages new *
    try {
    // Replace 'Sok Dara' with your full name
    console.log('Student Name: Vuth Vichet');
    console.log('Using async/await:');
    const data = await fetchData();
    console.log(data);
    const processed : string = 'Processing data...';
    console.log(processed);
    } catch (error) {
    console.error('Error:', error);
    }
}
