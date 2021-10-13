import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://farm.bscclassic.org/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: 'https://bscclassic.org/#/swap'
      },
      {
        label: 'Liquidity',
        href: 'https://bscclassic.org/#/pool'
      }
    ]
  },
  {
    label: 'Features',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Limit Order',
        href: '/Limit'
      },
      {
        label: 'Stop Loss',
        href: '/Stop'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://farm.bscclassic.org/farms'
  },
  {
    label: 'Nests',
    icon: 'PoolIcon',
    href: 'https://farm.bscclassic.org/nests'
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://farm.bscclassic.org/lottery'
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/',
      },
      // {
      //   label: 'AstroTools',
      //   href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      // },
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/BscClassic/",
      },
      // {
      //   label: "Docs",
      //   href: "https://goosedefi.gitbook.io/goose-finance/",
      // },
      // {
      //   label: "Blog",
      //   href: "https://goosefinance.medium.com/",
      // },
    ],
  },
  {
    label: 'Partnerships/IFO',
    icon: 'GooseIcon',
    href: 'https://farm.bscclassic.org/',
  },
  {
    label: 'Audit by Hacken',
    icon: 'AuditIcon',
    href: 'https://farm.bscclassic.org/',
  },
  {
    label: 'Audit by CertiK',
    icon: 'AuditIcon',
    href: 'https://certik.org/projects/',
  },
]

export default config
