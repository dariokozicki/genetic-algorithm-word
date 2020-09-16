class Word {
    constructor(value){
        this.value = value
    }

    fitness = (target) => {
        return [...target]
            .map((char, index) => [...this.value][index] === char ? 1 : 0)
            .reduce((acc, elem) => acc + elem)
    }

    mutate(mutationRate){
        this.value = [...this.value].map(elem => Math.random() < mutationRate ? Word.randomChar() : elem).join('')
    }

    static randomChar(){
        return String.fromCharCode(
            Math.floor(
                32 + Math.random() * 90
            )
        )
    }

    getValue(){
        return this.value;
    }

    combineWith(word){
        const middle = Math.floor(Math.random()*this.value.length);
        return new Word(this.value.substring(0, middle) + word.getValue().substring(middle))
    }

    toString(target){
        return this.getValue() + " Fitness: " + this.fitness(target) + " Target:" + target.length
    }
}


export default Word