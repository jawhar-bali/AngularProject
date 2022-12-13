import { Contrat } from "./Contrat";
import { Department } from "./Department";
import { Equipe } from "./Equipe";
import { Option } from "./Option";


export class Classe {
    idClasse : number ;
    nomClasse : String ;
    prenomE : String ;
    nombreEtudiants : number;
    option:Option;
    department:Department;
    equipes:Equipe
}