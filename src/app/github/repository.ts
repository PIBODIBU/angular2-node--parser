export class Repository {
  private _html_url: string;

  constructor(htmlUrl: string) {
    this._html_url = htmlUrl;
  }

  get html_url(): string {
    return this._html_url;
  }

  set html_url(value: string) {
    this._html_url = value;
  }
}
