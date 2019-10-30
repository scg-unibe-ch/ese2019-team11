# Report #2 (30.10.2019)

**Gemacht:**
* Abgleich der Eingabe beim Login funktioniert

**Zu tun:**
* Registrierung

  * Registrierung sollte eigenes Feld haben
  ```Already have an account? Sign in```
  * Am Besten sollte beim Klicken des Registrierungsknopfes
  eine eigene Fläche mit mehr Textfeldern erscheinen
  * Diese Informationen sollten dann in der Datenbank gespeichert werden
  * Benötigte Informationen wären:
    * Benutzername, Vor- und Nachname, E-Mail Addresse,
    Geburtsdatum, Passwort (2x, Überprüfung)

* Anpassen der Startseite
  * Startseite sollte nur Loginfelder enthalten
  * Erstes Feld sollte (siehe oben) Benutzername oder E-Mail akzeptieren
  * Zweites Feld weiterhin für Passwort

* Reibungsloser Fluss zwischen diesen Komponenten
  * Registrierungsknopfs führt bei Klick von Startseite zu Registrierung
  * Sinnvolle Fehlermeldungen (bsp. "Login fehlgeschlagen", "Leeres Feld bei Registrierung" etc.)
  * Falls all dies korrekt funktioniert, Übergang zu Dashbaord (Milestone 2)

**Milestone 2**

Nachdem das Eröffnen eines / das Einloggen in ein bereits existierendes Konto geklappt hat, sollte man zum Dashboard wechseln. Diese Seite dient der Navigation auf dem gesamten Portal und beinhaltet somit Panels für jegliche Kategorien:

* **Feed**  
Eine Timeline mit verschiedenen Beiträgen chronologisch angeordnet
  **(tiefe Priorität)**

* **Einstellungen**  
Möglichkeiten, Änderungen am Konto vorzunehmen **(tiefe Priorität)**

* **Dienste suchen**  
Datenbank von Diensten; in dieser nach gewissen Kriterien filtern und mit einem Lesezeichen markieren und auswählen **(hohe Priorität)**

* **Dienste anbieten**  
Datenbank von Diensten; eigene Angebote erstellen und diese in der Datenbank (nach Bestätigung) wiederfinden. **(hohe Priorität)**

* **Profil**  
Möglichkeiten das eigene Profil einzusehen **(mittlere Priorität)**
