import { ShoppingBag } from "lucide-react";

export default function Header(){
    return(
        <header className="flex !m-4 !p-10 bg-gray-400 text-gray-700 border-l-4 border-t-4 border-gray-700 rounded-3xl rounded-bl-none rounded-r-none !my-5">
            <h1 className="text-lg flex items-center gap-x-1 font-bold"> <ShoppingBag className="size-10" /> Product List</h1>
        </header>
    )
}