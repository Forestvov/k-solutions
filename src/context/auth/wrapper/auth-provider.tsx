import type { ReactNode } from 'react';
import { useCallback, useEffect, useMemo, useReducer } from 'react';

import { AuthContext } from './auth-context';
import { isValidToken, setSession } from '../utils';
import type { ActionMapType, AuthStateType, AuthUserType } from '../types';
import axios, { endpoints } from 'helpers/axios';

enum Types {
    INITIAL = 'INITIAL',
    LOGIN = 'LOGIN',
    REGISTER = 'REGISTER',
    LOGOUT = 'LOGOUT',
}

interface Payload {
    [Types.INITIAL]: {
        user: AuthUserType;
    };
    [Types.LOGIN]: {
        user: AuthUserType;
    };
    [Types.REGISTER]: {
        user: AuthUserType;
    };
    [Types.LOGOUT]: undefined;
}

type ActionsType = ActionMapType<Payload>[keyof ActionMapType<Payload>];

// ----------------------------------------------------------------------

const initialState: AuthStateType = {
    user: null,
    loading: true,
};

const reducer = (state: AuthStateType, action: ActionsType) => {
    if (action.type === Types.INITIAL) {
        return {
            loading: false,
            user: action.payload.user,
        };
    }
    if (action.type === Types.LOGIN) {
        return {
            ...state,
            user: action.payload.user,
        };
    }
    if (action.type === Types.REGISTER) {
        return {
            ...state,
            user: action.payload.user,
        };
    }
    if (action.type === Types.LOGOUT) {
        return {
            ...state,
            user: null,
        };
    }
    return state;
};

// ----------------------------------------------------------------------

const STORAGE_KEY = 'acceptToken';

interface Props {
    children: ReactNode;
}

export function AuthProvider({ children }: Props) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const initialize = useCallback(async () => {
        try {
            const acceptToken = localStorage.getItem(STORAGE_KEY);

            if (acceptToken && isValidToken(acceptToken)) {
                setSession(acceptToken);

                const resUser = await axios.get(endpoints.auth.me);
                const resBalance = await axios.get(endpoints.auth.balance);

                const user = resUser.data;
                const balance = resBalance.data;

                await dispatch({
                    type: Types.INITIAL,
                    payload: {
                        user: {
                            ...user,
                            balance: balance,
                            acceptToken,
                        },
                    },
                });
            } else {
                dispatch({
                    type: Types.INITIAL,
                    payload: {
                        user: null,
                    },
                });
            }
        } catch (error) {
            console.error(error);
            dispatch({
                type: Types.INITIAL,
                payload: {
                    user: null,
                },
            });
        }
    }, []);

    useEffect(() => {
        initialize();
    }, [initialize]);

    // LOGIN
    const login = useCallback(async (email: string, password: string) => {
        const data = {
            email,
            password,
        };

        const res = await axios.post(endpoints.auth.login, data);
        const { acceptToken } = res.data;

        setSession(acceptToken);

        const resUser = await axios.get(endpoints.auth.me);
        const resBalance = await axios.get(endpoints.auth.balance);

        const user = resUser.data;
        const balance = resBalance.data;

        dispatch({
            type: Types.LOGIN,
            payload: {
                user: {
                    ...user,
                    balance: balance,
                    acceptToken,
                },
            },
        });
    }, []);

    // REGISTER
    const register = useCallback(async (data: any) => {
        await axios.post(endpoints.auth.register, data);
    }, []);

    // LOGOUT
    const logout = useCallback(async () => {
        setSession(null);
        dispatch({
            type: Types.LOGOUT,
        });
    }, []);

    // ----------------------------------------------------------------------

    const checkAuthenticated = state.user ? 'authenticated' : 'unauthenticated';

    const status = state.loading ? 'loading' : checkAuthenticated;

    const memoizedValue = useMemo(
        () => ({
            user: state.user,
            method: 'jwt',
            loading: status === 'loading',
            authenticated: status === 'authenticated',
            unauthenticated: status === 'unauthenticated',
            //
            login,
            register,
            logout,
            update: initialize,
        }),
        [login, logout, register, state.user, status, initialize]
    );

    return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
}
