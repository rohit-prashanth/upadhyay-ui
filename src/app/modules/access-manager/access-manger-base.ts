export class AccessManagerBase {
    constructor(){
    }
    public config = {
        navLabels: [
          {label: 'Users', path:'accessManager/users'},
          {label: 'Groups & Permissions', path:'accessManager/groupsandpermissions'}
        ]
    }
}