import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-card-character',
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.scss'],
})
export class CardCharacterComponent implements OnInit {
  @Input() urlCharacter: string = '';
  character!: Character;

  constructor(private characterService: CharactersService) {}
  ngOnInit(): void {
    this.characterService.getCharacter(this.urlCharacter).subscribe((data) => {
      this.character = data;
      console.log(this.character.status);
    });
  }
}
