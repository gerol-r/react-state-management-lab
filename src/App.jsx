import { useState } from 'react'
import './App.css'
import ZombieFighter from '../components/ZombieFighters/ZombieFighters.jsx';
import Team from '../components/Team/Team.jsx';

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100); 
  const [zombieFighters, setZombieFighters] = useState([

    {
      id: 1,
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "src/assets/Asset 7.jpg",
    },
    {
      id: 2,
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "src/assets/Asset 2.jpg",
    },
    {
      id: 3,
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "src/assets/Asset 3.jpg",
    },
    {
      id: 4,
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "src/assets/Asset 5.jpg",
    },
    {
      id: 5,
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "src/assets/Asset 4.jpg",
    },
    {
      id: 6,
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "src/assets/Asset 10.jpg",
    },
    {
      id: 7,
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "src/assets/Asset 8.jpg",
    },
    {
      id: 8,
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "src/assets/Asset 6.jpg",
    },
    {
      id: 9,
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "src/assets/Asset 1.jpg",
    },
    {
      id: 10,
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "src/assets/Asset 9.jpg",
    },
  ]);

const handleAddFighter = (fighter) =>{
   if (money >= fighter.price) {
    setMoney(money - fighter.price);

    setTeam([...team, fighter]);

    setZombieFighters(zombieFighters.filter((f) => f.id !== fighter.id));}
    else{
      alert(`Not enough money. You need at least ${fighter.price - money} more dollars.`)
    }
  };

  const handleRemoveFighter = (fighter) => {
    setZombieFighters([...zombieFighters, fighter]);

    setTeam(team.filter((f) => f.id !== fighter.id));

    setMoney(money + fighter.price);
  };

  const totalStrength = team.reduce((sum, fighter) => sum + fighter.strength, 0);
  const totalAgility = team.reduce((sum, fighter) => sum + fighter.agility, 0);

  return (
    <>
    <h1>Zombie Fighters</h1>
    <p>Money: ${money}</p>
    <p>Team Strength: {totalStrength}</p>
    <p>Team Agility: {totalAgility}</p>
  
    <h2>Team</h2>
    <ul>
      {team.map((fighter)=>(
        <Team
        {...fighter}
        handleRemoveFighter={handleRemoveFighter}
        />
      ))}
      
    </ul>
    <h2>Zombie Fighters</h2>
    <ul>
      {zombieFighters.map((zombieFighter)=>(
        <ZombieFighter
        {...zombieFighter}
        handleAddFighter={handleAddFighter}
        />
      ))}
      
    </ul>
    </>
  );
}

export default App
