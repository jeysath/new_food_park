import React from 'react';
import Bill from './Bill';
import { useDispatch, useSelector } from 'react-redux';
import { AddShoppingItemAction, DecreaseShoppingItemAction } from './Action';
import { Icon } from '@iconify/react';
import minusIcon from '@iconify-icons/mdi/minus';
import plusIcon from '@iconify-icons/mdi/plus';

const Orderpage = () => {
  const Dispatch = useDispatch();
  const foods = useSelector((state) => state.slice(0, state.length - 1));

  const FoodAdd = (event, id) => {
    event.preventDefault();
    Dispatch(AddShoppingItemAction(id));
  };

  const FoodMinus = (event, id) => {
    event.preventDefault();
    Dispatch(DecreaseShoppingItemAction(id));
  };

  return (
    <>
      <div class=" cursor-pointer text-xl md:text-3xl lg:text-5xl  bg-yellow-100 text-center">
        Food Park{' '}
      </div>{' '}
      <div class=" justify-items-center m-4 md:m-8 lg:text-xl lg:p-4 text-sm  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {' '}
        {foods &&
          foods.map((food) => {
            return (
              <div class="justify-items-center border-4 border-red-100">
                <span> {food.name} </span>{' '}
                <img src={food.image} alt="image" width="150px"></img>{' '}
                <button
                  className=" text-white p-1 bg-blue-800"
                  disabled={!food.qty}
                  onClick={(e) => FoodMinus(e, food.id)}
                >
                  <Icon icon={minusIcon} />{' '}
                </button>{' '}
                <span className="p-1 "> {food.qty} </span>{' '}
                <button
                  className="text-white p-1 bg-blue-800 "
                  onClick={(e) => FoodAdd(e, food.id)}
                >
                  <Icon icon={plusIcon} />{' '}
                </button>{' '}
              </div>
            );
          })}{' '}
      </div>{' '}
      <Bill />
    </>
  );
};
export default Orderpage;
