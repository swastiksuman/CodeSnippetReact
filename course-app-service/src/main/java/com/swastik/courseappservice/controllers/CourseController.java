package com.swastik.courseappservice.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.swastik.courseappservice.entity.Snippet;
import com.swastik.courseappservice.service.SnippetService;

@RestController
@CrossOrigin
public class CourseController {
	
	@Autowired
	SnippetService snippetService;
	
	@GetMapping("/getCourses")
	public List<Snippet> getAllCourse(){
		System.out.println("Got Hit");
		return snippetService.getAllSnippets();
	}
}
/*
INSERT INTO SNIPPET VALUES (1, 'C++', '#include stdio.h');
INSERT INTO SNIPPET VALUES (2, 'Java', 'public void');
INSERT INTO SNIPPET VALUES (3, 'Python', 'def ');
*/