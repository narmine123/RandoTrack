package com.coderdot.services;

import com.coderdot.entities.Participant;
import com.coderdot.repository.ParticipantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

// ParticipantService.java
@Service
public class ParticipantService {

    @Autowired
    private ParticipantRepository participantRepository;

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Transactional
    public Participant saveParticipant(Participant participant) {
        System.out.println("Saving participant: " + participant);
        return participantRepository.save(participant);
    }

    public void insertParticipantNative(Participant participant) {
        String sql = "INSERT INTO participant (weight, illness, nationality, age, email, phone) VALUES (?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, participant.getWeight(), participant.getIllness(), participant.getNationality(),
                participant.getAge(), participant.getEmail(), participant.getPhone());
    }

}
