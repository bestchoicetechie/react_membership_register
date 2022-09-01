
import './App.css';
import AddMember from './AddMember/AddMember';
import MemberList from './MemberList/MemberList';
import { useState } from 'react';
// import Card from './Card/Card';

function App() {
  const [allData, setAllData] = useState([]);
  

  const addMemberHandler = (memberInfo) =>{
    setAllData((prevData)=>{
      return [...prevData, memberInfo]
    });
  };
  
  return (
    <div >
      <AddMember onAddMember={addMemberHandler} />
      <MemberList members={allData} />
    </div>
  );
}

export default App;
