import { useContext } from 'react';
import { UserDataContext } from './UserDataContext'

export const useUserData = () => {
    const context = useContext(UserDataContext);
    if (!context) {
        throw new Error('useUserData must be used within a UserDataContextProvider');
    }
    return context;
};
