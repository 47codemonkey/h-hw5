import './middleBlock.css';

export const MiddleBlock = ({ list, moveItemToLeft, moveItemToRightFromSecondBlock }) => {
  return (
    <div className="middle-block">
      <h3>MIDDLE BLOCK</h3>
      <ul>
        {list.map(({ title, id }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
      {list.length !== 0 && (
        <div className="buttons-container">
          <button className="middle-block-button" onClick={moveItemToLeft}>
            Transfer first to left
          </button>
          <button className="middle-block-button" onClick={moveItemToRightFromSecondBlock}>
            Transfer first to right
          </button>
        </div>
      )}
    </div>
  );
};
