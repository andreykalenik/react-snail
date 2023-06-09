import * as React from "react"
import styled from 'styled-components'
const Spiner = () => {
  return(
    <SpinerWrapper>
     <svg
      xmlns="http://www.w3.org/2000/svg"
      id="snail-static"
      width={512}
      height={512}
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
    >
      <style>
        {
          "@keyframes snail-static-u-layer_2_tr__tr{0%{transform:translate(176.598843px,265.00209px) rotate(0deg)}25%{transform:translate(176.598843px,265.00209px) rotate(-90deg)}50%{transform:translate(176.598843px,265.00209px) rotate(-180deg)}75%{transform:translate(176.598843px,265.00209px) rotate(-270deg)}to{transform:translate(176.598843px,265.00209px) rotate(-360deg)}}"
        }
      </style>
      <g id="snail-static-u-layer_1">
        <g id="snail-static-s-g1" transform="matrix(.1 0 0 -.1 0 512)">
          <path
            id="snail-static-s-path1"
            fill="#fc5200"
            d="M4070 5105c-132-42-208-189-170-327 15-52 68-119 118-146l42-23v-556l-86-21c-158-39-290-116-397-231-61-67-126-169-153-242l-17-46 37-61c92-152 176-368 220-563 268-1209-655-2359-1892-2359-441 0-822 127-1181 395-53 39-102 79-110 88-19 24-37 21-120-18C197 916 85 788 30 615 10 553 7 518 2 314-3 59 2 34 57 11 79 2 494 0 1750 3l1665 3 97 22c497 114 846 462 961 957 20 88 21 121 27 1210l6 1120 26 96c31 113 76 226 121 301 18 29 89 119 157 198l123 145-97 3c-86 2-97 5-92 20l89 267 83 249 45 24c51 27 105 76 125 113 65 125 18 284-106 353-47 26-65 30-125 30-109 0-195-56-238-154-46-104-19-220 70-299l55-49-92-276-92-276h-328v545l45 24c157 83 180 311 43 426-66 56-167 76-248 50Zm127-175c61-37 56-121-10-154-32-15-42-16-68-6-74 31-81 126-11 164 36 20 51 20 89-4Zm723-15c34-34 33-87-3-122-56-56-151-17-151 61 0 84 93 120 154 61Z"
          />
        </g>
      </g>
      <g
        style={{
          animation:
            "snail-static-u-layer_2_tr__tr 2000ms linear infinite normal backwards",
        }}
        transform="translate(176.599 265.002)"
      >
        <g id="snail-static-u-layer_2" transform="translate(-176.599 -265.002)">
          <path
            id="snail-static-s-path2"
            fill="#fc5200"
            d="M156.5 89.7c-42.3 5.4-78.3 23.4-107.5 54-50.3 52.5-62.8 131.5-31.2 197.4 32 66.7 103.8 106.8 177 98.8 22.8-2.4 39.7-7.5 60.7-17.9 34.7-17.3 62.1-44.9 79.1-79.5 32.6-66.7 20.4-145.8-30.8-199.1-35-36.3-78.5-54.7-128.5-54.3-8.7.1-17.1.4-18.8.6Zm18.2 54.7c27.2 7.5 47.9 23.7 59 46.1 6.1 12.2 8.4 22.2 8.4 37.2 0 22.7-8.7 43.3-24.5 58.1-7.7 7.1-14.4 11.1-25.1 14.8-7.2 2.5-9.4 2.8-21 2.8s-13.8-.3-21-2.8c-26.3-9.1-41.9-29.7-41.9-55.1 0-36.2 32.9-61.4 64.5-49.5 14 5.2 19.4 13.5 12.9 20-3.7 3.7-6.6 3.6-14.6-.5-6.4-3.3-8.2-3.8-14.3-3.8-12.3 0-21.3 6.1-27 18.3-2.3 4.8-2.6 6.8-2.6 15.5 0 9.3.2 10.5 3.3 16.7 11.1 22.7 44.3 30.5 67.2 15.8 11.6-7.4 21.4-22.2 24.5-36.7 6.9-32.5-10.8-63.7-43.3-76.1-11.4-4.4-18.4-5.6-31.2-5.5-39.1.3-70.2 25.9-82.6 67.8-3.6 12-4.5 34.4-2 47.8 6.9 36.8 32.2 66.2 70.1 81.9 28.1 11.5 61.5 12.9 91.2 3.6 25.2-7.8 45.4-21.6 65.9-45.1 4.4-5 5.4-5.7 8.7-5.7 5.3 0 8.7 3.5 8.7 8.9 0 3.5-.9 5.1-7.4 12.8-21.2 25.2-50.8 42.9-84.7 50.5-9.1 2-13.1 2.3-31.4 2.3-16.6 0-22.8-.4-29.5-1.8-52-11.2-90.7-43.4-105.4-87.7-4.5-13.7-5.9-22.5-6-38.5 0-17 1.6-27.2 6.6-41.3 13.7-39 43.2-65.6 80.5-72.7 11.9-2.2 32.2-1.4 44 1.9Z"
          />
        </g>
      </g>
    </svg>  
  </SpinerWrapper>
  )
}


const SpinerWrapper = styled.div`
  display: flex;
  padding: 24px;
  margin: auto;
  width: 600px;
`

export default Spiner
