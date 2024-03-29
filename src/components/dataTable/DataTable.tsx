import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import "./dataTable.css";
import { Link } from "react-router-dom";
// import { useMutation, useQueryClient } from "@tanstack/react-query";

type Props = {
    columns: GridColDef[];
    rows: object[];
    slug: string;
};

const DataTable = (props: Props) => {
    // TEST THE API

    // const queryClient = useQueryClient();
    // // const mutation = useMutation({
    // //   mutationFn: (id: number) => {
    // //     return fetch(`http://localhost:8800/api/${props.slug}/${id}`, {
    // //       method: "delete",
    // //     });
    // //   },
    // //   onSuccess: ()=>{
    // //     queryClient.invalidateQueries([`all${props.slug}`]);
    // //   }
    // // });

    const handleDelete = (id: number) => {
        //delete the item
        // mutation.mutate(id)
    };

    const actionColumn: GridColDef = {
        field: "action",
        headerName: "Hoạt Động",
        width: 100,
        renderCell: (params) => {
            return (
                <div className="dataTable__action">
                    <Link to={`/${props.slug}/${params.row.id}`}>
                        <img src="/view.svg" alt="" />
                    </Link>
                    <div
                        className="dataTable__delete"
                        onClick={() => handleDelete(params.row.id)}
                    >
                        <img src="/delete.svg" alt="" />
                    </div>
                </div>
            );
        },
    };

    return (
        <div className="dataTable">
            <DataGrid
                className="dataTable__dataGrid"
                rows={props.rows}
                columns={[...props.columns, actionColumn]}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                disableColumnFilter
                disableDensitySelector
                disableColumnSelector
            />
        </div>
    );
};

export default DataTable;
