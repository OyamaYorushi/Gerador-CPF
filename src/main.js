import './assets/css/style.css';
import {CPFGenerate} from './modules/cpfGenerate';

const buttonGenerate = document.querySelector('#generateCPF');
const result = document.querySelector('#result');
const newCpf = new CPFGenerate();

buttonGenerate.addEventListener('click', function(event){
    result.innerHTML = newCpf.generate();
})
