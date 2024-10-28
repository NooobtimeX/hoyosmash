// src/types.ts

export interface BaseCharacter {
  id: number;
  name: string;
  img: string[];
  specialty?: string;
  faction?: string;
  attribute?: string;
}

export interface Game {
  id: string;
  title: string;
  description: string;
  imgSrc: string;
}
