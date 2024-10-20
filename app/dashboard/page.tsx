import EmployeeLocation from "./@locations/_components/EmployeesLocation";

export default function DashbordPage({searchParams}: {searchParams: { [key: string]: string | string[] | undefined }}){
    return (
        <>
            <div className="h-full w-4/12 bg-red-100">
            <EmployeeLocation store={searchParams?.store}/>
            </div>

        
        </>
    )
}