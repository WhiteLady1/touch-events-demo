interface DragItemProps {
  name : string;
  onTouch: (e: React.TouchEvent<HTMLDivElement>) => void;
  onMove: (e: React.TouchEvent<HTMLDivElement>) => void;
  onEnd: (e: React.TouchEvent<HTMLDivElement>) => void;
  onCansel: (e: React.TouchEvent<HTMLDivElement>) => void;
};

export const DragItem: React.FC<DragItemProps> = ({
  name,
  onTouch,
  onMove,
  onEnd,
  onCansel
}) => (
  <div
  className='App-content__draggable-items'
  draggable
  onTouchStart={onTouch}
  onTouchMove={onMove}
  onTouchEnd={onEnd}
  onTouchCancel={onCansel}
  >
  {name}
</div>
);
