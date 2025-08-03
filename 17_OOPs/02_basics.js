class Computer{
    constructor(name,model){
        this.name = name;
        this.model = model;
    }
    greet(){
        console.log(`Im computer of model: ${this.model}`);
    }
}
const comp = new Computer("DELL","MSER34");
comp.greet();

const comp1 = new Computer("LENOVO","ER16");
comp1.greet();
