// Created so that Commerce.js can be invoked in any file by importing commerce instance from this file

import Commerce from '@chec/commerce.js'

export const commerce= new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY,true);