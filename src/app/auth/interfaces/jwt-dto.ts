export interface JwtDto {
    ok: boolean;
    token?: string;
    type?: string;
    nombreUsuario? : string;
    authorities?: string[];
}

export interface Usuario {
    nombreUsuario: string;
}
   
export interface NuevoUsuario {
    ok: boolean;
    token?: string;
    nombre?: string;
    nombreUsuario?: string;
    email?: string;
    password?: string;
}