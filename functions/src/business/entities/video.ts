
export class Video{
    constructor(
        private url: string,
        private title: string,
        private description: string,
        private id: string, 
     
    ){}

 
    
   public getId():string{
        return this.id
    }
  
    public getUrl(): string{
        return this.url
    }

    
   public getTitle() : string{
        return this.title
    }

   public getDescription() : string{
        return this.description
    }
   
}


