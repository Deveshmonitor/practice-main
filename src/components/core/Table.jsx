import * as React from "react";
import { Divider, Pagination } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import Button from "./Button";

export default function Tables({ ...props }) {
  const {
    rows,
    columns,
    RowComponent,
    handlePageChange,
    nextPage,
    totalPages,
    currentpage,
    previousPage,
  } = props.extra;

  return (
    <div className="mx-auto mt-5 border border-stroke dark:border-strokedark bg-white dark:bg-boxdark">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse table-auto">
          <thead>
            <tr>
              {columns?.map((column, index) => (
                <th
                  key={index}
                  className="bg-white text-secondary-light border-y dark:bg-boxdark dark:border-strokedark border-stroke px-4 py-4 text-center text-xs font-medium uppercase"
                  style={{ minWidth: column.minWidth }}
                >
                  {column?.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows?.map((row, index) => (
              <RowComponent key={index} row={row} index={index} />
            ))}
          </tbody>
        </table>
      </div>

      <Divider flexItem />
      {totalPages >= 2 ? (
        <div
          style={{
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
            paddingInline: 35,
            paddingBlock: 15,
            borderRadius: 5,
          }}
        >
          <Button
            variant="contained"
            color="inherit"
            disabled={previousPage === null ? true : false}
            startIcon={<WestIcon style={{ fontSize: 14, color: "black" }} />}
            onClick={() =>
              handlePageChange(currentpage > 1 ? currentpage - 1 : currentpage)
            }
            title="Previous"
          />

          <Pagination
            count={totalPages}
            page={currentpage}
            shape="circular"
            color="standard"
            variant="text"
            hidePrevButton
            hideNextButton
            onChange={(e, page) => {
              handlePageChange(page);
            }}
          />

          <Button
            disabled={nextPage === null ? true : false}
            color="inherit"
            endIcon={<EastIcon style={{ fontSize: 14, color: "black" }} />}
            onClick={() => {
              handlePageChange(currentpage + 1);
            }}
            variant="contained"
            title="Next"
          />
        </div>
      ) : null}
    </div>
  );
}
