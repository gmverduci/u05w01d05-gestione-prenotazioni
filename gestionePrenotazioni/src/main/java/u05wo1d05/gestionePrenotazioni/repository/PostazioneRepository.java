package u05wo1d05.gestionePrenotazioni.repository;

import org.springframework.data.repository.query.Param;
import u05wo1d05.gestionePrenotazioni.enums.TipoPostazione;
import u05wo1d05.gestionePrenotazioni.model.Postazione;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;
import java.util.List;

public interface PostazioneRepository extends JpaRepository<Postazione, Long> {
    List<Postazione> findAll();

    Postazione save(Postazione postazione);

    void deleteById(Long id);


    @Query("SELECT CASE WHEN COUNT(r) >= :maxOccupanti THEN false ELSE true END FROM Prenotazione r WHERE r.postazione.id = :postId AND r.data = :date")
    boolean isAvailableByDate(@Param("postId") Long postId, @Param("date") Date date, @Param("maxOccupanti") int maxOccupanti);


    @Query("SELECT p FROM Postazione p JOIN p.edificio e WHERE LOWER(p.tipo) = :tipo AND LOWER(e.citta) = :citta")
    List<Postazione> findByTipoAndCitta(@Param("tipo") String tipo, @Param("citta") String citta);


}
