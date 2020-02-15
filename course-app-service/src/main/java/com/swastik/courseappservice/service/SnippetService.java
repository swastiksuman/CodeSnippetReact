package com.swastik.courseappservice.service;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.swastik.courseappservice.entity.Snippet;
import com.swastik.courseappservice.repository.SnippetRepository;

@Service
public class SnippetService {
	
	@Autowired
	SnippetRepository snippetRepository;
	
	Logger logger = LoggerFactory.getLogger(SnippetService.class);
	
	public List<Snippet> getAllSnippets(){
		List<Snippet> listOfSnippets = new ArrayList<Snippet>();
		snippetRepository.findAll().forEach((data) -> {
			logger.debug(data.toString());
			listOfSnippets.add(data);
		});
		return listOfSnippets;
	}
	
	public Snippet saveSnippet(Snippet snippet) {
		return snippetRepository.save(snippet);
	}
}
