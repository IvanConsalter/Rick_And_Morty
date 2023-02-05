import { CharacterService } from './../../shared/services/character.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ICharacter } from 'src/app/shared/models/character.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  character: ICharacter;

  constructor(
    private characterService: CharacterService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    if(id) {
      this.loadCharacter(id);
    }
  }

  loadCharacter(id: number): void {
    this.characterService.getById(id).subscribe(
      (res) => {
        this.character = res;
      },
      (error: HttpErrorResponse) => {
        console.error(error);
      }
    )
  }

}
