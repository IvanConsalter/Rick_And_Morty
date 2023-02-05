import { ICharacter } from "./character.model";

export interface HttpResult {
  info: Info;
  results: Array<ICharacter>;
}

interface Info {
  count: number;
  next: string;
  prev: string;
  pages: number;
}
