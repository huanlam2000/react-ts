import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList/AddToList';
import List from './components/List/List'

export interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string,
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      age: 25,
      url: "https://nad.com.vn/wp-content/uploads/2021/02/nhung-con-so-an-tuong-trong-su-nghiep-cua-huyen-thoai-kobe-bryant-nhung-con-so-an-tuong-trong-su-nghiep-cua-huyen-thoai-kobe-bryant-1.jpg",
      note: "super handsome boy"
    }
  ])

  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
