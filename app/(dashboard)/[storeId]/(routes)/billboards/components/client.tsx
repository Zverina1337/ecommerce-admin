"use client";
import Heading from "@/components/ui/heading";
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";
import {Separator} from "@/components/ui/separator";
import {useParams, useRouter} from "next/navigation";
import {BillboardColumn, columns} from "@/app/(dashboard)/[storeId]/(routes)/billboards/components/columns";
import {DataTable} from "@/components/ui/data-table";
import ApiList from "@/components/ui/api-list";

interface BillboardClientProps {
    data: BillboardColumn[];
}

const BillboardClient: React.FC<BillboardClientProps> = ({
    data
}) => {
    const router = useRouter()
    const params = useParams()

    return (
        <>
            <div className="
                    flex
                    items-center
                    justify-between
                "
            >
                <Heading
                    title={`Billboards (${data.length})`}
                    description="Manage billboards for your store"
                />
                <Button
                    onClick={() => router.push(`/${params.storeId}/billboards/new`)}
                >
                    <Plus className="mr-4 h-4 w-4"/>
                    Add new
                </Button>
            </div>
            <Separator/>
            <DataTable
                columns={columns}
                data={data}
                searchKey="label"
            />
            <Heading
                title="API"
                description="API calls for Billboards"
            />
            <Separator/>
            <ApiList
                entityName="billboards"
                entityIdName="billboardId"
            />
        </>
    );
};

export default BillboardClient;