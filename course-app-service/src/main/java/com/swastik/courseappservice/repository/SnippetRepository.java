package com.swastik.courseappservice.repository;

import org.springframework.data.repository.CrudRepository;

import com.swastik.courseappservice.entity.Snippet;

public interface SnippetRepository extends CrudRepository<Snippet, Integer>{

}
