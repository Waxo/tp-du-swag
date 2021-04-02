require('@tensorflow/tfjs-node-gpu');
const cocoSsd = require('@tensorflow-models/coco-ssd');


const model_ = cocoSsd.load();

const detect = (x) => model.detect(x)

module.exports = {detect}
