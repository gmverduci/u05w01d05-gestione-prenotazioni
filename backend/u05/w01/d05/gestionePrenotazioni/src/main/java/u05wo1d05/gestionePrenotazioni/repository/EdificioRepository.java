package u05wo1d05.gestionePrenotazioni.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import u05wo1d05.gestionePrenotazioni.model.Edificio;

import java.util.List;
import java.util.Optional;

public interface EdificioRepository extends JpaRepository<Edificio, Long> {
    List<Edificio> findAll();

    Edificio save(Edificio edificio);

    void deleteById(Long id);
}