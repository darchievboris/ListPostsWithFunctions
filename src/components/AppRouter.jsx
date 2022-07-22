import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {

    const {isAuth, setIsAuth,isLoading} = useContext(AuthContext);
    if(isLoading){
        return <Loader/>
    }
    return (
        isAuth
            ? <Routes>
                {privateRoutes.map(router =>
                    <Route
                        exact={router.exact}
                        path={router.path}
                        element={router.component}
                        key={router.path}
                    />
                )}
            </Routes>
            : <Routes>
                {publicRoutes.map(router =>
                    <Route
                        exact={router.exact}
                        path={router.path}
                        element={router.component}
                        key={router.path}
                    />
                )}
            </Routes>
    );
};

export default AppRouter;
