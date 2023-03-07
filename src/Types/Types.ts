interface ICartItem {
    name: string;
    id: string;
    price: number;
    img : string;
    qty : number;
    remove: (id:string) => void;
    shortdesc ?: string;
}