import { useState, useEffect } from 'react';
import { getData } from '../../service/api';

export const useMainBlock = () => {
  const [list, setList] = useState([]);
  const [list2, setList2] = useState([]);
  const [list3, setList3] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getData();
      setList(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const moveItemToRight = () => {
    if (list.length === 0) return;
    const [firstItem, ...rest] = list;
    setList(rest);
    setList2([firstItem, ...list2]);
  };

  const moveItemToLeft = () => {
    if (list2.length === 0) return;
    const [firstItem, ...rest] = list2;
    setList([firstItem, ...list]);
    setList2(rest);
  };

  const moveItemToRightFromSecondBlock = () => {
    if (list2.length === 0) return;
    const [firstItem, ...rest] = list2;
    setList2(rest);
    setList3([firstItem, ...list3]);
  };

  const removeLastItem = () => {
    if (list3.length === 0) return;
    const newList = [...list3];
    newList.pop();
    setList3(newList);
  };

  return { list, list2, list3, moveItemToRight, moveItemToLeft, moveItemToRightFromSecondBlock, removeLastItem };
};
