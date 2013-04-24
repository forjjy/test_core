package com.nkia.test_core.services;

import java.util.Collections;
import java.util.List;

import org.apache.tapestry5.Asset;
import org.apache.tapestry5.ioc.Configuration;
import org.apache.tapestry5.ioc.MappedConfiguration;
import org.apache.tapestry5.ioc.annotations.Contribute;
import org.apache.tapestry5.services.LibraryMapping;
import org.apache.tapestry5.services.javascript.JavaScriptStack;
import org.apache.tapestry5.services.javascript.JavaScriptStackSource;
import org.apache.tapestry5.services.javascript.StylesheetLink;

import com.nkia.test_core.common.ExtJSStack;

public class InternalModule {
	public static void contributeComponentClassResolver(Configuration<LibraryMapping> configuration) {
		configuration.add(new LibraryMapping("test_core", "com.nkia.test_core"));
	}

	/*
	 * ExtJS javascript add
	 */
	@Contribute(JavaScriptStackSource.class)
	public static void addMyStack (MappedConfiguration<String, JavaScriptStack> configuration)
	{
		configuration.addInstance("ExtJSStack", ExtJSStack.class);
	}
	
	/*
	 * Tapestry core javascript remove
	 */
	public void contributeJavaScriptStackSource(MappedConfiguration<String,   
			JavaScriptStack> configuration) 
	{ 
        configuration.override("core", new JavaScriptStack(){        	
        	public String getInitialization() {
        		return null;
        	}
        	public List<Asset> getJavaScriptLibraries() {
        		return Collections.emptyList();
        	}
        	public List<StylesheetLink> getStylesheets() {
        		return Collections.emptyList();
        	}
        	public List<String> getStacks() {
        		return Collections.emptyList();
        	}
        }); 
	} 
}
