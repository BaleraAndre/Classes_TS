import Pessoa from "./classes/pessoa";
import Endereco from "./classes/endereco";
import Carro from "./classes/carro";
import Animal from "./classes/animal";
import Console from "./classes/console";

const animal1 = new Animal("toto" , "cachorro"); 
const console1 = new Console("one","xbox");
const carro1 = new Carro("fusca", "vw");
const endereco1 = new Endereco("alameda", "salvador", 1574);
const pessoa1 = new Pessoa("andre", 28, [endereco1]);

pessoa1.adicionarAnimal(animal1);
pessoa1.adicionarCarro(carro1);
pessoa1.adicionarEndereco(endereco1);
pessoa1.adicionarConsole(console1);

console.log(pessoa1.toString());







