import './App.css';
import PersonForm from './components/person-form/person-form';
import PersonList from './components/person-list/person-list';
import WeatherDemo from './containers/weather-demo/weather-demo';
import { useArray } from './hooks/array.hook';

function App() {

  const [people, addPeople, removePeople] = useArray();

  const handleNewPerson = (person) => {
    console.log('Add ' + person.firstname);
    addPeople(person);
  };

  const handleDeletePerson = (id) => {
    console.log('Remove ' + id);
    removePeople(id);
  };

  return (
    <div className="App">
      <PersonForm onResult={handleNewPerson} />
      <PersonList people={people}
        onDeletePerson={handleDeletePerson} />
      <hr />
      <WeatherDemo />
    </div>
  );
}

export default App;
