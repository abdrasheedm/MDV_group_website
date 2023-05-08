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
          ],
        },
        {
          title: 'Excise Tax',
          url: '',
          submenu: [
            {
              title: 'Excise Tax Registration',
              url: 'service/excise-tax-registration/',
            },
            {
              title: 'Excise Tax Retrun Filing',
              url : 'service/excise-tax-return-filing/'
            },
            {
              title: 'Excise Tax Refund',
              url : 'service/excise-tax-refund/'
            },
            {
              title: 'Excise Tax Deregistration',
              url : 'service/vat-deregistration-service/'
            },
            {
              title: 'Excise Stock Audit',
              url : 'service/vat-penalty-reconsideration/'
            },
            {
              title: 'Excise Tax Penalty Reconsideration',
              url : 'service/vat-voluntary-disclosure/'
            },
            {
              title: 'Excise Tax Compliance',
              url : 'service/vat-compliant-bookkeeping/'
            },
            {
              title: 'Excise Pre-Audit Health Check',
              url : 'service/vat-compliant-bookkeeping/'
            },
          ],
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
  