export const menuItems = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'Tax',
      url: '/services',
      submenu: [
        {
          title: 'VAT Tax',
          url: '',
          submenu: [
            {
              title: 'VAT Registration',
              url: 'service/vat-registration-service/',
            },
            {
              title: 'VAT Retrun Filing in UAE',
              url : 'service/vat-return-filing-service/'
            },
            {
              title: 'VAT Refund Services',
              url : 'service/vat-refund-service/'
            },
            {
              title: 'VAT Deregistration Service',
              url : 'service/vat-deregistration-service/'
            },
            {
              title: 'VAT Penalty Reconsideration',
              url : 'service/vat-penalty-reconsideration/'
            },
            {
              title: 'UAE VAT Voluntary Disclosure',
              url : 'service/vat-voluntary-disclosure/'
            },
            {
              title: 'VAT Compliant Book Keeping',
              url : 'service/vat-compliant-bookkeeping/'
            },
            {
              title: '',
              url : ''
            },
          ],
        },
        {
          title: 'SEO',
          url: 'seo',
        },
      ],
    },
    {
      title: 'About',
      url: '/about',
      submenu: [
        {
          title: 'Who we are',
          url: 'who-we-are',
        },
        {
          title: 'Our values',
          url: 'our-values',
        },
      ],
    },
  ];
  