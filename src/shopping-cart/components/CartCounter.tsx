'use client';
import { useAppDispatch, useAppSelector } from '@/store';
import { addOne, initCounterState, subtractOne } from '@/store/counter/counterSlice';
import React, { useEffect } from 'react'

interface CartCounterProps {
  value?: number;
}



export const CartCounter = ({ value = 0 }: CartCounterProps) => {
  const count = useAppSelector(state => state.counter.count)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initCounterState(value))
  }, [dispatch, value])

  //const [ count, setCount ] = useState(value);


  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <span className="text-9xl">{count}</span>
      <div className="flex items-center justify-center mt-4">
        <button onClick={() => dispatch(addOne())} className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">+1</button>
        <button onClick={() => dispatch(subtractOne())} className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">-1</button>
      </div>
      <h1>Page Counter</h1>
    </div>
  )
}
