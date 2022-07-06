import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";
import StartPage from "./components/StartPage";
import Menu from "./components/Menu";
import NotFound from "./components/NotFound";
import CreateNotification from "./components/CreateNotification";
import store from "./redux/store";

export default function App() {
    return (
        <div>
            <Header/>
            <Router>
                <div>
                    <Menu/>
                    <Routes>
                        <Route
                            path="/main"
                            element={<StartPage/>}
                        />
                        <Route
                            path="/create_notification"
                            element={<CreateNotification
                                store={store}
                            />}
                        />
                        <Route
                            path="*"
                            element={<NotFound/>}
                        />
                    </Routes>
                </div>
            </Router>
            <Footer/>
        </div>
    );
}
