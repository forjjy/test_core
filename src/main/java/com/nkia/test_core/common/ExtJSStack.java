package com.nkia.test_core.common;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.apache.tapestry5.Asset;
import org.apache.tapestry5.services.AssetSource;
import org.apache.tapestry5.services.javascript.JavaScriptStack;
import org.apache.tapestry5.services.javascript.StylesheetLink;

public class ExtJSStack implements JavaScriptStack {

	private final AssetSource assetSource;

	public ExtJSStack(final AssetSource assetSource) {
		this.assetSource = assetSource;
	}

	public String getInitialization() {
		return null;
	}

	public List<Asset> getJavaScriptLibraries() {
		List<Asset> ret = new ArrayList<Asset>();

		//ret.add(assetSource.getContextAsset("ExtJS/ext-all.js", null));
		//ret.add(assetSource.getContextAsset("js/cygnus/cygnus-component.js", null));
		ret.add(assetSource.getClasspathAsset("/com/nkia/test_core/assets/ExtJS/ext-all.js"));
		ret.add(assetSource.getClasspathAsset("/com/nkia/test_core/assets/js/cygnus/cygnus-component.js"));
		return ret;
	}

	public List<StylesheetLink> getStylesheets() {
		List<StylesheetLink> ret = new ArrayList<StylesheetLink>();

		//ret.add(new StylesheetLink(assetSource.getContextAsset("ExtJS/resources/css/ext-all.css", null)));
		ret.add(new StylesheetLink(assetSource.getClasspathAsset("/com/nkia/test_core/assets/ExtJS/resources/css/ext-all.css")));

		return ret;
	}

	public List<String> getStacks() {
		return Collections.emptyList();
	}

}
