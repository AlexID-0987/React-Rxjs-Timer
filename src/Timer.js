import Body from "./Body";
import Header from "./Header";
import ItemTime from "./Components/ItemTime"
import Newtime from "./Components/Newtime";
import Begintime from "./Components/Begintime";

function Timer(){
    return (
        <div>
        <Body />
            <Header />
            <ItemTime/>
            <Newtime/>
            <Begintime/>
        </div>
    )
}
export default Timer