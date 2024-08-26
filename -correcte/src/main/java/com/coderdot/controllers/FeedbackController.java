package com.coderdot.controllers;

import com.coderdot.entities.Feedback;
import com.coderdot.repository.FeedbackRepository;
import com.coderdot.repository.FeedbackService;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/feedback")
public class FeedbackController {

    @Autowired
    private FeedbackRepository feedbackRepository;

    @PostMapping
    public ResponseEntity<String> submitFeedback(@RequestBody Feedback feedback) {
        feedbackRepository.save(feedback); // Enregistre le feedback dans la base de données
        return ResponseEntity.ok("Feedback reçu avec succès");
    }
}
