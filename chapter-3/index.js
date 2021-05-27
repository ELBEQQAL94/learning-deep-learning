// A simple neural network making a prediction
function simple_neural_network(input) {
    const WEIGHT = 0.1;
    const predection = input * WEIGHT;
    return predection;
};

const number_of_toes = [8.5, 9.5, 10];
const input = number_of_toes[0];
const predection = simple_neural_network(input);

console.log("predection: ", predection);