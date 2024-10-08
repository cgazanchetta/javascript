declare namespace Company {
  type Email = string;

  export interface Employee {
    name: string;
    age: number;
  }

  export interface WithContact extends Employee {
    contacts: Email[];
  }
}
