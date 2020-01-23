export const API_URL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api' : '/api';
export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://shopprojectkb.herokuapp.com/';

export const { DOTPAY_PIN, DOTPAY_ID } = process.env;
export const LINKS = [
  { id: 1, path: '/', title: 'Home' },
  { id: 2, path: '/faq', title: 'Faq' },
  { id: 3, path: '/regulations', title: 'Regulamin' },
  { id: 4, path: '/contact', title: 'Kontakt' },
];
