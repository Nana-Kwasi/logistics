import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Router  from './Navigation/Router';
import { getFirestore } from "firebase/firestore";
import app from './Firebase/Config';


function App() {

  const db = getFirestore(app);

  return (
    <div>
      <Router />
    </div>
  );
};

export default App;