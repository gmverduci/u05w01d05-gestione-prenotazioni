package u05wo1d05.gestionePrenotazioni.service;

import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;
import u05wo1d05.gestionePrenotazioni.enums.TipoPostazione;
import u05wo1d05.gestionePrenotazioni.model.*;
import u05wo1d05.gestionePrenotazioni.repository.PostazioneRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.security.InvalidParameterException;
import java.util.Date;
import java.util.List;

@Service
public class PostazioneService {

    @Autowired
    private PostazioneRepository postazioneRepository;

    public List<Postazione> findAll() {
        return postazioneRepository.findAll();
    }

    public Postazione getById(Long id) {
        return postazioneRepository.findById(id).orElseThrow(() -> new RuntimeException("Postazione non trovata con id: " + id));
    }

    public Postazione save(Postazione postazione) {
        return postazioneRepository.save(postazione);
    }

    public void delete(Long id) {
        postazioneRepository.deleteById(id);
    }

    @Transactional
    public boolean isAvailableByDate(Long postId, Date date, int maxOccupanti) {
//        Postazione postazione = postazioneRepository.findById(postId)
//                .orElseThrow(() -> new RuntimeException("Postazione non trovata con id: " + postId));

        // prenotaz. valide per la data x
//        long prenotazioniPerData = postazione.getPrenotazioni().stream()
//                .filter(prenotazione -> prenotazione.getData().equals(date))
//                .count();


        return postazioneRepository.isAvailableByDate(postId, date, maxOccupanti);
    }

    public List<Postazione> findPostazioniByTipoAndCitta(String tipo, String citta) {
        String tipoPostazione = tipo.toLowerCase();
        String cittaToCheck = citta.toLowerCase();
        return postazioneRepository.findByTipoAndCitta(tipoPostazione, cittaToCheck);
    }
}
