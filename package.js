Package.describe({
  name: 'citizensay:social'
});

Package.onUse(function(api) {
  api.versionsFrom('1.10.2');
    api.use([
        'ecmascript',
        'citizensay:core',
        'citizensay:workflows'
    ]);
    api.mainModule('client.js', 'client');
    api.mainModule('server.js', 'server');
});