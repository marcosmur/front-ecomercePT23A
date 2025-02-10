
export interface Iproducts {
    id?:number;
    name:string;
    price:number;
    description:string;
    stock:number;
    categoryId:number;
    image:string;

}

export interface Icategory{
    id:number;
    name:string;
}

export interface IloginProps{
    email:string,
    password:string
}

export interface IloginErrors{
    email?:string,
    password?:string
}

export interface IRegisterProps{
    email:string,
    password:string,
    name:string,
    address:string,
    phone:string
}

export interface IRegisterErrors{
    email?:string,
    password?:string,
    name?:string,
    address?:string,
    phone?:string
}

export interface IUserSession{
    token:string
    user:{
        adress:string,
        email:string,
        id:number;
        name:string,
        phone:string
        orders:[]

    }
}

export interface Iorder{
    id:number;
    date:Date;
    status:string;
    products:Iproducts
}