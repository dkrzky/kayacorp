import CircularProgress from "@mui/material/CircularProgress";

const LandingBackdrop = (props) => {
  return (
    <div className="main-backdrop">
      <CircularProgress
        thickness={4}
        size="5rem"
        sx={{
          color: "red",
        }}
      />
      <br />
      <p>Tunggu Sebentar...</p>
    </div>
  );
};

export default LandingBackdrop;
