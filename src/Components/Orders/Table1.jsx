import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import OrderData from "../../Data/Orders";
import { useState } from "react";
import EnhancedTableHead from "../Table/EnhancedTableHead";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.warning.main,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

/*const StyledTablePagination = withStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
  },
}))(TablePagination);*/

const StyledTableRow = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.warning.light,
  },
}))(TableRow);
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function Table1() {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const classes = useStyles();

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  /*const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, OrderData.length - page * rowsPerPage);*/

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <EnhancedTableHead
          classes={classes}
          order={order}
          orderBy={orderBy}
          onRequestSort={handleRequestSort}
          rowCount={OrderData.length}
        />

        <TableBody>
          {(rowsPerPage > 0
            ? stableSort(OrderData, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : OrderData
          ).map((row, index) => (
            <TableRow hover tabIndex={-1} key={index}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.id}</StyledTableCell>
              <StyledTableCell align="left">
                {"Delivery- " + row.partner}
              </StyledTableCell>
              <StyledTableCell
                style={{ whiteSpace: "normal", wordBreak: "break-word" }}
                align="left"
              >
                <Grid container>
                  <Grid item lg="12">
                    <Typography variant="body2">{row.location}</Typography>
                    <Typography variant="body2">
                      {row.date + "," + row.time}
                    </Typography>
                  </Grid>
                </Grid>
              </StyledTableCell>
              <StyledTableCell align="left">
                {"LKR " + row.price}
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <StyledTableRow>
            <TablePagination
              rowsPerPageOptions={[
                5,
                10,
                15,
                20,
                25,
                { label: "All", value: -1 },
              ]}
              count={OrderData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            ></TablePagination>
          </StyledTableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

export default Table1;
