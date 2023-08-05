class ContactError extends Error {
  target: string[];

  constructor(message: string, target: string[]) {
    super(message);
    this.name = 'ContactError'
    this.target = target;
  }
}

export default ContactError;
