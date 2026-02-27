export interface User {
    name?: string | undefined;
    position?: string;
    department?: string;
    details?:{
        role: string | undefined;
    }
}
