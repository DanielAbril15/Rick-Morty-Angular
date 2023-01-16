import { Component, OnInit } from '@angular/core';
import { Api } from '../../models/api.model';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  api!: Api;
  urlCharacters = [];
  urlCharacter: string = '';
  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.locationService.getLocation().subscribe((data) => {
      this.api = data;
      this.urlCharacters = this.api.residents;
    });
  }
}
