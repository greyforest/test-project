Ext.define('TestProject.store.Objects', {
    extend: 'Ext.data.Store',
    alias: 'store.objects',

    requires: [
        'TestProject.model.Object'
    ],

    autoLoad: true,
    autoDestroy: true,

    model: 'TestProject.model.Object',

    proxy: {
        type: 'ajax',
        url: 'resources/data/my-data.json',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});