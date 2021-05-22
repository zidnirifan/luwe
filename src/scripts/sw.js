/* eslint-disable import/no-extraneous-dependencies */
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

const self = this;
precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  /https:\/\/restaurant-api\.dicoding\.dev/,
  new StaleWhileRevalidate({
    cacheName: 'data-from-api',
  }),
);
