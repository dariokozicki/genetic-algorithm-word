import Population from './Population.js'
import Word from './Word.js'

const target = "Hola guachin, todo tranqui?"
const sizePopulation = 1000;
const mutationRate = 0.01;

let population = new Population(Population.getRandomDNAList(target, sizePopulation), mutationRate, target);

let generations = 1;
let fittest;

while ((fittest = population.getFittestDNA(), fittest.fitness(target)) != target.length){
    population.replaceDNAList()
    console.log("Generation: " + generations++);
    console.log(fittest.toString(target))
}

console.log("\nLa palabra ganadora es : " + fittest.toString(target))
