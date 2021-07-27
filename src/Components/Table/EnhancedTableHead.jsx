import PropTypes from "prop-types";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import { withStyles } from "@material-ui/core/styles";

const headCells = [
  { id: "name", numeric: false, disablePadding: false, label: "Customer Name" },
  { id: "id", numeric: false, disablePadding: false, label: "ID" },
  { id: "partner", numeric: false, disablePadding: false, label: "Partner" },
  { id: "location", numeric: false, disablePadding: false, label: "Location" },
  { id: "price", numeric: false, disablePadding: false, label: "Price" },
];

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.warning.main,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableSort = withStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
    "&:hover": {
      color: theme.palette.common.white,
    },
    "&$active": {
      color: theme.palette.common.white,
    },
  },

  active: {},
}))(TableSortLabel);

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <StyledTableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <StyledTableSort
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </StyledTableSort>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default EnhancedTableHead;
