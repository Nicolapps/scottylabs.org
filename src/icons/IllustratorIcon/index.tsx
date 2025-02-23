import BaseIcon from "../BaseIcon";
import styles from "../styles/index.module.scss";
import { SvgIconProps } from "../SvgIcon";

export default function IllustratorIcon({
  className,
  debugBbox,
}: SvgIconProps): JSX.Element {
  return (
    <BaseIcon className={className} debugBbox={debugBbox}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 511.45 498.66"
        className={styles.centeredIcon}
      >
        <title>Adobe Illustrator</title>
        <defs>
          <style>{".b{fill:#ff9a00}"}</style>
        </defs>
        <title>{"adobe-illustrator"}</title>
        <rect
          width={511.45}
          height={498.66}
          rx={90.57}
          style={{
            fill: "#300",
          }}
        />
        <path
          className="b"
          d="M247.84 299.26h-79.26l-16.12 50.09a4 4 0 0 1-4.12 3.09H108.2q-3.44 0-2.4-3.78L174.42 151q1-3.09 2.06-7a74.51 74.51 0 0 0 1.37-13.9 2.11 2.11 0 0 1 1.8-2.4 2 2 0 0 1 .6 0h54.55c1.6 0 2.51.57 2.75 1.71L315.43 349c.69 2.28 0 3.43-2.06 3.43h-44.6a3.17 3.17 0 0 1-3.43-2.4ZM180.94 256h54.2q-2.05-6.87-4.8-15.44t-5.83-18.36l-6.18-19.55q-3.09-9.78-5.66-18.88t-4.67-16.6h-.34a276.76 276.76 0 0 1-7.21 27.44q-4.8 15.45-9.78 31.57T180.94 256ZM361.74 164.08a24.9 24.9 0 0 1-18.87-7.55 27.12 27.12 0 0 1-7.2-19.56 25.17 25.17 0 0 1 7.72-19 26.52 26.52 0 0 1 19-7.38q12.35 0 19.38 7.38a26.52 26.52 0 0 1 7 19 26.78 26.78 0 0 1-7.38 19.56 26.32 26.32 0 0 1-19.65 7.55ZM338.07 349V185c0-2.06.91-3.09 2.74-3.09H383c1.82 0 2.74 1 2.74 3.09v164c0 2.28-.91 3.43-2.74 3.43h-41.84c-2.06.01-3.09-1.14-3.09-3.43Z"
        />
      </svg>
    </BaseIcon>
  );
}
