import { Component, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/shared/models/character.model';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  arrayCharacter: Array<ICharacter> = [];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getAllCharacter();
  }

  getAllCharacter(): void {
    this.homeService.getAllCharacter()
      .subscribe( (res) => {
        this.arrayCharacter = res.results;
      },
      (error) => {
        console.error(error);
      });
  }

}
