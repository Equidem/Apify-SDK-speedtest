// This is the main Node.js source code file of your actor.

// Import Apify SDK. For more information, see https://sdk.apify.com/
const Apify = require('apify');

Apify.main(async () => {
    // Get input of the actor (here only for demonstration purposes).
    const input = await Apify.getInput();
    console.log('Input:');
    console.dir(input);

    const dataset = await Apify.openDataset(input["datasetId"], { forceCloud: true });
    console.time("Loading data");
    let data = await dataset.getData({ limit: 1000 });
    console.timeEnd("Loading data");
});
