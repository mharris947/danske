import { Account } from '@/utils/types';

export const mockAccounts: Account[] = [
  {
    account_id: 'ACC001',
    holder: {
      fullName: 'Donna Mary',
      email: 'd*@gmail.com',
      dateCreated: '9/2/2025', // m/d/y
      username: 'sample1',
      password: 'sample1'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 100000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '23782',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'August 30, 2025',
        description: 'Transfer from Ava Schmidt - XXXXXX1029',
        status: 'Success',
        amount_usd: 130000.0
      },
      {
        dateTime: 'August 12, 2025',
        description: 'Transfer from Olivia Mitchelle - XXXXXX3664',
        status: 'Success',
        amount_usd: 25000.0
      },
      {
        dateTime: 'June 20, 2025',
        description: 'Transfer from Mason Lee - XXXXXX7890',
        status: 'Success',
        amount_usd: 17600.0
      },
      {
        dateTime: 'June 5, 2025',
        description: 'Transfer fee - XXXXXX1373',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'June 5, 2025',
        description: 'Transfer to Ava Reynolds - XXXXXX3871',
        status: 'Success',
        amount_usd: 10500.0
      },
      {
        dateTime: 'February 11, 2025',
        description: 'Transfer fee - XXXXXX5612',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'February 11, 2025',
        description: 'Transfer to Liam Carter - XXXXXX5612',
        status: 'Success',
        amount_usd: -48000.0
      },
      {
        dateTime: 'December 2, 2024',
        description: 'Transfer from Mia Brooks - XXXXXX6111',
        status: 'Success',
        amount_usd: 10200.0
      },
      {
        dateTime: 'September 15, 2024',
        description: 'Transfer from Jacob Smith - XXXXXX9120',
        status: 'Success',
        amount_usd: 19400.0
      },
      {
        dateTime: 'July 18, 2024',
        description: 'Transfer fee - XXXXXX2120',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 18, 2024',
        description: 'Transfer to Ava Wilson - XXXXXX2120',
        status: 'Success',
        amount_usd: -37000.0
      },
      {
        dateTime: 'November 30, 2023',
        description: 'VAT Fee - XXXXXX3345',
        status: 'Success',
        amount_usd: -62.5
      },
      {
        dateTime: 'September 12, 2023',
        description: 'Transfer from Ethan Johnson - XXXXXX3491',
        status: 'Success',
        amount_usd: 129000.0
      },
      {
        dateTime: 'July 4, 2023',
        description: 'Transfer fee - XXXXXX1080',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 4, 2023',
        description: 'Transfer to Emma Johnson - XXXXXX1080',
        status: 'Success',
        amount_usd: -39000.0
      },
      {
        dateTime: 'December 7, 2022',
        description: 'Transfer from Benjamin Clark - XXXXXX7623',
        status: 'Success',
        amount_usd: 21800.0
      },
      {
        dateTime: 'September 20, 2022',
        description: 'Transfer from Amelia Müller - XXXXXX4730',
        status: 'Success',
        amount_usd: 24800.0
      },
      {
        dateTime: 'June 22, 2022',
        description: 'Transfer fee - XXXXXX8647',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'June 22, 2022',
        description: 'Transfer to Noah Taylor - XXXXXX8647',
        status: 'Success',
        amount_usd: -3200.0
      },
      {
        dateTime: 'December 18, 2021',
        description: 'Transfer from Henry Baker - XXXXXX6667',
        status: 'Success',
        amount_usd: 31900.0
      },
      {
        dateTime: 'September 9, 2021',
        description: 'Transfer from Grace Evans - XXXXXX6366',
        status: 'Success',
        amount_usd: 11600.0
      },
      {
        dateTime: 'July 1, 2021',
        description: 'Transfer fee - XXXXXX9072',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 1, 2021',
        description: 'Transfer to Ava Schmidt - XXXXXX9072',
        status: 'Success',
        amount_usd: -14700.0
      },
      {
        dateTime: 'November 23, 2020',
        description: 'Transfer from Isabella Dubois - XXXXXX3155',
        status: 'Success',
        amount_usd: 34000.0
      },
      {
        dateTime: 'September 4, 2020',
        description: 'Transfer from Nathan Gray - XXXXXX1746',
        status: 'Success',
        amount_usd: 42100.0
      },
      {
        dateTime: 'June 6, 2020',
        description: 'Transfer fee - XXXXXX2019',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'June 6, 2020',
        description: 'Transfer to Olivia Smith - XXXXXX2019',
        status: 'Success',
        amount_usd: -26000.0
      }
    ]
  },
  {
    account_id: 'ACC002',
    holder: {
      fullName: 'Jari Hannele',
      email: 'j***@gmail.com',
      dateCreated: '10/29/2025', // m/d/y
      username: 'Yrjö',
      password: '358400492803'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 300000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '2378',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'October 28, 2025',
        description: 'Vat fee - XXXXXX8553',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'October 28, 2025',
        description: 'Transfer Payment Frm Mavis Wanczyk - XXXXXX2747',
        status: 'Success',
        amount_usd: 300000.0
      },
      {
        dateTime: 'January 10, 2025',
        description: 'Vat fee - XXXXXX8553',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'January 10, 2025',
        description: 'Credit Card Payment officials - XXXXXX3843',
        status: 'Success',
        amount_usd: 5750.0
      },
      {
        dateTime: 'December 5, 2024',
        description: 'Vat fee - XXXXXX8553',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'December 5, 2024',
        description: 'Transfer to Tee~Energy services - XXXXXX5444',
        status: 'Success',
        amount_usd: 300000.0
      },
      {
        dateTime: 'September 13, 2024',
        description: 'Vat fee - XXXXXX8553',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'September 13, 2024',
        description: 'Check Deposit - XXXXXX6456',
        status: 'Success',
        amount_usd: 350000.0
      },
      {
        dateTime: 'June 24, 2024',
        description: 'Vat fee - XXXXXX8553',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'June 24, 2024',
        description: 'ransfer Payment to Steven Porter - XXXXXX7924',
        status: 'Success',
        amount_usd: 300000.0
      },
      {
        dateTime: 'March 23, 2023',
        description: 'Vat fee - XXXXXX8553',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'March 23, 2023',
        description: 'Check Deposit - XXXXXX34345',
        status: 'Success',
        amount_usd: 500000.0
      }
    ]
  },
  {
    account_id: 'ACC003',
    holder: {
      fullName: 'Jesper Rosenvinge Austad',
      email: 'j***@gmail.com',
      dateCreated: '2/25/2026', // m/d/y
      username: 'Jesp44321',
      password: 'Austad901'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 800000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '2378',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'February 23, 2026',
        description: 'Transfer from Ava Schmidt - XXXXXX1029',
        status: 'Success',
        amount_usd: 150000.0
      },
      {
        dateTime: 'February 12, 2026',
        description: 'Transfer from Olivia Mitchelle - XXXXXX3664',
        status: 'Success',
        amount_usd: 55000.0
      },
      {
        dateTime: 'January 20, 2026',
        description: 'Transfer from Mason Lee - XXXXXX7890',
        status: 'Success',
        amount_usd: 50000.0
      },
      {
        dateTime: 'January 5, 2026',
        description: 'Transfer to Ava Reynolds - XXXXXX3871',
        status: 'Success',
        amount_usd: 25000.0
      },
      {
        dateTime: 'January 5, 2026',
        description: 'Transfer fee - XXXXXX1373',
        status: 'Success',
        amount_usd: -80.0
      },

      {
        dateTime: 'December 18, 2025',
        description: 'Transfer from Henry Baker - XXXXXX6667',
        status: 'Success',
        amount_usd: 60000.0
      },
      {
        dateTime: 'December 11, 2025',
        description: 'Transfer to Liam Carter - XXXXXX5612',
        status: 'Success',
        amount_usd: -48000.0
      },
      {
        dateTime: 'December 11, 2025',
        description: 'Transfer fee - XXXXXX5612',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'December 7, 2025',
        description: 'Transfer from Benjamin Clark - XXXXXX7623',
        status: 'Success',
        amount_usd: 40000.0
      },
      {
        dateTime: 'November 30, 2025',
        description: 'VAT Fee - XXXXXX3345',
        status: 'Success',
        amount_usd: -62.5
      },
      {
        dateTime: 'November 23, 2025',
        description: 'Transfer from Isabella Dubois - XXXXXX3155',
        status: 'Success',
        amount_usd: 55000.0
      },
      {
        dateTime: 'October 2, 2025',
        description: 'Transfer from Mia Brooks - XXXXXX6111',
        status: 'Success',
        amount_usd: 30000.0
      },
      {
        dateTime: 'September 20, 2025',
        description: 'Transfer from Amelia Müller - XXXXXX4730',
        status: 'Success',
        amount_usd: 45000.0
      },
      {
        dateTime: 'September 12, 2025',
        description: 'Transfer from Ethan Johnson - XXXXXX3491',
        status: 'Success',
        amount_usd: 150000.0
      },
      {
        dateTime: 'September 9, 2025',
        description: 'Transfer from Grace Evans - XXXXXX6366',
        status: 'Success',
        amount_usd: 25000.0
      },
      {
        dateTime: 'September 4, 2025',
        description: 'Transfer from Nathan Gray - XXXXXX1746',
        status: 'Success',
        amount_usd: 65000.0
      },
      {
        dateTime: 'August 15, 2025',
        description: 'Transfer from Jacob Smith - XXXXXX9120',
        status: 'Success',
        amount_usd: 50000.0
      },
      {
        dateTime: 'July 18, 2025',
        description: 'Transfer to Ava Wilson - XXXXXX2120',
        status: 'Success',
        amount_usd: -37000.0
      },
      {
        dateTime: 'July 18, 2025',
        description: 'Transfer fee - XXXXXX2120',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 4, 2025',
        description: 'Transfer to Emma Johnson - XXXXXX1080',
        status: 'Success',
        amount_usd: -39000.0
      },
      {
        dateTime: 'July 4, 2025',
        description: 'Transfer fee - XXXXXX1080',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 1, 2025',
        description: 'Transfer to Ava Schmidt - XXXXXX9072',
        status: 'Success',
        amount_usd: -14700.0
      },
      {
        dateTime: 'July 1, 2025',
        description: 'Transfer fee - XXXXXX9072',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'June 22, 2025',
        description: 'Transfer to Noah Taylor - XXXXXX8647',
        status: 'Success',
        amount_usd: -3200.0
      },
      {
        dateTime: 'June 22, 2025',
        description: 'Transfer fee - XXXXXX8647',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'June 6, 2025',
        description: 'Transfer to Olivia Smith - XXXXXX2019',
        status: 'Success',
        amount_usd: -26000.0
      },
      {
        dateTime: 'June 6, 2025',
        description: 'Transfer fee - XXXXXX2019',
        status: 'Success',
        amount_usd: -80.0
      }
    ]
  }
];
