import { makeStyles } from "@mui/styles"

export default makeStyles((theme) => ({
  logo: {
    color: "black",
    fontSize: "50px",
    fontWeight: "900"
  },
  span: {
    color: "#1976D2"
  },
  imageLink: {
    display: "flex",
    justifyContent:"center",
    padding:"10% 0",
  },
  image: {
    width:"70%",
  },
  links: {
    color: theme.palette.text.primary,
    textDecoration: "none",
  },
  genreImage: {
    filter: theme.palette.mode === "dark" && "invert(1)",
  }
}))