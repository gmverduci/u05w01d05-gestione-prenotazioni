package u05wo1d05.gestionePrenotazioni.repository;

import org.springframework.data.repository.query.Param;
import u05wo1d05.gestionePrenotazioni.enums.TipoPostazione;
import u05wo1d05.gestionePrenotazioni.model.Postazione;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface PostazioneRepository extends JpaRepository<Postazione, Long> {
    List<Postazione> findAll();

    Postazione save(Postazione postazione);

    void deleteById(Long id);

    @Query("SELECT p FROM Postazione p WHERE p.tipo = :tipo AND p.numeroMassimoOccupanti >= (SELECT COUNT(r) FROM Prenotazione r WHERE r.postazione.id = p.id AND r.data <= :data)")
    List<Postazione> findAvailablePostationsByTypeAndDate(@Param("tipo") TipoPostazione tipo, @Param("data") Date data);

    @Query("SELECT CASE WHEN COUNT(r) > 0 THEN false ELSE true END FROM Prenotazione r WHERE r.postazione.id = :postId AND r.data <= :date")
    boolean isAvailableByDate(@Param("postId") Long postId, @Param("date") Date date);
}
