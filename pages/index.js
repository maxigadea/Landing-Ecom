import React from "react";

const IndexPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-between items-center ">
      <nav className="flex flex-row items-center py-8 px-10 lg:px-20 2xl:px-44 bg-white h-[112px] w-full ">
        <a href="/" >
          <svg
            width="137"
            height="32"
            viewBox="0 0 137 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_35)">
              <path
                d="M1.1875 26.6875L12.0383 8.27235C12.1431 8.09378 12.2927 7.94571 12.4724 7.84282C12.652 7.73993 12.8555 7.6858 13.0625 7.6858C13.2695 7.6858 13.473 7.73993 13.6526 7.84282C13.8323 7.94571 13.9819 8.09378 14.0867 8.27235L24.9375 26.6875"
                stroke="black"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.47385 16H18.6512"
                stroke="black"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M25.8649 12.0532L15.688 30.8492L39.4225 29.9893L27.912 11.9791C27.8008 11.8044 27.6459 11.6618 27.4627 11.5655C27.2794 11.4692 27.0741 11.4225 26.8672 11.43C26.6603 11.4375 26.459 11.4989 26.2831 11.6083C26.1073 11.7176 25.9631 11.871 25.8649 12.0532Z"
                fill="white"
                stroke="black"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M51.4375 12.1307C51.3466 11.3239 50.9716 10.6989 50.3125 10.2557C49.6534 9.80682 48.8239 9.58239 47.8239 9.58239C47.108 9.58239 46.4886 9.69602 45.9659 9.92329C45.4432 10.1449 45.0369 10.4517 44.7472 10.8438C44.4631 11.2301 44.321 11.6705 44.321 12.1648C44.321 12.5795 44.4176 12.9375 44.6108 13.2386C44.8097 13.5398 45.0682 13.7926 45.3864 13.9972C45.7102 14.196 46.0568 14.3636 46.4261 14.5C46.7955 14.6307 47.1506 14.7386 47.4915 14.8239L49.196 15.267C49.7528 15.4034 50.3239 15.5881 50.9091 15.821C51.4943 16.054 52.0369 16.3608 52.5369 16.7415C53.0369 17.1222 53.4403 17.5938 53.7472 18.1562C54.0597 18.7188 54.2159 19.392 54.2159 20.1761C54.2159 21.1648 53.9602 22.0426 53.4489 22.8097C52.9432 23.5767 52.2074 24.1818 51.2415 24.625C50.2813 25.0682 49.1193 25.2898 47.7557 25.2898C46.4489 25.2898 45.3182 25.0824 44.3636 24.6676C43.4091 24.2528 42.6619 23.6648 42.1222 22.9034C41.5824 22.1364 41.2841 21.2273 41.2273 20.1761H43.8693C43.9205 20.8068 44.125 21.3324 44.483 21.7528C44.8466 22.1676 45.3097 22.4773 45.8722 22.6818C46.4403 22.8807 47.0625 22.9801 47.7386 22.9801C48.483 22.9801 49.1449 22.8636 49.7244 22.6307C50.3097 22.392 50.7699 22.0625 51.1051 21.642C51.4403 21.2159 51.608 20.7187 51.608 20.1506C51.608 19.6335 51.4602 19.2102 51.1648 18.8807C50.875 18.5511 50.4801 18.2784 49.9801 18.0625C49.4858 17.8466 48.9261 17.6562 48.3011 17.4915L46.2386 16.929C44.8409 16.5483 43.733 15.9886 42.9148 15.25C42.1023 14.5114 41.696 13.5341 41.696 12.3182C41.696 11.3125 41.9688 10.4347 42.5142 9.68466C43.0597 8.93466 43.7983 8.35227 44.7301 7.9375C45.6619 7.51705 46.7131 7.30682 47.8835 7.30682C49.0653 7.30682 50.108 7.5142 51.0114 7.92898C51.9205 8.34375 52.6364 8.91477 53.1591 9.64204C53.6818 10.3636 53.9545 11.1932 53.9773 12.1307H51.4375ZM62.5604 25.2642C61.2707 25.2642 60.1599 24.9886 59.228 24.4375C58.3019 23.8807 57.586 23.0994 57.0803 22.0938C56.5803 21.0824 56.3303 19.8977 56.3303 18.5398C56.3303 17.1989 56.5803 16.017 57.0803 14.9943C57.586 13.9716 58.2905 13.1733 59.1939 12.5994C60.103 12.0256 61.1655 11.7386 62.3814 11.7386C63.1201 11.7386 63.836 11.8608 64.5292 12.1051C65.2224 12.3494 65.8445 12.733 66.3957 13.2557C66.9468 13.7784 67.3814 14.4574 67.6996 15.2926C68.0178 16.1222 68.1769 17.1307 68.1769 18.3182V19.2216H57.7707V17.3125H65.6797C65.6797 16.642 65.5434 16.0483 65.2707 15.5312C64.9979 15.0085 64.6144 14.5966 64.1201 14.2955C63.6314 13.9943 63.0576 13.8438 62.3985 13.8438C61.6826 13.8438 61.0576 14.0199 60.5235 14.3722C59.9951 14.7187 59.586 15.1733 59.2962 15.7358C59.0121 16.2926 58.8701 16.8977 58.8701 17.5511V19.0426C58.8701 19.9176 59.0235 20.6619 59.3303 21.2756C59.6428 21.8892 60.0775 22.358 60.6343 22.6818C61.1911 23 61.8417 23.1591 62.586 23.1591C63.0689 23.1591 63.5093 23.0909 63.907 22.9545C64.3047 22.8125 64.6485 22.6023 64.9383 22.3239C65.228 22.0455 65.4496 21.7017 65.603 21.2926L68.015 21.7273C67.8218 22.4375 67.4752 23.0597 66.9752 23.5938C66.4809 24.1222 65.8587 24.5341 65.1087 24.8295C64.3644 25.1193 63.515 25.2642 62.5604 25.2642ZM73.3126 7.54545V25H70.7643V7.54545H73.3126ZM79.0492 7.54545V25H76.5009V7.54545H79.0492ZM82.442 25V7.54545H88.6636C90.0215 7.54545 91.1465 7.79261 92.0386 8.28693C92.9306 8.78125 93.5982 9.45739 94.0414 10.3153C94.4846 11.1676 94.7062 12.1278 94.7062 13.196C94.7062 14.2699 94.4818 15.2358 94.0329 16.0938C93.5897 16.946 92.9193 17.6222 92.0215 18.1222C91.1295 18.6165 90.0073 18.8636 88.6551 18.8636H84.3766V16.6307H88.4164C89.2744 16.6307 89.9704 16.483 90.5045 16.1875C91.0386 15.8864 91.4306 15.4773 91.6806 14.9602C91.9306 14.4432 92.0556 13.8551 92.0556 13.196C92.0556 12.5369 91.9306 11.9517 91.6806 11.4403C91.4306 10.929 91.0357 10.5284 90.496 10.2386C89.9619 9.94886 89.2573 9.80398 88.3823 9.80398H85.0755V25H82.442ZM102.827 25.2642C101.537 25.2642 100.426 24.9886 99.4946 24.4375C98.5685 23.8807 97.8526 23.0994 97.3469 22.0938C96.8469 21.0824 96.5969 19.8977 96.5969 18.5398C96.5969 17.1989 96.8469 16.017 97.3469 14.9943C97.8526 13.9716 98.5571 13.1733 99.4605 12.5994C100.37 12.0256 101.432 11.7386 102.648 11.7386C103.387 11.7386 104.103 11.8608 104.796 12.1051C105.489 12.3494 106.111 12.733 106.662 13.2557C107.213 13.7784 107.648 14.4574 107.966 15.2926C108.284 16.1222 108.443 17.1307 108.443 18.3182V19.2216H98.0372V17.3125H105.946C105.946 16.642 105.81 16.0483 105.537 15.5312C105.264 15.0085 104.881 14.5966 104.387 14.2955C103.898 13.9943 103.324 13.8438 102.665 13.8438C101.949 13.8438 101.324 14.0199 100.79 14.3722C100.262 14.7187 99.8526 15.1733 99.5628 15.7358C99.2787 16.2926 99.1366 16.8977 99.1366 17.5511V19.0426C99.1366 19.9176 99.2901 20.6619 99.5969 21.2756C99.9094 21.8892 100.344 22.358 100.901 22.6818C101.458 23 102.108 23.1591 102.853 23.1591C103.336 23.1591 103.776 23.0909 104.174 22.9545C104.571 22.8125 104.915 22.6023 105.205 22.3239C105.495 22.0455 105.716 21.7017 105.87 21.2926L108.282 21.7273C108.088 22.4375 107.742 23.0597 107.242 23.5938C106.747 24.1222 106.125 24.5341 105.375 24.8295C104.631 25.1193 103.782 25.2642 102.827 25.2642ZM114.841 25.2898C114.011 25.2898 113.261 25.1364 112.591 24.8295C111.92 24.517 111.389 24.0653 110.997 23.4744C110.61 22.8835 110.417 22.1591 110.417 21.3011C110.417 20.5625 110.559 19.9545 110.843 19.4773C111.127 19 111.511 18.6222 111.994 18.3438C112.477 18.0653 113.017 17.8551 113.613 17.7131C114.21 17.571 114.818 17.4631 115.437 17.3892C116.221 17.2983 116.858 17.2244 117.346 17.1676C117.835 17.1051 118.19 17.0057 118.412 16.8693C118.633 16.733 118.744 16.5114 118.744 16.2045V16.1449C118.744 15.4006 118.534 14.8239 118.113 14.4148C117.698 14.0057 117.079 13.8011 116.255 13.8011C115.397 13.8011 114.721 13.9915 114.227 14.3722C113.738 14.7472 113.4 15.1648 113.213 15.625L110.818 15.0795C111.102 14.2841 111.517 13.642 112.062 13.1534C112.613 12.6591 113.247 12.3011 113.963 12.0795C114.679 11.8523 115.431 11.7386 116.221 11.7386C116.744 11.7386 117.298 11.8011 117.883 11.9261C118.474 12.0455 119.025 12.267 119.537 12.5909C120.054 12.9148 120.477 13.3778 120.806 13.9801C121.136 14.5767 121.301 15.3523 121.301 16.3068V25H118.812V23.2102H118.71C118.545 23.5398 118.298 23.8636 117.968 24.1818C117.639 24.5 117.216 24.7642 116.698 24.9744C116.181 25.1847 115.562 25.2898 114.841 25.2898ZM115.395 23.2443C116.099 23.2443 116.701 23.1051 117.201 22.8267C117.707 22.5483 118.091 22.1847 118.352 21.7358C118.619 21.2812 118.752 20.7955 118.752 20.2784V18.5909C118.662 18.6818 118.485 18.767 118.224 18.8466C117.968 18.9205 117.676 18.9858 117.346 19.0426C117.017 19.0937 116.696 19.142 116.383 19.1875C116.071 19.2273 115.809 19.2614 115.599 19.2898C115.105 19.3523 114.653 19.4574 114.244 19.6051C113.841 19.7528 113.517 19.9659 113.272 20.2443C113.034 20.517 112.914 20.8807 112.914 21.3352C112.914 21.9659 113.147 22.4432 113.613 22.767C114.079 23.0852 114.673 23.2443 115.395 23.2443ZM126.799 20.5597L126.782 17.4489H127.225L132.441 11.9091H135.492L129.543 18.2159H129.142L126.799 20.5597ZM124.455 25V7.54545H127.003V25H124.455ZM132.722 25L128.034 18.7784L129.79 16.9972L135.85 25H132.722Z"
              fill="black"
            />
            <defs>
              <clipPath id="clip0_1_35">
                <rect
                  width="38"
                  height="19"
                  fill="white"
                  transform="translate(0 6.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </a>
      </nav>

      <div className="flex flex-col w-full py-8 px-10 lg:px-20 2xl:px-44">
        <header className="flex flex-row gap-4 items-center justify-between">
          <div className="flex flex-col max-w-[690px] h-full gap-6">
            <h1 className="font-inter text-5xl md:text-[60px] md:leading-[80px] font-medium text-[#000000] self-stretch">
              Boost your Amazon business with the web's best toolset.
            </h1>
            <p className="text-2xl md:text-2xl font-light text-[#000000]">
              We deliver powerful insights to enhance your operations and
              marketing strategies.
            </p>
          </div>
          <div className="h-full hidden items-center justify-center lg:flex">
            <img
              src="/listing.svg"
              className="!h-[622px] !min-w-[445px] mt-20"
            />
          </div>
        </header>

        <section className="w-full rounded-lg py-8">
          <h2 className="text-xl md:text-2xl font-light text-[#000000] mb-6">
            Our services
          </h2>
          <div className="flex flex-col md:flex-row gap-6 justify-between">
            <div className="flex flex-col p-6 gap-4 rounded-2xl max-w-[282px] bg-[#F5F5F5] h-full md:h-[500px] lg:h-[380px] xl:h-[304px] max-h-[520px]">
              <img src="/search.svg" alt="icon" className="w-8 h-8" />
              <p className="font-medium text-xl text-[#000000] self-stretch">
                Product Research
              </p>
              <p className="font-light text-base text-[#000000] self-stretch">
                Discover profitable products through our comprehensive analysis.
                Identify trends, evaluate competition to enhance your Amazon
                selling strategy.
              </p>
            </div>

            <div className="flex flex-col p-6 gap-4 rounded-2xl max-w-[282px] bg-[#F5F5F5] h-full md:h-[500px] lg:h-[380px] xl:h-[304px] max-h-[520px]">
              <img src="/cube.svg" alt="icon" className="w-8 h-8" />
              <p className="font-medium text-xl text-[#000000] self-stretch">
                Inventory Management
              </p>
              <p className="font-light text-base text-[#000000] self-stretch">
                Maintain a perfect balance in your inventory with our management
                tools. Avoid excess stock and out-of-stock situations with
                accurate alerts and forecasts.
              </p>
            </div>

            <div className="flex flex-col p-6 gap-4 rounded-2xl max-w-[282px] bg-[#F5F5F5] h-full md:h-[500px] lg:h-[380px] xl:h-[304px] max-h-[520px]">
              <img src="/usercircle.svg" alt="icon" className="w-8 h-8" />
              <p className="font-medium text-xl text-[#000000] self-stretch">
                Competitor Analysis
              </p>
              <p className="font-light text-base text-[#000000] self-stretch">
                Stay one step ahead with our detailed competitor analysis.
                Observe pricing strategies, listing performance, and trends to
                outperform the competition.
              </p>
            </div>

            <div className="flex flex-col p-6 gap-4 rounded-2xl max-w-[282px] bg-[#F5F5F5] h-full md:h-[500px] lg:h-[380px] xl:h-[304px] max-h-[520px]">
              <img src="/trendup.svg" alt="icon" className="w-8 h-8" />
              <p className="font-medium text-xl text-[#000000] self-stretch">
                Listing Optimization
              </p>
              <p className="font-light text-base text-[#000000] self-stretch">
                Maximize the visibility and conversion of your listings with our
                optimization tools. Improve your titles, descriptions, and
                keywords to stand out among the competition.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="flex flex-col w-full py-8 px-10 lg:px-20 2xl:px-44">
        <section className="flex flex-col items-center px-20 xl:px-28 py-16 bg-[#f6f6f6] w-full rounded-3xl h-360px sm:h-[320px] lg:h-[480px] gap-10">
          <h1 className="font-inter text-2xl sm:text-4xl lg:text-[60px] lg:leading-[80px] font-medium text-[#000000] text-center max-w-[1000px]">
            Don't miss out on this opportunity pre-register now to get the lasts
            updates.
          </h1>
          <button onClick={() => window.open('https://6s72mdp5z2q.typeform.com/to/U66OD2Wz', '_blank')} className="w-[186px] h-12 bg-white rounded-lg px-2 py-2 items-center">
            <div className="flex flex-row gap-2 w-full items-center justify-center">
              <p className="font-medium text-base text-[#000000]">
                Pre-register now
              </p>
              <img src="/arrowRight.svg" alt="arrow" />
            </div>
          </button>
        </section>
      </div>

      <footer className="flex flex-col w-full py-8 px-10 lg:px-20 2xl:px-44 gap-4">
        <p className="font-light text-base sm:text-2xl text-[#000000]">
          For sellers by sellers.
        </p>
        <p className="font-light text-xs sm:text-sm text-[#000000]">
          © {new Date().getFullYear()} The American Gold - All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default IndexPage;
