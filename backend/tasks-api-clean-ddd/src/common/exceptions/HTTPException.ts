export class HTTPException extends Error{

    constructor(
        public readonly status: number,
        public readonly message: string
    ){
        super()
    }
}