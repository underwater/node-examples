class NotEnoughCoffeeError extends Error {
    //...
}

process.on('uncaughtException', err => {
    console.error('There was an uncaught error', err)
    process.exit(1) //mandatory (as per the Node.js docs)
});

throw new NotEnoughCoffeeError();

try {
    throw new Error()
} catch (error) {

    if (error instanceof NotEnoughCoffeeError) {
        console.log(`no coffee error`);
    } else if (error instanceof Error) {
        console.log(`other error`);
    }
}

