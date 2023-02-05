import { Location } from "./location.model";
import { Origin } from "./origin.model";

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  url: string;
  location: Location;
  origin: Origin;
  episode: Array<string>;
}
