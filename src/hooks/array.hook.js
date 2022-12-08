import { useCallback, useState } from 'react';
import { nanoid } from 'nanoid';

// Création d'un hook (Attention, doit toujours commencer par "use")
export const useArray = () => {

    // Définition des données dans un state
    const [data, setData] = useState([]);

    // Création de fonction mémorisé avec le comportement "Add" et "Remove"
    const add = useCallback((value) => {

        const element = {
            id: nanoid(),
            ...value
        };

        setData(d => [...d, element]);
    });

    const remove = useCallback((id) => {
        setData(d => d.filter(element => element.id !== id));
    });

    // Renvoi des données et des 2 méthodes (Format libre !)
    return [data, add, remove];
}