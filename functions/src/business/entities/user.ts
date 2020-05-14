export class User {
    constructor(
        private userId: string,
        private name: string,
        private email: string,
        private password: string,
        private photo: string
    ){}

    public getUerId(): string{
        return this.userId
    }

    public setId(userId: string): void{
        this.userId = userId
    }
    
    public getName(): string{
        return this.name
    }

    public setName(name: string): void{
        this.name = name
    }


    public getEmail(): string{
        return this.email
    }

    public setEmail(email: string): void{
        this.email = email
    }

    public getPassword(): string{
        return this.password
    }

    public setPassword(password: string): void{
        this.password = password
    }

    public getPhoto(): string{
        return this.photo;
    }
    public setPhoto(photo: string): void{
        this.photo = photo
    }
}