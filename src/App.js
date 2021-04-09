import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Navbar from './components-spec/Navbar';
import InputForm from './components-spec/InputForm';
import Source from './components-spec/Source';
//import controllers from './controllers/controllers';
//import routes from './routes/routes';
//import ToDoModel from './models/ToDoModel';

function App() {
  const [sources, setSources] = useState([clear
    ,{
      id: 1,
      name: "Presbo",
      email: "presbo@columbia.edu"
    },
    
    {
      id: 2,
      name: "John Jay Mouse",
      email: "mouse@columbia.edu"
    },
    {
      id: 3,
      name: "Water Bottle Man",
      email: "flipper@columbia.edu"
    }
  ]);

  const addSource = (source) => {
    source.id = uuid();

    setSources([...sources, source]);
  };

  const deleteSource = (id) => {
    setSources(sources.filter(source => source.id !== id));
  };

  return (
    <div className="App">
      <Navbar />
      <main>
        <InputForm
          addSource={addSource}
        />
        {
          sources.map(source => {
            return (
              <Source
                number={source.id}
                name={source.name}
                email={source.email}
                deleteSource={deleteSource}
              />
            )
          })
        }
      </main>
    </div>
  );
}

export default App;
