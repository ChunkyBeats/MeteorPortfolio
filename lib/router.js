Router.configure({
  layoutTemplate: 'layout'
});

// Router.route('/');
//
// Router.route('/button', {
//     template: 'button'
// });
//
// Router.route('/about');

Router.map(function () {
  this.route('home', {
    path: '/',
    template: 'welcome',
  });

  this.route('about', {
    path: '/about',
    template: 'about'
  });

  this.route('button', {
    path: '/button',
    template: 'button'
  });

});
