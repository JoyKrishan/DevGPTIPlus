    { text: 'System Health', routerLink: '', img: { path: 'assets/idkweather.png' } },
  img?: MenuImage
  callback?: Function, // With this setup, HRs cannot have callbacks, but any other configuration can
}

export interface MenuImage {
  path: string,
  alt?: string,
  width?: string,
  height?: string,