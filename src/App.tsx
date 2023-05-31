import React from 'react';
import './App.css';
import { DragItem } from './components';

interface DataItemInterface {
  id: string;
  name: string;
};

const DATA: DataItemInterface[] = [{
  id: 'ER4',
  name: 'Item 1'
},
{
  id: 'FG3',
  name: 'Item 2'
},
{
  id: 'RT6',
  name: 'Item3'
}];

function App() {
  const [dragged, setDragged] = React.useState<DataItemInterface>();
  const [move, setMove] = React.useState('');
  const [movedItemlsList, setMovedItemsList] = React.useState<DataItemInterface[]>([]);

  const handelTouch = (e: React.TouchEvent<HTMLDivElement>, id: string, name: string) => {
    e.preventDefault();
    setDragged({
      id: id,
      name: name,
    })
  };

  const handleMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setMove('moved');
  };

  const handleEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    const element = document.elementFromPoint(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
    if (element?.className.includes('droppable') && dragged) {
      setMovedItemsList(prevValue => ([
        ...prevValue,
        ...[dragged],
      ]))
      console.log(movedItemlsList);
    }
  };

  const handleCancel = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragged(undefined);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Touch events demo
        </p>
      </header>
      <main className='App-content'>
        <div className='App-content__draggable-wrapper'>
          {DATA.map(item => (
            <DragItem key={item.id} name={item.name} onTouch={(e) => handelTouch(e, item.id, item.name)} onMove={handleMove} onEnd={handleEnd} onCansel={handleCancel} />
          ))}
        </div>
        <div
          className='App-content__droppable-wrapper'
        >
          <p className='App__droppable-wrapper__container__title'>Drop here</p>
          <div className='App__droppable-wrapper__container'>{dragged?.name} {move}
            {movedItemlsList && (
              movedItemlsList.map(item => (
                <DragItem key={item.id} name={item.name} onTouch={(e) => handelTouch(e, item.id, item.name)} onMove={handleMove} onEnd={handleEnd} onCansel={handleCancel} />
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
