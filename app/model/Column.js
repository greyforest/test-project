Ext.define('TestProject.model.Column', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'name',
            type: 'string',
            convert: function (value) {
                if(value.length) {
                    return value.charAt(0).toUpperCase() + value.substring(1);
                }
                return value;
            }
        },
        {name: 'datatype', type: 'string'},
        {name: 'length', type: 'int'},
        {
            name: 'type',
            type: 'string',
            convert: function (value, record) {
                var len = record.get('length'),
                    type = record.get('datatype')
                    ;
                if (len)
                    return type + ' ' + len;
                return type;
            }
        }
    ]
});