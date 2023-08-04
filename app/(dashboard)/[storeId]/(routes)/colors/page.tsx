import prismadb from "@/lib/prismadb";
import {format} from "date-fns"
import {SizeColumn} from "@/app/(dashboard)/[storeId]/(routes)/sizes/components/columns";
import ColorClient from "./components/client";

const ColorsPage = async ({
    params
} : { params : { storeId: string } }) => {

    const colors = await prismadb.color.findMany({
        where: {
            storeId: params.storeId
        },
        orderBy: {
            createdAt: "desc"
        }
    })

    const formattedSizes: SizeColumn[] = colors.map((item) => ({
        id: item.id,
        name: item.name,
        value: item.value,
        createdAt: format(item.createdAt, "MMMM do, yyyy")
    }))

    return (
        <div className="flex-col">
            <div className="
                    flex-1
                    space-y-4
                    p-8
                    pt-6
                "
            >
                <ColorClient data={formattedSizes} />
            </div>
        </div>
    );
};

export default ColorsPage;