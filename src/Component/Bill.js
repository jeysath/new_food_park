import { useSelector } from 'react-redux';
import React from 'react';

export default function Bill() {
  const food = useSelector((state) => state);
  var mapped = food.slice(0, food.length - 1);

  return food[food.length - 1]['totel'] && 1 ? (
    <div className=" text-xs lg:text-2xl mx-4 md:mx-32 lg:mx-38 text-blue-900 border-dashed border-2 border-light-blue-900  ">
      <div className="pb-4 underline text-500"> Bill detail: </div>
      {/* map function */}
      {mapped &&
        mapped.map((food) => {
          return food.totel && 1 ? (
            <div>
              {/* actual bill description */}
              <div className="flex justify-between px-3 py-2">
                <div>{food.name}{" "}price: </div>
                <div className="flex text-justify">
                  ({food.qty} * €{food.price}){' '}
                </div>
                <div> €{food.totel} </div>
              </div>
              {/* offer bill description */}
              {food.offer && 1 ? (
                <div>
                  <div className="text-red-500 flex justify-between px-3 py-2">
                    <div> Discount: </div> <div> {food.offer_name} </div>
                    <div> (-€{food.offer}) </div>
                  </div>
                </div>
              ) : null}
              {/*  */}
            </div>
          ) : null;
        })}
      {/* The below logic is calculate actual totel price */}
      <div className="divide-y divide-yellow-500 border-t-2 border-yellow-500">
        {food[food.length - 1]['discount'] != 0 ? (
          <div className="flex justify-between px-3 py-2 ">
            <div> Total price: </div>
            <div class="text-right"> €{food[food.length - 1]['totel_price']} </div>
          </div>
        ) : null}
        {/* The below logic is calculate Discount price */}
        {food[food.length - 1]['discount'] != 0 ? (
          <div className=" text-red-500 flex justify-between px-3 py-2">
            <div class="text-right"> Total Discount: </div>
            <div> (-€{food[food.length - 1]['discount']}) </div>
          </div>
        ) : null}
        {/* The below logic is calculate final totel price */}
        <div className=" flex justify-between px-3 py-2">
          <div class="text-right"> Total: </div>
          <div> €{food[food.length - 1]['totel']} </div>
        </div>
      </div>
      {/* offer value description */}{' '}
      {food[food.length - 1]['discount'] != 0 ? (
        <div className=" text-green-500 flex justify-between px-3 py-2">
          <div class="text-right">
            You saved{' '}
            <span className="text-yellow-800">
              {' '}
              €{food[food.length - 1]['discount']}{' '}
            </span>
            on this order.
          </div>
        </div>
      ) : null}
      {/* order button  */}
      <div className="text-right">
        <button
          className="bg-red-400 p-1 rounded-md mr-6 text-sm lg:text-xl lg:mr-24"
          onClick={(e) => alert('Your Order is Placed')}
        >
          ORDER NOW
        </button>
      </div>
      {/*  */}
    </div>
  ) : null;
}
