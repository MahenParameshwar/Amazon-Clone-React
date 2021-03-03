export const styles = {
  container: {
    height: "60px",
    backgroundColor: "#131921",
  },
  header: {
    display: "flex",
    height: "inherit",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input_search: {
    maxWidth: "735px",
    height: "35px",
    width: "100%",
    padding: 0,
    border: "0",
    outline: "none",
    borderRadius: "3px",
    paddingLeft: "5px",
  },
  search_button: {
    position: "absolute",
    top: "0",
    right: "0",
    height: "35px",
    borderTopLeftRadius: "unset",
    borderBottomLeftRadius: "unset",
    border: "none",
  },
  searchForm: {
    width: "100%",
    position: "relative",
    maxWidth: "735px",
  },
  nav_tools: {
    color: "white",
    display: "flex",
    alignItems: "center",
    width: "300px",
    justifyContent: "space-between",
  },
  cart_container: {
    display: "flex",
    "& img": {
      height: "35px",
    },
  },
  total: {
    color: "#f08804",
  },
  locationContainer: {
    color: "white",
    width: "160px",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    alignItems: "center",

    "& img": {
      position: "absolute",
      left: "20px",
      top: "3px",
      height: "30px",
    },

    "@media (max-width:720px)": {
      display: "none",
    },
  },
  signIn: {
    cursor: "pointer",
  },
  miniText: {
    display: "inline-block",
    fontSize: "12px",
    fontWeight: "400",
  },
  menu: {
    width: "100vw",
    maxWidth: "300px",
    padding: "20px",
  },
};
