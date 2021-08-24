import React, { useState } from 'react';
import { AppRouter } from './AppRouter';
import { UserContext } from './UserContext';

export const MainApp = () => {
    const [user, setsUser] = useState({});

    return (
        <UserContext.Provider value = { {
            user,
            setsUser
        } }>
            <AppRouter/>
        </UserContext.Provider>
    )
}
