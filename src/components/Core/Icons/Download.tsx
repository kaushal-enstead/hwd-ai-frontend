import React from 'react';

export const DownloadIcon = ({
  color,
  ...props
}: React.ComponentPropsWithRef<'svg'>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48.83"
    height="48.83"
    viewBox="0 0 48.83 48.83"
    {...props}
  >
    <g
      id="Grupo_176591"
      data-name="Grupo 176591"
      transform="translate(-5754.584 -1099.585)"
    >
      <rect
        id="Retângulo_161566"
        data-name="Retângulo 161566"
        width="48"
        height="48"
        transform="matrix(1, 0.017, -0.017, 1, 5755.422, 1099.585)"
        fill={color ?? 'var(--color-tomato-50)'}
      />
      <path
        id="Caminho_117170"
        data-name="Caminho 117170"
        d="M21.923,16.562v5.361H1.41V16.562H0v6.771H23.333V16.562ZM10.961,0V14.983L6.868,10.911l-1.011.995,5.81,5.81,5.809-5.81-1.011-.995-4.094,4.072V0Z"
        transform="translate(5767 1112)"
        fill="#f1f1f1"
      />
    </g>
  </svg>
);
