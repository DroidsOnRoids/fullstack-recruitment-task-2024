export class CustomHttpException {
  constructor(
    public readonly status: number,
    public readonly details: string,
    public readonly type: string,
    public readonly title: string,
  ) {}
}
