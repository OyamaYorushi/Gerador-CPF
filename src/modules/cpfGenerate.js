import { Validator } from "./validator";

export class CPFGenerate{

    randomNumber(min = 100000000, max = 999999999){
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    cpfMask(cpf){
        return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9, 11)}`;
    }

    generate(){
        const noDigit = this.randomNumber();
        const digitOne = Validator.generateDigit(noDigit);
        const digitTwo = Validator.generateDigit(noDigit + digitOne);
        const newCpf = noDigit + digitOne + digitTwo;
        return this.cpfMask(newCpf);
    }

}
