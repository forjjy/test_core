package com.nkia.test_core.common;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;

import org.apache.tapestry5.StreamResponse;
import org.apache.tapestry5.services.Response;

public class JsonStreamResponse implements StreamResponse {
	private String source;

	public JsonStreamResponse(String source) {
		this.source = source;
	}

	public String getContentType() {
		return "text/json";
	}

	public InputStream getStream() throws IOException {
		ByteArrayInputStream stream = new ByteArrayInputStream(
				source.getBytes("UTF-8"));
		return stream;
	}

	public void prepareResponse(Response response) {
	}
}