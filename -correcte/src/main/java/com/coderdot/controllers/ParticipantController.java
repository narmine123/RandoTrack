package com.coderdot.controllers;

import com.coderdot.entities.Participant;
import com.coderdot.services.ParticipantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/participants")
public class ParticipantController {

    @Autowired
    private ParticipantService participantService;

    @PostMapping("/native")
    public ResponseEntity<Void> createParticipantNative(@RequestBody Participant participant) {
        participantService.insertParticipantNative(participant);
        return ResponseEntity.ok().build();
    }

    @PostMapping
    public ResponseEntity<Participant> createParticipant(@RequestBody Participant participant) {
        Participant savedParticipant = participantService.saveParticipant(participant);
        return ResponseEntity.ok(savedParticipant); // Renvoie le participant sauvegardé
    }

}
