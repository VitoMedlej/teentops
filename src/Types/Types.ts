import React from 'react'

export interface ICartItem {
    name: string;
    id: string;
    price: number;
    img : string;
    qty : number;
    onChange ?: () => void;
    remove: (id:string) => void;
    shortdesc ?: string;
}
export type TSetQuickView = 
    React.Dispatch<React.SetStateAction<{
        isOpen: boolean;
        productId: null | string;
    }>>
