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
  linearProcess: {
    backgroundColor: theme.palette.warning.main,
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
    width: "16vw",
    height: `calc(55vh - ${theme.spacing(1)}px)`,
    marginRight: theme.spacing(1),
  },
  part21: {
    width: "16vw",
    height: `calc(20vh - ${theme.spacing(2)}px)`,
    maxHeight: `calc(20vh - ${theme.spacing(2)}px)`,
    border: "1px solid #e0e0e0",
    backgroundColor: "#f8f8f8",
    paddingLeft: theme.spacing(1),
    paddingTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  part22: {
    width: "16vw",
    height: "35vh",
    maxHeight: "35vh",
    border: "1px solid #e0e0e0",
    backgroundColor: "#f8f8f8",
    paddingLeft: theme.spacing(1),
    paddingTop: theme.spacing(1),
  },
  part3: {
    width: `calc(84vw - ${theme.spacing(1)}px)`,
    maxWidth: `calc(84vw - ${theme.spacing(1)}px)`,
    overflowX: "scroll",
    height: `calc(55vh - ${theme.spacing(1)}px)`,
    backgroundColor: "#ffffff",
    border: "1px solid #e0e0e0",
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
  typeImg: {
    width: 10,
    height: 10,
  },
  fieldMeta: {
    cursor: "pointer",
    "&:hover": {
      fontWeight: 600,
      backgroundColor: "#ffffff",
    }
  },
  fieldFunc: {
    fontWeight: 600,
    color: "#017ba8",
    paddingBottom: 1,
    borderBottom: "2px solid #e0e0e0",
  },
  fieldArgs: {
    color: "#000000",
    paddingBottom: 1,
    borderBottom: "2px solid #e0e0e0",
  }
}));

