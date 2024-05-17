package u05wo1d05.gestionePrenotazioni.service;

import org.springframework.stereotype.Service;
import u05wo1d05.gestionePrenotazioni.model.Utente;
import u05wo1d05.gestionePrenotazioni.repository.UtenteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

@Service
public class UtenteService {

    @Autowired
    private UtenteRepository utenteRepository;

    public List<Utente> findAll() {
        return utenteRepository.findAll();
    }

    public Utente getById(Long id) {
        return utenteRepository.findById(id).orElseThrow(() -> new RuntimeException("Utente non trovato con id: " + id));
    }

    public Utente save(Utente utente) {
        return utenteRepository.save(utente);
    }

    public void delete(Long id) {
        utenteRepository.deleteById(id);
    }

    public Utente findByUsername(String username) {
        return utenteRepository.findByUsername(username);
    }
}
