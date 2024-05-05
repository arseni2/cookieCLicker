import cookieImg from "./assets/cookie.png"
import {useState} from "react";
import CenterLayout from "./layouts/CenterLayout.tsx";
import Text from "./shared_components/Text.tsx";
import BottomNavigation from "./components/BottomNavigation.tsx";

function App() {
    const [count, setCount] = useState(0)
    const [isAnim, setIsAnim] = useState(false)

    const cookieClickHandler = (e: any) => {
        setIsAnim(true)
        setCount((prevCount) => prevCount+1)
    }
    const cookieAnimationEndHandler = () => {
        setIsAnim(false)
    }
    return (
        <CenterLayout className={"flex-col"}>
            <Text>{count} Cookies</Text>
            <img className={`ml-auto mr-auto ${isAnim ? "scaleAnimation":""}`} onAnimationEnd={cookieAnimationEndHandler} onClick={cookieClickHandler} src={cookieImg} alt=""/>

            <BottomNavigation />
        </CenterLayout>
    )
}

export default App
