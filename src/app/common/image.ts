export class Image {
  constructor(
    public id: number,
    public alt: string,
    public createdAt: Date,
    public updatedAt: Date,
    public width: number,
    public height: number,
    public imageSource: string,
  ) {
  }
}
