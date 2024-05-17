package u05wo1d05.gestionePrenotazioni.repository;


import u05wo1d05.gestionePrenotazioni.model.Utente;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface UtenteRepository extends JpaRepository<Utente, Long> {
    List<Utente> findAll();

    Utente save(Utente utente);

    void deleteById(Long id);

    Utente findByUsername(String username);

}

