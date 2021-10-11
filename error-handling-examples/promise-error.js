const doBuggyWork = () => {

    throw new Error('no coffee error');

}

doBuggyWork()
    .then(() => console.log(`then of doing something`))
    // why didn't we end up here ?
    .catch(err => console.log(`In catch of the promise block ${err}`));

