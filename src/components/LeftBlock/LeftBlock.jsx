import './leftBlock.css';

export const LeftBlock = ({ list, moveItemToRight }) => {
  return (
    <div className="left-block">
      <h3>LEFT BLOCK</h3>
      <ul>
        {list.map(({ title, id }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
      <button className="left-block-button" onClick={moveItemToRight}>
        Transfer first to right
      </button>
    </div>
  );
};
