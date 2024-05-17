package u05wo1d05.gestionePrenotazioni.service;

import org.springframework.stereotype.Service;
import u05wo1d05.gestionePrenotazioni.model.Postazione;
import u05wo1d05.gestionePrenotazioni.repository.PostazioneRepository;
import org.springframework.beans.factory.annotation.Autowired;
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

    public boolean isAvailableByDate(Long postId, Date date) {
        return postazioneRepository.isAvailableByDate(postId, date);
    }
}
