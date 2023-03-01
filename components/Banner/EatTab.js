import Link from "next/link";
import styles from "./Banner.module.css";

const EatTab = () => {
    return (
        <div className="lg:px-11 px-4 lg:pt-11 pt-6 pb-6">
            <h2 className="lg:text-[52px] text-[40px] font-bold lg:leading-[64px] leading-[44px] pb-7">Discover delicious eats</h2>
            <p>Order delivery from restaurants you love.</p>
            <div className="mt-8 mb-4">
                <button className="px-8 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 font-medium mr-4">Order now</button>
                <div className="sm:inline block">
                    <Link className={`${styles.ownRestaurantButtonAnimation} md:text-base text-[15px]`} href="/">Own a restaurant? Partner with Uber Eats</Link>
                </div>
            </div>
        </div>
    );
};

export default EatTab;
