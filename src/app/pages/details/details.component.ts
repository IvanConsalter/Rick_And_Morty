import { CharacterService } from './../../shared/services/character.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(
    private characterService: CharacterService
  ) { }

  ngOnInit(): void {
    this.characterService.getById(1).subscribe(
      (res) => {
        console.log(res);

      },
      (error: HttpErrorResponse) => {
        console.error(error);

      }
    )
  }

}
