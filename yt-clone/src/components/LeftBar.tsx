export const LeftBar = () => {  
    return(
        <div className="max-sm:hidden w-1/4 h-screen bg-slate-900 text-white">
            <ul className="space-y-2">
                <li className="hover:bg-slate-800 p-2 rounded">Home</li>
                <li className="hover:bg-slate-800 p-2 rounded">Trending</li>
                <li className="hover:bg-slate-800 p-2 rounded">Subscriptions</li>
                <li className="hover:bg-slate-800 p-2 rounded">Library</li>
                <li className="hover:bg-slate-800 p-2 rounded">History</li>
            </ul>
        </div>
    )
    
}