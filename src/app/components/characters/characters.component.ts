import { Component, OnInit } from '@angular/core';
import { Api } from '../../models/api.model';
import { Character } from '../../models/character.model';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  api!: Api;
  characters: Character[] = [];
  constructor(private characterService: CharactersService) {}

  ngOnInit(): void {
    this.characterService.getAllCharacters().subscribe((data) => {
      this.api = data;
      this.characters = this.api.results;
      console.log(this.characters);
    });
  }
}
