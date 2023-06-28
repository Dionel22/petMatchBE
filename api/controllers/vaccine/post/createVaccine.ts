import { Vaccine } from "../../../models/Vaccine";

export const createVaccine = async (vaccine: Vaccine) => {
  if (!vaccine.name || vaccine.name === "")
    throw new Error("The vaccine must have a name");
  return { message: "success", vaccine: await Vaccine.create(vaccine) };
};
