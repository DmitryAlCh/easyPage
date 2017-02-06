export class Post {
  constructor (
    public language: string,
    public header: string,
    public mainText: string,
    public imgPath: string,
    public category: string,
    public date: string,
    public link: string,
    public id: number,
  ) {}
}
