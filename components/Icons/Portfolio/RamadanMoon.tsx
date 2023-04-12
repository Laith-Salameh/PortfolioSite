import * as React from "react"
import { ILogo } from "."
import anime from "animejs";

const Moon : React.FunctionComponent<ILogo> = ({className, isVisible}) => {
  const logoRef = React.useRef<HTMLOrSVGElement | anime.AnimeInstance | any>(null);
  React.useEffect(()=>{
      if(isVisible){
          const animationObject : any= {
              targets: `.moon path`,
              strokeDashoffset: [anime.setDashoffset, 0],
              easing: 'easeInOutSine',
              duration: 1500,
              delay: function(_: any, i: number) : number { return i * 5 } 
          }
          if(logoRef?.current) logoRef.current= anime(animationObject) ;
      }
  },[isVisible])
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    id="svg5"
    viewBox="0 0 33.266 33.697"
    className={className + " moon"}
    ref={logoRef}
  >
    <g id="layer1" transform="translate(-105.961 -154.867)">
      <g id="g1810" transform="matrix(.26458 0 0 .26458 106.094 139.687)">
        <path
          id="polygon3029"
          d="M412.22 206.12h3.28v62.73h-3.28z"
          style={{
            fill: "url(#SVGID_1_)",
          }}
          transform="translate(-359.04 -206.12)"
        />
        <g
          id="g3714"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#01c38d",
            strokeWidth: 1.00157,
            
            strokeOpacity: 1,
          }}
          transform="translate(-359.04 -206.12)"
        >
          <g
            id="g3572"
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#01c38d",
              strokeWidth: 0.755906,
              
              strokeOpacity: 1,
            }}
          >
            <linearGradient
              id="SVGID_00000093885977622778112810000010277482601119299497_"
              x1={421.201}
              x2={449.149}
              y1={356.741}
              y2={356.741}
              gradientUnits="userSpaceOnUse"
            >
              <stop
                id="stop3031"
                offset={0}
                style={{
                  stopColor: "#ffc83d",
                }}
              />
              <stop
                id="stop3033"
                offset={1}
                style={{
                  stopColor: "#c87236",
                }}
              />
            </linearGradient>
            <path
              id="polygon3036"
              d="m421.2 356.84 19.63 2.8 8.32-3.48-14.22-2.32z"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <linearGradient
              id="SVGID_00000063632872622618898900000006654590375412168122_"
              x1={428.349}
              x2={446.964}
              y1={360.03}
              y2={361.349}
              gradientUnits="userSpaceOnUse"
            >
              <stop
                id="stop3038"
                offset={0}
                style={{
                  stopColor: "#ffc83d",
                }}
              />
              <stop
                id="stop3040"
                offset={1}
                style={{
                  stopColor: "#c87236",
                }}
              />
            </linearGradient>
            <path
              id="path3043"
              d="m440.93 363.61-10.77-1.8-7.08-1.18-3.62-.6c.96-.87 1.55-1.93 1.74-3.19l4.26.61 5.4.77 9.97 1.42z"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <linearGradient
              id="SVGID_00000044151718181376741340000013123513825761423504_"
              x1={426.454}
              x2={428.011}
              y1={361.974}
              y2={355.391}
              gradientUnits="userSpaceOnUse"
            >
              <stop
                id="stop3045"
                offset={0}
                style={{
                  stopColor: "#b69271",
                }}
              />
              <stop
                id="stop3047"
                offset={1}
                style={{
                  stopColor: "#000",
                }}
              />
            </linearGradient>
            <path
              id="path3050"
              d="M430.86 358.22c-.04.86-.38 2.45-.7 3.59l-7.08-1.18c1.01-1 1.84-2.05 2.38-3.18z"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <linearGradient
              id="SVGID_00000036954279479791193810000007306539335695792297_"
              x1={454.407}
              x2={440.922}
              y1={359.68}
              y2={359.973}
              gradientUnits="userSpaceOnUse"
            >
              <stop
                id="stop3052"
                offset={0}
                style={{
                  stopColor: "#ffc83d",
                }}
              />
              <stop
                id="stop3054"
                offset={1}
                style={{
                  stopColor: "#c7552d",
                }}
              />
            </linearGradient>
            <path
              id="path3057"
              d="m440.93 363.61-.1-3.96 8.32-3.48c.41 1.29.97 2.15 1.64 2.71z"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <path
              id="polygon3059"
              d="m450.79 358.87-9.86 4.74-21.47-3.58.39.58 21.08 3.77 9.67-4.83z"
              className="st5"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <linearGradient
              id="SVGID_00000016061847590400265320000004508495861943570612_"
              x1={429.791}
              x2={448.409}
              y1={339.658}
              y2={340.978}
              gradientUnits="userSpaceOnUse"
            >
              <stop
                id="stop3061"
                offset={0}
                style={{
                  stopColor: "#ffc83d",
                }}
              />
              <stop
                id="stop3063"
                offset={1}
                style={{
                  stopColor: "#c87236",
                }}
              />
            </linearGradient>
            <path
              id="polygon3066"
              d="m440.44 322.24-.09 36.34-8.28-1.03-5.34-.65-2.82-.35-2.13-34.6 1.59.03 9.8.15z"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <linearGradient
              id="SVGID_00000008138064017509139250000011395787488859623591_"
              x1={426.7}
              x2={429.237}
              y1={361.173}
              y2={307.387}
              gradientUnits="userSpaceOnUse"
            >
              <stop
                id="stop3068"
                offset={0}
                style={{
                  stopColor: "#b69271",
                }}
              />
              <stop
                id="stop3070"
                offset={1}
                style={{
                  stopColor: "#000",
                }}
              />
            </linearGradient>
            <linearGradient
              id="SVGID_00000091720909436303001940000011188725664624936592_"
              x1={421.826}
              x2={440.538}
              y1={323.209}
              y2={323.209}
              gradientUnits="userSpaceOnUse"
            >
              <stop
                id="stop3075"
                offset={0}
                style={{
                  stopColor: "#ffc83d",
                }}
              />
              <stop
                id="stop3077"
                offset={1}
                style={{
                  stopColor: "#c7552d",
                }}
              />
            </linearGradient>
            <path
              id="polygon3080"
              d="m440.49 324.03-18.66-1.06v-.58l18.71.43z"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <linearGradient
              id="SVGID_00000047036315321033017630000015935310894748611512_"
              x1={453.98}
              x2={440.495}
              y1={340.025}
              y2={340.318}
              gradientUnits="userSpaceOnUse"
            >
              <stop
                id="stop3082"
                offset={0}
                style={{
                  stopColor: "#ffc83d",
                }}
              />
              <stop
                id="stop3084"
                offset={1}
                style={{
                  stopColor: "#c7552d",
                }}
              />
            </linearGradient>
            <path
              id="polygon3087"
              d="m440.35 358.58 7.13-2.73 2.54-34-9.58.39z"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <linearGradient
              id="SVGID_00000150091472008253400460000015882208936847166100_"
              x1={431.175}
              x2={449.79}
              y1={320.141}
              y2={321.461}
              gradientUnits="userSpaceOnUse"
            >
              <stop
                id="stop3089"
                offset={0}
                style={{
                  stopColor: "#ffc83d",
                }}
              />
              <stop
                id="stop3091"
                offset={1}
                style={{
                  stopColor: "#c87236",
                }}
              />
            </linearGradient>
            <path
              id="path3094"
              d="m451.89 321.53-.45.72-10.47.54-20.57-.45-.36-.81c1.94-.82 3.72-2.1 5.26-3.34l21.05.06c1.78 1.47 3.52 2.86 5.54 3.28z"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <linearGradient
              id="SVGID_00000174585215142861782840000012589297574638829472_"
              x1={425.281}
              x2={426.977}
              y1={323.161}
              y2={315.711}
              gradientUnits="userSpaceOnUse"
            >
              <stop
                id="stop3096"
                offset={0}
                style={{
                  stopColor: "#b69271",
                }}
              />
              <stop
                id="stop3098"
                offset={1}
                style={{
                  stopColor: "#000",
                }}
              />
            </linearGradient>
            <path
              id="path3101"
              d="M426.58 318.46c-1.24 1.31-2.89 2.45-4.8 3.49l7.53.14c.04-1.03-.06-2.2-.36-3.57z"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <path
              id="path3103"
              d="m451.89 321.53-.45.72-10.47.54-20.57-.45-.36-.81c6.64.53 13.68.37 21.2.27l-1.44-3.25 6.56-.31c1.77 1.48 3.51 2.87 5.53 3.29z"
              className="st5"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <linearGradient
              id="SVGID_00000138536222266079792420000011417679523091802559_"
              x1={420.617}
              x2={451.138}
              y1={309.709}
              y2={309.709}
              gradientUnits="userSpaceOnUse"
            >
              <stop
                id="stop3105"
                offset={0}
                style={{
                  stopColor: "#ffc83d",
                }}
              />
              <stop
                id="stop3107"
                offset={1}
                style={{
                  stopColor: "#c87236",
                }}
              />
            </linearGradient>
            <path
              id="path3110"
              d="M451.14 311.86c-.69 2.62-2.44 4.97-4.78 6.39-3.67.79-17.29.79-20.96 0l-.09-.06c-2.3-1.42-4.01-3.74-4.69-6.33 3.61-4.71 8.33-8.62 13.72-11.18.24-.11.69-.1 1.09-.09.1 0 .19.01.28.01h.34c.45 0 1.07-.06 1.36.08 5.4 2.55 10.12 6.47 13.73 11.18z"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <linearGradient
              id="SVGID_00000169528166765032574510000001453620129813416841_"
              x1={433.752}
              x2={422.546}
              y1={298.038}
              y2={318.571}
              gradientUnits="userSpaceOnUse"
            >
              <stop
                id="stop3112"
                offset={0}
                style={{
                  stopColor: "#b69271",
                }}
              />
              <stop
                id="stop3114"
                offset={1}
                style={{
                  stopColor: "#000",
                }}
              />
            </linearGradient>
            <path
              id="path3117"
              d="M422.52 311.86c2.96-4.08 6.75-7.63 11.57-10.54l1.09.06c-2.44 3.49-4.32 7.16-5.57 11.02z"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <linearGradient
              id="SVGID_00000149347740160850144620000001362610139538250378_"
              x1={429.67}
              x2={435.242}
              y1={306.13}
              y2={324.846}
              gradientUnits="userSpaceOnUse"
            >
              <stop
                id="stop3119"
                offset={0}
                style={{
                  stopColor: "#ffc83d",
                }}
              />
              <stop
                id="stop3121"
                offset={1}
                style={{
                  stopColor: "#c87236",
                }}
              />
            </linearGradient>
            <path
              id="path3124"
              d="M422.34 315.37c6.09.53 12.71.35 19.69-.3l.42-2.53-21.82-.68c.16 1.44.72 2.62 1.71 3.51z"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <linearGradient
              id="SVGID_00000043444158607498608960000002219489072765655964_"
              x1={426.79}
              x2={425.76}
              y1={319.873}
              y2={308.91}
              gradientUnits="userSpaceOnUse"
            >
              <stop
                id="stop3126"
                offset={0}
                style={{
                  stopColor: "#b69271",
                }}
              />
              <stop
                id="stop3128"
                offset={1}
                style={{
                  stopColor: "#000",
                }}
              />
            </linearGradient>
            <path
              id="path3131"
              d="M422.52 311.86c.99 2.43 2.17 4.64 3.69 6.48l3.27.12.12-6.06z"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <linearGradient
              id="SVGID_00000161604538289462599450000002647664601100745894_"
              x1={450.635}
              x2={441.987}
              y1={301.211}
              y2={308.393}
              gradientUnits="userSpaceOnUse"
            >
              <stop
                id="stop3133"
                offset={0}
                style={{
                  stopColor: "#ffc83d",
                }}
              />
              <stop
                id="stop3135"
                offset={1}
                style={{
                  stopColor: "#c7552d",
                }}
              />
            </linearGradient>
            <path
              id="path3138"
              d="M451.14 311.86c-.69 2.62-2.44 4.97-4.78 6.39-3.67.79-17.29.79-20.96 0l-.09-.06c5.12.35 10.22.23 15.32-.4.62-1.46 1.45-3.71 1.81-5.26-6.91.5-14.02.26-20.96-.74 6.92.67 14.17.64 21.11.21-1.7-4.18-4.15-8.06-7.17-11.42.1 0 .19.01.28.01h.34c.45 0 1.07-.06 1.36.08 5.41 2.56 10.13 6.48 13.74 11.19z"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <linearGradient
              id="SVGID_00000002371619320675759550000014278025844220522411_"
              x1={453.54}
              x2={440.055}
              y1={319.815}
              y2={320.108}
              gradientUnits="userSpaceOnUse"
            >
              <stop
                id="stop3140"
                offset={0}
                style={{
                  stopColor: "#ffc83d",
                }}
              />
              <stop
                id="stop3142"
                offset={1}
                style={{
                  stopColor: "#c87236",
                }}
              />
            </linearGradient>
            <path
              id="path3145"
              d="m451.89 321.53-10.65.27-1.44-3.25 6.56-.31c1.77 1.48 3.51 2.87 5.53 3.29z"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <linearGradient
              id="SVGID_00000070804888717337796500000004192651326052195489_"
              x1={434.091}
              x2={429.341}
              y1={350.531}
              y2={327.233}
              gradientUnits="userSpaceOnUse"
            >
              <stop
                id="stop3147"
                offset={0}
                style={{
                  stopColor: "#ffc83d",
                }}
              />
              <stop
                id="stop3149"
                offset={1}
                style={{
                  stopColor: "#c87236",
                }}
              />
            </linearGradient>
            <path
              id="path3152"
              d="M437.72 352.8c-2.19.25-4.01 1.47-5.67 3.15-.12.12-.23.24-.35.36-1.13-1.55-2.77-3.03-4.92-4.44-.08-7.13-.75-14.75-1.97-22.83 2.43-1.02 3.94-2.79 5.36-5.58.11.18.23.36.34.54 1.75 2.66 4.19 4.91 6.98 6.07-.73 6.5-.45 14.35.23 22.73z"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <linearGradient
              id="SVGID_00000049205695919973235000000017344081274332418447_"
              x1={431.58}
              x2={431.58}
              y1={349.938}
              y2={327.065}
              gradientUnits="userSpaceOnUse"
            >
              <stop
                id="stop3154"
                offset={0}
                style={{
                  stopColor: "#d23a49",
                }}
              />
              <stop
                id="stop3156"
                offset={0.094}
                style={{
                  stopColor: "#c43750",
                }}
              />
              <stop
                id="stop3158"
                offset={0.401}
                style={{
                  stopColor: "#9a2f60",
                }}
              />
              <stop
                id="stop3160"
                offset={0.663}
                style={{
                  stopColor: "#7e2a6a",
                }}
              />
              <stop
                id="stop3162"
                offset={0.87}
                style={{
                  stopColor: "#6d2870",
                }}
              />
              <stop
                id="stop3164"
                offset={0.994}
                style={{
                  stopColor: "#672772",
                }}
              />
            </linearGradient>
            <path
              id="path3167"
              d="M437.72 352.8c-2.19.25-4.01 1.47-5.67 3.15-1.11-1.42-2.66-2.78-4.64-4.08-.08-7.13-.75-14.75-1.97-22.83 2.27-.95 3.73-2.56 5.08-5.03 1.75 2.66 4.19 4.91 6.98 6.07-.74 6.49-.46 14.34.22 22.72z"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <linearGradient
              id="SVGID_00000173119522164647720710000000344790461828577666_"
              x1={443.828}
              x2={445.949}
              y1={347.216}
              y2={326.655}
              gradientUnits="userSpaceOnUse"
            >
              <stop
                id="stop3169"
                offset={0}
                style={{
                  stopColor: "#ffc83d",
                }}
              />
              <stop
                id="stop3171"
                offset={1}
                style={{
                  stopColor: "#c87236",
                }}
              />
            </linearGradient>
            <path
              id="path3174"
              d="M448.05 329.18c-.59 7.98-.92 15.5-.96 22.54a16.584 16.584 0 0 0-2.4 4.39c-.11-.24-.22-.48-.34-.7-.76-1.48-1.6-2.54-2.59-2.77.33-8.28.47-16.03.11-22.44 1.29-1.08 2.42-3.12 3.26-5.56.11-.31.22-.64.31-.97.69 2.76 1.43 4.51 2.61 5.51z"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <linearGradient
              id="SVGID_00000074428336494034262970000008443664564396569257_"
              x1={444.608}
              x2={444.608}
              y1={349.938}
              y2={327.065}
              gradientUnits="userSpaceOnUse"
            >
              <stop
                id="stop3176"
                offset={0}
                style={{
                  stopColor: "#d23a49",
                }}
              />
              <stop
                id="stop3178"
                offset={0.094}
                style={{
                  stopColor: "#c43750",
                }}
              />
              <stop
                id="stop3180"
                offset={0.401}
                style={{
                  stopColor: "#9a2f60",
                }}
              />
              <stop
                id="stop3182"
                offset={0.663}
                style={{
                  stopColor: "#7e2a6a",
                }}
              />
              <stop
                id="stop3184"
                offset={0.87}
                style={{
                  stopColor: "#6d2870",
                }}
              />
              <stop
                id="stop3186"
                offset={0.994}
                style={{
                  stopColor: "#672772",
                }}
              />
            </linearGradient>
            <path
              id="path3189"
              d="M447.46 329.12c-.6 7.98-.92 15.5-.96 22.54-.9 1.2-1.62 2.45-2.16 3.75-.76-1.48-1.6-2.54-2.59-2.77.33-8.28.47-16.03.11-22.44 1.29-1.08 2.42-3.12 3.26-5.56.62 2.17 1.31 3.61 2.34 4.48z"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <g
              id="g3269"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            >
              <g
                id="g3247"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              >
                <linearGradient
                  id="SVGID_00000056428571401895442420000015208785413439510429_"
                  x1={424.347}
                  x2={426.572}
                  y1={332.18}
                  y2={305.586}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    id="stop3191"
                    offset={0}
                    style={{
                      stopColor: "#ffc83d",
                    }}
                  />
                  <stop
                    id="stop3193"
                    offset={1}
                    style={{
                      stopColor: "#c87236",
                    }}
                  />
                </linearGradient>
                <path
                  id="path3196"
                  d="M428.88 311.22c-1.82.14-3.74.06-5.56-.08a7.74 7.74 0 0 1 2.89-3.39c.58 1.34 1.52 2.59 2.67 3.47z"
                  style={{
                    fill: "none",
                    fillOpacity: 1,
                    stroke: "#01c38d",
                    strokeWidth: 0.755906,
                    
                    strokeOpacity: 1,
                  }}
                />
                <linearGradient
                  id="SVGID_00000042723434202772204390000001499602064026136465_"
                  x1={425.847}
                  x2={428.212}
                  y1={311.742}
                  y2={297.508}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    id="stop3198"
                    offset={0}
                    style={{
                      stopColor: "#ffc83d",
                    }}
                  />
                  <stop
                    id="stop3200"
                    offset={1}
                    style={{
                      stopColor: "#c87236",
                    }}
                  />
                </linearGradient>
                <path
                  id="path3203"
                  d="M426.85 311.13c-.89 0-1.84-.04-2.9-.11.52-.97 1.26-1.83 2.15-2.48.47.96 1.12 1.84 1.87 2.57-.36.01-.74.02-1.12.02z"
                  style={{
                    fill: "none",
                    fillOpacity: 1,
                    stroke: "#01c38d",
                    strokeWidth: 0.755906,
                    
                    strokeOpacity: 1,
                  }}
                />
                <linearGradient
                  id="SVGID_00000170262032858484658850000014771673779723112611_"
                  x1={435.187}
                  x2={437.411}
                  y1={333.087}
                  y2={306.493}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    id="stop3205"
                    offset={0}
                    style={{
                      stopColor: "#ffc83d",
                    }}
                  />
                  <stop
                    id="stop3207"
                    offset={1}
                    style={{
                      stopColor: "#c87236",
                    }}
                  />
                </linearGradient>
                <path
                  id="path3210"
                  d="M440.45 310.85c-2.26.33-4.55.4-6.83.21 1.97-.5 3.7-1.72 4.86-3.38.82.73 1.64 2.12 1.97 3.17z"
                  style={{
                    fill: "none",
                    fillOpacity: 1,
                    stroke: "#01c38d",
                    strokeWidth: 0.755906,
                    
                    strokeOpacity: 1,
                  }}
                />
                <linearGradient
                  id="SVGID_00000106849209614443301490000013706094602934790810_"
                  x1={437.278}
                  x2={439.643}
                  y1={313.642}
                  y2={299.407}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    id="stop3212"
                    offset={0}
                    style={{
                      stopColor: "#ffc83d",
                    }}
                  />
                  <stop
                    id="stop3214"
                    offset={1}
                    style={{
                      stopColor: "#c87236",
                    }}
                  />
                </linearGradient>
                <path
                  id="path3217"
                  d="M436.19 311c-.23 0-.46 0-.69-.01a8.885 8.885 0 0 0 3.07-2.52c.54.6 1.08 1.47 1.41 2.28-1.25.16-2.52.25-3.79.25z"
                  style={{
                    fill: "none",
                    fillOpacity: 1,
                    stroke: "#01c38d",
                    strokeWidth: 0.755906,
                    
                    strokeOpacity: 1,
                  }}
                />
                <linearGradient
                  id="SVGID_00000126304750675713526650000008441496032447434888_"
                  x1={431.118}
                  x2={433.342}
                  y1={332.747}
                  y2={306.153}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    id="stop3219"
                    offset={0}
                    style={{
                      stopColor: "#ffc83d",
                    }}
                  />
                  <stop
                    id="stop3221"
                    offset={1}
                    style={{
                      stopColor: "#c87236",
                    }}
                  />
                </linearGradient>
                <path
                  id="path3224"
                  d="M437.16 304.6c-2.37-.48-5.02-.51-7.38.02 1.2-1.15 2.59-2.1 4.1-2.8 1.19.92 2.09 1.85 3.28 2.78z"
                  style={{
                    fill: "none",
                    fillOpacity: 1,
                    stroke: "#01c38d",
                    strokeWidth: 0.755906,
                    
                    strokeOpacity: 1,
                  }}
                />
                <linearGradient
                  id="SVGID_00000142135563885350246070000008187632365252776597_"
                  x1={432.073}
                  x2={434.438}
                  y1={312.777}
                  y2={298.542}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    id="stop3226"
                    offset={0}
                    style={{
                      stopColor: "#ffc83d",
                    }}
                  />
                  <stop
                    id="stop3228"
                    offset={1}
                    style={{
                      stopColor: "#c87236",
                    }}
                  />
                </linearGradient>
                <path
                  id="path3231"
                  d="M431.1 304.21c.86-.68 1.78-1.26 2.77-1.75.51.41.98.83 1.44 1.23.19.17.38.34.58.51-.79-.1-1.59-.15-2.39-.15-.82.01-1.62.06-2.4.16z"
                  style={{
                    fill: "none",
                    fillOpacity: 1,
                    stroke: "#01c38d",
                    strokeWidth: 0.755906,
                    
                    strokeOpacity: 1,
                  }}
                />
                <linearGradient
                  id="SVGID_00000168075454699308572080000000126838118043103398_"
                  x1={430.458}
                  x2={432.682}
                  y1={332.691}
                  y2={306.098}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    id="stop3233"
                    offset={0}
                    style={{
                      stopColor: "#ffc83d",
                    }}
                  />
                  <stop
                    id="stop3235"
                    offset={1}
                    style={{
                      stopColor: "#c87236",
                    }}
                  />
                </linearGradient>
                <path
                  id="path3238"
                  d="M431.59 310.88c1.94-.86 4.97-2.54 6.5-4.01-.17-.46-.68-1.13-.97-1.48 0 0-2.87-.04-3.53-.06-1.33-.06-4.24.03-4.24.03s-1.56 1.01-2.22 1.74c.9 1.87 2.41 3.44 4.46 3.78z"
                  style={{
                    fill: "none",
                    fillOpacity: 1,
                    stroke: "#01c38d",
                    strokeWidth: 0.755906,
                    
                    strokeOpacity: 1,
                  }}
                />
                <linearGradient
                  id="SVGID_00000000939526951024650990000003892827880837179827_"
                  x1={431.731}
                  x2={434.096}
                  y1={312.72}
                  y2={298.485}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    id="stop3240"
                    offset={0}
                    style={{
                      stopColor: "#ffc83d",
                    }}
                  />
                  <stop
                    id="stop3242"
                    offset={1}
                    style={{
                      stopColor: "#c87236",
                    }}
                  />
                </linearGradient>
                <path
                  id="path3245"
                  d="M431.59 310.7c-2.12-.4-3.35-2.15-3.96-3.32.59-.56 1.58-1.24 1.88-1.44.39-.01 1.78-.05 2.95-.05.43 0 .84 0 1.16.02.57.02 2.72.05 3.36.06.26.33.53.71.69 1.01-1.41 1.28-4.06 2.8-6.08 3.72z"
                  style={{
                    fill: "none",
                    fillOpacity: 1,
                    stroke: "#01c38d",
                    strokeWidth: 0.755906,
                    
                    strokeOpacity: 1,
                  }}
                />
              </g>
              <g
                id="g3251"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              >
                <path
                  id="path3249"
                  d="M428.85 311.2s-1.19.22-2.68.19c-1.49-.02-2.68-.27-2.68-.27s1.21-.04 2.68-.02c1.47.03 2.68.1 2.68.1z"
                  className="st30"
                  style={{
                    fill: "none",
                    fillOpacity: 1,
                    stroke: "#01c38d",
                    strokeWidth: 0.755906,
                    
                    strokeOpacity: 1,
                  }}
                />
              </g>
              <g
                id="g3255"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              >
                <path
                  id="path3253"
                  d="M440.4 310.78s-.35.11-.94.24c-.58.13-1.4.26-2.32.3-.91.04-1.74-.03-2.33-.1-.59-.08-.95-.16-.95-.16s.37.01.96.02 1.41 0 2.31-.04c.9-.04 1.71-.1 2.31-.15.59-.07.96-.11.96-.11z"
                  className="st30"
                  style={{
                    fill: "none",
                    fillOpacity: 1,
                    stroke: "#01c38d",
                    strokeWidth: 0.755906,
                    
                    strokeOpacity: 1,
                  }}
                />
              </g>
              <g
                id="g3259"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              >
                <path
                  id="path3257"
                  d="M431.59 310.9s-.07-.01-.2-.02-.31-.04-.53-.09c-.45-.1-1.06-.33-1.63-.75-.57-.41-.99-.91-1.25-1.28-.26-.38-.39-.63-.39-.63s.19.21.5.54c.31.32.76.75 1.31 1.14.55.39 1.09.67 1.51.84.21.08.38.15.5.19.11.04.18.06.18.06z"
                  className="st30"
                  style={{
                    fill: "none",
                    fillOpacity: 1,
                    stroke: "#01c38d",
                    strokeWidth: 0.755906,
                    
                    strokeOpacity: 1,
                  }}
                />
              </g>
              <g
                id="g3263"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              >
                <path
                  id="path3261"
                  d="M438.06 306.83s-.31.3-.85.76-1.31 1.06-2.22 1.64c-.91.58-1.78 1.03-2.43 1.32-.64.29-1.06.44-1.06.44s.38-.22.99-.57 1.44-.86 2.34-1.43c.9-.58 1.71-1.12 2.29-1.51.58-.41.94-.65.94-.65z"
                  className="st30"
                  style={{
                    fill: "none",
                    fillOpacity: 1,
                    stroke: "#01c38d",
                    strokeWidth: 0.755906,
                    
                    strokeOpacity: 1,
                  }}
                />
              </g>
              <g
                id="g3267"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              >
                <path
                  id="path3265"
                  d="m436.78 304.54-.86-.05c-.53-.03-1.26-.06-2.06-.07-.8-.02-1.53-.02-2.06-.01s-.86.01-.86.01.32-.08.85-.15c.53-.08 1.26-.15 2.08-.13.81.02 1.55.12 2.07.22.52.09.84.18.84.18z"
                  className="st30"
                  style={{
                    fill: "none",
                    fillOpacity: 1,
                    stroke: "#01c38d",
                    strokeWidth: 0.755906,
                    
                    strokeOpacity: 1,
                  }}
                />
              </g>
            </g>
            <g
              id="g3273"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            >
              <path
                id="path3271"
                d="M434.09 300.84s-.21.11-.6.3c-.39.2-.94.5-1.6.89-1.33.79-3.08 2.02-4.88 3.55-1.8 1.53-3.31 3.04-4.41 4.14-1.09 1.1-1.77 1.78-1.77 1.78s.62-.73 1.67-1.88c1.05-1.14 2.52-2.71 4.33-4.25s3.62-2.73 4.99-3.46c.69-.37 1.26-.63 1.65-.81.4-.17.62-.26.62-.26z"
                className="st30"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
            </g>
            <linearGradient
              id="SVGID_00000135690595240527869250000010796007658095813566_"
              x1={433.354}
              x2={427.616}
              y1={300.604}
              y2={312.241}
              gradientUnits="userSpaceOnUse"
            >
              <stop
                id="stop3275"
                offset={0}
                style={{
                  stopColor: "#b69271",
                }}
              />
              <stop
                id="stop3277"
                offset={1}
                style={{
                  stopColor: "#000",
                }}
              />
            </linearGradient>
            <path
              id="path3280"
              d="m432.29 306.16-1.77 3.87c-.98-.71-1.79-1.55-2.35-2.55l1.48-1.35z"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <g
              id="g3284"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            >
              <path
                id="path3282"
                d="M431.49 306.36s-.39.18-.86.17c-.47-.01-.85-.21-.85-.21s.39-.18.86-.17c.47.01.85.21.85.21z"
                className="st30"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
            </g>
            <g
              id="g3288"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            >
              <path
                id="path3286"
                d="M425.1 318.37s-.76.78-1.87 1.53-2.12 1.15-2.12 1.15.87-.65 1.96-1.38c1.11-.75 2.03-1.3 2.03-1.3z"
                className="st30"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
            </g>
            <g
              id="g3292"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            >
              <path
                id="path3290"
                d="M419.43 360.09s.13-.17.34-.44c.21-.27.48-.65.72-1.09.25-.44.43-.87.54-1.19.05-.16.1-.29.12-.39.03-.09.04-.14.04-.14v.15c0 .1-.01.24-.02.41-.04.35-.16.83-.43 1.3-.26.47-.61.82-.87 1.05-.25.23-.44.34-.44.34z"
                className="st30"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
            </g>
            <path
              id="path3294"
              d="M421.45 356.89c1.62.2 3.24.39 4.86.6 1.62.21 3.24.42 4.85.65l4.85.68 4.84.71-.06.01 3.74-1.54 3.75-1.51-3.69 1.66-3.7 1.63-.03.01h-.03l-4.85-.67-4.84-.7c-1.62-.23-3.23-.48-4.84-.73-1.63-.27-3.24-.54-4.85-.8z"
              className="st30"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <path
              id="path3296"
              d="M440.66 359.58c-.08 1.21.06 2.6.27 4.03-.09-1.43-.1-2.82.11-4.09z"
              className="st30"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <g
              id="g3300"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            >
              <path
                id="path3298"
                d="M423.91 356.55s-.59-7.56-1.14-16.9c-.55-9.34-.86-16.92-.86-16.92s.59 7.56 1.14 16.9c.55 9.34.86 16.92.86 16.92z"
                className="st30"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
            </g>
            <g
              id="g3322"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            >
              <path
                id="path3302"
                d="M436.88 327.95c.34.12.62.2.82.24.2.05.3.07.3.07s-.1-.05-.29-.13c-.18-.08-.45-.2-.77-.36-.64-.32-1.49-.81-2.36-1.44-.87-.63-1.6-1.29-2.1-1.8-.25-.25-.45-.46-.58-.62-.13-.15-.21-.23-.21-.23l.16.27c.1.17.27.42.49.7.43.58 1.12 1.32 2.02 1.98.91.67 1.83 1.09 2.52 1.32z"
                className="st30"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
              <path
                id="path3304"
                d="M425.41 327.69c-.41.37-.68.58-.68.58s.32-.13.79-.43c.47-.3 1.09-.78 1.64-1.44.55-.66.92-1.36 1.13-1.88.21-.52.29-.86.29-.86s-.17.3-.46.77c-.29.47-.72 1.08-1.25 1.72-.52.64-1.05 1.17-1.46 1.54z"
                className="st30"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
              <path
                id="path3306"
                d="M433.78 324.1c.43.16 1.02.33 1.75.41a5.844 5.844 0 0 0-.73.35c-.1.05-.22.13-.31.24-.05.06-.09.12-.12.22-.03.09-.01.22.05.31.1.14.24.18.34.2a2.813 2.813 0 0 0 .78-.04c.32-.05.63-.14.91-.26s.53-.25.74-.4c.14-.1.13-.1.17-.13l.09-.09c-.01.05-.02.11-.03.21-.02.18-.03.35-.02.5.01.31.06.58.11.78.06.21.12.36.16.46.05.1.07.15.07.15s-.02-.05-.05-.16a5.81 5.81 0 0 1-.11-.47c-.03-.21-.05-.47-.03-.77.01-.15.03-.31.06-.47.02-.11.07-.27.11-.42.05-.17.11-.34.17-.51-.14.11-.28.24-.43.36-.16.13-.36.27-.43.31-.21.13-.45.24-.71.34-.26.09-.54.17-.84.21-.15.02-.3.03-.45.04-.16.01-.31-.02-.29-.03v-.01c0-.01.02-.04.04-.07a.67.67 0 0 1 .2-.16c.18-.1.36-.2.53-.28.34-.16.66-.28.92-.36l1.18-.38-1.23.08a8.22 8.22 0 0 1-2.56-.24c-.3-.08-.53-.16-.68-.21-.15-.06-.24-.09-.24-.09s.08.04.22.12c.14.05.36.15.66.26z"
                className="st30"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
              <path
                id="path3308"
                d="M424.32 325.14c.01.08.03.16.04.23.02.1.03.19.05.29.05.37.08.69.1.96.03.53.02.83.02.83s.06-.29.1-.83c.02-.27.03-.6.01-.98-.01-.1-.01-.19-.02-.3-.01-.08 0-.08 0-.11v-.08l.02.04c.01.02.03.05.04.07l.01.02.17.17c.13.11.27.22.44.31.16.09.36.18.59.19.16.01.36-.04.49-.18.14-.14.17-.33.16-.48-.02-.3-.13-.52-.24-.74-.12-.21-.26-.39-.41-.53-.04-.03-.08-.06-.15-.09-.01-.03.14-.01.5-.04.29-.02.54-.07.74-.12.39-.1.6-.19.6-.19s-.21.06-.61.1c-.2.02-.44.04-.73.04-.07 0-.14 0-.22-.01-.04 0-.09-.01-.13-.01-.06-.01-.13-.01-.2-.02-.14-.01-.29-.04-.46-.06-.08-.01-.17-.02-.25-.04l-.13-.02h-.08c.15.1.31.21.48.32.17.12.32.23.43.35.12.14.23.3.32.48s.17.4.17.59c0 .19-.08.27-.27.27-.27-.02-.58-.22-.81-.4-.06-.05-.1-.09-.17-.15-.05-.05-.1-.1-.15-.16a1.04 1.04 0 0 1-.14-.19c-.18-.28-.44-.77-.63-1.08.02.09.03.18.05.27.03.12.05.23.08.34.05.22.1.44.14.65.02.12.03.2.05.29z"
                className="st30"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
              <path
                id="path3310"
                d="M428.61 354.07c-.58-.5-1.19-.85-1.65-1.05-.46-.2-.76-.28-.76-.28s.26.17.66.45.94.69 1.49 1.17c.56.49 1.03.96 1.37 1.32l.54.59s-.12-.28-.39-.71c-.26-.42-.68-.98-1.26-1.49z"
                className="st30"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
              <path
                id="path3312"
                d="M437.95 354.01c.52-.28.85-.46.85-.46s-.36.08-.93.28a11.402 11.402 0 0 0-3.99 2.41c-.44.41-.68.69-.68.69l.8-.54c.49-.33 1.18-.77 1.95-1.24.77-.46 1.47-.86 2-1.14z"
                className="st30"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
              <path
                id="path3314"
                d="M438.76 355.45c-.09.17-.2.39-.31.65-.06.13-.11.27-.17.42-.04.09-.05.12-.07.15-.01-.04-.03-.09-.04-.14-.08-.16-.18-.34-.33-.5-.15-.16-.35-.31-.59-.38a.968.968 0 0 0-.79.1.79.79 0 0 0-.37.55c-.03.22.04.43.13.58.05.08.1.15.16.21.02.02.02.01.03.02.03.01.06.03.08.04l.02.01h-.14c-.05 0-.09-.01-.13-.01-.09-.01-.18-.01-.27-.02-.34-.02-.64-.03-.88-.05l-.75-.03.74.14c.24.04.53.09.87.15.08.01.17.03.26.04.12.02.25.04.38.05.17.02.35.05.53.07.09.01.19.02.29.04l.15.02.11.01c-.21-.14-.44-.29-.7-.47-.13-.08-.24-.18-.32-.27-.04-.05-.08-.1-.11-.15-.13-.23-.1-.49.13-.63.3-.2.69-.04.94.2.12.12.22.27.31.41.15.27.27.54.37.74.08-.29.16-.57.23-.83.05-.15.09-.29.13-.43.08-.27.16-.49.23-.67.14-.36.22-.56.22-.56s-.15.19-.34.54z"
                className="st30"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
              <path
                id="path3316"
                d="M428.42 356.12c-.18-.01-.36-.02-.56-.04-.05 0-.1-.01-.15-.01l-.08-.01h-.03c-.03-.01-.05-.01-.04-.02l.03-.03c.06-.09.12-.19.18-.3.03-.05.06-.11.09-.17.03-.06.06-.15.08-.23.03-.16 0-.38-.16-.53-.19-.18-.45-.17-.62-.12-.19.05-.33.14-.46.24-.06.05-.12.1-.17.15l-.07.08-.01.01c-.01.02-.02.05-.03.07l-.01.04c0 .01-.01.04-.01.03l-.01-.04c-.01-.06-.02-.05-.03-.26-.03-.32-.08-.6-.12-.83-.08-.45-.15-.7-.15-.7s.01.25.04.71c.02.27.01.54.01.81.01.24-.03.48-.04.72 0 .22.08.42.08.63 0-.03.04-.07.05-.1.02-.04.04-.07.06-.11.22-.43.43-.98.96-1.09.12-.03.23-.01.27.04.04.04.06.11.05.2-.01.05-.02.08-.04.13-.03.05-.05.11-.08.16-.05.1-.1.2-.15.28-.08.16-.26.32-.39.46.17.03.4.05.57.06l.13.01H427.84c.2 0 .39-.01.57-.01.36-.02.66-.03.91-.04.5-.01.79.03.79.03s-.27-.1-.78-.16c-.24-.02-.55-.04-.91-.06z"
                className="st30"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
              <path
                id="path3318"
                d="M424.15 330.69s.17 4.79.61 10.68c.44 5.89.99 10.65.99 10.65s-.17-4.79-.61-10.68c-.44-5.89-.99-10.65-.99-10.65z"
                className="st30"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
              <path
                id="path3320"
                d="M438.76 342.23c.03-5.86-.13-10.61-.13-10.61s-.21 4.75-.24 10.61c-.03 5.86.13 10.61.13 10.61s.21-4.75.24-10.61z"
                className="st30"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
            </g>
            <g
              id="g3394"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            >
              <linearGradient
                id="SVGID_00000075147150951957407470000007222735364699082417_"
                x1={435.504}
                x2={435.198}
                y1={372.217}
                y2={353.795}
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  id="stop3324"
                  offset={0}
                  style={{
                    stopColor: "#ffc83d",
                  }}
                />
                <stop
                  id="stop3326"
                  offset={1}
                  style={{
                    stopColor: "#c87236",
                  }}
                />
              </linearGradient>
              <path
                id="path3329"
                d="M436.76 327.82c.34.12.62.2.82.24.2.05.3.07.3.07s-.1-.05-.29-.13c-.18-.08-.45-.2-.77-.36-.64-.32-1.49-.81-2.36-1.44-.87-.63-1.6-1.29-2.1-1.8-.25-.25-.45-.46-.58-.62-.13-.15-.21-.23-.21-.23l.16.27c.1.17.27.42.49.7.43.58 1.12 1.32 2.02 1.98.91.67 1.84 1.09 2.52 1.32z"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
              <linearGradient
                id="SVGID_00000010302781342916669510000011304949321087900845_"
                x1={427.315}
                x2={427.009}
                y1={372.353}
                y2={353.931}
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  id="stop3331"
                  offset={0}
                  style={{
                    stopColor: "#ffc83d",
                  }}
                />
                <stop
                  id="stop3333"
                  offset={1}
                  style={{
                    stopColor: "#c87236",
                  }}
                />
              </linearGradient>
              <path
                id="path3336"
                d="M425.29 327.56c-.41.37-.68.58-.68.58s.32-.13.79-.43c.47-.3 1.09-.78 1.64-1.44.55-.66.92-1.36 1.13-1.88.21-.52.29-.86.29-.86s-.17.3-.45.77c-.29.47-.72 1.08-1.25 1.72-.53.64-1.06 1.17-1.47 1.54z"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
              <linearGradient
                id="SVGID_00000117638826385355937240000001097138508882341014_"
                x1={436.081}
                x2={435.775}
                y1={372.207}
                y2={353.785}
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  id="stop3338"
                  offset={0}
                  style={{
                    stopColor: "#ffc83d",
                  }}
                />
                <stop
                  id="stop3340"
                  offset={1}
                  style={{
                    stopColor: "#c87236",
                  }}
                />
              </linearGradient>
              <path
                id="path3343"
                d="M433.66 323.97c.43.16 1.02.33 1.75.41a5.844 5.844 0 0 0-.73.35c-.1.05-.22.13-.31.24-.05.06-.09.12-.12.22-.03.09-.01.22.05.31.1.14.24.18.34.2a2.813 2.813 0 0 0 .78-.04c.32-.05.63-.14.91-.26s.53-.25.74-.4c.14-.1.13-.1.17-.13l.09-.09c-.01.05-.02.11-.03.21-.02.18-.03.35-.02.5.01.31.06.58.11.78.06.21.12.36.16.46.05.1.07.15.07.15s-.02-.05-.05-.16a5.81 5.81 0 0 1-.11-.47c-.03-.21-.05-.47-.03-.77.01-.15.03-.31.06-.47.02-.11.07-.27.11-.42.05-.17.11-.34.17-.51-.14.11-.28.24-.43.36-.16.13-.36.27-.43.31-.21.13-.45.24-.71.34-.26.09-.54.17-.84.21-.15.02-.3.03-.45.04-.16.01-.31-.02-.29-.03v-.01c0-.01.02-.04.04-.07a.67.67 0 0 1 .2-.16c.18-.1.36-.2.53-.28.34-.16.66-.28.92-.36l1.18-.38-1.23.08a8.22 8.22 0 0 1-2.56-.24c-.3-.08-.53-.15-.68-.21-.15-.06-.24-.09-.24-.09s.08.04.22.12c.15.05.37.15.66.26z"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
              <linearGradient
                id="SVGID_00000089539810020814183880000002687069693173182114_"
                x1={426.475}
                x2={426.169}
                y1={372.367}
                y2={353.945}
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  id="stop3345"
                  offset={0}
                  style={{
                    stopColor: "#ffc83d",
                  }}
                />
                <stop
                  id="stop3347"
                  offset={1}
                  style={{
                    stopColor: "#c87236",
                  }}
                />
              </linearGradient>
              <path
                id="path3350"
                d="M424.2 325.01c.01.08.03.16.04.23.02.1.03.19.05.29.05.37.08.69.1.96.03.53.02.83.02.83s.06-.29.1-.83c.02-.27.03-.6.01-.98-.01-.1-.01-.19-.02-.3-.01-.08 0-.08 0-.11v-.08l.02.04c.01.02.03.05.04.07l.01.02.17.17c.13.11.27.22.44.31.16.09.36.18.59.19.16.01.36-.04.49-.18.14-.14.17-.33.16-.48-.02-.3-.13-.52-.24-.74-.12-.21-.26-.39-.4-.53-.04-.03-.08-.06-.15-.09-.01-.03.14-.01.5-.04.29-.02.54-.07.74-.12.39-.1.6-.19.6-.19s-.21.06-.61.1c-.2.02-.44.04-.73.04-.07 0-.14 0-.22-.01-.04 0-.09-.01-.13-.01-.06-.01-.13-.01-.2-.02-.14-.01-.29-.04-.46-.06-.08-.01-.17-.02-.25-.04l-.13-.02h-.08c.15.1.31.21.48.32.17.12.32.23.43.35.12.14.23.3.32.48s.17.4.17.59c0 .19-.08.27-.27.27-.27-.02-.58-.22-.81-.4-.06-.05-.11-.09-.17-.15-.05-.05-.1-.1-.15-.16a1.04 1.04 0 0 1-.14-.19c-.18-.28-.44-.77-.63-1.08.02.09.03.18.05.27.03.12.05.23.08.34.05.22.1.44.14.65.01.12.03.2.04.29z"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
              <linearGradient
                id="SVGID_00000084505694540301767440000004007736390000409505_"
                x1={428.416}
                x2={428.11}
                y1={372.334}
                y2={353.913}
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  id="stop3352"
                  offset={0}
                  style={{
                    stopColor: "#ffc83d",
                  }}
                />
                <stop
                  id="stop3354"
                  offset={1}
                  style={{
                    stopColor: "#c87236",
                  }}
                />
              </linearGradient>
              <path
                id="path3357"
                d="M428.49 353.94c-.58-.5-1.19-.85-1.65-1.05-.46-.2-.76-.28-.76-.28s.26.17.66.45.94.69 1.49 1.17c.56.49 1.03.96 1.37 1.32l.54.59s-.12-.28-.39-.71c-.25-.42-.68-.98-1.26-1.49z"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
              <linearGradient
                id="SVGID_00000006694249339771272790000008344010118593255302_"
                x1={436.169}
                x2={435.863}
                y1={372.206}
                y2={353.784}
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  id="stop3359"
                  offset={0}
                  style={{
                    stopColor: "#ffc83d",
                  }}
                />
                <stop
                  id="stop3361"
                  offset={1}
                  style={{
                    stopColor: "#c87236",
                  }}
                />
              </linearGradient>
              <path
                id="path3364"
                d="M437.83 353.88c.52-.28.85-.46.85-.46s-.36.08-.93.28a11.402 11.402 0 0 0-3.99 2.41c-.44.41-.68.69-.68.69l.8-.54c.49-.33 1.18-.77 1.95-1.24.77-.46 1.48-.86 2-1.14z"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
              <linearGradient
                id="SVGID_00000052091497364250522170000005455272093204655762_"
                x1={436.852}
                x2={436.546}
                y1={372.194}
                y2={353.773}
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  id="stop3366"
                  offset={0}
                  style={{
                    stopColor: "#ffc83d",
                  }}
                />
                <stop
                  id="stop3368"
                  offset={1}
                  style={{
                    stopColor: "#c87236",
                  }}
                />
              </linearGradient>
              <path
                id="path3371"
                d="M438.65 355.31c-.09.17-.2.39-.31.65-.06.13-.11.27-.17.42-.04.09-.05.12-.07.15-.01-.04-.03-.09-.04-.14-.08-.16-.18-.34-.33-.5-.15-.16-.35-.31-.59-.38a.968.968 0 0 0-.79.1.79.79 0 0 0-.37.55c-.03.22.04.43.13.58.05.08.1.15.16.21.02.02.02.01.03.02.03.01.06.03.08.04l.02.01h-.14c-.05 0-.09-.01-.13-.01-.09-.01-.18-.01-.27-.02-.34-.02-.64-.03-.88-.05l-.75-.03.74.14c.24.04.53.09.87.15.08.01.17.03.26.04.12.02.25.04.38.05.17.02.35.05.53.07.09.01.19.02.29.04l.15.02.11.01c-.21-.14-.44-.29-.7-.47-.13-.08-.24-.18-.32-.27-.04-.05-.08-.1-.11-.15-.13-.23-.1-.49.13-.63.3-.2.69-.04.94.2.12.12.22.27.31.41.15.27.27.54.37.74.08-.29.16-.57.23-.83.05-.15.09-.29.13-.43.08-.27.16-.49.23-.67.14-.36.22-.56.22-.56s-.16.2-.34.54z"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
              <linearGradient
                id="SVGID_00000098930979081572421520000000713582734697211815_"
                x1={428.267}
                x2={427.961}
                y1={372.337}
                y2={353.915}
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  id="stop3373"
                  offset={0}
                  style={{
                    stopColor: "#ffc83d",
                  }}
                />
                <stop
                  id="stop3375"
                  offset={1}
                  style={{
                    stopColor: "#c87236",
                  }}
                />
              </linearGradient>
              <path
                id="path3378"
                d="M428.31 355.99c-.18-.01-.36-.02-.56-.04-.05 0-.1-.01-.15-.01l-.08-.01h-.03c-.03-.01-.05-.01-.04-.02l.03-.03c.06-.09.12-.19.18-.3.03-.05.06-.11.09-.17.03-.06.06-.15.08-.23a.614.614 0 0 0-.16-.53c-.19-.18-.45-.17-.62-.12-.19.05-.33.14-.46.24-.06.05-.12.1-.17.15l-.07.08-.01.01c-.01.02-.02.05-.03.07l-.01.04c0 .01-.01.04-.01.03l-.01-.04c-.01-.06-.02-.05-.03-.26-.03-.32-.08-.6-.12-.83-.08-.45-.15-.7-.15-.7s.01.25.04.71c.02.27.01.54.01.81.01.24-.03.48-.04.72 0 .22.08.42.08.63 0-.03.04-.07.05-.1.02-.04.04-.07.06-.11.22-.43.43-.98.96-1.09.12-.03.23-.01.27.04.04.04.06.11.05.2-.01.05-.02.08-.04.13-.03.05-.05.11-.08.16-.05.1-.1.2-.15.28-.08.16-.26.32-.39.46.17.03.4.05.57.06l.13.01H427.73c.2 0 .39-.01.57-.01.36-.02.66-.03.91-.04.5-.01.79.03.79.03s-.27-.1-.78-.16c-.25-.02-.56-.04-.91-.06z"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
              <linearGradient
                id="SVGID_00000091013750106539719720000006322704357473902471_"
                x1={425.352}
                x2={425.046}
                y1={372.385}
                y2={353.964}
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  id="stop3380"
                  offset={0}
                  style={{
                    stopColor: "#ffc83d",
                  }}
                />
                <stop
                  id="stop3382"
                  offset={1}
                  style={{
                    stopColor: "#c87236",
                  }}
                />
              </linearGradient>
              <path
                id="path3385"
                d="M424.03 330.56s.17 4.79.61 10.68c.44 5.89.99 10.65.99 10.65s-.17-4.79-.61-10.68c-.44-5.89-.99-10.65-.99-10.65z"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
              <linearGradient
                id="SVGID_00000053508008018421251820000011256620363826042532_"
                x1={438.953}
                x2={438.647}
                y1={372.159}
                y2={353.738}
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  id="stop3387"
                  offset={0}
                  style={{
                    stopColor: "#ffc83d",
                  }}
                />
                <stop
                  id="stop3389"
                  offset={1}
                  style={{
                    stopColor: "#c87236",
                  }}
                />
              </linearGradient>
              <path
                id="path3392"
                d="M438.64 342.1c.03-5.86-.13-10.61-.13-10.61s-.21 4.75-.24 10.61c-.03 5.86.13 10.61.13 10.61s.21-4.75.24-10.61z"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
            </g>
            <g
              id="g3398"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            >
              <path
                id="path3396"
                d="M423.17 359.78s.09-.24.16-.62c.03-.19.06-.42.06-.67 0-.12-.02-.23-.07-.27-.04-.04-.1-.06-.22-.03-.22.05-.47.24-.66.38-.2.15-.37.31-.51.45-.27.28-.41.49-.41.49s.02-.06.05-.17c.04-.11.1-.26.21-.44.1-.18.25-.38.45-.57.1-.1.21-.19.33-.28.12-.09.27-.18.45-.22.09-.02.2-.03.31-.01.11.02.22.09.28.18.13.19.11.38.1.52-.04.28-.11.51-.2.7-.15.38-.33.56-.33.56z"
                className="st5"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
            </g>
            <g
              id="g3402"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            >
              <path
                id="path3400"
                d="M426.22 360.17s-.03-.26-.14-.64c-.05-.19-.13-.41-.23-.65-.05-.12-.11-.24-.17-.27-.05-.04-.13-.04-.25.01a4.45 4.45 0 0 0-1.54 1.23l-.11.14s.02-.06.06-.17c.04-.11.11-.26.22-.44.22-.36.6-.82 1.23-1.1a.88.88 0 0 1 .29-.06c.11 0 .23.04.32.12.17.15.2.32.24.45.08.27.11.52.12.73.02.4-.04.65-.04.65z"
                className="st5"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
            </g>
            <g
              id="g3406"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            >
              <path
                id="path3404"
                d="M428.96 360.59s0-.06-.01-.18c-.01-.11-.02-.28-.07-.47-.04-.19-.11-.42-.23-.65-.11-.23-.28-.48-.43-.45-.17.02-.43.26-.61.42-.19.18-.34.36-.46.53-.23.33-.34.57-.34.57l.03-.18c.02-.12.07-.28.15-.48.08-.2.21-.42.38-.65.09-.11.19-.22.31-.33.12-.1.27-.23.5-.26.25-.03.46.14.55.28.11.15.16.29.21.43.09.28.12.54.12.75 0 .22-.03.38-.06.5-.01.11-.04.17-.04.17z"
                className="st5"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
            </g>
            <g
              id="g3410"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            >
              <path
                id="path3408"
                d="M432.01 361.26v-.19c-.01-.12-.03-.3-.08-.5-.06-.2-.15-.44-.3-.67-.15-.22-.36-.48-.58-.54-.2-.07-.42.13-.62.34-.2.21-.38.4-.53.56-.3.33-.48.54-.48.54s.1-.26.33-.65c.11-.19.26-.42.44-.66.09-.12.19-.25.34-.36.14-.12.4-.2.62-.13.22.06.37.2.49.33.11.13.2.27.27.41a1.93 1.93 0 0 1 .16 1.33c-.04.12-.06.19-.06.19z"
                className="st5"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
            </g>
            <g
              id="g3414"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            >
              <path
                id="path3412"
                d="M435.25 361.59s-.04-.28-.14-.71c-.05-.21-.12-.47-.21-.74-.09-.28-.21-.37-.48-.26-.25.11-.51.33-.72.5-.21.19-.39.37-.54.54-.14.17-.25.31-.32.41-.07.1-.11.16-.11.16s.02-.07.06-.19a3.409 3.409 0 0 1 .69-1.15c.1-.11.22-.23.35-.33.13-.1.27-.22.46-.29.18-.07.44-.11.65.04.2.14.25.35.28.5.06.3.08.57.09.8-.01.45-.06.72-.06.72z"
                className="st5"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
            </g>
            <g
              id="g3418"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            >
              <path
                id="path3416"
                d="M437.96 362.26s-.03-.27-.12-.68c-.05-.21-.12-.45-.22-.7-.09-.25-.23-.57-.38-.56-.17-.02-.43.22-.62.4-.19.19-.34.39-.46.56-.23.35-.34.61-.34.61s0-.07.03-.19c.02-.12.06-.3.14-.5.08-.21.2-.45.39-.69.09-.12.19-.23.32-.35.13-.11.31-.23.57-.22.26.02.43.24.5.39.08.17.11.31.15.46.07.29.1.55.1.77.01.43-.06.7-.06.7z"
                className="st5"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
            </g>
            <g
              id="g3422"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            >
              <path
                id="path3420"
                d="M440.02 362.12s-.01-.06-.02-.17c-.02-.11-.04-.26-.1-.43a3.1 3.1 0 0 0-.26-.57c-.06-.1-.14-.21-.21-.29-.03-.04-.07-.06-.08-.06-.01 0-.01 0-.04.01-.05.03-.12.15-.18.27-.06.12-.12.23-.17.34-.1.22-.19.42-.25.6-.13.35-.19.59-.19.59s-.04-.24 0-.63c.02-.19.06-.43.14-.67.04-.12.09-.25.14-.38.06-.12.11-.28.29-.42.09-.07.25-.1.37-.06.12.04.19.12.24.18.1.13.16.25.21.38.11.25.15.49.16.69.01.2-.01.36-.03.46 0 .1-.02.16-.02.16z"
                className="st5"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
            </g>
            <g
              id="g3426"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            >
              <path
                id="path3424"
                d="M443.18 361.78s-.14-.2-.35-.52c-.1-.16-.22-.36-.34-.58-.06-.11-.12-.23-.19-.35l-.05-.09-.02.04c-.02.06-.04.13-.07.19-.04.12-.08.25-.1.36-.06.24-.09.46-.11.64-.04.38-.03.62-.03.62s-.02-.06-.06-.16c-.03-.1-.08-.26-.1-.46-.03-.2-.04-.44-.01-.7.01-.13.04-.27.07-.41l.06-.21c.02-.07.1-.23.22-.29.12-.07.27-.05.37.04.05.04.09.1.12.17l.04.1c.05.13.1.25.15.37.09.24.17.45.23.64.11.36.17.6.17.6z"
                className="st5"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
            </g>
            <g
              id="g3430"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            >
              <path
                id="path3428"
                d="M445.04 360.88s-.05-.03-.14-.09c-.08-.06-.2-.16-.33-.3-.12-.14-.25-.34-.34-.58-.04-.12-.08-.23-.13-.31-.04-.07-.12-.1-.13-.09-.01-.01-.08.07-.13.18-.05.1-.09.21-.13.32-.07.21-.09.41-.1.59-.01.17.01.32.03.42.02.1.03.16.03.16s-.03-.05-.08-.14c-.05-.09-.12-.23-.16-.42-.04-.19-.07-.42-.03-.68.02-.13.05-.26.11-.4.03-.07.05-.13.11-.21.05-.07.14-.16.27-.19.27-.05.44.12.53.27.08.16.1.29.12.4a2.537 2.537 0 0 0 .5 1.07z"
                className="st5"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
            </g>
            <g
              id="g3434"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            >
              <path
                id="path3432"
                d="M446.85 360.07s-.05-.03-.13-.09c-.08-.07-.18-.19-.27-.34-.1-.15-.19-.35-.33-.5-.12-.15-.33-.24-.48-.19-.14.03-.23.25-.27.46-.05.21-.07.42-.07.59 0 .34.05.57.05.57s-.03-.05-.08-.14a1.94 1.94 0 0 1-.16-.41c-.05-.18-.08-.4-.06-.66.01-.12.03-.27.09-.41a.65.65 0 0 1 .39-.37c.39-.11.71.14.85.36.15.23.19.44.24.61.09.34.23.52.23.52z"
                className="st5"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
            </g>
            <g
              id="g3438"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            >
              <path
                id="path3436"
                d="M448.54 359.18s-.18-.14-.44-.38c-.13-.12-.29-.27-.45-.43-.15-.15-.4-.44-.38-.36-.04.01-.08.06-.1.16a2.838 2.838 0 0 0-.04.92c.04.34.1.56.1.56s-.15-.17-.29-.51a2.17 2.17 0 0 1-.14-.64c-.01-.13-.01-.25.01-.4a.66.66 0 0 1 .08-.25.5.5 0 0 1 .24-.21c.11-.05.26-.03.36.04.09.06.14.13.18.18.08.1.15.2.22.29.14.19.25.37.35.52.2.31.3.51.3.51z"
                className="st5"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
            </g>
            <g
              id="g3442"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            >
              <path
                id="path3440"
                d="M449.74 358.5s-.12-.15-.31-.4c-.1-.12-.22-.26-.35-.43-.07-.08-.14-.16-.21-.25-.06-.07-.04-.04-.05-.04 0 0 0-.01-.01.03-.02.05-.03.11-.05.16-.03.11-.04.22-.05.32-.01.21.01.4.05.56.04.16.09.29.14.38.05.09.07.13.07.13s-.04-.03-.12-.1c-.07-.07-.17-.18-.27-.34-.09-.16-.17-.38-.2-.63a1.8 1.8 0 0 1 .01-.4c.01-.07.03-.14.05-.21.01-.02.03-.09.05-.15l.08-.17c.06-.11.12-.22.15-.29.15.18.33.4.4.51.07.1.13.2.18.29.11.19.19.36.25.51.15.33.19.52.19.52z"
                className="st5"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
            </g>
            <g
              id="g3446"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            >
              <path
                id="path3444"
                d="m426.81 319.21-.14.2a5.71 5.71 0 0 1-2.28 1.84c-.12.04-.25.07-.4.05a.45.45 0 0 1-.38-.31.57.57 0 0 1 .05-.42c.05-.11.12-.2.18-.27.24-.29.49-.54.7-.73.43-.39.73-.57.73-.57s-.24.26-.59.7c-.17.22-.37.49-.58.8-.1.14-.18.32-.14.38.02.03.03.05.09.06.06.01.14-.01.23-.04.74-.32 1.41-.76 1.85-1.1.43-.34.68-.59.68-.59z"
                className="st5"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
            </g>
            <g
              id="g3450"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            >
              <path
                id="path3448"
                d="M429.58 319.43s-.03.07-.09.18c-.06.12-.15.28-.29.47-.28.38-.72.86-1.41 1.19-.1.04-.2.06-.31.07a.512.512 0 0 1-.36-.1.432.432 0 0 1-.17-.33c-.01-.11.01-.2.04-.28.09-.3.19-.56.29-.77.2-.42.38-.65.38-.65s-.09.27-.2.71c-.05.22-.11.48-.16.77-.03.14 0 .24.04.26.03.03.18.02.31-.03.58-.27 1.08-.66 1.41-.96.34-.31.52-.53.52-.53z"
                className="st5"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
            </g>
            <g
              id="g3454"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            >
              <path
                id="path3452"
                d="M431.69 320.06s-.1.24-.34.57c-.12.17-.28.36-.48.56-.1.1-.2.19-.33.29-.07.05-.14.1-.25.14a.44.44 0 0 1-.38-.05.498.498 0 0 1-.2-.29.93.93 0 0 1-.04-.27c0-.16.02-.3.04-.44.05-.28.13-.52.21-.71.17-.38.35-.58.35-.58s-.09.24-.17.63c-.04.2-.07.43-.08.69v.4c0 .12.05.24.08.25.02.01.03.01.07 0 .04-.01.09-.04.14-.07.11-.08.23-.16.33-.24.21-.16.39-.31.55-.44.32-.26.5-.44.5-.44z"
                className="st5"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
            </g>
            <g
              id="g3458"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            >
              <path
                id="path3456"
                d="M434.11 319.92s-.01.06-.04.17c-.03.11-.08.27-.17.46-.09.19-.23.4-.42.61-.1.1-.2.21-.35.3-.08.04-.16.09-.28.1a.427.427 0 0 1-.35-.1c-.2-.18-.21-.39-.22-.55 0-.16.01-.3.03-.44.04-.28.13-.52.22-.71.09-.19.18-.33.25-.42l.11-.14s-.1.24-.19.62a4.1 4.1 0 0 0-.08.68c-.01.23 0 .6.1.66.03.03.11.03.22-.02.1-.05.21-.14.31-.22.2-.16.36-.33.48-.48.27-.29.38-.52.38-.52z"
                className="st5"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
            </g>
            <g
              id="g3462"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            >
              <path
                id="path3460"
                d="M436.45 319.92s0 .05.01.15c0 .1.01.24-.02.42s-.11.41-.31.59c-.1.09-.23.17-.39.2s-.34 0-.49-.08a.957.957 0 0 1-.46-.72c-.03-.26.04-.48.1-.65.07-.17.14-.29.19-.37l.08-.13s-.01.05-.02.15c-.02.1-.04.23-.06.4-.02.16-.02.36.03.54.05.18.17.36.34.45.16.09.33.07.49-.04.15-.1.26-.26.33-.4.07-.15.11-.28.15-.37.01-.09.03-.14.03-.14z"
                className="st5"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
            </g>
            <g
              id="g3466"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            >
              <path
                id="path3464"
                d="M439.06 319.92s-.12.18-.13.52c-.02.16 0 .38-.12.63a.79.79 0 0 1-.28.33.52.52 0 0 1-.54.04c-.18-.1-.26-.25-.32-.37-.05-.13-.09-.24-.12-.35-.07-.22-.11-.43-.13-.6-.05-.35-.04-.56-.04-.56s.09.2.22.51c.07.15.16.34.25.54.1.19.2.45.32.5.09.07.27-.04.38-.2.11-.14.15-.35.21-.52.06-.17.13-.3.2-.38.06-.06.1-.09.1-.09z"
                className="st5"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
            </g>
            <g
              id="g3470"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            >
              <path
                id="path3468"
                d="M442.84 319.88s.03.05.08.14c.05.09.12.22.17.41.05.18.07.46-.1.71a.75.75 0 0 1-.37.3c-.18.06-.39.02-.53-.07-.29-.19-.43-.41-.57-.62-.13-.21-.23-.41-.29-.59-.12-.35-.14-.58-.14-.58s.11.2.31.49c.1.15.23.31.38.48.15.16.33.37.51.48.09.05.16.07.24.05.08-.02.15-.07.22-.14.13-.14.16-.32.17-.49 0-.17-.02-.31-.04-.41-.03-.11-.04-.16-.04-.16z"
                className="st5"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
            </g>
            <g
              id="g3474"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            >
              <path
                id="path3472"
                d="M445.05 319.73c-.01.01.16.16.28.52.05.18.05.47-.16.69-.1.11-.29.2-.47.17-.18-.02-.32-.12-.44-.22-.42-.4-.64-.86-.76-1.2-.11-.34-.13-.56-.13-.56s.11.2.3.48c.19.28.48.66.84 1 .18.16.31.19.44.1.13-.1.19-.28.19-.43-.01-.33-.1-.55-.09-.55z"
                className="st5"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
            </g>
            <g
              id="g3478"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            >
              <path
                id="path3476"
                d="M447.23 319.97s.05.01.11.07c.06.06.12.19.09.36-.01.08-.05.17-.12.25a.55.55 0 0 1-.3.16c-.24.05-.49-.03-.69-.19-.19-.17-.3-.37-.37-.53-.07-.17-.13-.32-.19-.44-.11-.24-.23-.37-.23-.37s.04.01.11.05.17.11.27.21c.21.21.39.57.65.8.26.22.59.22.69.01.06-.1.06-.2.04-.27a.329.329 0 0 0-.06-.11z"
                className="st5"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
            </g>
            <g
              id="g3482"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            >
              <path
                id="path3480"
                d="M438.61 302.09s.53.62 1.07 1.44c.54.81.91 1.55.91 1.55s-.67-.5-1.22-1.34c-.56-.84-.76-1.65-.76-1.65z"
                className="st5"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
            </g>
            <g
              id="g3486"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            >
              <path
                id="path3484"
                d="M445.57 308.37s-.45-.14-1.2-.34c-.37-.1-.82-.2-1.32-.31-.25-.05-.52-.1-.79-.15-.14-.02-.28-.05-.42-.07-.17-.03-.35-.05-.53-.08-.03-.06-.09-.18-.15-.29-.14-.28-.28-.55-.42-.81-.09-.17-.17-.35-.26-.51l-.04-.09-.02-.04c-.01-.01.03-.01.04-.02l.19-.05.19-.05.11-.02c.54-.11 1.04-.14 1.46-.13.42.01.75.05.98.08.23.04.35.07.35.07s-.13 0-.36-.01c-.23 0-.56.01-.97.05-.4.04-.88.12-1.4.25l-.09.02-.01.01c-.01 0-.01.01 0 .01l.01.01.01.01.03.05.11.19c.14.26.28.53.43.81l.06.12c.01.01 0 0 0 .01l.35.06c.15.03.29.06.43.09.28.06.55.13.8.2.5.14.94.29 1.31.44.71.27 1.12.49 1.12.49z"
                className="st5"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
            </g>
            <g
              id="g3490"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            >
              <path
                id="path3488"
                d="M443.65 308.97h.08c.05 0 .14 0 .24.02.21.02.51.08.86.23.35.15.74.4 1.08.79l.07.08c.04.04.06.09.1.14.06.09.13.19.19.29l.1.15c0 .01.03.03.01.03h-.13c-.11 0-.23-.01-.36-.02-.3-.02-.62-.05-.94-.07-.28-.03-.55-.05-.82-.08-.26-.03-.52-.05-.78-.11s-.5-.19-.67-.35c-.17-.16-.29-.35-.37-.52-.17-.35-.23-.64-.28-.84-.04-.2-.06-.32-.06-.32s.04.11.12.3c.08.19.19.47.38.77.19.3.5.59.94.65.22.04.48.04.74.06l.82.06c.14.01.28.03.41.04l.2.02c.02 0 .09.01.08.01 0 0 .03.01.02 0v-.03l-.04-.06c-.28-.37-.61-.64-.92-.82a3.333 3.333 0 0 0-1.01-.4c-.03-.02-.06-.02-.06-.02z"
                className="st5"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
            </g>
            <g
              id="g3494"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            >
              <path
                id="path3492"
                d="M440.4 356.89s-.09-7.06-.09-15.78c0-8.72.09-15.78.09-15.78s.09 7.06.09 15.78c0 8.72-.09 15.78-.09 15.78z"
                className="st30"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
            </g>
            <image
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAAAqCAYAAADPn2cJAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABrZJREFUeNrsmllvGzcUhclZZcmJ 4jRFm4f+/99V9KFF4NSRLWuZtRrg3OLD7cixZDlI0CFAcEbcD89deEchTGlKU5rSlKY0pR87xe9h Ed3+z2RkPcNz/8S6re4/bZLyYzcyR1Rd/0ODCbD8nPkh13ifPTFMjz72PPRND7nBb8NcrevTH3nm AfTfDZg6+YgxE/c85M7NG0fWM+R3Koc+d4d8M8LEodwDnF7jZyqH953etyrZrtP47P8iUOOFADTA AhbdiTVBZS/mzfSeAnADLhfLhnQlMAy4hZ7vD/laZaffhz5rzDG8bzTeTnNVmsckoROD+0sBGi/E xAgxTQBogQ1mYtIbbXLY4IPa/6xND/W/gsnxiKh3AKMTeK3LzZFyAxURoSJsrDimc18FTOi/FECm Ai5XnYFYQuTeq112pBzyXO/DhpcC2xgziPrf2PQw3qdDfitWDv0fj5QrrelB7xute4eDaZTNuPWn MvQlYBZgi4FQaMxSYmpAXOP3qLaZANqImbl+y3FACVQEdaVn4UZ6sQNALI2JFXIjSWigeyuA+7pg OtGeQRQXei5RN0fXAaSfBKpZ5FzvHdi51MZsjhvpRmP2o3KDunsBtRQDVzrIPfJObbZiZ9Q4vQ6i BzMtd6fqz+wMtRCh0xLHpFLtFnoutbAPYu1b1V+jvtQYBXIEwL9BT5phqzHuDmx7o0MzRu5QvxHI c/1mILUYN8FejvqxlwLTrHbh+icC0PTmDLkViKXec22qBLgm4kv4ju+kC2/gwgTozD+kHgzI3w/5 F4j8Xn1Xql+MGLWt1mA6dK82FUAOFwfTbhDQWQUMSKENUsyvkFu4REEgsE2OgyigBmjZCWYrFlbY eCnGJZhrAylYwaqbFc9UziT2CSRv6N8O+36uqJ8j5t43DBD3TuwikHOxYq5cAMg3AC8FU4OYacx5 FCgrvd/BuTeRXzh9aQCWcNrNwG2x7hTGqlab2on7ZcEcTudwSmMin8MNysGiDEzssRnqSNOzc4j/ DOrgvcazG9BblC180z0M1wbztnB1MljrChLVgP2F6grni76KzuwxeI/rIX1PY3AHS5+DBVcwNDOI eQndmWJDJaSBd/FmxCPxTvpOjO5l9QMOYu983Ki1BNztI9zBr7pK5xggc2WiE/cWFteYWuBaaQAm eE7BzhLsTXGTojrJnXgmePb6u1fdGuPf6H0mFRPhZ5YqWxyUzdU8R2+eC2YYuUqmyB18tQRgBBf4 MP+ugjvUQwIi2O4DJS30dAej2GDsDq7R2NWyRfuAAyhcNCs+R2+eY4ACFlkAuAewyRi0BltM1BoA +EHGJQCIDB6DuTQVwO3cxswNqlBWMEy25goAU0VldNJdeLB3Y3zVZwwnGKHWOdCNNlPrvYYxWKF+ APoLVEGtco1QGW8rd3Csb9XO2tp93dpE/bYHux4hqg0Mz6PWs4VD30EP18duiHANLyrmBmIKXdO5 gEEFS585d4qqogHDt+4WtFbJ/g/qa1fIu5HbztaVphM7RLLuRy4BrTM+/SkifhaYQ3jqcEqMbme4 OdyDod7Jtg1+VJ/PAuwD2LnEVBv5kZ2eLTpkscw5/MhGzzVAZlDjHmDvHTsDGEkD1MEj6V4FTMfO oAXNtLgZWLB1VvFKbP4LvqQBUeh5AzbmAsGM1Wdt7NapmQa6skZAoxLAZtGDC27soRr2Lljdf6u7 ubEzgXjUsNw5LG0NVm7gklh6EDNN1L6o3zswfglA12DrLVyeTrHNAsbuFkbpEWrCG63ownU9DuUk QM9lZnAfp1o41Wt3V29gPU3kHySuCfpmuJOv4GZ9hqGMAs1H2lvEK2voYvuNsc4Wot7jt8ZFkCJ1 6XP8zJd+A8owTgZm5tJp8UiZIhhhcVG7U793UfiN6k1nLrHhO72buN+K+Z/kUpmh+gLDswfYwXkj Zji3Iwbpq4C++OukjJGNlcNHK+FUL1Dynp5Bd1q0ycrKxU39N/XG+Yw+sOuDvS105A53+Qo+KJ35 oCtk+00/9boIPO+6vOYlYk0rdibQswv4eilUQKJNX2OtawQ87nAYLYxTh3ka6MqAeGczooLo1J8E 5KW/m6fuislcjtyto/Mhk5H3sS+gXl97dgb3bbzFN/YI690jxFbR5zwVxIuD6QDtnwCWols6MU4g 3lcjfbduyrnmWoXxf2zUuNvvEBTZjHw6/tdTOXf/r/L3GPfnhDgyn//OXrngSTjCxmPeRBgBM478 zvqzRPmbg/nMT8VhZMMhHP/rjAdxBov8VNz15K+MU5rSlKY0pSlN6f+a/hFgAMTkQDaBoDRpAAAA AElFTkSuQmCC"
              id="image3496"
              width={81}
              height={38}
              style={{
                overflow: "visible",
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 3.14961,
                
                strokeOpacity: 1,
              }}
              transform="matrix(.24 0 0 .24 422.4 310.32)"
            />
            <g
              id="g3552"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            >
              <linearGradient
                id="SVGID_00000056400599420075056180000015311418922808477077_"
                x1={434.915}
                x2={436.72}
                y1={293.708}
                y2={303.636}
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  id="stop3500"
                  offset={0}
                  style={{
                    stopColor: "#ffc83d",
                  }}
                />
                <stop
                  id="stop3502"
                  offset={1}
                  style={{
                    stopColor: "#c87236",
                  }}
                />
              </linearGradient>
              <path
                id="path3505"
                d="M438.51 300.22c-1.19.88-3.34.82-4.44.33-.97-.43-2.1-1.22-1.66-2.4.58-1.53 2.65-3.02 4.3-2.59 1.2.31 2.9 2.19 2.57 3.53-.12.48-.4.85-.77 1.13z"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
              <linearGradient
                id="SVGID_00000113337177441736331920000016465448845614944922_"
                x1={435.993}
                x2={436.036}
                y1={306.751}
                y2={298.501}
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  id="stop3507"
                  offset={0}
                  style={{
                    stopColor: "#ffc83d",
                  }}
                />
                <stop
                  id="stop3509"
                  offset={1}
                  style={{
                    stopColor: "#c87236",
                  }}
                />
              </linearGradient>
              <path
                id="path3512"
                d="M438.14 296.71c-.09.77-.77 1.39-1.52 1.61-.75.22-1.56.09-2.3-.14-.22-.07-.44-.15-.6-.31-.17-.16-.26-.41-.18-.62-.53.37-.61 1.27-.26 1.82.34.55.96.86 1.57 1.08.99.35 2.1.49 3.06.08.43-.18.84-.5 1.01-.94.17-.43.11-.92-.08-1.34-.19-.43-.42-.88-.7-1.24z"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
              <linearGradient
                id="SVGID_00000044865342875972991630000015270962456949782196_"
                x1={433.581}
                x2={438.868}
                y1={282.562}
                y2={305.258}
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  id="stop3514"
                  offset={0}
                  style={{
                    stopColor: "#ffc83d",
                  }}
                />
                <stop
                  id="stop3516"
                  offset={1}
                  style={{
                    stopColor: "#c87236",
                  }}
                />
              </linearGradient>
              <path
                id="path3519"
                d="M445.35 292.53c-.24.45-.51.89-.8 1.31-1.22 1.78-2.85 3.17-4.65 4.34-.61.39-1.39 1.05-2.15 1.05-.49 0-.8-.5-.51-.91.04-.06.09-.12.15-.17.12-.11.28-.2.42-.28 1.25-.73 2.46-1.61 3.46-2.66.26-.27.67-.65.95-1.06.19-.28.32-.58.3-.87-.1-1.06-2.26-1.65-3.08-1.9-3.13-.98-7.28-.8-9.89 1.4-.28.24-.59.6-.49 1 .14.52.58.95.93 1.32.89.97 1.67 1.67 2.73 2.45-.05.09-.09.17-.14.25-.1.2-.18.41-.23.65-2.36-1.19-4.23-2.89-5.68-5.1-.31-.47-.6-1.01-.6-1.55 0-.11.01-.22.03-.33.16-.69.8-1.14 1.42-1.48 5.05-2.82 11.63-2.68 16.55.36.52.32 1.01.69 1.27 1.26.05.1.09.2.13.3 0 .01 0 .02.01.02.06.22-.02.41-.13.6z"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
              <linearGradient
                id="SVGID_00000054253115157900509330000005892307414865225363_"
                x1={434.287}
                x2={438.859}
                y1={294.797}
                y2={285.181}
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  id="stop3521"
                  offset={0}
                  style={{
                    stopColor: "#b69271",
                  }}
                />
                <stop
                  id="stop3523"
                  offset={1}
                  style={{
                    stopColor: "#000",
                  }}
                />
              </linearGradient>
              <path
                id="path3526"
                d="M445.47 291.91c-.12.23-.3.41-.54.51-.62.25-1.29-.2-1.85-.58-2.16-1.44-4.83-1.99-7.42-1.84-2.59.15-5.11.97-7.44 2.1-.52.25-1.25.61-1.78.2-.15-.12-.28-.3-.37-.5 0-.11.01-.22.03-.33.16-.69.8-1.14 1.42-1.48 5.05-2.82 11.63-2.68 16.55.36.52.32 1.01.69 1.27 1.26.04.1.09.2.13.3z"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
              <linearGradient
                id="SVGID_00000091707878346141951300000012517376541385165243_"
                x1={436.077}
                x2={435.657}
                y1={303.361}
                y2={290.96}
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  id="stop3528"
                  offset={0}
                  style={{
                    stopColor: "#ffc83d",
                  }}
                />
                <stop
                  id="stop3530"
                  offset={1}
                  style={{
                    stopColor: "#c87236",
                  }}
                />
              </linearGradient>
              <path
                id="path3533"
                d="M443.12 292.97c-.07.51-.47.88-.89 1.19.19-.28.32-.58.3-.87-.1-1.06-2.26-1.65-3.08-1.9-3.13-.98-7.28-.8-9.89 1.4-.28.24-.59.6-.49 1 .14.52.58.95.93 1.32.89.97 1.67 1.67 2.73 2.45-.05.09-.09.17-.14.25-.47-.13-.85-.46-1.22-.78-1.26-1.11-2.73-2.19-3.03-3.95 0-.02-.01-.04-.01-.05-.03-.22.01-.4.15-.58.82-1.08 2.4-1.47 3.66-1.72 3.23-.64 6.7-.76 9.68.63.63.28 1.41.81 1.3 1.61z"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
              <linearGradient
                id="SVGID_00000017489877621590151700000010176298230087592374_"
                x1={443.477}
                x2={431.969}
                y1={294.441}
                y2={306.422}
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  id="stop3535"
                  offset={0}
                  style={{
                    stopColor: "#ffc83d",
                  }}
                />
                <stop
                  id="stop3537"
                  offset={1}
                  style={{
                    stopColor: "#c87236",
                  }}
                />
              </linearGradient>
              <path
                id="path3540"
                d="M444.58 293.31c-.15.2-.25.45-.39.66-.14.22-.29.44-.44.65a12.509 12.509 0 0 1-3.37 3.21c-.22.14-.44.28-.67.41l-.33.18c-.09.05-.22.15-.32.16-.13.01-.05-.09.01-.17.11-.15.26-.29.41-.4.43-.31.9-.57 1.33-.89.45-.33.88-.67 1.29-1.04.82-.74 1.58-1.55 2.24-2.43.08-.12.16-.23.24-.34z"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
              <g
                id="g3544"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              >
                <path
                  id="path3542"
                  d="M431 289.17c.01.01.01.03.01.05.01.12-.11.21-.21.27-.66.36-1.37.62-2.11.76-.11.02-.23.03-.32-.03-.12-.09-.11-.27-.03-.38.05-.08.13-.13.21-.19.64-.43 1.37-.74 2.15-.63.13.01.26.05.3.15z"
                  className="st30"
                  style={{
                    fill: "none",
                    fillOpacity: 1,
                    stroke: "#01c38d",
                    strokeWidth: 0.755906,
                    
                    strokeOpacity: 1,
                  }}
                />
              </g>
              <path
                id="path3546"
                d="M444.37 290.69c-.07-.06-.15-.11-.23-.16-.15-.1-.3-.15-.48-.1-.09.03-.12.11-.11.19.02.17.13.27.25.38.06.05.11.11.18.16.09.06.18.07.29.07.16 0 .23-.14.21-.28-.01-.11-.03-.19-.11-.26z"
                className="st30"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
              <path
                id="path3548"
                d="M435.29 295.94c-.74.15-1.68.79-.82 1.17.14.06.31.02.46-.02.3-.09.82-.21.98-.51.32-.61-.1-.75-.62-.64z"
                className="st30"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
              <image
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAANCAYAAADFVhxbAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAUNJREFUeNrslE1Lw0AURTO2tpES EaUpfm0suhL34v9HXAkFF3bXKgrWKlrFJE1S74MjuEmo2BQXPjjMJJ3FyX1v6rySyuP7OtuZPdpm pbk985ZQrkSqoaUlArHK61RkYsL6YUerkK2X/GYyvmiKA7Eu1iBH7EEk+oih1huSTSSaVpYYqZnE LhyKTXFiHRUbyBmP4l1cCZN8RXQkyWjhYsi1aOkegmfs90WbvaOtI/EiLhEcIHiLfDxvmm6eQ8yb z7x1RUcciyPEQrHDmUSMxZO4YL0WPaSfSTQrm03304i5qQGt/ErR0jtlLkNabclEiFli5+JN9L/N Y1wk5347pBL1EWuQYMBF2UIwR24q7khzjFwksawSsYKZDLjNIcnUYEpqE1qaFV0Ot4w/S2a0S0o1 2mySqcRy76+VhJ33XwuqTwEGAPtOdNxJqBjaAAAAAElFTkSuQmCC"
                id="image3550"
                width={35}
                height={12}
                style={{
                  overflow: "visible",
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 3.14961,
                  
                  strokeOpacity: 1,
                }}
                transform="matrix(.24 0 0 .24 435.12 288)"
              />
            </g>
            <path
              id="path3554"
              d="M420.04 321.53c1.76.12 3.53.19 5.3.27 1.77.07 3.53.12 5.3.13 1.77.02 3.53 0 5.3-.03s3.53-.08 5.3-.17c1.47.05 2.93.05 4.4.02 1.47-.03 2.94-.07 4.4-.13-1.47.09-2.93.18-4.4.23-1.47.04-2.94.06-4.41.02h.01c-1.77.1-3.53.17-5.3.21-1.77.04-3.54.03-5.31 0-1.77-.03-3.54-.09-5.3-.18-1.76-.07-3.53-.22-5.29-.37z"
              className="st48"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <path
              id="polygon3556"
              d="M441.01 321.82h.52l-1.29-2.26z"
              className="st48"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <linearGradient
              id="SVGID_00000158016433446211488400000001185936970968856737_"
              x1={430.613}
              x2={429.985}
              y1={324.174}
              y2={360.475}
              gradientUnits="userSpaceOnUse"
            >
              <stop
                id="stop3558"
                offset={0}
                style={{
                  stopColor: "#b69271",
                }}
              />
              <stop
                id="stop3560"
                offset={1}
                style={{
                  stopColor: "#000",
                }}
              />
            </linearGradient>
            <linearGradient
              id="SVGID_00000159442372112304710580000001974711628828369323_"
              x1={446.078}
              x2={444.069}
              y1={326.916}
              y2={361.333}
              gradientUnits="userSpaceOnUse"
            >
              <stop
                id="stop3565"
                offset={0}
                style={{
                  stopColor: "#b69271",
                }}
              />
              <stop
                id="stop3567"
                offset={1}
                style={{
                  stopColor: "#000",
                }}
              />
            </linearGradient>
          </g>
          <g
            id="g3712"
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#01c38d",
              strokeWidth: 0.755906,
              
              strokeOpacity: 1,
            }}
          >
            <linearGradient
              id="SVGID_00000142169358602965032660000017415874099026152342_"
              x1={369.699}
              x2={464.179}
              y1={386.62}
              y2={278.229}
              gradientUnits="userSpaceOnUse"
            >
              <stop
                id="stop3574"
                offset={0}
                style={{
                  stopColor: "#ffc83d",
                }}
              />
              <stop
                id="stop3576"
                offset={1}
                style={{
                  stopColor: "#c7552d",
                }}
              />
            </linearGradient>
            <path
              id="path3579"
              d="M483.77 327.3c0 34.45-27.92 62.37-62.36 62.37-34.45 0-62.37-27.92-62.37-62.37 0-34.44 27.92-62.36 62.37-62.36 2.29 0 4.56.13 6.78.37.34.03.68.07 1.03.11-23.13 3.3-40.91 23.2-40.91 47.25 0 26.36 21.37 47.73 47.73 47.73 23.64 0 43.25-17.17 47.05-39.71.07-.4.14-.8.2-1.2.31 2.55.48 5.16.48 7.81z"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <linearGradient
              id="SVGID_00000043437999229668731810000012641552225216845698_"
              x1={428.824}
              x2={448.532}
              y1={319.163}
              y2={398.572}
              gradientUnits="userSpaceOnUse"
            >
              <stop
                id="stop3581"
                offset={0}
                style={{
                  stopColor: "#ffc83d",
                }}
              />
              <stop
                id="stop3583"
                offset={1}
                style={{
                  stopColor: "#c87236",
                }}
              />
            </linearGradient>
            <path
              id="path3586"
              d="M483.09 320.69c-1.07 28.52-24.52 51.29-53.3 51.29-29.46 0-53.35-23.88-53.35-53.35 0-28.93 23.03-52.48 51.75-53.32.34.03.68.07 1.03.11-23.13 3.3-40.91 23.2-40.91 47.25 0 26.36 21.37 47.73 47.73 47.73 23.63 0 43.25-17.16 47.05-39.71z"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <linearGradient
              id="SVGID_00000130641029010520176600000008205719194874320050_"
              x1={369.553}
              x2={408.541}
              y1={400.319}
              y2={345.297}
              gradientUnits="userSpaceOnUse"
            >
              <stop
                id="stop3588"
                offset={0.006}
                style={{
                  stopColor: "#8959a4",
                }}
              />
              <stop
                id="stop3590"
                offset={0.994}
                style={{
                  stopColor: "#68236a",
                }}
              />
            </linearGradient>
            <path
              id="path3593"
              d="M452.7 369.86a25.28 25.28 0 0 1-7.26 12.94c5.66-1.6 11.08-5.22 15.28-9.36-2.24-2.19-4.89-3.47-8.02-3.58zm-14.2 13.38c-2.03-1.89-4.17-3.65-6.36-5.34-1.47-1.14-2.97-2.25-4.47-3.33a43.117 43.117 0 0 1-3.38 3.38c-3.01 2.7-6.4 4.98-10.05 6.74a43 43 0 0 1-4.6 1.93c10.16 2.2 21.03 1.92 30.88-1.43-.66-.66-1.33-1.31-2.02-1.95zm-40.41-3.62c-1.81-3.61-3.16-7.5-3.85-11.42-.18-.99-.31-1.99-.39-2.98-.94.12-1.87.23-2.8.33-2.88.33-5.74.55-8.62.68-2.71.11-5.43.14-8.18.05 7.42 8.34 16.61 14.79 27.09 18.86a47.88 47.88 0 0 1-3.25-5.52zm69.4-21.29c-.9 4.43-2.31 8.75-4.2 12.86 5.27-3.66 9.22-9.63 11.55-15.61-2.56.24-5.25 1.26-7.35 2.75zm-2.23-.2c-2.51.46-5.13.46-7.62-.06-.39 2.15-1 4.26-1.83 6.27-.54 1.32-1.16 2.59-1.87 3.82 2.76.47 5.65 1.9 7.76 3.74 2.02-4.63 3.43-9.06 4.57-13.99-.33.09-.67.16-1.01.22zm-17.32 9.6a45.506 45.506 0 0 1-10.57-4.6c-1.3 2.95-3.22 5.62-5.59 7.8-.75.68-1.54 1.33-2.37 1.91 1.97 1.56 3.91 3.21 5.84 4.88 1.68 1.46 3.34 2.95 4.99 4.42.83.74 1.65 1.48 2.47 2.21 4.3-4.08 7.44-10.01 8.45-15.85-1.07-.2-2.15-.46-3.22-.77zm-24.56 3.02c-3.94-2.87-7.17-6.93-8.82-11.41-3.6 2.2-7.53 3.87-11.61 4.96-2.3.61-4.65 1.04-7.02 1.28.07 1.4.24 2.81.52 4.21.8 4 2.42 7.91 4.69 11.33 1.27 1.93 2.75 3.7 4.4 5.26 1.77-.65 3.5-1.4 5.19-2.25 3.57-1.75 6.97-3.91 10.12-6.37 2.01-1.56 3.91-3.25 5.68-5.04-1.09-.57-2.14-1.23-3.15-1.97zm-29.4-25.57c-3.82.09-7.56-.5-11.31-1.55-2.5-.69-5-1.59-7.53-2.61-1.71 6.6-3.12 15.34-3.19 22.15 2.9.65 5.85.89 8.8.84 2.67-.03 5.35-.3 8.03-.68 1.72-.24 3.43-.53 5.14-.84-.24-1.65-.42-3.34-.51-5.03-.22-4.1-.01-8.29.57-12.28zm-33.88-15.7c.13 10.14 3.45 20.82 9.32 29.08.37-6.38 2.03-13.13 4.17-19.15-5.16-2.25-9.8-5.67-13.49-9.93zm17.14-17.23c-.68-.8-1.37-1.6-2.08-2.38a49.202 49.202 0 0 0-13.69 17.6c3.7 3.99 8.44 7.24 13.5 9.24.7-2.63 1.68-5.13 2.92-7.45 1.84-3.43 4.26-6.49 7.25-9.14-3.16-2.13-5.47-5-7.9-7.87zm-9.75-14.28c-4.17 7.74-6.45 17.39-7.03 27.13 3.19-6.51 8.26-13.12 13.86-17.72a31.735 31.735 0 0 1-6.83-9.41zm90.33 58.45c3.16.46 6.4.35 9.51-.34.11-.02.22-.05.33-.07.13-.25.25-.51.36-.78.69-1.73.9-3.64.98-5.52-3.5 2.65-7.2 4.84-11.18 6.71zm-18.68 5.57c4.02 1.91 8.17 3.51 12.54 4.3.38.07.77.14 1.16.2.19-.31.37-.63.54-.95 1.29-2.42 2.14-5.21 2.63-7.87-4.86 3.43-10.98 5-16.87 4.32zm-22.31-3.38c2.16 5.16 6.57 9.83 11.85 11.66 2.83-1.85 5.5-5.14 7.4-7.94-6.56-.41-12.92-1.97-19.25-3.72zm-19.87-13.93c-1.51 4.84-1.93 9.67-1.42 14.6.12 1.16.29 2.32.52 3.48 1.26-.05 2.52-.16 3.77-.35 5.16-.76 10.19-2.64 14.64-5.3a74.544 74.544 0 0 1-17.51-12.43zm-10.51-23.74c-3.28 3.26-6.07 7.17-7.92 11.43-.95 2.16-1.65 4.42-2.06 6.73 1.58.69 3.21 1.26 4.87 1.75 4.8 1.41 9.88 2.12 14.78 3.02-5.47-6.42-8.9-14.55-9.67-22.93zm.05-17.84c-2.73.5-6.09 1.81-8.58 3.58-.62.43-1.19.89-1.68 1.38.39.54.81 1.09 1.25 1.65 2.42 3.12 5.52 6.47 8.71 8.32-1.01-4.34-.39-10.52.3-14.93zm-5.89-9.27c-.44-.55-.88-1.09-1.31-1.64-3.45.48-6.78 1.86-9.54 3.99 1.35 3 2.97 6.21 5.52 8.3 1-.02 2.04-.15 3.08-.37 2.74-.57 5.47-1.8 7.49-3.56-1.57-2.35-3.44-4.51-5.24-6.72zm1.41-12.57c-4.72 3.34-8.51 7.41-11.78 12.17a28.69 28.69 0 0 1 9.76-4.31c1.14-2.34 2.34-5.26 2.02-7.86zm.34 8.82c1 3.08 3.45 6.56 5.28 9.22 1.56-3.87 3.36-7.97 5.58-11.5-3.63-1.5-8.13-.55-10.86 2.28z"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <linearGradient
              id="SVGID_00000057857204865488565740000000965556830890744970_"
              x1={376.896}
              x2={420.368}
              y1={315.626}
              y2={401.121}
              gradientUnits="userSpaceOnUse"
            >
              <stop
                id="stop3595"
                offset={0}
                style={{
                  stopColor: "#b69271",
                }}
              />
              <stop
                id="stop3597"
                offset={1}
                style={{
                  stopColor: "#000",
                }}
              />
            </linearGradient>
            <path
              id="path3600"
              d="M377.88 329.26c-.31-1.73-.54-3.48-.68-5.23-.33-3.91-.29-7.86.04-11.77 2.43 2.86 4.74 5.74 7.89 7.87a32.81 32.81 0 0 0-7.25 9.13z"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <linearGradient
              id="SVGID_00000024001875792696045900000016833893734523241635_"
              x1={386.404}
              x2={429.876}
              y1={310.791}
              y2={396.287}
              gradientUnits="userSpaceOnUse"
            >
              <stop
                id="stop3602"
                offset={0}
                style={{
                  stopColor: "#b69271",
                }}
              />
              <stop
                id="stop3604"
                offset={1}
                style={{
                  stopColor: "#000",
                }}
              />
            </linearGradient>
            <path
              id="path3607"
              d="M385.85 300.55c-2.02 1.76-4.74 2.99-7.49 3.56.63-3.44 1.44-6.85 2.25-10.24 0-.01.01-.02.01-.03 1.79 2.2 3.66 4.36 5.23 6.71z"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <linearGradient
              id="SVGID_00000042713479648589883290000014315531596838278045_"
              x1={384.679}
              x2={428.152}
              y1={311.668}
              y2={397.164}
              gradientUnits="userSpaceOnUse"
            >
              <stop
                id="stop3609"
                offset={0}
                style={{
                  stopColor: "#b69271",
                }}
              />
              <stop
                id="stop3611"
                offset={1}
                style={{
                  stopColor: "#000",
                }}
              />
            </linearGradient>
            <path
              id="path3614"
              d="M377.51 309.72c.07-.63.15-1.26.24-1.89.06-.38.11-.76.18-1.15 2.49-1.77 5.85-3.08 8.58-3.58-.69 4.41-1.31 10.59-.28 14.93-3.2-1.85-6.3-5.2-8.72-8.31z"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <linearGradient
              id="SVGID_00000159456536719903300810000002214515589507560368_"
              x1={396.255}
              x2={439.727}
              y1={305.782}
              y2={391.277}
              gradientUnits="userSpaceOnUse"
            >
              <stop
                id="stop3616"
                offset={0}
                style={{
                  stopColor: "#b69271",
                }}
              />
              <stop
                id="stop3618"
                offset={1}
                style={{
                  stopColor: "#000",
                }}
              />
            </linearGradient>
            <path
              id="path3621"
              d="M387.64 299.29c-1.83-2.66-4.28-6.14-5.28-9.22 2.73-2.82 7.22-3.78 10.86-2.29-2.22 3.54-4.01 7.64-5.58 11.51z"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <linearGradient
              id="SVGID_00000122679561494913009110000010936368830623919255_"
              x1={376.288}
              x2={419.76}
              y1={315.935}
              y2={401.43}
              gradientUnits="userSpaceOnUse"
            >
              <stop
                id="stop3623"
                offset={0}
                style={{
                  stopColor: "#b69271",
                }}
              />
              <stop
                id="stop3625"
                offset={1}
                style={{
                  stopColor: "#000",
                }}
              />
            </linearGradient>
            <path
              id="path3628"
              d="M396.11 343.86c-4.9-.89-9.97-1.61-14.78-3.02-.17-.39-.33-.78-.5-1.17-.96-2.38-1.72-4.82-2.32-7.31 1.86-4.26 4.65-8.17 7.92-11.43.79 8.39 4.22 16.52 9.68 22.93z"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <linearGradient
              id="SVGID_00000081645231832797119260000010723731483813723561_"
              x1={374.35}
              x2={417.822}
              y1={316.92}
              y2={402.416}
              gradientUnits="userSpaceOnUse"
            >
              <stop
                id="stop3630"
                offset={0}
                style={{
                  stopColor: "#b69271",
                }}
              />
              <stop
                id="stop3632"
                offset={1}
                style={{
                  stopColor: "#000",
                }}
              />
            </linearGradient>
            <path
              id="path3635"
              d="M393.98 345.18c-.59 3.99-.79 8.18-.56 12.29-4.37-3.94-8.05-8.62-10.75-13.83 3.75 1.04 7.5 1.63 11.31 1.54z"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <linearGradient
              id="SVGID_00000165924020893910632100000011027993770523244941_"
              x1={382.024}
              x2={425.497}
              y1={313.018}
              y2={398.514}
              gradientUnits="userSpaceOnUse"
            >
              <stop
                id="stop3637"
                offset={0}
                style={{
                  stopColor: "#b69271",
                }}
              />
              <stop
                id="stop3639"
                offset={1}
                style={{
                  stopColor: "#000",
                }}
              />
            </linearGradient>
            <path
              id="path3642"
              d="M414.46 357.12c-4.45 2.66-9.48 4.54-14.64 5.3a53.52 53.52 0 0 1-4.29-3.13c-.5-4.92-.08-9.76 1.42-14.6a75.55 75.55 0 0 0 17.51 12.43z"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <linearGradient
              id="SVGID_00000100370713344347295630000007300915643713218209_"
              x1={384.741}
              x2={428.214}
              y1={311.636}
              y2={397.132}
              gradientUnits="userSpaceOnUse"
            >
              <stop
                id="stop3644"
                offset={0}
                style={{
                  stopColor: "#b69271",
                }}
              />
              <stop
                id="stop3646"
                offset={1}
                style={{
                  stopColor: "#000",
                }}
              />
            </linearGradient>
            <path
              id="path3649"
              d="M423.38 370.75c-2.07-.2-4.12-.52-6.15-.97-5-1.1-9.82-2.96-14.28-5.48 4.08-1.09 8.01-2.77 11.61-4.96 1.65 4.48 4.88 8.54 8.82 11.41z"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <linearGradient
              id="SVGID_00000175310335199310860450000006555839672848191131_"
              x1={398.127}
              x2={441.599}
              y1={304.83}
              y2={390.326}
              gradientUnits="userSpaceOnUse"
            >
              <stop
                id="stop3651"
                offset={0}
                style={{
                  stopColor: "#b69271",
                }}
              />
              <stop
                id="stop3653"
                offset={1}
                style={{
                  stopColor: "#000",
                }}
              />
            </linearGradient>
            <path
              id="path3656"
              d="M436.08 362.33c-1.9 2.8-4.56 6.09-7.4 7.94-5.29-1.83-9.7-6.5-11.85-11.66 6.33 1.75 12.69 3.31 19.25 3.72z"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <linearGradient
              id="SVGID_00000008856784262258330750000009847312270647242369_"
              x1={405.225}
              x2={448.698}
              y1={301.221}
              y2={386.716}
              gradientUnits="userSpaceOnUse"
            >
              <stop
                id="stop3658"
                offset={0}
                style={{
                  stopColor: "#b69271",
                }}
              />
              <stop
                id="stop3660"
                offset={1}
                style={{
                  stopColor: "#000",
                }}
              />
            </linearGradient>
            <path
              id="path3663"
              d="M437.37 363.14c3.24 1.94 6.87 3.53 10.57 4.6-5.21 1.81-10.67 2.91-16.16 3.21 2.37-2.19 4.29-4.86 5.59-7.81z"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <linearGradient
              id="SVGID_00000073000426143006869210000002863814471546332824_"
              x1={415.192}
              x2={458.664}
              y1={296.154}
              y2={381.649}
              gradientUnits="userSpaceOnUse"
            >
              <stop
                id="stop3665"
                offset={0}
                style={{
                  stopColor: "#b69271",
                }}
              />
              <stop
                id="stop3667"
                offset={1}
                style={{
                  stopColor: "#000",
                }}
              />
            </linearGradient>
            <path
              id="path3670"
              d="M456 357.67c-.49 2.66-1.33 5.45-2.63 7.87-.56.26-1.13.51-1.7.76-4.37-.79-8.52-2.39-12.54-4.3 5.9.67 12.02-.9 16.87-4.33z"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <linearGradient
              id="SVGID_00000089547147194547550830000006134749196877537168_"
              x1={424.923}
              x2={468.395}
              y1={291.205}
              y2={376.7}
              gradientUnits="userSpaceOnUse"
            >
              <stop
                id="stop3672"
                offset={0}
                style={{
                  stopColor: "#b69271",
                }}
              />
              <stop
                id="stop3674"
                offset={1}
                style={{
                  stopColor: "#000",
                }}
              />
            </linearGradient>
            <path
              id="path3677"
              d="M465.26 358.13c-.99.88-2.07 1.69-3.15 2.43a58.16 58.16 0 0 1-6.31 3.78c.83-2.02 1.44-4.12 1.83-6.27 2.5.52 5.12.52 7.63.06z"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <linearGradient
              id="SVGID_00000160869693431007658050000010884549501298929285_"
              x1={430.511}
              x2={473.984}
              y1={288.362}
              y2={373.859}
              gradientUnits="userSpaceOnUse"
            >
              <stop
                id="stop3679"
                offset={0}
                style={{
                  stopColor: "#b69271",
                }}
              />
              <stop
                id="stop3681"
                offset={1}
                style={{
                  stopColor: "#000",
                }}
              />
            </linearGradient>
            <path
              id="path3684"
              d="M469 349.7c-.08 1.88-.29 3.79-.98 5.52-.22.29-.45.58-.68.85-3.12.69-6.35.81-9.51.34 3.97-1.86 7.67-4.05 11.17-6.71z"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <linearGradient
              id="SVGID_00000155118627150068796110000011732768736920994186_"
              x1={393.631}
              x2={407.133}
              y1={409.494}
              y2={371.519}
              gradientUnits="userSpaceOnUse"
            >
              <stop
                id="stop3686"
                offset={0.006}
                style={{
                  stopColor: "#8959a4",
                }}
              />
              <stop
                id="stop3688"
                offset={0.994}
                style={{
                  stopColor: "#68236a",
                }}
              />
            </linearGradient>
            <path
              id="path3691"
              d="M388.79 363.33c-2.68.38-5.36.65-8.03.68-1.4-1.93-2.68-3.93-3.86-5.98-.56-.98-1.11-2-1.2-3.12-.23-2.63 2.27-4.26 4.43-2.67 1.09.81 1.91 1.99 2.61 3.14 1.72 2.86 3.75 5.54 6.05 7.95zm5.45 4.87a41.86 41.86 0 0 1-3.19-2.65c-2.88.33-5.74.55-8.62.68 3.52 4.4 7.66 8.32 12.37 11.41 1.1.72 2.19 1.37 3.29 1.98-1.81-3.61-3.16-7.5-3.85-11.42zm19.48 8.65c-6.31-1.19-12.1-3.56-17.27-7.05.8 4 2.42 7.91 4.69 11.33 3.13 1.41 6.31 2.38 9.59 3.01 3.57-1.75 6.97-3.91 10.12-6.37-2.4-.18-4.77-.48-7.13-.92zm10.57 1.1c-3.01 2.7-6.4 4.98-10.05 6.74 3.54.44 7.21.55 11.07.46 2.44-.06 4.88-.07 7.3-.45 1.41-.22 2.8-.28 4.17-.76.57-.19 1.15-.42 1.71-.7-2.03-1.89-4.16-3.65-6.35-5.34-2.62.11-5.24.14-7.85.05zm15.7-.21c-.87-.28-1.81-.2-2.72-.14-.68.05-1.34.1-2.02.13 1.68 1.46 3.34 2.95 4.99 4.42.77-.62 1.59-1.46 1.5-2.51-.08-.91-.88-1.62-1.75-1.9z"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <g
              id="g3695"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            >
              <path
                id="path3693"
                d="m396.22 277.07-.69.63c-.44.43-1.16.99-1.96 1.83-1.68 1.61-3.95 4.11-6.35 7.47-.63.82-1.17 1.76-1.79 2.7-.6.95-1.17 1.98-1.76 3.03-1.12 2.14-2.24 4.47-3.17 7.02-1.9 5.07-3.19 10.94-3.42 17.17-.16 6.23.77 12.16 2.35 17.34.77 2.6 1.75 4.99 2.73 7.2.53 1.09 1.03 2.14 1.57 3.13.56.97 1.05 1.94 1.62 2.8 2.18 3.5 4.29 6.14 5.87 7.84.75.89 1.43 1.49 1.84 1.94.43.44.65.67.65.67s-.24-.21-.7-.62c-.45-.42-1.17-.98-1.98-1.82-1.69-1.61-3.98-4.13-6.37-7.58-.63-.84-1.16-1.8-1.78-2.77-.59-.98-1.15-2.03-1.73-3.12-1.09-2.21-2.17-4.63-3.04-7.27a51.944 51.944 0 0 1-2.67-17.8c.12-3.21.54-6.33 1.18-9.29.62-2.96 1.57-5.74 2.58-8.32 1.03-2.58 2.26-4.93 3.48-7.07.65-1.05 1.27-2.07 1.92-3.01.68-.92 1.27-1.85 1.95-2.65 2.6-3.3 5.04-5.67 6.83-7.18.86-.79 1.62-1.3 2.09-1.7.5-.37.75-.57.75-.57z"
                className="st30"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
            </g>
            <g
              id="g3699"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            >
              <path
                id="path3697"
                d="M475.73 347.16s-.12.2-.36.57c-.25.37-.57.93-1.06 1.61-.94 1.39-2.41 3.34-4.44 5.57-2.03 2.23-4.68 4.69-7.92 7.05-3.24 2.35-7.1 4.55-11.41 6.26-4.32 1.68-8.65 2.7-12.62 3.18-3.98.49-7.6.48-10.6.23-3.01-.25-5.41-.68-7.04-1.05-.82-.17-1.45-.36-1.88-.46-.43-.11-.65-.17-.65-.17s.23.03.67.1c.44.06 1.07.19 1.91.28 1.66.22 4.06.45 7.04.49 5.93.11 14.2-.81 22.59-4.11 8.4-3.29 15.08-8.25 19.35-12.36 2.15-2.05 3.76-3.86 4.82-5.15.55-.63.93-1.16 1.21-1.5.25-.35.39-.54.39-.54z"
                className="st30"
                style={{
                  fill: "none",
                  fillOpacity: 1,
                  stroke: "#01c38d",
                  strokeWidth: 0.755906,
                  
                  strokeOpacity: 1,
                }}
              />
            </g>
            <linearGradient
              id="SVGID_00000114067264652176747590000011372486524966193799_"
              x1={391.292}
              x2={391.159}
              y1={341.893}
              y2={287.623}
              gradientUnits="userSpaceOnUse"
            >
              <stop
                id="stop3701"
                offset={0}
                style={{
                  stopColor: "#b69271",
                }}
              />
              <stop
                id="stop3703"
                offset={1}
                style={{
                  stopColor: "#000",
                }}
              />
            </linearGradient>
            <path
              id="path3706"
              d="M382.51 304.23c-2.4 7.81-3.1 16.27-1.1 24.19.58 2.29 1.45 4.63 3.26 6.15 1.81 1.51 4.79 1.84 6.43.14-2.41-9.79-4.84-19.87-3.44-29.85 1.49-10.6 7.25-20.23 14.48-28.12-.17.18-.59.3-.81.42-.29.15-.57.31-.85.47-.56.32-1.12.67-1.66 1.03-1.05.7-2.05 1.47-3.03 2.26-1.15.92-2.29 1.86-3.18 3.04-1.23 1.64-2.26 3.45-3.29 5.21a81.007 81.007 0 0 0-3.64 6.9 66.452 66.452 0 0 0-2.87 7.24c-.11.3-.21.61-.3.92z"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <path
              id="path3708"
              d="M402.89 274.9c-2.24.8-3.84 2.18-5.48 3.85-.35.36-3.1 3.26-1.51 3.71 1.46.41 2.88-1.63 3.78-2.52 1.4-1.38 2.67-2.71 3.68-4.41.18-.31-.12-.76-.47-.63z"
              className="st30"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
            <path
              id="path3710"
              d="M474.48 343.33c-.89.47-1.58 1.03-2.23 1.79-.5.59-1.16 1.21-1.03 2.06.02.11.14.17.24.18.88.11 1.56-.74 2.11-1.29.68-.67 1.11-1.45 1.43-2.34.12-.31-.26-.53-.52-.4z"
              className="st30"
              style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#01c38d",
                strokeWidth: 0.755906,
                
                strokeOpacity: 1,
              }}
            />
          </g>
        </g>
      </g>
    </g>
    <style id="style3022" type="text/css">
      {".st5{fill:#b75d2b}.st30{fill:#fff6e0}.st48{fill:#fff5e2}"}
    </style>
  </svg>
)
            }
export default Moon
