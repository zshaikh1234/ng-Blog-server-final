const Sequelize = require("sequelize");

const sequelize = new Sequelize("ngblog", "root", "123456", {
  host: "localhost",
  dialect: "mariadb",
  port: 3306,
  dialectOptions: {
    timezone: process.env.timezone
  }
});

const Article = sequelize.define("article", {
  title: { type: Sequelize.STRING },
  key: { type: Sequelize.STRING },
  date: { type: Sequelize.DATE },
  content: { type: Sequelize.TEXT },
  description: { type: Sequelize.STRING },
  imageUrl: { type: Sequelize.STRING },
  viewCount: { type: Sequelize.INTEGER },
  published: { type: Sequelize.BOOLEAN }

});

init = function () {
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch(err => {
      console.error("Unable to connect to the database: ", err);
    });
  Article.sync({ force: true }).then(() => {
    Article.create({
      title: "My First Article",
      key: "my-first-article",
      date: new Date(),
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu ipsum eu est porta ultricies eget a sapien. Integer vulputate tempor risus, at placerat metus condimentum at. Vestibulum at nisl vitae mi imperdiet ultrices nec eu mi. Nullam non aliquet nibh. Curabitur id hendrerit leo, maximus vulputate est. Mauris vitae nibh a libero vulputate tincidunt et nec mi. Mauris lacinia velit vel lectus pharetra cursus. Vivamus sed ante ante. Morbi rutrum luctus ligula, in porttitor tellus pharetra quis. Aenean blandit risus eu placerat commodo. Vestibulum id elementum nibh. Nulla fringilla, diam sit amet elementum tincidunt, mauris ante aliquam neque, varius rhoncus magna libero viverra nunc. Ut sed mi non ligula posuere lacinia. Fusce aliquet nisl et dui facilisis euismod.</P><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu ipsum eu est porta ultricies eget a sapien. Integer vulputate tempor risus, at placerat metus condimentum at. Vestibulum at nisl vitae mi imperdiet ultrices nec eu mi. Nullam non aliquet nibh. Curabitur id hendrerit leo, maximus vulputate est. Mauris vitae nibh a libero vulputate tincidunt et nec mi. Mauris lacinia velit vel lectus pharetra cursus. Vivamus sed ante ante. Morbi rutrum luctus ligula, in porttitor tellus pharetra quis. Aenean blandit risus eu placerat commodo. Vestibulum id elementum nibh. Nulla fringilla, diam sit amet elementum tincidunt, mauris ante aliquam neque, varius rhoncus magna libero viverra nunc. Ut sed mi non ligula posuere lacinia. Fusce aliquet nisl et dui facilisis euismod.</P><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu ipsum eu est porta ultricies eget a sapien. Integer vulputate tempor risus, at placerat metus condimentum at. Vestibulum at nisl vitae mi imperdiet ultrices nec eu mi. Nullam non aliquet nibh. Curabitur id hendrerit leo, maximus vulputate est. Mauris vitae nibh a libero vulputate tincidunt et nec mi. Mauris lacinia velit vel lectus pharetra cursus. Vivamus sed ante ante. Morbi rutrum luctus ligula, in porttitor tellus pharetra quis. Aenean blandit risus eu placerat commodo. Vestibulum id elementum nibh. Nulla fringilla, diam sit amet elementum tincidunt, mauris ante aliquam neque, varius rhoncus magna libero viverra nunc. Ut sed mi non ligula posuere lacinia. Fusce aliquet nisl et dui facilisis euismod.</P><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu ipsum eu est porta ultricies eget a sapien. Integer vulputate tempor risus, at placerat metus condimentum at. Vestibulum at nisl vitae mi imperdiet ultrices nec eu mi. Nullam non aliquet nibh. Curabitur id hendrerit leo, maximus vulputate est. Mauris vitae nibh a libero vulputate tincidunt et nec mi. Mauris lacinia velit vel lectus pharetra cursus. Vivamus sed ante ante. Morbi rutrum luctus ligula, in porttitor tellus pharetra quis. Aenean blandit risus eu placerat commodo. Vestibulum id elementum nibh. Nulla fringilla, diam sit amet elementum tincidunt, mauris ante aliquam neque, varius rhoncus magna libero viverra nunc. Ut sed mi non ligula posuere lacinia. Fusce aliquet nisl et dui facilisis euismod.</P><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu ipsum eu est porta ultricies eget a sapien. Integer vulputate tempor risus, at placerat metus condimentum at. Vestibulum at nisl vitae mi imperdiet ultrices nec eu mi. Nullam non aliquet nibh. Curabitur id hendrerit leo, maximus vulputate est. Mauris vitae nibh a libero vulputate tincidunt et nec mi. Mauris lacinia velit vel lectus pharetra cursus. Vivamus sed ante ante. Morbi rutrum luctus ligula, in porttitor tellus pharetra quis. Aenean blandit risus eu placerat commodo. Vestibulum id elementum nibh. Nulla fringilla, diam sit amet elementum tincidunt, mauris ante aliquam neque, varius rhoncus magna libero viverra nunc. Ut sed mi non ligula posuere lacinia. Fusce aliquet nisl et dui facilisis euismod.</P><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu ipsum eu est porta ultricies eget a sapien. Integer vulputate tempor risus, at placerat metus condimentum at. Vestibulum at nisl vitae mi imperdiet ultrices nec eu mi. Nullam non aliquet nibh. Curabitur id hendrerit leo, maximus vulputate est. Mauris vitae nibh a libero vulputate tincidunt et nec mi. Mauris lacinia velit vel lectus pharetra cursus. Vivamus sed ante ante. Morbi rutrum luctus ligula, in porttitor tellus pharetra quis. Aenean blandit risus eu placerat commodo. Vestibulum id elementum nibh. Nulla fringilla, diam sit amet elementum tincidunt, mauris ante aliquam neque, varius rhoncus magna libero viverra nunc. Ut sed mi non ligula posuere lacinia. Fusce aliquet nisl et dui facilisis euismod.</P><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu ipsum eu est porta ultricies eget a sapien. Integer vulputate tempor risus, at placerat metus condimentum at. Vestibulum at nisl vitae mi imperdiet ultrices nec eu mi. Nullam non aliquet nibh. Curabitur id hendrerit leo, maximus vulputate est. Mauris vitae nibh a libero vulputate tincidunt et nec mi. Mauris lacinia velit vel lectus pharetra cursus. Vivamus sed ante ante. Morbi rutrum luctus ligula, in porttitor tellus pharetra quis. Aenean blandit risus eu placerat commodo. Vestibulum id elementum nibh. Nulla fringilla, diam sit amet elementum tincidunt, mauris ante aliquam neque, varius rhoncus magna libero viverra nunc. Ut sed mi non ligula posuere lacinia. Fusce aliquet nisl et dui facilisis euismod.</P>",
      description: "This is my First aritcle, Please read it",
      imageUrl: "http://angular.io/assets/images/logos/angular/angular.png",
      published: true
    });

    Article.create({
      title: "My 2nd Article",
      key: "my-2nd-article",
      date: new Date(),
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu ipsum eu est porta ultricies eget a sapien. Integer vulputate tempor risus, at placerat metus condimentum at. Vestibulum at nisl vitae mi imperdiet ultrices nec eu mi. Nullam non aliquet nibh. Curabitur id hendrerit leo, maximus vulputate est. Mauris vitae nibh a libero vulputate tincidunt et nec mi. Mauris lacinia velit vel lectus pharetra cursus. Vivamus sed ante ante. Morbi rutrum luctus ligula, in porttitor tellus pharetra quis. Aenean blandit risus eu placerat commodo. Vestibulum id elementum nibh. Nulla fringilla, diam sit amet elementum tincidunt, mauris ante aliquam neque, varius rhoncus magna libero viverra nunc. Ut sed mi non ligula posuere lacinia. Fusce aliquet nisl et dui facilisis euismod.</P><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu ipsum eu est porta ultricies eget a sapien. Integer vulputate tempor risus, at placerat metus condimentum at. Vestibulum at nisl vitae mi imperdiet ultrices nec eu mi. Nullam non aliquet nibh. Curabitur id hendrerit leo, maximus vulputate est. Mauris vitae nibh a libero vulputate tincidunt et nec mi. Mauris lacinia velit vel lectus pharetra cursus. Vivamus sed ante ante. Morbi rutrum luctus ligula, in porttitor tellus pharetra quis. Aenean blandit risus eu placerat commodo. Vestibulum id elementum nibh. Nulla fringilla, diam sit amet elementum tincidunt, mauris ante aliquam neque, varius rhoncus magna libero viverra nunc. Ut sed mi non ligula posuere lacinia. Fusce aliquet nisl et dui facilisis euismod.</P><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu ipsum eu est porta ultricies eget a sapien. Integer vulputate tempor risus, at placerat metus condimentum at. Vestibulum at nisl vitae mi imperdiet ultrices nec eu mi. Nullam non aliquet nibh. Curabitur id hendrerit leo, maximus vulputate est. Mauris vitae nibh a libero vulputate tincidunt et nec mi. Mauris lacinia velit vel lectus pharetra cursus. Vivamus sed ante ante. Morbi rutrum luctus ligula, in porttitor tellus pharetra quis. Aenean blandit risus eu placerat commodo. Vestibulum id elementum nibh. Nulla fringilla, diam sit amet elementum tincidunt, mauris ante aliquam neque, varius rhoncus magna libero viverra nunc. Ut sed mi non ligula posuere lacinia. Fusce aliquet nisl et dui facilisis euismod.</P><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu ipsum eu est porta ultricies eget a sapien. Integer vulputate tempor risus, at placerat metus condimentum at. Vestibulum at nisl vitae mi imperdiet ultrices nec eu mi. Nullam non aliquet nibh. Curabitur id hendrerit leo, maximus vulputate est. Mauris vitae nibh a libero vulputate tincidunt et nec mi. Mauris lacinia velit vel lectus pharetra cursus. Vivamus sed ante ante. Morbi rutrum luctus ligula, in porttitor tellus pharetra quis. Aenean blandit risus eu placerat commodo. Vestibulum id elementum nibh. Nulla fringilla, diam sit amet elementum tincidunt, mauris ante aliquam neque, varius rhoncus magna libero viverra nunc. Ut sed mi non ligula posuere lacinia. Fusce aliquet nisl et dui facilisis euismod.</P><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu ipsum eu est porta ultricies eget a sapien. Integer vulputate tempor risus, at placerat metus condimentum at. Vestibulum at nisl vitae mi imperdiet ultrices nec eu mi. Nullam non aliquet nibh. Curabitur id hendrerit leo, maximus vulputate est. Mauris vitae nibh a libero vulputate tincidunt et nec mi. Mauris lacinia velit vel lectus pharetra cursus. Vivamus sed ante ante. Morbi rutrum luctus ligula, in porttitor tellus pharetra quis. Aenean blandit risus eu placerat commodo. Vestibulum id elementum nibh. Nulla fringilla, diam sit amet elementum tincidunt, mauris ante aliquam neque, varius rhoncus magna libero viverra nunc. Ut sed mi non ligula posuere lacinia. Fusce aliquet nisl et dui facilisis euismod.</P><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu ipsum eu est porta ultricies eget a sapien. Integer vulputate tempor risus, at placerat metus condimentum at. Vestibulum at nisl vitae mi imperdiet ultrices nec eu mi. Nullam non aliquet nibh. Curabitur id hendrerit leo, maximus vulputate est. Mauris vitae nibh a libero vulputate tincidunt et nec mi. Mauris lacinia velit vel lectus pharetra cursus. Vivamus sed ante ante. Morbi rutrum luctus ligula, in porttitor tellus pharetra quis. Aenean blandit risus eu placerat commodo. Vestibulum id elementum nibh. Nulla fringilla, diam sit amet elementum tincidunt, mauris ante aliquam neque, varius rhoncus magna libero viverra nunc. Ut sed mi non ligula posuere lacinia. Fusce aliquet nisl et dui facilisis euismod.</P>",
      description: "Alos great article",
      imageUrl:
        "http://angular.io/assets/images/logos/angular/angular_solidBlack.png",
      published: false
    });
  });
};

getArticles = function (callback) {
  Article.findAll({ order: sequelize.literal("date desc"), where: { published: true } }).then(articles =>
    callback(articles)
  );
};

getArticleByKey = function (options, callback) {
  Article.findOne({ where: { key: options.key, published: true } }).then(article => {
    if (article != null) {
      article.update({
        viewCount: ++article.viewCount
      })
    }
    callback(article);
  });
};


getDashboardArticles = function (callback) {
  Article.findAll({ order: sequelize.literal("date desc") }).then(articles =>
    callback(articles)
  );
};

updateArticlePublishState = function (request, callback) {
  Article.findOne({where: {id: request.id}}).then(function (resultSingleArticle) {
    if (resultSingleArticle != null){
      resultSingleArticle.update({
        published: request.published
      });
    }
    callback(resultSingleArticle);
  });
  
};

module.exports.init = init;
module.exports.getArticles = getArticles;
module.exports.getArticleByKey = getArticleByKey;
module.exports.getDashboardArticles = getDashboardArticles;
module.exports.updateArticlePublishState = updateArticlePublishState;