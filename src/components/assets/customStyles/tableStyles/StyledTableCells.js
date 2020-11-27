import { withStyles } from "@material-ui/core/styles"
import TableCell from "@material-ui/core/TableCell"

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontWeight: "700",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

export default StyledTableCell
