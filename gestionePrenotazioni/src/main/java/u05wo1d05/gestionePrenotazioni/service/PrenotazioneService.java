package u05wo1d05.gestionePrenotazioni.service;

import org.springframework.stereotype.Service;
import u05wo1d05.gestionePrenotazioni.model.Postazione;
import u05wo1d05.gestionePrenotazioni.model.Prenotazione;
import u05wo1d05.gestionePrenotazioni.repository.PrenotazioneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.Date;
import java.util.List;

@Service
public class PrenotazioneService {

    @Autowired
    private PrenotazioneRepository prenotazioneRepository;

    @Autowired
    private PostazioneService postazioneService;

    public List<Prenotazione> findAll() {
        return prenotazioneRepository.findAll();
    }

    public Prenotazione getById(Long id) {
        return prenotazioneRepository.findById(id).orElseThrow(() -> new RuntimeException("Prenotazione non trovata con id: " + id));
    }

    public Prenotazione save(Prenotazione prenotazione) {
        Prenotazione savedPrenotazione = prenotazioneRepository.save(prenotazione);
        Postazione postazione = savedPrenotazione.getPostazione();
        postazioneService.save(postazione);
        return savedPrenotazione;
    }

    public void delete(Long id) {
        prenotazioneRepository.deleteById(id);
    }

    public boolean hasUserReservedPostationForDate(String username, Date date) {
        return prenotazioneRepository.hasUserReservedPostationForDate(username, date);
    }


}
