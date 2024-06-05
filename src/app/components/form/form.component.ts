import { Component } from '@angular/core';
import { CepService } from 'src/app/services/cep.service';
import { CepResponse } from 'src/app/interface/cep-response';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  logradouro: string = '';
  bairro: string = '';
  localidade: string = '';
  uf: string = ''; 
  resultadoDisponivel: boolean = false;
  loading: boolean = false;
  cepInvalido: boolean = false;

  constructor(private cepService: CepService) {}

  resetaCampos() {
    this.logradouro = '';
    this.bairro = '';
    this.localidade = '';
    this.uf = '';
    this.resultadoDisponivel = false;
    this.cepInvalido = false;
  }

  buscandoCep(cep: string): void {
    this.resetaCampos()
    this.loading = true;

    const cepLimpo = cep.replace(/\D/g, ''); // removendo caracteres não numéricos

    if(cepLimpo.length !== 8) {
      this.cepInvalido = true;
      this.loading = false;
      return;
    }

    this.cepService.obterCep(cep).subscribe(
      (data: CepResponse) => {
        if (this.isValidCepResponse(data)) {
          this.logradouro = data.logradouro
          this.bairro = data.bairro
          this.localidade = data.localidade
          this.uf = data.uf
          this.hideLoaderAfterDelay();
        } else {
          this.loading = false;
          this.cepInvalido = true;
        }
      },
      (error) => {
        console.log('sem resultados')
        this.loading = false;
        this.cepInvalido = true;
      }
    );
  }

  isValidCepResponse(data: CepResponse): boolean {
    return !!(data.logradouro || data.bairro || data.localidade || data.uf);
  }

  hideLoaderAfterDelay(): void {
    setTimeout(() => {
      this.loading = false;
      this.resultadoDisponivel = true;
    }, 1500);
  }

}
