Ext.define('TestProject.view.MyTree', {
    extend: 'Ext.tree.Panel',

    title: 'Tree View',
    renderTo: Ext.getBody(),
    border: true,
    autoHeight: true,
    rootVisible: true,
    cls: 'no-leaf-icons',

    defaultListenerScope: true,
    tbar: [{
        text: 'Show as Grid',
        tooltip: 'Display data as grid',
        handler: 'onGridView'
    }],

    initComponent: function () {
        var views = {text: 'Views', expanded: true, children: []},
            tables = {text: 'Tables', expanded: true, children: []};

        Ext.getStore('Objects').each(function (record) {
            var _text = record.data.name;
            if (record.data.count) {
                _text += ' (' + record.data.count + ' columns)';
            }
            var node = {text: _text, leaf: false, children: []};

            record.columns().each(function () {
                node.children.push({text: this.data.name + ' (' + this.data.type + ')', leaf: true});
            });

            if (record.data.type == "Table") {
                tables.children.push(node);
            } else {
                views.children.push(node);
            }
        });

        Ext.apply(this, {
            root: {text: 'Root', expanded: true, children: [views, tables]}
        });
        this.callParent();
    },

    onGridView: function () {
        this.destroy();
        Ext.create('TestProject.view.MyGrid');
    }
});