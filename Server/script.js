import http from 'k6/http';
import { check, group, sleep, fail } from 'k6';

export const options = {
  vus: 500,
  duration: '120s',
};

export default function () {
  http.get('http://localhost:3000/reviews/66642/meta');
  sleep(1);
}
