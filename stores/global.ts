import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', () => {
  const subscriptions = ref([])

  const onetime = ref([
    {
      link: 'https://t.me/tribute/app?startapp=donation_3759',
      code: 'telegram',
      name: 'Tribute (Telegram)',
      logo: '/images/telegram.svg'
    },
    {
      link: 'https://www.paypal.me/katerinagordeeva',
      code: 'paypal',
      name: 'PayPal',
      logo: '/images/paypal.svg'
    },
  ])

  const crypto = ([
    {
      img: '/images/usdt-trc20.svg',
      name: 'USDT (TRC20)',
      value: 'TVgBMQpbaMS5ahWUK9j43pJaNZRTKd8QwU'
    },
    {
      img: '/images/usdt-erc20.svg',
      name: 'USDT (ERC20)',
      value: '0x39e7769787be2b84ad5a955d53f4b80c39a93be0'
    },
    {
      img: '/images/btc.svg',
      name: 'BTC',
      value: '1DeRAzcsMPrxjyRbHKoPuYrnPtgjeT2BoS'
    },
    {
      img: '/images/eth.svg',
      name: 'ETH (ERC20)',
      value: '0x39e7769787be2b84ad5a955d53f4b80c39a93be0'
    },
  ])

  return { subscriptions, onetime, crypto }
})