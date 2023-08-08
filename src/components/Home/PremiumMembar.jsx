
import premimum from "../../assets/premium.jpg";
const PremiumMembar = () => {
    return (
        <div className="hero h-screen text-white " style={{ backgroundImage: `url(${premimum})`,height:600 }}>
            <div className="text-left ml-10 mr-auto">
            <h1 className="text-3xl mb-4 ">Premium Membership</h1>
            <p className="">Enjoy the benefits of our dating services membership! <br /> Use the psychological matching to find the best people and <br /> experience other great bonuses.</p>
            <div className="flex mt-6">
                <button className="btn text-xl">view all options</button>
                <h2 className="p-2 text-xl">14 days for free</h2>
            </div>
            </div> 

        </div>
    );
};

export default PremiumMembar;