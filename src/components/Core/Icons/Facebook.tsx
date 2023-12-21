import React from 'react';

export const FacebookIcon = ({
  color,
  ...props
}: React.ComponentPropsWithRef<'svg'>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="48.83"
    height="48.83"
    viewBox="0 0 48.83 48.83"
    {...props}
  >
    <defs>
      <clipPath id="clip-path">
        <rect
          id="Retângulo_161569"
          data-name="Retângulo 161569"
          width="13.335"
          height="24.898"
          fill="none"
        />
      </clipPath>
    </defs>
    <g
      id="Grupo_176604"
      data-name="Grupo 176604"
      transform="translate(-5495.584 -1198.585)"
    >
      <rect
        id="Retângulo_161573"
        data-name="Retângulo 161573"
        width="48"
        height="48"
        transform="matrix(1, 0.017, -0.017, 1, 5496.422, 1198.585)"
        fill={color ?? 'var(--color-tomato-50)'}
      />
      <g
        id="Grupo_176590"
        data-name="Grupo 176590"
        transform="translate(5513 1210)"
      >
        <g
          id="Grupo_176589"
          data-name="Grupo 176589"
          clipPath="url(#clip-path)"
        >
          <path
            id="Caminho_117172"
            data-name="Caminho 117172"
            d="M12.461,14,13.152,9.5H8.829V6.576A2.253,2.253,0,0,1,11.368,4.14h1.967V.3A23.973,23.973,0,0,0,9.846,0C6.287,0,3.958,2.155,3.958,6.065V9.5H0V14H3.958V24.9H8.829V14Z"
            fill="#fefefe"
          />
        </g>
      </g>
    </g>
  </svg>
);
