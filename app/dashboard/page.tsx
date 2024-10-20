import EmployeeLocation from "./@locations/_components/EmployeesLocation";

export default function DashbordPage({searchParams}: {searchParams: { [key: string]: string | string[] | undefined }}){
    return (
        <>
            <div className="h-full w-4/12 bg-red-100">
            <div className="h-[90vh] overflow-hidden overflow-y first:mt-0 last:mb-0">
                {
                    searchParams?.store ?(
                        <EmployeeLocation store={searchParams?.store}/> 
                    ) : <p>Select a store</p>
                }
            </div>
            </div>

        
        </>
    )
}