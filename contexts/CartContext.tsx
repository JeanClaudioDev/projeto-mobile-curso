import { createContext, useContext, useState, ReactNode } from "react";

type Produto = {
    id: string;
    nome: string;
};

type CartContextType = {
    itens: Produto[];
    adicionar: (produto: Produto) => void;
    remover: (id: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider ({children}: {children: ReactNode}) {
    const [itens, setItens] = useState < Produto[]>([]);

    function adicionar(produto: Produto) {
        setItens((atual) => [...atual, produto]);
    }
    function remover(id:string){
        setItens((atual) => atual.filter((p) =>p.id !== id));
    }
    return (
        <CartContext.Provider value = {{ itens, adicionar, remover}}>
            {children}
        </CartContext.Provider>
    );
}
export function useCart(){
    const context = useContext(CartContext);
    if (!context){
        throw new Error ('useCart deve ser usado dentro de CartProvider');
    }
    return context;
}