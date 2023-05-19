import { Dog } from "@/pages/utils/types/types";
import { Dispatch, SetStateAction, FormEvent } from "react";
import { useState } from "react";

const AddDogForm: React.FC<{ setDogs: Dispatch<SetStateAction<Dog[]>> }> = (props) => {
  const { setDogs } = props;
  const [name, setName] = useState<string>("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDogs(
      (old) =>
        [
          {
            name: name,
            nicknames: ["luke"],
            isFluffy: true,
            age: 7,
            size: "chonky",
          } as Dog,
          ...old,
        ] as Dog[]
    );
  };
  return (
    <>
      {" "}
      <form onSubmit={handleSubmit}>
        <label>
          Name of Dog
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <input type="submit" value="Submit form" />
      </form>
    </>
  );
};

export default AddDogForm;
