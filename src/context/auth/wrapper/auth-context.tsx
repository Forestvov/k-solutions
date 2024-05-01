import { createContext } from 'react';

import type { JWTContextType } from '../types';

// ----------------------------------------------------------------------

// @ts-ignore
export const AuthContext = createContext({} satisfies JWTContextType);
