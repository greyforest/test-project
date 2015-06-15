Ext.define('TestProject.view.MyGrid', {
    extend: 'Ext.grid.Panel',

    requires: [
        'Ext.grid.filters.Filters'
    ],

    title: 'Grid View',
    renderTo: Ext.getBody(),
    plugins: 'gridfilters',

    emptyText: 'No Matching Records',
    loadMask: true,
    stateful: true,
    stateId: 'stateful-filter-grid',
    border: true,

    store: { type: 'objects' },

    defaultListenerScope: true,

    tbar: [{
        text: 'Show as Tree',
        tooltip: 'Display data as tree',
        handler: 'onTreeView'
    },{
        text: 'Clear Filters',
        tooltip: 'Clear all filters',
        handler: 'onClearFilters'
    }],

    columns: [
        {
            dataIndex: 'name',
            text: 'Object name',
            width: 120,
            filter: {
                type: 'string',
                itemDefaults: {
                    emptyText: 'Search for...'
                }
            }
        },
        {
            dataIndex: 'type',
            text: 'Object type',
            width: 120,
            filter: 'list'
        },
        {
            dataIndex: 'count',
            sortable: true,
            text: 'Columns',
            width: 200,
            renderer: function (value, metaData, record) {
                var result = '';
                record.columns().each(function () {
                    result += this.data.name + ' (' + this.data.type + ')\<\/br\>';
                });
                return result;
            }
        }
    ],

    onClearFilters: function () {
        this.filters.clearFilters();
    },

    onTreeView: function () {
        this.destroy();
        Ext.create('TestProject.view.MyTree');
    }
});