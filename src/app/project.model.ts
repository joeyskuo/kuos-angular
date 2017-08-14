export class Project {

  public name: string;
  public desc: string;
  public embedObject: any;

  constructor(name: string, desc: string, embedObj: any) {
    this.name = name;
    this.desc = desc;
    this.embedObject = embedObj;
  }
}
