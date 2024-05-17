package u05wo1d05.gestionePrenotazioni.service;

import org.springframework.stereotype.Service;
import u05wo1d05.gestionePrenotazioni.model.Edificio;
import u05wo1d05.gestionePrenotazioni.repository.EdificioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

@Service
public class EdificioService {

    @Autowired
    private EdificioRepository edificioRepository;

    public List<Edificio> findAll() {
        return edificioRepository.findAll();
    }

    public Edificio getById(Long id) {
        return edificioRepository.findById(id).orElseThrow(() -> new RuntimeException("Edificio non trovato con id: " + id));
    }

    public Edificio save(Edificio edificio) {
        return edificioRepository.save(edificio);
    }

    public void delete(Long id) {
        edificioRepository.deleteById(id);
    }
}
