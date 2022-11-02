import {useSelector} from "react-redux";

const useUserContext = () => {
    const {authToken, userId} = useSelector(state => {
        const {authorizationReducer} = state;
        return authorizationReducer;
    });
    return [authToken, userId];
};

export default useUserContext;
