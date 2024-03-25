import './RightBlock.css';

export const RightBlock = ({ list, removeLastItem }) => {
  return (
    <div className="right-block">
      <h3>RIGHT BLOCK</h3>
      <ul>
        {list.map(({ title, id }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
      {list.length !== 0 && (
        <button className="right-block-button" onClick={removeLastItem}>
          Remove last item
        </button>
      )}
    </div>
  );
};
