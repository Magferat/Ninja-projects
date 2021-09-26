import './App.css';
import Header from './Components/Header/Header';
import Team from './Components/Team/Team';

function App() {
  return (
    <div>
      <Header></Header>
      <Team></Team>
    </div>
  );
}

export default App;

/* How it workes :

          two main components are Headed and Team.
          <Header> provides all css, js, html of heading part
          <Team> handel main works of this project.
          <Team> fetch all data about NInja Team from JSON api , run a ...map function on them.
          .map function return data about Ninjas separately.


         then i call <Ninja> components and sent data as props.

         next i call <coreTeam> componets to show selected ninjas.
         */
