
exports.up = function(knex, Promise) {
    return knex.schema.createTable("cluckr", table => {
        table.increments("id");
        table.string("username");
        table.text("content");
        table.string("img_url");
        table.timestamp("createat");
        table.timestamp("update");
      });


};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("cluckr");
};
