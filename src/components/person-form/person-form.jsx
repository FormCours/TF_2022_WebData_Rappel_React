import { useId, useRef, useState } from 'react';
import style from './person-form.module.css';
import PropTypes from 'prop-types';


const PersonForm = ({ onResult }) => {

    // Génération d'un id à utiliser pour les id du formulaire
    const id = useId(); // Exemple de resultat => :r1:

    // Conposant controller => Liaison entre le state et le formulaire
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    // Création d'une "ref" pour manipuler l'input (Imperatif)
    const inputFirstname = useRef();

    // Gestion du formulaire
    const handlePersonSubmit = (e) => {
        e.preventDefault();

        // Envoyer via la props "onResult"
        onResult({
            firstname,
            lastname
        });

        // Modification du focus
        inputFirstname.current.focus();

        // Reset le formulaire
        handlePersonReset();
    };

    const handlePersonReset = () => {
        setFirstname('');
        setLastname('');
    };

    return (
        <>
            <h2>Ajouter une personne</h2>
            <form className={style["my-form"]} onSubmit={handlePersonSubmit} onReset={handlePersonReset}>
                <div>
                    <label htmlFor={id + 'firstname'}>Prénom</label>
                    <input id={id + 'firstname'} type='text'
                        ref={inputFirstname}
                        value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                </div>
                <div>
                    <label htmlFor={id + 'lastname'}>Nom</label>
                    <input id={id + 'lastname'} type='text'
                        value={lastname} onChange={(e) => setLastname(e.target.value)} />
                </div>
                <div>
                    <button type='submit'>Ajouter</button>
                    <button type='reset'>Effacer</button>
                </div>
            </form>
        </>
    );
};

// Définition du typage des props
PersonForm.propTypes = {
    onResult: PropTypes.func
};

// Définition des valeurs par default des props
PersonForm.defaultProps = {
    onResult: () => { }  // NOOP (No Operation)
};


export default PersonForm;