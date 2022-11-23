class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
    }

    getName = () => this.name;

    getId = () => this.id;

    getEmail = () => this.email;

    getRole = () => this.role;

}

module.exports = Employee;