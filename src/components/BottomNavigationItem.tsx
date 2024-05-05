import shopIcon from "../assets/shopIcon.png";

type propsType = {
    selected?: boolean
}
const BottomNavigationItem = (props: propsType) => {
    return (
        <div className={"bottomNavigationItemSelected"}>
            <img height={"52px"} width={"52px"} src={shopIcon}  alt={""}/>
        </div>
    );
};

export default BottomNavigationItem;