import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  root: {
    display: "flex",
    width: "100vw",
    height: "60vh",
    fontSize: 12,
    backgroundColor: "#ffffff",
  },
  close: {
    textAlign: "right",
  },
  title: {
    fontWeight: 600,
  },
  part1: {
    width: "100vw",
    height: "5vh",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    border: "1px solid #e0e0e0",
  },
  part2: {
    width: "28vw",
    height: `calc(55vh - ${theme.spacing(1)}px)`,
    border: "1px solid #e0e0e0",
    marginRight: theme.spacing(1),
    backgroundColor: "#f8f8f8",
  },
  part3: {
    width: `calc(72vw - ${theme.spacing(1)}px)`,
    height: `calc(55vh - ${theme.spacing(1)}px)`,
    backgroundColor: "#ffffff",
    border: "1px solid #e0e0e0",
    padding: "0 4px",
    fontSize: 10,
    color: "#000000",
  },
  smallTool: {
    width: theme.spacing(2),
    height: theme.spacing(2),
    color: "#5f6368",
  },
  gridDataSearch: {
    backgroundColor: "#ffffff",
    fontSize: 10,
    paddingLeft: 4,
    paddingRight: 4,
  },
  adviseImg: {
    width: 16,
    height: 16,
    marginRight: 2,
  },
  adviseTip: {
    fontSize: 10,
  },
}));

