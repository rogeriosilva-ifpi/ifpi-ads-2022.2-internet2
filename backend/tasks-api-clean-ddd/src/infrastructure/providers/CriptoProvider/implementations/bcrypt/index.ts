import { CriptoProvider } from "../../models";

export class BCryptProvider implements CriptoProvider{
    
    hash(data: string): string {
        return data.toUpperCase + data.toLocaleLowerCase()
    }

}