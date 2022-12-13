import { Contrat } from "./Contrat";
import { Department } from "./Department";
import { Equipe } from "./Equipe";
import { Option } from "./Option";
import { TypeP } from "./TypeP";


export class Projet {
    idProjet : number ;
    nomProjet : String ;
    typeProjet:TypeP;
    department:Department;
    equipes:Equipe
}