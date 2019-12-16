export const API_URL = process.env.API_URL || 'http://localhost:8000/api';
export const BASE_URL = process.env.BASE_URL || 'http://localhost:8000';
export const { DOTPAY_PIN, DOTPAY_ID } = process.env;
export const LINKS = [
  { id: 1, path: '/', title: 'Home' },
  { id: 2, path: '/faq', title: 'Faq' },
  { id: 3, path: '/regulations', title: 'Regulamin' },
  { id: 4, path: '/contact', title: 'Kontakt' },
];
