import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10,
  }];

  //Va a emitir el borrado de un elemento
  @Output() //para poder emitir un evento, el cual se define más abajo
  public onDelete: EventEmitter<string> = new EventEmitter();



  onDeleteCharacter( id?: string ): void {
    //Emitimos el ID del personaje a borrar
    if(!id) return;  //Si no se pasa el ID, no hace nada

    this.onDelete.emit(id); //Solo se hace si se pasa el ID

  }

}
