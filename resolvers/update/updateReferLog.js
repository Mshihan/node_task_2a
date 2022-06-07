"use strict";
/*Powered By: Manaknightdigital Inc. https://manaknightdigital.com/ Year: 2021*/
/**
 * refer_log Resolve Update
 * @copyright 2021 Manaknightdigital Inc.
 * @link https://manaknightdigital.com
 * @license Proprietary Software licensing
 * @author Ryan Wong
 *
 */

const { ApolloError ,UserInputError} = require('apollo-server-express');
const { Validator } = require('node-input-validator');

module.exports = async (parent, args, {db}, info) => {
  try {
    const {     } = args;
    const v = new Validator({    }, {     });

    v.check().then(function (matched) {
      if (!matched) {
        Object.keys(v.errors).forEach((error) => {
          return new UserInputError(v.errors[error].message);
        });
      }
    });    
    return await db.refer_log.edit({     }, args.id);
  } catch (error) {
    console.log('update_refer_log -> error', error);
    return new ApolloError('InternalServerError');
  }
};
