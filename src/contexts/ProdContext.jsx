import { createContext, useState } from 'react';

export const ProdContext = createContext({
    tipo: [null],
    newTipo: (tipo) => { },
});

const { Provider } = ProdContext;

export const ProdProvider = ({ children }) => {
    const [tipo, setTipo] = useState(null);

    const newTipo = (tipo) => {
        setTipo(tipo);
    }

    return <Provider value={{  tipo  }}>{children}</Provider>
}