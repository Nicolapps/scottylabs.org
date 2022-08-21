import BaseIcon from "../BaseIcon";
import styles from "../styles/index.module.scss";

interface Props {
  className?: string;
  /**
   * Show the bounding box of the wrapper in black, and the bounding box of the
   * inner svg in yellow.
   */
  debugBbox?: boolean;
}

export default function MediumIcon({
  className,
  debugBbox,
}: Props): JSX.Element {
  return (
    <BaseIcon className={className} verticalScale={0.95} debugBbox={debugBbox}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1043.63 592.71"
        className={styles.centeredIcon}
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path d="M588.67,296.36c0,163.67-131.78,296.35-294.33,296.35S0,460,0,296.36,131.78,0,294.34,0,588.67,132.69,588.67,296.36" />
            <path d="M911.56,296.36c0,154.06-65.89,279-147.17,279s-147.17-124.94-147.17-279,65.88-279,147.16-279,147.17,124.9,147.17,279" />
            <path d="M1043.63,296.36c0,138-23.17,249.94-51.76,249.94s-51.75-111.91-51.75-249.94S963.29,46.42,991.87,46.42s51.76,111.9,51.76,249.94" />
          </g>
        </g>
      </svg>
    </BaseIcon>
  );
}
