import React from 'react'

export interface ICartItem {
    title: string;
    _id: string;
    price: number;
    img : string;
    qty : number;
    onChange ?: () => void;
    category ?: string;
    remove: (id:string) => void;
    shortdesc ?: string;
}
export type IProduct = {
        title: string;
        price: number;
        _id: string;
        description: string;
        images: string[] | any[];
        weight: string;
        category: string;
        isFeatured?: boolean;
}
export type TSetQuickView = 
    React.Dispatch<React.SetStateAction<{
        isOpen: boolean;
        productId: null | string;
    }>>
