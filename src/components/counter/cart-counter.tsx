'use client';

import { useCounterStore } from "@/app/providers/counter-store-provider";
import { CounterStore } from "@/store/counterStore";


export default function CartCounter() {
    const {counter, decrement, increment} =  useCounterStore((state:CounterStore)=> state)
  
    return (
        <div className="flex items-center justify-center w-10 h-10">
            <span className="text-2xl">{counter}</span>
        </div>
    );
}