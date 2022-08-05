import Image from "next/image";
import Link from "next/link";
import React from "react";
import Seller012 from "../../public/assets/images/service/seller12.png";

export default function Branding() {
  return (
    <>
      <div className="md:py-[90px] py-[50px] md:px-0 px-5">
        <div className="max-w-[1307px] m-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 justify-between items-center mb-12">
            <div>
              <h2 className="font-bold md:text-[50px] text-[34px] md:leading-[55px] leading-[45px] text-[#090D48] mb-3">
                Ecommerce Website
              </h2>

              <p className="text-[22px] leading-[35px] text-[#303030] mb-3">
                We are a team of Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industrys standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets con
              </p>

              <p className="text-[22px] leading-[35px] text-[#303030]">
                We are a team of Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industrys standard dummy text ever since the 1500s,
              </p>
            </div>
            <div
              className="relative"
              data-aos="slide-left"
              data-aos-offset="200"
            >
              <Image className="bounce-in imgHover" src={Seller012} />
            </div>
          </div>

          <div>
            <div className="font-bold md:text-[50px] text-[35px] md:leading-[55px] leading-[45px] text-[#090D48] mb-3">
              <h2>Lets talk about your next brand</h2>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-1 gap-6 items-center mt-10">
              <div className=" py-[62px] px-[35px] group hover:brandHover">
                <div className="mb-5">
                  <svg
                    width="60"
                    height="61"
                    viewBox="0 0 60 61"
                    className="fill-[#FC6E36] group-hover:fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_343_5212)">
                      <path d="M59.4798 43.9194L53.3298 40.8444L49.4157 30.6632C49.3696 30.5428 49.2992 30.4332 49.2089 30.3413C49.1186 30.2493 49.0103 30.177 48.8907 30.1288L24.6048 20.421C24.435 20.3534 24.2491 20.3369 24.0701 20.3735C23.891 20.4102 23.7266 20.4984 23.597 20.6272L20.3579 23.8663C20.2307 23.996 20.144 24.1598 20.1082 24.3379C20.0724 24.516 20.0892 24.7007 20.1563 24.8694L29.8642 49.1554C29.9124 49.2749 29.9847 49.3832 30.0766 49.4735C30.1686 49.5639 30.2782 49.6343 30.3985 49.6804L40.5798 53.5944L43.6548 59.7444C43.7195 59.88 43.8159 59.9981 43.9359 60.0886C44.0558 60.1792 44.1957 60.2396 44.3438 60.2647C44.3937 60.2694 44.444 60.2694 44.4938 60.2647C44.7421 60.2637 44.9798 60.1642 45.1548 59.9882L59.7235 45.4194C59.8308 45.316 59.9118 45.1884 59.9599 45.0474C60.008 44.9064 60.0218 44.7559 60.0001 44.6085C59.9749 44.4603 59.9145 44.3204 59.824 44.2005C59.7334 44.0806 59.6154 43.9842 59.4798 43.9194ZM22.1204 24.7475L22.6407 24.2319L34.7298 36.321C33.9331 37.4499 33.589 38.8367 33.7655 40.2072C33.9421 41.5776 34.6265 42.8319 35.6833 43.722C36.7402 44.6121 38.0926 45.0733 39.4731 45.0143C40.8536 44.9553 42.1617 44.3804 43.1387 43.4034C44.1158 42.4263 44.6907 41.1182 44.7497 39.7377C44.8087 38.3572 44.3475 37.0048 43.4574 35.948C42.5672 34.8911 41.313 34.2068 39.9425 34.0302C38.5721 33.8536 37.1853 34.1977 36.0563 34.9944L23.9673 22.9054L24.4829 22.385L47.8126 31.7179L51.4923 41.2897L41.0251 51.7569L31.4532 48.0772L22.1204 24.7475ZM39.2345 35.8569C40.077 35.8582 40.8931 36.1515 41.5437 36.687C42.1942 37.2224 42.639 37.9669 42.8022 38.7935C42.9655 39.6201 42.8371 40.4777 42.4389 41.2203C42.0407 41.9628 41.3974 42.5444 40.6186 42.8658C39.8397 43.1873 38.9735 43.2287 38.1675 42.9832C37.3616 42.7376 36.6656 42.2202 36.1983 41.5191C35.731 40.818 35.5213 39.9765 35.6048 39.1381C35.6883 38.2997 36.0599 37.5161 36.6563 36.921C37.3408 36.2387 38.2681 35.856 39.2345 35.8569ZM44.7517 57.7429L42.4079 53.0554L52.7813 42.6819L57.4688 45.0257L44.7517 57.7429Z" />
                      <path d="M17.9299 50.4208C17.7506 50.2514 17.5133 50.1569 17.2666 50.1569C17.0199 50.1569 16.7826 50.2514 16.6033 50.4208L15.4127 51.6114C12.2354 47.2992 10.4826 42.1031 10.3986 36.7473C10.3146 31.3916 11.9035 26.1431 14.9439 21.7333C15.8549 22.2345 16.9037 22.4271 17.9332 22.2821C18.9628 22.1371 19.9176 21.6623 20.6547 20.929C21.3917 20.1956 21.8713 19.2432 22.0214 18.2144C22.1716 17.1856 21.9844 16.1358 21.4877 15.2224C25.8975 12.1819 31.146 10.593 36.5017 10.677C41.8575 10.761 47.0536 12.5138 51.3658 15.6911L50.1564 16.8677C49.9821 17.0434 49.8844 17.281 49.8846 17.5286C49.8839 17.652 49.9075 17.7743 49.9542 17.8885C50.0008 18.0027 50.0696 18.1066 50.1564 18.1942L54.2908 22.2958C54.4665 22.4704 54.7041 22.5684 54.9518 22.5684C55.1994 22.5684 55.437 22.4704 55.6127 22.2958L59.7236 18.1849C59.8108 18.0978 59.8799 17.9944 59.9271 17.8806C59.9743 17.7668 59.9986 17.6448 59.9986 17.5216C59.9986 17.3984 59.9743 17.2764 59.9271 17.1626C59.8799 17.0488 59.8108 16.9454 59.7236 16.8583L55.6127 12.7474C55.437 12.5727 55.1994 12.4747 54.9518 12.4747C54.7041 12.4747 54.4665 12.5727 54.2908 12.7474L52.7018 14.327C48.7854 11.38 44.1552 9.52844 39.2866 8.9625C34.4181 8.39656 29.4866 9.13664 24.9986 11.1067L30.4033 5.71611C31.0161 6.00893 31.7129 6.07521 32.3699 5.90319C33.0269 5.73118 33.6018 5.33199 33.9925 4.77645C34.3832 4.22091 34.5645 3.54492 34.5043 2.86842C34.444 2.19193 34.146 1.55864 33.6632 1.08093C33.1805 0.603216 32.5441 0.311953 31.867 0.258813C31.1899 0.205672 30.5159 0.394091 29.9645 0.79064C29.4131 1.18719 29.02 1.76624 28.8549 2.42505C28.6898 3.08386 28.7634 3.77985 29.0627 4.38955L19.9408 13.5255C19.0146 12.9042 17.9015 12.6238 16.7915 12.7321C15.6815 12.8404 14.6436 13.3307 13.855 14.1193C13.0664 14.9079 12.576 15.9459 12.4677 17.0559C12.3594 18.1658 12.6399 19.279 13.2611 20.2052L4.1252 29.327C3.51312 29.0288 2.81512 28.9572 2.15523 29.125C1.49535 29.2928 0.916314 29.6891 0.521025 30.2434C0.125737 30.7978 -0.0602055 31.4744 -0.00376091 32.1529C0.0526837 32.8315 0.34786 33.468 0.829316 33.9495C1.31077 34.4309 1.94732 34.7261 2.62586 34.7826C3.3044 34.839 3.98098 34.6531 4.53536 34.2578C5.08975 33.8625 5.48605 33.2835 5.65383 32.6236C5.82161 31.9637 5.75002 31.2657 5.45176 30.6536L10.8564 25.263C8.88438 29.7497 8.14197 34.6805 8.70543 39.549C9.2689 44.4176 11.1179 49.0484 14.0627 52.9661L12.4783 54.5552C12.3037 54.7308 12.2057 54.9684 12.2057 55.2161C12.2057 55.4638 12.3037 55.7014 12.4783 55.877L16.5893 59.988C16.7643 60.164 17.002 60.2635 17.2502 60.2645C17.3739 60.2646 17.4964 60.2403 17.6107 60.1928C17.7249 60.1453 17.8286 60.0757 17.9158 59.988L22.0314 55.877C22.2061 55.7014 22.3041 55.4638 22.3041 55.2161C22.3041 54.9684 22.2061 54.7308 22.0314 54.5552L17.9299 50.4208ZM54.9611 14.7255L57.7455 17.5099L54.9611 20.2942L52.1768 17.5099L54.9611 14.7255ZM30.9377 2.43486C31.077 2.29441 31.2549 2.19851 31.4488 2.15933C31.6427 2.12015 31.8439 2.13944 32.0268 2.21477C32.2097 2.2901 32.3661 2.41807 32.4762 2.58244C32.5862 2.74681 32.645 2.94017 32.645 3.13798C32.645 3.3358 32.5862 3.52916 32.4762 3.69353C32.3661 3.8579 32.2097 3.98587 32.0268 4.0612C31.8439 4.13653 31.6427 4.15582 31.4488 4.11664C31.2549 4.07745 31.077 3.98156 30.9377 3.84111C30.8453 3.74882 30.772 3.63921 30.722 3.51856C30.6719 3.39791 30.6462 3.26859 30.6462 3.13798C30.6462 3.00738 30.6719 2.87806 30.722 2.75741C30.772 2.63676 30.8453 2.52715 30.9377 2.43486ZM15.1877 15.452C15.4599 15.1785 15.7835 14.9615 16.1399 14.8133C16.4962 14.6652 16.8783 14.589 17.2643 14.589C17.6502 14.589 18.0323 14.6652 18.3886 14.8133C18.745 14.9615 19.0686 15.1785 19.3408 15.452C19.7523 15.8629 20.0327 16.3866 20.1465 16.9568C20.2603 17.5271 20.2024 18.1183 19.9801 18.6556C19.7577 19.1929 19.381 19.6522 18.8976 19.9754C18.4142 20.2985 17.8458 20.471 17.2643 20.471C16.6828 20.471 16.1143 20.2985 15.6309 19.9754C15.1475 19.6522 14.7708 19.1929 14.5485 18.6556C14.3262 18.1183 14.2682 17.5271 14.382 16.9568C14.4958 16.3866 14.7762 15.8629 15.1877 15.452ZM3.58145 32.6083C3.39005 32.7679 3.14589 32.8502 2.89693 32.8389C2.64797 32.8277 2.41221 32.7237 2.23599 32.5475C2.05977 32.3713 1.95582 32.1355 1.94457 31.8866C1.93332 31.6376 2.01559 31.3934 2.1752 31.202C2.36279 31.0177 2.6153 30.9144 2.87832 30.9144C3.14135 30.9144 3.39385 31.0177 3.58145 31.202C3.67386 31.2943 3.74717 31.4039 3.79719 31.5246C3.8472 31.6452 3.87295 31.7746 3.87295 31.9052C3.87295 32.0358 3.8472 32.1651 3.79719 32.2858C3.74717 32.4064 3.67386 32.516 3.58145 32.6083ZM17.2643 57.9817L14.4799 55.1974L17.2643 52.413L20.0486 55.1974L17.2643 57.9817Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_343_5212">
                        <rect
                          width="60"
                          height="60"
                          fill="white"
                          transform="translate(0 0.264648)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h2 className="text-[#090D48] text-[22px] font-bold mb-5 group-hover:text-white">
                  Logo Design
                </h2>
                <p className="text-[#303030] text-[15px] leading-[25px] group-hover:text-white">
                  There are many variations of passages Lorem Ipsum available,
                  but majority have suffered alteration in some form, injected
                  humour.
                </p>
              </div>

              <div className=" py-[62px] px-[35px] group hover:brandHover">
                <div className="mb-5">
                  <svg
                    width="60"
                    height="61"
                    viewBox="0 0 60 61"
                    className="fill-[#FC6E36] group-hover:fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_343_5215)">
                      <path d="M52.9653 23.4311C53.4507 23.4311 53.8442 23.0377 53.8442 22.5521V21.2959C53.8442 20.8104 53.4507 20.417 52.9653 20.417C52.4799 20.417 52.0864 20.8104 52.0864 21.2959V22.5521C52.0864 23.0377 52.4799 23.4311 52.9653 23.4311Z" />
                      <path d="M52.0864 27.1586C52.0864 27.6441 52.4799 28.0375 52.9653 28.0375C53.4507 28.0375 53.8442 27.6441 53.8442 27.1586V25.9023C53.8442 25.4168 53.4507 25.0234 52.9653 25.0234C52.4799 25.0234 52.0864 25.4168 52.0864 25.9023V27.1586Z" />
                      <path d="M7.03467 25.0234C6.54928 25.0234 6.15576 25.4168 6.15576 25.9023V27.1586C6.15576 27.6441 6.54928 28.0375 7.03467 28.0375C7.52006 28.0375 7.91357 27.6441 7.91357 27.1586V25.9023C7.91357 25.4168 7.52006 25.0234 7.03467 25.0234Z" />
                      <path d="M7.91357 21.2959C7.91357 20.8104 7.52006 20.417 7.03467 20.417C6.54928 20.417 6.15576 20.8104 6.15576 21.2959V22.5521C6.15576 23.0377 6.54928 23.4311 7.03467 23.4311C7.52006 23.4311 7.91357 23.0377 7.91357 22.5521V21.2959Z" />
                      <path d="M30.7021 32.7002H29.2979C28.8125 32.7002 28.4189 33.0936 28.4189 33.5791C28.4189 34.0646 28.8125 34.458 29.2979 34.458H30.7021C31.1875 34.458 31.581 34.0646 31.581 33.5791C31.581 33.0936 31.1875 32.7002 30.7021 32.7002Z" />
                      <path d="M39.5962 34.458H41.0006C41.486 34.458 41.8795 34.0646 41.8795 33.5791C41.8795 33.0936 41.486 32.7002 41.0006 32.7002H39.5962C39.1108 32.7002 38.7173 33.0936 38.7173 33.5791C38.7173 34.0646 39.1108 34.458 39.5962 34.458Z" />
                      <path d="M44.7451 32.7002C44.2597 32.7002 43.8662 33.0936 43.8662 33.5791C43.8662 34.0646 44.2597 34.458 44.7451 34.458H46.1495C46.6349 34.458 47.0284 34.0646 47.0284 33.5791C47.0284 33.0936 46.6349 32.7002 46.1495 32.7002H44.7451Z" />
                      <path d="M15.2545 32.7002H13.8501C13.3647 32.7002 12.9712 33.0936 12.9712 33.5791C12.9712 34.0646 13.3647 34.458 13.8501 34.458H15.2545C15.7399 34.458 16.1334 34.0646 16.1334 33.5791C16.1334 33.0936 15.74 32.7002 15.2545 32.7002Z" />
                      <path d="M34.4468 34.458H35.8512C36.3365 34.458 36.7301 34.0646 36.7301 33.5791C36.7301 33.0936 36.3365 32.7002 35.8512 32.7002H34.4468C33.9614 32.7002 33.5679 33.0936 33.5679 33.5791C33.5679 34.0646 33.9614 34.458 34.4468 34.458Z" />
                      <path d="M24.1484 34.458H25.5527C26.0381 34.458 26.4316 34.0646 26.4316 33.5791C26.4316 33.0936 26.0381 32.7002 25.5527 32.7002H24.1484C23.663 32.7002 23.2695 33.0936 23.2695 33.5791C23.2695 34.0646 23.663 34.458 24.1484 34.458Z" />
                      <path d="M18.9995 32.7002C18.5141 32.7002 18.1206 33.0936 18.1206 33.5791C18.1206 34.0646 18.5141 34.458 18.9995 34.458H20.4038C20.8892 34.458 21.2827 34.0646 21.2827 33.5791C21.2827 33.0936 20.8892 32.7002 20.4038 32.7002H18.9995Z" />
                      <path d="M41.0006 13.9961H39.5962C39.1108 13.9961 38.7173 14.3895 38.7173 14.875C38.7173 15.3605 39.1108 15.7539 39.5962 15.7539H41.0006C41.486 15.7539 41.8795 15.3605 41.8795 14.875C41.8795 14.3895 41.486 13.9961 41.0006 13.9961Z" />
                      <path d="M34.4468 15.7539H35.8512C36.3365 15.7539 36.7301 15.3605 36.7301 14.875C36.7301 14.3895 36.3365 13.9961 35.8512 13.9961H34.4468C33.9614 13.9961 33.5679 14.3895 33.5679 14.875C33.5679 15.3604 33.9614 15.7539 34.4468 15.7539Z" />
                      <path d="M46.1495 15.7539C46.6349 15.7539 47.0284 15.3605 47.0284 14.875C47.0284 14.3895 46.6349 13.9961 46.1495 13.9961H44.7451C44.2597 13.9961 43.8662 14.3895 43.8662 14.875C43.8662 15.3605 44.2597 15.7539 44.7451 15.7539H46.1495Z" />
                      <path d="M25.5527 15.7539C26.0381 15.7539 26.4316 15.3605 26.4316 14.875C26.4316 14.3895 26.0381 13.9961 25.5527 13.9961H24.1484C23.663 13.9961 23.2695 14.3895 23.2695 14.875C23.2695 15.3605 23.663 15.7539 24.1484 15.7539H25.5527Z" />
                      <path d="M18.9995 15.7539H20.4038C20.8892 15.7539 21.2827 15.3605 21.2827 14.875C21.2827 14.3895 20.8892 13.9961 20.4038 13.9961H18.9995C18.5141 13.9961 18.1206 14.3895 18.1206 14.875C18.1206 15.3604 18.5141 15.7539 18.9995 15.7539Z" />
                      <path d="M15.2545 15.7539C15.7399 15.7539 16.1334 15.3605 16.1334 14.875C16.1334 14.3895 15.7399 13.9961 15.2545 13.9961H13.8501C13.3647 13.9961 12.9712 14.3895 12.9712 14.875C12.9712 15.3605 13.3647 15.7539 13.8501 15.7539H15.2545Z" />
                      <path d="M29.2979 15.7539H30.7021C31.1875 15.7539 31.581 15.3605 31.581 14.875C31.581 14.3895 31.1875 13.9961 30.7021 13.9961H29.2979C28.8125 13.9961 28.4189 14.3895 28.4189 14.875C28.4189 15.3604 28.8125 15.7539 29.2979 15.7539Z" />
                      <path d="M0.878906 38.0001C1.3643 38.0001 1.75781 37.6067 1.75781 37.1212V9.59863H58.2421V18.3883C58.2421 18.8738 58.6356 19.2672 59.121 19.2672C59.6064 19.2672 59.9999 18.8738 59.9999 18.3883V2.80059C59.9999 1.40219 58.8623 0.264648 57.4639 0.264648H18.9725C18.4871 0.264648 18.0936 0.658047 18.0936 1.14355C18.0936 1.62906 18.4871 2.02246 18.9725 2.02246H57.4638C57.893 2.02246 58.242 2.37156 58.242 2.80059V7.84082H1.75781V2.80059C1.75781 2.37156 2.10691 2.02246 2.53594 2.02246H14.8711C15.3565 2.02246 15.75 1.62906 15.75 1.14355C15.75 0.658047 15.3565 0.264648 14.8711 0.264648H2.53594C1.13754 0.264648 0 1.40219 0 2.80059V37.1212C0 37.6067 0.393516 38.0001 0.878906 38.0001Z" />
                      <path d="M32.407 28.8331C32.8585 28.6549 33.08 28.1443 32.9018 27.6929L29.911 20.1167C29.7786 19.7811 29.4543 19.5605 29.0935 19.5605C28.7327 19.5605 28.4084 19.7811 28.276 20.1167L25.2853 27.6929C25.107 28.1444 25.3285 28.6549 25.78 28.8331C26.2314 29.0113 26.742 28.7899 26.9203 28.3382L27.4351 27.0342H30.7521L31.2669 28.3382C31.4033 28.6838 31.7343 28.8946 32.0846 28.8946C32.1918 28.8946 32.3011 28.8748 32.407 28.8331ZM28.1289 25.2764L29.0935 22.8329L30.0581 25.2764H28.1289Z" />
                      <path d="M40.4072 28.8946C40.4953 28.8946 40.5846 28.8813 40.6719 28.8536C41.0376 28.7382 41.286 28.3989 41.286 28.0156V20.4395C41.286 19.9539 40.8925 19.5605 40.4071 19.5605C39.9217 19.5605 39.5282 19.9539 39.5282 20.4395V25.2342L35.8174 19.9487C35.5972 19.6347 35.1987 19.5001 34.8333 19.6156C34.4677 19.7311 34.2192 20.0703 34.2192 20.4536V28.0156C34.2192 28.5011 34.6128 28.8945 35.0981 28.8945C35.5835 28.8945 35.9771 28.5011 35.9771 28.0156V23.2351L39.6878 28.5206C39.8555 28.7595 40.1262 28.8946 40.4072 28.8946Z" />
                      <path d="M49.4683 24.2275C49.4683 21.4361 47.8856 19.5605 45.53 19.5605H43.3843C43.1508 19.5605 42.927 19.6534 42.7621 19.8186C42.5972 19.9838 42.5049 20.2078 42.5054 20.4412L42.5207 28.0174C42.5212 28.2507 42.6145 28.4743 42.7799 28.6388C42.9447 28.8025 43.1675 28.8945 43.3996 28.8945H43.4029C43.4677 28.8943 44.9974 28.8884 45.6081 28.8777C47.8449 28.8387 49.4683 26.883 49.4683 24.2275ZM45.5773 27.1202C45.2798 27.1255 44.7432 27.1296 44.2767 27.1324L44.2648 21.3185H45.5299C47.1376 21.3185 47.7104 22.8213 47.7104 24.2277C47.7105 26.2 46.6392 27.1016 45.5773 27.1202Z" />
                      <path d="M15.7769 23.6587C16.0645 23.238 16.233 22.7298 16.233 22.1827C16.233 20.7369 15.0567 19.5605 13.6108 19.5605H11.4102C10.9248 19.5605 10.5312 19.9539 10.5312 20.4395V28.0156C10.5312 28.2494 10.6244 28.4735 10.79 28.6385C10.9548 28.8024 11.1778 28.8945 11.41 28.8945H11.4139C11.414 28.8945 13.4374 28.8856 13.9951 28.8856C15.6042 28.8856 16.9133 27.5765 16.9133 25.9674C16.9134 25.0287 16.4675 24.1929 15.7769 23.6587ZM13.6109 21.3184C14.0875 21.3184 14.4753 21.7061 14.4753 22.1827C14.4753 22.6593 14.0875 23.0472 13.6109 23.0472C13.4492 23.0472 12.2892 23.0493 12.2892 23.0493V21.3185H13.6109V21.3184ZM13.9952 27.1278C13.6823 27.1278 12.9093 27.1305 12.2891 27.1331V24.809C12.4592 24.8083 13.9952 24.807 13.9952 24.807C14.635 24.807 15.1556 25.3275 15.1556 25.9673C15.1556 26.6071 14.635 27.1278 13.9952 27.1278Z" />
                      <path d="M23.1239 28.8946C23.3301 28.8946 23.5372 28.8225 23.7042 28.6755C24.0685 28.3549 24.104 27.7994 23.7833 27.4351L21.7858 25.1655C23.0593 24.8476 24.0024 23.7321 24.0024 22.4084C24.0024 20.8381 22.6748 19.5605 21.0431 19.5605H19.0298C18.5446 19.5605 18.1511 19.9537 18.1509 20.4389L18.1484 28.0156C18.1484 28.5011 18.542 28.8945 19.0273 28.8945C19.5127 28.8945 19.9062 28.5011 19.9062 28.0156V25.6905L22.4637 28.5963C22.6374 28.7939 22.88 28.8946 23.1239 28.8946ZM19.9081 21.3185H21.0431C21.6944 21.3185 22.2446 21.8177 22.2446 22.4086C22.2446 22.9995 21.6944 23.4988 21.0431 23.4988C20.7808 23.4988 20.3214 23.5007 19.9068 23.5026L19.9081 21.3185Z" />
                      <path d="M56.2118 13.2181C56.2118 12.3418 55.4989 11.6289 54.6226 11.6289H51.3079C50.4316 11.6289 49.7188 12.3418 49.7188 13.2181V14.0141C49.3176 14.0956 49.0156 14.4502 49.0156 14.8754C49.0156 15.3005 49.3176 15.6551 49.7188 15.7366V16.5326C49.7188 17.4089 50.4316 18.1218 51.3079 18.1218H52.104C52.1854 18.523 52.54 18.8249 52.9652 18.8249C53.3904 18.8249 53.745 18.523 53.8264 18.1218H54.6225C55.4988 18.1218 56.2116 17.4089 56.2116 16.5326V13.2181H56.2118ZM54.4539 16.3641H51.4766V14.8766C51.4766 14.8763 51.4766 14.8759 51.4766 14.8755C51.4766 14.875 51.4766 14.8748 51.4766 14.8743V13.3868H54.4539V16.3641Z" />
                      <path d="M8.69191 11.6289H5.37727C4.50094 11.6289 3.78809 12.3418 3.78809 13.2181V16.5327C3.78809 17.4091 4.50094 18.1219 5.37727 18.1219H6.17332C6.25477 18.5232 6.60938 18.825 7.03453 18.825C7.45969 18.825 7.8143 18.5232 7.89574 18.1219H8.6918C9.56812 18.1219 10.281 17.4091 10.281 16.5327V15.7367C10.6821 15.6552 10.9841 15.3006 10.9841 14.8755C10.9841 14.4503 10.6821 14.0956 10.281 14.0143V13.2182C10.2811 12.3418 9.56812 11.6289 8.69191 11.6289ZM8.52328 16.364H5.5459V13.3867H8.52328V16.364Z" />
                      <path d="M51.3078 36.8259H54.6225C55.4988 36.8259 56.2116 36.1129 56.2116 35.2367V31.9222C56.2116 31.0459 55.4988 30.333 54.6225 30.333H53.8264C53.745 29.9318 53.3904 29.6299 52.9652 29.6299C52.54 29.6299 52.1854 29.9318 52.104 30.333H51.3079C50.4316 30.333 49.7188 31.046 49.7188 31.9222V32.7181C49.3176 32.7996 49.0156 33.1542 49.0156 33.5793C49.0156 34.0045 49.3176 34.3591 49.7188 34.4405V35.2366C49.7186 36.1129 50.4315 36.8259 51.3078 36.8259ZM54.4537 32.0907V35.0681H51.4763V33.5805C51.4763 33.5802 51.4763 33.5798 51.4763 33.5793C51.4763 33.5789 51.4763 33.5786 51.4763 33.5782V32.0907H54.4537Z" />
                      <path d="M3.78809 35.2366C3.78809 36.1129 4.50094 36.8258 5.37727 36.8258H8.69191C9.56824 36.8258 10.2811 36.1128 10.2811 35.2366V34.4405C10.6822 34.3591 10.9842 34.0045 10.9842 33.5793C10.9842 33.1542 10.6822 32.7995 10.2811 32.7181V31.9222C10.2811 31.0459 9.56824 30.333 8.69191 30.333H7.89586C7.81441 29.9318 7.4598 29.6299 7.03465 29.6299C6.60949 29.6299 6.25488 29.9318 6.17344 30.333H5.37738C4.50105 30.333 3.7882 31.046 3.7882 31.9222V35.2366H3.78809ZM5.5459 32.0907H8.52328V35.0681H5.5459V32.0907Z" />
                      <path d="M59.5472 52.3214L55.0869 49.848H57.4638C58.8622 49.848 59.9998 48.7099 59.9998 47.3109V22.4902C59.9998 22.0047 59.6062 21.6113 59.1209 21.6113C58.6355 21.6113 58.242 22.0047 58.242 22.4902V47.3108C58.242 47.7405 57.8929 48.0901 57.4638 48.0901H53.4159C53.3293 47.8297 53.1844 47.5845 52.9775 47.3777L51.8058 46.2059C51.4745 45.8747 51.038 45.6882 50.5717 45.6738L50.6118 42.2027C50.6239 41.1438 49.9672 40.1795 48.9776 39.803L38.2141 35.7079C37.4248 35.4075 36.5289 35.5994 35.9317 36.1966C35.3345 36.7939 35.1427 37.6897 35.443 38.4791L39.0997 48.0901H2.53594C2.1068 48.0901 1.75781 47.7405 1.75781 47.3108V41.2229C1.75781 40.7374 1.3643 40.344 0.878906 40.344C0.393516 40.344 0 40.7374 0 41.2229V47.3108C0 48.7098 1.13754 49.8479 2.53594 49.8479H39.872C40.3434 50.4823 41.0961 50.8769 41.9087 50.8768C41.9183 50.8768 41.9282 50.8767 41.9378 50.8766L45.4091 50.8365C45.4234 51.3027 45.6098 51.7392 45.9411 52.0706L47.1131 53.2425C47.4691 53.5984 47.9366 53.7764 48.4042 53.7764C48.5017 53.7764 48.5991 53.7668 48.6956 53.7512L52.0566 59.8119C52.2171 60.1013 52.5169 60.2646 52.826 60.2646C52.9702 60.2646 53.1165 60.2291 53.2514 60.1542C53.676 59.9188 53.8293 59.3839 53.5938 58.9593L50.1637 52.774L52.5094 50.4282L58.6948 53.8583C58.8298 53.9333 58.976 53.9687 59.1202 53.9687C59.4293 53.9687 59.7291 53.8053 59.8896 53.516C60.1249 53.0916 59.9716 52.5568 59.5472 52.3214ZM41.9175 49.1191C41.9146 49.1191 41.9115 49.1191 41.9086 49.1191C41.5871 49.1191 41.2956 48.9184 41.1811 48.6174L37.5403 39.0482L41.4397 42.9477C40.9233 43.9855 41.0948 45.2813 41.9585 46.1451C42.4991 46.6856 43.2091 46.9559 43.9193 46.9559C44.6295 46.9559 45.3395 46.6856 45.8801 46.1451C46.4038 45.6213 46.6923 44.9251 46.6923 44.1843C46.6923 43.4437 46.4039 42.7473 45.8801 42.2236C45.0163 41.36 43.7205 41.1883 42.6827 41.7048L38.7833 37.8054L48.3526 41.4461C48.6562 41.5617 48.8578 41.8577 48.8541 42.1825L48.8027 46.6268L46.3615 49.068L41.9175 49.1191ZM43.9193 43.1695C44.1792 43.1695 44.4393 43.2685 44.6371 43.4662C44.8289 43.658 44.9345 43.9129 44.9345 44.1841C44.9345 44.4553 44.8289 44.7102 44.6372 44.9019C44.2414 45.2979 43.5974 45.2977 43.2015 44.9019C42.8058 44.5061 42.8058 43.8621 43.2015 43.4663C43.3995 43.2684 43.6594 43.1695 43.9193 43.1695ZM47.1641 50.7795C47.1641 50.7514 47.179 50.7364 47.1839 50.7315L50.4663 47.4489C50.4712 47.4439 50.4863 47.4289 50.5145 47.4289C50.5427 47.4289 50.5577 47.4439 50.5627 47.4489L51.7345 48.6208C51.7611 48.6474 51.7611 48.6905 51.7345 48.717L48.4521 51.9996C48.4254 52.0262 48.3823 52.0262 48.3557 51.9996L47.1839 50.8278C47.1792 50.8229 47.1641 50.8078 47.1641 50.7795Z" />
                      <path d="M5.14062 5.81055C5.62603 5.81055 6.01953 5.41705 6.01953 4.93164C6.01953 4.44623 5.62603 4.05273 5.14062 4.05273C4.65522 4.05273 4.26172 4.44623 4.26172 4.93164C4.26172 5.41705 4.65522 5.81055 5.14062 5.81055Z" />
                      <path d="M9.16553 5.81055C9.65093 5.81055 10.0444 5.41705 10.0444 4.93164C10.0444 4.44623 9.65093 4.05273 9.16553 4.05273C8.68012 4.05273 8.28662 4.44623 8.28662 4.93164C8.28662 5.41705 8.68012 5.81055 9.16553 5.81055Z" />
                      <path d="M13.1904 5.81055C13.6758 5.81055 14.0693 5.41705 14.0693 4.93164C14.0693 4.44623 13.6758 4.05273 13.1904 4.05273C12.705 4.05273 12.3115 4.44623 12.3115 4.93164C12.3115 5.41705 12.705 5.81055 13.1904 5.81055Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_343_5215">
                        <rect
                          width="60"
                          height="60"
                          transform="translate(0 0.264648)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h2 className="text-[#090D48] text-[22px] font-bold mb-5 group-hover:text-white">
                  Brand Identity
                </h2>
                <p className="text-[#303030] text-[15px] leading-[25px] group-hover:text-white">
                  There are many variations of passages Lorem Ipsum available,
                  but majority have suffered alteration in some form, injected
                  humour.
                </p>
              </div>

              <div className=" py-[62px] px-[35px] group hover:brandHover">
                <div className="mb-5">
                  <svg
                    width="60"
                    height="61"
                    viewBox="0 0 60 61"
                    className="fill-[#FC6E36] group-hover:fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M45.9375 45.2646C47.4881 45.2646 48.75 44.0028 48.75 42.4521C48.75 40.9015 47.4881 39.6396 45.9375 39.6396C44.3869 39.6396 43.125 40.9015 43.125 42.4521C43.125 44.0028 44.3869 45.2646 45.9375 45.2646ZM45.9375 41.5146C46.4541 41.5146 46.875 41.9346 46.875 42.4521C46.875 42.9696 46.4541 43.3896 45.9375 43.3896C45.4209 43.3896 45 42.9696 45 42.4521C45 41.9346 45.4209 41.5146 45.9375 41.5146Z" />
                    <path d="M55.4625 38.494C55.1784 37.8134 55.3294 37.04 55.8459 36.5225L57.21 35.1575L53.2312 31.1787L51.8653 32.5437C51.3488 33.0612 50.5744 33.2112 49.8581 32.9112C49.185 32.6337 48.75 31.9831 48.75 31.2537V29.3271H46.8272C46.7419 27.815 46.4616 26.3534 45.9966 24.9687L56.8453 14.12C58.275 12.6903 59.0625 10.79 59.0625 8.76871C59.0625 4.59684 55.6678 1.20215 51.4959 1.20215C49.4747 1.20215 47.5744 1.98965 46.1456 3.4184L35.3081 14.2568C33.9066 13.7862 32.4206 13.5125 30.8859 13.4309C29.5922 11.1706 27.1612 9.63965 24.375 9.63965C23.6616 9.63965 22.9734 9.74652 22.3181 9.93309C20.7 6.8909 17.5566 4.95215 14.0625 4.95215C8.89313 4.95215 4.6875 9.15777 4.6875 14.3271C4.6875 15.0453 4.77562 15.7521 4.93594 16.444C2.625 17.1434 0.9375 19.2912 0.9375 21.8271C0.9375 24.9293 3.46031 27.4521 6.5625 27.4521H13.3631C13.2075 28.3793 13.125 29.3206 13.125 30.2646C13.125 32.3281 13.5066 34.0071 14.1225 35.4415L5.75906 43.8059L1.10531 55.9053C0.99375 56.194 0.9375 56.4978 0.9375 56.8081C0.9375 58.1975 2.06813 59.3271 3.45656 59.3271C3.76688 59.3271 4.07063 59.27 4.36031 59.1593L16.4597 54.5056L22.575 48.3893C22.5291 48.5909 22.5 48.799 22.5 49.0146C22.5 49.7375 22.7822 50.3909 23.2313 50.8896C22.7812 51.3884 22.5 52.0418 22.5 52.7646C22.5 54.0678 23.3953 55.1571 24.6 55.474C25.3988 57.7615 27.5381 59.3271 30 59.3271C32.4619 59.3271 34.6012 57.7615 35.4 55.474C36.6047 55.1571 37.5 54.0678 37.5 52.7646C37.5 52.6943 37.4841 52.6287 37.4794 52.5603L38.6438 53.7246L40.0097 52.3596C40.5262 51.8421 41.2978 51.6912 42.0159 51.9903C42.6891 52.2706 43.125 52.9212 43.125 53.6506V55.5771H48.75V53.6506C48.75 52.9212 49.1859 52.2696 49.8956 51.9762C50.5763 51.6931 51.3497 51.8421 51.8663 52.3596L53.2312 53.7246L57.21 49.7459L55.8459 48.3809C55.3294 47.8634 55.1784 47.09 55.4775 46.3737C55.7559 45.7006 56.4066 45.2646 57.1359 45.2646H59.0625V39.6396H57.1359C56.4066 39.6396 55.7559 39.2037 55.4625 38.494ZM41.415 41.2578C42.4378 40.2593 43.4625 39.2393 44.3466 38.06C44.8566 37.8743 45.3872 37.7646 45.9375 37.7646C48.5222 37.7646 50.625 39.8675 50.625 42.4521C50.625 45.0368 48.5222 47.1396 45.9375 47.1396C43.3528 47.1396 41.25 45.0368 41.25 42.4521C41.25 42.0462 41.3128 41.6468 41.415 41.2578ZM42.5409 19.0503L46.875 14.7153L50.2369 18.0771L45.2297 23.0843C44.5275 21.6106 43.62 20.255 42.5409 19.0503ZM43.5131 8.70215L45 7.21527L53.0494 15.2646L51.5625 16.7515L43.5131 8.70215ZM51.4959 3.07715C54.6338 3.07715 57.1875 5.6309 57.1875 8.76871C57.1875 10.2884 56.5959 11.7181 55.5206 12.7934L54.375 13.939L46.3256 5.88965L47.4713 4.74402C48.5466 3.66965 49.9753 3.07715 51.4959 3.07715ZM42.1875 10.0278L45.5494 13.3896L41.2172 17.7218C40.0134 16.6418 38.6588 15.7334 37.185 15.0303L42.1875 10.0278ZM45 30.2646C45 35.1425 42.5438 37.5387 39.9431 40.0746C38.1525 41.8212 36.3131 43.6268 35.2425 46.2584C35.0634 46.2218 34.8778 46.2021 34.6875 46.2021H30.9375V41.5146C30.9375 39.964 29.6756 38.7021 28.125 38.7021H26.25C25.7334 38.7021 25.3125 38.2822 25.3125 37.7646C25.3125 37.2471 25.7334 36.8271 26.25 36.8271H35.625C37.1756 36.8271 38.4375 35.5653 38.4375 34.0146C38.4375 32.464 37.1756 31.2021 35.625 31.2021H28.125C27.6084 31.2021 27.1875 30.7821 27.1875 30.2646V27.4521H31.875C34.4597 27.4521 36.5625 25.3493 36.5625 22.7646C36.5625 20.18 34.4597 18.0771 31.875 18.0771C31.8487 18.0771 31.8244 18.0846 31.7981 18.0846C31.8384 17.7715 31.875 17.4584 31.875 17.1396C31.875 16.5265 31.7925 15.9331 31.6537 15.3621C39.1275 16.1946 45 22.609 45 30.2646ZM24.375 49.0146C24.375 48.4971 24.7959 48.0771 25.3125 48.0771H34.6875C35.2041 48.0771 35.625 48.4971 35.625 49.0146C35.625 49.5322 35.2041 49.9521 34.6875 49.9521H25.3125C24.7959 49.9521 24.375 49.5322 24.375 49.0146ZM12.5756 49.0146L19.4672 42.1231C20.6203 43.2668 21.6909 44.4237 22.4803 45.8328L15.9375 52.3765L12.5756 49.0146ZM2.8125 21.8271C2.8125 19.759 4.49437 18.0771 6.5625 18.0771C8.63063 18.0771 10.3125 19.759 10.3125 21.8271H12.1875C12.1875 18.8065 9.79219 16.3409 6.8025 16.2143C6.64313 15.6012 6.5625 14.9684 6.5625 14.3271C6.5625 10.1918 9.92719 6.82715 14.0625 6.82715C16.8047 6.82715 19.2797 8.31777 20.5959 10.6718C18.5972 11.8446 17.1853 13.91 16.9219 16.3203C15.285 16.7234 14.0625 18.1925 14.0625 19.9521H15.9375C15.9375 18.9181 16.7784 18.0771 17.8125 18.0771C18.8466 18.0771 19.6875 18.9181 19.6875 19.9521H21.5625C21.5625 18.2318 20.3925 16.7946 18.8109 16.354C19.1953 13.624 21.54 11.5146 24.375 11.5146C27.4772 11.5146 30 14.0375 30 17.1396C30 17.6328 29.9194 18.1156 29.7938 18.5862C28.2563 19.3559 27.1875 20.9309 27.1875 22.7646H29.0625C29.0625 21.214 30.3244 19.9521 31.875 19.9521C33.4256 19.9521 34.6875 21.214 34.6875 22.7646C34.6875 24.3153 33.4256 25.5771 31.875 25.5771H6.5625C4.49437 25.5771 2.8125 23.8953 2.8125 21.8271ZM25.3125 27.4521V30.2646C25.3125 31.8153 26.5744 33.0771 28.125 33.0771H35.625C36.1416 33.0771 36.5625 33.4971 36.5625 34.0146C36.5625 34.5322 36.1416 34.9521 35.625 34.9521H26.25C24.6994 34.9521 23.4375 36.214 23.4375 37.7646C23.4375 39.3153 24.6994 40.5771 26.25 40.5771H28.125C28.6416 40.5771 29.0625 40.9971 29.0625 41.5146V46.2021H25.3125C25.1222 46.2021 24.9366 46.2218 24.7575 46.2584C23.6869 43.6268 21.8475 41.8212 20.0569 40.0746C17.4562 37.5387 15 35.1425 15 30.2646C15 29.3168 15.1134 28.3775 15.2888 27.4521H25.3125ZM18.1284 40.8106L11.25 47.689L7.88812 44.3271L15.0413 37.174C15.9216 38.5559 17.0128 39.709 18.1284 40.8106ZM6.91969 46.01L14.2547 53.345L8.04469 55.7337L4.53094 52.22L6.91969 46.01ZM3.68813 57.409C3.28219 57.5665 2.8125 57.2431 2.8125 56.8081C2.8125 56.7284 2.8275 56.6506 2.85469 56.5775L3.79406 54.1343L6.12937 56.4696L3.68813 57.409ZM30 57.4521C28.6153 57.4521 27.3806 56.7153 26.6962 55.5771H33.3037C32.6194 56.7153 31.3847 57.4521 30 57.4521ZM34.6875 53.7021H25.3125C24.7959 53.7021 24.375 53.2822 24.375 52.7646C24.375 52.2471 24.7959 51.8271 25.3125 51.8271H34.6875C35.2041 51.8271 35.625 52.2471 35.625 52.7646C35.625 53.2822 35.2041 53.7021 34.6875 53.7021ZM57.1875 43.3896H57.1359C55.6444 43.3896 54.3131 44.2803 53.7319 45.6884C53.1544 47.0731 53.4637 48.65 54.5194 49.7065L54.5588 49.7459L53.2312 51.0734L53.1919 51.034C52.1344 49.9765 50.5556 49.6662 49.1428 50.2587C47.7656 50.8287 46.875 52.159 46.875 53.6506V53.7021H45V53.6506C45 52.159 44.1094 50.8278 42.7013 50.2456C41.3147 49.6671 39.7378 49.9775 38.6822 51.034L38.6428 51.0734L37.3725 49.8031C37.4475 49.5509 37.5 49.2903 37.5 49.0146C37.5 48.349 37.2581 47.7453 36.87 47.2625C37.4531 45.6884 38.3672 44.4293 39.4313 43.2668C39.8344 46.5012 42.5953 49.0146 45.9375 49.0146C49.5563 49.0146 52.5 46.07 52.5 42.4521C52.5 38.8343 49.5563 35.8896 45.9375 35.8896C45.8456 35.8896 45.7566 35.899 45.6656 35.9028C46.3003 34.5856 46.7363 33.0584 46.8459 31.2021H46.875V31.2537C46.875 32.7453 47.7656 34.0775 49.1728 34.6578C50.5566 35.2371 52.1353 34.9278 53.1919 33.8703L53.2312 33.8309L54.5588 35.1584L54.5194 35.1978C53.4637 36.2543 53.1544 37.8321 53.7441 39.2459C54.3131 40.624 55.6444 41.5146 57.1359 41.5146H57.1875V43.3896Z" />
                  </svg>
                </div>
                <h2 className="text-[#090D48] text-[22px] font-bold mb-5 group-hover:text-white">
                  Product Design
                </h2>
                <p className="text-[#303030] text-[15px] leading-[25px] group-hover:text-white">
                  There are many variations of passages Lorem Ipsum available,
                  but majority have suffered alteration in some form, injected
                  humour.
                </p>
              </div>

              <div className=" py-[62px] px-[35px] group hover:brandHover">
                <div className="mb-5">
                  <svg
                    width="60"
                    height="61"
                    viewBox="0 0 60 61"
                    className="fill-[#FC6E36] group-hover:fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_343_5206)">
                      <path d="M58.9791 47.3553L58.1231 40.5078L57.1875 1.18059L57.1641 1.18152C57.1594 0.982773 57.1144 0.785898 56.9887 0.626523C56.8116 0.397773 56.5387 0.264648 56.25 0.264648H18.75C18.3197 0.264648 17.9447 0.558086 17.8406 0.975273L15.9656 8.47527C15.8953 8.75559 15.9591 9.05184 16.1362 9.27871C16.2994 9.48777 16.545 9.60402 16.8075 9.62371L15.6075 26.5146H4.2375C3.38625 26.5146 2.63625 27.0837 2.41594 27.8956L0.0740625 36.3256C-0.08625 36.8881 0.024375 37.4787 0.37875 37.9484C0.739688 38.4275 1.29188 38.7021 1.89375 38.7021H1.95656L2.72625 47.1396H1.875C0.840937 47.1396 0 47.9806 0 49.0146V58.3896C0 59.4237 0.840937 60.2646 1.875 60.2646H58.125C59.1591 60.2646 60 59.4237 60 58.3896V49.0146C60 48.29 59.5828 47.6675 58.9791 47.3553ZM55.4784 8.15559L56.25 40.5987C56.25 40.6306 56.2528 40.6615 56.2566 40.6934L57.0628 47.1396H51.6862L52.4981 40.6325L54.3216 9.63965H54.375C54.8053 9.63965 55.1803 9.34621 55.2844 8.92902L55.4784 8.15559ZM53.6428 7.76465H40.3125V2.13965H55.0491L53.6428 7.76465ZM32.8125 2.13965H38.4375V9.99777L37.9191 9.73902C37.6556 9.60684 37.3444 9.60684 37.08 9.73902L35.625 10.4665L34.1691 9.73902C33.9056 9.60684 33.5944 9.60684 33.33 9.73902L32.8125 9.99777V2.13965ZM18.6862 9.63965H29.0625C29.58 9.63965 30 9.22059 30 8.70215C30 8.18371 29.58 7.76465 29.0625 7.76465H18.0759L19.4822 2.13965H30.9375V11.5146C30.9375 11.84 31.1062 12.1409 31.3819 12.3125C31.6584 12.484 32.0044 12.4981 32.2941 12.3537L33.75 11.6253L35.2059 12.3528C35.4694 12.485 35.7806 12.485 36.045 12.3528L37.5 11.6253L38.9559 12.3528C39.0881 12.4193 39.2316 12.4521 39.375 12.4521C39.5466 12.4521 39.7172 12.4053 39.8681 12.3125C40.1437 12.1409 40.3125 11.84 40.3125 11.5146V9.63965H52.4437L50.6325 40.4609L49.7972 47.1396H29.1497L29.9194 38.7021H29.9822C30.5841 38.7021 31.1362 38.4275 31.4981 37.9484C31.8516 37.4787 31.9631 36.8871 31.8047 36.3321L29.4619 27.8993C29.2388 27.0837 28.4888 26.5146 27.6375 26.5146H17.4881L18.6862 9.63965ZM4.2375 28.3896L27.6534 28.3971L29.9812 36.8271H19.6875H12.1875H2.8125L1.87781 36.8346L4.2375 28.3896ZM13.125 38.7021H18.75V40.5771H13.125V38.7021ZM11.25 38.7021V40.5771C11.25 41.6112 12.0909 42.4521 13.125 42.4521H18.75C19.7841 42.4521 20.625 41.6112 20.625 40.5771V38.7021H28.0266L27.1875 47.1396L4.60875 47.1387L3.84 38.7021H11.25ZM58.125 58.3896H1.875V49.0146H4.60312H27.2719H34.6875V52.7646H25.3125V50.8896C25.3125 50.3712 24.8925 49.9521 24.375 49.9521C23.8575 49.9521 23.4375 50.3712 23.4375 50.8896V52.7646C23.4375 53.7987 24.2784 54.6396 25.3125 54.6396H34.6875C35.7216 54.6396 36.5625 53.7987 36.5625 52.7646V49.0146H58.125V58.3896Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_343_5206">
                        <rect
                          width="60"
                          height="60"
                          fill="white"
                          transform="translate(0 0.264648)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h2 className="text-[#090D48] text-[22px] font-bold mb-5 group-hover:text-white">
                  Packaging
                </h2>
                <p className="text-[#303030] text-[15px] leading-[25px] group-hover:text-white">
                  There are many variations of passages Lorem Ipsum available,
                  but majority have suffered alteration in some form, injected
                  humour.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/">
              <button className="buttonBg font-bold text-[24px] text-white py-[15px] px-[45px] rounded-[7px] mt-8">
                CONTACT US
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
