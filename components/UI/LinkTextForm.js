import Link from "next/link";

const LinkTextForm = ({
  label,
  link,
  labelWidth,
  labelStyle,
  textStyle,
  style,
}) => {
  return (
    <div style={{ display: "flex", width: "100%", ...style }}>
      <div
        style={{ display: "flex", width: labelWidth ?? "20%", flex: "none", flexBasis: "45%" }}
      >
        <label
          style={{
            fontWeight: "bold",
            color: "#888",
            userSelect: "none",
            ...labelStyle,
          }}
        >
          {label}
        </label>
        <label
          style={{
            marginLeft: "auto",
            marginRight: "5px",
            fontWeight: "bold",
            color: "#888",
            userSelect: "none",
          }}
        >
          :
        </label>
      </div>
      <div
        style={{
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          overflow: "hidden",
        }}
      >
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "blue", wordBreak: "break-word", ...textStyle }}
        >
          {link}
        </Link>
      </div>
    </div>
  );
};

export default LinkTextForm;
