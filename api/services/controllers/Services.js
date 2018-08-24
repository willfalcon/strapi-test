'use strict';

/**
 * Services.js controller
 *
 * @description: A set of functions called "actions" for managing `Services`.
 */

module.exports = {

  /**
   * Retrieve services records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.services.search(ctx.query);
    } else {
      return strapi.services.services.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a services record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.services.fetch(ctx.params);
  },

  /**
   * Count services records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.services.count(ctx.query);
  },

  /**
   * Create a/an services record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.services.add(ctx.request.body);
  },

  /**
   * Update a/an services record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.services.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an services record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.services.remove(ctx.params);
  }
};
