Ext.define('TestProject.Application', {
    extend: 'Ext.app.Application',
    name: 'TestProject',

    views: [
        'MyGrid',
        'MyTree'
    ],
    stores: [
        'Objects'
    ],

    launch: function () {
        Ext.create('TestProject.view.MyGrid');
    }
});
