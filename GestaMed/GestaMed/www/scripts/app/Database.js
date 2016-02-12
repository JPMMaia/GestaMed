function Database(filename) {
    this.initialize(filename);
}

Database.prototype.initialize = function (filename) {
    this.database = new PouchDB(filename);

    
};

Database.prototype.fillDatabase = function () {
    this.database.put(
        {
            "_id": "Isotretinoína",
            "Group": "Retinóides",
            "FDACategory": "X",
            "OtherInfo": "Utilizada no tratamento das formas graves de acne. Pertence ao grupo dos retinóides, sendo que 25% dos recém-nascidos sujeitos in utero a este tipo de fármacos apresenta um quadro malformativo que inclui defeitos do SNC (hidrocefalia, cegueira do nervo óptico, anomalidas da retina, microftalmia, defeitos na fossa posterior do córtex e cerebelo), defeitos craniofaciais (implantação baixa dos pavilhões auriculares, hipertelorismo, microcefalia, micrognatia, estenose do canal auditivo); defeitos cardiovasculares (transposição dos grandes vasos, Tetralogia de Fallot, defeitos septais), ectopia ou aplasia do timo, redução dos membros, hipotonia muscular, alterações do comportamento, etc. A isotretinoína tem efeitos teratogénicos comprovados. Mesmo nas crianças sem anomalias estruturais, o desempenho intelectual poderá ficar comprometido. O risco de malformações é irrelevante se a medicação oral for interrompida antes da concepção. O uso tópico de cremes contendo o fármaco apresenta risco teratogénico muito baixo. Deve ser usada contracepção eficaz durante pelo menos 1 mês antes do tratamento oral, durante o tratamento e pelo menos 1 mês após a suspensão."
        }
        );
};