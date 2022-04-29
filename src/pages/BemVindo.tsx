
import { useAuth } from './../hooks/useAuth';
export function BemVindo() {
    const { user } = useAuth();
    console.log(user)
    return(
        <div className="conteiner">            
            <h1>Seja bem vindo {user?.email}</h1>
            <button>
                Logout
            </button>
        </div>        
    );
}