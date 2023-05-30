import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Touch events demo
        </p>
      </header>
      <main className='App-content'>
        <div className='App-content__draggable' draggable>Drag me</div>
        <div className='App-content__droppable-wrapper'>
          <p>Drop here</p>
          <div className='App__droppable-wrapper__container'></div>
        </div>
      </main>
    </div>
  );
}

export default App;
