import { Person } from '../@types/people';
import peopleData from '../data/people.json';

const peopleService = {

  getAll: () => {
    //! Utilisation de Fake data. Cas réel -> Call vers une API
    return peopleData as Person[];
  },

  getById: (id: number) => {
    //! Utilisation de Fake data. Cas réel -> Call vers une API
    return peopleData.find(person => person.id === id) as Person | undefined;
  }

};

export default peopleService;
