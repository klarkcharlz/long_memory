import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import StartPage from "./components/StartPage/StartPage";
import Menu from "./components/Menu/Menu";
import NotFound from "./components/NotFound/NotFound";
import CreateNotification from "./components/CreateNotification/CreateNotification";
import NotificationList from "./components/NotificationsList/NotificationsList";

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
                            element={<CreateNotification/>}
                        />
                        <Route
                            path="/notifications_list"
                            element={<NotificationList/>}
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
