import {atom} from 'recoil';

// Recoil is like react-reducer which allows data to be transferred between
// different components without passing it via props. 

type AuthModalState = {
    isOpen: boolean;
    type: 'login' | 'register' | 'forgotPassword';
};

const initialAuthModalState: AuthModalState = {
    isOpen: false,
    type: 'login',
};

export const AuthModalState = atom<AuthModalState>({
    key: 'authModalState',
    default: initialAuthModalState,
})