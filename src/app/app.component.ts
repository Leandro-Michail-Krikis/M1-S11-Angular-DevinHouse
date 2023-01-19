import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'M1-S11-Angular-DevinHouse';
  // Ex2
  // page:string = "1";

  // mudaDePagina(id : string) {
  //   this.page = id;
  // }

  // Ex3

  arrayFotos: {url: string, description: string}[] = [
    {
      url: 'https://www.fotoregistro.com.br/subhomes/_lojas_consumer/paginas/fotos/fotos-2020/src/Img_10.png',
      description: 'Foto1',
    },
    {
      url: 'https://www.fotoregistro.com.br/subhomes/_lojas_consumer/paginas/fotos/fotos-2020/src/Img_10.png',
      description: 'Foto2',
    },
    {
      url: 'https://www.fotoregistro.com.br/subhomes/_lojas_consumer/paginas/fotos/fotos-2020/src/Img_10.png',
      description: 'Foto3',
    },
    {
      url: 'https://www.fotoregistro.com.br/subhomes/_lojas_consumer/paginas/fotos/fotos-2020/src/Img_10.png',
      description: 'Foto4',
    },
    {
      url: 'https://www.fotoregistro.com.br/subhomes/_lojas_consumer/paginas/fotos/fotos-2020/src/Img_10.png',
      description: 'Foto5',
    },
  ];
}
