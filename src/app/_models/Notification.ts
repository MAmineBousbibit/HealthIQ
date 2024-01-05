export class Notification {
  private _id: string;
  private _namesender: string;
  private _emailsender: string;
  private _phone: string

  private _content: string;



  constructor(id: string, namesender: string, emailsender: string, phone: string, content: string) {
    this._id = id;
    this._namesender = namesender;
    this._emailsender = emailsender;
    this._phone = phone;
    this._content = content;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get id(): string {
    return this._id;
  }

  get namesender(): string {
    return this._namesender;
  }

  set namesender(value: string) {
    this._namesender = value;
  }

  get emailsender(): string {
    return this._emailsender;
  }

  set emailsender(value: string) {
    this._emailsender = value;
  }

  set id(value: string) {
    this._id = value;
  }





  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }
}
