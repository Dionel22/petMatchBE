import { Vaccine } from "../../../models/Vaccine";

export const getVaccineById = async (id: string) => {
  const vaccine = await Vaccine.findByPk(id);
  if (!vaccine) throw new Error(`The vaccine with id ${id} doesn't exist`);
  return vaccine;
};
