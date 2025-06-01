import { Smile } from "lucide-react";

export default function Footer(){
    return(
        <footer className="flex !m-4 !p-10 bg-gray-400 text-gray-700 border-r-4 border-b-4 border-gray-700 rounded-3xl rounded-r-none rounded-tl-none !my-5">
            <h1 className="text-lg flex items-center gap-x-1 font-bold"> <Smile className="size-10" /> Develop By Amirhossein Sharafi & AmirReza Karami </h1>
        </footer>
    )
}