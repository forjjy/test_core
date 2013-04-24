// Cygnus UI Component

//Grid Panel Define
Ext.define('Cygnus.grid.Panel', {
    extend : 'Ext.grid.Panel',
    title : 'List',
    height : 400,
    width : 450,
    viewConfig : {
	loadMask : false
    }
});

//Panel Define
Ext.define('Cygnus.panel.Panel', {
    extend : 'Ext.panel.Panel'
});

//Panel Define
Ext.define('Cygnus.tree.Panel', {
    extend : 'Ext.tree.Panel',    
    title: 'Tree',
    width: '100%',
    height: '100%',
    rootVisible: true
});

Ext.define('Cygnus.form.FormPanel', {
    extend : 'Ext.form.FormPanel',
    frame: true,
    height : 500,
    width : 450,
    defaultType: 'textfield'
});

// Window Define
Ext.define('Cygnus.window.Window', {
    extend : 'Ext.window.Window',
    title : 'Cygnus',
    height : 400,
    width : 450
});

// Model Define
Ext.define('Cygnus.data.Model', {
    extend : 'Ext.data.Model'
});

// Store Define
Ext.define('Cygnus.data.Store', {
    extend : 'Ext.data.Store'
});

//Tree Store Define
Ext.define('Cygnus.data.TreeStore', {
 extend : 'Ext.data.TreeStore'
});

var NkiaCygnus = function(){
    this.randomString;
    this.storeFactory;
    this.alert;
    this.addComponent;
    this.treeStore;
    this.treePanel;
}

    
NkiaCygnus.randomString = function(_length) {
    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = '';
    for (var i = _length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
}

// create Store with data model
NkiaCygnus.dataStore = function(_modelName, _fields, _url) {

    Ext.define(_modelName, {
	extend : 'Cygnus.data.Model',
	fields : _fields
    });

    var result_store = Ext.create('Cygnus.data.Store', {
	    storeId : this.randomString(20),
	    model : _modelName,
	    pageSize : 200,
        remoteSort: true,
	    buffered : true,
	    proxy : {
    		type : 'ajax',
    		url : _url,
    		reader : {
    		    type : 'json'
    		}
	    },
        sorters: [{
            property: 'name',
            direction: 'ASC'
        }]

    });
    return result_store;
}
    
    //
NkiaCygnus.alert = function(_result, _message){
    if(_result == "success"){                    
	Ext.Msg.alert("Success!", _message, function() {
            alert(warning);
        });                            
    }else if(_result == "failure"){                 
	Ext.Msg.alert("Failure!", _message, function() {
            alert(warning);
        });                            
    }else{              
        Ext.Msg.alert("", _message, function() {
            alert(warning);
        });                        
    }
}


NkiaCygnus.addComponent = function(_pos, _url, _clear){
    if(_clear == true)_pos.removeAll();
    
    var dynamicPanel = new Ext.Component({
        loader: {
            url: _url,
            renderer: 'html',
            autoLoad: true,
            scripts: true
        }
    });
    
    _pos.add(dynamicPanel);
    _pos.doLayout();
}


//create tree Store
NkiaCygnus.treeStore = function(_url) {


    var result_store = Ext.create('Cygnus.data.Store', {
    	storeId : this.randomString(20),
    	proxy : {
    	    type : 'ajax',
    	    url : _url,
    	    reader : {
        		type : 'json',                    
        		root : 'root'
    	    }
    	}
    });	
    return result_store;
}

//create tree Panel
NkiaCygnus.treePanel = function(_title, _url, _pos) {
    var result_store = Ext.create('Cygnus.data.TreeStore', {
	storeId : this.randomString(20),
	proxy : {
	    type : 'ajax',
	    actionMethods: 'post',
	    url : _url,
	    reader : {
		type : 'json',                    
		root : 'root'

	    },
            folderSort: true,
            sorters: [{
                property: 'text',
                direction: 'ASC'
            }]
	}
    });	
    
    var result_treePanel = Ext.create('Cygnus.tree.Panel', {
        rootVisible:        false,
        lines:              false,
        autoScroll:         true,
        store:              result_store,
        renderTo : _pos
    });
    
    return result_treePanel;
}

