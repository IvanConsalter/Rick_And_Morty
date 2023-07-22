import { CharacterService } from './../../shared/services/character.service';
import { Component, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/shared/models/character.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  arrayCharacter: Array<ICharacter> = [];

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.getAllCharacter();
  }

  getAllCharacter(): void {
    this.characterService.getAll()
      .subscribe( (res) => {
        this.arrayCharacter = res.results;
      },
      (error) => {
        console.error(error);
      });
  }

}
