import uuid from 'uuid/v1';
import moment from 'moment';

import mock from 'utils/mock';

mock.onGet('/api/management/seasonsBCS').reply(200, {
  seasonsBCS: [
    {
      id: uuid(),
      name: 'Temporada 1',
      numero: 1,
      tv: 'Better+Call+Saul'
    },
    {
      id: uuid(),
      name: 'Temporada 2',
      numero: 2,
      tv: 'Better+Call+Saul'
    },
    {
      id: uuid(),
      name: 'Temporada 3',
      numero: 3,
      tv: 'Better+Call+Saul'
    },
    {
      id: uuid(),
      name: 'Temporada 4',
      numero: 4,
      tv: 'Better+Call+Saul'
    },
    {
      id: uuid(),
      name: 'Temporada 5',
      numero: 5,
      tv: 'Better+Call+Saul'
    },
    {
      id: uuid(),
      name: 'Temporada 6',
      numero: 6,
      tv: 'Better+Call+Saul'
    }
  ]
});
mock.onGet('/api/management/seasonsBB').reply(200, {
  seasonsBB: [
    {
      id: uuid(),
      name: 'Temporada 1',
      numero: 1,
      tv: 'Breaking+Bad'
    },
    {
      id: uuid(),
      name: 'Temporada 2',
      numero: 2,
      tv: 'Breaking+Bad'
    },
    {
      id: uuid(),
      name: 'Temporada 3',
      numero: 3,
      tv: 'Breaking+Bad'
    },
    {
      id: uuid(),
      name: 'Temporada 4',
      numero: 4,
      tv: 'Breaking+Bad'
    },
    {
      id: uuid(),
      name: 'Temporada 5',
      numero: 5,
      tv: 'Breaking+Bad'
    }
  ]
});

mock.onGet('/api/management/customers/1/summary').reply(200, {
  summary: {
    name: 'Ekaterina Tankova',
    email: 'ekaterina@devias.io',
    phone: '+55 748 327 439',
    state: 'Alabama',
    country: 'United States',
    zipCode: '240355',
    address1: 'Street John Wick, no. 7',
    address2: 'House #25',
    iban: '4142 **** **** **** ****',
    autoCC: false,
    verified: true,
    currency: '$',
    invoices: [
      {
        id: uuid(),
        type: 'paid',
        value: 10.0
      },
      {
        id: uuid(),
        type: 'paid',
        value: 15.0
      },
      {
        id: uuid(),
        type: 'due',
        value: 5
      },
      {
        id: uuid(),
        type: 'income',
        value: 10.0
      }
    ],
    vat: 19,
    balance: 0,
    emails: [
      {
        id: uuid(),
        description: 'Order confirmation',
        created_at: moment()
          .subtract(3, 'days')
          .subtract(5, 'hours')
          .subtract(34, 'minutes')
      },
      {
        id: uuid(),
        description: 'Order confirmation',
        created_at: moment()
          .subtract(4, 'days')
          .subtract(11, 'hours')
          .subtract(49, 'minutes')
      }
    ]
  }
});

mock.onGet('/api/management/customers/1/invoices').reply(200, {
  invoices: [
    {
      id: uuid(),
      date: moment(),
      description: 'Freelancer Subscription (12/05/2019 - 11/06/2019)',
      paymentMethod: 'Credit Card',
      value: '5.25',
      currency: '$',
      status: 'paid'
    },
    {
      id: uuid(),
      date: moment(),
      description: 'Freelancer Subscription (12/05/2019 - 11/06/2019)',
      paymentMethod: 'Credit Card',
      value: '5.25',
      currency: '$',
      status: 'paid'
    }
  ]
});

mock.onGet('/api/management/customers/1/logs').reply(200, {
  logs: [
    {
      id: uuid(),
      status: 200,
      method: 'POST',
      route: '/api/purchase',
      desc: 'Purchase',
      IP: '84.234.243.42',
      created_at: moment()
        .subtract(2, 'days')
        .subtract(2, 'minutes')
        .subtract(56, 'seconds')
    },
    {
      id: uuid(),
      status: 522,
      error: 'Invalid credit card',
      method: 'POST',
      route: '/api/purchase',
      desc: 'Purchase',
      IP: '84.234.243.42',
      created_at: moment()
        .subtract(2, 'days')
        .subtract(2, 'minutes')
        .subtract(56, 'seconds')
    },
    {
      id: uuid(),
      status: 200,
      method: 'DELETE',
      route: '/api/products/d65654e/remove',
      desc: 'Cart remove',
      IP: '84.234.243.42',
      created_at: moment()
        .subtract(2, 'days')
        .subtract(8, 'minutes')
        .subtract(23, 'seconds')
    },
    {
      id: uuid(),
      status: 200,
      method: 'GET',
      route: '/api/products/d65654e/add',
      desc: 'Cart add',
      IP: '84.234.243.42',
      created_at: moment()
        .subtract(2, 'days')
        .subtract(20, 'minutes')
        .subtract(54, 'seconds')
    },
    {
      id: uuid(),
      status: 200,
      method: 'GET',
      route: '/api/products/c85727f/add',
      desc: 'Cart add',
      IP: '84.234.243.42',
      created_at: moment()
        .subtract(2, 'days')
        .subtract(34, 'minutes')
        .subtract(16, 'seconds')
    },
    {
      id: uuid(),
      status: 200,
      method: 'GET',
      route: '/api/products/c85727f',
      desc: 'View product',
      IP: '84.234.243.42',
      created_at: moment()
        .subtract(2, 'days')
        .subtract(54, 'minutes')
        .subtract(30, 'seconds')
    },
    {
      id: uuid(),
      status: 200,
      method: 'GET',
      route: '/api/products',
      desc: 'Get products',
      IP: '84.234.243.42',
      created_at: moment()
        .subtract(2, 'days')
        .subtract(56, 'minutes')
        .subtract(40, 'seconds')
    },
    {
      id: uuid(),
      status: 200,
      method: 'POST',
      route: '/api/login',
      desc: 'Login',
      IP: '84.234.243.42',
      created_at: moment()
        .subtract(2, 'days')
        .subtract(57, 'minutes')
        .subtract(5, 'seconds')
    }
  ]
});
