
import { createContext, ReactNode, useEffect, useState } from 'react';
import { auth, firebase } from "../services/firebase";

type User = {
    id: string;
    email: string | null;
    password?: string;
}

type AuthContextType = {
    user: User | undefined;
    signInWithGoogle: () => Promise<void>;
    createUserWithEmailAndPassword: (props: any) => Promise<void>;
}

type AuthContextProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
    const [user, setUser] = useState<User>();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {

                const { uid, email } = user;
                
                setUser({
                    id: uid,
                    email,
                });
            }
        });

        return () => {
            unsubscribe();
        }
    }, []);

    async function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();

        const result = await auth.signInWithPopup(provider);

        if (result.user) {

            const { uid, email } = result.user;

            setUser({
                id: uid,
                email
            });
        }
    }

    async function createUserWithEmailAndPassword(props: any) {
        const { email, password } = props;

        if (email && password) {
            const result = await auth.createUserWithEmailAndPassword(email, password);
            if(result.user) {
                const { uid, email } = result.user;
                setUser({
                    id: uid,
                    email
                });
            }
        }

        
    }

    return (
        <AuthContext.Provider value={{ user, signInWithGoogle, createUserWithEmailAndPassword }}>
            {props.children}
        </AuthContext.Provider>
    );
}