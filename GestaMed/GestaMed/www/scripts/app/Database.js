function Database(filename) {
    this.initialize(filename);
}

Database.prototype.initialize = function (filename) {
    this.database = new PouchDB(filename);
    this.fillDatabase();

    this.database.createIndex({
        index: {
            fields: ['_id']
        }
    }).then(function (result) {
        console.log(result);
    }).catch(function (err) {
        console.log(err);
    });
};
Database.prototype.searchDrug = function (searchDrug, successCallback, failCallback) {

    this.database.find({
        selector: { _id: searchDrug }
    }).then(function (result) {
        successCallback(result.docs);
    }).catch(function (err) {
        failCallback(err);
    });
};

Database.prototype.fillDatabase = function () {
    this.database.put(
        {
            "_id": "Isotretinoína",
            "Group": [ "Retinóides" ],
            "FDACategory": "X",
            "OtherInfo": "Utilizada no tratamento das formas graves de acne. Pertence ao grupo dos retinóides, sendo que 25% dos recém-nascidos sujeitos in utero a este tipo de fármacos apresenta um quadro malformativo que inclui defeitos do SNC (hidrocefalia, cegueira do nervo óptico, anomalidas da retina, microftalmia, defeitos na fossa posterior do córtex e cerebelo), defeitos craniofaciais (implantação baixa dos pavilhões auriculares, hipertelorismo, microcefalia, micrognatia, estenose do canal auditivo); defeitos cardiovasculares (transposição dos grandes vasos, Tetralogia de Fallot, defeitos septais), ectopia ou aplasia do timo, redução dos membros, hipotonia muscular, alterações do comportamento, etc. A isotretinoína tem efeitos teratogénicos comprovados. Mesmo nas crianças sem anomalias estruturais, o desempenho intelectual poderá ficar comprometido. O risco de malformações é irrelevante se a medicação oral for interrompida antes da concepção. O uso tópico de cremes contendo o fármaco apresenta risco teratogénico muito baixo. Deve ser usada contracepção eficaz durante pelo menos 1 mês antes do tratamento oral, durante o tratamento e pelo menos 1 mês após a suspensão."
        }
        );
    this.database.put(
        {
            "_id": "Etretinato",
            "Group": [ "Retinóides" ],
            "FDACategory": "X",
            "OtherInfo": "Utilizado no tratamento da psoríase. Pertence ao grupo dos retinóides, sendo que 25% dos recém-nascidos sujeitos in utero a este tipo de fármacos apresenta um quadro malformativo que inclui defeitos do SNC (hidrocefalia, cegueira do nervo óptico, anomalidas da retina, microftalmia, defeitos na fossa posterior do córtex e cerebelo), defeitos craniofaciais (implantação baixa dos pavilhões auriculares, hipertelorismo, microcefalia, micrognatia, estenose do canal auditivo); defeitos cardiovasculares (transposição dos grandes vasos, Tetralogia de Fallot, defeitos septais), ectopia ou aplasia do timo, redução dos membros, hipotonia muscular, alterações do comportamento, etc. Os efeitos teratogénicos podem ocorrer mesmo quando a terapêutica tenha sido interrompida muitos meses antes da concepção. É recomendado um intervalo mínimo de três anos, após o qual se deverá proceder a doseamentos dos níveis séricos do fármaco e dos seus metabólitos: a gravidez só deverá ser admitida se forem indetectáveis."
        }
        );
    this.database.put(
        {
            "_id": "Vitamina A / Retinoler",
            "Group": [ "Retinóides" ],
            "FDACategory": "C",
            "OtherInfo": "Os suplementos de vitamina A que eventualmente sejam administrados a mulheres grávidas nunca deverão ultrapassar as 10 000 UI/dia"
        }
        );
    this.database.put(
        {
            "_id": "Androgénio",
            "Group": [ "Hormonas" ],
            "FDACategory": "X",
            "OtherInfo": "A partir da 8ª semana pós-concepcional pode resultar na virilização dos genitais externos dos fetos do sexo feminino (clitorimegália e fusão dos pequenos lábios). Em relação aos progestagénios derivados da testosterona (etisterona, noretindrona, norgestrel, noretinodrel), que são utilizados em doses muito baixas como componente dos anti-conceptivos orais, os estudos realizados sobre a exposição do feto a estes medicamentos não demonstraram aumento de malformações genitais."
        }
        );
    this.database.put(
        {
            "_id": "Testosterona",
            "Group": [ "Hormonas" ],
            "FDACategory": "X",
            "OtherInfo": "A partir da 8ª semana pós-concepcional pode resultar na virilização dos genitais externos dos fetos do sexo feminino (clitorimegália e fusão dos pequenos lábios). Em relação aos progestagénios derivados da testosterona (etisterona, noretindrona, norgestrel, noretinodrel), que são utilizados em doses muito baixas como componente dos anti-conceptivos orais, os estudos realizados sobre a exposição do feto a estes medicamentos não demonstraram aumento de malformações genitais."
        }
        );
    this.database.put(
        {
            "_id": "Etisterona / Noretisterona",
            "Group": [ "Hormonas" ],
            "FDACategory": "D",
            "OtherInfo": "Os progestagénios derivados da testosterona (etisterona, noretindrona, norgestrel, noretinodrel),  são utilizados em doses muito baixas como componente dos anti-conceptivos orais. Os estudos realizados sobre a exposição do feto a estes medicamentos não demonstraram aumento de malformações genitais."
        }
        );
    this.database.put(
        {
            "_id": "Noretindrona",
            "Group": [ "Hormonas" ],
            "FDACategory": "D",
            "OtherInfo": "Os progestagénios derivados da testosterona (etisterona, noretindrona, norgestrel, noretinodrel),  são utilizados em doses muito baixas como componente dos anti-conceptivos orais. Os estudos realizados sobre a exposição do feto a estes medicamentos não demonstraram aumento de malformações genitais."
        }
        );
    this.database.put(
        {
            "_id": "Norgestrel",
            "Group": [ "Hormonas" ],
            "FDACategory": "D",
            "OtherInfo": "Os progestagénios derivados da testosterona (etisterona, noretindrona, norgestrel, noretinodrel),  são utilizados em doses muito baixas como componente dos anti-conceptivos orais. Os estudos realizados sobre a exposição do feto a estes medicamentos não demonstraram aumento de malformações genitais."
        }
        );
    this.database.put(
        {
            "_id": "Noretinodrel",
            "Group": [ "Hormonas" ],
            "FDACategory": "D",
            "OtherInfo": "Os progestagénios derivados da testosterona (etisterona, noretindrona, norgestrel, noretinodrel),  são utilizados em doses muito baixas como componente dos anti-conceptivos orais. Os estudos realizados sobre a exposição do feto a estes medicamentos não demonstraram aumento de malformações genitais."
        }
        );
    this.database.put(
        {
            "_id": "Danazol",
            "Group": [ "Hormonas" ],
            "FDACategory": "X",
            "OtherInfo": "Derivado da etisterona com ligeira atividade androgénica, utilizado na terapêutica da endometriose e de outras situações menos frequentes. Se administrado entre a 8ª e a 14ª semanas de gestação pode provocar anomalias semelhantes às induzidas pelos androgénios no feto feminino (virilização, pseudo-hermafroditismo). Não estão descritos efeitos sobre os fetos do sexo masculino."
        }
        );
    this.database.put(
        {
            "_id": "Dietilstilbestrol / DES",
            "Group": [ "Hormonas" ],
            "FDACategory": "X",
            "OtherInfo": "Estrogénio não-esteróide sintético, está associado ao aparecimento de carcinoma vaginal de células claras em mulheres que foram expostas ao fármaco durante a vida intra-uterina antes da 12ª semana; aumenta o risco de parto pré-termo, aborto espontâneo e gravidez actópica. Também os indivíduos do sexo masculino expostos ao DES na vida intra-uterina apresentam uma incidência aumentada de anomalias genitais (quistos do epidídimo, testículos hipotróficos, micropénis, etc.), mas sem diminuição da fertilidade."
        }
        );
    this.database.put(
        {
            "_id": "Varfarina",
            "Group": ["Anticoagulantes" ],
            "FDACategory": "D",
            "OtherInfo": "Derivado cumarínico antagonista da vitamina K, que atravessa facilmente a placenta. Quando administrado no primeiro trimestre da gravidez (entre a 6ª e 9ª semanas), para além do risco aumentado de aborto, provocam a característica embriopatia varfarínica em 15-25% dos fetos expostos. Esta embriopatia caracteriza-se por hipoplasia nasal (defeito no desenvolvimento do nariz) e rarefação das epífises (estes fármacos alteram a ligação do cálcio a diversas proteínas, provocando uma alteração no desenvolvimento ósseo), podendo também ocorrer outras anomalias (hipoplasia das extremidades, hidrocefalia, microcefalia, deficiente desenvolvimento fetal e pós-natal, convulsões, etc.) Quando usada durante os dois últimos trimestres da gravidez o risco decresce substancialmente, mas poderá ser responsável por hemorragias fetais causadoras de anomalias do SNC e do aparelho visual (cataratas), e mesmo de hemorragias internas graves com morte fetal. Assim, na profilaxia do tromboembolismo venoso a varfarina deve ser substituída pela heparina. No entanto, dado a heparina não ser tão eficaz como a varfarina na profilaxia do tromboembolismo arterial e na anticoagulação em mulheres com prótese das válvulas cardíacas ou doença mitral com fibrilhação, o risco de trombose pode ser maior do que o risco teratogénico, pelo que, nestas situações, poderá ser considerada a utilização dos anticoagulantes orais."
        }
        );
    this.database.put(
        {
            "_id": "Heparina",
            "Group": [ "Anticoagulantes" ],
            "FDACategory": "B",
            "OtherInfo": "Osteoporose materna após uso prolongado; os frascos multidose contêm álcool benzílico que os produtores recomendam dever evitar-se. É o anticoagulante de escolha se estiver indicado durante a gravidez."
        }
        );
    this.database.put(
        {
            "_id": "Aminopterina",
            "Group": [ "Antineoplásicos" ],
            "FDACategory": "X",
            "OtherInfo": "A maioria dos fármacos utilizados no tratamento das neoplasias têm efeitos teratogénicos. O risco é maior durante a fase de organogénese. A aminopterina e o metotrexato são antagonistas do ácido fólico, podendo provocar anomalias do crescimento, craniostose, hidrocefalia, hipertelorismo, micrognatismo, fenda palatina e anomalias dos membros - síndrome fetal da aminopterina. Esta constelação de malformações ocorreu em todos os fetos expostos à aminopterina e em três de 17 nados-vivos expostos ao metotrexato entre a 6ª e a 9ª semanas pós-conceptionais. A exposição fetal em fases avançadas da gestação é relativamente segura."
        }
        );
    this.database.put(
        {
            "_id": "Metotrexato",
            "Group": [ "Antineoplásicos" ],
            "FDACategory": "X",
            "OtherInfo": "A maioria dos fármacos utilizados no tratamento das neoplasias têm efeitos teratogénicos. O risco é maior durante a fase de organogénese. A aminopterina e o metotrexato são antagonistas do ácido fólico, podendo provocar anomalias do crescimento, craniostose, hidrocefalia, hipertelorismo, micrognatismo, fenda palatina e anomalias dos membros - síndrome fetal da aminopterina. Esta constelação de malformações ocorreu em todos os fetos expostos à aminopterina e em três de 17 nados-vivos expostos ao metotrexato entre a 6ª e a 9ª semanas pós-conceptionais. A exposição fetal em fases avançadas da gestação é relativamente segura."
        }
        );
    this.database.put(
        {
            "_id": "Ciclofosfamida",
            "Group": [ "Antineoplásicos" ],
            "FDACategory": "D",
            "OtherInfo": "Os agentes alquilantes (ciclofosfamida, clorambucil, busulfan) utilizados no tratamento de algumas leucemias e linfomas, bem como de outras neoplasias (ovário, mama), associam-se também ao aparecimento de mal-formações fetais, das quais a mais frequente é a ausência ou hipoplasia dos dedos das mãos e dos pés, adicionadas ou não a fenda palatina, defeitos oculares, imperfuração anal, atraso de crescimento, etc. Recomenda-se a contracepção eficaz durante pelo menos 3 meses após administração a homens ou mulheres. Os agentes alquilantes devem ser evitados durante o primeiro trimestre da gravidez mas, se tal for imprescindível, podem ser administrados nos dois últimos trimestres, dado ser muito baixo o risco destes fármacos induzirem anomalias fetais nesta fase da gestação. "
        }
        );
    this.database.put(
        {
            "_id": "Clorambucil",
            "Group": [ "Antineoplásicos" ],
            "FDACategory": "D",
            "OtherInfo": "Os agentes alquilantes (ciclofosfamida, clorambucil, busulfan) utilizados no tratamento de algumas leucemias e linfomas, bem como de outras neoplasias (ovário, mama), associam-se também ao aparecimento de mal-formações fetais, das quais a mais frequente é a ausência ou hipoplasia dos dedos das mãos e dos pés, adicionadas ou não a fenda palatina, defeitos oculares, imperfuração anal, atraso de crescimento, etc. Recomenda-se a contracepção eficaz durante pelo menos 3 meses após administração a homens ou mulheres. Os agentes alquilantes devem ser evitados durante o primeiro trimestre da gravidez mas, se tal for imprescindível, podem ser administrados nos dois últimos trimestres, dado ser muito baixo o risco destes fármacos induzirem anomalias fetais nesta fase da gestação. "
        }
        );
    this.database.put(
        {
            "_id": "Busulfan",
            "Group": ["Antineoplásicos"],
            "FDACategory": "D",
            "OtherInfo": "Os agentes alquilantes (ciclofosfamida, clorambucil, busulfan) utilizados no tratamento de algumas leucemias e linfomas, bem como de outras neoplasias (ovário, mama), associam-se também ao aparecimento de mal-formações fetais, das quais a mais frequente é a ausência ou hipoplasia dos dedos das mãos e dos pés, adicionadas ou não a fenda palatina, defeitos oculares, imperfuração anal, atraso de crescimento, etc. Recomenda-se a contracepção eficaz durante pelo menos 3 meses após administração a homens ou mulheres. Os agentes alquilantes devem ser evitados durante o primeiro trimestre da gravidez mas, se tal for imprescindível, podem ser administrados nos dois últimos trimestres, dado ser muito baixo o risco destes fármacos induzirem anomalias fetais nesta fase da gestação. "
        }
        );
    this.database.put(
        {
            "_id": "Fenitoína",
            "Group": ["Anticonvulsionantes","Antiepilépticos"],
            "FDACategory": "D",
            "OtherInfo": "A maioria dos fármacos utilizados no tratamento da epilepsia têm sido associados a malformações fetais (cerca do triplo do verificado na população geral). O risco está aumentado com a utilização simultânea de dois ou mais anticonvulsionantes, pelo que a monoterapia deve ser a regra, mantendo-se as doses ao mais baixo nível capaz de evitar as convulsões. Particularmente no que se refere aos fármacos do grupo da hidantoína (fenitoína, etotoína, mefenitoína e outros) está descrito um conjunto de anomalias denominado síndrome fetal da hidantoína, caracterizado por anomalias craniofaciais (lábio leporino/fenda palatina, hipertelorismo e alargamento da raiz nasal), hipoplasia das falanges distais e das unhas, crescimento deficiente e défice cognitivo). Se possível, substituir por etusoximida no primeiro trimestre da gravidez."
        }
        );
    this.database.put(
        {
            "_id": "Etotoína",
            "Group": ["Anticonvulsionantes","Antiepilépticos"],
            "FDACategory": "D",
            "OtherInfo": "A maioria dos fármacos utilizados no tratamento da epilepsia têm sido associados a malformações fetais (cerca do triplo do verificado na população geral). O risco está aumentado com a utilização simultânea de dois ou mais anticonvulsionantes, pelo que a monoterapia deve ser a regra, mantendo-se as doses ao mais baixo nível capaz de evitar as convulsões. Particularmente no que se refere aos fármacos do grupo da hidantoína (fenitoína, etotoína, mefenitoína e outros) está descrito um conjunto de anomalias denominado síndrome fetal da hidantoína, caracterizado por anomalias craniofaciais (lábio leporino/fenda palatina, hipertelorismo e alargamento da raiz nasal), hipoplasia das falanges distais e das unhas, crescimento deficiente e défice cognitivo)."
        }
        );
    this.database.put(
        {
            "_id": "Mefenitoína",
            "Group": ["Anticonvulsionantes","Antiepilépticos"],
            "FDACategory": "D",
            "OtherInfo": "A maioria dos fármacos utilizados no tratamento da epilepsia têm sido associados a malformações fetais (cerca do triplo do verificado na população geral). O risco está aumentado com a utilização simultânea de dois ou mais anticonvulsionantes, pelo que a monoterapia deve ser a regra, mantendo-se as doses ao mais baixo nível capaz de evitar as convulsões. Particularmente no que se refere aos fármacos do grupo da hidantoína (fenitoína, etotoína, mefenitoína e outros) está descrito um conjunto de anomalias denominado síndrome fetal da hidantoína, caracterizado por anomalias craniofaciais (lábio leporino/fenda palatina, hipertelorismo e alargamento da raiz nasal), hipoplasia das falanges distais e das unhas, crescimento deficiente e défice cognitivo). Se possível, substituir por etusoximida no primeiro trimestre da gravidez."
        }
        );
    this.database.put(
        {
            "_id": "Hidantoínas",
            "Group": ["Anticonvulsionantes","Antiepilépticos"],
            "FDACategory": "D",
            "OtherInfo": "A maioria dos fármacos utilizados no tratamento da epilepsia têm sido associados a malformações fetais (cerca do triplo do verificado na população geral). O risco está aumentado com a utilização simultânea de dois ou mais anticonvulsionantes, pelo que a monoterapia deve ser a regra, mantendo-se as doses ao mais baixo nível capaz de evitar as convulsões. Particularmente no que se refere aos fármacos do grupo da hidantoína (fenitoína, etotoína, mefenitoína e outros) está descrito um conjunto de anomalias denominado síndrome fetal da hidantoína, caracterizado por anomalias craniofaciais (lábio leporino/fenda palatina, hipertelorismo e alargamento da raiz nasal), hipoplasia das falanges distais e das unhas, crescimento deficiente e défice cognitivo)."
        }
        );
    this.database.put(
        {
            "_id": "Dionas",
            "Group": ["Anticonvulsionantes","Antiepilépticos"],
            "FDACategory": "D",
            "OtherInfo": "A maioria dos fármacos utilizados no tratamento da epilepsia têm sido associados a malformações fetais (cerca do triplo do verificado na população geral). O risco está aumentado com a utilização simultânea de dois ou mais anticonvulsionantes, pelo que a monoterapia deve ser a regra, mantendo-se as doses ao mais baixo nível capaz de evitar as convulsões. O grupo das dionas (parametadiona e trimetadiona) provoca um síndrome análogo ao síndrome fetal da hidantoína (pesquisar 'Hidantoínas'). Se possível, substituir por etusoximida no primeiro trimestre da gravidez."
        }
        );
    this.database.put(
        {
            "_id": "Parametadiona",
            "Group": ["Anticonvulsionantes","Antiepilépticos"],
            "FDACategory": "D",
            "OtherInfo": "A maioria dos fármacos utilizados no tratamento da epilepsia têm sido associados a malformações fetais (cerca do triplo do verificado na população geral). O risco está aumentado com a utilização simultânea de dois ou mais anticonvulsionantes, pelo que a monoterapia deve ser a regra, mantendo-se as doses ao mais baixo nível capaz de evitar as convulsões. O grupo das dionas (parametadiona e trimetadiona) provoca um síndrome análogo ao síndrome fetal da hidantoína (pesquisar 'Hidantoínas')."
        }
        );
    this.database.put(
        {
            "_id": "Trimetadiona",
            "Group": ["Anticonvulsionantes","Antiepilépticos"],
            "FDACategory": "D",
            "OtherInfo": "A maioria dos fármacos utilizados no tratamento da epilepsia têm sido associados a malformações fetais (cerca do triplo do verificado na população geral). O risco está aumentado com a utilização simultânea de dois ou mais anticonvulsionantes, pelo que a monoterapia deve ser a regra, mantendo-se as doses ao mais baixo nível capaz de evitar as convulsões. O grupo das dionas (parametadiona e trimetadiona) provoca um síndrome análogo ao síndrome fetal da hidantoína (pesquisar \"Hidantoínas\"). Se possível, substituir por etusoximida no primeiro trimestre da gravidez."
        }
        );
    this.database.put(
        {
            "_id": "Ácido Valpróico / Valproato de Sódio",
            "Group": ["Anticonvulsionantes","Antiepilépticos"],
            "FDACategory": "D",
            "OtherInfo": "O ácido valpróico/valproato de sódio é um anticonvulsionante utilizado com muita frequência no tratamento do pequeno mal epiléptico, está associado a um maior risco de malformações do Sistema Nervoso Central (nomeadamente espinha bífida/mielomeningocelo) e malformações craniofaciais e dos membros. O diagnóstico precoce destas anomalias pode ser feito por ecografia (Transparência da Nuca aumentada às 11-14 semanas, malformações do SNC às 18-22 semanas). As crianças expostas durante a gestação ao ácido valpróico têm taxas de mortalidade infantil e de défice de desenvolvimento aumentadas."
        }
        );
    this.database.put(
        {
            "_id": "Carbamazepina",
            "Group": ["Anticonvulsionantes","Antiepilépticos"],
            "FDACategory": "D",
            "OtherInfo": "A carbamazepina é um anticonvulsionante que apresenta risco teratogénico nas primeiras três semanas pós-concepção, não se observando quando a exposição é posterior. Foram associadas ao fármaco malformações do sistema nervoso central (espinha bífida/mielomeningocelo), anomalias cardiovasculares, do aparelho urinário e fenda palatina. As doentes devem ser alertadas para estes riscos potenciais, mas a medicação não deve ser suspensa se for imprescindível para a profilaxia das convulsões. Se possível, substituir por etusoximida no primeiro trimestre da gravidez. Se possível, substituir por etusoximida no primeiro trimestre da gravidez."
        }
        );
    this.database.put(
        {
            "_id": "Fensuximida",
            "Group": ["Anticonvulsionantes","Antiepilépticos"],
            "FDACategory": "D",
            "OtherInfo": "Evitar. Se possível, substituir por etusoximida no primeiro trimestre da gravidez."
        }
        );
    this.database.put(
        {
            "_id": "Fenobarbital",
            "Group": ["Anticonvulsionantes","Antiepilépticos", "Sedativos"],
            "FDACategory": "D",
            "OtherInfo": "Os barbituratos (fenobarbital, primidona) foram associados a malformações do Sistema Nervoso Central (espinha bífida, mielomeningocelo), anomalias cardiovasculares e do trato urinário), embora a incidência dessas malformações não está determinada. Se possível, substituir por etusoximida no primeiro trimestre da gravidez."
        }
        );
    this.database.put(
        {
            "_id": "Primidona",
            "Group": ["Anticonvulsionantes","Antiepilépticos"],
            "FDACategory": "D",
            "OtherInfo": "Os barbituratos (fenobarbital, primidona) foram associados a malformações do Sistema Nervoso Central (espinha bífida, mielomeningocelo), anomalias cardiovasculares e do trato urinário), embora a incidência dessas malformações não está determinada. Se possível, substituir por etusoximida no primeiro trimestre da gravidez."
        }
        );
    this.database.put(
        {
            "_id": "Vigabatrina",
            "Group": ["Anticonvulsionantes","Antiepilépticos"],
            "FDACategory": "D",
            "OtherInfo": "Malformações congénitas em 14,5% das gravidezes expostas (abortos espontâneos); só deve ser usado durante a gravidez se for absolutamente necessário; pode reduzir o fluxo sanguíneo uterino com hipoxia fetal. Se possível, substituir por etusoximida no primeiro trimestre da gravidez."
        }
        );
    this.database.put(
        {
            "_id": "Lamotrigine",
            "Group": ["Anticonvulsionantes","Antiepilépticos"],
            "FDACategory": "C",
            "OtherInfo": "Evitar, a menos que o benefício potencial seja superior aos riscos; toxicidade em estudos animais e não existem estudos na grávida. Se possível, substituir por etusoximida no primeiro trimestre da gravidez."
        }
        );
    this.database.put(
        {
            "_id": "Topiramato",
            "Group": ["Anticonvulsionantes","Antiepilépticos"],
            "FDACategory": "D",
            "OtherInfo": "Evitar, a menos que o benefício potencial seja superior aos riscos; toxicidade em estudos animais e não existem estudos na grávida. Se possível, substituir por etusoximida no primeiro trimestre da gravidez."
        }
        );
    this.database.put(
        {
            "_id": "Gabapentina",
            "Group": ["Anticonvulsionantes","Antiepilépticos"],
            "FDACategory": "C",
            "OtherInfo": "Atraso no crescimento fetal em animais; a falta de dados não permite uma conclusão acerca da segurança da gabapentina durante a gravidez; só deve ser usada durante a gravidez quando os potenciais benefícios justificam os riscos potenciais para o feto. Se possível, substituir por etusoximida no primeiro trimestre da gravidez."
        }
        );
    this.database.put(
        {
            "_id": "Levetiracetam",
            "Group": ["Anticonvulsionantes","Antiepilépticos"],
            "FDACategory": "C",
            "OtherInfo": "Toxicidade em estudos animais; evitar. Se possível, substituir por etusoximida no primeiro trimestre da gravidez."
        }
        );
    this.database.put(
        {
            "_id": "Etosuximida",
            "Group": ["Anticonvulsionantes","Antiepilépticos"],
            "FDACategory": "A",
            "OtherInfo": "Os dados disponíveis indicam que não tem quaisquer efeitos lesivos para o embrião e feto, pelo que é considerado o anticonvulsionante de escolha para o pequeno mal durante o primeiro trimestre da gravidez. Se possível, substituir por etusoximida no primeiro trimestre da gravidez."
        }
        );
    this.database.put(
        {
            "_id": "Clonazepam",
            "Group": ["Anticonvulsionantes","Antiepilépticos","Benzodiazepinas"],
            "FDACategory": "D",
            "OtherInfo": "Toxicidade em estudos animais; evitar. Se possível, substituir por etusoximida no primeiro trimestre da gravidez. Se possível, substituir por etusoximida no primeiro trimestre da gravidez."
        }
        );
    this.database.put(
        {
            "_id": "Oxcarbazepina",
            "Group": ["Anticonvulsionantes","Antiepilépticos"],
            "FDACategory": "D",
            "OtherInfo": "Risco de teratogenecidade, incluindo alterações do tubo neural. Se possível, substituir por etusoximida no primeiro trimestre da gravidez."
        }
        );
    this.database.put(
        {
            "_id": "Tetraciclina",
            "Group": ["Antibióticos"],
            "FDACategory": "D",
            "OtherInfo": "As tetraciclinas são o único grupo de antibacterianos com efeitos bem demonstrados sobre o feto, no qual provocam uma coloração amarelado-acastanhado dos dentes da primeira dentição; os dentes são altamente susceptíveis à cárie e apresentam hipoplasia do esmalte. Não estão identificadas anomalias da dentição definitiva ou de outros órgãos."
        }
        );
    this.database.put(
        {
            "_id": "Estreptomicina",
            "Group": ["Antibióticos"],
            "FDACategory": "D",
            "OtherInfo": "Os aminoglicosídeos atingem concentrações fetais significativas. A estreptomicina e a kanamicina (ambas da categoria D) podem afetar o VIII par craniano (nervo vestibulo-coclear), com perda total ou parcial da acuidade auditiva."
    }
    );
this.database.put(
    {
        "_id": "Ribavirina",
        "Group": ["Antivirais"],
        "FDACategory": "X",
        "OtherInfo": "A ribavirina, administrada em nebulizações para tratar infeções respiratórias pelo vírus sincicial respiratório em crianças, tem importantes efeitos teratogénicos nos roedores. Por não ter sido testada na espécie humana, considera-se o seu uso formalmente contra-indicado durante a gestação, devendo ter-se o cuidado de as grávidas não contactarem de perto com o ambiente onde são administrados os aerossóis. Também é recomendado que, quando qualquer um dos membros do casal tiver sido tratado com ribavirina, a gravidez seja diferida por seis meses após o final do tratamento. É recomendado que, quando um dos membros do casal tiver sido tratado com ribavirina, a gravidez seja diferida por seis meses após o final do tratamento. "
    }
    );
this.database.put(
    {
        "_id": "Quinino",
        "Group": ["Antiparasitários"],
        "FDACategory": "D",
        "OtherInfo": "Altas doses de quinino podem provocar o aborto. Contudo, o quinino pode ser administrado em mulheres com quadros graves de malária devida a plasmódio falciparum resistente à cloroquina."
    }
    );
this.database.put(
    {
        "_id": "Penicilina",
        "Group": ["Antibióticos"],
        "FDACategory": "B",
        "OtherInfo": "A penicilina e os seus derivados semi-sintéticos atravessam facilmente a barreira placentária, atingindo níveis séricos fetais aproximados dos maternos. Os efeitos fetais da penicilina, ampicilina e amoxicilina têm sido bastante estudados, podendo considerar-se a sua administração completamente segura. É muito improvável que os derivados da penicilina de desenvolvimento mais recente, bem como associações com inibidores da β-lactamase (ácido clavulânico, por exemplo), comportem riscos significativos."
    }
    );
this.database.put(
    {
        "_id": "Amoxicilina",
        "Group": ["Antibióticos"],
        "FDACategory": "B",
        "OtherInfo": "A penicilina e os seus derivados semi-sintéticos atravessam facilmente a barreira placentária, atingindo níveis séricos fetais aproximados dos maternos. Os efeitos fetais da penicilina, ampicilina e amoxicilina têm sido bastante estudados, podendo considerar-se a sua administração completamente segura. É muito improvável que os derivados da penicilina de desenvolvimento mais recente, bem como associações com inibidores da β-lactamase (ácido clavulânico, por exemplo), comportem riscos significativos."
    }
    );
this.database.put(
    {
        "_id": "Ampicilina",
        "Group": ["Antibióticos"],
        "FDACategory": "B",
        "OtherInfo": "A penicilina e os seus derivados semi-sintéticos atravessam facilmente a barreira placentária, atingindo níveis séricos fetais aproximados dos maternos. Os efeitos fetais da penicilina, ampicilina e amoxicilina têm sido bastante estudados, podendo considerar-se a sua administração completamente segura. É muito improvável que os derivados da penicilina de desenvolvimento mais recente, bem como associações com inibidores da β-lactamase (ácido clavulânico, por exemplo), comportem riscos significativos."
    }
    );
this.database.put(
    {
        "_id": "Cefalosporinas",
        "Group": ["Antibióticos"],
        "FDACategory": "C",
        "OtherInfo": "As cefalosporinas atingem elevadas concentrações no feto e têm sido largamente usadas na gravidez sem se ter verificado aumento de efeitos adversos. As cefalosporinas de segunda e terceira geração em cuja molécula existe uma cadeia lateral de N-metiltioterazol (MTT) podem produzir hipoplasia testicular em animais de laboratório, mas esse efeito não foi observado no homem. A cefoxitina, ceftriaxone, cefalotina, cefalexina e cefradina pertencem todas à categoria B."
    }
    );
this.database.put(
    {
        "_id": "Cefazolina",
        "Group": ["Antibióticos"],
        "FDACategory": "B",
        "OtherInfo": "As cefalosporinas atingem elevadas concentrações no feto e têm sido largamente usadas na gravidez sem se ter verificado aumento de efeitos adversos."
    }
    );
this.database.put(
    {
        "_id": "Cefalotina",
        "Group": ["Antibióticos"],
        "FDACategory": "B",
        "OtherInfo": "As cefalosporinas atingem elevadas concentrações no feto e têm sido largamente usadas na gravidez sem se ter verificado aumento de efeitos adversos."
    }
    );
this.database.put(
    {
        "_id": "Cefapirina",
        "Group": ["Antibióticos"],
        "FDACategory": "B",
        "OtherInfo": "As cefalosporinas atingem elevadas concentrações no feto e têm sido largamente usadas na gravidez sem se ter verificado aumento de efeitos adversos."
    }
    );
this.database.put(
    {
        "_id": "Cefalexina",
        "Group": ["Antibióticos"],
        "FDACategory": "B",
        "OtherInfo": "As cefalosporinas atingem elevadas concentrações no feto e têm sido largamente usadas na gravidez sem se ter verificado aumento de efeitos adversos."
    }
    );
this.database.put(
    {
        "_id": "Cefradina",
        "Group": ["Antibióticos"],
        "FDACategory": "B",
        "OtherInfo": "As cefalosporinas atingem elevadas concentrações no feto e têm sido largamente usadas na gravidez sem se ter verificado aumento de efeitos adversos. "
    }
    );
this.database.put(
    {
        "_id": "Cefadroxil",
        "Group": ["Antibióticos"],
        "FDACategory": "B",
        "OtherInfo": "As cefalosporinas atingem elevadas concentrações no feto e têm sido largamente usadas na gravidez sem se ter verificado aumento de efeitos adversos. As cefalosporinas de segunda e terceira geração em cuja molécula existe uma cadeia lateral de N-metiltioterazol (MTT) podem produzir hipoplasia testicular em animais de laboratório, mas esse efeito não foi observado no homem."
    }
    );
this.database.put(
    {
        "_id": "Cefamandol",
        "Group": ["Antibióticos"],
        "FDACategory": "C",
        "OtherInfo": "As cefalosporinas atingem elevadas concentrações no feto e têm sido largamente usadas na gravidez sem se ter verificado aumento de efeitos adversos. As cefalosporinas de segunda e terceira geração em cuja molécula existe uma cadeia lateral de N-metiltioterazol (MTT) podem produzir hipoplasia testicular em animais de laboratório, mas esse efeito não foi observado no homem."
    }
    );
this.database.put(
    {
        "_id": "Cefuroxima",
        "Group": ["Antibióticos"],
        "FDACategory": "C",
        "OtherInfo": "As cefalosporinas atingem elevadas concentrações no feto e têm sido largamente usadas na gravidez sem se ter verificado aumento de efeitos adversos. As cefalosporinas de segunda e terceira geração em cuja molécula existe uma cadeia lateral de N-metiltioterazol (MTT) podem produzir hipoplasia testicular em animais de laboratório, mas esse efeito não foi observado no homem."
    }
    );
this.database.put(
    {
        "_id": "Cefonicide",
        "Group": ["Antibióticos"],
        "FDACategory": "C",
        "OtherInfo": "As cefalosporinas atingem elevadas concentrações no feto e têm sido largamente usadas na gravidez sem se ter verificado aumento de efeitos adversos. As cefalosporinas de segunda e terceira geração em cuja molécula existe uma cadeia lateral de N-metiltioterazol (MTT) podem produzir hipoplasia testicular em animais de laboratório, mas esse efeito não foi observado no homem."
    }
    );
this.database.put(
    {
        "_id": "Ceforanide",
        "Group": ["Antibióticos"],
        "FDACategory": "C",
        "OtherInfo": "As cefalosporinas atingem elevadas concentrações no feto e têm sido largamente usadas na gravidez sem se ter verificado aumento de efeitos adversos. As cefalosporinas de segunda e terceira geração em cuja molécula existe uma cadeia lateral de N-metiltioterazol (MTT) podem produzir hipoplasia testicular em animais de laboratório, mas esse efeito não foi observado no homem."
    }
    );
this.database.put(
    {
        "_id": "Cefaclor",
        "Group": ["Antibióticos"],
        "FDACategory": "C",
        "OtherInfo": "As cefalosporinas atingem elevadas concentrações no feto e têm sido largamente usadas na gravidez sem se ter verificado aumento de efeitos adversos. As cefalosporinas de segunda e terceira geração em cuja molécula existe uma cadeia lateral de N-metiltioterazol (MTT) podem produzir hipoplasia testicular em animais de laboratório, mas esse efeito não foi observado no homem."
    }
    );
this.database.put(
    {
        "_id": "Cefprozil",
        "Group": ["Antibióticos"],
        "FDACategory": "C",
        "OtherInfo": "As cefalosporinas atingem elevadas concentrações no feto e têm sido largamente usadas na gravidez sem se ter verificado aumento de efeitos adversos. As cefalosporinas de segunda e terceira geração em cuja molécula existe uma cadeia lateral de N-metiltioterazol (MTT) podem produzir hipoplasia testicular em animais de laboratório, mas esse efeito não foi observado no homem."
    }
    );
this.database.put(
    {
        "_id": "Loracarbefe",
        "Group": ["Antibióticos"],
        "FDACategory": "C",
        "OtherInfo": "As cefalosporinas atingem elevadas concentrações no feto e têm sido largamente usadas na gravidez sem se ter verificado aumento de efeitos adversos. As cefalosporinas de segunda e terceira geração em cuja molécula existe uma cadeia lateral de N-metiltioterazol (MTT) podem produzir hipoplasia testicular em animais de laboratório, mas esse efeito não foi observado no homem."
    }
    );
this.database.put(
    {
        "_id": "Cefpodoxime",
        "Group": ["Antibióticos"],
        "FDACategory": "C",
        "OtherInfo": "As cefalosporinas atingem elevadas concentrações no feto e têm sido largamente usadas na gravidez sem se ter verificado aumento de efeitos adversos. As cefalosporinas de segunda e terceira geração em cuja molécula existe uma cadeia lateral de N-metiltioterazol (MTT) podem produzir hipoplasia testicular em animais de laboratório, mas esse efeito não foi observado no homem."
    }
    );
this.database.put(
    {
        "_id": "Cefotetam",
        "Group": ["Antibióticos"],
        "FDACategory": "C",
        "OtherInfo": "As cefalosporinas atingem elevadas concentrações no feto e têm sido largamente usadas na gravidez sem se ter verificado aumento de efeitos adversos. As cefalosporinas de segunda e terceira geração em cuja molécula existe uma cadeia lateral de N-metiltioterazol (MTT) podem produzir hipoplasia testicular em animais de laboratório, mas esse efeito não foi observado no homem."
    }
    );
this.database.put(
    {
        "_id": "Ceftriaxona",
        "Group": ["Antibióticos"],
        "FDACategory": "B",
        "OtherInfo": "As cefalosporinas atingem elevadas concentrações no feto e têm sido largamente usadas na gravidez sem se ter verificado aumento de efeitos adversos. As cefalosporinas de segunda e terceira geração em cuja molécula existe uma cadeia lateral de N-metiltioterazol (MTT) podem produzir hipoplasia testicular em animais de laboratório, mas esse efeito não foi observado no homem."
    }
    );
this.database.put(
    {
        "_id": "Cefotaxima",
        "Group": ["Antibióticos"],
        "FDACategory": "C",
        "OtherInfo": "As cefalosporinas atingem elevadas concentrações no feto e têm sido largamente usadas na gravidez sem se ter verificado aumento de efeitos adversos. As cefalosporinas de segunda e terceira geração em cuja molécula existe uma cadeia lateral de N-metiltioterazol (MTT) podem produzir hipoplasia testicular em animais de laboratório, mas esse efeito não foi observado no homem."
    }
    );
this.database.put(
    {
        "_id": "Ceftizoxima",
        "Group": ["Antibióticos"],
        "FDACategory": "C",
        "OtherInfo": "As cefalosporinas atingem elevadas concentrações no feto e têm sido largamente usadas na gravidez sem se ter verificado aumento de efeitos adversos. As cefalosporinas de segunda e terceira geração em cuja molécula existe uma cadeia lateral de N-metiltioterazol (MTT) podem produzir hipoplasia testicular em animais de laboratório, mas esse efeito não foi observado no homem."
    }
    );
this.database.put(
    {
        "_id": "Ceftazidima",
        "Group": ["Antibióticos"],
        "FDACategory": "C",
        "OtherInfo": "As cefalosporinas atingem elevadas concentrações no feto e têm sido largamente usadas na gravidez sem se ter verificado aumento de efeitos adversos. As cefalosporinas de segunda e terceira geração em cuja molécula existe uma cadeia lateral de N-metiltioterazol (MTT) podem produzir hipoplasia testicular em animais de laboratório, mas esse efeito não foi observado no homem."
    }
    );
this.database.put(
    {
        "_id": "Cefoperazona",
        "Group": ["Antibióticos"],
        "FDACategory": "C",
        "OtherInfo": "As cefalosporinas atingem elevadas concentrações no feto e têm sido largamente usadas na gravidez sem se ter verificado aumento de efeitos adversos. As cefalosporinas de segunda e terceira geração em cuja molécula existe uma cadeia lateral de N-metiltioterazol (MTT) podem produzir hipoplasia testicular em animais de laboratório, mas esse efeito não foi observado no homem."
    }
    );
this.database.put(
    {
        "_id": "Ceftibuteno",
        "Group": ["Antibióticos"],
        "FDACategory": "C",
        "OtherInfo": "As cefalosporinas atingem elevadas concentrações no feto e têm sido largamente usadas na gravidez sem se ter verificado aumento de efeitos adversos. As cefalosporinas de segunda e terceira geração em cuja molécula existe uma cadeia lateral de N-metiltioterazol (MTT) podem produzir hipoplasia testicular em animais de laboratório, mas esse efeito não foi observado no homem."
    }
    );
this.database.put(
    {
        "_id": "Cefixima",
        "Group": ["Antibióticos"],
        "FDACategory": "C",
        "OtherInfo": "As cefalosporinas atingem elevadas concentrações no feto e têm sido largamente usadas na gravidez sem se ter verificado aumento de efeitos adversos. As cefalosporinas de segunda e terceira geração em cuja molécula existe uma cadeia lateral de N-metiltioterazol (MTT) podem produzir hipoplasia testicular em animais de laboratório, mas esse efeito não foi observado no homem."
    }
    );
this.database.put(
    {
        "_id": "Cefatamet",
        "Group": ["Antibióticos"],
        "FDACategory": "C",
        "OtherInfo": "As cefalosporinas atingem elevadas concentrações no feto e têm sido largamente usadas na gravidez sem se ter verificado aumento de efeitos adversos. As cefalosporinas de segunda e terceira geração em cuja molécula existe uma cadeia lateral de N-metiltioterazol (MTT) podem produzir hipoplasia testicular em animais de laboratório, mas esse efeito não foi observado no homem."
    }
    );
this.database.put(
    {
        "_id": "Cefepima",
        "Group": ["Antibióticos"],
        "FDACategory": "B",
        "OtherInfo": "As cefalosporinas atingem elevadas concentrações no feto e têm sido largamente usadas na gravidez sem se ter verificado aumento de efeitos adversos. "
    }
    );
this.database.put(
    {
        "_id": "Cefpiroma",
        "Group": ["Antibióticos"],
        "FDACategory": "B",
        "OtherInfo": "As cefalosporinas atingem elevadas concentrações no feto e têm sido largamente usadas na gravidez sem se ter verificado aumento de efeitos adversos. "
    }
    );
this.database.put(
    {
        "_id": "Ceftobiprole",
        "Group": ["Antibióticos"],
        "FDACategory": "C",
        "OtherInfo": "As cefalosporinas atingem elevadas concentrações no feto e têm sido largamente usadas na gravidez sem se ter verificado aumento de efeitos adversos. "
    }
    );
this.database.put(
    {
        "_id": "Cefoxitina",
        "Group": ["Antibióticos"],
        "FDACategory": "B",
        "OtherInfo": "As cefalosporinas atingem elevadas concentrações no feto e têm sido largamente usadas na gravidez sem se ter verificado aumento de efeitos adversos. "
    }
    );
this.database.put(
    {
        "_id": "Eritromicina",
        "Group": ["Antibióticos"],
        "FDACategory": "B",
        "OtherInfo": "A eritromicina é um macrólido que atinge fracos níveis no sangue fetal, pelo que não constitui uma alternativa eficaz nas grávidas alérgicas à penicilina quando se pretendem obter efeitos terapêuticos no feto, como é o caso da sífilis; não estão descritos efeitos fetais indesejáveis."
    }
    );
this.database.put(
    {
        "_id": "Azitromicina",
        "Group": ["Antibióticos"],
        "FDACategory": "B",
        "OtherInfo": "A azitromicina é um macrólido utilizado no tratamento das infeções a clamídia, incluído na categoria B. "
    }
    );
this.database.put(
    {
        "_id": "Claritromicina",
        "Group": ["Antibióticos"],
        "FDACategory": "C",
        "OtherInfo": "A claritromicina é um macrólido semi-sintético estruturalmente relacionado com a eritromicina, por terem sido observadas anomalias não malformativas em animais de laboratório (aborto, infertilidade, etc.) e por os estudos na espécie humana serem escassos, inclui-se na categoria C."
    }
    );
this.database.put(
    {
        "_id": "Aminoglicosídeos",
        "Group": ["Antibióticos"],
        "FDACategory": "D",
        "OtherInfo": "Os aminoglicosídeos atingem concentrações fetais significativas. A estreptomicina e a kanamicina (ambas da categoria D) podem afetar o VIII par craniano (nervo vestibulo-coclear), com perda total ou parcial da acuidade auditiva. Os outros antibióticos do grupo não estão devidamente estudados, mas presume-se que aumentem significativamente o risco de surdez neurosensorial congénita quando usados durante longos períodos, pelo que devem ser reservados para a terapêutica de inefções maternas graves devidas a agentes resistentes a outros antibióticos. A gentamicina está classificada na categoria C por não ter sido reportada ototoxicidade relacionada com a exposição fetal ao fármaco. Se possível, utilizar antes aztreonam, já que não tem efeitos ototóxicos ou nefrotóxicos conhecidos, não tendo efeitos teratogénicos em roedores (pertence à categoria B)"
    }
    );
this.database.put(
    {
        "_id": "Gentamicina",
        "Group": ["Antibióticos"],
        "FDACategory": "C",
        "OtherInfo": "Os aminoglicosídeos atingem concentrações fetais significativas. A gentamicina está classificada na categoria C por não ter sido reportada ototoxicidade relacionada com a exposição fetal ao fármaco. Se possível, utilizar antes aztreonam, já que não tem efeitos ototóxicos ou nefrotóxicos conhecidos, não tendo efeitos teratogénicos em roedores (pertence à categoria B)"
    }
    );
this.database.put(
    {
        "_id": "Aztreonam",
        "Group": ["Antibióticos"],
        "FDACategory": "B",
        "OtherInfo": "O aztreonam tem sido utilizado como alternativa aos aminoglicosídeos,  já que não tem efeitos ototóxicos ou nefrotóxicos conhecidos, não tendo efeitos teratogénicos em roedores (pertence à categoria B)"
    }
    );
this.database.put(
    {
        "_id": "Kanamicina",
        "Group": ["Antibióticos"],
        "FDACategory": "D",
        "OtherInfo": "Os aminoglicosídeos atingem concentrações fetais significativas. A estreptomicina e a kanamicina (ambas da categoria D) podem afetar o VIII par craniano (nervo vestibulo-coclear), com perda total ou parcial da acuidade auditiva. Os outros antibióticos do grupo não estão devidamente estudados, mas presume-se que aumentem significativamente o risco de surdez neurosensorial congénita quando usados durante longos períodos, pelo que devem ser reservados para a terapêutica de inefções maternas graves devidas a agentes resistentes a outros antibióticos. A gentamicina está classificada na categoria C por não ter sido reportada ototoxicidade relacionada com a exposição fetal ao fármaco. Se possível, utilizar antes aztreonam, já que não tem efeitos ototóxicos ou nefrotóxicos conhecidos, não tendo efeitos teratogénicos em roedores (pertence à categoria B)"
    }
    );
this.database.put(
    {
        "_id": "Clindamicina",
        "Group": ["Antibióticos"],
        "FDACategory": "B",
        "OtherInfo": "A clindamicina atravessa facilmente a placenta. Os efeitos sobre o feto são virtualmente desconhecidos por não existirem ensaios controlados na espécie humana, mas a experiência clínica mostrou que não existem anomalias fetais relacionáveis com o fármaco, sugerindo que a utilização da clindamicina em grávidas é bastante segura."
    }
    );
this.database.put(
    {
        "_id": "Vancomicina",
        "Group": ["Antibióticos"],
        "FDACategory": "B",
        "OtherInfo": "A vancomicina tem efeitos nocivos sobre o ouvido e o rim dos adultos, pelo que se podem presumir riscos ototóxicos e nefrotóxicos no feto, mas não existem dados devidamente controlados. A experiência baseada em várias séries, nomeadamente na profilaxia da endocardite bacteriana em grávidas alérgicas à penicilina, não mostrou efeitos fetais significativos."
    }
    );
this.database.put(
    {
        "_id": "Sulfonamidas",
        "Group": ["Antibióticos"],
        "FDACategory": "B",
        "OtherInfo": "As sulfonamidas passam rapidamente para o compartimento fetal, podendo competir com a ligação da bilirrubina às proteínas e, por esse motivo, provocar hiperbilirrubinémia neonatal se forem administradas pouco tempo antes do parto. "
    }
    );
this.database.put(
    {
        "_id": "Trimetoprim",
        "Group": ["Antibióticos"],
        "FDACategory": "C",
        "OtherInfo": "O trimetoprim, muito frequentemente associado às sulfonamidas, é um fraco antagonista do ácido fólico, pelo que existirá risco teratogénico potencial. A administração concomitante de ácido fólico reduzirá esse risco."
    }
    );
this.database.put(
    {
        "_id": "Nitrofurantoína",
        "Group": ["Antibióticos"],
        "FDACategory": "B",
        "OtherInfo": ""
    }
    );
this.database.put(
    {
        "_id": "Paracetamol / acetaminofeno",
        "Group": ["Analgésicos"],
        "FDACategory": "B",
        "OtherInfo": "É considerado o analgésico de primeira escolha na grávida. Não há evidência de malformações; doses elevadas por períodos prolongados podem causar doenças renal ou hepática fetal de consequências fatais; a combinação com a di-hidrocodeína é de evitar na gravidez, em especial junto ao parto pelo risco de síndrome de privação. Um estudo prospetivo dinamarquês que envolveu mais de 100 000 gestantes, mostrou que o uso de acetominofeno duranet a gravidez não aumenta o risco de anomalias congénitas."
    }
    );
this.database.put(
    {
        "_id": "Fluoroquinolonas",
        "Group": ["Antibióticos"],
        "FDACategory": "C",
        "OtherInfo": "Deve evitar-se a sua utilização na grávida por se ter observado, em experimentação animal, a ocorrência de artropatia irreversível do feto por lesão cartilagínea. Uma vez que existem alternativas, o uso das quinolonas durante a gestação deve ser llimitado."
    }
    );
this.database.put(
    {
        "_id": "Rifampicina",
        "Group": ["Antibióticos"],
        "FDACategory": "C",
        "OtherInfo": "À excepção da estreptomicina, os antibióticos tuberculostáticos não demonstraram afetar significativamente o feto. "
    }
    );
this.database.put(
    {
        "_id": "Rifabutina",
        "Group": ["Antibióticos"],
        "FDACategory": "B",
        "OtherInfo": "À excepção da estreptomicina, os antibióticos tuberculostáticos não demonstraram afetar significativamente o feto. "
    }
    );
this.database.put(
    {
        "_id": "Rifapentina",
        "Group": ["Antibióticos"],
        "FDACategory": "C",
        "OtherInfo": "À excepção da estreptomicina, os antibióticos tuberculostáticos não demonstraram afetar significativamente o feto. "
    }
    );
this.database.put(
    {
        "_id": "Isoniazida",
        "Group": ["Antibióticos"],
        "FDACategory": "B",
        "OtherInfo": "À excepção da estreptomicina, os antibióticos tuberculostáticos não demonstraram afetar significativamente o feto. "
    }
    );
this.database.put(
    {
        "_id": "Etambutol",
        "Group": ["Antibióticos"],
        "FDACategory": "B",
        "OtherInfo": "À excepção da estreptomicina, os antibióticos tuberculostáticos não demonstraram afetar significativamente o feto. "
    }
    );
this.database.put(
    {
        "_id": "Econazol",
        "Group": ["Antimicóticos"],
        "FDACategory": "C",
        "OtherInfo": "Em aplicação tópica não comporta riscos fetais, podendo ser usado no tratamento tópico da candidíase."
    }
    );
this.database.put(
    {
        "_id": "Clotrimazol",
        "Group": ["Antimicóticos"],
        "FDACategory": "B",
        "OtherInfo": "Um extenso estudo norte-americano mostrou que o uso tópico de fármacos do grupo dos azoles (butoconazol, clotrimazole, miconazol, tioconazol e terconazol), mesmo no primeiro trimestre da gravidez, não está associado a aumento de defeitos congénitos. Um pequeno aumento da prevaçência de uma rara anomalia cardíaca (coração esquerdo hipoplásico) carece de estudos mais aprofundados para poder ser relacionada diretamente com o uso deste grupo de medicamentos."
    }
    );
this.database.put(
    {
        "_id": "Fenticonazol",
        "Group": ["Antimicóticos"],
        "FDACategory": "C",
        "OtherInfo": "Evitar."
    }
    );
this.database.put(
    {
        "_id": "Miconazol",
        "Group": ["Antimicóticos"],
        "FDACategory": "C",
        "OtherInfo": "Um extenso estudo norte-americano mostrou que o uso tópico de fármacos do grupo dos azoles (butoconazol, clotrimazole, miconazol, tioconazol e terconazol), mesmo no primeiro trimestre da gravidez, não está associado a aumento de defeitos congénitos. Um pequeno aumento da prevaçência de uma rara anomalia cardíaca (coração esquerdo hipoplásico) carece de estudos mais aprofundados para poder ser relacionada diretamente com o uso deste grupo de medicamentos."
    }
    );
this.database.put(
    {
        "_id": "Sertaconazol",
        "Group": ["Antimicóticos"],
        "FDACategory": "C",
        "OtherInfo": "Não está demonstrada a sua inocuidade em mulheres grávidas; usar apenas após avaliação da relação benefício potencial/risco possível para o feto."
    }
    );
this.database.put(
    {
        "_id": "Fluconazol",
        "Group": ["Antimicóticos"],
        "FDACategory": "D",
        "OtherInfo": "Evitar; de acordo com o produtor; foram referidas anomalias congénitas múltiplas com doses altas em uso prolongado."
    }
    );
this.database.put(
    {
        "_id": "Itraconazol",
        "Group": ["Antimicóticos"],
        "FDACategory": "D",
        "OtherInfo": "O produtor recomenda evitar a menos que a situação atente contra a vida da mãe."
    }
    );
this.database.put(
    {
        "_id": "Tioconazol",
        "Group": ["Antimicóticos"],
        "FDACategory": "C",
        "OtherInfo": "Um extenso estudo norte-americano mostrou que o uso tópico de fármacos do grupo dos azoles (butoconazol, clotrimazole, miconazol, tioconazol e terconazol), mesmo no primeiro trimestre da gravidez, não está associado a aumento de defeitos congénitos. Um pequeno aumento da prevaçência de uma rara anomalia cardíaca (coração esquerdo hipoplásico) carece de estudos mais aprofundados para poder ser relacionada diretamente com o uso deste grupo de medicamentos."
    }
    );
this.database.put(
    {
        "_id": "Terconazol",
        "Group": ["Antimicóticos"],
        "FDACategory": "C",
        "OtherInfo": "Um extenso estudo norte-americano mostrou que o uso tópico de fármacos do grupo dos azoles (butoconazol, clotrimazole, miconazol, tioconazol e terconazol), mesmo no primeiro trimestre da gravidez, não está associado a aumento de defeitos congénitos. Um pequeno aumento da prevaçência de uma rara anomalia cardíaca (coração esquerdo hipoplásico) carece de estudos mais aprofundados para poder ser relacionada diretamente com o uso deste grupo de medicamentos."
    }
    );
this.database.put(
    {
        "_id": "Anfotericina B",
        "Group": ["Antimicóticos"],
        "FDACategory": "B",
        "OtherInfo": "Utilizado no tratamento tópico da candidíase, pode ser prescrito na gravidez por não comportar riscos fetais."
    }
    );
this.database.put(
    {
        "_id": "Griseofulvina",
        "Group": ["Antimicóticos"],
        "FDACategory": "C",
        "OtherInfo": "Não existem estudos suficientes que assegurem a sua inocuidade na espécie humana, tendo sido descritos dois casos de gémeos conjuntos. Em animais de laboratório (murganho) foram observadas anomalias do SNC e do esqueleto, bem como tumores da tiróide e do fígado. Apesar de não haver evidência de o fármaco ser teratogénico na espécie humana, a sua eventual utilização durante a gravidez deve ser bem ponderada."
    }
    );
this.database.put(
    {
        "_id": "Aciclovir",
        "Group": ["Antivirais"],
        "FDACategory": "B",
        "OtherInfo": "A utilização do aciclovir, sistémica ou local, não implica riscos significativos para o feto."
    }
    );
this.database.put(
    {
        "_id": "Zidovudina / AZT",
        "Group": ["Antivirais"],
        "FDACategory": "C",
        "OtherInfo": "Fármaco anti-retroviral utilizado no tratamento do HIV. Este anti-retroviral não demonstrou ter efeitos teratogénicos (Categoria C), contribuindo decisivamente para a prevenção da transmissão vertical dos vírus e, portanto, da infeção congénita pelo HIV. Os restantes fármacos inibidores da transcriptase ou das proteases usados nesta indicação terapêutica estão todos classicados nas categorias B e C."
    }
    );
this.database.put(
    {
        "_id": "Metronidazol",
        "Group": ["Antiparasitários"],
        "FDACategory": "B",
        "OtherInfo": "O metronidazol, usado correntemente para o tratamento da tricomoníase e de outras parasitoses e, ainda, de infeções a anaeróbios, não demonstrou possuir efeitos teratogénicos na espécie humana."
    }
    );
this.database.put(
    {
        "_id": "Cloroquina",
        "Group": ["Antiparasitários"],
        "FDACategory": "C",
        "OtherInfo": "Os antimaláricos, quando utilizados em doses profiláticas ou terapêuticas, não estão associados ao aumento de malformações fetais."
    }
    );
this.database.put(
    {
        "_id": "Hidroxicloroquina",
        "Group": ["Antiparasitários"],
        "FDACategory": "C",
        "OtherInfo": "Os antimaláricos, quando utilizados em doses profiláticas ou terapêuticas, não estão associados ao aumento de malformações fetais."
    }
    );
this.database.put(
    {
        "_id": "Pirimetamina",
        "Group": ["Antiparasitários"],
        "FDACategory": "C",
        "OtherInfo": "Os antimaláricos, quando utilizados em doses profiláticas ou terapêuticas, não estão associados ao aumento de malformações fetais."
    }
    );
this.database.put(
    {
        "_id": "Mefloquina",
        "Group": ["Antiparasitários"],
        "FDACategory": "C",
        "OtherInfo": "Os antimaláricos, quando utilizados em doses profiláticas ou terapêuticas, não estão associados ao aumento de malformações fetais."
    }
    );
this.database.put(
    {
        "_id": "Espiramicina",
        "Group": ["Antiparasitários"],
        "FDACategory": "C",
        "OtherInfo": "Não existem dados publicados sobre anomalias fetais atribuíveis a este fármaco."
    }
    );
this.database.put(
    {
        "_id": "Fadiazina",
        "Group": ["Antiparasitários"],
        "FDACategory": "C",
        "OtherInfo": "Não existem dados publicados sobre anomalias fetais atribuíveis a este fármaco."
    }
    );
this.database.put(
    {
        "_id": "Mebendazol",
        "Group": ["Antiparasitários"],
        "FDACategory": "C",
        "OtherInfo": "Não existem dados devidamente controlados sobre os efeitos fetais dos medicamentos anti-helmínticos, mas até agora não foram associados ao aparecimento de malformações quando utilizados em doses terapêuticas."
    }
    );
this.database.put(
    {
        "_id": "Piperazina",
        "Group": ["Antiparasitários"],
        "FDACategory": "B",
        "OtherInfo": "Não existem dados devidamente controlados sobre os efeitos fetais dos medicamentos anti-helmínticos, mas até agora não foram associados ao aparecimento de malformações quando utilizados em doses terapêuticas."
    }
    );
this.database.put(
    {
        "_id": "Tiabendazol",
        "Group": [""],
        "FDACategory": "",
        "OtherInfo": ""
    }
    );
this.database.put(
    {
        "_id": "Pirantel",
        "Group": ["Antiparasitários"],
        "FDACategory": "C",
        "OtherInfo": "Não existem dados devidamente controlados sobre os efeitos fetais dos medicamentos anti-helmínticos, mas até agora não foram associados ao aparecimento de malformações quando utilizados em doses terapêuticas."
    }
    );
this.database.put(
    {
        "_id": "Amlodipina",
        "Group": ["Anti-arrítmicos"],
        "FDACategory": "C",
        "OtherInfo": "Bloqueador dos canais de cálcio dihidropiridínico, os bloqueadores dos canais de cálcio apresentam risco de diminuição do fluxo placentário, depressão do miocárdio e paragem cardíaca fetal"
    }
    );
this.database.put(
    {
        "_id": "Felodipina",
        "Group": ["Anti-arrítmicos"],
        "FDACategory": "C",
        "OtherInfo": "Bloqueador dos canais de cálcio dihidropiridínico, os bloqueadores dos canais de cálcio apresentam risco de diminuição do fluxo placentário, depressão do miocárdio e paragem cardíaca fetal"
    }
    );
this.database.put(
    {
        "_id": "Isradipina",
        "Group": ["Anti-arrítmicos"],
        "FDACategory": "C",
        "OtherInfo": "Bloqueador dos canais de cálcio dihidropiridínico, os bloqueadores dos canais de cálcio apresentam risco de diminuição do fluxo placentário, depressão do miocárdio e paragem cardíaca fetal"
    }
    );
this.database.put(
    {
        "_id": "Lercanidipina",
        "Group": ["Anti-arrítmicos"],
        "FDACategory": "C",
        "OtherInfo": "Bloqueador dos canais de cálcio dihidropiridínico, os bloqueadores dos canais de cálcio apresentam risco de diminuição do fluxo placentário, depressão do miocárdio e paragem cardíaca fetal"
    }
    );
this.database.put(
    {
        "_id": "Manidipina",
        "Group": ["Anti-arrítmicos"],
        "FDACategory": "C",
        "OtherInfo": "Bloqueador dos canais de cálcio dihidropiridínico, os bloqueadores dos canais de cálcio apresentam risco de diminuição do fluxo placentário, depressão do miocárdio e paragem cardíaca fetal"
    }
    );
this.database.put(
    {
        "_id": "Nicardipina",
        "Group": ["Anti-arrítmicos"],
        "FDACategory": "C",
        "OtherInfo": "Bloqueador dos canais de cálcio dihidropiridínico, os bloqueadores dos canais de cálcio apresentam risco de diminuição do fluxo placentário, depressão do miocárdio e paragem cardíaca fetal"
    }
    );
this.database.put(
    {
        "_id": "Nifedipina",
        "Group": ["Anti-arrítmicos"],
        "FDACategory": "C",
        "OtherInfo": "Bloqueador dos canais de cálcio dihidropiridínico, os bloqueadores dos canais de cálcio apresentam risco de diminuição do fluxo placentário, depressão do miocárdio e paragem cardíaca fetal. Só deve ser dada à grávida com hipertensão grave que não responde à terapêutica padrão; risco de hipóxia fetal por hipotensão materna; não associar a sulfato de magnésio IV;"
    }
    );
this.database.put(
    {
        "_id": "Nitrendipina",
        "Group": ["Anti-arrítmicos"],
        "FDACategory": "C",
        "OtherInfo": "Bloqueador dos canais de cálcio dihidropiridínico, os bloqueadores dos canais de cálcio apresentam risco de diminuição do fluxo placentário, depressão do miocárdio e paragem cardíaca fetal"
    }
    );
this.database.put(
    {
        "_id": "Nimodipina",
        "Group": ["Anti-arrítmicos"],
        "FDACategory": "C",
        "OtherInfo": "Bloqueador dos canais de cálcio dihidropiridínico, os bloqueadores dos canais de cálcio apresentam risco de diminuição do fluxo placentário, depressão do miocárdio e paragem cardíaca fetal"
    }
    );
this.database.put(
    {
        "_id": "Nisoldipina",
        "Group": ["Anti-arrítmicos"],
        "FDACategory": "C",
        "OtherInfo": "Bloqueador dos canais de cálcio dihidropiridínico, os bloqueadores dos canais de cálcio apresentam risco de diminuição do fluxo placentário, depressão do miocárdio e paragem cardíaca fetal"
    }
    );
this.database.put(
    {
        "_id": "Verapamilo",
        "Group": ["Anti-arrítmicos"],
        "FDACategory": "C",
        "OtherInfo": "Bloqueador dos canais de cálcio da classe das fenilalquilaminas.  Não há referência a malformações mas deve evitar-se a administração no 1º trimestre; risco de diminuição do fluxo placentário, depressão do miocárdio e paragem cardíaca fetal."
    }
    );
this.database.put(
    {
        "_id": "Gallopamil",
        "Group": ["Anti-arrítmicos"],
        "FDACategory": "C",
        "OtherInfo": "Bloqueador dos canais de cálcio da classe das fenilalquilaminas.  Não há referência a malformações mas deve evitar-se a administração no 1º trimestre; risco de diminuição do fluxo placentário, depressão do miocárdio e paragem cardíaca fetal."
    }
    );
this.database.put(
    {
        "_id": "Diltiazem",
        "Group": ["Anti-arrítmicos"],
        "FDACategory": "C",
        "OtherInfo": "Bloqueador dos canais de cálcio da classe das benzodiazepinas. Risco teratogénico comprovado em animais. Risco de diminuição do fluxo placentário, depressão do miocárdio e paragem cardíaca fetal."
    }
    );
this.database.put(
    {
        "_id": "Diazóxido",
        "Group": ["Anti-hipertensor / Inibidor da secreção de insulina"],
        "FDACategory": "C",
        "OtherInfo": "Risco de hiperglicémia e anomalias das feneras"
    }
    );
this.database.put(
    {
        "_id": "Nitroprussiato de sódio",
        "Group": ["Anti-hipertensor "],
        "FDACategory": "C",
        "OtherInfo": "Risco de toxicidade do cianeto descrito apenas em animais"
    }
    );
this.database.put(
    {
        "_id": "Furosemida",
        "Group": ["Diurético"],
        "FDACategory": "C",
        "OtherInfo": "Risco de diminuição do fluxo placentário e hiperbilirrubinémia"
    }
    );
this.database.put(
    {
        "_id": "Espironolactona",
        "Group": ["Diurético"],
        "FDACategory": "D",
        "OtherInfo": "Risco de feminização do feto masculino"
    }
    );
this.database.put(
    {
        "_id": "Acetazolamida",
        "Group": ["Diurético"],
        "FDACategory": "C",
        "OtherInfo": "Não deve ser prescrito na grávida. Risco de acidose tubular renal; aumento do risco de esquizofrenia; interfere com o desenvolvimento neuronal no feto. Risco de anomalias dos membros descrito apenas em animais."
    }
    );
this.database.put(
    {
        "_id": "Tiazida",
        "Group": ["Diurético"],
        "FDACategory": "D",
        "OtherInfo": "No 1º trimestre podem causar um aumento do risco de malformações congénitas; outros riscos incluem hipoglicemia, hiponatremia, hipocaliemia, trombocitopenia e morte por complicações maternas; efeito directo sobre o músculo liso com inibição do parto; evitar durante a gravidez, excepto, eventualmente, na insuficiência cardíaca. No entanto, o benefício da utilização das tiazidas depois do primeiro trimestre ultrapassa os riscos."
    }
    );
this.database.put(
    {
        "_id": "Captopril",
        "Group": ["Inibidores da Enzima Conversora da Angiotensina II / iECA"],
        "FDACategory": "D",
        "OtherInfo": "Contraindicado. Risco aumentado de hipotensão neonatal, insuficiência renal in utero, no feto e no RN, em relação com a hipotensão fetal e redução do fluxo sanguíneo renal; deformações da face ou crâneo e/ou morte; atraso do crescimento intra-uterino, prematuridade, ductus arteriosus patente; nos casos em que for indispensável o uso do fármaco na mãe, recorrer à dose mais baixa possível."
    }
    );
this.database.put(
    {
        "_id": "Enalapril",
        "Group": ["Inibidores da Enzima Conversora da Angiotensina II / iECA"],
        "FDACategory": "D",
        "OtherInfo": "Apresenta risco teratogénico,podendo causar oligohidramnios, defeitos renais com anúria, contractura dos membros, deformação craneofacial e hipoplasia pulmonar. V. Inibidores da enzima de conversão da angiotensina ."
    }
    );
this.database.put(
    {
        "_id": "Lisinopril",
        "Group": ["Inibidores da Enzima Conversora da Angiotensina II / iECA"],
        "FDACategory": "D",
        "OtherInfo": "Contra-indicados; podem afectar a pressão sanguínea e a função renal do feto."
    }
    );
this.database.put(
    {
        "_id": "Benazepril",
        "Group": ["Inibidores da Enzima Conversora da Angiotensina II / iECA"],
        "FDACategory": "D",
        "OtherInfo": "Podem afectar o controlo da pressão sanguínea fetal e neonatal e a função renal; possíveis malformações craneanas e oligohidramnios, que podem ser associados a morte fetal in utero; recomenda-se a sua substituição por outro anti-hipertensor logo após o diagnóstico de gravidez."
    }
    );
this.database.put(
    {
        "_id": "Fosinopril",
        "Group": ["Inibidores da Enzima Conversora da Angiotensina II / iECA"],
        "FDACategory": "D",
        "OtherInfo": "Podem afectar o controlo da pressão sanguínea fetal e neonatal e a função renal; possíveis malformações craneanas e oligohidramnios, que podem ser associados a morte fetal in utero; recomenda-se a sua substituição por outro anti-hipertensor logo após o diagnóstico de gravidez."
    }
    );
this.database.put(
    {
        "_id": "Moexipril",
        "Group": ["Inibidores da Enzima Conversora da Angiotensina II / iECA"],
        "FDACategory": "D",
        "OtherInfo": "Podem afectar o controlo da pressão sanguínea fetal e neonatal e a função renal; possíveis malformações craneanas e oligohidramnios, que podem ser associados a morte fetal in utero; recomenda-se a sua substituição por outro anti-hipertensor logo após o diagnóstico de gravidez."
    }
    );
this.database.put(
    {
        "_id": "Perindopril",
        "Group": ["Inibidores da Enzima Conversora da Angiotensina II / iECA"],
        "FDACategory": "D",
        "OtherInfo": "Podem afectar o controlo da pressão sanguínea fetal e neonatal e a função renal; possíveis malformações craneanas e oligohidramnios, que podem ser associados a morte fetal in utero; recomenda-se a sua substituição por outro anti-hipertensor logo após o diagnóstico de gravidez."
    }
    );
this.database.put(
    {
        "_id": "Quinapril",
        "Group": ["Inibidores da Enzima Conversora da Angiotensina II / iECA"],
        "FDACategory": "D",
        "OtherInfo": "Podem afectar o controlo da pressão sanguínea fetal e neonatal e a função renal; possíveis malformações craneanas e oligohidramnios, que podem ser associados a morte fetal in utero; recomenda-se a sua substituição por outro anti-hipertensor logo após o diagnóstico de gravidez."
    }
    );
this.database.put(
    {
        "_id": "Ramipril",
        "Group": ["Inibidores da Enzima Conversora da Angiotensina II / iECA"],
        "FDACategory": "D",
        "OtherInfo": "Podem afectar o controlo da pressão sanguínea fetal e neonatal e a função renal; possíveis malformações craneanas e oligohidramnios, que podem ser associados a morte fetal in utero; recomenda-se a sua substituição por outro anti-hipertensor logo após o diagnóstico de gravidez."
    }
    );
this.database.put(
    {
        "_id": "Trandolapril",
        "Group": ["Inibidores da Enzima Conversora da Angiotensina II / iECA"],
        "FDACategory": "D",
        "OtherInfo": "Podem afectar o controlo da pressão sanguínea fetal e neonatal e a função renal; possíveis malformações craneanas e oligohidramnios, que podem ser associados a morte fetal in utero; recomenda-se a sua substituição por outro anti-hipertensor logo após o diagnóstico de gravidez."
    }
    );
this.database.put(
    {
        "_id": "Condesartan",
        "Group": ["Antagonistas do Receptor da Angiotensina / ARA II"],
        "FDACategory": "D",
        "OtherInfo": "Podem afectar o controlo da pressão sanguínea fetal e neonatal e a função renal; possíveis malformações craneanas e oligohidramnios, que podem ser associados a morte fetal in utero; recomenda-se a sua substituição por outro anti-hipertensor logo após o diagnóstico de gravidez."
    }
    );
this.database.put(
    {
        "_id": "Losartan",
        "Group": ["Antagonistas do Receptor da Angiotensina / ARA II"],
        "FDACategory": "D",
        "OtherInfo": "Não foi estabelecida segurança na mulher grávida; nos animais podem ocorrer lesões e morte de fetos e RNs; no 2º e 3º trimestre, o medicamento actua no SRAA e pode provocar lesões e morte fetal; a perfusão renal do feto humano começa no 2º trimestre e depende do desenvolvimento do SRAA."
    }
    );
this.database.put(
    {
        "_id": "Valsartan",
        "Group": ["Antagonistas do Receptor da Angiotensina / ARA II"],
        "FDACategory": "D",
        "OtherInfo": "As substâncias que actuam no sistema renina-angiotensina-aldosterona podem, durante o 2º e 3º trimestre, causar IR do feto ou neo-natal, hipoplasia do crâneo e mesmo morte fetal; por precaução, também não deve ser usado durante o 1º trimestre da gravidez, antes de uma gravidez planeada fazer a mudança para um tratamento alternativo adequado. No caso de uma gravidez ser diagnosticada, deve interromper-se o ibersartan imediatamente; se o tratamento for mantido, avaliar o crâneo e a função renal por ecografia."
    }
    );
this.database.put(
    {
        "_id": "Candesartan",
        "Group": ["Antagonistas do Receptor da Angiotensina / ARA II"],
        "FDACategory": "D",
        "OtherInfo": "As substâncias que actuam no sistema renina-angiotensina-aldosterona podem, durante o 2º e 3º trimestre, causar IR do feto ou neo-natal, hipoplasia do crâneo e mesmo morte fetal; por precaução, também não deve ser usado durante o 1º trimestre da gravidez, antes de uma gravidez planeada fazer a mudança para um tratamento alternativo adequado. No caso de uma gravidez ser diagnosticada, deve interromper-se o ibersartan imediatamente; se o tratamento for mantido, avaliar o crâneo e a função renal por ecografia."
    }
    );
this.database.put(
    {
        "_id": "Eprosartan",
        "Group": ["Antagonistas do Receptor da Angiotensina / ARA II"],
        "FDACategory": "D",
        "OtherInfo": "As substâncias que actuam no sistema renina-angiotensina-aldosterona podem, durante o 2º e 3º trimestre, causar IR do feto ou neo-natal, hipoplasia do crâneo e mesmo morte fetal; por precaução, também não deve ser usado durante o 1º trimestre da gravidez, antes de uma gravidez planeada fazer a mudança para um tratamento alternativo adequado. No caso de uma gravidez ser diagnosticada, deve interromper-se o ibersartan imediatamente; se o tratamento for mantido, avaliar o crâneo e a função renal por ecografia."
    }
    );
this.database.put(
    {
        "_id": "Irbesartan",
        "Group": ["Antagonistas do Receptor da Angiotensina / ARA II"],
        "FDACategory": "D",
        "OtherInfo": "As substâncias que actuam no sistema renina-angiotensina-aldosterona podem, durante o 2º e 3º trimestre, causar IR do feto ou neo-natal, hipoplasia do crâneo e mesmo morte fetal; por precaução, também não deve ser usado durante o 1º trimestre da gravidez, antes de uma gravidez planeada fazer a mudança para um tratamento alternativo adequado. No caso de uma gravidez ser diagnosticada, deve interromper-se o ibersartan imediatamente; se o tratamento for mantido, avaliar o crâneo e a função renal por ecografia."
    }
    );
this.database.put(
    {
        "_id": "Telmisartan",
        "Group": ["Antagonistas do Receptor da Angiotensina / ARA II"],
        "FDACategory": "D",
        "OtherInfo": "Estudos animais não indicam efeito teratogénico, mas fetotoxicidade. Não deve ser administrado durante o 1º trimestre, mas também no 2º e 3º porque os fármacos que actuam no sistema renina-angiotensina-aldosterona podem causar danos e mesmo morte do feto em desenvolvimento."
    }
    );
this.database.put(
    {
        "_id": "Fraxiparina",
        "Group": ["Anticoagulantes"],
        "FDACategory": "B",
        "OtherInfo": "As heparinas de baixo peso molecular não estão contra-indicadas na gravidez. No entanto, pelo facto de não atravessar a barreira placentária nem ser excretada no leite devido ao seu elevado peso molecular, é recomendado o uso de heparina."
    }
    );
this.database.put(
    {
        "_id": "Enoxaparina",
        "Group": ["Anticoagulantes"],
        "FDACategory": "B",
        "OtherInfo": "As heparinas de baixo peso molecular não estão contra-indicadas na gravidez. No entanto, pelo facto de não atravessar a barreira placentária nem ser excretada no leite devido ao seu elevado peso molecular, é recomendado o uso de heparina."
    }
    );
this.database.put(
    {
        "_id": "Propanolol",
        "Group": ["β-bloqueantes / Anti-hipertensores"],
        "FDACategory": "C",
        "OtherInfo": "Os β-bloqueantes têm sido largamente usados em grávidas sem terem sido reportadas malformações fetais. Contudo, observa-se significativa diminuição da reatividade da frequência cardíaca fetal, reversível 2-10 dias após suspensão da medicação materna com propanolol."
    }
    );
this.database.put(
    {
        "_id": "Metildopa",
        "Group": ["Anti-hipertensores"],
        "FDACategory": "B",
        "OtherInfo": "Este fármaco tem sido usado largamente durante a gravidez sem terem sido reportadas malformações fetais."
    }
    );
this.database.put(
    {
        "_id": "Hidralazina",
        "Group": ["Anti-hipertensores"],
        "FDACategory": "C",
        "OtherInfo": "Este fármaco tem sido usado largamente durante a gravidez sem terem sido reportadas malformações fetais. No entanto, observaram-se situações de arritmia fetal após a administração de hidralazina durante o segundo e terceiro trimestres da gestação."
    }
    );
this.database.put(
    {
        "_id": "Atenonol",
        "Group": ["β-bloqueantes / Anti-hipertensores"],
        "FDACategory": "D",
        "OtherInfo": "Este fármaco tem sido usado largamente durante a gravidez sem terem sido reportadas malformações fetais. No entanto, dados de diversos investigadores mostram associação estreita do medicamento com RCF (Restrição do Crescimento Fetal Intra-uterino) e aumento da resistência vascular nos vasos fetais e umbilicais."
    }
    );
this.database.put(
    {
        "_id": "Lidocaína",
        "Group": ["Anti-arrítmicos"],
        "FDACategory": "B",
        "OtherInfo": "É lícito o uso deste medicamento em situações maternas que o justifiquem, já que, apesar de não haverem estudos devidamente controlados dos seus possíveis efeitos sobre o embrião e o feto, não há registo de alterações com significado."
    }
    );
this.database.put(
    {
        "_id": "Digoxina",
        "Group": ["Anti-arrítmicos"],
        "FDACategory": "C",
        "OtherInfo": "É lícito o uso deste medicamento em situações maternas que o justifiquem, já que, apesar de não haverem estudos devidamente controlados dos seus possíveis efeitos sobre o embrião e o feto, não há registo de alterações com significado."
    }
    );
this.database.put(
    {
        "_id": "Quinidina",
        "Group": ["Anti-arrítmicos"],
        "FDACategory": "C",
        "OtherInfo": "É lícito o uso deste medicamento em situações maternas que o justifiquem, já que, apesar de não haverem estudos devidamente controlados dos seus possíveis efeitos sobre o embrião e o feto, não há registo de alterações com significado."
    }
    );
this.database.put(
    {
        "_id": "Bretílio",
        "Group": ["Anti-arrítmicos"],
        "FDACategory": "C",
        "OtherInfo": "Este medicamento deve apenas ser utilizado na terapêutica de situações graves (taquicárdia e fibrilhação ventriculares)."
    }
    );
this.database.put(
    {
        "_id": "Adenosina",
        "Group": ["Anti-arrítmicos"],
        "FDACategory": "C",
        "OtherInfo": "Este medicamento deve apenas ser utilizado na terapêutica de situações graves (taquicárdia e fibrilhação ventriculares)."
    }
    );
this.database.put(
    {
        "_id": "Amiodarona",
        "Group": ["Anti-arrítmicos"],
        "FDACategory": "D",
        "OtherInfo": "O tratamento continuado com amiodarona está associado a restrição de crescimento fetal, bócio congénito, alterações da frequência cardíaca e do ECG fetal/neonatal, pelo que deve ser evitado. Devido à sua longa semi-vida, a terapêutica com amiodarona deve ser interrompida 6 meses antes de iniciada a gravidez."
    }
    );
this.database.put(
    {
        "_id": "Disopiramida",
        "Group": ["Anti-arrítmicos"],
        "FDACategory": "C",
        "OtherInfo": "Apesar de não comportar risco teratogénico, este fármaco deve ser evitado uma vez que pode provocar contrações uterinas."
    }
    );
this.database.put(
    {
        "_id": "Nitritos orgânicos",
        "Group": ["Anti-anginosos"],
        "FDACategory": "C",
        "OtherInfo": "Os antianginosos não estão suficientemente testados na gravidez, devendo ser usados apenas em situações maternas graves. O grupo dos nitritos orgânicos e o dipiridamol parecem ser os mais inócuos."
    }
    );
this.database.put(
    {
        "_id": "Dipiridamol",
        "Group": ["Anti-anginosos"],
        "FDACategory": "B",
        "OtherInfo": "Os antianginosos não estão suficientemente testados na gravidez, devendo ser usados apenas em situações maternas graves. O grupo dos nitritos orgânicos e o dipiridamol parecem ser os mais inócuos."
    }
    );
this.database.put(
    {
        "_id": "Beclometasona",
        "Group": ["Corticóides"],
        "FDACategory": "B",
        "OtherInfo": "Não existem dados que suportem a associação entre o fármaco e malformações congénitas, pelo que os corticóides utilizados no tratamento da asma na gravidez são relativamente seguros."
    }
    );
this.database.put(
    {
        "_id": "Budesonido",
        "Group": ["Corticóides"],
        "FDACategory": "B",
        "OtherInfo": "Não existem dados que suportem a associação entre o fármaco e malformações congénitas, pelo que os corticóides utilizados no tratamento da asma na gravidez são relativamente seguros."
    }
    );
this.database.put(
    {
        "_id": "Ciclesonido",
        "Group": ["Corticóides"],
        "FDACategory": "B",
        "OtherInfo": "Não existem dados que suportem a associação entre o fármaco e malformações congénitas, pelo que os corticóides utilizados no tratamento da asma na gravidez são relativamente seguros."
    }
    );
this.database.put(
    {
        "_id": "Propionato de Fluticasona",
        "Group": ["Corticóides"],
        "FDACategory": "B",
        "OtherInfo": "Não existem dados que suportem a associação entre o fármaco e malformações congénitas, pelo que os corticóides utilizados no tratamento da asma na gravidez são relativamente seguros."
    }
    );
this.database.put(
    {
        "_id": "Furoato de Fluticasona",
        "Group": ["Corticóides"],
        "FDACategory": "B",
        "OtherInfo": "Não existem dados que suportem a associação entre o fármaco e malformações congénitas, pelo que os corticóides utilizados no tratamento da asma na gravidez são relativamente seguros."
    }
    );
this.database.put(
    {
        "_id": "Mometasona",
        "Group": ["Corticóides"],
        "FDACategory": "B",
        "OtherInfo": "Não existem dados que suportem a associação entre o fármaco e malformações congénitas, pelo que os corticóides utilizados no tratamento da asma na gravidez são relativamente seguros."
    }
    );
this.database.put(
    {
        "_id": "Triamcinolona",
        "Group": ["Corticóides"],
        "FDACategory": "B",
        "OtherInfo": "Não existem dados que suportem a associação entre o fármaco e malformações congénitas, pelo que os corticóides utilizados no tratamento da asma na gravidez são relativamente seguros."
    }
    );
this.database.put(
    {
        "_id": "Brometo de ipatrópio",
        "Group": ["Anticolinérgicos"],
        "FDACategory": "C",
        "OtherInfo": "Desconhece-se se é perigoso; não há informações disponíveis."
    }
    );
this.database.put(
    {
        "_id": "Brometo de tiotrópio",
        "Group": ["Anticolinérgicos"],
        "FDACategory": "C",
        "OtherInfo": "Desconhece-se se é perigoso; não há informações disponíveis."
    }
    );
this.database.put(
    {
        "_id": "Formoterol",
        "Group": ["β-Adrenérgicos"],
        "FDACategory": "B",
        "OtherInfo": "Os broncodilatadores β-Adrenérgicos são relativamente seguros na gravidez, pelo que devem ser prescritos nas posologias habitualmente indicadas fora do estado gravídico."
    }
    );
this.database.put(
    {
        "_id": "Vilanterol",
        "Group": ["β-Adrenérgicos"],
        "FDACategory": "B",
        "OtherInfo": "Os broncodilatadores β-Adrenérgicos são relativamente seguros na gravidez, pelo que devem ser prescritos nas posologias habitualmente indicadas fora do estado gravídico."
    }
    );
this.database.put(
    {
        "_id": "Salmeterol",
        "Group": ["β-Adrenérgicos"],
        "FDACategory": "B",
        "OtherInfo": "Os broncodilatadores β-Adrenérgicos são relativamente seguros na gravidez, pelo que devem ser prescritos nas posologias habitualmente indicadas fora do estado gravídico."
    }
    );
this.database.put(
    {
        "_id": "Clemastina",
        "Group": ["Anti-histamínicos"],
        "FDACategory": "B",
        "OtherInfo": "Por períodos curtos não parecem induzir teratogenicidade; os produtores recomendam evitar a cetirizina, desloratadina, hidroxizina, loratadina e mizolastina por toxicidade embrionária em animais. Os anti-histamínicos sedativos no final do 3º trimestre podem causar efeitos adversos no RN."
    }
    );
this.database.put(
    {
        "_id": "Hidroxizina",
        "Group": ["Anti-histamínicos"],
        "FDACategory": "C",
        "OtherInfo": "Por períodos curtos não parecem induzir teratogenicidade; os produtores recomendam evitar a cetirizina, desloratadina, hidroxizina, loratadina e mizolastina por toxicidade embrionária em animais. Os anti-histamínicos sedativos no final do 3º trimestre podem causar efeitos adversos no RN."
    }
    );
this.database.put(
    {
        "_id": "Prometazina",
        "Group": ["Anti-histamínicos"],
        "FDACategory": "",
        "OtherInfo": "Por períodos curtos não parecem induzir teratogenicidade; os produtores recomendam evitar a cetirizina, desloratadina, hidroxizina, loratadina e mizolastina por toxicidade embrionária em animais. Os anti-histamínicos sedativos no final do 3º trimestre podem causar efeitos adversos no RN."
    }
    );
this.database.put(
    {
        "_id": "Clorofeniramina",
        "Group": ["Anti-histamínicos"],
        "FDACategory": "C",
        "OtherInfo": "Estudos animais não demonstraram risco para o feto e não há estudos controlados em grávidas. Evitar."
    }
    );
this.database.put(
    {
        "_id": "Clorofenoxamina",
        "Group": ["Anti-histamínicos"],
        "FDACategory": "C",
        "OtherInfo": "Por períodos curtos não parecem induzir teratogenicidade; os produtores recomendam evitar a cetirizina, desloratadina, hidroxizina, loratadina e mizolastina por toxicidade embrionária em animais. Os anti-histamínicos sedativos no final do 3º trimestre podem causar efeitos adversos no RN."
    }
    );
this.database.put(
    {
        "_id": "Desloratadina",
        "Group": ["Anti-histamínicos"],
        "FDACategory": "C",
        "OtherInfo": "Por períodos curtos não parecem induzir teratogenicidade; os produtores recomendam evitar a cetirizina, desloratadina, hidroxizina, loratadina e mizolastina por toxicidade embrionária em animais. Os anti-histamínicos sedativos no final do 3º trimestre podem causar efeitos adversos no RN."
    }
    );
this.database.put(
    {
        "_id": "Ebastina",
        "Group": ["Anti-histamínicos"],
        "FDACategory": "C",
        "OtherInfo": "Por períodos curtos não parecem induzir teratogenicidade; os produtores recomendam evitar a cetirizina, desloratadina, hidroxizina, loratadina e mizolastina por toxicidade embrionária em animais. Os anti-histamínicos sedativos no final do 3º trimestre podem causar efeitos adversos no RN."
    }
    );
this.database.put(
    {
        "_id": "Emedastina",
        "Group": ["Anti-histamínicos"],
        "FDACategory": "C",
        "OtherInfo": "Por períodos curtos não parecem induzir teratogenicidade; os produtores recomendam evitar a cetirizina, desloratadina, hidroxizina, loratadina e mizolastina por toxicidade embrionária em animais. Os anti-histamínicos sedativos no final do 3º trimestre podem causar efeitos adversos no RN."
    }
    );
this.database.put(
    {
        "_id": "Epinastina",
        "Group": ["Anti-histamínicos"],
        "FDACategory": "C",
        "OtherInfo": "Por períodos curtos não parecem induzir teratogenicidade; os produtores recomendam evitar a cetirizina, desloratadina, hidroxizina, loratadina e mizolastina por toxicidade embrionária em animais. Os anti-histamínicos sedativos no final do 3º trimestre podem causar efeitos adversos no RN."
    }
    );
this.database.put(
    {
        "_id": "Fexofenadina",
        "Group": ["Anti-histamínicos"],
        "FDACategory": "C",
        "OtherInfo": "Por períodos curtos não parecem induzir teratogenicidade; os produtores recomendam evitar a cetirizina, desloratadina, hidroxizina, loratadina e mizolastina por toxicidade embrionária em animais. Os anti-histamínicos sedativos no final do 3º trimestre podem causar efeitos adversos no RN."
    }
    );
this.database.put(
    {
        "_id": "Flunarizina",
        "Group": ["Anti-histamínicos"],
        "FDACategory": "C",
        "OtherInfo": "Por períodos curtos não parecem induzir teratogenicidade; os produtores recomendam evitar a cetirizina, desloratadina, hidroxizina, loratadina e mizolastina por toxicidade embrionária em animais. Os anti-histamínicos sedativos no final do 3º trimestre podem causar efeitos adversos no RN."
    }
    );
this.database.put(
    {
        "_id": "Levocabastina",
        "Group": ["Anti-histamínicos"],
        "FDACategory": "C",
        "OtherInfo": "Por períodos curtos não parecem induzir teratogenicidade; os produtores recomendam evitar a cetirizina, desloratadina, hidroxizina, loratadina e mizolastina por toxicidade embrionária em animais. Os anti-histamínicos sedativos no final do 3º trimestre podem causar efeitos adversos no RN."
    }
    );
this.database.put(
    {
        "_id": "Levocetirizina",
        "Group": ["Anti-histamínicos"],
        "FDACategory": "C",
        "OtherInfo": "Por períodos curtos não parecem induzir teratogenicidade; os produtores recomendam evitar a cetirizina, desloratadina, hidroxizina, loratadina e mizolastina por toxicidade embrionária em animais. Os anti-histamínicos sedativos no final do 3º trimestre podem causar efeitos adversos no RN."
    }
    );
this.database.put(
    {
        "_id": "Loratadina",
        "Group": ["Anti-histamínicos"],
        "FDACategory": "B",
        "OtherInfo": "Embriotóxica em estudos animais com múltiplos da dose usada no homem. Não há associação a malformações na espécie humana. Usar apenas se for claramente necessário."
    }
    );
this.database.put(
    {
        "_id": "Meclozina",
        "Group": ["Anti-histamínicos"],
        "FDACategory": "C",
        "OtherInfo": "Por períodos curtos não parecem induzir teratogenicidade; os produtores recomendam evitar a cetirizina, desloratadina, hidroxizina, loratadina e mizolastina por toxicidade embrionária em animais. Os anti-histamínicos sedativos no final do 3º trimestre podem causar efeitos adversos no RN."
    }
    );
this.database.put(
    {
        "_id": "Mequitazina",
        "Group": ["Anti-histamínicos"],
        "FDACategory": "C",
        "OtherInfo": "Por períodos curtos não parecem induzir teratogenicidade; os produtores recomendam evitar a cetirizina, desloratadina, hidroxizina, loratadina e mizolastina por toxicidade embrionária em animais. Os anti-histamínicos sedativos no final do 3º trimestre podem causar efeitos adversos no RN."
    }
    );
this.database.put(
    {
        "_id": "Metopina",
        "Group": ["Anti-histamínicos"],
        "FDACategory": "C",
        "OtherInfo": "Por períodos curtos não parecem induzir teratogenicidade; os produtores recomendam evitar a cetirizina, desloratadina, hidroxizina, loratadina e mizolastina por toxicidade embrionária em animais. Os anti-histamínicos sedativos no final do 3º trimestre podem causar efeitos adversos no RN."
    }
    );
this.database.put(
    {
        "_id": "Mizolastina",
        "Group": ["Anti-histamínicos"],
        "FDACategory": "C",
        "OtherInfo": "Por períodos curtos não parecem induzir teratogenicidade; os produtores recomendam evitar a cetirizina, desloratadina, hidroxizina, loratadina e mizolastina por toxicidade embrionária em animais. Os anti-histamínicos sedativos no final do 3º trimestre podem causar efeitos adversos no RN."
    }
    );
this.database.put(
    {
        "_id": "Nedocromil sódico",
        "Group": ["Anti-histamínicos"],
        "FDACategory": "C",
        "OtherInfo": "Por períodos curtos não parecem induzir teratogenicidade; os produtores recomendam evitar a cetirizina, desloratadina, hidroxizina, loratadina e mizolastina por toxicidade embrionária em animais. Os anti-histamínicos sedativos no final do 3º trimestre podem causar efeitos adversos no RN."
    }
    );
this.database.put(
    {
        "_id": "Olopatadina",
        "Group": ["Anti-histamínicos"],
        "FDACategory": "C",
        "OtherInfo": "Por períodos curtos não parecem induzir teratogenicidade; os produtores recomendam evitar a cetirizina, desloratadina, hidroxizina, loratadina e mizolastina por toxicidade embrionária em animais. Os anti-histamínicos sedativos no final do 3º trimestre podem causar efeitos adversos no RN."
    }
    );
this.database.put(
    {
        "_id": "Prometazina",
        "Group": ["Anti-histamínicos"],
        "FDACategory": "C",
        "OtherInfo": "Por períodos curtos não parecem induzir teratogenicidade; os produtores recomendam evitar a cetirizina, desloratadina, hidroxizina, loratadina e mizolastina por toxicidade embrionária em animais. Os anti-histamínicos sedativos no final do 3º trimestre podem causar efeitos adversos no RN."
    }
    );
this.database.put(
    {
        "_id": "Rupatadina",
        "Group": ["Anti-histamínicos"],
        "FDACategory": "C",
        "OtherInfo": "Desconhece-se a segurança durante a gravidez; só deve ser usado durante a gravidez quando os potenciais benefícios justifiquem os possíveis riscos."
    }
    );
this.database.put(
    {
        "_id": "Terfenadina",
        "Group": ["Anti-histamínicos"],
        "FDACategory": "C",
        "OtherInfo": "Por períodos curtos não parecem induzir teratogenicidade; os produtores recomendam evitar a cetirizina, desloratadina, hidroxizina, loratadina e mizolastina por toxicidade embrionária em animais. Os anti-histamínicos sedativos no final do 3º trimestre podem causar efeitos adversos no RN."
    }
    );
this.database.put(
    {
        "_id": "Triprolidina",
        "Group": ["Anti-histamínicos"],
        "FDACategory": "C",
        "OtherInfo": "Não há evidência de malformações congénitas."
    }
    );
this.database.put(
    {
        "_id": "Omeprazol",
        "Group": ["Inibidores da Bomba de Protões"],
        "FDACategory": "C",
        "OtherInfo": "Nunca foram descritas anomalias no feto humano, apesar de terem sido observados tumores gástricos em ratos que receberam doses muito elevados do fármaco."
    }
    );
this.database.put(
    {
        "_id": "Pantoprazol",
        "Group": ["Inibidores da Bomba de Protões"],
        "FDACategory": "B",
        "OtherInfo": "Nunca foram descritas anomalias no feto humano, apesar de terem sido observados tumores gástricos em ratos que receberam doses muito elevados do fármaco."
    }
    );
this.database.put(
    {
        "_id": "Esomeprazol",
        "Group": ["Inibidores da Bomba de Protões"],
        "FDACategory": "C",
        "OtherInfo": "Não existe informação disponível, pelo que se recomenda precaução e substituição por pantoprazol (categoria B)"
    }
    );
this.database.put(
    {
        "_id": "Cimetidina",
        "Group": ["Anti-secretórios"],
        "FDACategory": "B",
        "OtherInfo": "Nunca foram descritas anomalias no feto humano, apesar de terem sido observados tumores gástricos em ratos que receberam doses muito elevados do fármaco."
    }
    );
this.database.put(
    {
        "_id": "Dimendrinato",
        "Group": ["Anti-eméticos"],
        "FDACategory": "B",
        "OtherInfo": "Nunca foram descritas anomalias no feto humano, apesar de terem sido observados tumores gástricos em ratos que receberam doses muito elevados do fármaco."
    }
    );
this.database.put(
    {
        "_id": "Metoclopramida",
        "Group": ["Anti-eméticos"],
        "FDACategory": "B",
        "OtherInfo": "Nunca foram descritas anomalias no feto humano, apesar de terem sido observados tumores gástricos em ratos que receberam doses muito elevados do fármaco."
    }
    );
this.database.put(
    {
        "_id": "Meclizina",
        "Group": ["Anti-eméticos"],
        "FDACategory": "B",
        "OtherInfo": "Nunca foram descritas anomalias no feto humano, apesar de terem sido observados tumores gástricos em ratos que receberam doses muito elevados do fármaco."
    }
    );
this.database.put(
    {
        "_id": "Buclizina",
        "Group": ["Anti-eméticos"],
        "FDACategory": "C",
        "OtherInfo": "Uma vez que não estão bem estudados os efeitos no feto humano, recomendam-se os anti-eméticos da categoria B (dimendrinato, metoclopramida, meclizina)"
    }
    );
this.database.put(
    {
        "_id": "Proclorperazina",
        "Group": ["Anti-eméticos"],
        "FDACategory": "C",
        "OtherInfo": "Uma vez que não estão bem estudados os efeitos no feto humano, recomendam-se os anti-eméticos da categoria B (dimendrinato, metoclopramida, meclizina)"
    }
    );
this.database.put(
    {
        "_id": "Trimetobenzamida",
        "Group": ["Anti-eméticos"],
        "FDACategory": "C",
        "OtherInfo": "Uma vez que não estão bem estudados os efeitos no feto humano, recomendam-se os anti-eméticos da categoria B (dimendrinato, metoclopramida, meclizina)"
    }
    );
this.database.put(
    {
        "_id": "Lactulose",
        "Group": ["Laxantes"],
        "FDACategory": "B"
    }
    );
this.database.put(
    {
        "_id": "Senna",
        "Group": ["Laxantes"],
        "FDACategory": "C"
    }
    );
this.database.put(
    {
        "_id": "Loperamida",
        "Group": ["Anti-diarreicos"],
        "FDACategory": "B"
    }
    );
this.database.put(
    {
        "_id": "Sinvastatina",
        "Group": ["Estatinas"],
        "FDACategory": "X",
        "OtherInfo": "Utilizados no tratamento da hipercolesterolémia. Não parecem constituir risco significativo para o feto, mesmo quando usados no início da gravidez. No entanto, dado ser ainda muito escassa a informação sobre a sua utilização na espécie humana, a terapêutica com estes agentes deve ser suspensa antes da gravidez ou logo que esta seja reconhecida. Por estas razões, em 2008 a FDA ainda os classificou na categoria X. Devem utilizar-se a colestiramina (categoria B) e o clofibrato (categoria C)."
    }
    );
this.database.put(
    {
        "_id": "Atorvastatina",
        "Group": ["Estatinas"],
        "FDACategory": "X",
        "OtherInfo": "Utilizados no tratamento da hipercolesterolémia. Não parecem constituir risco significativo para o feto, mesmo quando usados no início da gravidez. No entanto, dado ser ainda muito escassa a informação sobre a sua utilização na espécie humana, a terapêutica com estes agentes deve ser suspensa antes da gravidez ou logo que esta seja reconhecida. Por estas razões, em 2008 a FDA ainda os classificou na categoria X. Devem utilizar-se a colestiramina (categoria B) e o clofibrato (categoria C)."
    }
    );
this.database.put(
    {
        "_id": "Lovastatina",
        "Group": ["Estatinas"],
        "FDACategory": "X",
        "OtherInfo": "Utilizados no tratamento da hipercolesterolémia. Não parecem constituir risco significativo para o feto, mesmo quando usados no início da gravidez. No entanto, dado ser ainda muito escassa a informação sobre a sua utilização na espécie humana, a terapêutica com estes agentes deve ser suspensa antes da gravidez ou logo que esta seja reconhecida. Por estas razões, em 2008 a FDA ainda os classificou na categoria X. Devem utilizar-se a colestiramina (categoria B) e o clofibrato (categoria C)."
    }
    );
this.database.put(
    {
        "_id": "Provastatina",
        "Group": ["Estatinas"],
        "FDACategory": "X",
        "OtherInfo": "Utilizados no tratamento da hipercolesterolémia. Não parecem constituir risco significativo para o feto, mesmo quando usados no início da gravidez. No entanto, dado ser ainda muito escassa a informação sobre a sua utilização na espécie humana, a terapêutica com estes agentes deve ser suspensa antes da gravidez ou logo que esta seja reconhecida. Por estas razões, em 2008 a FDA ainda os classificou na categoria X. Devem utilizar-se a colestiramina (categoria B) e o clofibrato (categoria C)."
    }
    );
this.database.put(
    {
        "_id": "Rosuvastatina",
        "Group": ["Estatinas"],
        "FDACategory": "X",
        "OtherInfo": "Utilizados no tratamento da hipercolesterolémia. Não parecem constituir risco significativo para o feto, mesmo quando usados no início da gravidez. No entanto, dado ser ainda muito escassa a informação sobre a sua utilização na espécie humana, a terapêutica com estes agentes deve ser suspensa antes da gravidez ou logo que esta seja reconhecida. Por estas razões, em 2008 a FDA ainda os classificou na categoria X. Devem utilizar-se a colestiramina (categoria B) e o clofibrato (categoria C)."
    }
    );
this.database.put(
    {
        "_id": "Colestiramina",
        "Group": ["Resinas"],
        "FDACategory": "B",
        "OtherInfo": "Utilizada no tratamento da hipercolesterolémia ao invés das estatinas, que são classificadas na categoria X."
    }
    );
this.database.put(
    {
        "_id": "Clofibrato",
        "Group": ["Fibratos"],
        "FDACategory": "C",
        "OtherInfo": "Utilizado no tratamento da hipercolesterolémia ao invés das estatinas, que são classificadas na categoria X."
    }
    );
this.database.put(
    {
        "_id": "Lítio",
        "Group": ["Anti-psicóticos"],
        "FDACategory": "D",
        "OtherInfo": "O uso do lítio deverá ser ponderado, apesar de atualmente se reconhecer que a sua associação ao síndrome de Ebstein constitui um risco muito reduzido. "
    }
    );
this.database.put(
    {
        "_id": "Diazepam",
        "Group": ["Sedativos"],
        "FDACategory": "D",
        "OtherInfo": "As benzodiazepinas foram implicadas na ocorrência de anomalias faciais (fenda palatina, lábio leporino, assimetria facial, etc.) e cardiovasculares, mas tal não foi confirmado em estudos subsequentes. Outros investigadores encontraram uma associação entre o uso de diazepam no primeiro trimestre e a maior ocorrência de hérnia inguinal e de estenose pilórica nos recém-nascidos, mas não existem ensaios devidamente controlados que confirmem uma relação direta entre a utilização das benzodiazepinas pela grávida e anomalias fetais. Assim, este grupo de fármacos não deve ser considerado potencialmente teratogénico. No entanto, deve ter-se em conta que, quando administrados muito perto do parto, podem provocar no recém-nascido alterações transitórias: hipotonia, hipotermia, depressão respiratória e dificuldades de sucção."
    }
    );
this.database.put(
    {
        "_id": "Amitriptilina",
        "Group": ["Anti-depressivos"],
        "FDACategory": "C",
        "OtherInfo": "A amitriptilina e a imipramina não têm efeitos teratogénicos, se bem que tenham sido descritas anomalias dos membros, o que não foi ulteriormente confirmado. Não se encontra alterado o desenvolvimento neurocomportamental das crianças submetidas ao efeito destes fármacos durante a vida fetal."
    }
    );
this.database.put(
    {
        "_id": "Imipramina",
        "Group": ["Anti-depressivos"],
        "FDACategory": "C",
        "OtherInfo": "A amitriptilina e a imipramina não têm efeitos teratogénicos, se bem que tenham sido descritas anomalias dos membros, o que não foi ulteriormente confirmado. Não se encontra alterado o desenvolvimento neurocomportamental das crianças submetidas ao efeito destes fármacos durante a vida fetal."
    }
    );
this.database.put(
    {
        "_id": "Inibidores da MAO",
        "Group": ["Anti-depressivos"],
        "FDACategory": "D",
        "OtherInfo": "Não devem ser prescritos durante a gestação pelas reacções secundárias potenciais, pelo que não existem estudos adequados sobre os seus efeitos sobre o feto."
    }
    );
this.database.put(
    {
        "_id": "Fluoxetina",
        "Group": ["Anti-depressivos"],
        "FDACategory": "C",
        "OtherInfo": "A fluoxetina é o antidepressivo inibidor seletivo da serotonina melhor estudado. A incidência de anomalias fetais não é superior à esperada na população em geral.A terapêutica com estes fármacos deve ser suspensa na segunda metade da gravidez por induzir uma maior ocorrência de RCIU (Restrição do Crescimento Fetal Intra-uterino), parto pré-termo, síndrome neonatal da serotonina, sintomas de privação e dificuldade respiratória do recém-nascido."
    }
    );
this.database.put(
    {
        "_id": "Sertralina",
        "Group": ["Anti-depressivos"],
        "FDACategory": "C",
        "OtherInfo": "Não está associada a defeitos congénitos. A terapêutica com estes fármacos deve ser suspensa na segunda metade da gravidez por induzir uma maior ocorrência de RCIU (Restrição do Crescimento Fetal Intra-uterino), parto pré-termo, síndrome neonatal da serotonina, sintomas de privação e dificuldade respiratória do recém-nascido."
    }
    );
this.database.put(
    {
        "_id": "Paroxetina",
        "Group": ["Anti-depressivos"],
        "FDACategory": "D",
        "OtherInfo": "Quando administrada no primeiro trimestre associa-se a duplicação do risco de anomalias cardíacas e, possivelmente, a anencefalia, gastrosquisis e onfalocelo. Por estas razões, aliadas aos efeitos fetais/neonatais comuns à sertralina e fluoxetina (maior ocorrência de RCIU (Restrição do Crescimento Fetal Intra-uterino), parto pré-termo, síndrome neonatal da serotonina, sintomas de privação e dificuldade respiratória do recém-nascido quando administrados na segunda metade da gravidez) deverão ser muito bem ponderados os riscos relativamente aos benefícios quando for tomada a administração de paroxetina durante a gravidez."
    }
    );
this.database.put(
    {
        "_id": "Tioridazina",
        "Group": ["Anti-psicóticos"],
        "FDACategory": "C",
        "OtherInfo": "Mostraram-se inócuas para o feto em vários ensaios epidemiológicos."
    }
    );
this.database.put(
    {
        "_id": "Trifluoperazina",
        "Group": ["Anti-psicóticos"],
        "FDACategory": "C",
        "OtherInfo": "São muito limitados os estudos sobre os efeitos no embrião e no feto destes medicamentos, pelo que a sua utilização durante a gravidez não poderá deixar de ser muito bem ponderada."
    }
    );
this.database.put(
    {
        "_id": "Haloperidol",
        "Group": ["Anti-psicóticos"],
        "FDACategory": "C",
        "OtherInfo": "São muito limitados os estudos sobre os efeitos no embrião e no feto destes medicamentos, pelo que a sua utilização durante a gravidez não poderá deixar de ser muito bem ponderada."
    }
    );
this.database.put(
    {
        "_id": "Tiotixeno",
        "Group": ["Anti-psicóticos"],
        "FDACategory": "C",
        "OtherInfo": "São muito limitados os estudos sobre os efeitos no embrião e no feto destes medicamentos, pelo que a sua utilização durante a gravidez não poderá deixar de ser muito bem ponderada."
    }
    );
this.database.put(
    {
        "_id": "Loxapine",
        "Group": ["Anti-psicóticos"],
        "FDACategory": "C",
        "OtherInfo": "São muito limitados os estudos sobre os efeitos no embrião e no feto destes medicamentos, pelo que a sua utilização durante a gravidez não poderá deixar de ser muito bem ponderada."
    }
    );
this.database.put(
    {
        "_id": "Clorprotixene",
        "Group": ["Anti-psicóticos"],
        "FDACategory": "C",
        "OtherInfo": "São muito limitados os estudos sobre os efeitos no embrião e no feto destes medicamentos, pelo que a sua utilização durante a gravidez não poderá deixar de ser muito bem ponderada."
    }
    );
this.database.put(
    {
        "_id": "Aspirina / ácido acetilsalicílico",
        "Group": ["Analgésicos","Anti-agregantes plaquetários"],
        "FDACategory": "C",
        "OtherInfo": "A aspirina está disponível há mais de um século e tem sido largamente usada na gravidez sem ocorrerem malformações fetais significativas. No entanto, pelo seu efeito inibidor da sintetase das prostaglandinas e por poder ser responsável por síndromes hemorrágicos devido à alteração da agregação plaquetária, o seu uso prolongado de pequenas doses de aspirina (1-2 mg/kg de peso da grávida) tem sido aproveitado para promover um moderado efeito anti-coagulante em gestantes com risco aumentado de tromboembolismo."
    }
    );
this.database.put(
    {
        "_id": "Ibuprofeno",
        "Group": ["Anti-inflamatórios Não-Esteróides","AINEs"],
        "FDACategory": "B",
        "OtherInfo": "Todos os AINE são importantes inibidores da sintetase das prostaglandinas, podendo provocar constrição do canal arterial e acentuada redução do volume do líquido amniótico, pelo que se deve evitar o seu uso, principalmente depois da 32ª semana e por períodos superiores a três dias. Se estas indicações forem seguidas, os efeitos adversos são pouco intensos e reversíveis. A indometacina é o fármaco mais utilizado na gravidez por ter uma potente ação tocolítica."
    }
    );
this.database.put(
    {
        "_id": "Indometacina",
        "Group": ["Anti-inflamatórios Não-Esteróides","AINEs"],
        "FDACategory": "B",
        "OtherInfo": "A indometacina é o fármaco mais utilizado na gravidez por ter uma potente ação tocolítica. Todos os AINE são importantes inibidores da sintetase das prostaglandinas, podendo provocar constrição do canal arterial e acentuada redução do volume do líquido amniótico, pelo que se deve evitar o seu uso, principalmente depois da 32ª semana e por períodos superiores a três dias. Se estas indicações forem seguidas, os efeitos adversos são pouco intensos e reversíveis."
    }
    );
this.database.put(
    {
        "_id": "Diclofenac",
        "Group": ["Anti-inflamatórios Não-Esteróides","AINEs"],
        "FDACategory": "B",
        "OtherInfo": "Todos os AINE são importantes inibidores da sintetase das prostaglandinas, podendo provocar constrição do canal arterial e acentuada redução do volume do líquido amniótico, pelo que se deve evitar o seu uso, principalmente depois da 32ª semana e por períodos superiores a três dias. Se estas indicações forem seguidas, os efeitos adversos são pouco intensos e reversíveis. A indometacina é o fármaco mais utilizado na gravidez por ter uma potente ação tocolítica."
    }
    );
this.database.put(
    {
        "_id": "Sulindac",
        "Group": ["Anti-inflamatórios Não-Esteróides","AINEs"],
        "FDACategory": "B",
        "OtherInfo": "Todos os AINE são importantes inibidores da sintetase das prostaglandinas, podendo provocar constrição do canal arterial e acentuada redução do volume do líquido amniótico, pelo que se deve evitar o seu uso, principalmente depois da 32ª semana e por períodos superiores a três dias. Se estas indicações forem seguidas, os efeitos adversos são pouco intensos e reversíveis. A indometacina é o fármaco mais utilizado na gravidez por ter uma potente ação tocolítica. "
    }
    );
this.database.put(
    {
        "_id": "Meperidina",
        "Group": ["Analgésicos"],
        "FDACategory": "B",
        "OtherInfo": "A meperidina é frequentemente usada para a analgesia do parto, podendo provocar depressão respiratória neonatal, reversível pela naloxona. De uma forma geral, não estão descritas malformações causadas pelos narcóticos."
    }
    );
this.database.put(
    {
        "_id": "Levotiroxina",
        "Group": ["Hormonas tiroideias"],
        "FDACategory": "A",
        "OtherInfo": "Atravessa escassamente a placenta e não está associada a anomalias fetais."
    }
    );
this.database.put(
    {
        "_id": "Propiltiouracilo / PTU",
        "Group": ["Anti-tiroideus"],
        "FDACategory": "D",
        "OtherInfo": "Pode provocar hipotiroidismo no feto, mas essa complicação não é muito frequente quando utilizadas as posologias mais comuns. Apesar de estar incluído na categoria D, o PTU é considerado o fármaco de primeira escolha para tratar o hipertiroidismo durante a gravidez."
    }
    );
this.database.put(
    {
        "_id": "Iodeto de Potássio",
        "Group": ["Anti-tiroideus"],
        "FDACategory": "D",
        "OtherInfo": "Bloqueia a libertação de hormonas tiroideias, podendo provocar no feto bócio hipotiroideu, mas este efeito é pouco provável quando os iodetos são administrados à grávida de um modo agudo."
    }
    );
this.database.put(
    {
        "_id": "Hidrocortisona",
        "Group": ["Corticóides"],
        "FDACategory": "C",
        "OtherInfo": "A utilização dos corticosteróides na gravidez é isenta de efeitos adversos para o feto."
    }
    );
this.database.put(
    {
        "_id": "Azatioprina",
        "Group": ["Imunossupressores"],
        "FDACategory": "D",
        "OtherInfo": "Não há estudos definitivos sobre os seus efeitos embrio-fetais mas, tendo em conta que ~´e um fármaco imprescindível para prevenir a rejeição dos transplantes, a sua administração não deve ser suspensa na gravidez."
    }
    );
this.database.put(
    {
        "_id": "Ciclosporina",
        "Group": ["Imunossupressores"],
        "FDACategory": "C",
        "OtherInfo": "Não é teratogénica nos animais e não foram registadas anomalias na espécie humana."
    }
    );
this.database.put(
    {
        "_id": "Micofenolato mofetil",
        "Group": ["Imunossupressores"],
        "FDACategory": "D",
        "OtherInfo": "Risco teratogénico importante comprovado em estudos animais; deve fazer-se contracepção eficaz durante o tratamento e durante 6 semanas após interrupção da terapêutica."
    }
    );
this.database.put(
    {
        "_id": "Mifepristona",
        "Group": ["Antiprogestogénios"],
        "FDACategory": "X",
        "OtherInfo": "Utilizado para interromper a gravidez nos dois primeiros trimestres, geralmente em associação com o misoprostol. Tem efeitos teratogénicos no coelho, especialmente ao nível do pólo cefálico e do SNC. Não estão disponíveis dados sobre a teratogenicidade na espécie humana, mas as mulheres que serão sujeitas ao fármaco deverão ser alertadas para a possibilidade de efeitos embrio-tóxicos."
    }
    );
this.database.put(
    {
        "_id": "Misoprostol",
        "Group": ["Antiprogestogénios"],
        "FDACategory": "X",
        "OtherInfo": "Provoca contractilidade uterina e amadurecimento do colo do útero, pelo que é utilizado para provocar o abortamento do segundo trimestre e induzid o trabalho de parto. Associado à mifepristona é utilizado para a interrupção legal da gravidez no primeiro e início do segundo trimestres."
    }
    );
this.database.put(
    {
        "_id": "Tabaco",
        "Group": ["Tabaco"],
        "FDACategory": "X",
        "OtherInfo": "Os hábitos tabágicos maternos (mais de cinco cigarros por dia) interferem com o crescimento fetal, observando-se uma diminuição média de 200g no peso dos recém-nascidos das mães fumadoras quando comparados aos filhos de não fumadoras com o mesmo tempo de gestação, sendo este efeito dose-dependente. A nicotina e o monóxido de carbono passam a barreira placentária, sendo as suas concentrações no feto 10-15% superiores às da mãe. A causa do deficiente crescimento fetal é a isquémia e hipoxémia produzidas pela nicotina, com potentes efeitos vaso-constritores, e pelo monóxido de carbono, que compete com a ligação do oxigénio à hemoglobina. Os efeitos imediatos, a nível fetal, após a grávida fumar um cigarro, são: taquicardia fetal mantida durante pelo menos 10 minutos, diminuição da variabilidade de frequência cardíaca fetal e quase completa abolição dos movimentos do feto. O tabagismo materno associa-se ainda ao aumento de incidência de abordos no segundo trimestre, descolamento prematuro da placenta, parto pré-termo, rotura prematura das membranas e aumento da morbilidade/mortalidade perinatais."
    }
    );
this.database.put(
    {
        "_id": "Nicotina",
        "Group": ["Tabaco"],
        "FDACategory": "X",
        "OtherInfo": "Os hábitos tabágicos maternos (mais de cinco cigarros por dia) interferem com o crescimento fetal, observando-se uma diminuição média de 200g no peso dos recém-nascidos das mães fumadoras quando comparados aos filhos de não fumadoras com o mesmo tempo de gestação, sendo este efeito dose-dependente. A nicotina e o monóxido de carbono passam a barreira placentária, sendo as suas concentrações no feto 10-15% superiores às da mãe. A causa do deficiente crescimento fetal é a isquémia e hipoxémia produzidas pela nicotina, com potentes efeitos vaso-constritores, e pelo monóxido de carbono, que compete com a ligação do oxigénio à hemoglobina. Os efeitos imediatos, a nível fetal, após a grávida fumar um cigarro, são: taquicardia fetal mantida durante pelo menos 10 minutos, diminuição da variabilidade de frequência cardíaca fetal e quase completa abolição dos movimentos do feto."
    }
    );
this.database.put(
    {
        "_id": "Cafeína",
        "Group": ["Cafeína"],
        "OtherInfo": "A ingestão de mais de 300mg/dia de cafeína (um café contém 75mg de cafeína, logo 3-4 chávenas de café ou volme equivalente de bebidas contendo cafeína, como as de cola) pode afetar o normal crescimento fetal. Num ensaio prospetivo, Weng e col. mostraram que duplica o risco de abortamento precoce em grávidas que tomavam mais de 200mg/dia de cafeína. "
    }
    );
};