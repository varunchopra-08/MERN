import RevenueCard from "./RevenueCard"
import BlueCard from "./BlueCard"
const Overview = ({}) => {
    return(
    <div className="grid gap-6 " >
        <div className="justify-between flex items-center">
            <div className="text-xl font-medium">Overview</div>
                 
            
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <BlueCard title={"Next payout"} amount={"2312.23"}/>
                    <RevenueCard title={"Amount Pending"} orderCount={"13"} amount={"92,312.20"}/>
                    <RevenueCard title={"Amount Processed"}  amount={"23,92,312.19"}/>

        </div> 
    </div>
    )
}
export default Overview