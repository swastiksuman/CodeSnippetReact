package com.swastik.courseappservice.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="SNIPPET")
public class Snippet {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	public int id;
	
	public String type;
	
	public String snippet;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getSnippet() {
		return snippet;
	}

	public void setSnippet(String snippet) {
		this.snippet = snippet;
	}

	@Override
	public String toString() {
		return "Snippet [id=" + id + ", type=" + type + ", snippet=" + snippet + "]";
	}
	
}
