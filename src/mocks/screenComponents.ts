import { ScreenComponent } from '@typings/index';
import {
  Introduction,
  VideoType,
  ProductInfo,
  LogoUpload,
  InfoPersonal,
  VideoDone,
  LoadingVideo,
  FarmerName,
  Oportunity,
  Defensive,
  ServiceType,
  ExperienceType,
} from '@components/Steps';

export const items: ScreenComponent[] = [
  {
    img: '/img/background-main.png',
    Component: Introduction,
    validation: Introduction.validation,
    hasMobileImg: true,
    isCover: true,
  },
  {
    img: '/img/background-main-2.png',
    Component: VideoType,
    validation: VideoType.validation,
    isCover: true,
  },
  {
    img: '/img/background-main-3.png',
    Component: FarmerName,
    validation: FarmerName.validation,
    hasCard: true,
    cardImg: 'img/preview-name.png',
  },
  {
    img: '/img/background-main-3.png',
    Component: Oportunity,
    validation: Oportunity.validation,
    hasCard: true,
    cardImg: 'img/preview-oportunity.png',
  },
  {
    img: '/img/background-main-3.png',
    Component: ProductInfo,
    validation: ProductInfo.validation,
    hasCard: true,
    cardImg: 'img/preview-product.png',
  },
  {
    img: '/img/background-main-3.png',
    Component: Defensive,
    validation: Defensive.validation,
    hasCard: true,
    cardImg: 'img/preview-defensive.png',
  },
  {
    img: '/img/background-main-3.png',
    Component: ServiceType,
    validation: ServiceType.validation,
    hasCard: true,
    cardImg: 'img/preview-service.png',
  },
  {
    img: '/img/background-main-3.png',
    Component: ExperienceType,
    validation: ExperienceType.validation,
    hasCard: true,
    cardImg: 'img/preview-experience.png',
  },
  {
    img: '/img/background-main-3.png',
    Component: LogoUpload,
    validation: LogoUpload.validation,
    hasCard: true,
    cardImg: 'img/preview-logo.png',
  },
  {
    img: '/img/background-main-3.png',
    Component: InfoPersonal,
    validation: InfoPersonal.validation,
    hasCard: true,
    cardImg: 'img/preview-personal.png',
  },
  {
    img: '/img/background-main-3.png',
    Component: LoadingVideo,
    validation: LoadingVideo.validation,
  },
  {
    img: '/img/background-main-3.png',
    Component: VideoDone,
    validation: VideoDone.validation,
    cardImg: 'img/preview-done.png',
  },
];
