import React from 'react';

export const WhatsappIcon = ({
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
          id="Retângulo_161575"
          data-name="Retângulo 161575"
          width="28.235"
          height="28.372"
          fill="none"
        />
      </clipPath>
    </defs>
    <g
      id="Grupo_176601"
      data-name="Grupo 176601"
      transform="translate(-5675.376 -1198.585)"
    >
      <rect
        id="Retângulo_161572"
        data-name="Retângulo 161572"
        width="48"
        height="48"
        transform="matrix(1, 0.017, -0.017, 1, 5676.214, 1198.585)"
        fill={color ?? 'var(--color-tomato-50)'}
      />
      <g
        id="Grupo_176600"
        data-name="Grupo 176600"
        transform="translate(675.675 -107)"
      >
        <g
          id="Grupo_176599"
          data-name="Grupo 176599"
          transform="translate(5010 1315)"
        >
          <g
            id="Grupo_176598"
            data-name="Grupo 176598"
            clipPath="url(#clip-path)"
          >
            <path
              id="Caminho_117176"
              data-name="Caminho 117176"
              d="M14.177,0A14.066,14.066,0,0,0,1.995,21.086L0,28.372l7.453-1.955a14.046,14.046,0,0,0,6.718,1.711h.006A14.064,14.064,0,0,0,14.177,0m0,25.754h0a11.664,11.664,0,0,1-5.947-1.629L7.8,23.872l-4.422,1.16,1.18-4.312-.278-.442a11.685,11.685,0,1,1,9.9,5.476ZM20.586,17c-.351-.176-2.078-1.026-2.4-1.143s-.556-.176-.791.176-.907,1.143-1.112,1.377-.41.264-.761.088A9.6,9.6,0,0,1,12.7,15.756a10.564,10.564,0,0,1-1.954-2.433c-.2-.352-.022-.542.154-.717.158-.157.351-.41.527-.616a2.374,2.374,0,0,0,.351-.587.648.648,0,0,0-.03-.616c-.088-.176-.791-1.9-1.083-2.608-.285-.685-.574-.593-.791-.6s-.439-.012-.673-.012A1.291,1.291,0,0,0,8.262,8a3.939,3.939,0,0,0-1.229,2.931,6.838,6.838,0,0,0,1.434,3.634,15.659,15.659,0,0,0,6,5.3,20.258,20.258,0,0,0,2,.74,4.818,4.818,0,0,0,2.212.139,3.617,3.617,0,0,0,2.371-1.671,2.937,2.937,0,0,0,.2-1.671c-.088-.146-.322-.234-.673-.41Z"
              fill="#fff"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);
