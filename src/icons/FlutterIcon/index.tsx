import BaseIcon from "../BaseIcon";
import { SvgIconProps } from "../SvgIcon";
import styles from "../styles/index.module.scss";

export default function FlutterIcon({
  className,
  debugBbox,
}: SvgIconProps): JSX.Element {
  return (
    <BaseIcon className={className} debugBbox={debugBbox}>
      <svg
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.centeredIcon}
      >
        <title>Flutter</title>
        <path fill="#40c4ff" d="M26 4 6 24l6 6L38 4zM38 22 27 33l-6-6 5-5z" />
        <path fill="#03a9f4" d="m15 33 6-6 6 6-6 6z" />
        <path fill="#01579b" d="M38 44H26l-5-5 6-6z" />
        <path fill="#084994" d="m21 39 9-3-3-3z" />
      </svg>
    </BaseIcon>
  );
}
