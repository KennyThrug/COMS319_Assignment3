import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [pageID,setPageID] = useState(0);
  return (
    <div className="App">
      {navBar(pageID,setPageID)}
      {getPage(pageID,setPageID)}
    </div>
  );
}

function navBar(pageID,setPageID){
  return (
    <nav>
      <button onClick={() => setPageID(0)}>Get Posts</button>
      <button onClick={() => setPageID(1)}>Set Posts</button>
      <button onClick={() => setPageID(2)}>Put Post</button>
      <button onClick={() => setPageID(3)}>Delete Post</button>
    </nav>
  )
}

function getPage(pageID,setPageID){
  if(pageID == 0){
    return renderGetPage()
  }
}

function renderGetPage(){

}
function renderPostPage(){

}
function renderPutPage(){

}
function renderDeletePage(){

}

export default App;
