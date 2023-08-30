import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'mis-tramites',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @Prop() tramite: any[] = [];

  @Prop() titulo: '';

  @Prop() image: "";

  @Prop() img: "";


  private getTitulo(): string {
    return this.titulo;
  }

  private getImage(): string {
    return this.image;
  }

  private getImg(): string {
    return this.img;
  }


  render() {
    return <div class='p-2 pl-2 pr-2 lg:pl-10 lg:pr-10'>
      <h1 class='text-2xl text-blue2 mt-14 font-medium'>{this.getTitulo()}</h1>
      <div class='flex items-center justify-center mt-4'>

        <div class='w-1/6 items-center flex justify-center'>
          <img src={this.getImage()} alt="flecha izquierda" class='rotate-180 cursor-pointer'></img>
        </div>

        <div class='w-5/6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {this.tramite.map(tramites => (
            <div class='border-2 rounded-md flex space-x-2 items-center border-gray2 hover:border-blue3'>
              <img src={tramites.iconoCategoria} class='h-20 w-20' alt="imagenes categoria"/>
              <p class='underline text-blue2'>{tramites.nombre}</p>
            </div>
          ))}
        </div>
        <div class='w-1/6 items-center flex justify-center'>
          <img src={this.getImg()} alt="flecha derecha" class='cursor-pointer'></img>
        </div>
      </div>
    </div>;
  }
}
