import { Person } from '../../@types/people';

// ↓ Composant affichant la list
type PeopleListProps = {
  people: Person[];
};
export default function PeopleList({ people }: PeopleListProps) {

  return (
    <>
      <h2>Liste des personnes</h2>
      <div>
        {people.map(person => <PeopleListItem key={person.id} {...person} />)}
        {people.length === 0 && (
          <p>Aucun element</p>
        )}
      </div>
    </>
  );
};


// ↓ Type basé sur "Person" pour pouvoir le customiser pour le composant
type PeopleListItemProps = Person & {};
function PeopleListItem({ firstName, address, birthDate, name }: PeopleListItemProps) {

  return (
    <article>
      <p>{firstName} {name}</p>
      {address && (
        <p>{address.street} {address.number}, {address.postalCode} {address.city}</p>
      )}
      <p>{birthDate}</p>
    </article>
  );
}