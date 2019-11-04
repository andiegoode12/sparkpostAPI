module.exports = function(app) {
    var sparkpost = require('../controllers/sparkpostController');
  
    // Define routes
    app.route('/sparkpost')
      .get(sparkpost.get_all_entries)
      .get(sparkpost.get_entry)
      .post(sparkpost.create_entry)
      .put(sparkpost.update_entry)
      .delete(sparkpost.delete_all_entries);
  };