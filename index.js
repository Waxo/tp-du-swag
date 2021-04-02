const Bromise = require('bluebird');
const R = require('ramda');
const {detect} = require("./app/ia/mock-detect");
const {readJpg} = require("./app/filesystem");

const main = async () => {
    const imgList = await Bromise.map(
        ['./dog.jpg', './panda.jpg', './little-red-panda.jpg'],
        readJpg
    );

    const predictions = await  Bromise.map(imgList, detect);

    console.log('Predictions: ');
    console.log(R.flatten(predictions));
};

main();