import { CartCounter } from "@/shopping-cart";


export const metadata = {
 title: 'Counter Page',
 description: 'Counter Page in the Dashboard',
};

export default function CounterPage() { 
 

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <span>Producto en el Carrito</span>
      <CartCounter value ={20}/>
    </div>
  );
}