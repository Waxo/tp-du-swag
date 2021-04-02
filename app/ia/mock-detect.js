const detect = str => ({
    bbox: [Math.random(),Math.random(),Math.random(),Math.random()],
    prediction: (['dog', 'cat', 'bear']).sort(() => Math.random() - 0.5)[0]
})

module.exports = {detect};