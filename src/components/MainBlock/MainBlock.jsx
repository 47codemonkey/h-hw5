import { LeftBlock } from '../LeftBlock/LeftBlock';
import { MiddleBlock } from '../MiddleBlock/MiddleBlock';
import { RightBlock } from '../RightBlock/RightBlock';

import { useMainBlock } from './hook';

import './mainBlock.css';

export const MainBlock = () => {
  const { list, list2, list3, moveItemToRight, moveItemToLeft, moveItemToRightFromSecondBlock, removeLastItem } =
    useMainBlock();

  return (
    <div className="container">
      <LeftBlock list={list} moveItemToRight={moveItemToRight} />
      <MiddleBlock
        list={list2}
        moveItemToLeft={moveItemToLeft}
        moveItemToRightFromSecondBlock={moveItemToRightFromSecondBlock}
      />
      <RightBlock list={list3} removeLastItem={removeLastItem} />
    </div>
  );
};
