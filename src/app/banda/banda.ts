export class Banda {
  id: number;
  name: string;
  foundationYear: number;
  country: string;
  genre: string;
  description: string;
  image: string;

  constructor(id: number,
              name: string,
              foundationYear: number,
              country: string,
              genre: string,
              description: string,
              image: string) {
    this.id = id;
    this.name = name;
    this.foundationYear = foundationYear;
    this.country = country;
    this.genre = genre;
    this.description = description;
    this.image = image;
  }
}
