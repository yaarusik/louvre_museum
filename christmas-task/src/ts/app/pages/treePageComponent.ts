import { BuilderComponent, ComponentConfig } from '../../builder/component';

class TreePageComponent extends BuilderComponent {
  constructor(config: ComponentConfig) {
    super(config);
  }
}

const treePageComponent = new TreePageComponent({
  selector: 'main__page',
  template: `
  <main class="tree__favorite">
    <div class="tree__blur">
      <div class="container">
        <div class="tree__body">
          <div class="favorite__menu">
            <div class="menu__buttons">
              <div class="bcg__size sound__btn"></div>
              <div class="bcg__size snow__btn"></div>
            </div>
            <div class="menu__tree">
              <h2 class="tree__title">Выберите ёлку</h2>
              <div class="tree__container">
                <div class="tree" data-tree="1"></div>
                <div class="tree" data-tree="2"></div>
                <div class="tree" data-tree="3"></div>
                <div class="tree" data-tree="4"></div>
                <div class="tree" data-tree="5"></div>
                <div class="tree" data-tree="6"></div>
              </div>
            </div>
            <div class="menu__bcg">
              <h2 class="tree__title">Выберите фон</h2>
              <div class="bcg__container">
                <div class="bcg__tree" data-bg="1"></div>
                <div class="bcg__tree" data-bg="2"></div>
                <div class="bcg__tree" data-bg="3"></div>
                <div class="bcg__tree" data-bg="4"></div>
                <div class="bcg__tree" data-bg="5"></div>
                <div class="bcg__tree" data-bg="6"></div>
                <div class="bcg__tree" data-bg="7"></div>
                <div class="bcg__tree" data-bg="8"></div>
                <div class="bcg__tree" data-bg="9"></div>
                <div class="bcg__tree" data-bg="10"></div>
              </div>
            </div>
            <div class="menu__festoon">
              <h2 class="tree__title">Гирлянда</h2>
              <div class="festoon__container">
                <div class="festoon__btns">
                  <div class="btn__color"></div>
                  <div class="btn__color"></div>
                  <div class="btn__color"></div>
                  <div class="btn__color"></div>
                  <div class="btn__color"></div>
                </div>
                <div class="festoon__switch"></div>
              </div>
            </div>
          </div>
          <div class="favorite__tree"></div>
          <div class="favorite__interactive">
            <div class="interactive__toys">
              <div class="tree__title">Игрушки</div>
              <div class="toys__container">
                <div class="toys__ticket" data-num="1"></div>
                <div class="toys__ticket" data-num="2"></div>
                <div class="toys__ticket" data-num="3"></div>
                <div class="toys__ticket" data-num="4"></div>
                <div class="toys__ticket" data-num="5"></div>
                <div class="toys__ticket" data-num="6"></div>
                <div class="toys__ticket" data-num="7"></div>
                <div class="toys__ticket" data-num="8"></div>
                <div class="toys__ticket" data-num="9"></div>
                <div class="toys__ticket" data-num="10"></div>
                <div class="toys__ticket" data-num="11"></div>
                <div class="toys__ticket" data-num="12"></div>
                <div class="toys__ticket" data-num="13"></div>
                <div class="toys__ticket" data-num="14"></div>
                <div class="toys__ticket" data-num="15"></div>
                <div class="toys__ticket" data-num="16"></div>
                <div class="toys__ticket" data-num="17"></div>
                <div class="toys__ticket" data-num="18"></div>
                <div class="toys__ticket" data-num="19"></div>
                <div class="toys__ticket" data-num="20"></div>
              </div>
            </div>
            <div class="interactive__decorate">
              <h2 class="tree__title">Вы нарядили</h2>
              <div class="decorate__container">
                <div class="tree__decorate"></div>
                <div class="tree__decorate"></div>
                <div class="tree__decorate"></div>
                <div class="tree__decorate"></div>
                <div class="tree__decorate"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer class="footer">
    <div class="container">
      <div class="footer__row">
        <div class="footer__rsschool">
          <a href="https://rs.school/js/" target="_blank" class="">
            <svg
              class="logo"
              width="61"
              height="23"
              viewBox="0 0 61 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1101_556)">
                <path
                  d="M31.4931 7.61797L34.3953 7.42752C34.4615 7.90925 34.5829 8.26775 34.7815 8.52542C35.1015 8.92873 35.5429 9.13039 36.1277 9.13039C36.5581 9.13039 36.9001 9.02956 37.1319 8.8167C37.3526 8.64866 37.485 8.37978 37.485 8.09971C37.485 7.83083 37.3636 7.57316 37.1539 7.40511C36.9333 7.20346 36.4146 7.0018 35.598 6.82255C34.2628 6.52007 33.3028 6.11675 32.7401 5.60141C32.1773 5.11968 31.8573 4.41388 31.8793 3.66327C31.8793 3.14793 32.0338 2.63258 32.3207 2.20687C32.6518 1.72513 33.1042 1.34423 33.6449 1.13137C34.2297 0.873695 35.0463 0.739258 36.0725 0.739258C37.3305 0.739258 38.2905 0.974523 38.9526 1.45626C39.6147 1.92679 40.0119 2.6886 40.1333 3.73049L37.2643 3.89854C37.187 3.45041 37.0326 3.12552 36.7788 2.91266C36.525 2.6998 36.1939 2.59898 35.7636 2.59898C35.4105 2.59898 35.1456 2.6774 34.9691 2.82304C34.8035 2.95747 34.6932 3.15913 34.7042 3.38319C34.7042 3.55124 34.7925 3.70808 34.9249 3.80891C35.0684 3.94335 35.4105 4.06658 35.9512 4.17861C37.2864 4.4699 38.2353 4.76118 38.8202 5.06366C39.405 5.36614 39.8244 5.73585 40.0782 6.17277C40.343 6.62089 40.4754 7.13624 40.4644 7.66278C40.4644 8.29016 40.2878 8.91753 39.9347 9.44408C39.5706 9.99303 39.063 10.4187 38.4671 10.6764C37.8381 10.9565 37.0436 11.1021 36.0946 11.1021C34.4173 11.1021 33.2587 10.7772 32.6076 10.1163C31.9566 9.45528 31.5704 8.62625 31.4931 7.61797ZM0.695188 10.9341V0.918508H5.7822C6.72015 0.918508 7.44844 0.996929 7.94501 1.16498C8.43054 1.32182 8.86089 1.64671 9.14779 2.08363C9.4678 2.56537 9.62229 3.12552 9.61125 3.70808C9.64436 4.69396 9.14779 5.63502 8.29812 6.12796C7.96708 6.31841 7.60293 6.45285 7.22775 6.52007C7.50362 6.59849 7.77949 6.73292 8.02225 6.88977C8.20984 7.04661 8.36433 7.22586 8.50778 7.41631C8.6733 7.60677 8.81675 7.81963 8.93813 8.04369L10.4168 10.9453H6.95188L5.31874 7.86444C5.10908 7.47233 4.93253 7.21466 4.767 7.09142C4.54631 6.93458 4.28148 6.85616 4.01664 6.85616H3.75181V10.9229H0.695188V10.9341ZM3.75181 4.97404H5.04287C5.31874 4.95163 5.58357 4.90682 5.84841 4.8396C6.04703 4.80599 6.22359 4.69396 6.34497 4.52591C6.64291 4.1226 6.59877 3.55124 6.23462 3.20394C6.036 3.0359 5.64978 2.94627 5.09805 2.94627H3.75181V4.97404ZM0 19.5157L2.90213 19.3252C2.96834 19.807 3.08973 20.1655 3.28835 20.4231C3.59732 20.8264 4.04975 21.0393 4.63459 21.0393C5.06494 21.0393 5.40702 20.9385 5.63875 20.7256C5.85944 20.5464 5.99186 20.2887 5.99186 20.0086C5.99186 19.7397 5.87048 19.4821 5.66082 19.314C5.44012 19.1124 4.92149 18.9107 4.09389 18.7315C2.75868 18.429 1.79866 18.0257 1.23589 17.5103C0.673119 17.0286 0.353111 16.3228 0.375181 15.5722C0.375181 15.0568 0.529667 14.5415 0.81657 14.1158C1.14761 13.634 1.60004 13.2531 2.14074 13.0403C2.72558 12.7826 3.54215 12.6482 4.56838 12.6482C5.82634 12.6482 6.78636 12.8834 7.44844 13.3652C8.11053 13.8469 8.49674 14.5975 8.61813 15.6394L5.7491 15.8074C5.67185 15.3593 5.51737 15.0344 5.26357 14.8216C5.0208 14.6087 4.67873 14.5079 4.24837 14.5191C3.89526 14.5191 3.63043 14.5975 3.45387 14.7544C3.27732 14.8888 3.178 15.0904 3.18904 15.3145C3.18904 15.4826 3.27732 15.6394 3.40973 15.7402C3.55318 15.8747 3.89526 15.9979 4.43596 16.1099C5.77117 16.4012 6.72015 16.6925 7.30499 16.995C7.88983 17.2975 8.30915 17.6672 8.56295 18.1041C8.82779 18.5522 8.9602 19.0676 8.9602 19.5829C8.9602 20.2103 8.77261 20.8264 8.43054 21.353C8.06639 21.9019 7.55879 22.3277 6.96292 22.5853C6.33394 22.8654 5.53944 23.011 4.59045 23.011C2.91317 23.011 1.75452 22.6862 1.10347 22.0252C0.452424 21.353 0.0882779 20.524 0 19.5157H0Z"
                  fill="#fff"
                />
                <path
                  d="M14.6761 18.7317L17.3466 19.5496C17.2031 20.2329 16.9052 20.8827 16.4969 21.4541C16.1217 21.9582 15.6251 22.3503 15.0624 22.608C14.4886 22.8657 13.7603 23.0001 12.8775 23.0001C11.8071 23.0001 10.9243 22.8433 10.2512 22.5296C9.56707 22.2159 8.98223 21.6557 8.48567 20.8603C7.9891 20.0649 7.74634 19.0454 7.74634 17.8019C7.74634 16.1438 8.17669 14.8667 9.04844 13.9816C9.92018 13.0966 11.145 12.6484 12.734 12.6484C13.981 12.6484 14.952 12.9061 15.6693 13.4102C16.3755 13.9256 16.9052 14.7098 17.2583 15.7629L14.5658 16.3679C14.4996 16.1326 14.4003 15.8973 14.2679 15.6957C14.1023 15.4604 13.8927 15.2812 13.6389 15.1467C13.3851 15.0123 13.0982 14.9563 12.8113 14.9563C12.1161 14.9563 11.5864 15.2364 11.2223 15.8077C10.9464 16.2222 10.803 16.8832 10.803 17.7795C10.803 18.8886 10.9685 19.6504 11.2995 20.0649C11.6306 20.4794 12.094 20.6811 12.7009 20.6811C13.2858 20.6811 13.7272 20.513 14.0251 20.1881C14.323 19.8408 14.5437 19.3591 14.6761 18.7317ZM20.9108 12.8165H23.9564V16.3231H27.2888V12.8165H30.3565V22.8321H27.2888V18.7765H23.9564V22.8321H20.9108V12.8165Z"
                  fill="#fff"
                />
                <path
                  d="M29.9373 17.8247C29.9373 16.1891 30.3897 14.9119 31.2835 14.0045C32.1773 13.097 33.4353 12.6377 35.0353 12.6377C36.6795 12.6377 37.9374 13.0858 38.8313 13.9821C39.7251 14.8783 40.1665 16.1331 40.1665 17.7463C40.1665 18.9226 39.9678 19.8749 39.5816 20.6255C39.2064 21.3649 38.6216 21.9699 37.9043 22.3732C37.165 22.7877 36.2491 23.0006 35.1567 23.0006C34.0422 23.0006 33.1263 22.8213 32.398 22.4628C31.6476 22.0819 31.0297 21.4882 30.6214 20.76C30.169 19.9757 29.9373 19.0011 29.9373 17.8247ZM32.9828 17.8359C32.9828 18.8442 33.1704 19.5724 33.5346 20.0205C33.8987 20.4575 34.4063 20.6815 35.0463 20.6815C35.6974 20.6815 36.205 20.4687 36.5691 20.0318C36.9333 19.5948 37.1098 18.8218 37.1098 17.7015C37.1098 16.7604 36.9222 16.0658 36.5471 15.6401C36.1719 15.2032 35.6643 14.9903 35.0243 14.9903C34.4615 14.9679 33.9208 15.2144 33.5456 15.6513C33.1704 16.0883 32.9828 16.8165 32.9828 17.8359ZM43.2893 17.8247C43.2893 16.1891 43.7417 14.9119 44.6355 14.0045C45.5293 13.097 46.7873 12.6377 48.3873 12.6377C50.0315 12.6377 51.3005 13.0858 52.1833 13.9821C53.0661 14.8783 53.5185 16.1331 53.5185 17.7463C53.5185 18.9226 53.3199 19.8749 52.9336 20.6255C52.5585 21.3649 51.9736 21.9699 51.2564 22.3732C50.517 22.7877 49.6012 23.0006 48.5087 23.0006C47.3942 23.0006 46.4783 22.8213 45.75 22.4628C44.9997 22.0819 44.3817 21.4882 43.9734 20.76C43.521 19.9757 43.2893 19.0011 43.2893 17.8247ZM46.3349 17.8359C46.3349 18.8442 46.5225 19.5724 46.8866 20.0205C47.2508 20.4575 47.7584 20.6815 48.3984 20.6815C49.0494 20.6815 49.557 20.4687 49.9212 20.0318C50.2853 19.5948 50.4619 18.8218 50.4619 17.7015C50.4619 16.7604 50.2743 16.0658 49.8991 15.6401C49.5239 15.2032 49.0163 14.9903 48.3763 14.9903C47.8135 14.9679 47.2618 15.2144 46.8976 15.6513C46.5225 16.0883 46.3349 16.8165 46.3349 17.8359Z"
                  fill="#fff"
                />
                <path d="M53.1984 12.8164H56.244V20.3673H61V22.832H53.1874V12.8164H53.1984Z" fill="#fff" />
                <path
                  d="M49.8416 12.2383C52.9078 9.89236 53.8534 5.91563 51.9535 3.35602C50.0536 0.796402 46.0277 0.623179 42.9615 2.96911C39.8952 5.31504 38.9497 9.29177 40.8496 11.8514C42.7495 14.411 46.7753 14.5842 49.8416 12.2383Z"
                  fill="#fff"
                />
                <path
                  d="M49.8416 12.2393C52.9078 9.89334 53.8534 5.91661 51.9535 3.35699C50.0536 0.797376 46.0277 0.624153 42.9615 2.97009C39.8952 5.31602 38.9497 9.29275 40.8496 11.8524C42.7495 14.412 46.7753 14.5852 49.8416 12.2393Z"
                  fill="#fff"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M43.0943 3.1482C40.0915 5.44555 39.2224 9.28707 41.0258 11.7167C42.8292 14.1463 46.706 14.3568 49.7088 12.0595C52.7115 9.76215 53.5806 5.92063 51.7772 3.49101C49.9738 1.06139 46.0971 0.850852 43.0943 3.1482ZM40.6733 11.9864C38.677 9.29678 39.6989 5.18483 42.8287 2.79032C45.9584 0.395803 50.1334 0.531709 52.1297 3.22132C54.1261 5.91093 53.1042 10.0229 49.9744 12.4174C46.8446 14.8119 42.6697 14.676 40.6733 11.9864Z"
                  fill="#fff"
                />
                <path
                  d="M43.3003 6.86794L44.4038 6.08372L45.761 8.04427C45.9928 8.35796 46.1693 8.69405 46.3017 9.06375C46.379 9.34383 46.3569 9.64632 46.2466 9.91519C46.1031 10.2513 45.8714 10.5314 45.5624 10.733C45.1983 10.9907 44.8893 11.1363 44.6245 11.1811C44.3707 11.226 44.1058 11.1811 43.8631 11.0691C43.5982 10.9347 43.3665 10.7442 43.1899 10.4978L44.1389 9.6015C44.2162 9.72474 44.3155 9.83677 44.4258 9.92639C44.5031 9.98241 44.5914 10.016 44.6907 10.016C44.7679 10.016 44.8452 9.98241 44.9003 9.9376C45.0107 9.87038 45.0879 9.73594 45.0769 9.6015C45.0438 9.41105 44.9665 9.2206 44.8452 9.07496L43.3003 6.86794ZM46.6107 8.11149L47.6149 7.30486C47.7252 7.4393 47.8687 7.54013 48.0232 7.59615C48.2439 7.66336 48.4756 7.61855 48.6632 7.47291C48.7956 7.38329 48.9059 7.26005 48.9501 7.10321C49.0163 6.90155 48.9059 6.67749 48.7073 6.61027C48.6742 6.59907 48.6411 6.58786 48.608 6.58786C48.4756 6.57666 48.2439 6.63268 47.9018 6.77832C47.339 7.01358 46.8976 7.10321 46.5666 7.0696C46.2466 7.03599 45.9486 6.86794 45.7721 6.58786C45.6397 6.39741 45.5734 6.17335 45.5624 5.94929C45.5624 5.69162 45.6286 5.43394 45.7721 5.22108C45.9817 4.9186 46.2355 4.66093 46.5445 4.45927C47.008 4.13438 47.4162 3.97754 47.7694 3.97754C48.1225 3.97754 48.4535 4.14559 48.7625 4.49288L47.7694 5.2883C47.5707 5.03063 47.1956 4.97462 46.9418 5.17627L46.9086 5.20988C46.7983 5.2771 46.7211 5.37793 46.6769 5.50116C46.6438 5.59079 46.6659 5.69162 46.7211 5.77004C46.7652 5.82605 46.8314 5.87087 46.9086 5.87087C46.9969 5.88207 47.1514 5.83726 47.3721 5.73643C47.9238 5.50116 48.3432 5.36673 48.6301 5.32191C48.8728 5.2771 49.1266 5.29951 49.3584 5.40033C49.568 5.48996 49.7446 5.6468 49.866 5.83726C50.0204 6.06132 50.1087 6.33019 50.1198 6.61027C50.1308 6.90155 50.0536 7.18163 49.8991 7.4281C49.7004 7.73058 49.4466 7.98825 49.1487 8.18991C48.5418 8.61563 48.0452 8.79488 47.648 8.72766C47.2176 8.66044 46.8645 8.43638 46.6107 8.11149Z"
                  fill="#fff"
                />
              </g>
              <defs>
                <clipPath id="clip0_1101_556">
                  <rect width="61" height="23" fill="#fff" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
        <div class="footer__username">
          <a class="footer__link" href="https://github.com/yaarusik" target="_blank"> yaarusik </a>
        </div>
        <div class="footer__year">© 2021</div>
      </div>
    </div>
  </footer>

  `,
  events: { 'click .tree__container': 'changeBcg' },
});

export default treePageComponent;
