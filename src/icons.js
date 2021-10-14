import React from 'react'

const MinusSquareO = props => (
  <svg {...props} width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 1.175L3.7085 5L0 8.825L1.1417 10L6 5L1.1417 0L0 1.175Z" fill="#B6C9D2"/>
  </svg>
)

const PlusSquareO = props => (
  <svg {...props} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.825 -1.02722e-07L5 3.7085L1.175 -7.71506e-07L4.24726e-07 1.1417L5 6L10 1.1417L8.825 -1.02722e-07Z" fill="#B6C9D2"/>
  </svg>
)

const EyeO = props => (
  <svg {...props} viewBox="61 51 902 666">
    <g>
      <path
        d="M963 384q0 14 -21 62q-26 65 -61 109q-57 71 -139 112q-99 50 -230 50t-231 -50q-80 -41 -138 -112q-34 -43 -61 -109q-21 -48 -21 -62v0v0v0v0q0 -14 21 -62q27 -66 61 -109q57 -71 139 -112q100 -50 230 -50t230 50q81 41 139 112q35 44 62 109q20 48 20 62v0v0v0v0z
  M889 384q-25 -77 -64 -126h-1q-46 -59 -114 -93q-85 -42 -198.5 -42t-198.5 42q-67 34 -114 93q-40 49 -65 126q25 77 65 126q47 59 114 93q85 43 199 43t198 -43q67 -33 114 -93q40 -49 65 -126zM512 558q-72 0 -122.5 -50.5t-50.5 -122.5t50.5 -122.5t122.5 -50.5
  t122.5 50.5t50.5 122.5t-50.5 122.5t-122.5 50.5zM614 385q0 -42 -30 -72t-72 -30t-72 30t-30 72t30 72t72 30t72 -30t30 -72z"
      />
    </g>
  </svg>
)

const CloseSquareO = props => (
  <svg {...props} width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.4 4.2V0.9L8.7 4.2H5.4ZM1.2 0C0.534 0 0 0.534 0 1.2V10.8C0 11.1183 0.126428 11.4235 0.351472 11.6485C0.576515 11.8736 0.88174 12 1.2 12H8.4C8.71826 12 9.02348 11.8736 9.24853 11.6485C9.47357 11.4235 9.6 11.1183 9.6 10.8V3.6L6 0H1.2Z" fill="#61747D"/>
  </svg>
)

export { PlusSquareO, MinusSquareO, CloseSquareO, EyeO }


