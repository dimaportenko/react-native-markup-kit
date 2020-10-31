/**
 * This is a fake index.ts file, for auto-generating the types of all the inline required components.
 * The real index file that will be bundled is "src/index.js".
 * Please use this file for declaring all the exports, so they could be picked up by typescript's complier
 */
export * from './style';
export { constants as Constants } from './helpers/Constants';
export { default as View, ViewPropTypes } from './components/view';
