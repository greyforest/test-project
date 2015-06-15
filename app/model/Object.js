Ext.define('TestProject.model.Object', {
    extend: 'Ext.data.Model',

    requires: [
        'TestProject.model.Column'
    ],

    fields: [
        {name: 'name', type: 'string'},
        {name: 'type', type: 'string'},
        {
            name: 'count',
            type: 'int',
            convert: function(value, record) {
                return Object.keys(record.get('columns')).length;
            }
        }
    ],

    hasMany: [
        {
            name: 'columns',
            model: 'TestProject.model.Column'
        }
    ]
});