// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

type Dog = {
  name: string;
  age: number;
  nicknames: string[];
  isFluffy: boolean;
  size: "tiny" | "small" | "medium" | "large" | "chonky";
};

const MAX_DOG_AGE = 20;

const generateDogs = (amount: number): Dog[] => {
  const names = ["Fluffy", "Bella", "Mel", "Bob", "Bob Jon", "Courage"];
  // const ages = Math.floor(Math.random() * MAX_DOG_AGE + 1);
  const nicknames = ["Cutie", "Stinky", "Doggie", "Pain in the ass"];
  // const isFluffy = [true, false];
  const sizes: Dog["size"][] = ["tiny", "small", "medium", "large", "chonky"];

  const dogs: Dog[] = [];
  const randomWithinRange = (range: number): number => {
    return Math.floor(Math.random() * range + 1);
  };
  for (let i = 0; i < amount; i++) {
    const randomDog: Dog = {} as Dog;
    // randomDog.age = Math.floor(Math.random() * MAX_DOG_AGE + 1);
    randomDog.isFluffy = Math.floor(Math.random() * 2) === 0 ? true : false;
    randomDog.age = randomWithinRange(MAX_DOG_AGE);
    randomDog.nicknames = [nicknames[randomWithinRange(nicknames.length - 1)]];
    randomDog.size = sizes[randomWithinRange(sizes.length - 1)];
    randomDog.name = names[randomWithinRange(names.length - 1)];
    dogs.push(randomDog);
  }

  return dogs;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Dog[]>) {
  res.status(200).json(generateDogs(20));
}
