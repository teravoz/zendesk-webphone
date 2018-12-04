import querystring from 'querystring';
import ZAF from '../misc/ZAFClient';

const OPEN_TOOLBOX = 'OPEN_TOOLBOX';
const CLOSE_TOOLBOX = 'CLOSE_TOOLBOX';
const OPEN_TOOLBOX_ITEM = 'OPEN_TOOLBOX_ITEM'; 
const CLOSE_TOOLBOX_ITEM = 'CLOSE_TOOLBOX_ITEM';

export const actions = {
  OPEN_TOOLBOX,
  CLOSE_TOOLBOX,
  OPEN_TOOLBOX_ITEM,
  CLOSE_TOOLBOX_ITEM
};

export const openToolbox = () => ({
  type: OPEN_TOOLBOX
});

export const closeToolbox = () => ({
  type: CLOSE_TOOLBOX,
});

export const openToolboxItem = (item) => ({
  type: OPEN_TOOLBOX_ITEM,
  item
});

export const closeToolboxItem = (item) => ({
  type: OPEN_TOOLBOX_ITEM,
  item
});