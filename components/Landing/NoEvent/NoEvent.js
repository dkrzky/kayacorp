import Link from "next/link";

const NoEvent = () => {
  return (
    <di className="center">
      NO EVENT AVAILABLE :(
      <Link href={"/"}>GO BACK TO HOME</Link>
    </di>
  );
};

export default NoEvent;
