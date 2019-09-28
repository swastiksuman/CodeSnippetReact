package com.swastik.courseappservice.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.swastik.courseappservice.entity.Snippet;
import com.swastik.courseappservice.repository.SnippetRepository;

@Service
public class SnippetService {
	
	@Autowired
	SnippetRepository snippetRepository;
	
	public List<Snippet> getAllSnippets(){
		List<Snippet> listOfSnippets = new ArrayList<Snippet>();
		snippetRepository.findAll().forEach((data) -> {
			listOfSnippets.add(data);
		});
		return listOfSnippets;
	}
	
	public Snippet saveSnippet(Snippet snippet) {
		return snippetRepository.save(snippet);
	}
}
