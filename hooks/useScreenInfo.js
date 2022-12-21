import { useMediaQuery } from "react-responsive";

const useScreenInfo = () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isPortrait = useMediaQuery({ orientation: "portrait" });

  return {
    isMobile: isTabletOrMobile && isPortrait,
  };
};

export default useScreenInfo;
