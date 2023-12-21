import React from 'react';

export const TwitterIcon = ({
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
      id="Grupo_176602"
      data-name="Grupo 176602"
      transform="translate(-5615.584 -1198.683)"
    >
      <rect
        id="Retângulo_161571"
        data-name="Retângulo 161571"
        width="48"
        height="48"
        transform="matrix(1, 0.017, -0.017, 1, 5616.422, 1198.683)"
        fill={color ?? 'var(--color-tomato-50)'}
      />
      <path
        id="Caminho_117552"
        data-name="Caminho 117552"
        d="M12.332,14.9h0L11.3,13.432,3.12,1.727H6.643l6.6,9.446,1.028,1.471L22.86,24.923H19.337ZM22.859,0l-8.4,9.769L7.742,0H0L10.151,14.773,0,26.571H2.294l8.875-10.317,7.089,10.317H26L15.473,11.251h0L25.153,0Z"
        transform="translate(5626.584 1209.683)"
        fill="#fff"
      />
    </g>
  </svg>
);
