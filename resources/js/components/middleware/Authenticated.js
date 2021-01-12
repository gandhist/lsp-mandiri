import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authenticated } from "../store/Index";


const Authenticated = (props) => {
    const auth = useRecoilValue(authenticated);
    const history = useHistory();
    useEffect( () => {
        if(!auth.check){
            history.push('/login')
        }
    }, [auth.check])
    return props.children;
}

export default Authenticated;