# Web-ohjelmoinnin sovellusprojekti – Ilmastodatasovellus 

## Kuvaus:
   Tämä projektin tarkoituksena on luoda julkisessa internetissä
   toimiva ilmastonmuutokseen liittyvien tutkimustietojen 
   visualisointisovellus, jonka avulla
   käyttäjä voi luoda, muokata ja jakaa näkymiä. 
   Sovellukseen kirjaudutaan omilla tunnuksilla, jolloin käyttäjän tekemät muutokset tallentuvat tilille. 
    
##  Projektissa käytetyt teknologiat:  
   MySQL, JavaScript, Java, React, Postman, Chart.js, Node.js 
    
### Alkuperäiset vaatimukset: 
   Websivu toimii julkisessa internetissä, joten mitään ei tarvitse asentaa. Etusivulla käyttäjä voi rekisteröidä oman tilin sivustolle ja kirjautua sisään        käyttäjänimellä ja salasanalla (katso kuva 2.Kirjautumis-sivusto). Oman tilin voi milloin vain poistaa ja/tai luoda taas uuden.  

   Sisään kirjautunut käyttäjä voi selata ilmastonmuutoksen seurantaan liittyvää tutkimustietoa kaavoina ja luoda niistä omia näkymiä, jotka tallentuvat            kyseiselle käyttäjälle (katso kuva 3.Kaavioiden valikko). Näkymiä voi poistaa ja muokata sekä jakaa linkillä toisille. Lisäksi käyttäjä voi kirjoittaa          näkymien oheen muistiinpanoja, muuttaa sarakeasettelua sekä valita, mitä tietoja kaavioissa näytetään.
    
### Yhteenveto:
   Sivuston käyttäjä voi siirtyä aloitussivulta Charts-sivulle, jossa hän voi selata kaikkia kaavioita. Visualization creation-sivulta käyttäjä voi valita          yksittäisiä charts-kaavioita tarkasteltavaksi. Log out-painikkeesta käyttäjä palaa takaisin kirjautumissivulle.  
    
### Sovelluksen esittely:
    
![climate_kaavio (1)](https://user-images.githubusercontent.com/98741721/207832575-b926c238-d9bd-41ba-96e2-08d2bd5303dc.jpeg)
    Kuva 1. Sovelluksen käyttötapauskaavio 
    
![Login sivu](https://user-images.githubusercontent.com/98741721/207832810-cc014ae3-4c27-4254-a4fa-4e07e155116c.png)
    Kuva 2. Kirjautumis-sivusto 
    

![Charts valikko](https://user-images.githubusercontent.com/98741721/207832919-a93ec758-e60c-4602-a0b5-397dacdee798.png)
    Kuva 3. Kaavioiden valikko 
    
### Tekijät ja roolit:
   Janne Lalli – Rekisteröinnin backend sekä sivustojen ulkomuoto eli frontend, poissulkien kaavioiden sivut. 

   Anni Eno - Käyttäjäkohtaisen visualisointi näkymän luonti ja siihen liittyvien toiminnallisuuksien teko.
    
   Miia Järvenpää – MySQL-tietokannan rakenteen suunnittelu ja datasettien valmistelu, tutkimusdatojen haku tietokannasta ja kaavioiden piirtäminen (Chart.js).
    
   Tommi Hirvonen – Kirjautumisen backend.
   
### Projektin demovideo
   https://www.youtube.com/watch?v=YB3O_B3UULo
