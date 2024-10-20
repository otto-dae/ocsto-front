export interface Location {
    locationId: number;
    locationName: string;
    locationAddress: string;
    locationLatLng: number[];
   // manager: Manager;
   // region: Region;
    employees: Employee[];
}

export interface Employee{
    employeeId: string;
    employeeName:  string;
    employeeLastName:  string;
    employeePhoneNumber: string;
    employeeEmail: string;
   // employeePhotoUrl: string;
    location: Location;
    // user:User;
}