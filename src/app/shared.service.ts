import { Injectable } from '@angular/core';  
  
@Injectable()  
export class SharedService {  
  
  private data: any = {};  
  
  public set(key: string, value: any) {  
    this.data[key] = value;  
  }  
  
  public getAll() {  
    return this.data;  
  }
  
  public get(key: string) {  
    return this.data[key];  
  }
}  