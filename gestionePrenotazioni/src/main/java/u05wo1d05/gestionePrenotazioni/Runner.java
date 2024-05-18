package u05wo1d05.gestionePrenotazioni;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import u05wo1d05.gestionePrenotazioni.enums.TipoPostazione;
import u05wo1d05.gestionePrenotazioni.model.*;
import u05wo1d05.gestionePrenotazioni.service.*;

import java.sql.Date;
import java.util.List;
import java.util.Scanner;

@SpringBootApplication
@ComponentScan(basePackages = "u05wo1d05.gestionePrenotazioni")
public class Runner implements CommandLineRunner {

    @Autowired
    private UtenteService utenteService;
    @Autowired
    private PostazioneService postazioneService;
    @Autowired
    private EdificioService edificioService;
    @Autowired
    private PrenotazioneService prenotazioneService;

    public static void main(String[] args) {
        SpringApplication.run(GestionePrenotazioniApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        Scanner scanner = new Scanner(System.in);
        while (true) {
            System.out.println("\nMenu:");
            System.out.println("--- CREAZIONE ENTITIES ---");
            System.out.println("1 - Crea utente");
            System.out.println("2 - Crea edificio");
            System.out.println("3 - Crea postazione");

            System.out.println("--------------------------");
            System.out.println("4 - Nuova prenotazione");
            System.out.println("10 - Cerca postazioni per Tipo e Città");
            System.out.println("--------------------------");
            System.out.println("--- ELENCO ENTITIES ---");
            System.out.println("5 - Elenco utenti");
            System.out.println("6 - Elenco postazioni");
            System.out.println("7 - Elenco edifici");
            System.out.println("8 - Elenco prenotazioni");
            System.out.println("--------------------------");
            System.out.println("9 - Uscita");

            System.out.print("Scegli un'opzione: ");
            int option = scanner.nextInt();

            switch (option) {
                case 1:
                    creaUtente(scanner);
                    break;
                case 2:
                    creaEdificio(scanner);
                    break;
                case 3:
                    creaPostazione(scanner);
                    break;
                case 4:
                    creaPrenotazione(scanner);
                    break;
                case 5:
                    elencaUtenti();
                    break;
                case 6:
                    elencaPostazioni();
                    break;
                case 7:
                    elencaEdifici();
                    break;
                case 8:
                    elencaPrenotazioni();
                    break;
                case 9:
                    System.out.println("Uscita dall'applicazione.");
                    scanner.close();
                    return;
                case 10:
                    cercaPostazioniPerTipoECitta();
                    break;
                default:
                    System.out.println("Opzione non valida. Prova di nuovo.");
            }
        }
    }


    private void creaUtente(Scanner scanner) {
        System.out.println("Creazione di un nuovo utente.");

        System.out.print("Inserisci username: ");
        String username = scanner.next();
        scanner.nextLine();
        System.out.print("Inserisci nome completo: ");
        String nomeCompleto = scanner.nextLine();
        System.out.print("Inserisci email: ");
        String email = scanner.next();
        scanner.nextLine();

        Utente nuovoUtente = new Utente();
        nuovoUtente.setUsername(username);
        nuovoUtente.setNomeCompleto(nomeCompleto);
        nuovoUtente.setEmail(email);

        utenteService.save(nuovoUtente);

        System.out.println("Utente creato con successo!");
    }

    private void creaPostazione(Scanner scanner) {
        System.out.println("Creazione di una nuova postazione.");

        System.out.print("Inserisci codice univoco: ");
        String codiceUnivoco = scanner.next();
        scanner.nextLine();

        System.out.print("Inserisci descrizione: ");
        String descrizione = scanner.nextLine();

        System.out.print("Inserisci tipo (PRIVATO, OPENSPACE, SALA RIUNIONI): ");
        String tipoString = scanner.nextLine().toLowerCase().replaceAll("\\s+", "");

        TipoPostazione tipo;
        if (tipoString.equals("privato")) {
            tipo = TipoPostazione.PRIVATO;
        } else if (tipoString.equals("openspace") || tipoString.equals("open_space") || tipoString.equals("open space")) {
            tipo = TipoPostazione.OPEN_SPACE;
        } else if (tipoString.equals("salariunioni") || tipoString.equals("sala_riunioni") || tipoString.equals("sala riunioni")) {
            tipo = TipoPostazione.SALA_RIUNIONI;
        } else {
            System.out.println("Tipo non valido. I tipi validi sono: PRIVATO, OPENSPACE, SALA RIUNIONI.");
            return;
        }

        System.out.print("Inserisci numero massimo occupanti: ");
        int numeroMassimoOccupanti = scanner.nextInt();

        System.out.println("Seleziona l'edificio per questa postazione:");
        elencaEdifici();
        System.out.print("Inserisci l'id dell'edificio: ");
        Long edificioId = scanner.nextLong();
        scanner.nextLine();


        Edificio edificio = edificioService.getById(edificioId);

        Postazione nuovaPostazione = new Postazione();
        nuovaPostazione.setCodiceUnivoco(codiceUnivoco);
        nuovaPostazione.setDescrizione(descrizione);
        nuovaPostazione.setTipo(tipo);
        nuovaPostazione.setNumeroMassimoOccupanti(numeroMassimoOccupanti);
        nuovaPostazione.setEdificio(edificio);

        postazioneService.save(nuovaPostazione);

        System.out.println("Postazione creata con successo!");
    }



    private void creaEdificio(Scanner scanner) {
        System.out.println("Creazione di un nuovo edificio.");

        scanner.nextLine();
        System.out.print("Inserisci nome dell'edificio: ");
        String nome = scanner.nextLine();
        System.out.print("Inserisci indirizzo: ");
        String indirizzo = scanner.nextLine();
        System.out.print("Inserisci città: ");
        String citta = scanner.nextLine();

        Edificio nuovoEdificio = new Edificio();
        nuovoEdificio.setNome(nome.toLowerCase());
        nuovoEdificio.setIndirizzo(indirizzo.toLowerCase());
        nuovoEdificio.setCitta(citta.toLowerCase());

        edificioService.save(nuovoEdificio);

        System.out.println("Edificio creato con successo!");
    }


    private void creaPrenotazione(Scanner scanner) {
        System.out.println("Creazione di una nuova prenotazione.");

        System.out.println("Seleziona l'utente:");
        elencaUtenti();
        System.out.print("Inserisci l'id dell'utente: ");
        Long utenteId = scanner.nextLong();
        scanner.nextLine();
        Utente utente = utenteService.getById(utenteId);

        System.out.println("Seleziona la postazione:");
        elencaPostazioni();
        System.out.print("Inserisci l'id della postazione: ");
        Long postazioneId = scanner.nextLong();
        scanner.nextLine();
        Postazione postazione = postazioneService.getById(postazioneId);

        System.out.print("Inserisci la data della prenotazione (yyyy-mm-dd): ");
        String dataString = scanner.next();
        scanner.nextLine();
        Date data = Date.valueOf(dataString);

        // l'utente ha già una prenotazione per questa data?
        boolean hasReservation = prenotazioneService.hasUserReservedPostationForDate(utente.getUsername(), data);
        if (hasReservation) {
            System.out.println("L'utente ha già una prenotazione per questa data.");
            return;
        }

        int maxOccupanti = postazione.getNumeroMassimoOccupanti();

        // la postazione ha già raggiunto il numero massimo di occupanti per questa data
        boolean isAvailable = postazioneService.isAvailableByDate(postazione.getId(), data, maxOccupanti);
        if (!isAvailable) {
            System.out.println("La postazione non è disponibile per questa data.");
            return;
        }

        Prenotazione nuovaPrenotazione = new Prenotazione();
        nuovaPrenotazione.setUtente(utente);
        nuovaPrenotazione.setPostazione(postazione);
        nuovaPrenotazione.setData(data);

        prenotazioneService.save(nuovaPrenotazione);

        System.out.println("Prenotazione creata con successo!");
    }



    private void elencaUtenti() {
        System.out.println("Elenco utenti:");
        utenteService.findAll().forEach(utente -> {
            System.out.println("ID: " + utente.getId() + ", Username: " + utente.getUsername() + ", Nome Completo: " + utente.getNomeCompleto() + ", Email: " + utente.getEmail());
        });
    }

    private void elencaPostazioni() {
        System.out.println("Elenco postazioni:");
        postazioneService.findAll().forEach(postazione -> {
            System.out.println("ID: " + postazione.getId() + ", Codice Univoco: " + postazione.getCodiceUnivoco() + ", Descrizione: " + postazione.getDescrizione() + ", Tipo: " + postazione.getTipo() + ", Numero Massimo Occupanti: " + postazione.getNumeroMassimoOccupanti() + ", Edificio: " + postazione.getEdificio().getNome());
        });
    }

    private void elencaEdifici() {
        System.out.println("Elenco edifici:");
        edificioService.findAll().forEach(edificio -> {
            System.out.println("ID: " + edificio.getId() + ", Nome: " + edificio.getNome() + ", Indirizzo: " + edificio.getIndirizzo() + ", Città: " + edificio.getCitta());
        });
    }

    private void elencaPrenotazioni() {
        System.out.println("Elenco prenotazioni:");
        prenotazioneService.findAll().forEach(prenotazione -> {
            System.out.println("ID: " + prenotazione.getId() + ", Utente: " + prenotazione.getUtente().getUsername() + ", Postazione: " + prenotazione.getPostazione().getCodiceUnivoco() + ", Data: " + prenotazione.getData());
        });
    }

    private void cercaPostazioniPerTipoECitta() {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Ricerca postazioni per tipo e città.");

        System.out.print("Inserisci il tipo di postazione (PRIVATO, OPEN_SPACE, SALA_RIUNIONI): ");
        String tipoString = scanner.nextLine().toLowerCase().replaceAll("\\s+", "");

        String tipo = null;
        switch (tipoString) {
            case "privato":
                tipo = "PRIVATO";
                break;
            case "openspace":
            case "open_space":
            case "open space":
                tipo = "OPEN_SPACE";
                break;
            case "salariunioni":
            case "sala_riunioni":
            case "sala riunioni":
                tipo = "SALA_RIUNIONI";
                break;
            default:
                System.out.println("Tipo non valido. I tipi validi sono: PRIVATO, OPEN_SPACE, SALA_RIUNIONI.");
                return;
        }

        System.out.print("Inserisci la città: ");
        String citta = scanner.nextLine();

        List<Postazione> postazioni = postazioneService.findPostazioniByTipoAndCitta(tipo, citta);

        if (postazioni.isEmpty()) {
            System.out.println("Non ci sono postazioni disponibili per il tipo '" + tipo + "' nella città '" + citta + "'.");
        } else {
            System.out.println("Postazioni trovate:");
            for (Postazione postazione : postazioni) {
                System.out.println("ID: " + postazione.getId() + ", Codice Univoco: " + postazione.getCodiceUnivoco() + ", Descrizione: " + postazione.getDescrizione() + ", Tipo: " + postazione.getTipo() + ", Numero Massimo Occupanti: " + postazione.getNumeroMassimoOccupanti() + ", Edificio: " + postazione.getEdificio().getNome());
            }
        }
    }



}






