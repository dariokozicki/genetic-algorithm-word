import Word from './Word.js'

class Population {
    constructor(DNAList, mutationRate, target){
        this.DNAList = DNAList;
        this.mutationRate = mutationRate;
        this.target = target;
    }

    static getRandomDNAList(target, amount){
        return Array.from({ length: amount }, (_, index) => 
            new Word(
                Array.from({ length: target.length }, (_, i) => 
                    Word.randomChar()
                ).join('')
            )
        );
    }

    replaceDNAList(){
        let geneticPool = this.DNAList
            .flatMap((word) => 
                !word ? [] :  
                Array.from({length:word.fitness(this.target)}, (theWord, index) => {
                    let newWord = new Word(word.getValue())
                    return newWord;
                })
            )
        this.DNAList = this.DNAList.map(_ => {
            const parent1 = geneticPool[Math.floor(Math.random()*geneticPool.length)]
            const parent2 = geneticPool[Math.floor(Math.random()*geneticPool.length)]
            const newWord = parent1.combineWith(parent2);
            newWord.mutate(this.mutationRate)
            return newWord;
        })
    }

    getFittestDNA(){
        //console.log(this.DNAList)
        return this.DNAList.sort((w1,w2) => w2.fitness(this.target) - w1.fitness(this.target))[0];
    }

    getDNAList(){
        return this.DNAList
    }
}


export default Population