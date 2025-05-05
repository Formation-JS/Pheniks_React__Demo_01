export type PersonAddress = {
  street: string;
  number: string;
  postalCode: string;
  city: string;
};

export type Person = {
  id: number;
  name: string;
  firstName: string;
  address: PersonAddress | null;
  birthDate: string | null;
};