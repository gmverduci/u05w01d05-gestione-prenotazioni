package u05wo1d05.gestionePrenotazioni.repository;

import org.springframework.data.repository.query.Param;
import u05wo1d05.gestionePrenotazioni.model.Prenotazione;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;
import java.util.List;

public interface PrenotazioneRepository extends JpaRepository<Prenotazione, Long> {
    List<Prenotazione> findAll();


    Prenotazione save(Prenotazione prenotazione);

    void deleteById(Long id);

    // controllo: utente prenota postazione: ha già una prenotazione per quella data?
    @Query("SELECT CASE WHEN COUNT(r) > 0 THEN true ELSE false END FROM Prenotazione r WHERE r.utente.username = :username AND r.data <= :date")
    boolean hasUserReservedPostationForDate(@Param("username") String username, @Param("date") Date date);
}
