import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantity: HTMLInputElement;
    private inputValue: HTMLInputElement;
    private negociacoes = new Negociacoes();

    constructor () {
        this.inputData = document.querySelector('#data');
        this.inputQuantity = document.querySelector('#quantidade');
        this.inputValue = document.querySelector('#valor');
    }
    
    criaNegociacao(): Negociacao {
        const exp = /-/g;

        const date = new Date(this.inputData.value.replace(exp,','));
        const quantity = parseInt(this.inputQuantity.value);
        const value = parseFloat(this.inputValue.value);
        
        return new Negociacao(date, quantity, value);
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        negociacao.data.setDate(12);
        console.log(this.negociacoes.lista());
        this.limparFormulario();
    }

    limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantity.value = '';
        this.inputValue.value = '';

        this.inputData.focus();
    }

}