    { text: 'Map', routerLink: '', disabled: true },
    { text: 'Prior Tickets', routerLink: '', disabled: true },
    { text: 'Tools', routerLink: '', disabled: true },
    { isHr: true },
    { text: 'Time sheet', routerLink: '', disabled: true },
    { text: 'System Health', routerLink: '', img: { path: 'assets/idkweather.png' }, disabled: true },
    { text: 'News', routerLink: '', disabled: true },
    { text: 'Safety', routerLink: '', disabled: true },
    { text: 'Profile', routerLink: '', disabled: true },
      { isHr: true },
      { text: 'Touch \'n\' Go', routerLink: 'touch-n-go', img: { path: 'assets/idkweather.png' } },
  isHr?: boolean;
  disabled?: boolean;
  text?: string;
  routerLink?: string;
  img?: {
    path: string;
    alt?: string;
    width?: string;
    height?: string;
  };
  dropdown?: MenuLink[];
  callback?: Function;