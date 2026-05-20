import { appConfig } from './config'

export const framework7Config = {
  name: appConfig.name,
  theme: 'ios',
  iosTranslucentBars: true,
  iosTranslucentModals: true,
  touch: {
    tapHold: false,
    disableContextMenu: true
  }
} as const
