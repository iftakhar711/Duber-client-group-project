import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Banner.module.css"

const DriveOrDeliver = () => {

    const router = useRouter()

    const handleNavigate = (e) => {
        e.preventDefault()
        router.push("/signinAs")
    }

    return (
        <div className="lg:px-11 px-4 lg:pt-5 pt-7 pb-6">
            <h2 className="lg:text-[52px] text-[36px] font-bold lg:leading-[64px] leading-[44px] lg:pt-7 lg:pb-7 pb-6">Get in the driver’s seat and get paid</h2>
            <p>Drive on the platform with the largest network of active riders.</p>
            <div>
                <button
                    onClick={handleNavigate}
                    className="px-8 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 font-medium my-6">Sign up to drive</button>
            </div>
            <div className="mb-3">
                <Link href="/aboutDuber" className={`${styles.deliveringAnimationButton} md:text-base text-[15px]`}>Learn more about driving and delivering</Link>
            </div>
        </div>
    );
};

export default DriveOrDeliver;