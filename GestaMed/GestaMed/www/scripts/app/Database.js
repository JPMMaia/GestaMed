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
            "Group": ["Anticonvulsionantes","Antiepilépticos"],
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
            "Group": ["Antibióticos"],
            "FDACategory": "X",
            "OtherInfo": "A ribavirina, administrada em nebulizações para tratar infeções respiratórias pelo vírus sincicial respiratório em crianças, tem importantes efeitos teratogénicos nos roedores. Por não ter sido testada na espécie humana, considera-se o seu uso formalmente contra-indicado durante a gestação, devendo ter-se o cuidado de as grávidas não contactarem de perto com o ambiente onde são administrados os aerossóis. Também é recomendado que, quando qualquer um dos membros do casal tiver sido tratado com ribavirina, a gravidez seja diferida por seis meses após o final do tratamento. É recomendado que, quando um dos membros do casal tiver sido tratado com ribavirina, a gravidez seja diferida por seis meses após o final do tratamento. "
        }
        );
    this.database.put(
        {
            "_id": "Quinino",
            "Group": ["Antibióticos","Antimaláricos"],
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
};