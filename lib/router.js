Router.configure({
  layoutTemplate: 'layout'
});

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
