import React from 'react';
import Contactlist from './components/contactslist';
import Newgroup from './components/newgroupform';
import Messageform from './components/messageform';
import Messagelist from './components/messagelist';
import './App.css';
function App() {
  return (
    <div className="App">
      <div className="contact">
      <Contactlist/>
      <Newgroup/>
      </div>
     <div className="conversation">
       <div>
       <Messagelist/>  
       </div>
       <div>
       <Messageform/>
       </div>
      
     </div>
      
    </div>
  );
}

export default App;
