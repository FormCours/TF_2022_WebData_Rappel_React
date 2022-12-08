import PropTypes from 'prop-types';

const PersonListItem = ({ id, firstname, lastname, onDelete }) => (
    <li>
        <span>{firstname} {lastname}</span>
        <button onClick={() => onDelete(id)} >X</button>
    </li>
);

const PersonList = ({ people, onDeletePerson }) => {

    const peopleRender = people.map(person => (
        <PersonListItem {...person}
            key={person.id}
            onDelete={onDeletePerson}
            />
    ));

    return (
        <>
            <h2>Liste des personnes</h2>
            <ul>
                {peopleRender}
            </ul>
        </>
    );
};

// Typage des props => Array de personne
PersonList.propTypes = {
    people: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        firstname: PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired
    })),
    onDeletePerson: PropTypes.func
};

PersonList.defaultProps = {
    people: [],
    onDeletePerson: () => {}
};


export default PersonList;